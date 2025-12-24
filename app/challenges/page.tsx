'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Trophy, Clock, Code2, Zap, Flame, Star, Lock, CheckCircle2 } from 'lucide-react'
import CodeEditor from '@/components/CodeEditor'

interface Challenge {
  id: string
  title: string
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert'
  points: number
  timeLimit: number
  category: string
  description: string
  language: 'javascript' | 'python' | 'html' | 'css' | 'typescript'
  initialCode: string
  expectedOutput: string
  locked: boolean
  completed: boolean
}

const challenges: Challenge[] = [
  {
    id: 'ch-1',
    title: 'Reverse a String',
    difficulty: 'Easy',
    points: 50,
    timeLimit: 10,
    category: 'Strings',
    language: 'javascript',
    description: 'Write a function that reverses a string without using built-in reverse methods.',
    initialCode: `function reverseString(str) {\n  // Your code here\n  \n}\n\nconsole.log(reverseString("hello"));`,
    expectedOutput: 'olleh',
    locked: false,
    completed: false,
  },
  {
    id: 'ch-2',
    title: 'FizzBuzz Challenge',
    difficulty: 'Easy',
    points: 75,
    timeLimit: 15,
    category: 'Logic',
    language: 'javascript',
    description: 'Print numbers 1-100. For multiples of 3 print "Fizz", for multiples of 5 print "Buzz", for both print "FizzBuzz".',
    initialCode: `function fizzBuzz() {\n  // Print numbers 1 to 100\n  for (let i = 1; i <= 15; i++) {\n    // Add your logic here\n    console.log(i);\n  }\n}\n\nfizzBuzz();`,
    expectedOutput: '1\n2\nFizz\n4\nBuzz',
    locked: false,
    completed: false,
  },
  {
    id: 'ch-3',
    title: 'Fibonacci Sequence',
    difficulty: 'Medium',
    points: 150,
    timeLimit: 20,
    category: 'Algorithms',
    language: 'javascript',
    description: 'Generate the first n numbers of the Fibonacci sequence.',
    initialCode: `function fibonacci(n) {\n  // Return array of first n Fibonacci numbers\n  \n}\n\nconsole.log(fibonacci(10));`,
    expectedOutput: '0,1,1,2,3,5,8,13,21,34',
    locked: false,
    completed: false,
  },
  {
    id: 'ch-4',
    title: 'Palindrome Checker',
    difficulty: 'Medium',
    points: 125,
    timeLimit: 15,
    category: 'Strings',
    language: 'python',
    description: 'Check if a string is a palindrome, ignoring spaces and case.',
    initialCode: `def is_palindrome(text):\n    # Your code here\n    pass\n\nprint(is_palindrome("racecar"))`,
    expectedOutput: 'True',
    locked: false,
    completed: false,
  },
  {
    id: 'ch-5',
    title: 'Two Sum Problem',
    difficulty: 'Medium',
    points: 200,
    timeLimit: 25,
    category: 'Arrays',
    language: 'javascript',
    description: 'Find two numbers in an array that add up to a target sum. Return their indices.',
    initialCode: `function twoSum(nums, target) {\n  // Return array of two indices\n  \n}\n\nconsole.log(twoSum([2, 7, 11, 15], 9));`,
    expectedOutput: '0,1',
    locked: false,
    completed: false,
  },
  {
    id: 'ch-6',
    title: 'Binary Search',
    difficulty: 'Hard',
    points: 300,
    timeLimit: 30,
    category: 'Search',
    language: 'python',
    description: 'Implement binary search. Return the index or -1 if not found.',
    initialCode: `def binary_search(arr, target):\n    # Implement binary search\n    pass\n\nprint(binary_search([1, 3, 5, 7, 9, 11], 7))`,
    expectedOutput: '3',
    locked: false,
    completed: false,
  },
  {
    id: 'ch-7',
    title: 'Valid Parentheses',
    difficulty: 'Hard',
    points: 250,
    timeLimit: 25,
    category: 'Stacks',
    language: 'javascript',
    description: 'Check if brackets are valid. Every opening bracket must have a corresponding closing bracket.',
    initialCode: `function isValid(s) {\n  // Check if parentheses are valid\n  \n}\n\nconsole.log(isValid("()[]{}"));`,
    expectedOutput: 'true',
    locked: false,
    completed: false,
  },
  {
    id: 'ch-8',
    title: 'Merge Sorted Arrays',
    difficulty: 'Hard',
    points: 275,
    timeLimit: 30,
    category: 'Arrays',
    language: 'javascript',
    description: 'Merge two sorted arrays without using built-in sort.',
    initialCode: `function mergeSortedArrays(arr1, arr2) {\n  // Merge two sorted arrays\n  \n}\n\nconsole.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));`,
    expectedOutput: '1,2,3,4,5,6',
    locked: false,
    completed: false,
  },
  {
    id: 'ch-9',
    title: 'Longest Substring',
    difficulty: 'Expert',
    points: 500,
    timeLimit: 40,
    category: 'Sliding Window',
    language: 'javascript',
    description: 'Find the length of the longest substring without repeating characters.',
    initialCode: `function lengthOfLongestSubstring(s) {\n  // Your code here\n  \n}\n\nconsole.log(lengthOfLongestSubstring("abcabcbb"));`,
    expectedOutput: '3',
    locked: true,
    completed: false,
  },
  {
    id: 'ch-10',
    title: 'Maximum Subarray Sum',
    difficulty: 'Expert',
    points: 450,
    timeLimit: 35,
    category: 'Dynamic Programming',
    language: 'python',
    description: 'Find the contiguous subarray with the largest sum (Kadane\\'s algorithm).',
    initialCode: `def max_subarray_sum(nums):\n    # Implement Kadane's algorithm\n    pass\n\nprint(max_subarray_sum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))`,
    expectedOutput: '6',
    locked: true,
    completed: false,
  },
  {
    id: 'ch-11',
    title: 'LRU Cache',
    difficulty: 'Expert',
    points: 600,
    timeLimit: 50,
    category: 'Data Structures',
    language: 'javascript',
    description: 'Implement an LRU cache with O(1) get and put operations.',
    initialCode: `class LRUCache {\n  constructor(capacity) {\n    // Initialize\n  }\n  \n  get(key) {\n    // Get value\n  }\n  \n  put(key, value) {\n    // Put key-value\n  }\n}`,
    expectedOutput: '1',
    locked: true,
    completed: false,
  },
  {
    id: 'ch-12',
    title: 'N-Queens Problem',
    difficulty: 'Expert',
    points: 700,
    timeLimit: 60,
    category: 'Backtracking',
    language: 'python',
    description: 'Solve the N-Queens puzzle using backtracking.',
    initialCode: `def solve_n_queens(n):\n    # Return all solutions\n    pass\n\nprint(len(solve_n_queens(4)))`,
    expectedOutput: '2',
    locked: true,
    completed: false,
  },
]

