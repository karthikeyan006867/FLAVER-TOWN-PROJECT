import { Lesson } from '../courses'

export const kotlinLessons: Lesson[] = [
  {
    id: 'kotlin-1',
    title: 'Introduction to Kotlin',
    description: 'Learn the basics of Kotlin programming language',
    content: `# Introduction to Kotlin

Kotlin is a modern, statically-typed programming language that runs on the JVM. It's fully interoperable with Java and is the preferred language for Android development.

## Key Features:
- Concise and expressive syntax
- Null safety built into the type system
- Extension functions
- Coroutines for asynchronous programming
- 100% Java interoperability

## Your First Kotlin Program:
\`\`\`kotlin
fun main() {
    println("Hello, Kotlin!")
}
\`\`\`

## Variables:
- \`val\` - immutable (read-only) variable
- \`var\` - mutable variable

\`\`\`kotlin
val name = "Kotlin"  // Type inference
var count: Int = 0   // Explicit type
\`\`\``,
    language: 'kotlin',
    difficulty: 'Beginner',
    estimatedTime: 30,
    initialCode: `fun main() {
    // Write your first Kotlin program
    
}`,
    solution: `fun main() {
    println("Hello, Kotlin!")
    val language = "Kotlin"
    println("Learning $language")
}`,
    hints: ['Use println() to print', 'Use val for immutable variables', 'String interpolation uses $variable']
  },
  {
    id: 'kotlin-2',
    title: 'Data Types and Type System',
    description: 'Understanding Kotlin\'s type system',
    content: `# Kotlin Data Types

## Basic Types:
- Numbers: Byte, Short, Int, Long, Float, Double
- Characters: Char
- Booleans: Boolean
- Strings: String

## Type Inference:
Kotlin can infer types automatically:
\`\`\`kotlin
val number = 42        // Int
val pi = 3.14          // Double
val letter = 'A'       // Char
val isKotlin = true    // Boolean
\`\`\`

## Nullable Types:
Kotlin's null safety prevents NullPointerExceptions:
\`\`\`kotlin
var name: String = "Kotlin"   // Non-nullable
var nullableName: String? = null  // Nullable
\`\`\``,
    language: 'kotlin',
    difficulty: 'Beginner',
    estimatedTime: 35,
    initialCode: `fun main() {
    // Declare variables of different types
    
}`,
    solution: `fun main() {
    val age: Int = 25
    val height: Double = 5.9
    val initial: Char = 'K'
    val isStudent: Boolean = true
    val name: String? = null
    
    println("Age: $\{age}, Height: $\{height}")
    println("Nullable: $\{name ?: "No name"}")
}`,
    hints: ['Use ? for nullable types', 'Elvis operator ?: provides default values', 'Type annotation uses :']
  },
  {
    id: 'kotlin-3',
    title: 'Functions and Parameters',
    description: 'Learn how to create and use functions in Kotlin',
    content: `# Kotlin Functions

## Function Syntax:
\`\`\`kotlin
fun functionName(param: Type): ReturnType {
    return value
}
\`\`\`

## Examples:
\`\`\`kotlin
fun add(a: Int, b: Int): Int {
    return a + b
}

// Single expression function
fun multiply(a: Int, b: Int) = a * b

// Default parameters
fun greet(name: String = "Guest") {
    println("Hello, $name!")
}

// Named arguments
greet(name = "Kotlin")
\`\`\``,
    language: 'kotlin',
    difficulty: 'Beginner',
    estimatedTime: 40,
    initialCode: `// Create a function that calculates area of rectangle
fun calculateArea() {
    
}

fun main() {
    
}`,
    solution: `fun calculateArea(length: Double, width: Double): Double {
    return length * width
}

fun greet(name: String = "Developer"): String {
    return "Hello, $name!"
}

fun main() {
    println(calculateArea(5.0, 3.0))
    println(greet())
    println(greet("Kotlin"))
}`,
    hints: ['Use fun keyword', 'Specify parameter types', 'Return type after : before {']
  }
]
