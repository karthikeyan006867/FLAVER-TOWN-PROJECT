import { currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Get friend suggestions
export async function GET() {
  try {
    const user = await currentUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Mock suggestions - in real app, use ML or similar users
    const suggestions = Array.from({ length: 9 }, (_, i) => ({
      id: `user-${i + 1}`,
      displayName: `Suggested User ${i + 1}`,
      avatar: '',
      level: Math.floor(Math.random() * 40) + 5,
      stats: {
        points: Math.floor(Math.random() * 8000),
        streak: Math.floor(Math.random() * 80),
        lessonsCompleted: Math.floor(Math.random() * 300)
      }
    }))

    return NextResponse.json({ 
      success: true,
      suggestions 
    })
  } catch (error) {
    console.error('Error fetching suggestions:', error)
    return NextResponse.json({ error: 'Failed to fetch suggestions' }, { status: 500 })
  }
}
