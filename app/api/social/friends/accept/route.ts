import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Accept friend request
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { userId: friendId } = await request.json()

    if (!friendId) {
      return NextResponse.json({ error: 'userId required' }, { status: 400 })
    }

    // Remove from pending requests
    const pendingRequests = (user.publicMetadata?.pendingFriendRequests as string[]) || []
    const updatedPending = pendingRequests.filter(id => id !== friendId)

    // Add to friends list
    const friends = (user.publicMetadata?.friendships as string[]) || []
    
    await clerkClient.users.updateUserMetadata(user.id, {
      publicMetadata: {
        ...user.publicMetadata,
        pendingFriendRequests: updatedPending,
        friendships: [...friends, friendId]
      }
    })

    // Update friend's list
    const friendUser = await clerkClient.users.getUser(friendId)
    const friendFriends = (friendUser.publicMetadata?.friendships as string[]) || []
    const friendSent = (friendUser.publicMetadata?.sentFriendRequests as string[]) || []
    
    await clerkClient.users.updateUserMetadata(friendId, {
      publicMetadata: {
        ...friendUser.publicMetadata,
        friendships: [...friendFriends, user.id],
        sentFriendRequests: friendSent.filter(id => id !== user.id)
      }
    })

    return NextResponse.json({ 
      success: true,
      message: 'Friend request accepted'
    })
  } catch (error) {
    console.error('Error accepting friend request:', error)
    return NextResponse.json({ error: 'Failed to accept friend request' }, { status: 500 })
  }
}
