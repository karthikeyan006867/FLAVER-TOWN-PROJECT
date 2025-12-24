'use client'

import { Editor } from '@monaco-editor/react'
import { useState } from 'react'
import { Play, RotateCcw, Check, X } from 'lucide-react'

interface CodeEditorProps {
  language: string
  initialCode?: string
  expectedOutput?: string
  onSuccess?: () => void
}

export default function CodeEditor({ 
  language, 
  initialCode = '', 
  expectedOutput,
  onSuccess 
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [testPassed, setTestPassed] = useState<boolean | null>(null)

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
        return 'python'
      default:
        return 'javascript'
    }
  }

  const runCode = async () => {
    setIsRunning(true)
    setOutput('')
    setTestPassed(null)

    setTimeout(() => {
      try {
        if (language.toLowerCase() === 'html') {
          setOutput(`<!-- HTML Preview -->\n${code}`)
          checkOutput(code)
        } else if (language.toLowerCase() === 'css') {
          setOutput(`/* CSS Applied */\n${code}`)
          checkOutput(code)
        } else if (language.toLowerCase() === 'javascript' || language.toLowerCase() === 'js') {
          // Simulate JavaScript execution
          try {
            const logs: string[] = []
            const customConsole = {
              log: (...args: any[]) => logs.push(args.join(' '))
            }
            const wrappedCode = `
              (function(console) {
                ${code}
              })(customConsole)
            `
            eval(wrappedCode.replace('customConsole', JSON.stringify(customConsole)))
            const result = logs.join('\n') || 'Code executed successfully (no output)'
            setOutput(result)
            checkOutput(result)
          } catch (error: any) {
            setOutput(`Error: ${error.message}`)
            setTestPassed(false)
          }
        } else if (language.toLowerCase() === 'python') {
          // Simulate Python execution (in real app, you'd use a backend service)
          const mockOutput = `# Python Simulation\n# Your code would execute on a Python backend\n# Output: Hello from Python!`
          setOutput(mockOutput)
          checkOutput(mockOutput)
        }
      } catch (error: any) {
        setOutput(`Error: ${error.message}`)
        setTestPassed(false)
      } finally {
        setIsRunning(false)
      }
    }, 500)
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
                    <span>Test Passed!</span>
                  </>
                ) : (
                  <>
                    <X className="h-4 w-4" />
                    <span>Test Failed</span>
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

      {/* Expected Output */}
      {expectedOutput && (
        <div className="text-sm text-gray-400 bg-gray-800/50 p-3 rounded-lg border border-gray-700">
          <strong>Expected Output:</strong> {expectedOutput}
        </div>
      )}
    </div>
  )
}
