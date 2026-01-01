'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import { 
  Home, 
  BookOpen, 
  Target, 
  Trophy, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Code2,
  TrendingUp,
  Calendar,
  Map,
  Users,
  FileCode,
  BarChart3,
  MessageSquare,
  Shield,
  Briefcase,
  Award,
  GraduationCap
} from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Courses', href: '/courses', icon: BookOpen },
  { name: 'Challenges', href: '/challenges', icon: Target },
  { name: 'Daily Challenge', href: '/daily-challenge', icon: Calendar },
  { name: 'Playground', href: '/playground', icon: Code2 },
  { name: 'Learning Paths', href: '/learning-paths', icon: Map },
  { name: 'Career Paths', href: '/career', icon: Briefcase },
  { name: 'Certifications', href: '/certifications', icon: GraduationCap },
  { name: 'Snippets', href: '/snippets', icon: FileCode },
  { name: 'Leaderboard', href: '/leaderboard', icon: TrendingUp },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Achievements', href: '/achievements', icon: Trophy },
]

const bottomNavigation = [
  { name: 'Settings', href: '/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()
  const { user } = useUser()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const adminEmails = ['kaarthii009.g@gmail.com', 'karthii009.g@gmail.com']
  const userEmail = user?.emailAddresses[0]?.emailAddress?.toLowerCase()
  const isAdmin = userEmail && adminEmails.includes(userEmail)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden fixed bottom-4 right-4 z-50 bg-gradient-to-r from-primary-600 to-accent-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        {mobileOpen ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
      </button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-gray-900/95 backdrop-blur-xl border-r border-gray-800 transition-all duration-300 z-40 ${
          collapsed ? 'w-16' : 'w-64'
        } ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="hidden md:block absolute -right-3 top-6 bg-gray-800 text-gray-300 p-1 rounded-full hover:bg-gray-700 transition-colors"
      >
        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>

      {/* Navigation */}
      <div className="flex flex-col h-full">
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {navigation.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
            
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
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

        {/* Bottom Navigation - Settings + Admin */}
        <div className="p-4 border-t border-gray-800 space-y-2">
          {isAdmin && (
            <Link
              href="/admin-panel"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all group ${
                pathname === '/admin-panel' || pathname?.startsWith('/admin-panel/')
                  ? 'bg-gradient-to-r from-red-500/20 to-orange-500/20 text-white border border-red-500/30'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
              title={collapsed ? 'Admin Dashboard' : ''}
            >
              <Shield className={`h-5 w-5 ${pathname === '/admin-panel' ? 'text-red-400' : 'group-hover:text-red-400'}`} />
              {!collapsed && <span className="font-medium">Admin Dashboard</span>}
            </Link>
          )}
          {bottomNavigation.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
            
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
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
        </div>
      </div>
      </aside>
    </>
  )
}
