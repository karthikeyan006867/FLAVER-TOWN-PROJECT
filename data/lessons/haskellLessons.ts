import { Lesson } from '../courses'

export const haskellLessons: Lesson[] = [
  {
    id: 'haskell-1',
    title: 'Introduction to Haskell',
    description: 'Learn pure functional programming with Haskell',
    content: `# Introduction to Haskell

Haskell is a purely functional programming language with strong static typing and lazy evaluation.

## Key Features:
- Pure functional (no side effects)
- Lazy evaluation
- Strong static typing
- Type inference
- Pattern matching

## Hello World:
\`\`\`haskell
main = putStrLn "Hello, Haskell!"
\`\`\`

## Basic Values:
\`\`\`haskell
number = 42
name = "Haskell"
isTrue = True
listOfNumbers = [1, 2, 3, 4, 5]
\`\`\`

## Functions:
\`\`\`haskell
double x = x * 2
add x y = x + y
\`\`\``,
    language: 'haskell',
    difficulty: 'Advanced',
    estimatedTime: 40,
    initialCode: `-- Your Haskell code
main = putStrLn "Hello, Haskell!"
`,
    solution: `-- Functions
double x = x * 2
square x = x * x
add x y = x + y

-- List operations
numbers = [1, 2, 3, 4, 5]
doubled = map double numbers

-- Pattern matching
factorial 0 = 1
factorial n = n * factorial (n - 1)

main = do
  putStrLn "Haskell Examples"
  print (double 5)
  print (factorial 5)
  print doubled`,
    hints: ['Functions without parentheses', 'Pattern matching in definitions', 'map for transforming lists'],
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