export default function ChallengesPage() {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null)
  const [filter, setFilter] = useState<'All' | 'Easy' | 'Medium' | 'Hard' | 'Expert'>('All')

  const filteredChallenges = filter === 'All' 
    ? challenges 
    : challenges.filter(c => c.difficulty === filter)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-500/20 border-green-500/30'
      case 'Medium': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30'
      case 'Hard': return 'text-orange-400 bg-orange-500/20 border-orange-500/30'
      case 'Expert': return 'text-red-400 bg-red-500/20 border-red-500/30'
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30'
    }
  }

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return <Star className="h-4 w-4" />
      case 'Medium': return <Zap className="h-4 w-4" />
      case 'Hard': return <Flame className="h-4 w-4" />
      case 'Expert': return <Trophy className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Coding <span className="text-gradient">Challenges</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Test your skills with real-world coding challenges
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="card-gradient p-4 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-primary-400">0</div>
              <div className="text-sm text-gray-400">Completed</div>
            </div>
            <div className="card-gradient p-4 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-accent-400">{challenges.length}</div>
              <div className="text-sm text-gray-400">Total</div>
            </div>
            <div className="card-gradient p-4 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-green-400">0</div>
              <div className="text-sm text-gray-400">Points</div>
            </div>
            <div className="card-gradient p-4 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-orange-400">0</div>
              <div className="text-sm text-gray-400">Streak</div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {['All', 'Easy', 'Medium', 'Hard', 'Expert'].map(diff => (
              <button
                key={diff}
                onClick={() => setFilter(diff as any)}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  filter === diff
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>

          {/* Challenges Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChallenges.map(challenge => (
              <div
                key={challenge.id}
                className="card-gradient p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all cursor-pointer group"
                onClick={() => !challenge.locked && setSelectedChallenge(challenge)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1 ${getDifficultyColor(challenge.difficulty)}`}>
                    {getDifficultyIcon(challenge.difficulty)}
                    {challenge.difficulty}
                  </div>
                  {challenge.locked && <Lock className="h-5 w-5 text-gray-500" />}
                  {challenge.completed && <CheckCircle2 className="h-5 w-5 text-green-400" />}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">
                  {challenge.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {challenge.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Trophy className="h-4 w-4" />
                      <span>{challenge.points}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span>{challenge.timeLimit}m</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">{challenge.category}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Challenge Modal */}
          {selectedChallenge && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex items-center justify-between z-10">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{selectedChallenge.title}</h2>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(selectedChallenge.difficulty)}`}>
                        {selectedChallenge.difficulty}
                      </span>
                      <span className="text-sm text-gray-400">{selectedChallenge.category}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedChallenge(null)}
                    className="text-gray-400 hover:text-white transition-colors text-3xl font-light leading-none"
                  >
                    ×
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-2">Description</h3>
                    <p className="text-gray-300">{selectedChallenge.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">Requirements</h3>
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-4 w-4" />
                        <span>{selectedChallenge.points} points</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{selectedChallenge.timeLimit} minutes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Code2 className="h-4 w-4" />
                        <span>{selectedChallenge.language}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-3">Code Editor</h3>
                    <CodeEditor
                      language={selectedChallenge.language}
                      initialCode={selectedChallenge.initialCode}
                      expectedOutput={selectedChallenge.expectedOutput}
                      onSuccess={() => {
                        alert('Challenge completed! 🎉')
                        setSelectedChallenge(null)
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
