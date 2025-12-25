'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import CodeEditor from '@/components/CodeEditor'
import { Calendar, Trophy, Flame, Star, Award, Clock } from 'lucide-react'

const dailyChallenge = {
  title: "Sum of Two Numbers",
  difficulty: "Easy",
  points: 100,
  description: "Write a function that takes two numbers as parameters and returns their sum.",
  testCases: [
    { input: "sum(5, 3)", output: "8" },
    { input: "sum(-1, 1)", output: "0" },
    { input: "sum(100, 200)", output: "300" }
  ],
  starterCode: {
    javascript: `function sum(a, b) {\n  // Your code here\n}`,
    python: `def sum(a, b):\n    # Your code here\n    pass`,
    typescript: `function sum(a: number, b: number): number {\n  // Your code here\n  return 0;\n}`
  }
}

export default function DailyChallengePage() {
  const [language, setLanguage] = useState<'javascript' | 'python' | 'typescript'>('javascript')
  const [output, setOutput] = useState('')
  const [streak, setStreak] = useState(7)
  const [completed, setCompleted] = useState(false)

  const handleRun = (result: { output: string; error?: string }) => {
    if (result.error) {
      setOutput(`❌ Error: ${result.error}`)
    } else {
      setOutput(result.output)
      // Check if solution is correct
      if (result.output.includes('8') && result.output.includes('0') && result.output.includes('300')) {
        setCompleted(true)
        setTimeout(() => {
          alert('🎉 Challenge completed! +100 points')
        }, 500)
      }
    }
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
              <Calendar className="h-8 w-8 text-primary-400" />
              <span className="text-gradient">Daily Challenge</span>
            </h1>
            <p className="text-gray-400">
              Complete today&apos;s challenge to maintain your streak!
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="card-gradient border border-gray-700 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="bg-orange-500/20 p-3 rounded-lg">
                  <Flame className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Current Streak</div>
                  <div className="text-2xl font-bold">{streak} Days</div>
                </div>
              </div>
            </div>

            <div className="card-gradient border border-gray-700 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-500/20 p-3 rounded-lg">
                  <Trophy className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Challenges Completed</div>
                  <div className="text-2xl font-bold">42</div>
                </div>
              </div>
            </div>

            <div className="card-gradient border border-gray-700 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary-500/20 p-3 rounded-lg">
                  <Star className="h-6 w-6 text-primary-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Total Points</div>
                  <div className="text-2xl font-bold">4,200</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Challenge Details */}
            <div className="card-gradient border border-gray-700 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{dailyChallenge.title}</h2>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                      {dailyChallenge.difficulty}
                    </span>
                    <span className="flex items-center gap-1 text-yellow-400">
                      <Trophy className="h-4 w-4" />
                      {dailyChallenge.points} pts
                    </span>
                  </div>
                </div>
                {completed && (
                  <div className="bg-green-500/20 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-green-400" />
                  </div>
                )}
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-gray-300">{dailyChallenge.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Test Cases
                </h3>
                <div className="space-y-2">
                  {dailyChallenge.testCases.map((test, i) => (
                    <div key={i} className="bg-gray-800/50 rounded-lg p-3">
                      <div className="text-sm">
                        <span className="text-gray-400">Input: </span>
                        <code className="text-blue-400">{test.input}</code>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-400">Expected: </span>
                        <code className="text-green-400">{test.output}</code>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-sm text-blue-300">
                  💡 <strong>Hint:</strong> Use the + operator to add two numbers together.
                </p>
              </div>
            </div>

            {/* Code Editor */}
            <div className="space-y-4">
              <div className="flex gap-2">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="typescript">TypeScript</option>
                </select>
              </div>

              <div className="card-gradient border border-gray-700 rounded-xl p-4">
                <CodeEditor
                  language={language}
                  initialCode={dailyChallenge.starterCode[language]}
                  onSuccess={() => {
                    setCompleted(true)
                    alert('🎉 Challenge completed! +100 points')
                  }}
                />
              </div>

              {output && (
                <div className="card-gradient border border-gray-700 rounded-xl p-4">
                  <h3 className="font-semibold mb-2">Output</h3>
                  <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-sm font-mono text-green-400 overflow-auto">
                    {output}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Previous Challenges */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Previous Challenges</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Reverse String', difficulty: 'Easy', completed: true },
                { title: 'Find Maximum', difficulty: 'Medium', completed: true },
                { title: 'Binary Search', difficulty: 'Hard', completed: false },
              ].map((challenge, i) => (
                <div key={i} className="card-gradient border border-gray-700 rounded-xl p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{challenge.title}</h3>
                    {challenge.completed && (
                      <Award className="h-5 w-5 text-green-400" />
                    )}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    challenge.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                    challenge.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {challenge.difficulty}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
