'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Trophy, TrendingUp, Users, Globe, Award, Medal, Crown, Star } from 'lucide-react'

const topUsers = [
  { rank: 1, name: 'CodeMaster', points: 15420, streak: 47, avatar: '👑' },
  { rank: 2, name: 'DevNinja', points: 14890, streak: 35, avatar: '🥷' },
  { rank: 3, name: 'BugHunter', points: 13560, streak: 28, avatar: '🐛' },
  { rank: 4, name: 'SyntaxGuru', points: 12340, streak: 42, avatar: '🧙' },
  { rank: 5, name: 'AlgoWizard', points: 11980, streak: 31, avatar: '✨' },
  { rank: 6, name: 'LoopLegend', points: 10750, streak: 25, avatar: '🔄' },
  { rank: 7, name: 'DataDynamo', points: 10120, streak: 29, avatar: '💾' },
  { rank: 8, name: 'CloudChamp', points: 9850, streak: 22, avatar: '☁️' },
  { rank: 9, name: 'StackStar', points: 9420, streak: 33, avatar: '⭐' },
  { rank: 10, name: 'QueryQueen', points: 8990, streak: 19, avatar: '👸' },
]

export default function LeaderboardPage() {
  const [timeframe, setTimeframe] = useState<'daily' | 'weekly' | 'monthly' | 'alltime'>('alltime')
  const [category, setCategory] = useState<'global' | 'friends'>('global')

  const getRankIcon = (rank: number) => {
    switch(rank) {
      case 1: return <Crown className="h-6 w-6 text-yellow-400" />
      case 2: return <Medal className="h-6 w-6 text-gray-400" />
      case 3: return <Medal className="h-6 w-6 text-orange-600" />
      default: return <span className="text-gray-500">#{rank}</span>
    }
  }

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
                  key={user.rank}
                  className="flex items-center gap-4 p-4 hover:bg-gray-800/30 transition-colors"
                >
                  <div className="flex items-center justify-center w-12">
                    {getRankIcon(user.rank)}
                  </div>
                  <div className="text-3xl">{user.avatar}</div>
                  <div className="flex-1">
                    <div className="font-semibold">{user.name}</div>
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

          {/* Your Rank Card */}
          <div className="mt-6 card-gradient border-2 border-primary-500/50 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Star className="h-8 w-8 text-primary-400" />
                <div>
                  <div className="text-sm text-gray-400">Your Rank</div>
                  <div className="text-2xl font-bold">#24</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400">Points</div>
                <div className="text-2xl font-bold text-primary-400">7,850</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400">Streak</div>
                <div className="text-2xl font-bold">12 🔥</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
