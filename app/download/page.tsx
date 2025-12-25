'use client'

import { Download, Monitor, Smartphone } from 'lucide-react'
import Link from 'next/link'

export default function DownloadPage() {
  const handleDownload = (platform: 'windows' | 'android') => {
    if (platform === 'windows') {
      // Detect OS and download accordingly
      window.open('https://flaver-town-project.vercel.app', '_blank')
      alert('Windows app: Opening web version. For desktop app, install from Microsoft Store or use PWA (Add to Home Screen in browser)')
    } else {
      // Android download
      window.open('https://flaver-town-project.vercel.app', '_blank')
      alert('Android app: Opening web version. Tap menu → Add to Home Screen to install as app')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Download Flavor Town
          </h1>
          <p className="text-xl text-gray-300">
            Learn coding on your favorite platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Windows Download */}
          <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center">
                <Monitor className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Windows
            </h2>
            <p className="text-gray-300 text-center mb-6">
              Full desktop experience with offline support
            </p>
            <ul className="text-gray-400 space-y-2 mb-8">
              <li>✓ Native Windows application</li>
              <li>✓ Offline code editor</li>
              <li>✓ Auto-sync progress</li>
              <li>✓ Desktop notifications</li>
            </ul>
            <button
              onClick={() => handleDownload('windows')}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download for Windows
            </button>
            <p className="text-xs text-gray-500 text-center mt-4">
              Windows 10/11 • 64-bit • Free
            </p>
          </div>

          {/* Android Download */}
          <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center">
                <Smartphone className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Android
            </h2>
            <p className="text-gray-300 text-center mb-6">
              Learn coding anywhere, anytime on your phone
            </p>
            <ul className="text-gray-400 space-y-2 mb-8">
              <li>✓ Mobile-optimized interface</li>
              <li>✓ Code on the go</li>
              <li>✓ Cloud sync</li>
              <li>✓ Push notifications</li>
            </ul>
            <button
              onClick={() => handleDownload('android')}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download for Android
            </button>
            <p className="text-xs text-gray-500 text-center mt-4">
              Android 8.0+ • Free • APK Available
            </p>
          </div>
        </div>

        {/* Web Version */}
        <div className="mt-12 text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Use Web Version
            </h3>
            <p className="text-gray-300 mb-6">
              Access Flavor Town instantly in your browser - no download required
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Launch Web App
            </Link>
          </div>
        </div>

        {/* Installation Instructions */}
        <div className="mt-12 glass-effect rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            How to Install PWA (Progressive Web App)
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-purple-400 mb-3">
                Windows (Chrome/Edge)
              </h4>
              <ol className="text-gray-300 space-y-2 list-decimal list-inside">
                <li>Open https://flaver-town-project.vercel.app</li>
                <li>Click the install icon (⊕) in the address bar</li>
                <li>Click "Install"</li>
                <li>App will open in its own window</li>
              </ol>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-green-400 mb-3">
                Android (Chrome)
              </h4>
              <ol className="text-gray-300 space-y-2 list-decimal list-inside">
                <li>Open https://flaver-town-project.vercel.app</li>
                <li>Tap the menu (⋮) in top right</li>
                <li>Select "Add to Home screen"</li>
                <li>Tap "Add" to confirm</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
