import { currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Get user's friends list
export async function GET() {
  try {
    const user = await currentUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const friendships = (user.publicMetadata?.friendships as string[]) || []
    
    // In a real app, fetch full user data for each friend
    // For now, return mock data
    const friends = friendships.map((friendId, index) => ({
      id: friendId,
      displayName: `Friend ${index + 1}`,
      avatar: '',
      level: Math.floor(Math.random() * 50) + 1,
      status: Math.random() > 0.5 ? 'online' : 'offline',
      stats: {
        points: Math.floor(Math.random() * 10000),
        streak: Math.floor(Math.random() * 100),
        lessonsCompleted: Math.floor(Math.random() * 500)
      }
    }))

    return NextResponse.json({ 
      success: true,
      friends 
    })
  } catch (error) {
    console.error('Error fetching friends:', error)
    return NextResponse.json({ error: 'Failed to fetch friends' }, { status: 500 })
  }
}
