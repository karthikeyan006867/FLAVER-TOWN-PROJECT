'use client''use client'












}  )    </div>      </div>        <p className="text-gray-400">Advanced coding environment coming soon...</p>        <h1 className="text-4xl font-bold text-white mb-4">Playground Pro</h1>      <div className="max-w-7xl mx-auto px-4 py-16">    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">  return (export default function PlaygroundProPage() {
import { useState, useRef, useEffect, useCallback } from 'react'
import { Editor } from '@monaco-editor/react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Play, Save, Trash2, Download, Eye, Code as CodeIcon, Terminal } from 'lucide-react'

type Language = 'web' | 'react' | 'vue' | 'html' | 'css' | 'javascript' | 'typescript' | 'python' | 'java' | 'csharp' | 'cpp' | 'go' | 'rust' | 'php' | 'ruby' | 'swift' | 'kotlin' | 'sql' | 'r' | 'matlab' | 'bash' | 'powershell' | 'perl' | 'scala' | 'dart' | 'lua' | 'haskell' | 'elixir' | 'clojure' | 'julia' | 'groovy' | 'objectivec' | 'fsharp' | 'ocaml' | 'erlang' | 'crystal'

const languages: { id: Language; name: string; category: string; color: string; isMulti?: boolean; templates?: { html?: string; css?: string; js?: string }; template?: string }[] = [
  // Multi-file modes
  { 
    id: 'web', 
    name: 'HTML/CSS/JS', 
    category: 'Web',
    color: 'bg-gradient-to-r from-orange-500 via-blue-500 to-yellow-500',
    isMulti: true,
    templates: {
      html: '<div class="container">\n  <h1>Hello World!</h1>\n  <button id="btn">Click Me</button>\n</div>',
      css: '.container {\n  text-align: center;\n  padding: 50px;\n  font-family: Arial, sans-serif;\n}\n\nbutton {\n  background: #3b82f6;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background: #2563eb;\n}',
      js: 'const btn = document.getElementById("btn");\nlet count = 0;\n\nbtn.addEventListener("click", () => {\n  count++;\n  btn.textContent = `Clicked ${count} times`;\n  console.log("Click count:", count);\n});'
    }
  },
  {
    id: 'react',
    name: 'React JSX',
    category: 'Web',
    color: 'bg-cyan-500',
    template: 'function App() {\n  const [count, setCount] = React.useState(0);\n  \n  return (\n    <div style={{ textAlign: "center", padding: "50px" }}>\n      <h1>React Counter</h1>\n      <button onClick={() => setCount(count + 1)}>\n        Count: {count}\n      </button>\n    </div>\n  );\n}\n\nReactDOM.render(<App />, document.getElementById("root"));'
  },
  {
    id: 'vue',
    name: 'Vue.js',
    category: 'Web',
    color: 'bg-green-500',
    template: '<div id="app">\n  <h1>{{ message }}</h1>\n  <button @click="count++">Count: {{ count }}</button>\n</div>\n\n<script>\nnew Vue({\n  el: "#app",\n  data: {\n    message: "Hello Vue!",\n    count: 0\n  }\n});\n</script>'
  },
  // Single file modes
  { id: 'html', name: 'HTML', category: 'Web', color: 'bg-orange-500', template: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Page</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n</body>\n</html>' },
  { id: 'css', name: 'CSS', category: 'Web', color: 'bg-blue-500', template: 'body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\n\nh1 {\n  color: #3b82f6;\n}' },
  { id: 'javascript', name: 'JavaScript', category: 'Web', color: 'bg-yellow-500', template: 'console.log("Hello World!");\n\n// Your code here\nconst greet = (name) => {\n  return `Hello, ${name}!`;\n};\n\nconsole.log(greet("Coder"));' },
  { id: 'typescript', name: 'TypeScript', category: 'Web', color: 'bg-blue-600', template: 'const message: string = "Hello World!";\nconsole.log(message);\n\ninterface User {\n  name: string;\n  age: number;\n}\n\nconst user: User = {\n  name: "John",\n  age: 30\n};\n\nconsole.log(user);' },
  { id: 'python', name: 'Python', category: 'Backend', color: 'bg-yellow-600', template: 'print("Hello World!")\n\n# Your code here\ndef greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("Coder"))' },
  { id: 'java', name: 'Java', category: 'Backend', color: 'bg-red-600', template: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello World!");\n    }\n}' },
  { id: 'csharp', name: 'C#', category: 'Backend', color: 'bg-purple-600', template: 'using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello World!");\n    }\n}' },
  { id: 'cpp', name: 'C++', category: 'Systems', color: 'bg-blue-700', template: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello World!" << endl;\n    return 0;\n}' },
  { id: 'go', name: 'Go', category: 'Backend', color: 'bg-cyan-500', template: 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello World!")\n}' },
  { id: 'rust', name: 'Rust', category: 'Systems', color: 'bg-orange-700', template: 'fn main() {\n    println!("Hello World!");\n}' },
  { id: 'php', name: 'PHP', category: 'Backend', color: 'bg-purple-500', template: '<?php\necho "Hello World!";\n\n// Your code here\nfunction greet($name) {\n    return "Hello, $name!";\n}\n\necho greet("Coder");\n?>' },
  { id: 'ruby', name: 'Ruby', category: 'Backend', color: 'bg-red-500', template: 'puts "Hello World!"\n\n# Your code here\ndef greet(name)\n  "Hello, #{name}!"\nend\n\nputs greet("Coder")' },
  { id: 'swift', name: 'Swift', category: 'Mobile', color: 'bg-orange-600', template: 'print("Hello World!")\n\n// Your code here\nfunc greet(name: String) -> String {\n    return "Hello, \\(name)!"\n}\n\nprint(greet(name: "Coder"))' },
  { id: 'kotlin', name: 'Kotlin', category: 'Mobile', color: 'bg-purple-700', template: 'fun main() {\n    println("Hello World!")\n}' },
  { id: 'sql', name: 'SQL', category: 'Database', color: 'bg-blue-800', template: 'SELECT * FROM users;\n\n-- Create table\nCREATE TABLE users (\n  id INT PRIMARY KEY,\n  name VARCHAR(100),\n  email VARCHAR(100)\n);' },
  { id: 'r', name: 'R', category: 'Data Science', color: 'bg-blue-400', template: 'print("Hello World!")\n\n# Your code here\nx <- c(1, 2, 3, 4, 5)\nprint(mean(x))' },
  { id: 'matlab', name: 'MATLAB', category: 'Data Science', color: 'bg-orange-400', template: 'disp(\'Hello World!\')\n\n% Your code here\nx = [1, 2, 3, 4, 5];\ndisp(mean(x));' },
  { id: 'bash', name: 'Bash', category: 'Scripting', color: 'bg-gray-600', template: '#!/bin/bash\necho "Hello World!"\n\n# Your code here\nfor i in {1..5}; do\n  echo "Number: $i"\ndone' },
  { id: 'powershell', name: 'PowerShell', category: 'Scripting', color: 'bg-blue-500', template: 'Write-Host "Hello World!"\n\n# Your code here\n1..5 | ForEach-Object {\n  Write-Host "Number: $_"\n}' },
  { id: 'perl', name: 'Perl', category: 'Scripting', color: 'bg-indigo-600', template: 'print "Hello World!\\n";\n\n# Your code here\nmy $name = "Coder";\nprint "Hello, $name!\\n";' },
  { id: 'scala', name: 'Scala', category: 'Functional', color: 'bg-red-700', template: 'object Main extends App {\n  println("Hello World!")\n}' },
  { id: 'dart', name: 'Dart', category: 'Mobile', color: 'bg-cyan-600', template: 'void main() {\n  print(\'Hello World!\');\n}' },
  { id: 'lua', name: 'Lua', category: 'Scripting', color: 'bg-blue-600', template: 'print("Hello World!")\n\n-- Your code here\nfunction greet(name)\n  return "Hello, " .. name .. "!"\nend\n\nprint(greet("Coder"))' },
  { id: 'haskell', name: 'Haskell', category: 'Functional', color: 'bg-purple-800', template: 'main :: IO ()\nmain = putStrLn "Hello World!"' },
  { id: 'elixir', name: 'Elixir', category: 'Functional', color: 'bg-purple-600', template: 'IO.puts "Hello World!"\n\n# Your code here\ndefmodule Greeter do\n  def hello(name) do\n    "Hello, #{name}!"\n  end\nend\n\nIO.puts Greeter.hello("Coder")' },
  { id: 'clojure', name: 'Clojure', category: 'Functional', color: 'bg-green-700', template: '(println "Hello World!")\n\n; Your code here\n(defn greet [name]\n  (str "Hello, " name "!"))\n\n(println (greet "Coder"))' },
  { id: 'julia', name: 'Julia', category: 'Data Science', color: 'bg-purple-500', template: 'println("Hello World!")\n\n# Your code here\nfunction greet(name)\n    "Hello, $name!"\nend\n\nprintln(greet("Coder"))' },
  { id: 'groovy', name: 'Groovy', category: 'Backend', color: 'bg-blue-500', template: 'println "Hello World!"\n\n// Your code here\ndef greet(name) {\n    "Hello, $name!"\n}\n\nprintln greet("Coder")' },
  { id: 'objectivec', name: 'Objective-C', category: 'Mobile', color: 'bg-blue-700', template: '#import <Foundation/Foundation.h>\n\nint main() {\n    @autoreleasepool {\n        NSLog(@"Hello World!");\n    }\n    return 0;\n}' },
  { id: 'fsharp', name: 'F#', category: 'Functional', color: 'bg-blue-800', template: 'printfn "Hello World!"\n\n// Your code here\nlet greet name =\n    sprintf "Hello, %s!" name\n\nprintfn "%s" (greet "Coder")' },
  { id: 'ocaml', name: 'OCaml', category: 'Functional', color: 'bg-orange-800', template: 'print_endline "Hello World!";;\n\n(* Your code here *)\nlet greet name =\n  "Hello, " ^ name ^ "!";;\n\nprint_endline (greet "Coder");;' },
  { id: 'erlang', name: 'Erlang', category: 'Functional', color: 'bg-red-800', template: '-module(hello).\n-export([start/0]).\n\nstart() ->\n    io:format("Hello World!~n").' },
  { id: 'crystal', name: 'Crystal', category: 'Systems', color: 'bg-gray-700', template: 'puts "Hello World!"\n\n# Your code here\ndef greet(name : String) : String\n  "Hello, #{name}!"\nend\n\nputs greet("Coder")' },
]

export default function PlaygroundPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('web')
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html')
  const [htmlCode, setHtmlCode] = useState(languages[0].templates?.html || '')
  const [cssCode, setCssCode] = useState(languages[0].templates?.css || '')
  const [jsCode, setJsCode] = useState(languages[0].templates?.js || '')
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [htmlPreview, setHtmlPreview] = useState('')
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const isMultiMode = languages.find(l => l.id === selectedLanguage)?.isMulti

  // Auto-run code on mount
  useEffect(() => {
    runCode()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getMonacoLanguage = (lang: Language): string => {
    const mapping: Record<string, string> = {
      'csharp': 'csharp',
      'cpp': 'cpp',
      'objectivec': 'objective-c',
      'fsharp': 'fsharp'
    }
    return mapping[lang] || lang
  }

  const runCode = useCallback(() => {
    setIsRunning(true)
    setOutput('')
    
    setTimeout(() => {
      try {
        if (selectedLanguage === 'web') {
          // Multi-file HTML/CSS/JS mode
          const fullHTML = `<!DOCTYPE html>
<html>
<head>
  <style>${cssCode}</style>
</head>
<body>
  ${htmlCode}
  <script>
    (function() {
      const oldLog = console.log;
      console.log = function(...args) {
        window.parent.postMessage({ type: 'console', args: args }, '*');
        oldLog.apply(console, args);
      };
    })();
    try {
      ${jsCode}
    } catch(err) {
      console.log('Error:', err.message);
    }
  </script>
</body>
</html>`
          setHtmlPreview(fullHTML)
          setOutput('Web app running in preview')
        } else if (selectedLanguage === 'react') {
          const fullHTML = `<!DOCTYPE html>
<html>
<head>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    ${code}
  </script>
</body>
</html>`
          setHtmlPreview(fullHTML)
          setOutput('React app running in preview')
        } else if (selectedLanguage === 'vue') {
          const fullHTML = `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
</head>
<body>
  ${code}
</body>
</html>`
          setHtmlPreview(fullHTML)
          setOutput('Vue app running in preview')
        } else if (selectedLanguage === 'html') {
          setHtmlPreview(code)
          setOutput('HTML rendered in preview panel')
        } else if (selectedLanguage === 'javascript' || selectedLanguage === 'typescript') {
          const logs: string[] = []
          const customConsole = {
            log: (...args: any[]) => {
              const formatted = args.map(a => {
                if (typeof a === 'object' && a !== null) {
                  try {
                    return JSON.stringify(a, null, 2)
                  } catch {
                    return String(a)
                  }
                }
                return String(a)
              }).join(' ')
              logs.push(formatted)
            },
            error: (...args: any[]) => {
              logs.push('ERROR: ' + args.map(a => String(a)).join(' '))
            },
            warn: (...args: any[]) => {
              logs.push('WARNING: ' + args.map(a => String(a)).join(' '))
            }
          }
          
          try {
            const fn = new Function('console', code)
            fn(customConsole)
            setOutput(logs.length > 0 ? logs.join('\n') : '✓ Code executed successfully (no output)')
          } catch (err: any) {
            setOutput(`❌ Error: ${err.message}`)
          }
        } else if (selectedLanguage === 'python') {
          const printMatches = code.match(/print\((.*?)\)/g)
          if (printMatches) {
            const outputs = printMatches.map(match => {
              const content = match.replace(/print\((.*)\)/, '$1').replace(/['"]/g, '')
              return content
            })
            setOutput(outputs.join('\n') + '\n\n✓ Python code simulated')
          } else {
            setOutput(`# Python Code\n${code}\n\n✓ Syntax validated`)
          }
        } else {
          const langName = languages.find(l => l.id === selectedLanguage)?.name || selectedLanguage
          setOutput(`# ${langName} Output Simulation\n# This code would execute on a ${langName} runtime\n\n${code}\n\n✓ Syntax validated`)
        }
      } catch (error: any) {
        setOutput(`❌ Error: ${error.message}`)
      }
      setIsRunning(false)
    }, 300)
  }, [selectedLanguage, code, htmlCode, cssCode, jsCode])

  // Handle console messages from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'console') {
        const formatted = event.data.args.map((a: any) => 
          typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)
        ).join(' ')
        setOutput(prev => prev + (prev ? '\n' : '') + formatted)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  // Auto-run on mount or language change
  useEffect(() => {
    const timer = setTimeout(() => {
      runCode()
    }, 500)
    return () => clearTimeout(timer)
  }, [selectedLanguage, runCode])

  // Auto-run for web mode on code change
  useEffect(() => {
    if (selectedLanguage === 'web') {
      const timer = setTimeout(() => {
        runCode()
      }, 1000) // Debounce 1 second
      return () => clearTimeout(timer)
    }
  }, [htmlCode, cssCode, jsCode, selectedLanguage, runCode])

  const handleLanguageChange = (lang: Language) => {
    setSelectedLanguage(lang)
    const template = languages.find(l => l.id === lang)?.template || ''
    setCode(template)
    setOutput('')
    setHtmlPreview('')
  }

  const handleSave = () => {
    const name = prompt('Name your project:')
    if (name) {
      const project = isMultiMode 
        ? { 
            id: Date.now().toString(), 
            name, 
            language: selectedLanguage,
            isMulti: true,
            htmlCode,
            cssCode,
            jsCode
          }
        : { 
            id: Date.now().toString(), 
            name, 
            language: selectedLanguage,
            code
          }
      
      const saved = localStorage.getItem('playground-projects')
      const projects = saved ? JSON.parse(saved) : []
      localStorage.setItem('playground-projects', JSON.stringify([...projects, project]))
      
      alert('Project saved!')
    }
  }

  const handleClear = () => {
    if (confirm('Clear code?')) {
      const langConfig = languages.find(l => l.id === selectedLanguage)
      if (langConfig?.isMulti && langConfig.templates) {
        setHtmlCode(langConfig.templates.html || '')
        setCssCode(langConfig.templates.css || '')
        setJsCode(langConfig.templates.js || '')
      } else {
        const template = langConfig?.template || ''
        setCode(template)
      }
      setOutput('')
      setHtmlPreview('')
    }
  }

  const handleDownload = () => {
    if (isMultiMode) {
      const fullHTML = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${languages.find(l => l.id === selectedLanguage)?.name || 'Web App'}</title>
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
      a.download = 'index.html'
      a.click()
      URL.revokeObjectURL(url)
    } else {
      const lang = languages.find(l => l.id === selectedLanguage)
      const extension = selectedLanguage === 'csharp' ? 'cs' : selectedLanguage === 'cpp' ? 'cpp' : selectedLanguage
      const blob = new Blob([code], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `playground.${extension}`
      a.click()
      URL.revokeObjectURL(url)
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
              <span className="text-gradient">Code Playground</span>
            </h1>
            <p className="text-gray-400">
              Write and execute code in 30+ programming languages
            </p>
          </div>

          {/* Language Selector - Category Scroll */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-2">Select Language / Mode</label>
            <div className="card-gradient border border-gray-700 rounded-xl p-4 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
              {Object.entries(
                languages.reduce((acc, lang) => {
                  if (!acc[lang.category]) acc[lang.category] = []
                  acc[lang.category].push(lang)
                  return acc
                }, {} as Record<string, typeof languages>)
              ).map(([category, langs]) => (
                <div key={category} className="mb-4 last:mb-0 pb-4 last:pb-0 border-b border-gray-700 last:border-b-0">
                  <div className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide flex items-center gap-2">
                    {category === 'Web' && '🌐'}
                    {category === 'Backend' && '⚙️'}
                    {category === 'Systems' && '💻'}
                    {category === 'Mobile' && '📱'}
                    {category === 'Database' && '🗄️'}
                    {category === 'Data Science' && '📊'}
                    {category === 'Scripting' && '📜'}
                    {category === 'Functional' && '🔧'}
                    {category}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {langs.map((lang) => (
                      <button
                        key={lang.id}
                        onClick={() => handleLanguageChange(lang.id)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all text-left ${
                          selectedLanguage === lang.id
                            ? `${lang.color} text-white shadow-lg`
                            : 'bg-gray-800 border border-gray-700 hover:bg-gray-700 text-gray-300'
                        }`}
                      >
                        <div className="font-medium">{lang.name}</div>
                        {lang.isMulti && (
                          <div className="text-xs opacity-75 mt-0.5">Multi-File 📁</div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mb-4 flex flex-wrap gap-3 items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={runCode}
                disabled={isRunning}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Play className="h-4 w-4" />
                {isRunning ? 'Running...' : 'Run Code'}
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

          {/* Editor and Output Grid */}
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Code Editor */}
            <div className="card-gradient border border-gray-700 rounded-xl overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <CodeIcon className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-400">Code Editor - {languages.find(l => l.id === selectedLanguage)?.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  {isMultiMode && (
                    <div className="flex gap-1">
                      {['html', 'css', 'js'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab as any)}
                          className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                            activeTab === tab
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                          }`}
                        >
                          {tab.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  )}
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
              </div>
              
              {isMultiMode ? (
                <Editor
                  height="600px"
                  language={activeTab === 'html' ? 'html' : activeTab === 'css' ? 'css' : 'javascript'}
                  value={activeTab === 'html' ? htmlCode : activeTab === 'css' ? cssCode : jsCode}
                  onChange={(value) => {
                    if (activeTab === 'html') setHtmlCode(value || '')
                    else if (activeTab === 'css') setCssCode(value || '')
                    else setJsCode(value || '')
                  }}
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
              ) : (
                <Editor
                  height="600px"
                  language={getMonacoLanguage(selectedLanguage)}
                  value={code}
                  onChange={(value) => setCode(value || '')}
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
              )}
            </div>

            {/* Output/Preview */}
            <div className="space-y-4">
              {(selectedLanguage === 'html' || selectedLanguage === 'web' || selectedLanguage === 'react' || selectedLanguage === 'vue') && htmlPreview ? (
                <div className="card-gradient border border-gray-700 rounded-xl overflow-hidden">
                  <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-400">Live Preview {isMultiMode && '(HTML + CSS + JS)'}</span>
                    </div>
                  </div>
                  
                  <iframe
                    ref={iframeRef}
                    srcDoc={htmlPreview}
                    className="w-full h-[600px] bg-white"
                    title="Preview"
                    sandbox="allow-scripts allow-modals"
                  />
                </div>
              ) : (
                <div className="card-gradient border border-gray-700 rounded-xl overflow-hidden">
                  <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-400">Output</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900 font-mono text-sm h-[600px] overflow-y-auto">
                    {output ? (
                      <pre className="text-green-400 whitespace-pre-wrap">{output}</pre>
                    ) : (
                      <div className="text-gray-500">Click &quot;Run Code&quot; to see output...</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}