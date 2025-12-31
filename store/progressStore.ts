import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { courses } from '@/data/courses'

interface CourseProgress {
  completed: number
  total: number
  percentage: number
}

interface ProgressState {
  userId: string | null // Track which user this progress belongs to
  completedLessons: string[] // Array of lesson IDs
  completedChallenges: string[] // Array of challenge IDs
  unlockedAchievements: string[] // Array of achievement IDs
  courseProgress: { [courseId: string]: CourseProgress }
  streak: number
  longestStreak: number // Track longest streak ever achieved
  totalPoints: number
  lastStudyDate: string
  timeSpent: number // in minutes
  weeklyTime: number // time spent this week
  weekStartDate: string // start of current week
  weeklyLessons: number // lessons completed this week
  weeklyChallenges: number // challenges completed this week
  weeklyPoints: number // points earned this week
  
  setUserId: (userId: string) => void
  loadProgressFromClerk: (userData: any) => void
  completeLesson: (lessonId: string, courseId: string) => void
  completeChallenge: (challengeId: string) => void
  unlockAchievement: (achievementId: string) => void
  updateCourseProgress: (courseId: string) => void
  updateStreak: () => void
  addStudyTime: (minutes: number) => void
  getLessonProgress: (courseId: string) => CourseProgress
  isLessonCompleted: (lessonId: string) => boolean
  isLessonUnlocked: (lessonId: string, courseId: string) => boolean
  resetWeeklyTime: () => void
  clearProgress: () => void
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
      userId: null,
      completedLessons: [], // Start empty for new users
      completedChallenges: [], // Start empty for new users
      unlockedAchievements: [], // Start empty for new users
      courseProgress: {},
      streak: 0,
      longestStreak: 0,
      totalPoints: 0,
      lastStudyDate: '',
      timeSpent: 0,
      weeklyTime: 0,
      weekStartDate: getStartOfWeek(),
      weeklyLessons: 0,
      weeklyChallenges: 0,
      weeklyPoints: 0,

      setUserId: (userId: string) => {
        const currentUserId = get().userId
        // If switching users, clear the progress
        if (currentUserId && currentUserId !== userId) {
          get().clearProgress()
        }
        set({ userId })
      },

      loadProgressFromClerk: (userData: any) => {
        if (!userData) return
        
        const metadata = userData.publicMetadata || userData.unsafeMetadata || {}
        
        // Load progress from Clerk metadata
        set({
          completedLessons: metadata.completedLessons || [],
          completedChallenges: metadata.completedChallenges || [],
          unlockedAchievements: metadata.achievements || [],
          totalPoints: metadata.points || 0,
          streak: metadata.streak || 0,
          longestStreak: metadata.longestStreak || 0,
          timeSpent: metadata.timeSpent || 0,
          lastStudyDate: metadata.lastStudyDate || '',
        })
        
        // Recalculate all course progress
        courses.forEach(course => {
          get().updateCourseProgress(course.id)
        })
      },

      clearProgress: () => {
        set({
          completedLessons: [],
          completedChallenges: [],
          unlockedAchievements: [],
          courseProgress: {},
          streak: 0,
          longestStreak: 0,
          totalPoints: 0,
          lastStudyDate: '',
          timeSpent: 0,
          weeklyTime: 0,
          weekStartDate: getStartOfWeek(),
          weeklyLessons: 0,
          weeklyChallenges: 0,
          weeklyPoints: 0,
        })
      },

      unlockAchievement: (achievementId: string) => {
        const { unlockedAchievements } = get()
        if (!unlockedAchievements.includes(achievementId)) {
          set({
            unlockedAchievements: [...unlockedAchievements, achievementId]
          })
          // Sync to Clerk
          setTimeout(() => syncProgressToClerk(get()), 100)
        }
      },

