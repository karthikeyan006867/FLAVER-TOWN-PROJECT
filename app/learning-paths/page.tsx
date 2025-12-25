'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Map, Check, Lock, Award, TrendingUp, BookOpen, Code, Database, Smartphone } from 'lucide-react'

const learningPaths = [
  {
    id: 'web-dev',
    title: 'Full Stack Web Development',
    description: 'Master modern web development from frontend to backend',
    icon: Code,
    color: 'blue',
    duration: '12 weeks',
    courses: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
    progress: 45,
    enrolled: true
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'Build native and cross-platform mobile applications',
    icon: Smartphone,
    color: 'purple',
    duration: '10 weeks',
    courses: ['JavaScript', 'React', 'React Native', 'Swift', 'Kotlin'],
    progress: 20,
    enrolled: true
  },
  {
    id: 'backend-dev',
    title: 'Backend Engineering',
    description: 'Learn server-side development and API design',
    icon: Database,
    color: 'green',
    duration: '8 weeks',
    courses: ['Python', 'Node.js', 'SQL', 'MongoDB', 'Redis', 'Docker'],
    progress: 0,
    enrolled: false
  },
  {
    id: 'data-science',
    title: 'Data Science & ML',
    description: 'Analyze data and build machine learning models',
    icon: TrendingUp,
    color: 'yellow',
    duration: '14 weeks',
    courses: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow'],
    progress: 0,
    enrolled: false
  }
]

export default function LearningPathsPage() {
  const [selectedPath, setSelectedPath] = useState(learningPaths[0])

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 pb-20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
              <Map className="h-8 w-8 text-primary-400" />
              <span className="text-gradient">Learning Paths</span>
            </h1>
            <p className="text-gray-400">
              Follow structured paths to master your skills
            </p>
          </div>

          {/* Learning Paths Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {learningPaths.map((path) => {
              const Icon = path.icon
              return (
                <div
                  key={path.id}
                  onClick={() => setSelectedPath(path)}
                  className={`card-gradient border-2 rounded-xl p-6 cursor-pointer transition-all ${
                    selectedPath.id === path.id
                      ? `border-${path.color}-500`
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`bg-${path.color}-500/20 p-3 rounded-lg`}>
                      <Icon className={`h-6 w-6 text-${path.color}-400`} />
                    </div>
                    {path.enrolled && (
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                        Enrolled
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{path.description}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {path.courses.length} courses
                    </span>
                    <span>{path.duration}</span>
                  </div>

                  {path.enrolled && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Progress</span>
                        <span className="text-sm font-semibold">{path.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className={`bg-${path.color}-500 h-2 rounded-full transition-all`}
                          style={{ width: `${path.progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {!path.enrolled && (
                    <button className={`w-full mt-4 px-4 py-2 bg-${path.color}-500 text-white rounded-lg hover:bg-${path.color}-600 transition-colors font-semibold`}>
                      Start Learning
                    </button>
                  )}
                </div>
              )
            })}
          </div>

          {/* Selected Path Details */}
          {selectedPath && (
            <div className="card-gradient border border-gray-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-6">{selectedPath.title} - Course Roadmap</h2>
              
              <div className="space-y-4">
                {selectedPath.courses.map((course, index) => {
                  const isCompleted = index < selectedPath.progress / 20
                  const isCurrent = index === Math.floor(selectedPath.progress / 20)
                  const isLocked = index > Math.floor(selectedPath.progress / 20)
                  
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${
                        isCompleted
                          ? 'border-green-500/30 bg-green-500/10'
                          : isCurrent
                          ? 'border-primary-500/30 bg-primary-500/10'
                          : 'border-gray-700 bg-gray-800/30'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isCompleted
                          ? 'bg-green-500'
                          : isCurrent
                          ? 'bg-primary-500'
                          : 'bg-gray-700'
                      }`}>
                        {isCompleted ? (
                          <Check className="h-5 w-5 text-white" />
                        ) : isLocked ? (
                          <Lock className="h-5 w-5 text-gray-500" />
                        ) : (
                          <span className="text-white font-bold">{index + 1}</span>
                        )}
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold">{course}</h3>
                        <p className="text-sm text-gray-400">
                          {isCompleted
                            ? 'Completed'
                            : isCurrent
                            ? 'In Progress'
                            : 'Locked'}
                        </p>
                      </div>

                      {isCompleted && (
                        <Award className="h-5 w-5 text-green-400" />
                      )}
                      
                      {!isLocked && !isCompleted && (
                        <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-semibold">
                          Continue
                        </button>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
