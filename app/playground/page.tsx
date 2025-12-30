'use client'

import { useState, useRef, useEffect } from 'react'
import { Editor } from '@monaco-editor/react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Play, Save, Trash2, Download, Eye, Code as CodeIcon } from 'lucide-react'

export default function PlaygroundPage() {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'javascript'>('html')
  const [htmlCode, setHtmlCode] = useState('<div class="container">\n  <h1>Hello World!</h1>\n  <p>Start coding...</p>\n</div>')
  const [cssCode, setCssCode] = useState('.container {\n  padding: 20px;\n  text-align: center;\n  font-family: Arial, sans-serif;\n}\n\nh1 {\n  color: #3b82f6;\n}')
  const [jsCode, setJsCode] = useState('// JavaScript code\nconsole.log("Hello from playground!");\n\n// Example: Add click event\n// document.querySelector("h1").addEventListener("click", () => {\n//   alert("Hello!");\n// });')
  const [output, setOutput] = useState('')
  const [consoleOutput, setConsoleOutput] = useState<string[]>([])
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const runCode = () => {
    const fullHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    ${cssCode}
  </style>
</head>
<body>
  ${htmlCode}
  <script>
    // Capture console.log
    (function() {
      const oldLog = console.log;
      const oldError = console.error;
      const oldWarn = console.warn;
      
      console.log = function(...args) {
        window.parent.postMessage({ type: 'console', method: 'log', args: args }, '*');
        oldLog.apply(console, args);
      };
      
      console.error = function(...args) {
        window.parent.postMessage({ type: 'console', method: 'error', args: args }, '*');
        oldError.apply(console, args);
      };
      
      console.warn = function(...args) {
        window.parent.postMessage({ type: 'console', method: 'warn', args: args }, '*');
        oldWarn.apply(console, args);
      };
      
      window.onerror = function(msg, url, line) {
        window.parent.postMessage({ type: 'console', method: 'error', args: ['Error: ' + msg + ' (Line ' + line + ')'] }, '*');
        return false;
      };
    })();
    
    try {
      ${jsCode}
    } catch (err) {
      console.error('JavaScript Error:', err.message);
    }
  </script>
</body>
</html>`

    setOutput(fullHTML)
    setConsoleOutput([])
  }

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'console') {
        const { method, args } = event.data
        const formattedArgs = args.map((arg: any) => {
          if (typeof arg === 'object') {
            try {
              return JSON.stringify(arg, null, 2)
            } catch {
              return String(arg)
            }
          }
          return String(arg)
        }).join(' ')
        
        setConsoleOutput(prev => [...prev, `[${method}] ${formattedArgs}`])
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  useEffect(() => {
    // Auto-run on mount
    runCode()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSave = () => {
    const name = prompt('Name your project:')
    if (name) {
      const project = { 
        id: Date.now().toString(), 
        name, 
        html: htmlCode,
        css: cssCode,
        js: jsCode
      }
      
      const saved = localStorage.getItem('playground-projects')
      const projects = saved ? JSON.parse(saved) : []
      localStorage.setItem('playground-projects', JSON.stringify([...projects, project]))
      
      alert('Project saved!')
    }
  }

  const handleClear = () => {
    if (confirm('Clear all code?')) {
      setHtmlCode('<div class="container">\n  <h1>Hello World!</h1>\n  <p>Start coding...</p>\n</div>')
      setCssCode('.container {\n  padding: 20px;\n  text-align: center;\n  font-family: Arial, sans-serif;\n}\n\nh1 {\n  color: #3b82f6;\n}')
      setJsCode('// JavaScript code\nconsole.log("Hello from playground!");')
      setOutput('')
      setConsoleOutput([])
      runCode()
    }
  }

  const handleDownload = () => {
    const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Playground Project</title>
  <style>
${cssCode}
  </style>
</head>
<body>
${htmlCode}
  <script>
${jsCode}
  </script>
</body>
</html>`

    const blob = new Blob([fullHTML], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'playground-project.html'
    a.click()
    URL.revokeObjectURL(url)
  }

  const getActiveCode = () => {
    switch(activeTab) {
      case 'html': return htmlCode
      case 'css': return cssCode
      case 'javascript': return jsCode
    }
  }

  const setActiveCode = (value: string) => {
    switch(activeTab) {
      case 'html': setHtmlCode(value); break
      case 'css': setCssCode(value); break
      case 'javascript': setJsCode(value); break
    }
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 pb-20 transition-all duration-300">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-gradient">Web Playground</span>
            </h1>
            <p className="text-gray-400">
              Build and preview HTML, CSS, and JavaScript in real-time
            </p>
          </div>

          {/* Controls */}
          <div className="mb-4 flex flex-wrap gap-3 items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('html')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'html' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-800 border border-gray-700 hover:bg-gray-700'
                }`}
              >
                HTML
              </button>
              <button
                onClick={() => setActiveTab('css')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'css' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-800 border border-gray-700 hover:bg-gray-700'
                }`}
              >
                CSS
              </button>
              <button
                onClick={() => setActiveTab('javascript')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'javascript' 
                    ? 'bg-yellow-500 text-white' 
                    : 'bg-gray-800 border border-gray-700 hover:bg-gray-700'
                }`}
              >
                JavaScript
              </button>
            </div>

            <div className="flex gap-2">
              <button
                onClick={runCode}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:opacity-90 transition-colors"
              >
                <Play className="h-4 w-4" />
                Run Code
              </button>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Save className="h-4 w-4" />
                Save
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Download className="h-4 w-4" />
                Download
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

          {/* Editor and Preview Grid */}
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Code Editor */}
            <div className="card-gradient border border-gray-700 rounded-xl overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <CodeIcon className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-400">Code Editor - {activeTab.toUpperCase()}</span>
                </div>
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              <Editor
                height="500px"
                language={activeTab === 'javascript' ? 'javascript' : activeTab}
                value={getActiveCode()}
                onChange={(value) => setActiveCode(value || '')}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  roundedSelection: false,
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  tabSize: 2,
                }}
              />
            </div>

            {/* Preview */}
            <div className="card-gradient border border-gray-700 rounded-xl overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-400">Live Preview</span>
                </div>
              </div>
              
              <iframe
                ref={iframeRef}
                srcDoc={output}
                className="w-full h-[500px] bg-white"
                title="Preview"
                sandbox="allow-scripts"
              />
            </div>
          </div>

          {/* Console Output */}
          {consoleOutput.length > 0 && (
            <div className="mt-4 card-gradient border border-gray-700 rounded-xl overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
                <span className="text-sm text-gray-400">Console Output</span>
              </div>
              <div className="p-4 bg-gray-900 font-mono text-sm max-h-40 overflow-y-auto">
                {consoleOutput.map((log, i) => (
                  <div 
                    key={i} 
                    className={`mb-1 ${
                      log.includes('[error]') ? 'text-red-400' : 
                      log.includes('[warn]') ? 'text-yellow-400' : 
                      'text-green-400'
                    }`}
                  >
                    {log}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Templates */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Quick Start Templates</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <button
                onClick={() => {
                  setHtmlCode('<div class="card">\n  <h2>Welcome!</h2>\n  <p>Click me</p>\n</div>')
                  setCssCode('.card {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  padding: 40px;\n  border-radius: 10px;\n  color: white;\n  text-align: center;\n  cursor: pointer;\n  transition: transform 0.3s;\n}\n\n.card:hover {\n  transform: scale(1.05);\n}')
                  setJsCode('document.querySelector(".card").addEventListener("click", () => {\n  alert("Hello from Playground!");\n});')
                  setTimeout(runCode, 100)
                }}
                className="card-gradient border border-gray-700 rounded-xl p-4 hover:border-primary-500 transition-colors text-left"
              >
                <div className="text-2xl mb-2">🎨</div>
                <h3 className="font-semibold mb-1">Gradient Card</h3>
                <p className="text-sm text-gray-400">Interactive card with hover effect</p>
              </button>

              <button
                onClick={() => {
                  setHtmlCode('<button id="counter">Count: 0</button>')
                  setCssCode('#counter {\n  background: #3b82f6;\n  color: white;\n  border: none;\n  padding: 15px 30px;\n  border-radius: 8px;\n  font-size: 18px;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n\n#counter:hover {\n  background: #2563eb;\n}')
                  setJsCode('let count = 0;\nconst btn = document.getElementById("counter");\n\nbtn.addEventListener("click", () => {\n  count++;\n  btn.textContent = `Count: ${count}`;\n  console.log("Counter:", count);\n});')
                  setTimeout(runCode, 100)
                }}
                className="card-gradient border border-gray-700 rounded-xl p-4 hover:border-primary-500 transition-colors text-left"
              >
                <div className="text-2xl mb-2">🔢</div>
                <h3 className="font-semibold mb-1">Counter App</h3>
                <p className="text-sm text-gray-400">Simple click counter</p>
              </button>

              <button
                onClick={() => {
                  setHtmlCode('<div class="container">\n  <input type="text" id="input" placeholder="Type something...">\n  <div id="output">Start typing...</div>\n</div>')
                  setCssCode('.container {\n  padding: 20px;\n  max-width: 500px;\n  margin: 0 auto;\n}\n\ninput {\n  width: 100%;\n  padding: 12px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 16px;\n}\n\n#output {\n  margin-top: 20px;\n  padding: 15px;\n  background: #f3f4f6;\n  border-radius: 8px;\n  min-height: 50px;\n}')
                  setJsCode('const input = document.getElementById("input");\nconst output = document.getElementById("output");\n\ninput.addEventListener("input", (e) => {\n  output.textContent = e.target.value || "Start typing...";\n  console.log("Input value:", e.target.value);\n});')
                  setTimeout(runCode, 100)
                }}
                className="card-gradient border border-gray-700 rounded-xl p-4 hover:border-primary-500 transition-colors text-left"
              >
                <div className="text-2xl mb-2">⌨️</div>
                <h3 className="font-semibold mb-1">Live Input</h3>
                <p className="text-sm text-gray-400">Real-time text input display</p>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
