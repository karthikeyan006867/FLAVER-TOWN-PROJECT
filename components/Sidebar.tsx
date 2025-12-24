'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  BookOpen, 
  Target, 
  Trophy, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Courses', href: '/courses', icon: BookOpen },
  { name: 'Challenges', href: '/challenges', icon: Target },
  { name: 'Achievements', href: '/achievements', icon: Trophy },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-gray-900/50 backdrop-blur-xl border-r border-gray-800 transition-all duration-300 z-40 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-6 bg-gray-800 text-gray-300 p-1 rounded-full hover:bg-gray-700 transition-colors"
      >
        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all group ${
                isActive
                  ? 'bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-white border border-primary-500/30'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
              title={collapsed ? item.name : ''}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'text-primary-400' : 'group-hover:text-primary-400'}`} />
              {!collapsed && <span className="font-medium">{item.name}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Progress Summary (when not collapsed) */}
      {!collapsed && (
        <div className="absolute bottom-4 left-4 right-4 card-gradient p-4 rounded-lg border border-gray-700">
          <h3 className="text-sm font-semibold text-gray-300 mb-2">Weekly Progress</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-400">
              <span>Lessons</span>
              <span>12/20</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}
