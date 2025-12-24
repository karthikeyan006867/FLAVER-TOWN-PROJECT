'use client'

import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { User, Bell, Moon, Globe, Shield, Code, Save, Check } from 'lucide-react'

export default function SettingsPage() {
  const { user } = useUser()
  const [saved, setSaved] = useState(false)
  const [settings, setSettings] = useState({
    notifications: {
      emailDigest: true,
      progressUpdates: true,
      newCourses: false,
      achievements: true,
    },
    preferences: {
      theme: 'dark',
      language: 'en',
      codeTheme: 'vs-dark',
      fontSize: 'medium',
    },
    privacy: {
      showProfile: true,
      showProgress: true,
      allowAnalytics: true,
    }
  })

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 transition-all duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              <span className="text-gradient">Settings</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Customize your learning experience
            </p>
          </div>

          <div className="space-y-6">
            {/* Profile Section */}
            <div className="card-gradient p-6 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <User className="h-5 w-5 text-primary-400" />
                <h2 className="text-xl font-bold">Profile Information</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Display Name</label>
                  <input
                    type="text"
                    value={user?.firstName || 'Learner'}
                    disabled
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white opacity-75"
                  />
                  <p className="text-xs text-gray-500 mt-1">Managed through your Clerk account</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={user?.primaryEmailAddress?.emailAddress || ''}
                    disabled
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white opacity-75"
                  />
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="card-gradient p-6 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="h-5 w-5 text-primary-400" />
                <h2 className="text-xl font-bold">Notifications</h2>
              </div>
              <div className="space-y-4">
                {[
                  { key: 'emailDigest', label: 'Weekly email digest', desc: 'Get a summary of your progress' },
                  { key: 'progressUpdates', label: 'Progress updates', desc: 'Notifications when you complete milestones' },
                  { key: 'newCourses', label: 'New course alerts', desc: 'Be the first to know about new content' },
                  { key: 'achievements', label: 'Achievement unlocked', desc: 'Get notified when you earn badges' },
                ].map(item => (
                  <label key={item.key} className="flex items-start justify-between cursor-pointer group">
                    <div className="flex-1">
                      <div className="font-medium group-hover:text-primary-400 transition-colors">{item.label}</div>
                      <div className="text-sm text-gray-400">{item.desc}</div>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={settings.notifications[item.key as keyof typeof settings.notifications]}
                        onChange={(e) => setSettings({
                          ...settings,
                          notifications: { ...settings.notifications, [item.key]: e.target.checked }
                        })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Learning Preferences */}
            <div className="card-gradient p-6 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <Code className="h-5 w-5 text-primary-400" />
                <h2 className="text-xl font-bold">Learning Preferences</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Code Editor Theme</label>
                  <select
                    value={settings.preferences.codeTheme}
                    onChange={(e) => setSettings({
                      ...settings,
                      preferences: { ...settings.preferences, codeTheme: e.target.value }
                    })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-primary-500 focus:outline-none"
                  >
                    <option value="vs-dark">Dark (Default)</option>
                    <option value="light">Light</option>
                    <option value="hc-black">High Contrast</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Font Size</label>
                  <select
                    value={settings.preferences.fontSize}
                    onChange={(e) => setSettings({
                      ...settings,
                      preferences: { ...settings.preferences, fontSize: e.target.value }
                    })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-primary-500 focus:outline-none"
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium (Default)</option>
                    <option value="large">Large</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="card-gradient p-6 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-5 w-5 text-primary-400" />
                <h2 className="text-xl font-bold">Privacy & Data</h2>
              </div>
              <div className="space-y-4">
                {[
                  { key: 'showProfile', label: 'Public profile', desc: 'Allow others to view your profile' },
                  { key: 'showProgress', label: 'Show progress', desc: 'Display your learning progress publicly' },
                  { key: 'allowAnalytics', label: 'Analytics', desc: 'Help us improve with usage data' },
                ].map(item => (
                  <label key={item.key} className="flex items-start justify-between cursor-pointer group">
                    <div className="flex-1">
                      <div className="font-medium group-hover:text-primary-400 transition-colors">{item.label}</div>
                      <div className="text-sm text-gray-400">{item.desc}</div>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={settings.privacy[item.key as keyof typeof settings.privacy]}
                        onChange={(e) => setSettings({
                          ...settings,
                          privacy: { ...settings.privacy, [item.key]: e.target.checked }
                        })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                {saved ? (
                  <>
                    <Check className="h-5 w-5" />
                    Saved!
                  </>
                ) : (
                  <>
                    <Save className="h-5 w-5" />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
