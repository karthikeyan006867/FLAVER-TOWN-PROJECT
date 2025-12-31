'use client'

import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { 
  Users, UserPlus, UserCheck, UserX, Search, 
  Trophy, Flame, Award, Check, X
} from 'lucide-react'

export default function FriendsPage() {
  const { user, isLoaded } = useUser()
  const router = useRouter()
  const [friends, setFriends] = useState<any[]>([])
  const [suggestions, setSuggestions] = useState<any[]>([])
  const [pendingRequests, setPendingRequests] = useState<any[]>([])
  const [searchResults, setSearchResults] = useState<any[]>([])
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

  const sendFriendRequest = async (friendId: string) => {
    try {
      setLoading(true)
      const res = await fetch('/api/social/friends/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ friendId })
      })
      
      const data = await res.json()
      
      if (data.success) {
        alert('Friend request sent!')
        await loadSuggestions()
        if (searchQuery) {
          await searchUsers(searchQuery)
        }
      } else {
        alert(data.error || 'Failed to send friend request')
      }
    } catch (error) {
      console.error('Error sending request:', error)
      alert('Failed to send friend request')
    } finally {
      setLoading(false)
    }
  }

  const acceptRequest = async (friendId: string) => {
    try {
      setLoading(true)
      const res = await fetch('/api/social/friends/accept', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ friendId })
      })
      
      const data = await res.json()
      
      if (data.success) {
        alert('Friend request accepted!')
        await loadFriends()
        await loadPendingRequests()
      } else {
        alert(data.error || 'Failed to accept request')
      }
    } catch (error) {
      console.error('Error accepting request:', error)
      alert('Failed to accept request')
    } finally {
      setLoading(false)
    }
  }

  const rejectRequest = async (friendId: string) => {
    try {
      setLoading(true)
      const res = await fetch('/api/social/friends/reject', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ friendId })
      })
      
      const data = await res.json()
      
      if (data.success) {
        alert('Friend request rejected')
        await loadPendingRequests()
      } else {
        alert(data.error || 'Failed to reject request')
      }
    } catch (error) {
      console.error('Error rejecting request:', error)
      alert('Failed to reject request')
    } finally {
      setLoading(false)
    }
  }

  const removeFriend = async (friendId: string) => {
    if (!confirm('Are you sure you want to remove this friend?')) {
      return
    }
    
    try {
      setLoading(true)
      const res = await fetch('/api/social/friends/remove', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ friendId })
      })
      
      const data = await res.json()
      
      if (data.success) {
        alert('Friend removed')
        await loadFriends()
      } else {
        alert(data.error || 'Failed to remove friend')
      }
    } catch (error) {
      console.error('Error removing friend:', error)
      alert('Failed to remove friend')
    } finally {
      setLoading(false)
    }
  }

  const searchUsers = async (query: string) => {
    if (query.length < 2) {
      setSearchResults([])
      return
    }

    try {
      const res = await fetch(`/api/social/friends/search?q=${encodeURIComponent(query)}`)
      const data = await res.json()
      
      if (data.success) {
        setSearchResults(data.users)
      }
    } catch (error) {
      console.error('Error searching users:', error)
    }
  }

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-md p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Friends & Community</h1>
              <p className="text-blue-100">Connect with other learners and grow together</p>
            </div>
            <Users className="w-16 h-16 opacity-50" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3">
              <UserCheck className="w-8 h-8 text-green-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{friends.length}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Friends</div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3">
              <UserPlus className="w-8 h-8 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{pendingRequests.length}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Pending Requests</div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-purple-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{suggestions.length}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Suggestions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md mb-6">
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('friends')}
              className={`flex-1 px-6 py-4 text-sm font-medium ${
                activeTab === 'friends'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <UserCheck className="w-5 h-5 inline mr-2" />
              My Friends ({friends.length})
            </button>
            <button
              onClick={() => setActiveTab('requests')}
              className={`flex-1 px-6 py-4 text-sm font-medium ${
                activeTab === 'requests'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <UserPlus className="w-5 h-5 inline mr-2" />
              Requests ({pendingRequests.length})
            </button>
            <button
              onClick={() => setActiveTab('find')}
              className={`flex-1 px-6 py-4 text-sm font-medium ${
                activeTab === 'find'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Search className="w-5 h-5 inline mr-2" />
              Find Friends
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          {/* Friends Tab */}
          {activeTab === 'friends' && (
            <div>
              {friends.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600 dark:text-gray-400 mb-4">You don't have any friends yet</p>
                  <button
                    onClick={() => setActiveTab('find')}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Find Friends
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {friends.map((friend) => (
                    <div key={friend.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src={friend.imageUrl}
                          alt={friend.name}
                          className="w-16 h-16 rounded-full"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white">{friend.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Level {friend.level}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <div className={`w-2 h-2 rounded-full ${friend.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{friend.status}</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-3 text-center">
                        <div>
                          <div className="flex items-center justify-center text-yellow-500">
                            <Trophy className="w-4 h-4" />
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">{friend.xp} XP</div>
                        </div>
                        <div>
                          <div className="flex items-center justify-center text-orange-500">
                            <Flame className="w-4 h-4" />
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">{friend.streak} days</div>
                        </div>
                        <div>
                          <div className="flex items-center justify-center text-green-500">
                            <Award className="w-4 h-4" />
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">{friend.coursesCompleted} courses</div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFriend(friend.id)}
                        className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center justify-center gap-2"
                      >
                        <UserX className="w-4 h-4" />
                        Remove Friend
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Requests Tab */}
          {activeTab === 'requests' && (
            <div>
              {pendingRequests.length === 0 ? (
                <div className="text-center py-12">
                  <UserPlus className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">No pending friend requests</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {pendingRequests.map((request) => (
                    <div key={request.id} className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <img
                        src={request.imageUrl}
                        alt={request.name}
                        className="w-14 h-14 rounded-full"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{request.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Level {request.level} • {request.xp} XP</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => acceptRequest(request.userId)}
                          disabled={loading}
                          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 flex items-center gap-2"
                        >
                          <Check className="w-4 h-4" />
                          Accept
                        </button>
                        <button
                          onClick={() => rejectRequest(request.userId)}
                          disabled={loading}
                          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50 flex items-center gap-2"
                        >
                          <X className="w-4 h-4" />
                          Decline
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Find Friends Tab */}
          {activeTab === 'find' && (
            <div>
              <div className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search users by name or email..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value)
                      searchUsers(e.target.value)
                    }}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
              </div>

              {/* Search Results */}
              {searchQuery && searchResults.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Search Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {searchResults.map((result) => (
                      <div key={result.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <img
                            src={result.imageUrl}
                            alt={result.name}
                            className="w-12 h-12 rounded-full"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white">{result.name}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Level {result.level}</p>
                          </div>
                        </div>
                        {result.isFriend ? (
                          <div className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-center">
                            ✓ Already Friends
                          </div>
                        ) : result.isPending ? (
                          <div className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-center">
                            ⏳ Request Pending
                          </div>
                        ) : (
                          <button
                            onClick={() => sendFriendRequest(result.id)}
                            disabled={loading}
                            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                          >
                            Add Friend
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Suggestions */}
              {suggestions.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {searchQuery ? 'More Suggestions' : 'Suggested Friends'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {suggestions.map((suggestion) => (
                      <div key={suggestion.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <img
                            src={suggestion.imageUrl}
                            alt={suggestion.name}
                            className="w-12 h-12 rounded-full"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white">{suggestion.name}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Level {suggestion.level}</p>
                          </div>
                        </div>
                        {suggestion.mutualFriends > 0 && (
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                            {suggestion.mutualFriends} mutual friend{suggestion.mutualFriends > 1 ? 's' : ''}
                          </p>
                        )}
                        {suggestion.commonCourses && suggestion.commonCourses.length > 0 && (
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                            {suggestion.commonCourses.length} common course{suggestion.commonCourses.length > 1 ? 's' : ''}
                          </p>
                        )}
                        <button
                          onClick={() => sendFriendRequest(suggestion.id)}
                          disabled={loading}
                          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                        >
                          Add Friend
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {!searchQuery && suggestions.length === 0 && (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">Search for users to add as friends</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
