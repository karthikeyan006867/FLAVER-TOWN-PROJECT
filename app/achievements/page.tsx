'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Trophy, Lock, CheckCircle2, Star, Zap, Flame, Award, Target, BookOpen, Code2, Clock, TrendingUp } from 'lucide-react'
import { useProgressStore } from '@/store/progressStore'

interface Achievement {
  id: string
  title: string
  description: string
  icon: JSX.Element
  requirement: number
  category: 'lessons' | 'streak' | 'points' | 'time' | 'courses'
  unlocked: boolean
  progress: number
  points: number
}

export default function AchievementsPage() {
  const { completedLessons, streak, totalPoints, timeSpent } = useProgressStore()

  const achievements: Achievement[] = [
    {
      id: 'first-steps',
      title: 'First Steps',
      description: 'Complete your first lesson',
      icon: <Star className="h-8 w-8" />,
      requirement: 1,
      category: 'lessons',
      unlocked: completedLessons.length >= 1,
      progress: Math.min(completedLessons.length, 1),
      points: 50,
    },
    {
      id: 'quick-learner',
      title: 'Quick Learner',
      description: 'Complete 5 lessons',
      icon: <Zap className="h-8 w-8" />,
      requirement: 5,
      category: 'lessons',
      unlocked: completedLessons.length >= 5,
      progress: Math.min(completedLessons.length, 5),
      points: 100,
    },
    {
      id: 'knowledge-seeker',
      title: 'Knowledge Seeker',
      description: 'Complete 10 lessons',
      icon: <BookOpen className="h-8 w-8" />,
      requirement: 10,
      category: 'lessons',
      unlocked: completedLessons.length >= 10,
      progress: Math.min(completedLessons.length, 10),
      points: 200,
    },
    {
      id: 'code-master',
      title: 'Code Master',
      description: 'Complete 25 lessons',
      icon: <Code2 className="h-8 w-8" />,
      requirement: 25,
      category: 'lessons',
      unlocked: completedLessons.length >= 25,
      progress: Math.min(completedLessons.length, 25),
      points: 500,
    },
    {
      id: 'legend',
      title: 'Legendary Coder',
      description: 'Complete 50 lessons',
      icon: <Trophy className="h-8 w-8" />,
      requirement: 50,
      category: 'lessons',
      unlocked: completedLessons.length >= 50,
      progress: Math.min(completedLessons.length, 50),
      points: 1000,
    },
    {
      id: 'first-day',
      title: 'Day One',
      description: 'Start your learning streak',
      icon: <Flame className="h-8 w-8 text-orange-400" />,
      requirement: 1,
      category: 'streak',
      unlocked: streak >= 1,
      progress: Math.min(streak, 1),
      points: 25,
    },
    {
      id: 'week-warrior',
      title: 'Week Warrior',
      description: 'Maintain a 7-day streak',
      icon: <Flame className="h-8 w-8 text-orange-400" />,
      requirement: 7,
      category: 'streak',
      unlocked: streak >= 7,
      progress: Math.min(streak, 7),
      points: 300,
    },
    {
      id: 'dedicated',
      title: 'Dedicated Learner',
      description: 'Maintain a 30-day streak',
      icon: <Flame className="h-8 w-8 text-orange-400" />,
      requirement: 30,
      category: 'streak',
      unlocked: streak >= 30,
      progress: Math.min(streak, 30),
      points: 1500,
    },
    {
      id: 'points-100',
      title: 'Century',
      description: 'Earn 100 points',
      icon: <Target className="h-8 w-8" />,
      requirement: 100,
      category: 'points',
      unlocked: totalPoints >= 100,
      progress: Math.min(totalPoints, 100),
      points: 50,
    },
    {
      id: 'points-500',
      title: 'Point Collector',
      description: 'Earn 500 points',
      icon: <Target className="h-8 w-8" />,
      requirement: 500,
      category: 'points',
      unlocked: totalPoints >= 500,
      progress: Math.min(totalPoints, 500),
      points: 200,
    },
    {
      id: 'points-1000',
      title: 'Point Master',
      description: 'Earn 1000 points',
      icon: <Award className="h-8 w-8" />,
      requirement: 1000,
      category: 'points',
      unlocked: totalPoints >= 1000,
      progress: Math.min(totalPoints, 1000),
      points: 500,
    },
    {
      id: 'study-1h',
      title: 'Study Hour',
      description: 'Study for 60 minutes',
      icon: <Clock className="h-8 w-8" />,
      requirement: 60,
      category: 'time',
      unlocked: timeSpent >= 60,
      progress: Math.min(timeSpent, 60),
      points: 100,
    },
    {
      id: 'study-5h',
      title: 'Committed',
      description: 'Study for 5 hours total',
      icon: <Clock className="h-8 w-8" />,
      requirement: 300,
      category: 'time',
      unlocked: timeSpent >= 300,
      progress: Math.min(timeSpent, 300),
      points: 400,
    },
    {
      id: 'study-10h',
      title: 'Time Investor',
      description: 'Study for 10 hours total',
      icon: <TrendingUp className="h-8 w-8" />,
      requirement: 600,
      category: 'time',
      unlocked: timeSpent >= 600,
      progress: Math.min(timeSpent, 600),
      points: 800,
    },
  ]

  const unlockedCount = achievements.filter(a => a.unlocked).length
  const totalAchievementPoints = achievements.filter(a => a.unlocked).reduce((sum, a) => sum + a.points, 0)

  const categories = ['all', 'lessons', 'streak', 'points', 'time']
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredAchievements = selectedCategory === 'all'
    ? achievements
    : achievements.filter(a => a.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Your <span className="text-gradient">Achievements</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Track your learning milestones and unlock rewards
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="card-gradient p-6 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="h-6 w-6 text-primary-400" />
                <div className="text-3xl font-bold">{unlockedCount}</div>
              </div>
              <div className="text-sm text-gray-400">Unlocked</div>
            </div>
            <div className="card-gradient p-6 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-2">
                <Target className="h-6 w-6 text-accent-400" />
                <div className="text-3xl font-bold">{achievements.length}</div>
              </div>
              <div className="text-sm text-gray-400">Total</div>
            </div>
            <div className="card-gradient p-6 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-2">
                <Star className="h-6 w-6 text-yellow-400" />
                <div className="text-3xl font-bold">{totalAchievementPoints}</div>
              </div>
              <div className="text-sm text-gray-400">Points Earned</div>
            </div>
            <div className="card-gradient p-6 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="h-6 w-6 text-green-400" />
                <div className="text-3xl font-bold">{Math.round((unlockedCount / achievements.length) * 100)}%</div>
              </div>
              <div className="text-sm text-gray-400">Completion</div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-all capitalize whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAchievements.map(achievement => (
              <div
                key={achievement.id}
                className={`card-gradient p-6 rounded-xl border transition-all ${
                  achievement.unlocked
                    ? 'border-primary-500/50 bg-primary-500/5'
                    : 'border-gray-700 opacity-75'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                    achievement.unlocked
                      ? 'bg-gradient-to-br from-primary-500/20 to-accent-500/20 border-2 border-primary-500/50'
                      : 'bg-gray-800 border-2 border-gray-700'
                  }`}>
                    {achievement.unlocked ? achievement.icon : <Lock className="h-8 w-8 text-gray-500" />}
                  </div>
                  {achievement.unlocked && (
                    <CheckCircle2 className="h-6 w-6 text-green-400" />
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{achievement.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className={achievement.unlocked ? 'text-green-400 font-semibold' : 'text-gray-400'}>
                      {achievement.progress} / {achievement.requirement}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        achievement.unlocked
                          ? 'bg-gradient-to-r from-primary-500 to-accent-500'
                          : 'bg-gray-600'
                      }`}
                      style={{ width: `${(achievement.progress / achievement.requirement) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-sm pt-2">
                    <span className="text-gray-500 capitalize">{achievement.category}</span>
                    <span className="text-primary-400 font-semibold">+{achievement.points} pts</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
