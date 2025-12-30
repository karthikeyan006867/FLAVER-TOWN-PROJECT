import { Lesson } from '../courses'

export const fsharpLessons: Lesson[] = [
  {
    id: 'fsharp-1',
    title: 'Introduction to F#',
    description: 'Learn F# - functional-first programming on .NET',
    content: `# Introduction to F#

F# is a functional-first programming language that makes it easy to write correct and maintainable code.

## Key Features:
- Functional-first
- Runs on .NET
- Type inference
- Pattern matching
- Immutable by default

## Hello World:
\`\`\`fsharp
printfn "Hello, F#!"
\`\`\`

## Values and Types:
\`\`\`fsharp
let name = "F#"
let age = 19
let pi = 3.14159
let numbers = [1; 2; 3; 4; 5]
\`\`\`

## Functions:
\`\`\`fsharp
let square x = x * x
let add x y = x + y
\`\`\``,
    language: 'fsharp',
    difficulty: 'Intermediate',
    estimatedTime: 35,
    initialCode: `// Your F# code
printfn "Hello, F#!"
`,
    solution: `// Values
let greeting = "Hello, F#!"
printfn "%s" greeting

// Lists
let numbers = [1; 2; 3; 4; 5]
let sum = List.sum numbers
printfn "Sum: %d" sum

// Functions
let rec factorial n =
  if n <= 1 then 1
  else n * factorial (n - 1)

let square x = x * x

printfn "Factorial: %d" (factorial 5)
printfn "Square: %d" (square 7)`,
    hints: ['let for bindings', 'printfn for formatted output', 'rec keyword for recursion'],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets minimum length',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write more code to match the lesson requirements'
      }
    ]
  }
]
