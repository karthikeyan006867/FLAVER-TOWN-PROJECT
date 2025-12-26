import { Lesson } from '../courses'

export const groovyLessons: Lesson[] = [
  {
    id: 'groovy-1',
    title: 'Introduction to Groovy',
    description: 'Learn Groovy - a dynamic JVM language',
    content: `# Introduction to Groovy

Groovy is a powerful, optionally-typed dynamic language for the JVM with static-typing and static compilation capabilities.

## Key Features:
- Runs on the JVM
- Java-compatible
- Dynamic and static typing
- Closures
- DSL capabilities

## Hello World:
\`\`\`groovy
println "Hello, Groovy!"
\`\`\`

## Variables:
\`\`\`groovy
def name = "Groovy"
def age = 20
def isJVM = true
String typed = "Explicit type"
\`\`\`

## Collections:
\`\`\`groovy
def list = [1, 2, 3, 4, 5]
def map = [name: "Alice", age: 30]
\`\`\``,
    language: 'groovy',
    difficulty: 'Intermediate',
    estimatedTime: 35,
    initialCode: `// Your Groovy code
println "Hello, Groovy!"
`,
    solution: `// Variables
def greeting = "Hello, Groovy!"
println greeting

// Lists
def numbers = [1, 2, 3, 4, 5]
println "Sum: ${numbers.sum()}"
println "Max: ${numbers.max()}"

// Maps
def person = [
  name: "Alice",
  age: 30,
  city: "NYC"
]
println "Name: ${person.name}"

// Closures
def square = { x -> x * x }
println "Square of 5: ${square(5)}"`,
    hints: ['def for dynamic typing', 'println without parentheses', 'GString interpolation with ${}']
  }
]
