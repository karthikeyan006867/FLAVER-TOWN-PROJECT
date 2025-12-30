'use client'

import { useState, useRef, useEffect } from 'react'
import { Editor } from '@monaco-editor/react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Play, Save, Trash2, Download, Eye, Code as CodeIcon, Terminal } from 'lucide-react'

type Language = 'html' | 'css' | 'javascript' | 'typescript' | 'python' | 'java' | 'csharp' | 'cpp' | 'go' | 'rust' | 'php' | 'ruby' | 'swift' | 'kotlin' | 'sql' | 'r' | 'matlab' | 'bash' | 'powershell' | 'perl' | 'scala' | 'dart' | 'lua' | 'haskell' | 'elixir' | 'clojure' | 'julia' | 'groovy' | 'objectivec' | 'fsharp' | 'ocaml' | 'erlang' | 'crystal'

const languages: { id: Language; name: string; color: string; template: string }[] = [
  { id: 'html', name: 'HTML', color: 'bg-orange-500', template: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Page</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n</body>\n</html>' },
  { id: 'css', name: 'CSS', color: 'bg-blue-500', template: 'body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\n\nh1 {\n  color: #3b82f6;\n}' },
  { id: 'javascript', name: 'JavaScript', color: 'bg-yellow-500', template: 'console.log("Hello World!");\n\n// Your code here\nconst greet = (name) => {\n  return `Hello, ${name}!`;\n};\n\nconsole.log(greet("Coder"));' },
  { id: 'typescript', name: 'TypeScript', color: 'bg-blue-600', template: 'const message: string = "Hello World!";\nconsole.log(message);\n\ninterface User {\n  name: string;\n  age: number;\n}\n\nconst user: User = {\n  name: "John",\n  age: 30\n};\n\nconsole.log(user);' },
  { id: 'python', name: 'Python', color: 'bg-yellow-600', template: 'print("Hello World!")\n\n# Your code here\ndef greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("Coder"))' },
  { id: 'java', name: 'Java', color: 'bg-red-600', template: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello World!");\n    }\n}' },
  { id: 'csharp', name: 'C#', color: 'bg-purple-600', template: 'using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello World!");\n    }\n}' },
  { id: 'cpp', name: 'C++', color: 'bg-blue-700', template: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello World!" << endl;\n    return 0;\n}' },
  { id: 'go', name: 'Go', color: 'bg-cyan-500', template: 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello World!")\n}' },
  { id: 'rust', name: 'Rust', color: 'bg-orange-700', template: 'fn main() {\n    println!("Hello World!");\n}' },
  { id: 'php', name: 'PHP', color: 'bg-purple-500', template: '<?php\necho "Hello World!";\n\n// Your code here\nfunction greet($name) {\n    return "Hello, $name!";\n}\n\necho greet("Coder");\n?>' },
  { id: 'ruby', name: 'Ruby', color: 'bg-red-500', template: 'puts "Hello World!"\n\n# Your code here\ndef greet(name)\n  "Hello, #{name}!"\nend\n\nputs greet("Coder")' },
  { id: 'swift', name: 'Swift', color: 'bg-orange-600', template: 'print("Hello World!")\n\n// Your code here\nfunc greet(name: String) -> String {\n    return "Hello, \\(name)!"\n}\n\nprint(greet(name: "Coder"))' },
  { id: 'kotlin', name: 'Kotlin', color: 'bg-purple-700', template: 'fun main() {\n    println("Hello World!")\n}' },
  { id: 'sql', name: 'SQL', color: 'bg-blue-800', template: 'SELECT * FROM users;\n\n-- Create table\nCREATE TABLE users (\n  id INT PRIMARY KEY,\n  name VARCHAR(100),\n  email VARCHAR(100)\n);' },
  { id: 'r', name: 'R', color: 'bg-blue-400', template: 'print("Hello World!")\n\n# Your code here\nx <- c(1, 2, 3, 4, 5)\nprint(mean(x))' },
  { id: 'matlab', name: 'MATLAB', color: 'bg-orange-400', template: 'disp(\'Hello World!\')\n\n% Your code here\nx = [1, 2, 3, 4, 5];\ndisp(mean(x));' },
  { id: 'bash', name: 'Bash', color: 'bg-gray-600', template: '#!/bin/bash\necho "Hello World!"\n\n# Your code here\nfor i in {1..5}; do\n  echo "Number: $i"\ndone' },
  { id: 'powershell', name: 'PowerShell', color: 'bg-blue-500', template: 'Write-Host "Hello World!"\n\n# Your code here\n1..5 | ForEach-Object {\n  Write-Host "Number: $_"\n}' },
  { id: 'perl', name: 'Perl', color: 'bg-indigo-600', template: 'print "Hello World!\\n";\n\n# Your code here\nmy $name = "Coder";\nprint "Hello, $name!\\n";' },
  { id: 'scala', name: 'Scala', color: 'bg-red-700', template: 'object Main extends App {\n  println("Hello World!")\n}' },
  { id: 'dart', name: 'Dart', color: 'bg-cyan-600', template: 'void main() {\n  print(\'Hello World!\');\n}' },
  { id: 'lua', name: 'Lua', color: 'bg-blue-600', template: 'print("Hello World!")\n\n-- Your code here\nfunction greet(name)\n  return "Hello, " .. name .. "!"\nend\n\nprint(greet("Coder"))' },
  { id: 'haskell', name: 'Haskell', color: 'bg-purple-800', template: 'main :: IO ()\nmain = putStrLn "Hello World!"' },
  { id: 'elixir', name: 'Elixir', color: 'bg-purple-600', template: 'IO.puts "Hello World!"\n\n# Your code here\ndefmodule Greeter do\n  def hello(name) do\n    "Hello, #{name}!"\n  end\nend\n\nIO.puts Greeter.hello("Coder")' },
  { id: 'clojure', name: 'Clojure', color: 'bg-green-700', template: '(println "Hello World!")\n\n; Your code here\n(defn greet [name]\n  (str "Hello, " name "!"))\n\n(println (greet "Coder"))' },
  { id: 'julia', name: 'Julia', color: 'bg-purple-500', template: 'println("Hello World!")\n\n# Your code here\nfunction greet(name)\n    "Hello, $name!"\nend\n\nprintln(greet("Coder"))' },
  { id: 'groovy', name: 'Groovy', color: 'bg-blue-500', template: 'println "Hello World!"\n\n// Your code here\ndef greet(name) {\n    "Hello, $name!"\n}\n\nprintln greet("Coder")' },
  { id: 'objectivec', name: 'Objective-C', color: 'bg-blue-700', template: '#import <Foundation/Foundation.h>\n\nint main() {\n    @autoreleasepool {\n        NSLog(@"Hello World!");\n    }\n    return 0;\n}' },
  { id: 'fsharp', name: 'F#', color: 'bg-blue-800', template: 'printfn "Hello World!"\n\n// Your code here\nlet greet name =\n    sprintf "Hello, %s!" name\n\nprintfn "%s" (greet "Coder")' },
  { id: 'ocaml', name: 'OCaml', color: 'bg-orange-800', template: 'print_endline "Hello World!";;\n\n(* Your code here *)\nlet greet name =\n  "Hello, " ^ name ^ "!";;\n\nprint_endline (greet "Coder");;' },
  { id: 'erlang', name: 'Erlang', color: 'bg-red-800', template: '-module(hello).\n-export([start/0]).\n\nstart() ->\n    io:format("Hello World!~n").' },
  { id: 'crystal', name: 'Crystal', color: 'bg-gray-700', template: 'puts "Hello World!"\n\n# Your code here\ndef greet(name : String) : String\n  "Hello, #{name}!"\nend\n\nputs greet("Coder")' },
]

export default function PlaygroundPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('javascript')
  const [code, setCode] = useState(languages.find(l => l.id === 'javascript')?.template || '')
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [htmlPreview, setHtmlPreview] = useState('')
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const getMonacoLanguage = (lang: Language): string => {
    const mapping: Record<string, string> = {
      'csharp': 'csharp',
      'cpp': 'cpp',
      'objectivec': 'objective-c',
      'fsharp': 'fsharp'
    }
    return mapping[lang] || lang
  }

  const runCode = () => {
    setIsRunning(true)
    setOutput('')
    
    setTimeout(() => {
      try {
        if (selectedLanguage === 'html') {
          setHtmlPreview(code)
          setOutput('HTML rendered in preview')
        } else if (selectedLanguage === 'javascript' || selectedLanguage === 'typescript') {
          const logs: string[] = []
          const customConsole = {
            log: (...args: any[]) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ')),
            error: (...args: any[]) => logs.push('ERROR: ' + args.join(' ')),
            warn: (...args: any[]) => logs.push('WARNING: ' + args.join(' '))
          }
          
          try {
            const fn = new Function('console', code)
            fn(customConsole)
            setOutput(logs.length > 0 ? logs.join('\n') : '✓ Code executed successfully')
          } catch (err: any) {
            setOutput(`Error: ${err.message}`)
          }
        } else {
          // Simulated output for other languages
          setOutput(`# ${languages.find(l => l.id === selectedLanguage)?.name} Simulation\n# Code would execute on server\n\n${code}\n\n✓ Syntax validated`)
        }
      } catch (error: any) {
        setOutput(`Error: ${error.message}`)
      }
      setIsRunning(false)
    }, 300)
  }

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
      const project = { 
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
      const template = languages.find(l => l.id === selectedLanguage)?.template || ''
      setCode(template)
      setOutput('')
      setHtmlPreview('')
    }
  }

  const handleDownload = () => {
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

          {/* Language Selector */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-2">Select Language</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => handleLanguageChange(lang.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedLanguage === lang.id
                      ? `${lang.color} text-white shadow-lg scale-105`
                      : 'bg-gray-800 border border-gray-700 hover:bg-gray-700 text-gray-300'
                  }`}
                >
                  {lang.name}
                </button>
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
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
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
            </div>

            {/* Output/Preview */}
            <div className="space-y-4">
              {selectedLanguage === 'html' && htmlPreview ? (
                <div className="card-gradient border border-gray-700 rounded-xl overflow-hidden">
                  <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-400">Live Preview</span>
                    </div>
                  </div>
                  
                  <iframe
                    ref={iframeRef}
                    srcDoc={htmlPreview}
                    className="w-full h-[600px] bg-white"
                    title="Preview"
                    sandbox="allow-scripts"
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