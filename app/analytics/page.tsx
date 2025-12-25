'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { BarChart3, TrendingUp, Clock, Target, Award, Calendar, Code, Flame } from 'lucide-react'

export default function AnalyticsPage() {
  const [timeframe, setTimeframe] = useState<'week' | 'month' | 'year'>('week')

  const stats = {
    totalTime: 2420,
    lessonsCompleted: 47,
    challengesSolved: 23,
    currentStreak: 7,
    longestStreak: 14,
    totalPoints: 7850
  }

  const activityData = [
    { day: 'Mon', minutes: 45 },
    { day: 'Tue', minutes: 60 },
    { day: 'Wed', minutes: 30 },
    { day: 'Thu', minutes: 75 },
    { day: 'Fri', minutes: 90 },
    { day: 'Sat', minutes: 120 },
    { day: 'Sun', minutes: 40 }
  ]

  const languageProgress = [
    { language: 'JavaScript', progress: 75, lessons: 30 },
    { language: 'Python', progress: 60, lessons: 24 },
    { language: 'TypeScript', progress: 45, lessons: 18 },
    { language: 'React', progress: 30, lessons: 12 },
    { language: 'Node.js', progress: 25, lessons: 10 }
  ]

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 pb-20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
                <BarChart3 className="h-8 w-8 text-primary-400" />
                <span className="text-gradient">Analytics</span>
              </h1>
              <p className="text-gray-400">
                Track your learning progress and insights
              </p>
            </div>

            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value as any)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="card-gradient border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-400" />
                </div>
                <TrendingUp className="h-5 w-5 text-green-400" />
              </div>
              <div className="text-3xl font-bold mb-1">{Math.floor(stats.totalTime / 60)}h {stats.totalTime % 60}m</div>
              <div className="text-sm text-gray-400">Total Learning Time</div>
            </div>

            <div className="card-gradient border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-green-400" />
                </div>
                <TrendingUp className="h-5 w-5 text-green-400" />
              </div>
              <div className="text-3xl font-bold mb-1">{stats.lessonsCompleted}</div>
              <div className="text-sm text-gray-400">Lessons Completed</div>
            </div>

            <div className="card-gradient border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <Code className="h-6 w-6 text-purple-400" />
                </div>
                <TrendingUp className="h-5 w-5 text-green-400" />
              </div>
              <div className="text-3xl font-bold mb-1">{stats.challengesSolved}</div>
              <div className="text-sm text-gray-400">Challenges Solved</div>
            </div>

            <div className="card-gradient border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-orange-500/20 p-3 rounded-lg">
                  <Flame className="h-6 w-6 text-orange-400" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{stats.currentStreak} 🔥</div>
              <div className="text-sm text-gray-400">Day Streak</div>
            </div>

            <div className="card-gradient border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-yellow-500/20 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-yellow-400" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{stats.totalPoints.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Total Points</div>
            </div>

            <div className="card-gradient border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-red-500/20 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-red-400" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{stats.longestStreak} 🏆</div>
              <div className="text-sm text-gray-400">Longest Streak</div>
            </div>
          </div>

          {/* Activity Chart */}
          <div className="card-gradient border border-gray-700 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary-400" />
              Daily Activity
            </h2>
            <div className="flex items-end justify-between gap-2 h-64">
              {activityData.map((day, i) => {
                const maxMinutes = Math.max(...activityData.map(d => d.minutes))
                const height = (day.minutes / maxMinutes) * 100
                
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex items-end justify-center h-full">
                      <div
                        className="w-full bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-lg transition-all hover:opacity-80 cursor-pointer relative group"
                        style={{ height: `${height}%` }}
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {day.minutes} min
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">{day.day}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Language Progress */}
          <div className="card-gradient border border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Code className="h-5 w-5 text-primary-400" />
              Language Progress
            </h2>
            <div className="space-y-4">
              {languageProgress.map((lang, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="font-semibold">{lang.language}</div>
                      <div className="text-xs text-gray-400">{lang.lessons} lessons completed</div>
                    </div>
                    <div className="text-primary-400 font-bold">{lang.progress}%</div>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-600 to-primary-400 h-2 rounded-full transition-all"
                      style={{ width: `${lang.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Study Patterns */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="card-gradient border border-gray-700 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Best Study Time</h2>
              <div className="text-center py-8">
                <div className="text-4xl mb-2">🌅</div>
                <div className="text-2xl font-bold mb-1">Morning</div>
                <div className="text-sm text-gray-400">You&apos;re most productive 9-11 AM</div>
              </div>
            </div>

            <div className="card-gradient border border-gray-700 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Favorite Language</h2>
              <div className="text-center py-8">
                <div className="text-4xl mb-2">💛</div>
                <div className="text-2xl font-bold mb-1">JavaScript</div>
                <div className="text-sm text-gray-400">Most time spent learning</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
