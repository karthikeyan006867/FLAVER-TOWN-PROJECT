'use client'

import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Trophy, TrendingUp, Users, Globe, Award, Medal, Crown, Star } from 'lucide-react'
import { useProgressStore } from '@/store/progressStore'

// Sample leaderboard data - in production, this would come from a backend
const generateLeaderboard = (currentUser: any, userPoints: number, userStreak: number) => {
  // Static leaderboard with realistic competitors
  const topUsers = [
    { rank: 1, name: 'CodeMaster', points: 15420, streak: 47, avatar: '👑' },
    { rank: 2, name: 'DevNinja', points: 13850, streak: 35, avatar: '🥷' },
    { rank: 3, name: 'BugHunter', points: 12300, streak: 28, avatar: '🐛' },
    { rank: 4, name: 'SyntaxGuru', points: 10900, streak: 42, avatar: '🧙' },
    { rank: 5, name: 'AlgoWizard', points: 9650, streak: 31, avatar: '✨' },
    { rank: 6, name: 'LoopLegend', points: 8200, streak: 25, avatar: '🔄' },
    { rank: 7, name: 'DataDynamo', points: 7100, streak: 29, avatar: '💾' },
    { rank: 8, name: 'CloudChamp', points: 5850, streak: 22, avatar: '☁️' },
    { rank: 9, name: 'StackStar', points: 4300, streak: 33, avatar: '⭐' },
    { rank: 10, name: 'QueryQueen', points: 3500, streak: 19, avatar: '👸' },
  ]

  // Add current user if they have points
  if (currentUser && userPoints > 0) {
    const userName = currentUser.firstName || currentUser.username || 'You'
    const userEntry = {
      rank: 0,
      name: `${userName} (You)`,
      points: userPoints,
      streak: userStreak,
      avatar: '🎯'
    }

    // Find correct position for user
    let inserted = false
    for (let i = 0; i < topUsers.length; i++) {
      if (userPoints > topUsers[i].points) {
        topUsers.splice(i, 0, userEntry)
        inserted = true
        break
      }
    }

    // If not inserted, add at end if user has points
    if (!inserted) {
      topUsers.push(userEntry)
    }

    // Recalculate ranks
    topUsers.forEach((u, i) => u.rank = i + 1)

    // Keep only top 10
    if (topUsers.length > 10) {
      const userIndex = topUsers.findIndex(u => u.name.includes('(You)'))
      if (userIndex >= 10) {
        // User is outside top 10, show top 9 + user
        topUsers.splice(9, topUsers.length - 10)
        topUsers.push(userEntry)
      } else {
        // User is in top 10, just trim
        topUsers.splice(10)
      }
    }
  }

  return topUsers
}

export default function LeaderboardPage() {
  const { user } = useUser()
  const { totalPoints, streak, completedLessons, completedChallenges } = useProgressStore()
  const [timeframe, setTimeframe] = useState<'daily' | 'weekly' | 'monthly' | 'alltime'>('alltime')
  const [category, setCategory] = useState<'global' | 'friends'>('global')

  const topUsers = generateLeaderboard(user, totalPoints, streak)

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

          {/* Top 3 Podium */}
          <div className="mb-8 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            {/* 2nd Place */}
            <div className="mt-8">
              <div className="card-gradient border border-gray-700 rounded-xl p-4 text-center">
                <div className="text-4xl mb-2">{topUsers[1].avatar}</div>
                <Medal className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                <div className="font-semibold">{topUsers[1].name}</div>
                <div className="text-primary-400 font-bold">{topUsers[1].points.toLocaleString()}</div>
                <div className="text-xs text-gray-500">{topUsers[1].streak} day streak</div>
              </div>
            </div>

            {/* 1st Place */}
            <div>
              <div className="card-gradient border-2 border-yellow-500/50 rounded-xl p-4 text-center bg-gradient-to-b from-yellow-900/20 to-transparent">
                <div className="text-5xl mb-2">{topUsers[0].avatar}</div>
                <Crown className="h-8 w-8 text-yellow-400 mx-auto mb-2 animate-pulse" />
                <div className="font-bold text-lg">{topUsers[0].name}</div>
                <div className="text-yellow-400 font-bold text-xl">{topUsers[0].points.toLocaleString()}</div>
                <div className="text-xs text-gray-400">{topUsers[0].streak} day streak</div>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="mt-8">
              <div className="card-gradient border border-gray-700 rounded-xl p-4 text-center">
                <div className="text-4xl mb-2">{topUsers[2].avatar}</div>
                <Medal className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold">{topUsers[2].name}</div>
                <div className="text-primary-400 font-bold">{topUsers[2].points.toLocaleString()}</div>
                <div className="text-xs text-gray-500">{topUsers[2].streak} day streak</div>
              </div>
            </div>
          </div>

          {/* Rankings List */}
          <div className="card-gradient border border-gray-700 rounded-xl overflow-hidden">
            <div className="p-4 bg-gray-800/50 border-b border-gray-700">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary-400" />
                Rankings
              </h2>
            </div>
            <div className="divide-y divide-gray-800">
              {topUsers.map((user) => (
                <div
                  key={`${user.rank}-${user.name}`}
                  className={`flex items-center gap-4 p-4 transition-colors ${
                    isCurrentUser(user.name) 
                      ? 'bg-primary-500/10 border-l-4 border-primary-500' 
                      : 'hover:bg-gray-800/30'
                  }`}
                >
                  <div className="flex items-center justify-center w-12">
                    {getRankIcon(user.rank)}
                  </div>
                  <div className="text-3xl">{user.avatar}</div>
                  <div className="flex-1">
                    <div className={`font-semibold ${isCurrentUser(user.name) ? 'text-primary-400' : ''}`}>{user.name}</div>
                    <div className="text-sm text-gray-400">{user.streak} day streak 🔥</div>
                  </div>
                  <div className="text-right">
                    <div className="text-primary-400 font-bold text-lg">
                      {user.points.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">points</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
