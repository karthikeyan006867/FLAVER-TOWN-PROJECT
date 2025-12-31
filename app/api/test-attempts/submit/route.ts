import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// POST - Submit test attempt
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { courseId, score, passed, answers, failed, failReason, tabSwitches } = body

    if (!courseId) {
      return NextResponse.json({ error: 'courseId required' }, { status: 400 })
    }

    // Get current user metadata
    const currentMetadata = user.publicMetadata as any || {}
    const testAttempts = currentMetadata.testAttempts || {}
    const courseAttempts = testAttempts[courseId] || {
      attempts: 0,
      passed: false,
      bestScore: 0,
      lastAttempt: null,
      history: []
    }

    // Create new attempt record
    const attemptRecord = {
      timestamp: new Date().toISOString(),
      score: score || 0,
      passed: passed || false,
      failed: failed || false,
      failReason: failReason || null,
      tabSwitches: tabSwitches || 0,
      answers: answers || []
    }

    // Update course attempts
    const updatedCourseAttempts = {
      attempts: courseAttempts.attempts + 1,
      passed: courseAttempts.passed || passed,
      bestScore: Math.max(courseAttempts.bestScore || 0, score || 0),
      lastAttempt: attemptRecord.timestamp,
      history: [...(courseAttempts.history || []), attemptRecord]
    }

    // Update test attempts in metadata
    testAttempts[courseId] = updatedCourseAttempts

    // Update user metadata
    await clerkClient.users.updateUserMetadata(user.id, {
      publicMetadata: {
        ...currentMetadata,
        testAttempts
      }
    })

    return NextResponse.json({ 
      success: true,
      attempts: updatedCourseAttempts.attempts,
      bestScore: updatedCourseAttempts.bestScore,
      passed: updatedCourseAttempts.passed
    })
  } catch (error) {
    console.error('Error submitting test attempt:', error)
    return NextResponse.json({ error: 'Failed to submit attempt' }, { status: 500 })
  }
}
