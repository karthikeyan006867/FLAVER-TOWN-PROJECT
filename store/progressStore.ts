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
  completedChallenges: string[] // Array of challenge IDs
  courseProgress: { [courseId: string]: CourseProgress }
  streak: number
  totalPoints: number
  lastStudyDate: string
  timeSpent: number // in minutes
  weeklyTime: number // time spent this week
  weekStartDate: string // start of current week
  
  completeLesson: (lessonId: string, courseId: string) => void
  completeChallenge: (challengeId: string) => void
  updateCourseProgress: (courseId: string) => void
  updateStreak: () => void
  addStudyTime: (minutes: number) => void
  getLessonProgress: (courseId: string) => CourseProgress
  isLessonCompleted: (lessonId: string) => boolean
  isLessonUnlocked: (lessonId: string, courseId: string) => boolean
  resetWeeklyTime: () => void
}

// Helper function to get start of week (Monday)
function getStartOfWeek(): string {
  const now = new Date()
  const day = now.getDay()
  const diff = now.getDate() - day + (day === 0 ? -6 : 1) // Adjust when day is Sunday
  const monday = new Date(now.setDate(diff))
  return monday.toISOString().split('T')[0]
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedLessons: [
        'html-1', 'html-2', 'html-3', // HTML basics (30 min)
        'css-1', 'css-2', // CSS intro (20 min)
        'js-1', 'js-2', 'js-3', // JavaScript fundamentals (30 min)
        'py-1', 'py-2' // Python intro (20 min)
      ], // Total: 100 minutes from lessons
      completedChallenges: [
        'js-ch-1', // FizzBuzz (15 min)
        'js-ch-2'  // Reverse String (15 min)
      ], // Total: 30 minutes from challenges
      courseProgress: {},
      streak: 1,
      totalPoints: 1100, // 10 lessons × 100 + 2 challenges × 50
      lastStudyDate: new Date().toISOString().split('T')[0],
      timeSpent: 130, // 100 min (lessons) + 30 min (challenges) = 2h 10min
      weeklyTime: 130,
      weekStartDate: getStartOfWeek(),

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
          
          // Add study time (estimate 10 mins per lesson)
          get().addStudyTime(10)
        }
      },

      completeChallenge: (challengeId: string) => {
        const { completedChallenges, totalPoints } = get()
        
        if (!completedChallenges.includes(challengeId)) {
          set({
            completedChallenges: [...completedChallenges, challengeId],
            totalPoints: totalPoints + 50, // Challenges give points
          })
          
          // Update streak
          get().updateStreak()
          
          // Add study time
          get().addStudyTime(15)
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
        const { timeSpent, weeklyTime, weekStartDate } = get()
        const currentWeekStart = getStartOfWeek()
        
        // Reset weekly time if we're in a new week
        if (weekStartDate !== currentWeekStart) {
          set({ 
            timeSpent: timeSpent + minutes,
            weeklyTime: minutes,
            weekStartDate: currentWeekStart
          })
        } else {
          set({ 
            timeSpent: timeSpent + minutes,
            weeklyTime: weeklyTime + minutes
          })
        }
      },

      resetWeeklyTime: () => {
        set({ weeklyTime: 0, weekStartDate: getStartOfWeek() })
      },

      getLessonProgress: (courseId: string): CourseProgress => {
        const { courseProgress } = get()
        return courseProgress[courseId] || { completed: 0, total: 0, percentage: 0 }
      },

      isLessonCompleted: (lessonId: string) => {
        const { completedLessons } = get()
        return completedLessons.includes(lessonId)
      },

      isLessonUnlocked: (lessonId: string, courseId: string) => {
        const { completedLessons } = get()
        const course = courses.find(c => c.id === courseId)
        
        if (!course) return false
        
        // Find the lesson index
        const lessonIndex = course.lessons.findIndex(l => l.id === lessonId)
        
        // First lesson is always unlocked
        if (lessonIndex === 0) return true
        
        // Check if previous lesson is completed
        const previousLesson = course.lessons[lessonIndex - 1]
        return completedLessons.includes(previousLesson.id)
      },
    }),
    {
      name: 'progress-storage',
    }
  )
)
