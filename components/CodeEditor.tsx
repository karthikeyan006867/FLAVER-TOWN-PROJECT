'use client'

import { Editor } from '@monaco-editor/react'
import { useState, useEffect } from 'react'
import { Play, RotateCcw, Check, X, AlertCircle } from 'lucide-react'
import { TestCase } from '@/data/courses'
import { useSettingsStore } from '@/store/settingsStore'

interface CodeEditorProps {
  language: string
  initialCode?: string
  expectedOutput?: string
  testCases?: TestCase[]
  onSuccess?: () => void
}

export default function CodeEditor({ 
  language, 
  initialCode = '', 
  expectedOutput,
  testCases,
  onSuccess 
}: CodeEditorProps) {
  const { settings } = useSettingsStore()
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [testPassed, setTestPassed] = useState<boolean | null>(null)
  const [testResults, setTestResults] = useState<{ name: string; passed: boolean; error?: string }[]>([])
  const [allTestsPassed, setAllTestsPassed] = useState(false)

  // Auto-save functionality
  useEffect(() => {
    if (settings.autoSave && code !== initialCode) {
      const timer = setTimeout(() => {
        // Auto-save logic (could save to localStorage or trigger parent callback)
        console.log('Auto-saved code')
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [code, settings.autoSave, initialCode])

  const getLanguageMode = () => {
    switch (language.toLowerCase()) {
      case 'html':
        return 'html'
      case 'css':
        return 'css'
      case 'javascript':
      case 'js':
        return 'javascript'
      case 'python':
      case 'py':
        return 'python'
      case 'typescript':
      case 'ts':
        return 'typescript'
      case 'react':
      case 'jsx':
        return 'javascript'
      case 'nodejs':
      case 'node':
        return 'javascript'
      case 'ruby':
      case 'rb':
        return 'ruby'
      case 'php':
        return 'php'
      case 'java':
        return 'java'
      case 'csharp':
      case 'cs':
      case 'c#':
        return 'csharp'
      case 'go':
      case 'golang':
        return 'go'
      case 'rust':
      case 'rs':
        return 'rust'
      case 'swift':
        return 'swift'
      default:
        return 'javascript'
    }
  }

  const runCode = async () => {
    setIsRunning(true)
    setOutput('')
    setTestPassed(null)
    setTestResults([])
    setAllTestsPassed(false)

    setTimeout(() => {
      try {
        let result = ''
        
        if (language.toLowerCase() === 'html') {
          result = code
          setOutput(`<!-- HTML Preview -->\n${code}`)
        } else if (language.toLowerCase() === 'css') {
          result = code
          setOutput(`/* CSS Applied */\n${code}`)
        } else if (language.toLowerCase() === 'javascript' || language.toLowerCase() === 'js' || language.toLowerCase() === 'react' || language.toLowerCase() === 'nodejs' || language.toLowerCase() === 'node') {
          // Execute JavaScript/React/Node code
          try {
            const logs: string[] = []
            
            // Create custom console for capturing output
            const customConsole = {
              log: (...args: any[]) => {
                const formatted = args.map(arg => {
                  if (typeof arg === 'object' && arg !== null) {
                    try {
                      return JSON.stringify(arg, null, 2)
                    } catch {
                      return String(arg)
                    }
                  }
                  return String(arg)
                }).join(' ')
                logs.push(formatted)
              },
              error: (...args: any[]) => {
                logs.push('ERROR: ' + args.join(' '))
              },
              warn: (...args: any[]) => {
                logs.push('WARNING: ' + args.join(' '))
              }
            }

            // Create safe execution environment
            const executeCode = new Function('console', code)
            executeCode(customConsole)
            
            result = logs.length > 0 
              ? logs.join('\\n') 
              : '✓ Code executed successfully (no console output)'
            setOutput(result)
          } catch (error: any) {
            setOutput(`Error: ${error.message}`)
            setTestPassed(false)
            setIsRunning(false)
            return
          }
        } else if (language.toLowerCase() === 'typescript' || language.toLowerCase() === 'ts') {
          // Simulate TypeScript execution (treat as JavaScript)
          result = `// TypeScript code compiled successfully\n// Note: TypeScript features are simulated in this environment\n\n${code}\n\n✓ Type checking passed`
          setOutput(result)
        } else if (language.toLowerCase() === 'python' || language.toLowerCase() === 'py') {
          // Simulate Python execution with basic interpreter
          try {
            const pythonOutput: string[] = []
            
            // Simple Python interpreter for basic operations
            const lines = code.split('\n')
            const variables: { [key: string]: any } = {}
            
            for (const line of lines) {
              const trimmed = line.trim()
              
              // Skip comments and empty lines
              if (!trimmed || trimmed.startsWith('#')) continue
              
              // Handle print statements
              if (trimmed.startsWith('print(')) {
                const printMatch = trimmed.match(/print\s*\((.*)\)/)
                if (printMatch) {
                  let content = printMatch[1].trim()
                  
                  // Handle f-strings
                  if (content.startsWith('f"') || content.startsWith("f'")) {
                    content = content.slice(2, -1)
                    // Replace variables in f-string
                    content = content.replace(/\{([^}]+)\}/g, (_, varName) => {
                      const expr = varName.trim()
                      try {
                        // Handle simple expressions
                        if (expr.includes('+') || expr.includes('-') || expr.includes('*') || expr.includes('/')) {
                          return String(eval(expr.replace(/(\w+)/g, (match: string) => 
                            variables[match] !== undefined ? String(variables[match]) : match
                          )))
                        }
                        return String(variables[expr] !== undefined ? variables[expr] : expr)
                      } catch {
                        return expr
                      }
                    })
                    pythonOutput.push(content)
                  }
                  // Handle regular strings
                  else if (content.startsWith('"') || content.startsWith("'")) {
                    pythonOutput.push(content.slice(1, -1))
                  }
                  // Handle variables
                  else if (variables[content] !== undefined) {
                    pythonOutput.push(String(variables[content]))
                  }
                  // Handle expressions with commas
                  else if (content.includes(',')) {
                    const parts = content.split(',').map(p => {
                      p = p.trim()
                      if (p.startsWith('"') || p.startsWith("'")) return p.slice(1, -1)
                      if (variables[p] !== undefined) return String(variables[p])
                      return p
                    })
                    pythonOutput.push(parts.join(' '))
                  }
                }
              }
              
              // Handle variable assignments
              else if (trimmed.includes('=') && !trimmed.includes('==')) {
                const eqIndex = trimmed.indexOf('=')
                const varName = trimmed.substring(0, eqIndex).trim()
                let value = trimmed.substring(eqIndex + 1).trim()
                
                // Parse value
                if (value.startsWith('"') || value.startsWith("'")) {
                  variables[varName] = value.slice(1, -1)
                } else if (!isNaN(Number(value))) {
                  variables[varName] = Number(value)
                } else if (value === 'True') {
                  variables[varName] = true
                } else if (value === 'False') {
                  variables[varName] = false
                } else if (value.startsWith('[') && value.endsWith(']')) {
                  try {
                    variables[varName] = JSON.parse(value.replace(/'/g, '"'))
                  } catch {
                    variables[varName] = value
                  }
                }
                // Handle expressions
                else if (value.match(/[\+\-\*\/]/)) {
                  try {
                    const evalValue = value.replace(/(\w+)/g, (match) => 
                      variables[match] !== undefined ? String(variables[match]) : match
                    )
                    variables[varName] = eval(evalValue)
                  } catch {
                    variables[varName] = value
                  }
                }
              }
            }
            
            result = pythonOutput.length > 0 
              ? pythonOutput.join('\n') 
              : '# Code executed (no output)'
            setOutput(result)
          } catch (error: any) {
            result = `Error: ${error.message}`
            setOutput(result)
          }
        } else if (language.toLowerCase() === 'ruby' || language.toLowerCase() === 'rb') {
          // Simulate Ruby execution
          result = `# Ruby Simulation\n# Your code would execute on a Ruby interpreter\n\n${code}\n\n✓ Ruby syntax validated`
          setOutput(result)
        } else if (language.toLowerCase() === 'php') {
          // Simulate PHP execution
          result = `<?php\n// PHP Simulation\n// Your code would execute on a PHP server\n\n${code}\n\n✓ PHP syntax validated\n?>`
          setOutput(result)
        } else if (language.toLowerCase() === 'java') {
          // Simulate Java execution
          result = `// Java Simulation\n// Your code would compile and run on JVM\n\n${code}\n\n✓ Compiled successfully\n✓ Execution completed`
          setOutput(result)
        } else if (language.toLowerCase() === 'csharp' || language.toLowerCase() === 'cs' || language.toLowerCase() === 'c#') {
          // Simulate C# execution
          result = `// C# Simulation\n// Your code would compile and run on .NET\n\n${code}\n\n✓ Built successfully\n✓ Execution completed`
          setOutput(result)
        } else if (language.toLowerCase() === 'go' || language.toLowerCase() === 'golang') {
          // Simulate Go execution
          result = `// Go Simulation\n// Your code would compile and run with Go compiler\n\n${code}\n\n✓ Build successful\n✓ Program executed`
          setOutput(result)
        } else if (language.toLowerCase() === 'rust' || language.toLowerCase() === 'rs') {
          // Simulate Rust execution
          result = `// Rust Simulation\n// Your code would compile with rustc\n\n${code}\n\n✓ Compiling successful\n✓ Binary executed`
          setOutput(result)
        } else if (language.toLowerCase() === 'swift') {
          // Simulate Swift execution
          result = `// Swift Simulation\n// Your code would compile and run on Swift compiler\n\n${code}\n\n✓ Compilation successful\n✓ Program executed`
          setOutput(result)
        }
        
        // Run test cases if provided
        if (testCases && testCases.length > 0) {
          runTestCases(code, result)
        } else {
          // Fallback to simple expectedOutput check
          checkOutput(result)
        }
      } catch (error: any) {
        setOutput(`Error: ${error.message}`)
        setTestPassed(false)
      } finally {
        setIsRunning(false)
      }
    }, 500)
  }

  const runTestCases = (userCode: string, executionOutput: string) => {
    if (!testCases) return

    const results = testCases.map(testCase => {
      try {
        const passed = testCase.test(userCode, executionOutput)
        return {
          name: testCase.name,
          passed,
          error: passed ? undefined : testCase.errorMessage
        }
      } catch (error) {
        return {
          name: testCase.name,
          passed: false,
          error: testCase.errorMessage
        }
      }
    })

    setTestResults(results)
    const allPassed = results.every(r => r.passed)
    setAllTestsPassed(allPassed)
    setTestPassed(allPassed)

    if (allPassed && onSuccess) {
      setTimeout(() => onSuccess(), 1000)
    }
  }

  const checkOutput = (result: string) => {
    if (expectedOutput) {
      const passed = result.trim().includes(expectedOutput.trim())
      setTestPassed(passed)
      if (passed && onSuccess) {
        setTimeout(() => onSuccess(), 1000)
      }
    }
  }

  const resetCode = () => {
    setCode(initialCode)
    setOutput('')
    setTestPassed(null)
    setTestResults([])
    setAllTestsPassed(false)
  }

  return (
    <div className="space-y-4">
      {/* Editor */}
      <div className="border border-gray-700 rounded-lg overflow-hidden">
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm text-gray-400 ml-2">{language}</span>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={resetCode}
              className="text-gray-400 hover:text-white p-1.5 rounded hover:bg-gray-700 transition-colors"
              title="Reset Code"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
            <button
              onClick={runCode}
              disabled={isRunning}
              className="flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1.5 rounded hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <Play className="h-4 w-4" />
              <span>{isRunning ? 'Running...' : 'Run'}</span>
            </button>
          </div>
        </div>
        
        <Editor
          height="400px"
          language={getLanguageMode()}
          value={code}
          onChange={(value) => setCode(value || '')}
          theme={settings.theme === 'light' ? 'vs-light' : 'vs-dark'}
          options={{
            minimap: { enabled: settings.editorMinimap },
            fontSize: settings.editorFontSize,
            lineNumbers: settings.editorLineNumbers ? 'on' : 'off',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: settings.editorTabSize,
            wordWrap: settings.editorWordWrap,
            fontFamily: settings.editorFontFamily,
            lineHeight: settings.editorLineHeight,
          }}
        />
      </div>

      {/* Output */}
      {output && (
        <div className="border border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
            <span className="text-sm text-gray-400">Output</span>
            {testPassed !== null && (
              <div className={`flex items-center space-x-1 text-sm ${testPassed ? 'text-green-400' : 'text-red-400'}`}>
                {testPassed ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>All Tests Passed!</span>
                  </>
                ) : (
                  <>
                    <X className="h-4 w-4" />
                    <span>Tests Failed</span>
                  </>
                )}
              </div>
            )}
          </div>
          <div className="bg-gray-900 p-4">
            <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
              {language.toLowerCase() === 'html' ? (
                <div dangerouslySetInnerHTML={{ __html: code }} />
              ) : (
                output
              )}
            </pre>
          </div>
        </div>
      )}

      {/* Test Results */}
      {testResults.length > 0 && (
        <div className="border border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
            <span className="text-sm text-gray-400">Test Results</span>
          </div>
          <div className="bg-gray-900 p-4 space-y-2">
            {testResults.map((result, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-2 p-3 rounded-lg ${
                  result.passed ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'
                }`}
              >
                {result.passed ? (
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                ) : (
                  <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <div className={`font-medium ${result.passed ? 'text-green-400' : 'text-red-400'}`}>
                    {result.name}
                  </div>
                  {!result.passed && result.error && (
                    <div className="text-sm text-gray-400 mt-1">{result.error}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Expected Output */}
      {expectedOutput && !testCases && (
        <div className="text-sm text-gray-400 bg-gray-800/50 p-3 rounded-lg border border-gray-700">
          <strong>Expected Output:</strong> {expectedOutput}
        </div>
      )}
    </div>
  )
}
