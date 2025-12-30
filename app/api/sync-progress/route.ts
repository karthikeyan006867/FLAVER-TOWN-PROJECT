import { auth, clerkClient } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { completedLessons, achievements, points, streak } = body

    // Update user's public metadata in Clerk
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        completedLessons: completedLessons || [],
        achievements: achievements || [],
        points: points || 0,
        streak: streak || 0,
        lastUpdated: new Date().toISOString()
      }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error syncing progress:', error)
    return NextResponse.json({ error: 'Failed to sync progress' }, { status: 500 })
  }
}
