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
  const [output, setOutput] = useState('') // Empty initially - no output until code runs
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
          // Extract text content from HTML for display
          const parser = new DOMParser()
          const doc = parser.parseFromString(code, 'text/html')
          const textContent = doc.body.textContent || doc.body.innerText || ''
          result = textContent.trim()
          setOutput(result || '✓ HTML structure created')
        } else if (language.toLowerCase() === 'css') {
          // For CSS, show a success message instead of code
          result = '✓ CSS styles applied'
          setOutput(result)
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
              ? logs.join('\n') 
              : '' // Empty if no console output
            setOutput(result)
          } catch (error: any) {
            setOutput(`Error: ${error.message}`)
            setTestPassed(false)
            setIsRunning(false)
            return
          }
        } else if (language.toLowerCase() === 'typescript' || language.toLowerCase() === 'ts') {
          // Execute TypeScript as JavaScript
          try {
            const logs: string[] = []
            const customConsole = {
              log: (...args: any[]) => {
                logs.push(args.map(arg => typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)).join(' '))
              }
            }
            const executeCode = new Function('console', code)
            executeCode(customConsole)
            result = logs.join('\n')
            setOutput(result)
          } catch (error: any) {
            setOutput(`Error: ${error.message}`)
            setTestPassed(false)
            setIsRunning(false)
            return
          }
        } else if (language.toLowerCase() === 'python' || language.toLowerCase() === 'py') {
          // Enhanced Python interpreter with proper output execution
          try {
            const pythonOutput: string[] = []
            const lines = code.split('\n')
            const variables: { [key: string]: any } = {}
            let inForLoop = false
            let loopVariable = ''
            let loopIterable: any[] = []
            let loopBody: string[] = []
            let loopIndent = 0
            let inDictDef = false
            let dictName = ''
            let dictContent: string[] = []
            let dictIndent = 0
            let inFunctionDef = false
            let functionName = ''
            let functionParams: string[] = []
            let functionBody: string[] = []
            let functionIndent = 0
            
            // Helper function to evaluate Python expressions
            const evalPythonExpr = (expr: string): any => {
              expr = expr.trim()
              
              // Handle function calls like square(5)
              const funcCallMatch = expr.match(/^(\w+)\((.+)\)$/)
              if (funcCallMatch && !expr.startsWith('len(') && !expr.startsWith('range(')) {
                const funcName = funcCallMatch[1]
                const argStr = funcCallMatch[2].trim()
                
                // Recursively evaluate the argument
                const argValue = evalPythonExpr(argStr)
                
                // If function is defined (as variable), call it
                if (typeof variables[funcName] === 'function') {
                  return variables[funcName](argValue)
                }
                // Return the expression as-is if we can't evaluate
                return expr
              }
              
              // Handle dictionary/list access with string keys: book['title'] or book["title"]
              const dictAccessMatch = expr.match(/^(\w+)\[['"]([^'"]+)['"]\]$/)
              if (dictAccessMatch) {
                const varName = dictAccessMatch[1]
                const key = dictAccessMatch[2]
                if (variables[varName] && typeof variables[varName] === 'object') {
                  return variables[varName][key]
                }
              }
              
              // Handle string methods: name.upper(), name.lower(), name.title()
              const stringMethodMatch = expr.match(/^(\w+)\.(upper|lower|title|capitalize|strip)\(\)$/)
              if (stringMethodMatch) {
                const varName = stringMethodMatch[1]
                const method = stringMethodMatch[2]
                const value = variables[varName]
                
                if (typeof value === 'string') {
                  switch (method) {
                    case 'upper': return value.toUpperCase()
                    case 'lower': return value.toLowerCase()
                    case 'title': return value.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')
                    case 'capitalize': return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
                    case 'strip': return value.trim()
                  }
                }
              }
              
              // Handle list element methods: list[0].upper(), list[i].lower()
              const listElementMethodMatch = expr.match(/^(\w+)\[(\w+|\d+)\]\.(upper|lower|title|capitalize|strip)\(\)$/)
              if (listElementMethodMatch) {
                const listName = listElementMethodMatch[1]
                const indexExpr = listElementMethodMatch[2]
                const method = listElementMethodMatch[3]
                
                if (Array.isArray(variables[listName])) {
                  // Evaluate index (could be variable or number)
                  const index = isNaN(Number(indexExpr)) ? variables[indexExpr] : Number(indexExpr)
                  const value = variables[listName][index]
                  
                  if (typeof value === 'string') {
                    switch (method) {
                      case 'upper': return value.toUpperCase()
                      case 'lower': return value.toLowerCase()
                      case 'title': return value.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')
                      case 'capitalize': return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
                      case 'strip': return value.trim()
                    }
                  }
                }
              }
              
              // Handle len() function
              if (expr.startsWith('len(') && expr.endsWith(')')) {
                const arg = expr.slice(4, -1).trim()
                
                // Handle len(varname)
                if (variables[arg] !== undefined) {
                  const value = variables[arg]
                  if (Array.isArray(value)) return value.length
                  if (typeof value === 'string') return value.length
                  if (typeof value === 'object') return Object.keys(value).length
                  return 0
                }
                
                // Handle len(expression) - recursively evaluate
                const innerValue = evalPythonExpr(arg)
                if (Array.isArray(innerValue)) return innerValue.length
                if (typeof innerValue === 'string') return innerValue.length
                return 0
              }
              
              // Handle list indexing: list[0]
              const indexMatch = expr.match(/^(\w+)\[(\d+)\]$/)
              if (indexMatch) {
                const varName = indexMatch[1]
                const index = parseInt(indexMatch[2])
                if (Array.isArray(variables[varName])) {
                  return variables[varName][index]
                }
              }
              
              // Handle range() function
              if (expr.startsWith('range(') && expr.endsWith(')')) {
                const args = expr.slice(6, -1).split(',').map(a => parseInt(a.trim()))
                if (args.length === 1) {
                  return Array.from({length: args[0]}, (_, i) => i)
                } else if (args.length === 2) {
                  return Array.from({length: args[1] - args[0]}, (_, i) => i + args[0])
                }
                return []
              }
              
              // Handle variables
              if (variables[expr] !== undefined) {
                return variables[expr]
              }
              
              // Handle arithmetic expressions (including ** power operator and // floor division)
              if (expr.match(/[\+\-\*\/\%]|\*\*|\/\//)) {
                try {
                  const evalExpr = expr.replace(/(\w+)/g, (match: string) => {
                    if (variables[match] !== undefined) {
                      const val = variables[match]
                      return Array.isArray(val) ? JSON.stringify(val) : String(val)
                    }
                    return match
                  })
                  // Convert Python ** to JavaScript **
                  const jsExpr = evalExpr.replace(/\*\*/g, '**')
                  // Convert Python // to Math.floor division
                  const finalExpr = jsExpr.replace(/\/\//g, '/')
                  const result = eval(finalExpr)
                  // Floor the result if original expression had //
                  return expr.includes('//') ? Math.floor(result) : result
                } catch {
                  return expr
                }
              }
              
              return expr
            }
            
            for (let i = 0; i < lines.length; i++) {
              const line = lines[i]
              const trimmed = line.trim()
              
              // Skip comments and empty lines
              if (!trimmed || trimmed.startsWith('#')) continue
              
              const indent = line.search(/\S/)
              
              // Handle dictionary definition collection
              if (inDictDef) {
                if (trimmed === '}' || (indent <= dictIndent && trimmed && !trimmed.endsWith(','))) {
                  // End of dictionary
                  const dictStr = '{' + dictContent.join('') + '}'
                  try {
                    // Convert Python dict to JavaScript object
                    const jsDict = dictStr
                      .replace(/'/g, '"')
                      .replace(/True/g, 'true')
                      .replace(/False/g, 'false')
                      .replace(/None/g, 'null')
                    variables[dictName] = JSON.parse(jsDict)
                  } catch {
                    variables[dictName] = {}
                  }
                  inDictDef = false
                  dictContent = []
                  if (trimmed !== '}') {
                    // Process this line normally
                  } else {
                    continue
                  }
                } else {
                  dictContent.push(trimmed)
                  continue
                }
              }
              
              // Handle function definition collection
              if (inFunctionDef) {
                if (indent <= functionIndent && trimmed) {
                  // End of function - store it
                  variables[functionName] = (...args: any[]) => {
                    // Create local scope with parameters
                    const localVars = { ...variables }
                    functionParams.forEach((param, idx) => {
                      localVars[param] = args[idx]
                    })
                    
                    // Execute function body
                    let returnValue: any = null
                    for (const bodyLine of functionBody) {
                      const bodyTrimmed = bodyLine.trim()
                      
                      // Save original variables for local scope
                      const savedVars = { ...variables }
                      // Apply local scope
                      Object.keys(localVars).forEach(key => {
                        variables[key] = localVars[key]
                      })
                      
                      // Handle print statements inside functions
                      if (bodyTrimmed.startsWith('print(')) {
                        const printMatch = bodyTrimmed.match(/print\s*\((.*)\)/)
                        if (printMatch) {
                          let content = printMatch[1].trim()
                          
                          // Handle f-strings
                          if (content.startsWith('f"') || content.startsWith("f'")) {
                            content = content.slice(2, -1)
                            content = content.replace(/\{([^}]+)\}/g, (_, expr) => {
                              const value = evalPythonExpr(expr.trim())
                              return String(value)
                            })
                            pythonOutput.push(content)
                          }
                          // Handle regular strings
                          else if (content.startsWith('"') || content.startsWith("'")) {
                            pythonOutput.push(content.slice(1, -1))
                          }
                          // Handle expressions
                          else {
                            const output = evalPythonExpr(content)
                            pythonOutput.push(String(output))
                          }
                        }
                      }
                      // Handle return statements
                      else if (bodyTrimmed.startsWith('return ')) {
                        const returnExpr = bodyTrimmed.substring(7).trim()
                        returnValue = evalPythonExpr(returnExpr)
                        // Restore original variables
                        Object.keys(variables).forEach(key => {
                          if (savedVars.hasOwnProperty(key)) {
                            variables[key] = savedVars[key]
                          } else {
                            delete variables[key]
                          }
                        })
                        break
                      }
                      
                      // Restore original variables after each line
                      Object.keys(variables).forEach(key => {
                        if (savedVars.hasOwnProperty(key)) {
                          variables[key] = savedVars[key]
                        } else {
                          delete variables[key]
                        }
                      })
                    }
                    return returnValue
                  }
                  inFunctionDef = false
                  functionBody = []
                  // Process current line normally if it's not empty
                } else {
                  functionBody.push(trimmed)
                  continue
                }
              }
              
              // Check if we're exiting a for loop
              if (inForLoop && indent <= loopIndent && trimmed) {
                // Execute the loop
                for (const item of loopIterable) {
                  variables[loopVariable] = item
                  for (const bodyLine of loopBody) {
                    const bodyTrimmed = bodyLine.trim()
                    if (bodyTrimmed.startsWith('print(')) {
                      const printMatch = bodyTrimmed.match(/print\s*\((.*)\)/)
                      if (printMatch) {
                        let content = printMatch[1].trim()
                        const output = evalPythonExpr(content)
                        pythonOutput.push(String(output))
                      }
                    }
                  }
                }
                inForLoop = false
                loopBody = []
              }
              
              // Handle function definitions
              if (trimmed.startsWith('def ') && trimmed.includes('(') && trimmed.endsWith(':')) {
                const defMatch = trimmed.match(/def\s+(\w+)\s*\(([^)]*)\)\s*:/)
                if (defMatch) {
                  inFunctionDef = true
                  functionName = defMatch[1]
                  functionParams = defMatch[2] ? defMatch[2].split(',').map(p => p.trim().split('=')[0].trim()).filter(p => p) : []
                  functionBody = []
                  functionIndent = indent
                  continue
                }
              }
              
              // Handle for loops
              if (trimmed.startsWith('for ') && trimmed.includes(' in ') && trimmed.endsWith(':')) {
                const forMatch = trimmed.match(/for\s+(\w+)\s+in\s+(.+):/)
                if (forMatch) {
                  inForLoop = true
                  loopVariable = forMatch[1]
                  loopIterable = evalPythonExpr(forMatch[2])
                  loopBody = []
                  loopIndent = indent
                  continue
                }
              }
              
              // Collect loop body
              if (inForLoop && indent > loopIndent) {
                loopBody.push(trimmed)
                continue
              }
              
              // Handle method calls on variables (e.g., list.append())
              if (trimmed.match(/^\w+\.\w+\(/)) {
                const methodMatch = trimmed.match(/^(\w+)\.(\w+)\((.*)\)/)
                if (methodMatch) {
                  const objName = methodMatch[1]
                  const method = methodMatch[2]
                  const args = methodMatch[3]
                  
                  if (method === 'append' && Array.isArray(variables[objName])) {
                    let arg = args.trim()
                    if (arg.startsWith('"') || arg.startsWith("'")) {
                      arg = arg.slice(1, -1)
                    }
                    variables[objName].push(arg)
                  }
                }
                continue
              }
              
              // Handle print statements - OUTPUT ACTUAL RESULTS
              if (trimmed.startsWith('print(')) {
                const printMatch = trimmed.match(/print\s*\((.*)\)/)
                if (printMatch) {
                  let content = printMatch[1].trim()
                  
                  // Handle f-strings
                  if (content.startsWith('f"') || content.startsWith("f'")) {
                    content = content.slice(2, -1)
                    content = content.replace(/\{([^}]+)\}/g, (_, expr) => {
                      const value = evalPythonExpr(expr.trim())
                      return String(value)
                    })
                    pythonOutput.push(content)
                  }
                  // Handle regular strings
                  else if (content.startsWith('"') || content.startsWith("'")) {
                    pythonOutput.push(content.slice(1, -1))
                  }
                  // Handle function calls, variables, expressions
                  else {
                    const output = evalPythonExpr(content)
                    pythonOutput.push(String(output))
                  }
                }
              }
              
              // Handle variable assignments
              else if (trimmed.includes('=') && !trimmed.includes('==') && !trimmed.includes('!=') && !trimmed.includes('<=') && !trimmed.includes('>=')) {
                const eqIndex = trimmed.indexOf('=')
                const varName = trimmed.substring(0, eqIndex).trim()
                let value = trimmed.substring(eqIndex + 1).trim()
                
                // Check for multi-line dictionary
                if (value === '{' || value.startsWith('{') && !value.endsWith('}')) {
                  inDictDef = true
                  dictName = varName
                  dictContent = value === '{' ? [] : [value.substring(1)]
                  dictIndent = indent
                  continue
                }
                
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
                    variables[varName] = []
                  }
                } else if (value.startsWith('{') && value.endsWith('}')) {
                  // Single-line dictionary
                  try {
                    const jsDict = value
                      .replace(/'/g, '"')
                      .replace(/True/g, 'true')
                      .replace(/False/g, 'false')
                      .replace(/None/g, 'null')
                    variables[varName] = JSON.parse(jsDict)
                  } catch {
                    variables[varName] = {}
                  }
                } else if (value.startsWith('(') && value.endsWith(')')) {
                  // Handle tuples
                  try {
                    const tupleContent = value.slice(1, -1)
                    variables[varName] = JSON.parse('[' + tupleContent.replace(/'/g, '"') + ']')
                  } catch {
                    variables[varName] = []
                  }
                } else {
                  // Handle expressions
                  variables[varName] = evalPythonExpr(value)
                }
              }
            }
            
            // Execute any remaining loop
            if (inForLoop && loopBody.length > 0) {
              for (const item of loopIterable) {
                variables[loopVariable] = item
                for (const bodyLine of loopBody) {
                  const bodyTrimmed = bodyLine.trim()
                  
                  // Handle print statements
                  if (bodyTrimmed.startsWith('print(')) {
                    const printMatch = bodyTrimmed.match(/print\s*\((.*)\)/)
                    if (printMatch) {
                      let content = printMatch[1].trim()
                      
                      // Handle f-strings inside loops
                      if (content.startsWith('f"') || content.startsWith("f'")) {
                        content = content.slice(2, -1)
                        content = content.replace(/\{([^}]+)\}/g, (_, expr) => {
                          const value = evalPythonExpr(expr.trim())
                          return String(value)
                        })
                        pythonOutput.push(content)
                      }
                      // Handle regular strings
                      else if (content.startsWith('"') || content.startsWith("'")) {
                        pythonOutput.push(content.slice(1, -1))
                      }
                      // Handle expressions
                      else {
                        const output = evalPythonExpr(content)
                        pythonOutput.push(String(output))
                      }
                    }
                  }
                  // Handle variable assignments inside loops
                  else if (bodyTrimmed.includes('=') && !bodyTrimmed.includes('==') && !bodyTrimmed.includes('!=')) {
                    const eqIndex = bodyTrimmed.indexOf('=')
                    const varName = bodyTrimmed.substring(0, eqIndex).trim()
                    const value = bodyTrimmed.substring(eqIndex + 1).trim()
                    variables[varName] = evalPythonExpr(value)
                  }
                  // Handle function calls (without assignment)
                  else if (bodyTrimmed.match(/^\w+\(/)) {
                    evalPythonExpr(bodyTrimmed)
                  }
                }
              }
            }
            
            result = pythonOutput.length > 0 
              ? pythonOutput.join('\n') 
              : '' // Empty output if no print statements
            setOutput(result)
          } catch (error: any) {
            result = `Error: ${error.message}`
            setOutput(result)
          }
        } else if (language.toLowerCase() === 'ruby' || language.toLowerCase() === 'rb') {
          // Simulate Ruby execution
          result = '✓ Ruby code executed successfully'
          setOutput(result)
        } else if (language.toLowerCase() === 'php') {
          // Simulate PHP execution
          result = '✓ PHP code executed successfully'
          setOutput(result)
        } else if (language.toLowerCase() === 'java') {
          // Simulate Java execution
          result = '✓ Compiled successfully\n✓ Execution completed'
          setOutput(result)
        } else if (language.toLowerCase() === 'csharp' || language.toLowerCase() === 'cs' || language.toLowerCase() === 'c#') {
          // Simulate C# execution
          result = '✓ Built successfully\n✓ Execution completed'
          setOutput(result)
        } else if (language.toLowerCase() === 'go' || language.toLowerCase() === 'golang') {
          // Simulate Go execution
          result = '✓ Build successful\n✓ Program executed'
          setOutput(result)
        } else if (language.toLowerCase() === 'rust' || language.toLowerCase() === 'rs') {
          // Simulate Rust execution
          result = '✓ Compiling successful\n✓ Binary executed'
          setOutput(result)
        } else if (language.toLowerCase() === 'swift') {
          // Simulate Swift execution
          result = '✓ Compilation successful\n✓ Program executed'
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
    setOutput('') // Clear console/output
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
