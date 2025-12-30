import { auth, clerkClient } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get the current user to check if admin
    const currentUser = await clerkClient.users.getUser(userId)
    const isAdmin = currentUser.emailAddresses[0]?.emailAddress === 'kaarthii009.g@gmail.com'

    if (!isAdmin) {
      return NextResponse.json({ error: 'Forbidden - Admin access only' }, { status: 403 })
    }

    // Fetch all users from Clerk
    const { data: clerkUsers } = await clerkClient.users.getUserList({
      limit: 500
    })

    // Combine with progress data
    const usersWithProgress = clerkUsers.map(user => {
      // Try to get progress from user's public metadata or return defaults
      const metadata = user.publicMetadata as any
      
      // Convert timestamps to ISO strings
      const lastSignInDate = user.lastSignInAt ? new Date(user.lastSignInAt).toISOString() : null
      const createdDate = user.createdAt ? new Date(user.createdAt).toISOString() : new Date().toISOString()
      
      return {
        userId: user.id,
        email: user.emailAddresses[0]?.emailAddress || 'No email',
        name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Anonymous',
        imageUrl: user.imageUrl,
        completedLessons: metadata?.completedLessons || [],
        achievements: metadata?.achievements || [],
        points: metadata?.points || 0,
        streak: metadata?.streak || 0,
        lastActive: lastSignInDate || createdDate,
        createdAt: createdDate
      }
    })

    return NextResponse.json({ users: usersWithProgress })
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}
