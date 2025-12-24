import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { courses } from '@/data/courses'

interface CourseProgress {
  completed: number
  total: number
  percentage: number
}

interface ProgressState {
  completedLessons: string[] // Array of lesson IDs
  courseProgress: { [courseId: string]: CourseProgress }
  streak: number
  totalPoints: number
  lastStudyDate: string
  timeSpent: number // in minutes
  
  completeLesson: (lessonId: string, courseId: string) => void
  updateCourseProgress: (courseId: string) => void
  updateStreak: () => void
  addStudyTime: (minutes: number) => void
  getLessonProgress: (courseId: string) => CourseProgress
  isLessonCompleted: (lessonId: string) => boolean
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedLessons: [],
      courseProgress: {},
      streak: 0,
      totalPoints: 0,
      lastStudyDate: new Date().toISOString().split('T')[0],
      timeSpent: 0,

      completeLesson: (lessonId: string, courseId: string) => {
        const { completedLessons, totalPoints } = get()
        
        if (!completedLessons.includes(lessonId)) {
          set({
            completedLessons: [...completedLessons, lessonId],
            totalPoints: totalPoints + 100,
          })
          
          // Update course progress
          get().updateCourseProgress(courseId)
          
          // Update streak
          get().updateStreak()
        }
      },

      updateCourseProgress: (courseId: string) => {
        const { completedLessons, courseProgress } = get()
        const course = courses.find(c => c.id === courseId)
        
        if (course) {
          const completed = completedLessons.filter(id => 
            course.lessons.some(lesson => lesson.id === id)
          ).length
          
          const total = course.lessons.length
          const percentage = total > 0 ? Math.round((completed / total) * 100) : 0
          
          set({
            courseProgress: { 
              ...courseProgress, 
              [courseId]: { completed, total, percentage }
            }
          })
        }
      },

      updateStreak: () => {
        const { lastStudyDate, streak } = get()
        const today = new Date().toISOString().split('T')[0]
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
        
        if (lastStudyDate === yesterday) {
          set({ streak: streak + 1, lastStudyDate: today })
        } else if (lastStudyDate !== today) {
          set({ streak: 1, lastStudyDate: today })
        }
      },

      addStudyTime: (minutes: number) => {
        const { timeSpent } = get()
        set({ timeSpent: timeSpent + minutes })
      },

      getLessonProgress: (courseId: string): CourseProgress => {
        const { courseProgress } = get()
        return courseProgress[courseId] || { completed: 0, total: 0, percentage: 0 }
      },

      isLessonCompleted: (lessonId: string) => {
        const { completedLessons } = get()
        return completedLessons.includes(lessonId)
      },
    }),
    {
      name: 'codemaster-progress',
    }
  )
)
