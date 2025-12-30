'use client'

import { useUser } from '@clerk/nextjs'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Users, TrendingUp, Award, BookOpen, Search, Download, Filter, BarChart3 } from 'lucide-react'

interface UserProgress {
  userId: string
  email: string
  name: string
  imageUrl: string
  completedLessons: string[]
  achievements: string[]
  points: number
  streak: number
  lastActive: string
  createdAt: string
}

export default function AdminDashboard() {
  const { user, isLoaded } = useUser()
  const [users, setUsers] = useState<UserProgress[]>([])
  const [filteredUsers, setFilteredUsers] = useState<UserProgress[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'points' | 'lessons' | 'recent'>('points')
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalLessons: 0,
    averageProgress: 0,
    activeToday: 0
  })

  // Admin email check
  const adminEmails = ['kaarthii009.g@gmail.com', 'karthii009.g@gmail.com']
  const isAdmin = user?.emailAddresses[0]?.emailAddress && adminEmails.includes(user.emailAddresses[0].emailAddress)

  useEffect(() => {
    if (isLoaded && isAdmin) {
      fetchAllUsers()
    }
  }, [isLoaded, isAdmin])

  useEffect(() => {
    // Filter and sort users
    let filtered = users.filter(u => 
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'points') return b.points - a.points
      if (sortBy === 'lessons') return b.completedLessons.length - a.completedLessons.length
      if (sortBy === 'recent') return new Date(b.lastActive).getTime() - new Date(a.lastActive).getTime()
      return 0
    })

    setFilteredUsers(filtered)
  }, [searchTerm, sortBy, users])

  const fetchAllUsers = async () => {
    try {
      const response = await fetch('/api/admin/users')
      const data = await response.json()
      
      if (data.users) {
        setUsers(data.users)
        setFilteredUsers(data.users)
        
        // Calculate stats
        const totalLessons = data.users.reduce((sum: number, u: UserProgress) => sum + u.completedLessons.length, 0)
        const activeToday = data.users.filter((u: UserProgress) => {
          const lastActive = new Date(u.lastActive)
          const today = new Date()
          return lastActive.toDateString() === today.toDateString()
        }).length

        setStats({
          totalUsers: data.users.length,
          totalLessons,
          averageProgress: data.users.length > 0 ? Math.round(totalLessons / data.users.length) : 0,
          activeToday
        })
      }
    } catch (error) {
      console.error('Failed to fetch users:', error)
    } finally {
      setLoading(false)
    }
  }

  const exportData = () => {
    const csv = [
      ['Name', 'Email', 'Completed Lessons', 'Points', 'Streak', 'Achievements', 'Last Active'].join(','),
      ...filteredUsers.map(u => [
        u.name,
        u.email,
        u.completedLessons.length,
        u.points,
        u.streak,
        u.achievements.length,
        u.lastActive
      ].join(','))
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `user-progress-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  const deleteAllUsers = async () => {
    if (!confirm('⚠️ WARNING: This will delete ALL users except admins. This action cannot be undone. Are you sure?')) {
      return
    }

    if (!confirm('Final confirmation: Delete all non-admin users?')) {
      return
    }

    try {
      setLoading(true)
      const response = await fetch('/api/admin/delete-users', {
        method: 'DELETE'
      })
      
      const data = await response.json()
      
      if (data.success) {
        alert(`✅ Successfully deleted ${data.deletedCount} users`)
        fetchAllUsers() // Refresh the list
      } else {
        alert(`❌ Error: ${data.error}`)
      }
    } catch (error) {
      console.error('Failed to delete users:', error)
      alert('❌ Failed to delete users')
    } finally {
      setLoading(false)
    }
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-950">
        <Navbar />
        <Sidebar />
        <main className="ml-0 md:ml-64 pt-16 pb-20">
          <div className="max-w-4xl mx-auto px-6 py-20 text-center">
            <h1 className="text-4xl font-bold text-red-500 mb-4">Access Denied</h1>
            <p className="text-gray-400">You don&apos;t have permission to access this page.</p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 pb-20">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-gradient">Admin Dashboard</span>
            </h1>
            <p className="text-gray-400">Manage users and track platform analytics</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="card-gradient border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Users className="h-8 w-8 text-blue-500" />
                <span className="text-2xl font-bold">{stats.totalUsers}</span>
              </div>
              <h3 className="text-gray-400 text-sm">Total Users</h3>
            </div>

            <div className="card-gradient border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="h-8 w-8 text-green-500" />
                <span className="text-2xl font-bold">{stats.totalLessons}</span>
              </div>
              <h3 className="text-gray-400 text-sm">Lessons Completed</h3>
            </div>

            <div className="card-gradient border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="h-8 w-8 text-purple-500" />
                <span className="text-2xl font-bold">{stats.averageProgress}</span>
              </div>
              <h3 className="text-gray-400 text-sm">Avg Lessons/User</h3>
            </div>

            <div className="card-gradient border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Award className="h-8 w-8 text-yellow-500" />
                <span className="text-2xl font-bold">{stats.activeToday}</span>
              </div>
              <h3 className="text-gray-400 text-sm">Active Today</h3>
            </div>
          </div>

          {/* Controls */}
          <div className="card-gradient border border-gray-700 rounded-xl p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 w-full md:max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search users by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="points">Sort by Points</option>
                  <option value="lessons">Sort by Lessons</option>
                  <option value="recent">Sort by Recent</option>
                </select>

                <button
                  onClick={deleteAllUsers}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition"
                >
                  🗑️ Delete All Users
                </button>

                <button
                  onClick={exportData}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90 transition"
                >
                  <Download className="h-4 w-4" />
                  Export CSV
                </button>
              </div>
            </div>
          </div>

          {/* Users Table */}
          <div className="card-gradient border border-gray-700 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800 border-b border-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">User</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Lessons</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Points</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Streak</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Achievements</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Last Active</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {loading ? (
                    <tr>
                      <td colSpan={8} className="px-6 py-12 text-center text-gray-400">
                        Loading users...
                      </td>
                    </tr>
                  ) : filteredUsers.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="px-6 py-12 text-center text-gray-400">
                        No users found
                      </td>
                    </tr>
                  ) : (
                    filteredUsers.map((userProgress) => (
                      <tr key={userProgress.userId} className="hover:bg-gray-800/50 transition">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <Image
                              src={userProgress.imageUrl || '/default-avatar.svg'}
                              alt={userProgress.name}
                              width={40}
                              height={40}
                              className="rounded-full border-2 border-gray-700"
                            />
                            <div>
                              <div className="font-medium">{userProgress.name}</div>
                              <div className="text-xs text-gray-500">ID: {userProgress.userId.slice(0, 8)}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-400">{userProgress.email}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium">
                            {userProgress.completedLessons.length}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium">
                            {userProgress.points}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium">
                            🔥 {userProgress.streak}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-medium">
                            🏆 {userProgress.achievements.length}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-400">
                          {new Date(userProgress.lastActive).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => {
                              alert(`User Details:\n\nName: ${userProgress.name}\nEmail: ${userProgress.email}\nCompleted Lessons: ${userProgress.completedLessons.join(', ')}\nAchievements: ${userProgress.achievements.join(', ')}`)
                            }}
                            className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 rounded-lg transition"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
