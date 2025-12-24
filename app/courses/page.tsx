import Link from 'next/link'
import { courses } from '@/data/courses'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { ArrowRight, Clock, BookOpen } from 'lucide-react'

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Browse <span className="text-gradient">Courses</span>
            </h1>
            <p className="text-xl text-gray-400">
              Choose your learning path and start coding today
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="card-gradient p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all hover:scale-[1.02] hover:glow group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-4xl group-hover:scale-110 transition-transform`}>
                    {course.icon}
                  </div>
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium border border-primary-500/30">
                    {course.difficulty}
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-3">{course.title}</h2>
                <p className="text-gray-400 mb-6">{course.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.lessons.length} Lessons</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.lessons.length * 10}+ min</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary-400 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-12 card-gradient p-8 rounded-2xl border border-gray-700 text-center">
            <h3 className="text-2xl font-bold mb-2">More Courses Coming Soon!</h3>
            <p className="text-gray-400">
              React, Node.js, TypeScript, and more advanced courses are on the way.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
