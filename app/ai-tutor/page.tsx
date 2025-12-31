'use client'

import { useState, useEffect, useRef } from 'react'
import { useUser } from '@clerk/nextjs'
import { Send, Sparkles, Code, BookOpen, Lightbulb, History } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'ai'
  content: string
  timestamp: string
  suggestedTopics?: string[]
}

export default function AITutorPage() {
  const { user } = useUser()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'ai',
      content: `Hi ${user?.firstName || 'there'}! I'm your AI learning assistant. I can help you with:\n\n• Explaining programming concepts\n• Debugging code\n• Providing practice exercises\n• Answering technical questions\n• Recommending learning paths\n\nWhat would you like to learn today?`,
      timestamp: new Date().toISOString(),
      suggestedTopics: ['JavaScript Basics', 'React Components', 'Python Functions', 'CSS Flexbox']
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [conversationId] = useState(`conv_${Date.now()}`)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date().toISOString()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('/api/ai/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          conversationId,
          context: {
            userId: user?.id,
            currentLevel: 2
          }
        })
      })

      const data = await response.json()

      if (data.success) {
        setMessages(prev => [...prev, data.response])
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const quickActions = [
    { icon: Code, label: 'Explain code', prompt: 'Can you explain how this code works?' },
    { icon: Lightbulb, label: 'Get hints', prompt: 'I need a hint for this challenge' },
    { icon: BookOpen, label: 'Recommend topic', prompt: 'What should I learn next?' },
    { icon: History, label: 'Review concepts', prompt: 'Help me review what I learned' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Learning Assistant</h1>
              <p className="text-gray-600 dark:text-gray-400">Your personal coding tutor, available 24/7</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => setInput(action.prompt)}
              className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <action.icon className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">{action.label}</span>
            </button>
          ))}
        </div>

        {/* Chat Interface */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col" style={{ height: 'calc(100vh - 400px)' }}>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] ${message.role === 'user' ? 'bg-purple-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'} rounded-lg p-4`}>
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  {message.suggestedTopics && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.suggestedTopics.map((topic, idx) => (
                        <button
                          key={idx}
                          onClick={() => setInput(`Tell me about ${topic}`)}
                          className="px-3 py-1 bg-white/20 rounded-full text-xs hover:bg-white/30 transition-colors"
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask me anything about coding..."
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
