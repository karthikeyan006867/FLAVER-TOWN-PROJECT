import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
  matcher: [
    '/((?!.*\\.(?:jpg|jpeg|png|gif|svg|webp|ico|css|js)$).*)',
    '/(api|trpc)(.*)',
  ],
};
