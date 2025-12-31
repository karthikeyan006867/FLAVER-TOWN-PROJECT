import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Remove friend
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

    // Remove from user's friends
    const friends = (user.publicMetadata?.friendships as string[]) || []
    const updatedFriends = friends.filter(id => id !== friendId)
    
    await clerkClient.users.updateUserMetadata(user.id, {
      publicMetadata: {
        ...user.publicMetadata,
        friendships: updatedFriends
      }
    })

    // Remove from friend's list
    const friendUser = await clerkClient.users.getUser(friendId)
    const friendFriends = (friendUser.publicMetadata?.friendships as string[]) || []
    
    await clerkClient.users.updateUserMetadata(friendId, {
      publicMetadata: {
        ...friendUser.publicMetadata,
        friendships: friendFriends.filter(id => id !== user.id)
      }
    })

    return NextResponse.json({ 
      success: true,
      message: 'Friend removed'
    })
  } catch (error) {
    console.error('Error removing friend:', error)
    return NextResponse.json({ error: 'Failed to remove friend' }, { status: 500 })
  }
}
