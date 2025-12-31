import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Send friend request
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { targetUserId } = await request.json()

    if (!targetUserId) {
      return NextResponse.json({ error: 'targetUserId required' }, { status: 400 })
    }

    // Get current friend requests
    const sentRequests = (user.publicMetadata?.sentFriendRequests as string[]) || []
    
    if (sentRequests.includes(targetUserId)) {
      return NextResponse.json({ error: 'Friend request already sent' }, { status: 400 })
    }

    // Add to sent requests
    await clerkClient.users.updateUserMetadata(user.id, {
      publicMetadata: {
        ...user.publicMetadata,
        sentFriendRequests: [...sentRequests, targetUserId]
      }
    })

    // Add to target user's pending requests
    const targetUser = await clerkClient.users.getUser(targetUserId)
    const targetPending = (targetUser.publicMetadata?.pendingFriendRequests as string[]) || []
    
    await clerkClient.users.updateUserMetadata(targetUserId, {
      publicMetadata: {
        ...targetUser.publicMetadata,
        pendingFriendRequests: [...targetPending, user.id]
      }
    })

    return NextResponse.json({ 
      success: true,
      message: 'Friend request sent'
    })
  } catch (error) {
    console.error('Error sending friend request:', error)
    return NextResponse.json({ error: 'Failed to send friend request' }, { status: 500 })
  }
}
