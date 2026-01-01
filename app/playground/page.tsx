'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import CodeEditor from '@/components/CodeEditor'
import { Code2, Play } from 'lucide-react'

const initialCodes: { [key: string]: string } = {
  html: `<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>Welcome to my playground!</p>
</body>
</html>`,
  css: `/* Your CSS styles */
body {
  font-family: Arial, sans-serif;
  margin: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

h1 {
  color: white;
  text-align: center;
}`,
  javascript: `// Write your JavaScript code here
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));
console.log("Welcome to the Playground!");`,
  python: `# Write your Python code here
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
print("Welcome to the Playground!")`,
  typescript: `// Write your TypeScript code here
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));
console.log("Welcome to the Playground!");`
}

export default function PlaygroundPage() {
  const [language, setLanguage] = useState<'html' | 'css' | 'javascript' | 'python' | 'typescript'>('javascript')

  const languages = [
    { id: 'html', name: 'HTML', icon: '🌐' },
    { id: 'css', name: 'CSS', icon: '🎨' },
    { id: 'javascript', name: 'JavaScript', icon: '🟨' },
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'typescript', name: 'TypeScript', icon: '🔷' },
  ]

  const handleLanguageChange = (newLang: 'html' | 'css' | 'javascript' | 'python' | 'typescript') => {
    setLanguage(newLang)
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 pb-20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
              <Code2 className="h-8 w-8 text-primary-400" />
              <span className="text-gradient">Code Playground</span>
            </h1>
            <p className="text-gray-400">
              Experiment with code in multiple languages
            </p>
          </div>

          {/* Language Selector */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => handleLanguageChange(lang.id as any)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    language === lang.id
                      ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <span className="mr-2">{lang.icon}</span>
                  {lang.name}
                </button>
              ))}
            </div>
          </div>

          {/* Code Editor */}
          <div className="card-gradient border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Play className="h-5 w-5 text-primary-400" />
                Editor
              </h2>
            </div>
            
            <CodeEditor
              language={language}
              initialCode={initialCodes[language]}
            />
          </div>

          {/* Quick Tips */}
          <div className="mt-6 card-gradient border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-3">💡 Quick Tips</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">•</span>
                <span>Click &quot;Run Code&quot; to see your output</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">•</span>
                <span>Use console.log() in JavaScript/TypeScript or print() in Python to display output</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">•</span>
                <span>Switch between languages using the buttons above</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">•</span>
                <span>Your code resets when you change languages</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
