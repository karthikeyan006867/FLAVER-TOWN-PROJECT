'use client'

import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { 
  Users, UserPlus, UserCheck, X, Check, Search, Trophy, Flame, Award
} from 'lucide-react'

interface Friend {
  id: string
  name: string
  imageUrl: string
  level: number
  xp: number
  streak: number
  coursesCompleted: number
  status: string
}

interface FriendRequest {
  id: string
  userId: string
  name: string
  imageUrl: string
  level: number
  xp: number
}

interface UserSuggestion {
  id: string
  name: string
  imageUrl: string
  level: number
  xp: number
  mutualFriends: number
  commonCourses: string[]
}

export default function FriendsSidePanel() {
  const { user } = useUser()
  const [friends, setFriends] = useState<Friend[]>([])
  const [suggestions, setSuggestions] = useState<UserSuggestion[]>([])
  const [pendingRequests, setPendingRequests] = useState<FriendRequest[]>([])
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState<'friends' | 'requests' | 'find'>('friends')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user) {
      loadFriends()
      loadSuggestions()
      loadPendingRequests()
    }
  }, [user])

  const loadFriends = async () => {
    try {
      const res = await fetch('/api/social/friends/list')
      const data = await res.json()
      setFriends(data.friends || [])
    } catch (error) {
      console.error('Error loading friends:', error)
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
        await loadSuggestions()
        if (searchQuery) {
          await searchUsers(searchQuery)
        }
      } else {
        alert(data.error || 'Failed to send request')
      }
    } catch (error) {
      console.error('Error:', error)
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
        await loadFriends()
        await loadPendingRequests()
      }
    } catch (error) {
      console.error('Error:', error)
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
      
      if (res.ok) {
        await loadPendingRequests()
      }
    } catch (error) {
      console.error('Error:', error)
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
      console.error('Error:', error)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md h-full overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5" />
          <h2 className="font-bold">Friends</h2>
        </div>
        <div className="text-xs text-blue-100 mt-1">
          {friends.length} friends • {pendingRequests.length} requests
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <button
          onClick={() => setActiveTab('friends')}
          className={`flex-1 px-2 py-2 text-xs font-medium ${
            activeTab === 'friends'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          Friends
        </button>
        <button
          onClick={() => setActiveTab('requests')}
          className={`flex-1 px-2 py-2 text-xs font-medium ${
            activeTab === 'requests'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          Requests ({pendingRequests.length})
        </button>
        <button
          onClick={() => setActiveTab('find')}
          className={`flex-1 px-2 py-2 text-xs font-medium ${
            activeTab === 'find'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          Find
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Friends Tab */}
        {activeTab === 'friends' && (
          <div className="space-y-3">
            {friends.length === 0 ? (
              <div className="text-center py-8">
                <Users className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">No friends yet</p>
              </div>
            ) : (
              friends.map((friend) => (
                <div key={friend.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src={friend.imageUrl}
                      alt={friend.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-gray-900 dark:text-white truncate">{friend.name}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Level {friend.level}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-center">
                    <div>
                      <Trophy className="w-3 h-3 text-yellow-500 mx-auto" />
                      <div className="text-xs text-gray-600 dark:text-gray-400">{friend.xp}</div>
                    </div>
                    <div>
                      <Flame className="w-3 h-3 text-orange-500 mx-auto" />
                      <div className="text-xs text-gray-600 dark:text-gray-400">{friend.streak}d</div>
                    </div>
                    <div>
                      <Award className="w-3 h-3 text-green-500 mx-auto" />
                      <div className="text-xs text-gray-600 dark:text-gray-400">{friend.coursesCompleted}</div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Requests Tab */}
        {activeTab === 'requests' && (
          <div className="space-y-3">
            {pendingRequests.length === 0 ? (
              <div className="text-center py-8">
                <UserPlus className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">No pending requests</p>
              </div>
            ) : (
              pendingRequests.map((request) => (
                <div key={request.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src={request.imageUrl}
                      alt={request.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-gray-900 dark:text-white truncate">{request.name}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Level {request.level}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => acceptRequest(request.userId)}
                      disabled={loading}
                      className="flex-1 px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600 disabled:opacity-50 flex items-center justify-center gap-1"
                    >
                      <Check className="w-3 h-3" />
                      Accept
                    </button>
                    <button
                      onClick={() => rejectRequest(request.userId)}
                      disabled={loading}
                      className="flex-1 px-2 py-1 bg-gray-500 text-white rounded text-xs hover:bg-gray-600 disabled:opacity-50 flex items-center justify-center gap-1"
                    >
                      <X className="w-3 h-3" />
                      Decline
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Find Tab */}
        {activeTab === 'find' && (
          <div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  searchUsers(e.target.value)
                }}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Search Results */}
            {searchQuery && searchResults.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Search Results</h4>
                <div className="space-y-2">
                  {searchResults.map((result) => (
                    <div key={result.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-2">
                      <div className="flex items-center gap-2 mb-2">
                        <img src={result.imageUrl} alt={result.name} className="w-8 h-8 rounded-full" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-xs text-gray-900 dark:text-white truncate">{result.name}</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Level {result.level}</p>
                        </div>
                      </div>
                      {result.isFriend ? (
                        <div className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs text-center">
                          ✓ Friends
                        </div>
                      ) : result.isPending ? (
                        <div className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-xs text-center">
                          Pending
                        </div>
                      ) : (
                        <button
                          onClick={() => sendFriendRequest(result.id)}
                          disabled={loading}
                          className="w-full px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600 disabled:opacity-50"
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
                <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {searchQuery ? 'More Suggestions' : 'Suggested Friends'}
                </h4>
                <div className="space-y-2">
                  {suggestions.slice(0, 5).map((suggestion) => (
                    <div key={suggestion.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-2">
                      <div className="flex items-center gap-2 mb-2">
                        <img src={suggestion.imageUrl} alt={suggestion.name} className="w-8 h-8 rounded-full" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-xs text-gray-900 dark:text-white truncate">{suggestion.name}</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Level {suggestion.level}</p>
                        </div>
                      </div>
                      {suggestion.mutualFriends > 0 && (
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                          {suggestion.mutualFriends} mutual
                        </p>
                      )}
                      <button
                        onClick={() => sendFriendRequest(suggestion.id)}
                        disabled={loading}
                        className="w-full px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600 disabled:opacity-50"
                      >
                        Add Friend
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!searchQuery && suggestions.length === 0 && (
              <div className="text-center py-8">
                <Search className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Search for users</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
