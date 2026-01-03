import { clerkMiddleware, createRouteMatcher, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhook(.*)', // Allow webhooks
])

const isAdminRoute = createRouteMatcher([
  '/admin(.*)',
  '/api/admin(.*)',
])

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const { userId } = await auth()
  
  // Check if route is protected and user is not authenticated
  if (!isPublicRoute(req) && !userId) {
    const signInUrl = new URL('/sign-in', req.url)
    signInUrl.searchParams.set('redirect_url', req.url)
    return NextResponse.redirect(signInUrl)
  }
  
  // Check admin routes
  if (isAdminRoute(req) && userId) {
    // Get full user data to access email and public metadata
    const user = await currentUser()
    
    if (!user) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
    
    // Admin emails list
    const adminEmails = ['kaarthii009.g@gmail.com', 'karthii009.g@gmail.com']
    
    // Check admin by role in public metadata
    const publicMetadata = user.publicMetadata as { role?: string } | undefined
    const isAdminByRole = publicMetadata?.role === 'admin'
    
    // Check admin by email
    const userEmail = user.emailAddresses?.[0]?.emailAddress
    const isAdminByEmail = userEmail 
      ? adminEmails.some(adminEmail => userEmail.toLowerCase() === adminEmail.toLowerCase())
      : false
    
    // Must be admin by role OR email
    if (!isAdminByRole && !isAdminByEmail) {
      console.log('❌ Admin Access Denied:', { userId, email: userEmail })
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
    
    console.log('✅ Admin Access Granted:', { userId, isAdminByRole, isAdminByEmail })
  }
  
  // Add security headers
  const response = NextResponse.next()
  
  // Add additional runtime security headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  
  return response
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
