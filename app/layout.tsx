import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata, Viewport } from 'next'
import ThemeProvider from '@/components/ThemeProvider'
import MobileInstallBanner from '@/components/MobileInstallBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flavor Town - Learn Programming from Scratch',
  description: 'Master 14+ programming languages with interactive lessons, projects, and challenges',
  manifest: '/manifest.json?v=20260419',
  icons: {
    icon: [
      { url: '/favicon.svg?v=20260419', type: 'image/svg+xml' },
      { url: '/favicon.ico?v=20260419' }
    ],
    shortcut: '/favicon.ico?v=20260419',
    apple: '/icon-192.svg?v=20260419'
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Flavor Town',
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#667eea'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className={inter.className}>
          <ThemeProvider>{children}</ThemeProvider>
          <MobileInstallBanner />
        </body>
      </html>
    </ClerkProvider>
  )
}
