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
import { kotlinLessons } from './lessons/kotlinLessons'
import { scalaLessons } from './lessons/scalaLessons'
import { dartLessons } from './lessons/dartLessons'
import { rLessons } from './lessons/rLessons'
import { sqlLessons } from './lessons/sqlLessons'
import { bashLessons } from './lessons/bashLessons'
import { elixirLessons } from './lessons/elixirLessons'
import { haskellLessons } from './lessons/haskellLessons'
import { luaLessons } from './lessons/luaLessons'
import { perlLessons } from './lessons/perlLessons'
import { juliaLessons } from './lessons/juliaLessons'
import { powershellLessons } from './lessons/powershellLessons'
import { groovyLessons } from './lessons/groovyLessons'
import { clojureLessons } from './lessons/clojureLessons'
import { erlangLessons } from './lessons/erlangLessons'
import { fsharpLessons } from './lessons/fsharpLessons'
import { ocamlLessons } from './lessons/ocamlLessons'
import { matlabLessons } from './lessons/matlabLessons'
import { objectivecLessons } from './lessons/objectivecLessons'
import { crystalLessons } from './lessons/crystalLessons'

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
  language: 'html' | 'css' | 'javascript' | 'python' | 'typescript' | 'react' | 'nodejs' | 'ruby' | 'php' | 'java' | 'csharp' | 'go' | 'rust' | 'swift' | 'kotlin' | 'scala' | 'dart' | 'r' | 'sql' | 'bash' | 'elixir' | 'haskell' | 'lua' | 'perl' | 'julia' | 'powershell' | 'groovy' | 'clojure' | 'erlang' | 'fsharp' | 'ocaml' | 'matlab' | 'objectivec' | 'crystal'
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
  },
  {
    id: 'kotlin',
    title: 'Kotlin Programming',
    description: 'Modern JVM language - Android development, null safety, and coroutines',
    icon: '🎨',
    color: 'from-purple-500 to-pink-600',
    difficulty: 'Intermediate',
    duration: '8 weeks',
    lessons: kotlinLessons
  },
  {
    id: 'scala',
    title: 'Scala Programming',
    description: 'Functional and object-oriented programming on the JVM',
    icon: '🔴',
    color: 'from-red-600 to-orange-600',
    difficulty: 'Advanced',
    duration: '10 weeks',
    lessons: scalaLessons
  },
  {
    id: 'dart',
    title: 'Dart & Flutter',
    description: 'Build beautiful cross-platform apps with Dart and Flutter framework',
    icon: '🎯',
    color: 'from-blue-500 to-cyan-500',
    difficulty: 'Intermediate',
    duration: '9 weeks',
    lessons: dartLessons
  },
  {
    id: 'r',
    title: 'R Programming',
    description: 'Statistical computing and data visualization - from basics to advanced analytics',
    icon: '📊',
    color: 'from-blue-700 to-indigo-600',
    difficulty: 'Intermediate',
    duration: '8 weeks',
    lessons: rLessons
  },
  {
    id: 'sql',
    title: 'SQL & Databases',
    description: 'Master database management - queries, joins, optimization, and database design',
    icon: '🗄️',
    color: 'from-gray-600 to-slate-700',
    difficulty: 'Beginner',
    duration: '6 weeks',
    lessons: sqlLessons
  },
  {
    id: 'bash',
    title: 'Bash Scripting',
    description: 'Linux/Unix shell scripting - automation, system administration, and DevOps',
    icon: '💻',
    color: 'from-green-700 to-emerald-800',
    difficulty: 'Intermediate',
    duration: '5 weeks',
    lessons: bashLessons
  },
  {
    id: 'elixir',
    title: 'Elixir Programming',
    description: 'Functional programming for scalable applications - Phoenix framework and OTP',
    icon: '💧',
    color: 'from-purple-600 to-violet-700',
    difficulty: 'Advanced',
    duration: '10 weeks',
    lessons: elixirLessons
  },
  {
    id: 'haskell',
    title: 'Haskell Programming',
    description: 'Pure functional programming - type systems, monads, and lazy evaluation',
    icon: '🔷',
    color: 'from-purple-700 to-pink-700',
    difficulty: 'Advanced',
    duration: '12 weeks',
    lessons: haskellLessons
  },
  {
    id: 'lua',
    title: 'Lua Programming',
    description: 'Lightweight scripting - game development, embedded systems, and scripting',
    icon: '🌙',
    color: 'from-blue-600 to-indigo-700',
    difficulty: 'Beginner',
    duration: '4 weeks',
    lessons: luaLessons
  },
  {
    id: 'perl',
    title: 'Perl Programming',
    description: 'Text processing and system administration - regex, CGI, and automation',
    icon: '🐪',
    color: 'from-blue-800 to-purple-800',
    difficulty: 'Intermediate',
    duration: '6 weeks',
    lessons: perlLessons
  },
  {
    id: 'julia',
    title: 'Julia Programming',
    description: 'High-performance scientific computing - numerical analysis and data science',
    icon: '🔬',
    color: 'from-purple-600 to-red-600',
    difficulty: 'Intermediate',
    duration: '8 weeks',
    lessons: juliaLessons
  },
  {
    id: 'powershell',
    title: 'PowerShell Scripting',
    description: 'Windows automation and administration - cmdlets, pipelines, and remote management',
    icon: '⚡',
    color: 'from-blue-700 to-cyan-700',
    difficulty: 'Intermediate',
    duration: '6 weeks',
    lessons: powershellLessons
  },
  {
    id: 'groovy',
    title: 'Groovy Programming',
    description: 'Dynamic JVM language - Gradle, testing, and enterprise automation',
    icon: '🎸',
    color: 'from-teal-600 to-green-700',
    difficulty: 'Intermediate',
    duration: '6 weeks',
    lessons: groovyLessons
  },
  {
    id: 'clojure',
    title: 'Clojure Programming',
    description: 'Modern Lisp for the JVM - functional programming and concurrent systems',
    icon: '⚙️',
    color: 'from-green-600 to-blue-700',
    difficulty: 'Advanced',
    duration: '10 weeks',
    lessons: clojureLessons
  },
  {
    id: 'erlang',
    title: 'Erlang Programming',
    description: 'Concurrent and distributed systems - fault tolerance and telecommunications',
    icon: '📡',
    color: 'from-red-700 to-pink-700',
    difficulty: 'Advanced',
    duration: '12 weeks',
    lessons: erlangLessons
  },
  {
    id: 'fsharp',
    title: 'F# Programming',
    description: 'Functional-first .NET language - type providers and data science',
    icon: '🔷',
    color: 'from-blue-600 to-purple-700',
    difficulty: 'Intermediate',
    duration: '8 weeks',
    lessons: fsharpLessons
  },
  {
    id: 'ocaml',
    title: 'OCaml Programming',
    description: 'Industrial-strength functional programming - type inference and modules',
    icon: '🐫',
    color: 'from-orange-600 to-red-700',
    difficulty: 'Advanced',
    duration: '10 weeks',
    lessons: ocamlLessons
  },
  {
    id: 'matlab',
    title: 'MATLAB Programming',
    description: 'Numerical computing and engineering - matrix operations and visualization',
    icon: '📐',
    color: 'from-orange-500 to-yellow-600',
    difficulty: 'Intermediate',
    duration: '8 weeks',
    lessons: matlabLessons
  },
  {
    id: 'objectivec',
    title: 'Objective-C',
    description: 'Apple platform development - macOS and iOS legacy applications',
    icon: '🍏',
    color: 'from-gray-600 to-blue-700',
    difficulty: 'Intermediate',
    duration: '8 weeks',
    lessons: objectivecLessons
  },
  {
    id: 'crystal',
    title: 'Crystal Programming',
    description: 'Fast as C, slick as Ruby - type-safe compiled language with Ruby syntax',
    icon: '💎',
    color: 'from-cyan-500 to-blue-600',
    difficulty: 'Intermediate',
    duration: '7 weeks',
    lessons: crystalLessons
  }
]
