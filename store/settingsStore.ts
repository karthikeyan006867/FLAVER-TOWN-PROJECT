import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface AppSettings {
  // Appearance
  theme: 'dark' | 'light' | 'auto'
  colorScheme: 'default' | 'blue' | 'purple' | 'green' | 'orange'
  fontSize: 'small' | 'medium' | 'large' | 'x-large'
  reducedMotion: boolean
  
  // Code Editor
  editorTheme: 'vs-dark' | 'light' | 'hc-black'
  editorFontSize: number
  editorFontFamily: string
  editorLineHeight: number
  editorTabSize: number
  editorWordWrap: 'on' | 'off' | 'wordWrapColumn'
  editorMinimap: boolean
  editorLineNumbers: boolean
  editorAutoSave: boolean
  
  // Learning
  autoPlayNextLesson: boolean
  showHintsAutomatically: boolean
  enableKeyboardShortcuts: boolean
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  dailyGoalMinutes: number
  
  // Notifications
  emailDigest: boolean
  progressUpdates: boolean
  newCourses: boolean
  achievements: boolean
  dailyReminders: boolean
  weeklyReports: boolean
  
  // Privacy
  showProfile: boolean
  showProgress: boolean
  allowAnalytics: boolean
  shareAchievements: boolean
  
  // Accessibility
  highContrast: boolean
  screenReaderOptimized: boolean
  keyboardNavigationOnly: boolean
  captions: boolean
  
  // Language
  language: 'en' | 'es' | 'fr' | 'de' | 'pt' | 'zh' | 'ja'
  
  // Mobile
  hapticFeedback: boolean
  swipeGestures: boolean
  compactMode: boolean
}

interface SettingsState {
  settings: AppSettings
  updateSettings: (updates: Partial<AppSettings>) => void
  resetSettings: () => void
}

const defaultSettings: AppSettings = {
  // Appearance
  theme: 'dark',
  colorScheme: 'default',
  fontSize: 'medium',
  reducedMotion: false,
  
  // Code Editor
  editorTheme: 'vs-dark',
  editorFontSize: 14,
  editorFontFamily: 'Fira Code, Consolas, monospace',
  editorLineHeight: 1.6,
  editorTabSize: 2,
  editorWordWrap: 'on',
  editorMinimap: true,
  editorLineNumbers: true,
  editorAutoSave: true,
  
  // Learning
  autoPlayNextLesson: false,
  showHintsAutomatically: false,
  enableKeyboardShortcuts: true,
  difficulty: 'beginner',
  dailyGoalMinutes: 30,
  
  // Notifications
  emailDigest: true,
  progressUpdates: true,
  newCourses: false,
  achievements: true,
  dailyReminders: false,
  weeklyReports: true,
  
  // Privacy
  showProfile: true,
  showProgress: true,
  allowAnalytics: true,
  shareAchievements: true,
  
  // Accessibility
  highContrast: false,
  screenReaderOptimized: false,
  keyboardNavigationOnly: false,
  captions: false,
  
  // Language
  language: 'en',
  
  // Mobile
  hapticFeedback: true,
  swipeGestures: true,
  compactMode: false,
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      settings: defaultSettings,
      
      updateSettings: (updates) => set((state) => ({
        settings: { ...state.settings, ...updates }
      })),
      
      resetSettings: () => set({ settings: defaultSettings }),
    }),
    {
      name: 'codemaster-settings',
    }
  )
)
