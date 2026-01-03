import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
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
  const { userId, sessionClaims } = await auth()
  
  // Check if route is protected and user is not authenticated
  if (!isPublicRoute(req) && !userId) {
    const signInUrl = new URL('/sign-in', req.url)
    signInUrl.searchParams.set('redirect_url', req.url)
    return NextResponse.redirect(signInUrl)
  }
  
  // Check admin routes
  if (isAdminRoute(req)) {
    // TEMPORARY: Allow all authenticated users to access admin
    // TODO: Re-enable proper admin checking once we verify email/metadata
    if (!userId) {
      return NextResponse.redirect(new URL('/sign-in', req.url))
    }
    
    // Check public metadata for admin role OR email-based admin check
    const publicMetadata = sessionClaims?.public_metadata as { role?: string } | undefined
    const email = sessionClaims?.email as string | undefined
    const primaryEmail = sessionClaims?.primaryEmailAddress as string | undefined
    
    // Debug logging
    console.log('🔐 Admin Route Check:', {
      path: req.nextUrl.pathname,
      userId,
      email,
      primaryEmail,
      publicMetadata,
      sessionClaimsKeys: Object.keys(sessionClaims || {})
    })
    
    // Admin emails list
    const adminEmails = ['kaarthii009.g@gmail.com', 'karthii009.g@gmail.com']
    const isAdminByRole = publicMetadata?.role === 'admin'
    const isAdminByEmail = (email && adminEmails.includes(email.toLowerCase())) || 
                           (primaryEmail && adminEmails.includes(primaryEmail.toLowerCase()))
    
    console.log('✓ Admin Check Result:', { isAdminByRole, isAdminByEmail, allowed: true })
    
    // TEMPORARILY DISABLED - Allow everyone in for debugging
    /*
    if (!isAdminByRole && !isAdminByEmail) {
      // Redirect non-admins trying to access admin routes
      console.log('❌ Access Denied - Redirecting to /dashboard')
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
    */
    
    console.log('✅ Admin Access Granted (TEMPORARY - ALL USERS ALLOWED)')
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
