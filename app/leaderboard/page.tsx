'use client'

import { useState, useMemo } from 'react'
import { useUser } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Trophy, TrendingUp, Users, Globe, Award, Medal, Crown, Star, Zap, Target, Flame, Brain, Code, ArrowUp, ArrowDown, Minus, Filter, Search } from 'lucide-react'
import { useProgressStore } from '@/store/progressStore'

interface LeaderboardUser {
  rank: number
  name: string
  points: number
  streak: number
  completedLessons: number
  completedChallenges: number
  avatar: string
  isCurrentUser: boolean
  country: string
  level: number
  weeklyPoints: number
  accuracy: number
  fastestSolve: number
  languagesLearned: number
  rankChange: 'up' | 'down' | 'same'
  rankChangeValue: number
}

// Generate realistic leaderboard data
const generateLeaderboard = (currentUser: any, userPoints: number, userStreak: number, completedLessons: number, completedChallenges: number): LeaderboardUser[] => {
  const avatars = ['🧑‍💻', '👨‍💻', '👩‍💻', '🦸', '🧙', '🥷', '🤖', '👾', '🦾', '🎯', '⚡', '🔥', '💎', '🌟', '🚀']
  const countries = ['🇺🇸', '🇬🇧', '🇨🇦', '🇩🇪', '🇫🇷', '🇯🇵', '🇮🇳', '🇧🇷', '🇦🇺', '🇰🇷', '🇸🇬', '🇳🇱', '🇸🇪', '🇪🇸', '🇮🇹']
  const names = [
    'CodeMaster', 'DevNinja', 'ByteWizard', 'SyntaxGuru', 'AlgoKing', 
    'DebugQueen', 'StackOverflow', 'GitCommander', 'ReactPro', 'PyThanos',
    'JavaJedi', 'RustRanger', 'GoGopher', 'SwiftSamurai', 'TypeScriptTitan',
    'CloudCrusader', 'DataDragon', 'APIArchitect', 'FullStackPhoenix', 'CyberSage',
    'CodeCrusher', 'BugHunter', 'DevDynamo', 'LogicLion', 'ScriptSorcerer'
  ]

  const topUsers: LeaderboardUser[] = []
  
  // Generate top competitors
  for (let i = 0; i < 25; i++) {
    const basePoints = 15000 - (i * 500) + Math.floor(Math.random() * 300)
    topUsers.push({
      rank: i + 1,
      name: names[i % names.length] + (i >= names.length ? Math.floor(i / names.length) : ''),
      points: basePoints,
      streak: Math.floor(Math.random() * 150) + 50,
      completedLessons: Math.floor(Math.random() * 200) + 100,
      completedChallenges: Math.floor(Math.random() * 80) + 40,
      avatar: avatars[Math.floor(Math.random() * avatars.length)],
      isCurrentUser: false,
      country: countries[Math.floor(Math.random() * countries.length)],
      level: Math.floor(basePoints / 500),
      weeklyPoints: Math.floor(Math.random() * 2000) + 500,
      accuracy: Math.floor(Math.random() * 15) + 85,
      fastestSolve: Math.floor(Math.random() * 300) + 60,
      languagesLearned: Math.floor(Math.random() * 10) + 5,
      rankChange: ['up', 'down', 'same'][Math.floor(Math.random() * 3)] as 'up' | 'down' | 'same',
      rankChangeValue: Math.floor(Math.random() * 5) + 1
    })
  }

  // Insert current user
  if (currentUser) {
    const userName = currentUser.firstName || currentUser.username || 'You'
    const userRank = Math.max(1, Math.min(100, Math.floor((15000 - userPoints) / 500) + 1))
    
    const userEntry: LeaderboardUser = {
      rank: userRank,
      name: userName,
      points: userPoints,
      streak: userStreak,
      completedLessons: completedLessons,
      completedChallenges: completedChallenges,
      avatar: '🎯',
      isCurrentUser: true,
      country: '🌍',
      level: Math.floor(userPoints / 500),
      weeklyPoints: Math.floor(userPoints * 0.1),
      accuracy: 92,
      fastestSolve: 120,
      languagesLearned: 8,
      rankChange: 'up',
      rankChangeValue: 3
    }

    // Insert user at appropriate position
    if (userRank <= 25) {
      topUsers.splice(userRank - 1, 0, userEntry)
      topUsers.splice(25, 1)
    } else {
      topUsers.splice(24, 1, userEntry)
    }

    // Recalculate ranks
    topUsers.forEach((user, idx) => {
      user.rank = idx + 1
    })
  }

  return topUsers
}

