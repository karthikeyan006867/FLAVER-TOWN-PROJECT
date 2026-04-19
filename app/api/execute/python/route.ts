import { currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { spawn } from 'node:child_process'

export const runtime = 'nodejs'

const MAX_CODE_LENGTH = 20000
const EXEC_TIMEOUT_MS = 8000

interface PythonExecutionResult {
  output: string
  success: boolean
}

function runPython(executable: string, code: string): Promise<PythonExecutionResult> {
  return new Promise((resolve, reject) => {
    const child = spawn(executable, ['-I', '-u', '-'])

    let stdout = ''
    let stderr = ''
    let finished = false

    const timeout = setTimeout(() => {
      if (!finished) {
        finished = true
        child.kill('SIGKILL')
        resolve({
          output: `Execution timed out after ${EXEC_TIMEOUT_MS / 1000} seconds`,
          success: false,
        })
      }
    }, EXEC_TIMEOUT_MS)

    child.stdout.on('data', (chunk) => {
      stdout += chunk.toString()
    })

    child.stderr.on('data', (chunk) => {
      stderr += chunk.toString()
    })

    child.on('error', (error: NodeJS.ErrnoException) => {
      clearTimeout(timeout)
      if (!finished) {
        finished = true
        reject(error)
      }
    })

    child.on('close', (code) => {
      clearTimeout(timeout)
      if (finished) return
      finished = true

      const mergedOutput = [stdout, stderr].filter(Boolean).join('').trim()
      resolve({
        output: mergedOutput,
        success: code === 0,
      })
    })

    child.stdin.write(code)
    child.stdin.end()
  })
}

async function executePythonWithFallback(code: string): Promise<PythonExecutionResult> {
  try {
    return await runPython('python3', code)
  } catch (error: any) {
    if (error?.code !== 'ENOENT') {
      throw error
    }
  }

  return runPython('python', code)
}

export async function POST(request: Request) {
  try {
    const user = await currentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const code = typeof body?.code === 'string' ? body.code : ''

    if (!code.trim()) {
      return NextResponse.json({ error: 'Code is required' }, { status: 400 })
    }

    if (code.length > MAX_CODE_LENGTH) {
      return NextResponse.json({ error: 'Code is too large' }, { status: 400 })
    }

    const result = await executePythonWithFallback(code)

    return NextResponse.json({
      output: result.output,
      success: result.success,
    })
  } catch (error: any) {
    if (error?.code === 'ENOENT') {
      return NextResponse.json(
        { error: 'Python runtime is not available on the server' },
        { status: 503 },
      )
    }

    console.error('Python execution API failed:', error)
    return NextResponse.json({ error: 'Python execution failed' }, { status: 500 })
  }
}
