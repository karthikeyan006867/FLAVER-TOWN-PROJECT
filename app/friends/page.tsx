'use client'

import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { 
  Users, UserPlus, UserCheck, MessageCircle, Search, 
  Trophy, Target, Flame, Award, TrendingUp, Star
} from 'lucide-react'

interface Friend {
  id: string
  displayName: string
  avatar: string
  level: number
  status: 'online' | 'offline'
  stats: {
    points: number
    streak: number
    lessonsCompleted: number
  }
}

export default function FriendsPage() {
  const { user, isLoaded } = useUser()
  const router = useRouter()
  const [friends, setFriends] = useState<Friend[]>([])
  const [suggestions, setSuggestions] = useState<Friend[]>([])
  const [pendingRequests, setPendingRequests] = useState<Friend[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState<'friends' | 'requests' | 'find'>('friends')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isLoaded && !user) {
      router.push('/sign-in')
      return
    }
    if (user) {
      loadFriends()
      loadSuggestions()
      loadPendingRequests()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, user])

  const loadFriends = async () => {
    try {
      const res = await fetch('/api/social/friends/list')
      const data = await res.json()
      setFriends(data.friends || [])
    } catch (error) {
      console.error('Error loading friends:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadSuggestions = async () => {
    try {
      const res = await fetch('/api/social/friends/suggestions')
      const data = await res.json()
      setSuggestions(data.suggestions || [])
    } catch (error) {
      console.error('Error loading suggestions:', error)
    }
  }

  const loadPendingRequests = async () => {
    try {
      const res = await fetch('/api/social/friends/requests')
      const data = await res.json()
      setPendingRequests(data.requests || [])
    } catch (error) {
      console.error('Error loading requests:', error)
    }
  }

  const sendFriendRequest = async (userId: string) => {
    try {
      await fetch('/api/social/friends/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetUserId: userId })
      })
      alert('Friend request sent!')
      loadSuggestions()
    } catch (error) {
      console.error('Error sending request:', error)
    }
  }

  const acceptRequest = async (userId: string) => {
    try {
      await fetch('/api/social/friends/accept', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId })
      })
      loadFriends()
      loadPendingRequests()
    } catch (error) {
      console.error('Error accepting request:', error)
    }
  }

  const removeFriend = async (userId: string) => {
    if (!confirm('Remove this friend?')) return
    try {
      await fetch('/api/social/friends/remove', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId })
      })
      loadFriends()
    } catch (error) {
      console.error('Error removing friend:', error)
    }
  }

  const searchUsers = async () => {
    if (!searchQuery) return
    try {
      const res = await fetch(`/api/social/users/search?q=${encodeURIComponent(searchQuery)}`)
      const data = await res.json()
      setSuggestions(data.users || [])
    } catch (error) {
      console.error('Error searching users:', error)
    }
  }

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Friends & Community
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Connect with other learners, share progress, and learn together
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-6">
          <div className="flex gap-4 p-4 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('friends')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'friends'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Users className="w-4 h-4 inline mr-2" />
              My Friends ({friends.length})
            </button>
            <button
              onClick={() => setActiveTab('requests')}
              className={`px-4 py-2 rounded-lg font-medium relative ${
                activeTab === 'requests'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <UserCheck className="w-4 h-4 inline mr-2" />
              Requests
              {pendingRequests.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {pendingRequests.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('find')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'find'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <UserPlus className="w-4 h-4 inline mr-2" />
              Find Friends
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'find' && (
              <div className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && searchUsers()}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  <button
                    onClick={searchUsers}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Friends List */}
            {activeTab === 'friends' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {friends.map((friend) => (
                  <div
                    key={friend.id}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                            {friend.displayName[0]}
                          </div>
                          <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                            friend.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                          }`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {friend.displayName}
                          </h3>
                          <p className="text-sm text-gray-500">Level {friend.level}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="text-center">
                        <Trophy className="w-4 h-4 text-yellow-500 mx-auto mb-1" />
                        <p className="text-xs text-gray-500">Points</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{friend.stats.points}</p>
                      </div>
                      <div className="text-center">
                        <Flame className="w-4 h-4 text-orange-500 mx-auto mb-1" />
                        <p className="text-xs text-gray-500">Streak</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{friend.stats.streak}</p>
                      </div>
                      <div className="text-center">
                        <Target className="w-4 h-4 text-blue-500 mx-auto mb-1" />
                        <p className="text-xs text-gray-500">Lessons</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{friend.stats.lessonsCompleted}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => router.push(`/profile/${friend.id}`)}
                        className="flex-1 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
                      >
                        View Profile
                      </button>
                      <button
                        onClick={() => router.push(`/messages?user=${friend.id}`)}
                        className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeFriend(friend.id)}
                        className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                {friends.length === 0 && (
                  <div className="col-span-3 text-center py-12">
                    <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 mb-4">No friends yet. Start connecting!</p>
                    <button
                      onClick={() => setActiveTab('find')}
                      className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      Find Friends
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Pending Requests */}
            {activeTab === 'requests' && (
              <div className="space-y-4">
                {pendingRequests.map((request) => (
                  <div
                    key={request.id}
                    className="flex items-center justify-between border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {request.displayName[0]}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {request.displayName}
                        </h3>
                        <p className="text-sm text-gray-500">Level {request.level} • Wants to be friends</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => acceptRequest(request.id)}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => removeFriend(request.id)}
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
                {pendingRequests.length === 0 && (
                  <div className="text-center py-12">
                    <UserCheck className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No pending friend requests</p>
                  </div>
                )}
              </div>
            )}

            {/* Find Friends */}
            {activeTab === 'find' && (
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Suggested Friends
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {suggestions.map((suggestion) => (
                    <div
                      key={suggestion.id}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          {suggestion.displayName[0]}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {suggestion.displayName}
                          </h3>
                          <p className="text-sm text-gray-500">Level {suggestion.level}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => sendFriendRequest(suggestion.id)}
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      >
                        <UserPlus className="w-4 h-4 inline mr-2" />
                        Add Friend
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
