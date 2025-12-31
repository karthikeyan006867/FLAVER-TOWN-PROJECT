'use client'

import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { 
  Users, BarChart3, Award, Settings, Bell, Database, 
  Activity, TrendingUp, BookOpen, Shield, Download, 
  Upload, Mail, Tag, Lock, Trash2, RefreshCw, Search,
  UserPlus, UserMinus, CheckCircle, XCircle, AlertCircle, Archive
} from 'lucide-react'

export default function AdminPage() {
  const { user, isLoaded } = useUser()
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [stats, setStats] = useState<any>(null)
  const [users, setUsers] = useState<any[]>([])
  const [selectedUser, setSelectedUser] = useState<any>(null)

  const checkAdminStatus = async () => {
    if (!isLoaded || !user) {
      setLoading(false)
      if (isLoaded && !user) {
        router.push('/sign-in')
      }
      return
    }

    try {
      const userEmail = user.emailAddresses[0]?.emailAddress
      console.log('Checking admin access for:', userEmail)
      
      const res = await fetch('/api/admin/check')
      const data = await res.json()
      
      console.log('Admin check response:', data)
      
      if (data.isAdmin) {
        setIsAdmin(true)
        loadStats()
        loadUsers()
      } else {
        setError(`Access denied. Your email (${userEmail}) is not authorized as admin.`)
        setTimeout(() => router.push('/dashboard'), 3000)
      }
    } catch (error) {
      console.error('Error checking admin status:', error)
      setError('Failed to verify admin access. Please try again.')
      setTimeout(() => router.push('/dashboard'), 3000)
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

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <AlertCircle className="w-16 h-16 mx-auto mb-4 text-red-500" />
          <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Access Error</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
          <div className="text-sm text-gray-500">
            Authorized admin emails:
            <div className="mt-2 font-mono text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded">
              kaarthii009.g@gmail.com<br/>
              karthii009.g@gmail.com
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">Redirecting to dashboard...</p>
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
    <div className="min-h-screen">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 pb-20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 rounded-lg mb-6">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
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

              {activeTab === 'analytics' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Platform Analytics</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">User Engagement</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Total Users</span>
                          <span className="font-bold text-gray-900 dark:text-white">{stats.totalUsers}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Active Users</span>
                          <span className="font-bold text-gray-900 dark:text-white">{stats.activeUsers}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Engagement Rate</span>
                          <span className="font-bold text-green-600">
                            {stats.totalUsers > 0 ? Math.round((stats.activeUsers / stats.totalUsers) * 100) : 0}%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Learning Metrics</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Total Lessons Completed</span>
                          <span className="font-bold text-gray-900 dark:text-white">{stats.totalLessonsCompleted}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Avg Lessons/User</span>
                          <span className="font-bold text-gray-900 dark:text-white">{stats.averageLessonsPerUser}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Total Points Awarded</span>
                          <span className="font-bold text-gray-900 dark:text-white">{stats.totalPoints.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Avg Points/User</span>
                          <span className="font-bold text-gray-900 dark:text-white">{stats.averagePointsPerUser}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Actions</h3>
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={exportData}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm"
                      >
                        <Download className="w-4 h-4 inline mr-1" />
                        Export User Data
                      </button>
                      <button
                        onClick={async () => {
                          const res = await fetch('/api/admin/analytics/engagement')
                          const data = await res.json()
                          alert(`Engagement Report:\n${JSON.stringify(data, null, 2)}`)
                        }}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
                      >
                        <TrendingUp className="w-4 h-4 inline mr-1" />
                        View Engagement Report
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Send Notifications</h2>
                  
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Broadcast Message</h3>
                    <div className="space-y-3">
                      <textarea
                        id="broadcast-message"
                        placeholder="Enter your broadcast message here..."
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white min-h-[100px]"
                      />
                      <button
                        onClick={() => {
                          const textarea = document.getElementById('broadcast-message') as HTMLTextAreaElement
                          if (textarea.value) {
                            broadcastNotification(textarea.value)
                            textarea.value = ''
                          }
                        }}
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium"
                      >
                        <Bell className="w-4 h-4 inline mr-2" />
                        Send to All Users ({stats.totalUsers})
                      </button>
                    </div>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Targeted Notification</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Click on any user in the User Management tab to send them a personalized notification.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'system' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">System Management</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <Database className="w-5 h-5" />
                        Database Operations
                      </h3>
                      <div className="space-y-2">
                        <button
                          onClick={exportData}
                          className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm text-left"
                        >
                          <Download className="w-4 h-4 inline mr-2" />
                          Export All User Data
                        </button>
                        <button
                          onClick={async () => {
                            if (confirm('This will backup all user progress. Continue?')) {
                              const res = await fetch('/api/admin/export/progress?format=json')
                              const data = await res.json()
                              const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
                              const url = URL.createObjectURL(blob)
                              const a = document.createElement('a')
                              a.href = url
                              a.download = `progress-backup-${Date.now()}.json`
                              a.click()
                            }
                          }}
                          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm text-left"
                        >
                          <Archive className="w-4 h-4 inline mr-2" />
                          Backup Progress Data
                        </button>
                      </div>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Admin Settings
                      </h3>
                      <div className="space-y-2">
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                          <p className="text-sm text-gray-600 dark:text-gray-400">Authorized Admins</p>
                          <p className="font-mono text-xs text-gray-800 dark:text-gray-300 mt-1">
                            kaarthii009.g@gmail.com
                          </p>
                          <p className="font-mono text-xs text-gray-800 dark:text-gray-300">
                            karthii009.g@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-red-200 dark:border-red-800 rounded-lg p-4 bg-red-50 dark:bg-red-900/10">
                    <h3 className="font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Danger Zone
                    </h3>
                    <p className="text-sm text-red-700 dark:text-red-300 mb-3">
                      These actions cannot be undone. Use with extreme caution.
                    </p>
                    <button
                      onClick={() => {
                        if (confirm('⚠️ This will reset ALL user progress. This CANNOT be undone!\n\nType "RESET" to confirm.')) {
                          const confirmation = prompt('Type RESET to confirm:')
                          if (confirmation === 'RESET') {
                            alert('Mass reset functionality requires additional authentication. Contact system administrator.')
                          }
                        }
                      }}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
                    >
                      <Trash2 className="w-4 h-4 inline mr-2" />
                      Reset All User Progress
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* User Detail Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedUser.firstName} {selectedUser.lastName}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{selectedUser.email}</p>
                <p className="text-sm text-gray-500 mt-1">User ID: {selectedUser.id}</p>
              </div>
              <button
                onClick={() => setSelectedUser(null)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            {/* User Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-sm text-blue-600 dark:text-blue-400">Lessons</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedUser.metadata?.completedLessons?.length || 0}
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-sm text-green-600 dark:text-green-400">Points</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedUser.metadata?.points || 0}
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <p className="text-sm text-purple-600 dark:text-purple-400">Streak</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedUser.metadata?.streak || 0}
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <p className="text-sm text-yellow-600 dark:text-yellow-400">Achievements</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedUser.metadata?.achievements?.length || 0}
                </p>
              </div>
            </div>

            {/* Action Sections */}
            <div className="space-y-6">
              {/* Lesson Management */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Manage Lessons
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Add Lessons (comma-separated)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        id={`add-lessons-${selectedUser.id}`}
                        placeholder="html-1, html-2, css-1"
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                      />
                      <button
                        onClick={() => {
                          const input = document.getElementById(`add-lessons-${selectedUser.id}`) as HTMLInputElement
                          const lessons = input.value
                          if (lessons) {
                            unlockLessons(selectedUser.id, lessons.split(',').map(l => l.trim()))
                            input.value = ''
                          }
                        }}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm whitespace-nowrap"
                      >
                        <UserPlus className="w-4 h-4 inline mr-1" />
                        Add
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Remove Lessons (comma-separated)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        id={`remove-lessons-${selectedUser.id}`}
                        placeholder="html-1, html-2"
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                      />
                      <button
                        onClick={() => {
                          const input = document.getElementById(`remove-lessons-${selectedUser.id}`) as HTMLInputElement
                          const lessons = input.value
                          if (lessons) {
                            removeLessons(selectedUser.id, lessons.split(',').map(l => l.trim()))
                            input.value = ''
                          }
                        }}
                        className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm whitespace-nowrap"
                      >
                        <UserMinus className="w-4 h-4 inline mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Points Management */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Manage Points
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Set Points
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        id={`set-points-${selectedUser.id}`}
                        placeholder="1000"
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                      />
                      <button
                        onClick={() => {
                          const input = document.getElementById(`set-points-${selectedUser.id}`) as HTMLInputElement
                          const points = input.value
                          if (points) {
                            updatePoints(selectedUser.id, parseInt(points), 'set')
                            input.value = ''
                          }
                        }}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
                      >
                        Set
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Add Points
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        id={`add-points-${selectedUser.id}`}
                        placeholder="500"
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                      />
                      <button
                        onClick={() => {
                          const input = document.getElementById(`add-points-${selectedUser.id}`) as HTMLInputElement
                          const points = input.value
                          if (points) {
                            updatePoints(selectedUser.id, parseInt(points), 'add')
                            input.value = ''
                          }
                        }}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Subtract Points
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        id={`sub-points-${selectedUser.id}`}
                        placeholder="100"
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                      />
                      <button
                        onClick={() => {
                          const input = document.getElementById(`sub-points-${selectedUser.id}`) as HTMLInputElement
                          const points = input.value
                          if (points) {
                            updatePoints(selectedUser.id, parseInt(points), 'subtract')
                            input.value = ''
                          }
                        }}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                      >
                        Subtract
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Actions */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Other Actions
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <button
                    onClick={() => {
                      const streak = prompt('Enter new streak value:', selectedUser.metadata?.streak?.toString() || '0')
                      if (streak !== null) {
                        fetch('/api/admin/users/update-streak', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ userId: selectedUser.id, streak: parseInt(streak) })
                        }).then(() => {
                          alert('Streak updated!')
                          loadUsers()
                        })
                      }
                    }}
                    className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 text-sm"
                  >
                    Set Streak
                  </button>
                  <button
                    onClick={() => {
                      const msg = prompt('Enter notification message:')
                      if (msg) sendNotification(selectedUser.id, msg)
                    }}
                    className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 text-sm"
                  >
                    <Bell className="w-4 h-4 inline mr-1" />
                    Notify
                  </button>
                  <button
                    onClick={() => resetProgress(selectedUser.id, 'lessons')}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 text-sm"
                  >
                    Reset Lessons
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

              {/* Current Lessons Display */}
              {selectedUser.metadata?.completedLessons && selectedUser.metadata.completedLessons.length > 0 && (
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Current Lessons ({selectedUser.metadata.completedLessons.length})
                  </h4>
                  <div className="max-h-40 overflow-y-auto">
                    <div className="flex flex-wrap gap-2">
                      {selectedUser.metadata.completedLessons.slice(0, 50).map((lesson: string) => (
                        <span
                          key={lesson}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs"
                        >
                          {lesson}
                        </span>
                      ))}
                      {selectedUser.metadata.completedLessons.length > 50 && (
                        <span className="px-2 py-1 text-gray-500 text-xs">
                          +{selectedUser.metadata.completedLessons.length - 50} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
        </div>
      </main>
    </div>
  )
}
