import { currentUser, clerkClient } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Search for users to add as friends
export async function GET(request: Request) {
  try {
    const user = await currentUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q') || ''

    if (query.length < 2) {
      return NextResponse.json({ 
        success: true,
        users: [] 
      })
    }

    const currentFriends = (user.publicMetadata.friends as string[]) || []
    const pendingRequests = (user.publicMetadata.pendingFriendRequests as string[]) || []

    // Search users by email or name
    const { data: users } = await clerkClient.users.getUserList({
      query,
      limit: 20
    })

    const results = users
      .filter(u => u.id !== user.id) // Exclude self
      .map(foundUser => {
        const userMeta = foundUser.publicMetadata as any
        const isFriend = currentFriends.includes(foundUser.id)
        const isPending = pendingRequests.includes(foundUser.id)
        const hasRequested = ((foundUser.publicMetadata.friendRequests as string[]) || []).includes(user.id)

        return {
          id: foundUser.id,
          name: `${foundUser.firstName || ''} ${foundUser.lastName || ''}`.trim() || 'User',
          email: foundUser.emailAddresses[0]?.emailAddress || '',
          imageUrl: foundUser.imageUrl || `https://api.dicebear.com/7.x/avataaars/svg?seed=${foundUser.id}`,
          level: userMeta.level || 1,
          xp: userMeta.xp || 0,
          isFriend,
          isPending,
          hasRequested
        }
      })

    return NextResponse.json({ 
      success: true,
      users: results
    })
  } catch (error) {
    console.error('Error searching users:', error)
    return NextResponse.json({ error: 'Failed to search users' }, { status: 500 })
  }
}
