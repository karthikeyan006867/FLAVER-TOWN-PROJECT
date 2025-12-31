import { currentUser, clerkClient } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Reject friend request
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { friendId } = await request.json()

    if (!friendId) {
      return NextResponse.json({ error: 'friendId required' }, { status: 400 })
    }

    // Remove from friend requests
    const friendRequests = (user.publicMetadata.friendRequests as string[]) || []

    if (!friendRequests.includes(friendId)) {
      return NextResponse.json({ error: 'No friend request from this user' }, { status: 400 })
    }

    await clerkClient.users.updateUser(user.id, {
      publicMetadata: {
        ...user.publicMetadata,
        friendRequests: friendRequests.filter(id => id !== friendId)
      }
    })

    // Remove from requester's pending list
    const requester = await clerkClient.users.getUser(friendId)
    const pendingRequests = (requester.publicMetadata.pendingFriendRequests as string[]) || []

    await clerkClient.users.updateUser(friendId, {
      publicMetadata: {
        ...requester.publicMetadata,
        pendingFriendRequests: pendingRequests.filter(id => id !== user.id)
      }
    })

    return NextResponse.json({ 
      success: true,
      message: 'Friend request rejected'
    })
  } catch (error) {
    console.error('Error rejecting friend request:', error)
    return NextResponse.json({ error: 'Failed to reject friend request' }, { status: 500 })
  }
}
