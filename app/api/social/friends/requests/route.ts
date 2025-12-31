import { currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Get pending friend requests
export async function GET() {
  try {
    const user = await currentUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const pendingRequests = (user.publicMetadata?.pendingFriendRequests as string[]) || []
    
    // In real app, fetch full user data
    const requests = pendingRequests.map((userId, index) => ({
      id: userId,
      displayName: `User ${index + 1}`,
      avatar: '',
      level: Math.floor(Math.random() * 30) + 1,
      stats: {
        points: Math.floor(Math.random() * 5000),
        streak: Math.floor(Math.random() * 50),
        lessonsCompleted: Math.floor(Math.random() * 200)
      }
    }))

    return NextResponse.json({ 
      success: true,
      requests 
    })
  } catch (error) {
    console.error('Error fetching friend requests:', error)
    return NextResponse.json({ error: 'Failed to fetch requests' }, { status: 500 })
  }
}
