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
  },
  {
    id: 'kotlin-4',
    title: 'Kotlin Collections - Lists',
    description: 'Work with lists in Kotlin',
    content: `# Kotlin Collections

## Lists:
Kotlin has mutable and immutable lists.

\`\`\`kotlin
// Immutable list
val numbers = listOf(1, 2, 3, 4, 5)

// Mutable list
val names = mutableListOf("Alice", "Bob", "Charlie")
names.add("David")
names.remove("Bob")

// Access elements
println(numbers[0])
println(numbers.first())
println(numbers.last())

// List operations
println(numbers.size)
println(numbers.contains(3))
\`\`\``,
    language: 'kotlin',
    difficulty: 'Beginner',
    estimatedTime: 35,
    initialCode: `fun main() {
    // Create and manipulate lists
    
}`,
    solution: `fun main() {
    val fruits = mutableListOf("Apple", "Banana", "Orange")
    fruits.add("Mango")
    fruits.removeAt(0)
    
    for (fruit in fruits) {
        println(fruit)
    }
    
    println("Count: $\{fruits.size}")
}`,
    hints: ['listOf() for immutable', 'mutableListOf() for mutable', 'Use .add() and .remove()']
  },
  {
    id: 'kotlin-5',
    title: 'When Expression',
    description: 'Pattern matching with when',
    content: `# When Expression

Kotlin's when is like switch but more powerful.

\`\`\`kotlin
fun describe(x: Any): String = when(x) {
    1 -> "One"
    2, 3 -> "Two or Three"
    in 4..10 -> "Between 4 and 10"
    is String -> "A String"
    else -> "Unknown"
}

// As a statement
val number = 5
when {
    number < 0 -> println("Negative")
    number == 0 -> println("Zero")
    else -> println("Positive")
}
\`\`\``,
    language: 'kotlin',
    difficulty: 'Beginner',
    estimatedTime: 30,
    initialCode: `fun classifyNumber(n: Int): String {
    // Use when expression
}`,
    solution: `fun classifyNumber(n: Int): String = when {
    n < 0 -> "Negative"
    n == 0 -> "Zero"
    n % 2 == 0 -> "Positive Even"
    else -> "Positive Odd"
}

fun main() {
    println(classifyNumber(4))
    println(classifyNumber(-3))
    println(classifyNumber(0))
}`,
    hints: ['when can replace if-else chains', 'Use -> for each case', 'else is required']
  },
  {
    id: 'kotlin-6',
    title: 'Loops and Ranges',
    description: 'Iteration in Kotlin',
    content: `# Loops and Ranges

\`\`\`kotlin
// For loop with range
for (i in 1..5) {
    println(i)
}

// Downto
for (i in 5 downTo 1) {
    println(i)
}

// Step
for (i in 0..10 step 2) {
    println(i)
}

// While loop
var x = 5
while (x > 0) {
    println(x)
    x--
}

// Iterate collection
val fruits = listOf("Apple", "Banana")
for (fruit in fruits) {
    println(fruit)
}
\`\`\``,
    language: 'kotlin',
    difficulty: 'Beginner',
    estimatedTime: 30,
    initialCode: `fun main() {
    // Write loops
    
}`,
    solution: `fun main() {
    // Print 1 to 10
    for (i in 1..10) {
        println(i)
    }
    
    // Sum numbers
    var sum = 0
    for (i in 1..100) {
        sum += i
    }
    println("Sum: $\{sum}")
    
    // Iterate list
    val numbers = listOf(2, 4, 6, 8)
    for (num in numbers) {
        println("Number: $\{num}")
    }
}`,
    hints: ['.. creates ranges', 'downTo for reverse', 'step for increment']
  },
  {
    id: 'kotlin-7',
    title: 'Classes and Objects',
    description: 'Object-oriented programming in Kotlin',
    content: `# Classes in Kotlin

\`\`\`kotlin
class Person(val name: String, var age: Int) {
    fun greet() {
        println("Hello, I'm $\{name}")
    }
    
    fun birthday() {
        age++
    }
}

// Usage
val person = Person("Alice", 25)
person.greet()
person.birthday()
println(person.age)
\`\`\`

## Data Classes:
\`\`\`kotlin
data class User(val name: String, val email: String)

val user = User("Bob", "bob@email.com")
println(user)  // Auto toString()
\`\`\``,
    language: 'kotlin',
    difficulty: 'Intermediate',
    estimatedTime: 40,
    initialCode: `// Create a Car class
class Car {
    
}`,
    solution: `data class Car(val brand: String, val model: String, var mileage: Int) {
    fun drive(miles: Int) {
        mileage += miles
    }
    
    fun info(): String {
        return "$\{brand} $\{model} - $\{mileage} miles"
    }
}

fun main() {
    val car = Car("Toyota", "Camry", 5000)
    println(car.info())
    car.drive(100)
    println(car.info())
}`,
    hints: ['Primary constructor in class header', 'val for immutable, var for mutable', 'data class for DTOs']
  },
  {
    id: 'kotlin-8',
    title: 'Lambda Functions',
    description: 'Higher-order functions and lambdas',
    content: `# Lambda Functions

\`\`\`kotlin
// Lambda syntax
val sum = { a: Int, b: Int -> a + b }
println(sum(3, 5))

// Higher-order functions
fun operate(a: Int, b: Int, operation: (Int, Int) -> Int): Int {
    return operation(a, b)
}

val result = operate(10, 5) { x, y -> x * y }

// Collection operations
val numbers = listOf(1, 2, 3, 4, 5)
val doubled = numbers.map { it * 2 }
val evens = numbers.filter { it % 2 == 0 }
val sum = numbers.reduce { acc, n -> acc + n }
\`\`\``,
    language: 'kotlin',
    difficulty: 'Intermediate',
    estimatedTime: 35,
    initialCode: `fun main() {
    val numbers = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    // Use lambdas
}`,
    solution: `fun main() {
    val numbers = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    
    val squares = numbers.map { it * it }
    println("Squares: $\{squares}")
    
    val odds = numbers.filter { it % 2 != 0 }
    println("Odds: $\{odds}")
    
    val total = numbers.reduce { acc, n -> acc + n }
    println("Sum: $\{total}")
    
    val greaterThan5 = numbers.count { it > 5 }
    println("Greater than 5: $\{greaterThan5}")
}`,
    hints: ['{ } for lambda expressions', 'it is default parameter name', 'map, filter, reduce are common operations']
  }
]
