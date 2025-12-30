import { Lesson } from '../courses'

export const juliaLessons: Lesson[] = [
  {
    id: 'julia-1',
    title: 'Introduction to Julia',
    description: 'Learn Julia for high-performance scientific computing',
    content: `# Introduction to Julia

Julia is a high-level, high-performance programming language for technical computing.

## Key Features:
- Fast as C, easy as Python
- Multiple dispatch
- Built for scientific computing
- JIT compilation
- Excellent for numerical analysis

## Hello World:
\`\`\`julia
println("Hello, Julia!")
\`\`\`

## Variables:
\`\`\`julia
name = "Julia"
age = 12
pi_val = 3.14159
is_fast = true
\`\`\`

## Arrays:
\`\`\`julia
numbers = [1, 2, 3, 4, 5]
matrix = [1 2 3; 4 5 6]
\`\`\``,
    language: 'julia',
    difficulty: 'Intermediate',
    estimatedTime: 35,
    initialCode: `# Your Julia code
println("Hello, Julia!")
`,
    solution: `# Variables and types
name = "Julia"
version = 1.9
println("Learning $name v$version")

# Arrays
numbers = [1, 2, 3, 4, 5]
println("Sum: ", sum(numbers))
println("Mean: ", sum(numbers) / length(numbers))

# Matrix operations
matrix = [1 2 3; 4 5 6]
println("Matrix:\\n", matrix)
println("Transpose:\\n", transpose(matrix))`,
    hints: ['println() for output', 'Arrays start at index 1', 'Built-in math functions']
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
  },
  {
    id: 'julia-2',
    title: 'Julia Functions',
    description: 'Understanding functions in Julia',
    content: `# Julia Functions

## Function Syntax:
\`\`\`julia
function functionName(parameters)
  # body
  return value
end
\`\`\`

## Short Form:
\`\`\`julia
square(x) = x^2
add(x, y) = x + y
\`\`\`

## Multiple Dispatch:
\`\`\`julia
function area(radius::Float64)
  return π * radius^2
end

function area(length::Float64, width::Float64)
  return length * width
end
\`\`\``,
    language: 'julia',
    difficulty: 'Intermediate',
    estimatedTime: 40,
    initialCode: `# Define functions
`,
    solution: `# Functions
function factorial(n)
  if n <= 1
    return 1
  else
    return n * factorial(n - 1)
  end
end

# Short form
square(x) = x^2
cube(x) = x^3

# Type annotations
function greet(name::String)::String
  return "Hello, $name!"
end

println(factorial(5))
println(square(7))
println(greet("Julia"))`,
    hints: ['function...end syntax', 'Short form: name(x) = expr', '::Type for type annotations']
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