      completeLesson: (lessonId: string, courseId: string) => {
        const { completedLessons, totalPoints, weeklyLessons, weeklyPoints, weekStartDate } = get()
        const currentWeekStart = getStartOfWeek()
        
        if (!completedLessons.includes(lessonId)) {
          // Check if new week and reset weekly stats
          const isNewWeek = weekStartDate !== currentWeekStart
          
          set({
            completedLessons: [...completedLessons, lessonId],
            totalPoints: totalPoints + 100,
            weeklyLessons: isNewWeek ? 1 : weeklyLessons + 1,
            weeklyPoints: isNewWeek ? 100 : weeklyPoints + 100,
            weekStartDate: currentWeekStart,
            weeklyChallenges: isNewWeek ? 0 : get().weeklyChallenges
          })
          
          // Update course progress
          get().updateCourseProgress(courseId)
          
          // Update streak
          get().updateStreak()
          
          // Add study time (estimate 10 mins per lesson)
          get().addStudyTime(10)
          
          // Immediately sync to Clerk
          setTimeout(() => syncProgressToClerk(get()), 100)
        }
      },

      completeChallenge: (challengeId: string) => {
        const { completedChallenges, totalPoints } = get()
        
        if (!completedChallenges.includes(challengeId)) {
          // Award points based on challenge type
          let points = 100 // Default points for challenges
          if (challengeId.includes('daily')) points = 100
          else if (challengeId.includes('hard')) points = 150
          else if (challengeId.includes('medium')) points = 100
          else if (challengeId.includes('easy')) points = 50
          
          // Immediately sync to Clerk after update
          setTimeout(() => syncProgressToClerk(get()), 100)
          
          set({
            completedChallenges: [...completedChallenges, challengeId],
            totalPoints: totalPoints + points,
          })
          
          // Update streak
          get().updateStreak()
          
          // Add study time (estimate 15 mins per challenge)
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
        const { lastStudyDate, streak, longestStreak } = get()
        const today = new Date().toISOString().split('T')[0]
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
        
        // If this is the first study session, start with streak of 1
        if (!lastStudyDate || lastStudyDate === '') {
          set({ 
            streak: 1, 
            longestStreak: 1,
            lastStudyDate: today 
          })
        } else if (lastStudyDate === yesterday) {
          const newStreak = streak + 1
          set({ 
            streak: newStreak, 
            longestStreak: Math.max(newStreak, longestStreak),
            lastStudyDate: today 
          })
        } else if (lastStudyDate !== today) {
          set({ 
            streak: 1, 
            lastStudyDate: today 
          })
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
        set({ 
          weeklyTime: 0, 
          weeklyLessons: 0,
          weeklyChallenges: 0,
          weeklyPoints: 0,
          weekStartDate: getStartOfWeek() 
        })
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
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        userId: state.userId,
        completedLessons: state.completedLessons,
        completedChallenges: state.completedChallenges,
        unlockedAchievements: state.unlockedAchievements,
        courseProgress: state.courseProgress,
        streak: state.streak,
        longestStreak: state.longestStreak,
        totalPoints: state.totalPoints,
        lastStudyDate: state.lastStudyDate,
        timeSpent: state.timeSpent,
        weeklyTime: state.weeklyTime,
        weekStartDate: state.weekStartDate,
        weeklyLessons: state.weeklyLessons,
        weeklyChallenges: state.weeklyChallenges,
        weeklyPoints: state.weeklyPoints,
      }),
    }
  )
)

// Helper function to sync progress to Clerk
async function syncProgressToClerk(state: ProgressState) {
  try {
    await fetch('/api/sync-progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        completedLessons: state.completedLessons,
        achievements: state.unlockedAchievements,
        points: state.totalPoints,
        streak: state.streak
      })
    })
  } catch (error) {
    console.error('Failed to sync progress to Clerk:', error)
  }
}

// Subscribe to store changes and sync
useProgressStore.subscribe((state) => {
  syncProgressToClerk(state)
})
