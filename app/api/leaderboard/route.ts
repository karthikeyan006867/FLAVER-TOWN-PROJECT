import { auth, clerkClient } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const { userId } = await auth()

    // Fetch all users from Clerk
    const { data: clerkUsers } = await clerkClient.users.getUserList({
      limit: 500
    })

    // Transform users with their progress data
    const leaderboardUsers = clerkUsers.map(user => {
      const metadata = user.publicMetadata as any
      const completedLessons = metadata?.completedLessons || []
      const completedChallenges = metadata?.completedChallenges || []
      const points = metadata?.points || 0
      const streak = metadata?.streak || 0

      return {
        id: user.id,
        name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.username || 'Anonymous',
        email: user.emailAddresses[0]?.emailAddress || '',
        imageUrl: user.imageUrl,
        points: points,
        streak: streak,
        completedLessons: completedLessons.length,
        completedChallenges: completedChallenges.length,
        accuracy: 92, // Can be calculated from challenge results if tracked
        languagesLearned: new Set(completedLessons.map((l: string) => l.split('-')[0])).size || 0,
        weeklyPoints: Math.floor(points * 0.1), // Can be tracked separately if needed
        fastestSolve: 120, // Can be tracked from challenge completion times
        isCurrentUser: user.id === userId,
        lastActive: user.lastSignInAt ? new Date(user.lastSignInAt).toISOString() : new Date(user.createdAt).toISOString()
      }
    })

    // Sort by points (highest first)
    leaderboardUsers.sort((a, b) => b.points - a.points)

    // Add ranks and calculate rank changes (can be improved with historical data)
    const rankedUsers = leaderboardUsers.map((user, index) => ({
      ...user,
      rank: index + 1,
      level: Math.floor(user.points / 500),
      rankChange: 'same' as const, // Can be calculated from previous snapshot
      rankChangeValue: 0
    }))

    return NextResponse.json({ users: rankedUsers })
  } catch (error) {
    console.error('Error fetching leaderboard:', error)
    return NextResponse.json({ error: 'Failed to fetch leaderboard' }, { status: 500 })
  }
}
