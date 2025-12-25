import { htmlLessons } from './lessons/htmlLessons'
import { cssLessons } from './lessons/cssLessons'
import { jsLessons } from './lessons/jsLessons'
import { pythonLessons } from './lessons/pythonLessons'
import { typescriptLessons } from './lessons/typescriptLessons'
import { reactLessons } from './lessons/reactLessons'
import { nodejsLessons } from './lessons/nodejsLessons'
import { rubyLessons } from './lessons/rubyLessons'
import { phpLessons } from './lessons/phpLessons'
import { javaLessons } from './lessons/javaLessons'
import { csharpLessons } from './lessons/csharpLessons'
import { goLessons } from './lessons/goLessons'
import { rustLessons } from './lessons/rustLessons'
import { swiftLessons } from './lessons/swiftLessons'
import { integrationProjects } from './lessons/integrationProjects'

export interface TestCase {
  name: string
  test: (code: string, output: string) => boolean
  errorMessage: string
}

export interface Lesson {
  id: string
  title: string
  description: string
  content: string
  language: 'html' | 'css' | 'javascript' | 'python' | 'typescript' | 'react' | 'nodejs' | 'ruby' | 'php' | 'java' | 'csharp' | 'go' | 'rust' | 'swift'
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  estimatedTime: number // in minutes
  initialCode?: string
  solution?: string
  expectedOutput?: string
  hints?: string[]
  isProject?: boolean
  projectDescription?: string
  testCases?: TestCase[] // Automated test cases
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
    id: 'react',
    title: 'React Framework',
    description: 'Build modern UIs with React - components, hooks, state management, and routing',
    icon: '⚛️',
    color: 'from-cyan-500 to-blue-500',
    difficulty: 'Intermediate',
    duration: '8 weeks',
    lessons: reactLessons
  },
  {
    id: 'nodejs',
    title: 'Node.js Backend',
    description: 'Create powerful backends with Node.js - APIs, databases, authentication, and deployment',
    icon: '🟢',
    color: 'from-green-600 to-emerald-600',
    difficulty: 'Intermediate',
    duration: '10 weeks',
    lessons: nodejsLessons
  },
  {
    id: 'ruby',
    title: 'Ruby Programming',
    description: 'Master Ruby and Rails - elegant syntax, MVC architecture, and rapid development',
    icon: '💎',
    color: 'from-red-600 to-pink-600',
    difficulty: 'Intermediate',
    duration: '8 weeks',
    lessons: rubyLessons
  },
  {
    id: 'php',
    title: 'PHP Web Development',
    description: 'Build dynamic websites with PHP - from basics to Laravel framework and APIs',
    icon: '🐘',
    color: 'from-indigo-600 to-purple-600',
    difficulty: 'Intermediate',
    duration: '8 weeks',
    lessons: phpLessons
  },
  {
    id: 'java',
    title: 'Java Programming',
    description: 'Enterprise development with Java - OOP, collections, Spring Boot, and microservices',
    icon: '☕',
    color: 'from-orange-600 to-red-700',
    difficulty: 'Intermediate',
    duration: '12 weeks',
    lessons: javaLessons
  },
  {
    id: 'csharp',
    title: 'C# & .NET',
    description: 'Microsoft stack mastery - C#, .NET Core, ASP.NET, Entity Framework, and Azure',
    icon: '🎯',
    color: 'from-purple-600 to-violet-600',
    difficulty: 'Intermediate',
    duration: '12 weeks',
    lessons: csharpLessons
  },
  {
    id: 'go',
    title: 'Go (Golang)',
    description: 'Modern systems programming - concurrency, microservices, and cloud-native apps',
    icon: '🐹',
    color: 'from-sky-500 to-blue-600',
    difficulty: 'Advanced',
    duration: '10 weeks',
    lessons: goLessons
  },
  {
    id: 'rust',
    title: 'Rust Programming',
    description: 'Systems programming with memory safety - ownership, concurrency, and performance',
    icon: '🦀',
    color: 'from-amber-600 to-orange-700',
    difficulty: 'Advanced',
    duration: '14 weeks',
    lessons: rustLessons
  },
  {
    id: 'swift',
    title: 'Swift & iOS',
    description: 'Apple ecosystem development - Swift, SwiftUI, UIKit, and iOS app publishing',
    icon: '🍎',
    color: 'from-orange-500 to-red-600',
    difficulty: 'Advanced',
    duration: '12 weeks',
    lessons: swiftLessons
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
