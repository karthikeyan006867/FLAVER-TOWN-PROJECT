'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import CodeEditor from '@/components/CodeEditor'
import { Play, Save, Share2, Trash2, Download, Upload, Copy } from 'lucide-react'

export default function PlaygroundPage() {
  const [language, setLanguage] = useState<'javascript' | 'python' | 'typescript' | 'java' | 'csharp' | 'go' | 'rust' | 'ruby' | 'php' | 'swift'>('javascript')
  const [code, setCode] = useState(`// Welcome to Code Playground!\n// Write and test code in any language\n\nconsole.log('Hello, World!');`)
  const [output, setOutput] = useState('')
  const [savedSnippets, setSavedSnippets] = useState<Array<{ id: string; name: string; language: string; code: string }>>([])

  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'java', label: 'Java' },
    { value: 'csharp', label: 'C#' },
    { value: 'go', label: 'Go' },
    { value: 'rust', label: 'Rust' },
    { value: 'ruby', label: 'Ruby' },
    { value: 'php', label: 'PHP' },
    { value: 'swift', label: 'Swift' }
  ]

  const handleRun = (result: { output: string; error?: string }) => {
    if (result.error) {
      setOutput(`❌ Error: ${result.error}`)
    } else {
      setOutput(result.output)
    }
  }

  const handleSave = () => {
    const name = prompt('Name your code snippet:')
    if (name) {
      setSavedSnippets([
        ...savedSnippets,
        { id: Date.now().toString(), name, language, code }
      ])
      alert('Snippet saved!')
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    alert('Code copied to clipboard!')
  }

  const handleClear = () => {
    if (confirm('Clear all code?')) {
      setCode('')
      setOutput('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 pb-20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-gradient">Code Playground</span>
            </h1>
            <p className="text-gray-400">
              Write, test, and experiment with code in any language
            </p>
          </div>

          {/* Controls */}
          <div className="mb-4 flex flex-wrap gap-3">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as any)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {languages.map(lang => (
                <option key={lang.value} value={lang.value}>{lang.label}</option>
              ))}
            </select>

            <div className="flex gap-2 ml-auto">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Save className="h-4 w-4" />
                Save
              </button>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Copy className="h-4 w-4" />
                Copy
              </button>
              <button
                onClick={handleClear}
                className="flex items-center gap-2 px-4 py-2 bg-red-900/30 border border-red-700 text-red-400 rounded-lg hover:bg-red-900/50 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
                Clear
              </button>
            </div>
          </div>

          {/* Editor */}
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="card-gradient border border-gray-700 rounded-xl p-4">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Play className="h-5 w-5 text-green-400" />
                Editor
              </h3>
              <CodeEditor
                language={language}
                initialCode={code}
              />
            </div>

            <div className="card-gradient border border-gray-700 rounded-xl p-4">
              <h3 className="text-lg font-semibold mb-3">Output</h3>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 min-h-[400px] font-mono text-sm overflow-auto">
                <pre className="text-green-400 whitespace-pre-wrap">{output || 'Run your code to see output...'}</pre>
              </div>
            </div>
          </div>

          {/* Saved Snippets */}
          {savedSnippets.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Saved Snippets</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {savedSnippets.map(snippet => (
                  <div key={snippet.id} className="card-gradient border border-gray-700 rounded-xl p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">{snippet.name}</h3>
                        <p className="text-xs text-gray-400">{snippet.language}</p>
                      </div>
                      <button
                        onClick={() => {
                          setLanguage(snippet.language as any)
                          setCode(snippet.code)
                        }}
                        className="text-primary-400 hover:text-primary-300"
                      >
                        Load
                      </button>
                    </div>
                    <pre className="text-xs text-gray-400 overflow-hidden">{snippet.code.substring(0, 100)}...</pre>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