export default function LeaderboardPage() {
  const { user } = useUser()
  const { totalPoints, streak, completedLessons, completedChallenges } = useProgressStore()
  const [timeframe, setTimeframe] = useState<'daily' | 'weekly' | 'monthly' | 'alltime'>('alltime')
  const [category, setCategory] = useState<'global' | 'friends'>('global')
  const [sortBy, setSortBy] = useState<'points' | 'streak' | 'lessons' | 'accuracy'>('points')
  const [searchQuery, setSearchQuery] = useState('')

  const allUsers = generateLeaderboard(user, totalPoints, streak, completedLessons.length, completedChallenges.length)
  
  const topUsers = useMemo(() => {
    let filtered = [...allUsers]
    
    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(u => 
        u.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    
    // Sort by selected metric
    switch (sortBy) {
      case 'streak':
        filtered.sort((a, b) => b.streak - a.streak)
        break
      case 'lessons':
        filtered.sort((a, b) => b.completedLessons - a.completedLessons)
        break
      case 'accuracy':
        filtered.sort((a, b) => b.accuracy - a.accuracy)
        break
      default:
        filtered.sort((a, b) => b.points - a.points)
    }
    
    // Recalculate ranks after sorting
    filtered.forEach((user, idx) => {
      user.rank = idx + 1
    })
    
    return filtered
  }, [allUsers, searchQuery, sortBy])

  const currentUserData = topUsers.find(u => u.isCurrentUser)

  const getRankIcon = (rank: number) => {
    switch(rank) {
      case 1: return <Crown className="h-6 w-6 text-yellow-400" />
      case 2: return <Medal className="h-6 w-6 text-gray-400" />
      case 3: return <Medal className="h-6 w-6 text-orange-600" />
      default: return <span className="text-gray-500 font-bold">#{rank}</span>
    }
  }

  const getRankBadge = (rank: number) => {
    if (rank === 1) return 'bg-gradient-to-r from-yellow-500 to-amber-600'
    if (rank === 2) return 'bg-gradient-to-r from-gray-400 to-gray-500'
    if (rank === 3) return 'bg-gradient-to-r from-orange-500 to-orange-700'
    if (rank <= 10) return 'bg-gradient-to-r from-purple-500 to-purple-600'
    return 'bg-gray-700'
  }

  const getRankChangeIcon = (change: 'up' | 'down' | 'same') => {
    switch(change) {
      case 'up': return <ArrowUp className="h-4 w-4 text-green-400" />
      case 'down': return <ArrowDown className="h-4 w-4 text-red-400" />
      default: return <Minus className="h-4 w-4 text-gray-500" />
    }
  }

  const getComparisonWithUser = (targetUser: LeaderboardUser) => {
    if (!currentUserData || targetUser.isCurrentUser) return null
    
    const pointsDiff = targetUser.points - currentUserData.points
    const streakDiff = targetUser.streak - currentUserData.streak
    const lessonsDiff = targetUser.completedLessons - currentUserData.completedLessons
    
    return { pointsDiff, streakDiff, lessonsDiff }
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
              <span className="text-gradient">Global Leaderboard</span>
            </h1>
            <p className="text-gray-400">
              Compete with coders around the world • {topUsers.length} Active Competitors
            </p>
          </div>

          {/* Advanced Filters & Search */}
          <div className="mb-6 space-y-4">
            <div className="flex flex-wrap gap-3">
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

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="points">🏆 Sort by Points</option>
                <option value="streak">🔥 Sort by Streak</option>
                <option value="lessons">📚 Sort by Lessons</option>
                <option value="accuracy">🎯 Sort by Accuracy</option>
              </select>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          {/* Top 3 Podium */}
          {topUsers.length >= 3 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-center">🏆 Top Champions 🏆</h2>
              <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto items-end">
                {/* 2nd Place */}
                <div className="card-gradient border-2 border-gray-400/50 rounded-xl p-4 text-center h-48 flex flex-col justify-end">
                  <Medal className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <div className="text-4xl mb-2">{topUsers[1].avatar}</div>
                  <div className="font-bold text-lg mb-1">{topUsers[1].name}</div>
                  <div className="text-gray-400 text-sm mb-1">{topUsers[1].country}</div>
                  <div className="text-primary-400 font-bold text-xl">{topUsers[1].points.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">Level {topUsers[1].level}</div>
                </div>

                {/* 1st Place */}
                <div className="card-gradient border-2 border-yellow-400/50 rounded-xl p-6 text-center h-64 flex flex-col justify-end bg-gradient-to-b from-yellow-900/20 to-transparent">
                  <Crown className="h-10 w-10 text-yellow-400 mx-auto mb-2 animate-pulse" />
                  <div className="text-6xl mb-3">{topUsers[0].avatar}</div>
                  <div className="font-bold text-2xl mb-1">{topUsers[0].name}</div>
                  <div className="text-gray-400 text-sm mb-2">{topUsers[0].country}</div>
                  <div className="text-yellow-400 font-bold text-3xl">{topUsers[0].points.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">Level {topUsers[0].level}</div>
                </div>

                {/* 3rd Place */}
                <div className="card-gradient border-2 border-orange-600/50 rounded-xl p-4 text-center h-48 flex flex-col justify-end">
                  <Medal className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-4xl mb-2">{topUsers[2].avatar}</div>
                  <div className="font-bold text-lg mb-1">{topUsers[2].name}</div>
                  <div className="text-gray-400 text-sm mb-1">{topUsers[2].country}</div>
                  <div className="text-primary-400 font-bold text-xl">{topUsers[2].points.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">Level {topUsers[2].level}</div>
                </div>
              </div>
            </div>
          )}

          {/* Your Ranking Card */}
          {currentUserData && (
            <div className="mb-6 card-gradient border-2 border-primary-500/50 rounded-xl overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-primary-900/40 to-purple-900/40 border-b border-gray-700">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary-400" />
                  Your Ranking & Stats
                </h2>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`${getRankBadge(currentUserData.rank)} p-4 rounded-xl w-20 h-20 flex items-center justify-center text-3xl font-bold`}>
                    #{currentUserData.rank}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl font-bold">{currentUserData.name}</span>
                      <span className="text-2xl">{currentUserData.country}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span>Level {currentUserData.level}</span>
                      <span>•</span>
                      {getRankChangeIcon(currentUserData.rankChange)}
                      <span className={currentUserData.rankChange === 'up' ? 'text-green-400' : currentUserData.rankChange === 'down' ? 'text-red-400' : 'text-gray-400'}>
                        {currentUserData.rankChange === 'same' ? 'No change' : `${currentUserData.rankChangeValue} places`}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                    <Trophy className="h-5 w-5 text-yellow-400 mx-auto mb-1" />
                    <div className="text-xs text-gray-400 mb-1">Points</div>
                    <div className="text-lg font-bold text-primary-400">{currentUserData.points.toLocaleString()}</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                    <Flame className="h-5 w-5 text-orange-400 mx-auto mb-1" />
                    <div className="text-xs text-gray-400 mb-1">Streak</div>
                    <div className="text-lg font-bold text-orange-400">{currentUserData.streak} days</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                    <Brain className="h-5 w-5 text-purple-400 mx-auto mb-1" />
                    <div className="text-xs text-gray-400 mb-1">Lessons</div>
                    <div className="text-lg font-bold text-purple-400">{currentUserData.completedLessons}</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                    <Zap className="h-5 w-5 text-blue-400 mx-auto mb-1" />
                    <div className="text-xs text-gray-400 mb-1">Accuracy</div>
                    <div className="text-lg font-bold text-blue-400">{currentUserData.accuracy}%</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Complete Leaderboard */}
          <div className="card-gradient border border-gray-700 rounded-xl overflow-hidden">
            <div className="p-4 bg-gray-800/50 border-b border-gray-700">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary-400" />
                Global Rankings ({topUsers.length} Competitors)
              </h2>
            </div>
            <div className="divide-y divide-gray-700">
              {topUsers.map((player, idx) => {
                const comparison = getComparisonWithUser(player)
                return (
                  <div
                    key={idx}
                    className={`p-4 hover:bg-gray-800/50 transition-colors ${
                      player.isCurrentUser ? 'bg-primary-900/20 border-l-4 border-primary-500' : ''
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Rank */}
                      <div className="w-12 flex-shrink-0 text-center">
                        {getRankIcon(player.rank)}
                      </div>

                      {/* Avatar & Name */}
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="text-3xl">{player.avatar}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`font-bold truncate ${player.isCurrentUser ? 'text-primary-400' : ''}`}>
                              {player.name}
                            </span>
                            <span className="text-xl">{player.country}</span>
                            {player.isCurrentUser && (
                              <span className="text-xs bg-primary-500 text-white px-2 py-0.5 rounded-full">You</span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <span>Level {player.level}</span>
                            <span>•</span>
                            {getRankChangeIcon(player.rankChange)}
                            <span className={player.rankChange === 'up' ? 'text-green-400' : player.rankChange === 'down' ? 'text-red-400' : ''}>
                              {player.rankChange === 'same' ? '—' : player.rankChangeValue}
                            </span>
                            <span>•</span>
                            <Code className="h-3 w-3" />
                            <span>{player.languagesLearned} langs</span>
                          </div>
                        </div>
                      </div>

                      {/* Stats - Desktop */}
                      <div className="hidden lg:flex items-center gap-6">
                        <div className="text-center">
                          <div className="text-xs text-gray-400 mb-1">Points</div>
                          <div className="font-bold text-primary-400">{player.points.toLocaleString()}</div>
                          {comparison && (
                            <div className={`text-xs ${comparison.pointsDiff > 0 ? 'text-red-400' : 'text-green-400'}`}>
                              {comparison.pointsDiff > 0 ? '+' : ''}{comparison.pointsDiff.toLocaleString()}
                            </div>
                          )}
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-400 mb-1">Streak</div>
                          <div className="font-bold text-orange-400">{player.streak}🔥</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-400 mb-1">Lessons</div>
                          <div className="font-bold text-purple-400">{player.completedLessons}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-400 mb-1">Accuracy</div>
                          <div className="font-bold text-blue-400">{player.accuracy}%</div>
                        </div>
                      </div>

                      {/* Points - Mobile */}
                      <div className="lg:hidden text-right">
                        <div className="font-bold text-primary-400 text-lg">{player.points.toLocaleString()}</div>
                        <div className="text-xs text-gray-400">points</div>
                      </div>
                    </div>

                    {/* Expanded Stats - Mobile */}
                    <div className="lg:hidden mt-3 pt-3 border-t border-gray-700 flex justify-between text-xs">
                      <div className="text-center">
                        <div className="text-gray-400">Streak</div>
                        <div className="font-bold text-orange-400">{player.streak}🔥</div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-400">Lessons</div>
                        <div className="font-bold text-purple-400">{player.completedLessons}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-400">Accuracy</div>
                        <div className="font-bold text-blue-400">{player.accuracy}%</div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-400">Languages</div>
                        <div className="font-bold">{player.languagesLearned}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Quick Stats Overview */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="card-gradient border border-primary-500/30 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary-500/20 p-3 rounded-lg">
                  <Trophy className="h-6 w-6 text-primary-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Total Points</div>
                  <div className="text-xl font-bold text-primary-400">{totalPoints.toLocaleString()}</div>
                </div>
              </div>
            </div>
            
            <div className="card-gradient border border-orange-500/30 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="bg-orange-500/20 p-3 rounded-lg">
                  <Flame className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Day Streak</div>
                  <div className="text-xl font-bold text-orange-400">{streak} 🔥</div>
                </div>
              </div>
            </div>

            <div className="card-gradient border border-purple-500/30 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <Brain className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Lessons Done</div>
                  <div className="text-xl font-bold text-purple-400">{completedLessons.length}</div>
                </div>
              </div>
            </div>

            <div className="card-gradient border border-green-500/30 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Challenges</div>
                  <div className="text-xl font-bold text-green-400">{completedChallenges.length}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
