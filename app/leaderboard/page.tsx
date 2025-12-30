'use client'

import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Trophy, TrendingUp, Users, Globe, Award, Medal, Crown, Star } from 'lucide-react'
import { useProgressStore } from '@/store/progressStore'

// Generate leaderboard with only real authenticated user
const generateLeaderboard = (currentUser: any, userPoints: number, userStreak: number, completedLessons: number) => {
  const topUsers = []

  // Add current user if authenticated and has activity
  if (currentUser) {
    const userName = currentUser.firstName || currentUser.username || 'You'
    const userEntry = {
      rank: 1,
      name: userName,
      points: userPoints,
      streak: userStreak,
      completedLessons: completedLessons,
      avatar: '🎯',
      isCurrentUser: true
    }
    topUsers.push(userEntry)
  }

  return topUsers
}

export default function LeaderboardPage() {
  const { user } = useUser()
  const { totalPoints, streak, completedLessons, completedChallenges } = useProgressStore()
  const [timeframe, setTimeframe] = useState<'daily' | 'weekly' | 'monthly' | 'alltime'>('alltime')
  const [category, setCategory] = useState<'global' | 'friends'>('global')

  const topUsers = generateLeaderboard(user, totalPoints, streak, completedLessons.length)

  const getRankIcon = (rank: number) => {
    switch(rank) {
      case 1: return <Crown className="h-6 w-6 text-yellow-400" />
      case 2: return <Medal className="h-6 w-6 text-gray-400" />
      case 3: return <Medal className="h-6 w-6 text-orange-600" />
      default: return <span className="text-gray-500">#{rank}</span>
    }
  }

  const isCurrentUser = (name: string) => name.includes('(You)')

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 pb-20 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
              <Trophy className="h-8 w-8 text-yellow-400" />
              <span className="text-gradient">Leaderboard</span>
            </h1>
            <p className="text-gray-400">
              Compete with coders around the world
            </p>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-wrap gap-3">
            <div className="flex gap-2 bg-gray-800/50 p-1 rounded-lg">
              <button
                onClick={() => setCategory('global')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                  category === 'global'
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Globe className="h-4 w-4" />
                Global
              </button>
              <button
                onClick={() => setCategory('friends')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                  category === 'friends'
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Users className="h-4 w-4" />
                Friends
              </button>
            </div>

            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value as any)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="daily">Today</option>
              <option value="weekly">This Week</option>
              <option value="monthly">This Month</option>
              <option value="alltime">All Time</option>
            </select>
          </div>

          {/* Your Achievement Card */}
          {topUsers.length > 0 && (
            <div className="mb-8 max-w-2xl mx-auto">
              <div className="card-gradient border-2 border-primary-500/50 rounded-xl p-8 text-center bg-gradient-to-b from-primary-900/20 to-transparent">
                <div className="text-6xl mb-4">{topUsers[0].avatar}</div>
                <Crown className="h-10 w-10 text-yellow-400 mx-auto mb-3 animate-pulse" />
                <div className="font-bold text-2xl mb-2">{topUsers[0].name}</div>
                <div className="text-primary-400 font-bold text-3xl mb-2">{topUsers[0].points.toLocaleString()} Points</div>
                <div className="flex items-center justify-center gap-6 text-sm text-gray-400 mt-4">
                  <div className="flex items-center gap-2">
                    <span>🔥 {topUsers[0].streak} Day Streak</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📚 {topUsers[0].completedLessons} Lessons</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Your Progress Details */}
          {topUsers.length > 0 ? (
            <div className="card-gradient border border-gray-700 rounded-xl overflow-hidden">
              <div className="p-4 bg-gray-800/50 border-b border-gray-700">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary-400" />
                  Your Progress Details
                </h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Trophy className="h-6 w-6 text-yellow-400" />
                    <span className="text-gray-300">Total Points</span>
                  </div>
                  <span className="text-2xl font-bold text-primary-400">{topUsers[0].points.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🔥</span>
                    <span className="text-gray-300">Current Streak</span>
                  </div>
                  <span className="text-2xl font-bold text-orange-400">{topUsers[0].streak} days</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📚</span>
                    <span className="text-gray-300">Lessons Completed</span>
                  </div>
                  <span className="text-2xl font-bold text-green-400">{topUsers[0].completedLessons}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="card-gradient border border-gray-700 rounded-xl p-8 text-center">
              <Users className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Start Your Journey</h3>
              <p className="text-gray-400">Complete lessons to earn points and see your progress here!</p>
            </div>
          )}

          {/* Your Stats Card */}
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="card-gradient border border-primary-500/30 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary-500/20 p-3 rounded-lg">
                  <Trophy className="h-6 w-6 text-primary-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Your Points</div>
                  <div className="text-2xl font-bold text-primary-400">{totalPoints.toLocaleString()}</div>
                </div>
              </div>
            </div>
            
            <div className="card-gradient border border-orange-500/30 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="bg-orange-500/20 p-3 rounded-lg">
                  <Star className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Your Streak</div>
                  <div className="text-2xl font-bold">{streak} 🔥</div>
                </div>
              </div>
            </div>

            <div className="card-gradient border border-green-500/30 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Completed</div>
                  <div className="text-2xl font-bold">{completedLessons.length + completedChallenges.length}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
