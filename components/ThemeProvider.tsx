'use client'

import { useEffect } from 'react'
import { useSettingsStore } from '@/store/settingsStore'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { settings } = useSettingsStore()

  useEffect(() => {
    const root = document.documentElement
    
    // Apply theme
    if (settings.theme === 'auto') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      root.classList.toggle('dark', isDark)
      root.classList.toggle('light', !isDark)
    } else {
      root.classList.toggle('dark', settings.theme === 'dark')
      root.classList.toggle('light', settings.theme === 'light')
    }

    // Apply color scheme
    root.setAttribute('data-color-scheme', settings.colorScheme)
    
    // Apply font size
    const fontSizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px',
      'x-large': '20px'
    }
    root.style.fontSize = fontSizeMap[settings.fontSize]
    
    // Apply reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms')
    } else {
      root.style.setProperty('--animation-duration', '300ms')
    }

    // Apply high contrast
    root.classList.toggle('high-contrast', settings.highContrast)
    
  }, [settings])

  return <>{children}</>
}
