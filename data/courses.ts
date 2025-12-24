import { htmlLessons } from './lessons/htmlLessons'
import { cssLessons } from './lessons/cssLessons'
import { jsLessons } from './lessons/jsLessons'
import { pythonLessons } from './lessons/pythonLessons'
import { typescriptLessons } from './lessons/typescriptLessons'
import { integrationProjects } from './lessons/integrationProjects'

export interface Lesson {
  id: string
  title: string
  description: string
  content: string
  language: 'html' | 'css' | 'javascript' | 'python' | 'typescript'
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  estimatedTime: number // in minutes
  initialCode?: string
  solution?: string
  expectedOutput?: string
  hints?: string[]
  isProject?: boolean
  projectDescription?: string
}

export interface Course {
  id: string
  title: string
  description: string
  icon: string
  color: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  lessons: Lesson[]
}

export const courses: Course[] = [
  {
    id: 'html',
    title: 'HTML Fundamentals',
    description: 'Learn the building blocks of the web - from basics to semantic HTML and accessibility',
    icon: '📝',
    color: 'from-orange-500 to-red-500',
    difficulty: 'Beginner',
    duration: '4 weeks',
    lessons: htmlLessons
  },
  {
    id: 'css',
    title: 'CSS Styling',
    description: 'Master styling from basics to Flexbox, responsive design, and modern CSS techniques',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500',
    difficulty: 'Beginner',
    duration: '5 weeks',
    lessons: cssLessons
  },
  {
    id: 'javascript',
    title: 'JavaScript Programming',
    description: 'Learn JavaScript from fundamentals to DOM manipulation, events, and interactive web apps',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-500',
    difficulty: 'Beginner',
    duration: '8 weeks',
    lessons: jsLessons
  },
  {
    id: 'python',
    title: 'Python Programming',
    description: 'Master Python from basics to OOP and prepare for backend development',
    icon: '🐍',
    color: 'from-green-500 to-teal-500',
    difficulty: 'Beginner',
    duration: '10 weeks',
    lessons: pythonLessons
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    description: 'Learn TypeScript - JavaScript with types for safer, more scalable code',
    icon: '📘',
    color: 'from-blue-600 to-indigo-600',
    difficulty: 'Intermediate',
    duration: '6 weeks',
    lessons: typescriptLessons
  },
  {
    id: 'integration',
    title: 'Integration Projects',
    description: 'Build real-world projects connecting HTML, CSS, JavaScript, and Python together',
    icon: '🚀',
    color: 'from-purple-500 to-pink-500',
    difficulty: 'Intermediate',
    duration: '6 weeks',
    lessons: integrationProjects
  }
]
