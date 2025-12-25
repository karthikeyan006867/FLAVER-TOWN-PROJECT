'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { FileCode, Plus, Search, Tag, Star, Copy, Trash2, Edit } from 'lucide-react'

const snippets = [
  {
    id: '1',
    title: 'Debounce Function',
    language: 'javascript',
    code: `function debounce(func, delay) {\n  let timeout;\n  return function(...args) {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => func.apply(this, args), delay);\n  };\n}`,
    tags: ['utility', 'performance'],
    starred: true,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Quick Sort Algorithm',
    language: 'python',
    code: `def quicksort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + middle + quicksort(right)`,
    tags: ['algorithm', 'sorting'],
    starred: false,
    createdAt: '2024-01-14'
  },
  {
    id: '3',
    title: 'React Custom Hook',
    language: 'typescript',
    code: `import { useState, useEffect } from 'react';\n\nfunction useLocalStorage<T>(key: string, initialValue: T) {\n  const [value, setValue] = useState<T>(() => {\n    const item = localStorage.getItem(key);\n    return item ? JSON.parse(item) : initialValue;\n  });\n\n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value));\n  }, [key, value]);\n\n  return [value, setValue] as const;\n}`,
    tags: ['react', 'hooks', 'typescript'],
    starred: true,
    createdAt: '2024-01-13'
  }
]

export default function SnippetsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('all')
  const [selectedSnippet, setSelectedSnippet] = useState(snippets[0])

  const filteredSnippets = snippets.filter(snippet => {
    const matchesSearch = snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         snippet.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesLanguage = selectedLanguage === 'all' || snippet.language === selectedLanguage
    return matchesSearch && matchesLanguage
  })

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code)
    alert('Code copied to clipboard!')
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 pb-20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
                <FileCode className="h-8 w-8 text-primary-400" />
                <span className="text-gradient">Code Snippets</span>
              </h1>
              <p className="text-gray-400">
                Save and organize your favorite code snippets
              </p>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold">
              <Plus className="h-5 w-5" />
              New Snippet
            </button>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-wrap gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search snippets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Languages</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="typescript">TypeScript</option>
              <option value="java">Java</option>
              <option value="csharp">C#</option>
            </select>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Snippets List */}
            <div className="lg:col-span-1 space-y-3">
              <h2 className="font-semibold text-sm text-gray-400 mb-3">
                {filteredSnippets.length} snippets
              </h2>
              {filteredSnippets.map((snippet) => (
                <div
                  key={snippet.id}
                  onClick={() => setSelectedSnippet(snippet)}
                  className={`card-gradient border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    selectedSnippet?.id === snippet.id
                      ? 'border-primary-500'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{snippet.title}</h3>
                    {snippet.starred && (
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded text-xs">
                      {snippet.language}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {snippet.tags.map((tag, i) => (
                      <span key={i} className="text-xs text-gray-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Snippet Details */}
            {selectedSnippet && (
              <div className="lg:col-span-2 card-gradient border border-gray-700 rounded-xl p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{selectedSnippet.title}</h2>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-semibold">
                        {selectedSnippet.language}
                      </span>
                      <span className="text-sm text-gray-400">
                        Created {selectedSnippet.createdAt}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                      <Star className={`h-5 w-5 ${selectedSnippet.starred ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} />
                    </button>
                    <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                      <Edit className="h-5 w-5 text-gray-400" />
                    </button>
                    <button className="p-2 bg-red-900/30 rounded-lg hover:bg-red-900/50 transition-colors">
                      <Trash2 className="h-5 w-5 text-red-400" />
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {selectedSnippet.tags.map((tag, i) => (
                      <span key={i} className="flex items-center gap-1 px-3 py-1 bg-gray-800 rounded-full text-sm">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <button
                    onClick={() => handleCopy(selectedSnippet.code)}
                    className="absolute top-3 right-3 flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
                  >
                    <Copy className="h-4 w-4" />
                    Copy
                  </button>
                  <pre className="bg-gray-900 border border-gray-800 rounded-xl p-4 overflow-auto">
                    <code className="text-sm text-gray-300">{selectedSnippet.code}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
