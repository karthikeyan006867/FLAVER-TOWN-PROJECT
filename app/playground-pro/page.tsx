'use client'

import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { 
  Code2, Play, Save, Share2, Download, Upload, 
  Settings, Terminal, FileCode, Maximize2, Copy, Check
} from 'lucide-react'

export default function AdvancedPlaygroundPage() {
  const { user, isLoaded } = useUser()
  const router = useRouter()
  const [code, setCode] = useState('// Write your code here\nconsole.log("Hello, World!")')
  const [output, setOutput] = useState('')
  const [language, setLanguage] = useState('javascript')
  const [theme, setTheme] = useState('dark')
  const [fontSize, setFontSize] = useState(14)
  const [showSettings, setShowSettings] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (isLoaded && !user) {
      router.push('/sign-in')
    }
  }, [isLoaded, user, router])

  const runCode = async () => {
    setIsRunning(true)
    try {
      // Simulate code execution
      setTimeout(() => {
        setOutput('Hello, World!\n')
        setIsRunning(false)
      }, 500)
    } catch (error) {
      setOutput(`Error: ${error}`)
      setIsRunning(false)
    }
  }

  const savePlayground = async () => {
    try {
      const res = await fetch('/api/playground/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, language, name: 'My Playground' })
      })
      if (res.ok) {
        alert('Playground saved!')
      }
    } catch (error) {
      console.error('Error saving:', error)
    }
  }

  const sharePlayground = async () => {
    const shareUrl = `${window.location.origin}/playground/shared/${Date.now()}`
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const languages = [
    'javascript', 'typescript', 'python', 'java', 'cpp', 
    'go', 'rust', 'php', 'ruby', 'swift'
  ]

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Toolbar */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Code2 className="w-6 h-6 text-blue-500" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-700 text-white px-3 py-2 rounded-lg text-sm border-none focus:ring-2 focus:ring-blue-500"
            >
              {languages.map(lang => (
                <option key={lang} value={lang}>{lang.toUpperCase()}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={runCode}
              disabled={isRunning}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
            >
              <Play className="w-4 h-4" />
              {isRunning ? 'Running...' : 'Run'}
            </button>
            <button
              onClick={savePlayground}
              className="p-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
            >
              <Save className="w-5 h-5" />
            </button>
            <button
              onClick={sharePlayground}
              className="p-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
            >
              {copied ? <Check className="w-5 h-5 text-green-500" /> : <Share2 className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className="mt-4 p-4 bg-gray-700 rounded-lg">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Theme</label>
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="w-full bg-gray-600 text-white px-3 py-2 rounded text-sm"
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                  <option value="monokai">Monokai</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Font Size</label>
                <input
                  type="number"
                  value={fontSize}
                  onChange={(e) => setFontSize(parseInt(e.target.value))}
                  className="w-full bg-gray-600 text-white px-3 py-2 rounded text-sm"
                  min="10"
                  max="24"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Tab Size</label>
                <select className="w-full bg-gray-600 text-white px-3 py-2 rounded text-sm">
                  <option value="2">2 spaces</option>
                  <option value="4">4 spaces</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Editor & Output Split */}
      <div className="flex-1 flex overflow-hidden">
        {/* Code Editor */}
        <div className="flex-1 flex flex-col">
          <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
            <span className="text-sm text-gray-400">Editor</span>
            <FileCode className="w-4 h-4 text-gray-500" />
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 bg-gray-900 text-gray-100 p-4 font-mono resize-none focus:outline-none"
            style={{ fontSize: `${fontSize}px` }}
            spellCheck={false}
          />
        </div>

        {/* Output Panel */}
        <div className="w-1/3 flex flex-col border-l border-gray-700">
          <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
            <span className="text-sm text-gray-400">Output</span>
            <Terminal className="w-4 h-4 text-gray-500" />
          </div>
          <div className="flex-1 bg-gray-950 p-4 overflow-auto">
            <pre className="text-gray-100 font-mono text-sm whitespace-pre-wrap">
              {output || '// Output will appear here'}
            </pre>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-gray-800 border-t border-gray-700 px-4 py-2 flex items-center justify-between text-xs text-gray-400">
        <div className="flex items-center gap-4">
          <span>Line 1, Col 1</span>
          <span>{language.toUpperCase()}</span>
          <span>UTF-8</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Auto-save: ON</span>
          <span>Collaborative: OFF</span>
        </div>
      </div>
    </div>
  )
}
