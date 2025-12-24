import { notFound } from 'next/navigation'
import Link from 'next/link'
import { courses } from '@/data/courses'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { CheckCircle2, Clock, ArrowRight, BookOpen } from 'lucide-react'

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const course = courses.find(c => c.id === params.courseId)

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Course Header */}
          <div className="card-gradient p-8 rounded-2xl border border-gray-700 mb-8">
            <div className="flex items-start gap-6">
              <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-5xl flex-shrink-0`}>
                {course.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl font-bold">{course.title}</h1>
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium border border-primary-500/30">
                    {course.difficulty}
                  </span>
                </div>
                <p className="text-xl text-gray-400 mb-4">{course.description}</p>
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.lessons.length} Lessons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lessons List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Course Lessons</h2>
            {course.lessons.map((lesson, index) => (
              <Link
                key={lesson.id}
                href={`/courses/${course.id}/${lesson.id}`}
                className="block card-gradient p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all hover:scale-[1.01] hover:glow group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/30 flex items-center justify-center font-bold text-primary-400">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold group-hover:text-primary-400 transition-colors">
                        {lesson.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>{lesson.estimatedTime} min</span>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-3">{lesson.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        lesson.difficulty === 'Beginner' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : lesson.difficulty === 'Intermediate'
                          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}>
                        {lesson.difficulty}
                      </span>
                      <ArrowRight className="h-5 w-5 text-primary-400 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* More Lessons Coming */}
          {course.totalLessons > course.lessons.length && (
            <div className="mt-6 card-gradient p-6 rounded-xl border border-gray-700 border-dashed text-center">
              <p className="text-gray-400">
                📚 {course.totalLessons - course.lessons.length} more lessons coming soon!
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
