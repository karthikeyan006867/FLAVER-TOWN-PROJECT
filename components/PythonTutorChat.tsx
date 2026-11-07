'use client'

import { FormEvent, useState } from 'react'
import { BrainCircuit, Send, Sparkles } from 'lucide-react'

type TutorFinding = {
  severity: 'error' | 'warning' | 'tip' | 'success'
  title: string
  explanation: string
  suggestion: string
  line?: number
}

type TutorAnalysis = {
  summary: string
  predictedIssue: string
  confidence: number
  findings: TutorFinding[]
  modelCount: number
  teacherMode: string
}

export default function PythonTutorChat() {
  const [question, setQuestion] = useState('')
  const [code, setCode] = useState('print("Hello, Python learner!")')
  const [expectedOutput, setExpectedOutput] = useState('Hello, Python learner!')
  const [analysis, setAnalysis] = useState<TutorAnalysis | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const askTutor = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/execute/python', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, expectedOutput }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Tutor could not run the code')
      setAnalysis(data.tutorAnalysis)
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Tutor request failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="card-gradient rounded-xl border border-primary-500/30 p-4 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-6 w-6 text-primary-400" />
            <h2 className="text-xl font-bold">Ask the Python Master Tutor</h2>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Local execution, test-case checking, and 200 trained ANN analysts. No external AI provider.
          </p>
        </div>
        <span className="text-xs text-green-300 border border-green-500/30 rounded-full px-3 py-1">
          Self-hosted
        </span>
      </div>

      <form onSubmit={askTutor} className="space-y-3">
        <input
          value={question}
          onChange={event => setQuestion(event.target.value)}
          placeholder="Ask: Why does this fail? How can I improve it?"
          className="w-full rounded-lg border border-gray-700 bg-gray-900/70 px-3 py-3 text-sm text-white outline-none focus:border-primary-400"
        />
        <textarea
          value={code}
          onChange={event => setCode(event.target.value)}
          aria-label="Python code for tutor"
          className="w-full min-h-32 rounded-lg border border-gray-700 bg-gray-950 px-3 py-3 font-mono text-sm text-gray-200 outline-none focus:border-primary-400"
          spellCheck={false}
        />
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            value={expectedOutput}
            onChange={event => setExpectedOutput(event.target.value)}
            placeholder="Expected output (optional)"
            className="flex-1 rounded-lg border border-gray-700 bg-gray-900/70 px-3 py-3 text-sm text-white outline-none focus:border-primary-400"
          />
          <button
            type="submit"
            disabled={loading || !code.trim()}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 px-5 py-3 font-semibold text-white disabled:opacity-50"
          >
            {loading ? <Sparkles className="h-4 w-4 animate-pulse" /> : <Send className="h-4 w-4" />}
            {loading ? 'Teaching...' : 'Run and Ask'}
          </button>
        </div>
        {question && <p className="text-xs text-gray-500">Question received: {question}</p>}
      </form>

      {error && <p className="mt-4 rounded-lg bg-red-500/10 p-3 text-sm text-red-300">{error}</p>}

      {analysis && (
        <div className="mt-5 space-y-3 border-t border-gray-700 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-semibold text-primary-300">{analysis.teacherMode}</h3>
            <span className="text-xs text-gray-400">
              {analysis.modelCount} models · {Math.round(analysis.confidence * 100)}% confidence
            </span>
          </div>
          <p className="text-sm text-gray-300">{analysis.summary}</p>
          <div className="space-y-2">
            {analysis.findings.map((finding, index) => (
              <div key={`${finding.title}-${index}`} className="rounded-lg border border-gray-700 bg-gray-900/60 p-3">
                <div className="font-semibold text-white">{finding.title}</div>
                <p className="mt-1 text-sm text-gray-300">{finding.explanation}</p>
                <p className="mt-2 text-sm text-primary-200"><strong>Next step:</strong> {finding.suggestion}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
