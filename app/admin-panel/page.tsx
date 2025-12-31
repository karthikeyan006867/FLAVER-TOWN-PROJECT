'use client'

import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { 
  Users, BarChart3, Award, Settings, Bell, Database, 
  Activity, TrendingUp, BookOpen, Shield, Download, 
  Upload, Mail, Tag, Lock, Trash2, RefreshCw, Search,
  UserPlus, UserMinus, CheckCircle, XCircle, AlertCircle
} from 'lucide-react'

export default function AdminPage() {
  const { user, isLoaded } = useUser()
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')
  const [stats, setStats] = useState<any>(null)
  const [users, setUsers] = useState<any[]>([])
  const [selectedUser, setSelectedUser] = useState<any>(null)

  const checkAdminStatus = async () => {
    if (!isLoaded || !user) {
      setLoading(false)
      return
    }

    try {
      const res = await fetch('/api/admin/check')
      const data = await res.json()
      
      if (data.isAdmin) {
        setIsAdmin(true)
        loadStats()
        loadUsers()
      } else {
        router.push('/dashboard')
      }
    } catch (error) {
      console.error('Error checking admin status:', error)
      router.push('/dashboard')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkAdminStatus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, user])

  const loadStats = async () => {
    try {
      const res = await fetch('/api/admin/analytics/stats')
      const data = await res.json()
      setStats(data)
    } catch (error) {
      console.error('Error loading stats:', error)
    }
  }

  const loadUsers = async () => {
    try {
      const res = await fetch('/api/admin/users/list?limit=50')
      const data = await res.json()
      setUsers(data.users || [])
    } catch (error) {
      console.error('Error loading users:', error)
    }
  }

  const unlockLessons = async (userId: string, lessonIds: string[]) => {
    try {
      const res = await fetch('/api/admin/users/add-lessons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, lessonIds })
      })
      const data = await res.json()
      if (data.success) {
        alert(`Successfully unlocked ${data.added} lessons`)
        loadUsers()
      }
    } catch (error) {
      console.error('Error unlocking lessons:', error)
      alert('Failed to unlock lessons')
    }
  }

  const removeLessons = async (userId: string, lessonIds: string[]) => {
    try {
      const res = await fetch('/api/admin/users/remove-lessons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, lessonIds })
      })
      const data = await res.json()
      if (data.success) {
        alert(`Successfully removed ${data.removed} lessons`)
        loadUsers()
      }
    } catch (error) {
      console.error('Error removing lessons:', error)
    }
  }

  const updatePoints = async (userId: string, points: number, operation = 'set') => {
    try {
      const res = await fetch('/api/admin/users/update-points', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, points, operation })
      })
      const data = await res.json()
      if (data.success) {
        alert(`Points updated: ${data.previousPoints} → ${data.newPoints}`)
        loadUsers()
      }
    } catch (error) {
      console.error('Error updating points:', error)
    }
  }

  const resetProgress = async (userId: string, resetType = 'all') => {
    if (!confirm(`Are you sure you want to reset ${resetType}? This cannot be undone.`)) return

    try {
      const res = await fetch('/api/admin/users/reset-progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, resetType })
      })
      const data = await res.json()
      if (data.success) {
        alert(`Successfully reset ${resetType}`)
        loadUsers()
      }
    } catch (error) {
      console.error('Error resetting progress:', error)
    }
  }

  const exportData = async () => {
    try {
      const res = await fetch('/api/admin/export/users?format=json')
      const data = await res.json()
      
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `users-export-${Date.now()}.json`
      a.click()
    } catch (error) {
      console.error('Error exporting data:', error)
    }
  }

  const sendNotification = async (userId: string, message: string) => {
    try {
      const res = await fetch('/api/admin/notifications/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, message, type: 'info' })
      })
      const data = await res.json()
      if (data.success) {
        alert('Notification sent')
      }
    } catch (error) {
      console.error('Error sending notification:', error)
    }
  }

  const broadcastNotification = async (message: string) => {
    if (!confirm('Send notification to ALL users?')) return

    try {
      const res = await fetch('/api/admin/notifications/broadcast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, type: 'announcement' })
      })
      const data = await res.json()
      if (data.success) {
        alert(`Notification sent to ${data.sent} users`)
      }
    } catch (error) {
      console.error('Error broadcasting:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-12 h-12 animate-spin mx-auto mb-4 text-blue-500" />
          <p className="text-gray-600 dark:text-gray-400">Verifying admin access...</p>
        </div>
      </div>
    )
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Lock className="w-16 h-16 mx-auto mb-4 text-red-500" />
          <h1 className="text-2xl font-bold mb-2">Access Denied</h1>
          <p className="text-gray-600 dark:text-gray-400">You do not have admin privileges</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-500" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Complete platform management</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={exportData}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                <Download className="w-4 h-4" />
                Export Data
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Overview */}
      {stats && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Users</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.totalUsers}</p>
                </div>
                <Users className="w-12 h-12 text-blue-500" />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Active Users</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.activeUsers}</p>
                </div>
                <Activity className="w-12 h-12 text-green-500" />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Lessons</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.totalLessonsCompleted}</p>
                </div>
                <BookOpen className="w-12 h-12 text-purple-500" />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Points</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.totalPoints}</p>
                </div>
                <Award className="w-12 h-12 text-yellow-500" />
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-6">
            <div className="flex gap-4 p-4 border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
                  activeTab === 'overview'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <BarChart3 className="w-4 h-4 inline mr-2" />
                Overview
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
                  activeTab === 'users'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Users className="w-4 h-4 inline mr-2" />
                User Management
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
                  activeTab === 'analytics'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <TrendingUp className="w-4 h-4 inline mr-2" />
                Analytics
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
                  activeTab === 'notifications'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Bell className="w-4 h-4 inline mr-2" />
                Notifications
              </button>
              <button
                onClick={() => setActiveTab('system')}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
                  activeTab === 'system'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Settings className="w-4 h-4 inline mr-2" />
                System
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'users' && (
                <div>
                  <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">User Management</h2>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">User</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Lessons</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Points</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {users.map((user) => (
                          <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                            <td className="px-4 py-3">
                              <div>
                                <p className="font-medium text-gray-900 dark:text-white">
                                  {user.firstName} {user.lastName}
                                </p>
                                <p className="text-sm text-gray-500">{user.email}</p>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-gray-900 dark:text-white">
                              {user.metadata?.completedLessons?.length || 0}
                            </td>
                            <td className="px-4 py-3 text-gray-900 dark:text-white">
                              {user.metadata?.points || 0}
                            </td>
                            <td className="px-4 py-3">
                              <button
                                onClick={() => setSelectedUser(user)}
                                className="text-blue-500 hover:text-blue-700 text-sm font-medium"
                              >
                                Manage →
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Platform Overview</h2>
                  <div className="grid gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Average Progress</h3>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {stats.averageLessonsPerUser} lessons/user
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Average Points</h3>
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {stats.averagePointsPerUser} points/user
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Send Notifications</h2>
                  <button
                    onClick={() => {
                      const msg = prompt('Enter broadcast message:')
                      if (msg) broadcastNotification(msg)
                    }}
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium"
                  >
                    <Bell className="w-4 h-4 inline mr-2" />
                    Broadcast to All Users
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* User Detail Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {selectedUser.firstName} {selectedUser.lastName}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{selectedUser.email}</p>
              </div>
              <button
                onClick={() => setSelectedUser(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Completed Lessons</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedUser.metadata?.completedLessons?.length || 0}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => {
                    const lessons = prompt('Enter lesson IDs (comma-separated):')
                    if (lessons) unlockLessons(selectedUser.id, lessons.split(',').map(l => l.trim()))
                  }}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm"
                >
                  <UserPlus className="w-4 h-4 inline mr-1" />
                  Add Lessons
                </button>

                <button
                  onClick={() => {
                    const lessons = prompt('Enter lesson IDs to remove (comma-separated):')
                    if (lessons) removeLessons(selectedUser.id, lessons.split(',').map(l => l.trim()))
                  }}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm"
                >
                  <UserMinus className="w-4 h-4 inline mr-1" />
                  Remove Lessons
                </button>

                <button
                  onClick={() => {
                    const points = prompt('Enter points amount:')
                    if (points) updatePoints(selectedUser.id, parseInt(points))
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
                >
                  <Award className="w-4 h-4 inline mr-1" />
                  Set Points
                </button>

                <button
                  onClick={() => resetProgress(selectedUser.id, 'all')}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                >
                  <Trash2 className="w-4 h-4 inline mr-1" />
                  Reset All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
