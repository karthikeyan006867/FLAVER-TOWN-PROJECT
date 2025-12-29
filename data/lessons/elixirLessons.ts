import { Lesson } from '../courses'

export const elixirLessons: Lesson[] = [
  {
    id: 'elixir-1',
    title: 'Introduction to Elixir',
    description: 'Learn Elixir - a functional language for scalable applications',
    content: `# Introduction to Elixir

Elixir is a dynamic, functional language designed for building scalable and maintainable applications.

## Key Features:
- Runs on the Erlang VM (BEAM)
- Highly concurrent and fault-tolerant
- Functional programming
- Pattern matching
- Metaprogramming with macros

## Hello World:
\`\`\`elixir
IO.puts("Hello, Elixir!")
\`\`\`

## Variables and Basic Types:
\`\`\`elixir
name = "Elixir"
age = 13
pi = 3.14
is_functional = true
atom = :ok
\`\`\`

## Pattern Matching:
\`\`\`elixir
{status, result} = {:ok, "Success"}
[head | tail] = [1, 2, 3, 4]
\`\`\``,
    language: 'elixir',
    difficulty: 'Intermediate',
    estimatedTime: 35,
    initialCode: `# Your Elixir code
IO.puts("Hello, Elixir!")
`,
    solution: `# Variables
name = "Elixir"
IO.puts("Learning \#{name}")

# Pattern matching
{:ok, value} = {:ok, 42}
IO.puts("Value: \#{value}")

# Lists
numbers = [1, 2, 3, 4, 5]
IO.inspect(numbers)

# Tuples
person = {"Alice", 30, "Engineer"}
IO.inspect(person)`,
    hints: ['IO.puts for output', 'Use #{} for interpolation', 'Pattern matching with =']
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
    id: 'elixir-2',
    title: 'Elixir Functions and Modules',
    description: 'Understanding functions and modules in Elixir',
    content: `# Elixir Functions

## Anonymous Functions:
\`\`\`elixir
add = fn a, b -> a + b end
result = add.(3, 5)
\`\`\`

## Named Functions (in modules):
\`\`\`elixir
defmodule Math do
  def add(a, b) do
    a + b
  end
  
  def square(x), do: x * x
end

Math.add(2, 3)
\`\`\`

## Pattern Matching in Functions:
\`\`\`elixir
defmodule Factorial do
  def of(0), do: 1
  def of(n) when n > 0 do
    n * of(n - 1)
  end
end
\`\`\``,
    language: 'elixir',
    difficulty: 'Intermediate',
    estimatedTime: 40,
    initialCode: `defmodule MyModule do
  # Define functions here
end
`,
    solution: `defmodule Calculator do
  def add(a, b), do: a + b
  
  def multiply(a, b), do: a * b
  
  def factorial(0), do: 1
  def factorial(n) when n > 0 do
    n * factorial(n - 1)
  end
end

IO.puts(Calculator.add(5, 3))
IO.puts(Calculator.factorial(5))`,
    hints: ['defmodule for modules', 'def for public functions', 'Pattern matching in function heads']
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