'use client'

import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { useSettingsStore } from '@/store/settingsStore'
import { 
  User, Bell, Moon, Globe, Shield, Code, Save, Check, 
  Eye, Keyboard, Smartphone, Palette, Type, Zap, Target,
  Volume2, ChevronRight, RotateCcw, Download, Upload, Sun
} from 'lucide-react'

type SettingTab = 'appearance' | 'editor' | 'learning' | 'notifications' | 'privacy' | 'accessibility' | 'account'

export default function SettingsPage() {
  const { user } = useUser()
  const { settings, updateSettings, resetSettings } = useSettingsStore()
  const [activeTab, setActiveTab] = useState<SettingTab>('appearance')
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all settings to default?')) {
      resetSettings()
      handleSave()
    }
  }

  const tabs = [
    { id: 'appearance' as const, label: 'Appearance', icon: Palette },
    { id: 'editor' as const, label: 'Code Editor', icon: Code },
    { id: 'learning' as const, label: 'Learning', icon: Target },
    { id: 'notifications' as const, label: 'Notifications', icon: Bell },
    { id: 'privacy' as const, label: 'Privacy', icon: Shield },
    { id: 'accessibility' as const, label: 'Accessibility', icon: Eye },
    { id: 'account' as const, label: 'Account', icon: User },
  ]

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 pb-20 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
          {/* Header */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-gradient">Settings</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg">
              Customize your learning experience
            </p>
          </div>

          {/* Mobile Tab Selector */}
          <div className="md:hidden mb-6">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value as SettingTab)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {tabs.map(tab => (
                <option key={tab.id} value={tab.id}>{tab.label}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Desktop Sidebar */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <div className="card-gradient rounded-xl border border-gray-700 p-2 sticky top-20">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        activeTab === tab.id
                          ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                          : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{tab.label}</span>
                      {activeTab === tab.id && (
                        <ChevronRight className="h-4 w-4 ml-auto" />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Settings Content */}
            <div className="flex-1">
              <div className="card-gradient rounded-xl border border-gray-700 p-4 md:p-8">
                
                {/* Appearance Settings - Continues in next part */}
                {activeTab === 'appearance' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Palette className="h-6 w-6 text-primary-400" />
                        Appearance
                      </h2>
                    </div>

                    {/* Theme */}
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-gray-300">Theme</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { value: 'dark', label: 'Dark', icon: Moon },
                          { value: 'light', label: 'Light', icon: Sun },
                          { value: 'auto', label: 'Auto', icon: Smartphone }
                        ].map((theme) => {
                          const Icon = theme.icon
                          return (
                            <button
                              key={theme.value}
                              onClick={() => updateSettings({ theme: theme.value as any })}
                              className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                                settings.theme === theme.value
                                  ? 'border-primary-500 bg-primary-500/10'
                                  : 'border-gray-700 hover:border-gray-600'
                              }`}
                            >
                              <Icon className="h-6 w-6" />
                              <span className="text-sm font-medium">{theme.label}</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Font Size */}
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-gray-300">Font Size</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                          { value: 'small', label: 'Small', size: 'text-sm' },
                          { value: 'medium', label: 'Medium', size: 'text-base' },
                          { value: 'large', label: 'Large', size: 'text-lg' },
                          { value: 'x-large', label: 'Extra Large', size: 'text-xl' }
                        ].map((size) => (
                          <button
                            key={size.value}
                            onClick={() => updateSettings({ fontSize: size.value as any })}
                            className={`p-4 rounded-lg border-2 transition-all ${
                              settings.fontSize === size.value
                                ? 'border-primary-500 bg-primary-500/10'
                                : 'border-gray-700 hover:border-gray-600'
                            }`}
                          >
                            <Type className={`h-6 w-6 mx-auto mb-2 ${size.size}`} />
                            <span className="text-sm font-medium">{size.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Reduced Motion */}
                    <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Zap className="h-5 w-5 text-yellow-400" />
                        <div>
                          <div className="font-semibold">Reduce Motion</div>
                          <div className="text-sm text-gray-400">Minimize animations</div>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.reducedMotion}
                          onChange={(e) => updateSettings({ reducedMotion: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                      </label>
                    </div>
                  </div>
                )}

                {activeTab === 'editor' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <Code className="h-6 w-6 text-primary-400" />
                      Code Editor
                    </h2>
                    <div className="p-4 bg-gray-800/50 rounded-lg text-sm text-gray-400">
                      Advanced editor settings for customizing your coding experience
                    </div>
                  </div>
                )}

                {activeTab === 'learning' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <Target className="h-6 w-6 text-primary-400" />
                      Learning
                    </h2>
                    <div className="p-4 bg-gray-800/50 rounded-lg text-sm text-gray-400">
                      Customize your learning preferences and goals
                    </div>
                  </div>
                )}

                {activeTab === 'notifications' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <Bell className="h-6 w-6 text-primary-400" />
                      Notifications
                    </h2>
                    <div className="p-4 bg-gray-800/50 rounded-lg text-sm text-gray-400">
                      Manage how you receive notifications
                    </div>
                  </div>
                )}

                {activeTab === 'privacy' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <Shield className="h-6 w-6 text-primary-400" />
                      Privacy
                    </h2>
                    <div className="p-4 bg-gray-800/50 rounded-lg text-sm text-gray-400">
                      Control your privacy and data settings
                    </div>
                  </div>
                )}

                {activeTab === 'accessibility' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <Eye className="h-6 w-6 text-primary-400" />
                      Accessibility
                    </h2>
                    <div className="p-4 bg-gray-800/50 rounded-lg text-sm text-gray-400">
                      Accessibility options for better experience
                    </div>
                  </div>
                )}

                {activeTab === 'account' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <User className="h-6 w-6 text-primary-400" />
                      Account
                    </h2>
                    <div className="space-y-6">
                      <div className="p-4 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-2xl font-bold">
                            {user?.firstName?.[0] || 'U'}
                          </div>
                          <div>
                            <div className="font-semibold text-lg">{user?.fullName || 'User'}</div>
                            <div className="text-sm text-gray-400">{user?.primaryEmailAddress?.emailAddress}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleSave}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold hover:opacity-90 transition-all"
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
                <button
                  onClick={handleReset}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                >
                  <RotateCcw className="h-5 w-5" />
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
