'use client'

import Link from 'next/link'
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import { Code2, Menu, X, Bell } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const { isSignedIn, user } = useUser()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [notifications, setNotifications] = useState<any[]>([])
  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    if (isSignedIn && user) {
      loadNotifications()
    }
  }, [isSignedIn, user])

  const loadNotifications = async () => {
    try {
      // Fetch friend requests as notifications
      const response = await fetch('/api/social/friends/requests')
      const data = await response.json()
      
      if (data.requests) {
        const notifs = data.requests.map((req: any) => ({
          id: req.userId,
          type: 'friend_request',
          message: `${req.name} sent you a friend request`,
          imageUrl: req.imageUrl,
          timestamp: new Date(),
          read: false
        }))
        setNotifications(notifs)
        setUnreadCount(notifs.length)
      }
    } catch (error) {
      console.error('Error loading notifications:', error)
    }
  }

  const handleAcceptRequest = async (friendId: string) => {
    try {
      await fetch('/api/social/friends/accept', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ friendId })
      })
      loadNotifications()
    } catch (error) {
      console.error('Error accepting request:', error)
    }
  }

  const handleRejectRequest = async (friendId: string) => {
    try {
      await fetch('/api/social/friends/reject', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ friendId })
      })
      loadNotifications()
    } catch (error) {
      console.error('Error rejecting request:', error)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">CodeMaster</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">
              Courses
            </Link>
            <Link href="/challenges" className="text-gray-300 hover:text-white transition-colors">
              Challenges
            </Link>
            <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
              Dashboard
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!isSignedIn ? (
              <>
                <SignInButton mode="modal">
                  <button className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold">
                    Get Started
                  </button>
                </SignUpButton>
              </>
            ) : (
              <>
                {/* Notifications Button */}
                <div className="relative">
                  <button
                    onClick={() => setNotificationsOpen(!notificationsOpen)}
                    className="relative p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800"
                  >
                    <Bell className="h-5 w-5" />
                    {unreadCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                        {unreadCount}
                      </span>
                    )}
                  </button>

                  {/* Notifications Dropdown */}
                  {notificationsOpen && (
                    <div className="absolute right-0 mt-2 w-80 bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden z-50">
                      <div className="p-3 border-b border-gray-700 flex items-center justify-between">
                        <h3 className="font-bold text-white">Notifications</h3>
                        {unreadCount > 0 && (
                          <span className="text-xs text-gray-400">{unreadCount} new</span>
                        )}
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.length === 0 ? (
                          <div className="p-6 text-center text-gray-400">
                            <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
                            <p className="text-sm">No new notifications</p>
                          </div>
                        ) : (
                          notifications.map((notif) => (
                            <div key={notif.id} className="p-3 border-b border-gray-700 hover:bg-gray-750">
                              <div className="flex items-start gap-3">
                                {notif.imageUrl ? (
                                  <img 
                                    src={notif.imageUrl} 
                                    alt="User"
                                    className="w-10 h-10 rounded-full"
                                  />
                                ) : (
                                  <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">
                                    {notif.message.charAt(0)}
                                  </div>
                                )}
                                <div className="flex-1">
                                  <p className="text-sm text-white mb-2">{notif.message}</p>
                                  {notif.type === 'friend_request' && (
                                    <div className="flex gap-2">
                                      <button
                                        onClick={() => handleAcceptRequest(notif.id)}
                                        className="px-3 py-1 bg-primary-500 text-white text-xs rounded hover:bg-primary-600 transition-colors"
                                      >
                                        Accept
                                      </button>
                                      <button
                                        onClick={() => handleRejectRequest(notif.id)}
                                        className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded hover:bg-gray-600 transition-colors"
                                      >
                                        Decline
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                </div>
                
                <UserButton afterSignOutUrl="/" />
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="/courses"
              className="block px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/challenges"
              className="block px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Challenges
            </Link>
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/download"
              className="block px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg transition-colors font-semibold text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              📱 Install as App
            </Link>
            {!isSignedIn && (
              <div className="pt-4 space-y-2">
                <SignInButton mode="modal">
                  <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold">
                    Get Started
                  </button>
                </SignUpButton>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
