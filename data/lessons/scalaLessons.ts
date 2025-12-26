import { Lesson } from '../courses'

export const scalaLessons: Lesson[] = [
  {
    id: 'scala-1',
    title: 'Introduction to Scala',
    description: 'Get started with Scala programming',
    content: `# Introduction to Scala

Scala is a powerful programming language that combines object-oriented and functional programming paradigms.

## Key Features:
- Runs on the JVM
- Fully compatible with Java
- Functional programming support
- Strong static type system
- Concise syntax

## Hello World:
\`\`\`scala
object HelloWorld {
  def main(args: Array[String]): Unit = {
    println("Hello, Scala!")
  }
}
\`\`\`

## Values and Variables:
\`\`\`scala
val immutable = 10  // Cannot be reassigned
var mutable = 20    // Can be reassigned
\`\`\``,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 35,
    initialCode: `object Main {
  def main(args: Array[String]): Unit = {
    // Your Scala code here
  }
}`,
    solution: `object Main {
  def main(args: Array[String]): Unit = {
    val greeting = "Hello, Scala!"
    println(greeting)
    
    val numbers = List(1, 2, 3, 4, 5)
    println(numbers.sum)
  }
}`,
    hints: ['Use object to define singleton', 'val for immutable', 'println for output']
  },
  {
    id: 'scala-2',
    title: 'Scala Functions',
    description: 'Learn functional programming in Scala',
    content: `# Scala Functions

## Function Definition:
\`\`\`scala
def functionName(param: Type): ReturnType = {
  // function body
}
\`\`\`

## Examples:
\`\`\`scala
def add(x: Int, y: Int): Int = {
  x + y
}

// Single expression
def square(x: Int) = x * x

// Higher-order functions
def operate(x: Int, f: Int => Int): Int = {
  f(x)
}
\`\`\``,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 40,
    initialCode: `object Main {
  // Define your functions here
  
  def main(args: Array[String]): Unit = {
    
  }
}`,
    solution: `object Main {
  def factorial(n: Int): Int = {
    if (n <= 1) 1
    else n * factorial(n - 1)
  }
  
  def isEven(n: Int): Boolean = n % 2 == 0
  
  def main(args: Array[String]): Unit = {
    println(factorial(5))
    println(isEven(4))
  }
}`,
    hints: ['Use def for functions', 'Last expression is returned', 'Type inference works for most cases']
  }
]
