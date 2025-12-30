import { Lesson } from '../courses'

export const crystalLessons: Lesson[] = [
  {
    id: 'crystal-1',
    title: 'Introduction to Crystal',
    description: 'Learn Crystal - fast as C, slick as Ruby',
    content: `# Introduction to Crystal

Crystal is a statically-typed, compiled language with Ruby-like syntax that aims for the performance of C.

## Key Features:
- Ruby-inspired syntax
- Statically typed
- Compiled to native code
- C-like performance
- Type inference

## Hello World:
\`\`\`crystal
puts "Hello, Crystal!"
\`\`\`

## Variables:
\`\`\`crystal
name = "Crystal"
age = 13
pi = 3.14159
is_fast = true
\`\`\`

## Arrays and Hashes:
\`\`\`crystal
numbers = [1, 2, 3, 4, 5]
person = {
  "name" => "Alice",
  "age" => 30
}
\`\`\``,
    language: 'crystal',
    difficulty: 'Intermediate',
    estimatedTime: 35,
    initialCode: `# Your Crystal code
puts "Hello, Crystal!"
`,
    solution: `# Variables
greeting = "Hello, Crystal!"
puts greeting

# Arrays
numbers = [1, 2, 3, 4, 5]
puts "Sum: #{numbers.sum}"
puts "Max: #{numbers.max}"

# Hash
person = {
  "name" => "Alice",
  "age" => 30,
  "city" => "NYC"
}
puts "Name: #{person["name"]}"

# Type annotations
name : String = "Crystal"
age : Int32 = 13`,
    hints: ['puts for output', '#{} for interpolation', 'Type annotations with :']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'crystal-2',
    title: 'Crystal Functions and Classes',
    description: 'OOP and functions in Crystal',
    content: `# Crystal Functions

## Function Syntax:
\`\`\`crystal
def function_name(param : Type) : ReturnType
  # body
end
\`\`\`

## Examples:
\`\`\`crystal
def square(x : Int32) : Int32
  x * x
end

def greet(name : String = "Guest") : String
  "Hello, #{name}!"
end
\`\`\`

## Classes:
\`\`\`crystal
class Person
  property name : String
  property age : Int32
  
  def initialize(@name, @age)
  end
end
\`\`\``,
    language: 'crystal',
    difficulty: 'Intermediate',
    estimatedTime: 40,
    initialCode: `# Define functions
`,
    solution: `# Functions
def factorial(n : Int32) : Int32
  return 1 if n <= 1
  n * factorial(n - 1)
end

def sum(numbers : Array(Int32)) : Int32
  numbers.sum
end

# Class
class Calculator
  def add(a : Int32, b : Int32) : Int32
    a + b
  end
  
  def multiply(a : Int32, b : Int32) : Int32
    a * b
  end
end

puts factorial(5)
calc = Calculator.new
puts calc.add(3, 4)`,
    hints: ['def for functions', 'Type annotations required', 'property for attributes']
    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  }
]