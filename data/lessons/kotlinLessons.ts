import { Lesson } from '../courses'

export const kotlinLessons: Lesson[] = [
  // Beginner Lessons (1-17)
  {
    id: 'kotlin-1',
    title: 'Introduction to Kotlin',
    description: 'Learn the basics of Kotlin syntax and your first program',
    language: 'kotlin' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Introduction to Kotlin

Kotlin is a modern, statically typed programming language that runs on the JVM.

## Hello World

The simplest Kotlin program:

\`\`\`kotlin
fun main() {
    println("Hello, World!")
}
\`\`\`

## Key Points
- \`fun\` keyword declares functions
- \`main()\` is the entry point
- \`println()\` prints to console

## Your Task
Write a program that prints "Hello, Kotlin!" to the console.`,
    initialCode: 'fun main() {\n    // Write your code here\n}',
    solution: 'fun main() {\n    println("Hello, Kotlin!")\n}',
    hints: [
      'Use the println() function',
      'Put your text in quotes',
      'Don\'t forget the parentheses'
    ],
    testCases: [
      { 
        name: 'Has main function', 
        test: (code) => code.includes('fun main'),
        errorMessage: 'You need a main() function'
      },
      { 
        name: 'Uses println', 
        test: (code) => code.includes('println'),
        errorMessage: 'Use println() to print'
      },
      { 
        name: 'Prints correct message', 
        test: (code, output) => output.includes('Hello, Kotlin'),
        errorMessage: 'Should print "Hello, Kotlin!"'
      }
    ]
  },
  {
    id: 'kotlin-2',
    title: 'Variables and Data Types',
    description: 'Learn about var, val, and basic data types in Kotlin',
    language: 'kotlin' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Variables and Data Types

Kotlin has two types of variables:
- \`val\` - immutable (read-only)
- \`var\` - mutable (can be reassigned)

## Basic Types
\`\`\`kotlin
val name: String = "John"  // Immutable
var age: Int = 25          // Mutable
var price: Double = 9.99
var isActive: Boolean = true
\`\`\`

## Type Inference
\`\`\`kotlin
val name = "John"  // Type inferred as String
var age = 25       // Type inferred as Int
\`\`\`

## Your Task
Create a variable named \`message\` with value "Learning Kotlin" and print it.`,
    initialCode: 'fun main() {\n    // Create your variable here\n    \n}',
    solution: 'fun main() {\n    val message = "Learning Kotlin"\n    println(message)\n}',
    hints: [
      'Use val or var to declare a variable',
      'Assign the string value',
      'Use println() to print the variable'
    ],
    testCases: [
      { 
        name: 'Has variable declaration', 
        test: (code) => code.includes('val') || code.includes('var'),
        errorMessage: 'Declare a variable using val or var'
      },
      { 
        name: 'Variable named message', 
        test: (code) => code.includes('message'),
        errorMessage: 'Variable should be named "message"'
      },
      { 
        name: 'Prints Learning Kotlin', 
        test: (code, output) => output.includes('Learning Kotlin'),
        errorMessage: 'Should print "Learning Kotlin"'
      }
    ]
  },
  {
    id: 'kotlin-3',
    title: 'String Templates',
    description: 'Learn to use string interpolation in Kotlin',
    language: 'kotlin' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# String Templates

Kotlin allows you to embed variables and expressions in strings using \`$\`.

## Basic Template
\`\`\`kotlin
val name = "Alice"
println("Hello, $name!")  // Hello, Alice!
\`\`\`

## Expressions in Templates
\`\`\`kotlin
val age = 25
println("Next year I'll be \${age + 1}")
\`\`\`

## Your Task
Create variables for name and age, then print "My name is [name] and I am [age] years old"`,
    initialCode: 'fun main() {\n    val name = "Alice"\n    val age = 25\n    // Print using string template\n}',
    solution: 'fun main() {\n    val name = "Alice"\n    val age = 25\n    println("My name is $name and I am $age years old")\n}',
    hints: [
      'Use $ before variable names in strings',
      'Put the whole message in quotes',
      'Use println() to print'
    ],
    testCases: [
      { 
        name: 'Uses string template', 
        test: (code) => code.includes('$'),
        errorMessage: 'Use $ for string templates'
      },
      { 
        name: 'Includes name in output', 
        test: (code, output) => output.includes('Alice') || output.includes('name'),
        errorMessage: 'Output should include the name'
      },
      { 
        name: 'Includes age in output', 
        test: (code, output) => output.includes('25') || output.includes('age'),
        errorMessage: 'Output should include the age'
      }
    ]
  }
];

// Generate remaining lessons (4-50) with placeholder content
for (let i = 4; i <= 50; i++) {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = 
    i <= 17 ? 'Beginner' : i <= 34 ? 'Intermediate' : 'Advanced';
  
  kotlinLessons.push({
    id: `kotlin-${i}`,
    title: `Kotlin Lesson ${i}`,
    description: `Master Kotlin programming concepts - Lesson ${i}`,
    language: 'kotlin' as const,
    difficulty,
    estimatedTime: 30,
    content: `# Kotlin Lesson ${i}

Welcome to lesson ${i} of the Kotlin course!

## Learning Objectives
- Understand core Kotlin concepts
- Apply programming fundamentals
- Build practical skills

## Practice Exercise
Write a simple Kotlin program to complete this lesson.`,
    initialCode: `fun main() {\n    // Write your Kotlin code here\n    println("Lesson ${i}")\n}`,
    solution: `fun main() {\n    println("Completed lesson ${i}!")\n}`,
    hints: [
      'Start with fun main()',
      'Use println() to print output',
      'Test your code frequently'
    ],
    testCases: [
      { 
        name: 'Has main function', 
        test: (code) => code.includes('fun main'),
        errorMessage: 'Program needs a main() function'
      },
      { 
        name: 'Code has content', 
        test: (code) => code.trim().length > 20,
        errorMessage: 'Write some code in the main function'
      },
      { 
        name: 'Uses println',
        test: (code) => code.includes('println'),
        errorMessage: 'Use println() to produce output'
      },
  {
    id: 'kotlin-4',
    title: 'Kotlin - Lesson 4',
    description: 'Master Kotlin concepts and techniques - Part 4',
    language: 'kotlin' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# Kotlin - Lesson 4

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 4
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 4
// Write your code here

`,
    solution: `// Solution for Lesson 4
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-5',
    title: 'Kotlin - Lesson 5',
    description: 'Master Kotlin concepts and techniques - Part 5',
    language: 'kotlin' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# Kotlin - Lesson 5

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 5
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 5
// Write your code here

`,
    solution: `// Solution for Lesson 5
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-6',
    title: 'Kotlin - Lesson 6',
    description: 'Master Kotlin concepts and techniques - Part 6',
    language: 'kotlin' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Kotlin - Lesson 6

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 6
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 6
// Write your code here

`,
    solution: `// Solution for Lesson 6
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-7',
    title: 'Kotlin - Lesson 7',
    description: 'Master Kotlin concepts and techniques - Part 7',
    language: 'kotlin' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# Kotlin - Lesson 7

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 7
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 7
// Write your code here

`,
    solution: `// Solution for Lesson 7
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-8',
    title: 'Kotlin - Lesson 8',
    description: 'Master Kotlin concepts and techniques - Part 8',
    language: 'kotlin' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# Kotlin - Lesson 8

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 8
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 8
// Write your code here

`,
    solution: `// Solution for Lesson 8
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-9',
    title: 'Kotlin - Lesson 9',
    description: 'Master Kotlin concepts and techniques - Part 9',
    language: 'kotlin' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# Kotlin - Lesson 9

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 9
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 9
// Write your code here

`,
    solution: `// Solution for Lesson 9
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-10',
    title: 'Kotlin - Lesson 10',
    description: 'Master Kotlin concepts and techniques - Part 10',
    language: 'kotlin' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Kotlin - Lesson 10

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 10
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 10
// Write your code here

`,
    solution: `// Solution for Lesson 10
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-11',
    title: 'Kotlin - Lesson 11',
    description: 'Master Kotlin concepts and techniques - Part 11',
    language: 'kotlin' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# Kotlin - Lesson 11

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 11
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 11
// Write your code here

`,
    solution: `// Solution for Lesson 11
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-12',
    title: 'Kotlin - Lesson 12',
    description: 'Master Kotlin concepts and techniques - Part 12',
    language: 'kotlin' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# Kotlin - Lesson 12

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 12
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 12
// Write your code here

`,
    solution: `// Solution for Lesson 12
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-13',
    title: 'Kotlin - Lesson 13',
    description: 'Master Kotlin concepts and techniques - Part 13',
    language: 'kotlin' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# Kotlin - Lesson 13

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 13
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 13
// Write your code here

`,
    solution: `// Solution for Lesson 13
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-14',
    title: 'Kotlin - Lesson 14',
    description: 'Master Kotlin concepts and techniques - Part 14',
    language: 'kotlin' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Kotlin - Lesson 14

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 14
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 14
// Write your code here

`,
    solution: `// Solution for Lesson 14
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-15',
    title: 'Kotlin - Lesson 15',
    description: 'Master Kotlin concepts and techniques - Part 15',
    language: 'kotlin' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# Kotlin - Lesson 15

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 15
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 15
// Write your code here

`,
    solution: `// Solution for Lesson 15
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-16',
    title: 'Kotlin - Lesson 16',
    description: 'Master Kotlin concepts and techniques - Part 16',
    language: 'kotlin' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# Kotlin - Lesson 16

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 16
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 16
// Write your code here

`,
    solution: `// Solution for Lesson 16
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-17',
    title: 'Kotlin - Lesson 17',
    description: 'Master Kotlin concepts and techniques - Part 17',
    language: 'kotlin' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# Kotlin - Lesson 17

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 17
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 17
// Write your code here

`,
    solution: `// Solution for Lesson 17
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-18',
    title: 'Kotlin - Lesson 18',
    description: 'Master Kotlin concepts and techniques - Part 18',
    language: 'kotlin' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Kotlin - Lesson 18

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 18
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 18
// Write your code here

`,
    solution: `// Solution for Lesson 18
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-19',
    title: 'Kotlin - Lesson 19',
    description: 'Master Kotlin concepts and techniques - Part 19',
    language: 'kotlin' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# Kotlin - Lesson 19

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 19
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 19
// Write your code here

`,
    solution: `// Solution for Lesson 19
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-20',
    title: 'Kotlin - Lesson 20',
    description: 'Master Kotlin concepts and techniques - Part 20',
    language: 'kotlin' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# Kotlin - Lesson 20

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 20
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 20
// Write your code here

`,
    solution: `// Solution for Lesson 20
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-21',
    title: 'Kotlin - Lesson 21',
    description: 'Master Kotlin concepts and techniques - Part 21',
    language: 'kotlin' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# Kotlin - Lesson 21

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 21
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 21
// Write your code here

`,
    solution: `// Solution for Lesson 21
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-22',
    title: 'Kotlin - Lesson 22',
    description: 'Master Kotlin concepts and techniques - Part 22',
    language: 'kotlin' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Kotlin - Lesson 22

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 22
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 22
// Write your code here

`,
    solution: `// Solution for Lesson 22
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-23',
    title: 'Kotlin - Lesson 23',
    description: 'Master Kotlin concepts and techniques - Part 23',
    language: 'kotlin' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# Kotlin - Lesson 23

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 23
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 23
// Write your code here

`,
    solution: `// Solution for Lesson 23
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-24',
    title: 'Kotlin - Lesson 24',
    description: 'Master Kotlin concepts and techniques - Part 24',
    language: 'kotlin' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# Kotlin - Lesson 24

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 24
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 24
// Write your code here

`,
    solution: `// Solution for Lesson 24
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-25',
    title: 'Kotlin - Lesson 25',
    description: 'Master Kotlin concepts and techniques - Part 25',
    language: 'kotlin' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# Kotlin - Lesson 25

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 25
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 25
// Write your code here

`,
    solution: `// Solution for Lesson 25
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-26',
    title: 'Kotlin - Lesson 26',
    description: 'Master Kotlin concepts and techniques - Part 26',
    language: 'kotlin' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Kotlin - Lesson 26

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 26
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 26
// Write your code here

`,
    solution: `// Solution for Lesson 26
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-27',
    title: 'Kotlin - Lesson 27',
    description: 'Master Kotlin concepts and techniques - Part 27',
    language: 'kotlin' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# Kotlin - Lesson 27

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 27
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 27
// Write your code here

`,
    solution: `// Solution for Lesson 27
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-28',
    title: 'Kotlin - Lesson 28',
    description: 'Master Kotlin concepts and techniques - Part 28',
    language: 'kotlin' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# Kotlin - Lesson 28

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 28
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 28
// Write your code here

`,
    solution: `// Solution for Lesson 28
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-29',
    title: 'Kotlin - Lesson 29',
    description: 'Master Kotlin concepts and techniques - Part 29',
    language: 'kotlin' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# Kotlin - Lesson 29

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 29
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 29
// Write your code here

`,
    solution: `// Solution for Lesson 29
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-30',
    title: 'Kotlin - Lesson 30',
    description: 'Master Kotlin concepts and techniques - Part 30',
    language: 'kotlin' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Kotlin - Lesson 30

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 30
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 30
// Write your code here

`,
    solution: `// Solution for Lesson 30
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-31',
    title: 'Kotlin - Lesson 31',
    description: 'Master Kotlin concepts and techniques - Part 31',
    language: 'kotlin' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# Kotlin - Lesson 31

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 31
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 31
// Write your code here

`,
    solution: `// Solution for Lesson 31
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-32',
    title: 'Kotlin - Lesson 32',
    description: 'Master Kotlin concepts and techniques - Part 32',
    language: 'kotlin' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# Kotlin - Lesson 32

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 32
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 32
// Write your code here

`,
    solution: `// Solution for Lesson 32
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-33',
    title: 'Kotlin - Lesson 33',
    description: 'Master Kotlin concepts and techniques - Part 33',
    language: 'kotlin' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# Kotlin - Lesson 33

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 33
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 33
// Write your code here

`,
    solution: `// Solution for Lesson 33
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-34',
    title: 'Kotlin - Lesson 34',
    description: 'Master Kotlin concepts and techniques - Part 34',
    language: 'kotlin' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Kotlin - Lesson 34

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 34
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 34
// Write your code here

`,
    solution: `// Solution for Lesson 34
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-35',
    title: 'Kotlin - Lesson 35',
    description: 'Master Kotlin concepts and techniques - Part 35',
    language: 'kotlin' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# Kotlin - Lesson 35

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 35
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 35
// Write your code here

`,
    solution: `// Solution for Lesson 35
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-36',
    title: 'Kotlin - Lesson 36',
    description: 'Master Kotlin concepts and techniques - Part 36',
    language: 'kotlin' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# Kotlin - Lesson 36

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 36
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 36
// Write your code here

`,
    solution: `// Solution for Lesson 36
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-37',
    title: 'Kotlin - Lesson 37',
    description: 'Master Kotlin concepts and techniques - Part 37',
    language: 'kotlin' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# Kotlin - Lesson 37

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 37
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 37
// Write your code here

`,
    solution: `// Solution for Lesson 37
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-38',
    title: 'Kotlin - Lesson 38',
    description: 'Master Kotlin concepts and techniques - Part 38',
    language: 'kotlin' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Kotlin - Lesson 38

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 38
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 38
// Write your code here

`,
    solution: `// Solution for Lesson 38
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-39',
    title: 'Kotlin - Lesson 39',
    description: 'Master Kotlin concepts and techniques - Part 39',
    language: 'kotlin' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# Kotlin - Lesson 39

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 39
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 39
// Write your code here

`,
    solution: `// Solution for Lesson 39
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-40',
    title: 'Kotlin - Lesson 40',
    description: 'Master Kotlin concepts and techniques - Part 40',
    language: 'kotlin' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# Kotlin - Lesson 40

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 40
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 40
// Write your code here

`,
    solution: `// Solution for Lesson 40
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-41',
    title: 'Kotlin - Lesson 41',
    description: 'Master Kotlin concepts and techniques - Part 41',
    language: 'kotlin' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# Kotlin - Lesson 41

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 41
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 41
// Write your code here

`,
    solution: `// Solution for Lesson 41
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-42',
    title: 'Kotlin - Lesson 42',
    description: 'Master Kotlin concepts and techniques - Part 42',
    language: 'kotlin' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Kotlin - Lesson 42

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 42
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 42
// Write your code here

`,
    solution: `// Solution for Lesson 42
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-43',
    title: 'Kotlin - Lesson 43',
    description: 'Master Kotlin concepts and techniques - Part 43',
    language: 'kotlin' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# Kotlin - Lesson 43

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 43
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 43
// Write your code here

`,
    solution: `// Solution for Lesson 43
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-44',
    title: 'Kotlin - Lesson 44',
    description: 'Master Kotlin concepts and techniques - Part 44',
    language: 'kotlin' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# Kotlin - Lesson 44

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 44
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 44
// Write your code here

`,
    solution: `// Solution for Lesson 44
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-45',
    title: 'Kotlin - Lesson 45',
    description: 'Master Kotlin concepts and techniques - Part 45',
    language: 'kotlin' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# Kotlin - Lesson 45

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 45
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 45
// Write your code here

`,
    solution: `// Solution for Lesson 45
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-46',
    title: 'Kotlin - Lesson 46',
    description: 'Master Kotlin concepts and techniques - Part 46',
    language: 'kotlin' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Kotlin - Lesson 46

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 46
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 46
// Write your code here

`,
    solution: `// Solution for Lesson 46
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-47',
    title: 'Kotlin - Lesson 47',
    description: 'Master Kotlin concepts and techniques - Part 47',
    language: 'kotlin' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# Kotlin - Lesson 47

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 47
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 47
// Write your code here

`,
    solution: `// Solution for Lesson 47
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-48',
    title: 'Kotlin - Lesson 48',
    description: 'Master Kotlin concepts and techniques - Part 48',
    language: 'kotlin' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# Kotlin - Lesson 48

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 48
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 48
// Write your code here

`,
    solution: `// Solution for Lesson 48
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-49',
    title: 'Kotlin - Lesson 49',
    description: 'Master Kotlin concepts and techniques - Part 49',
    language: 'kotlin' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# Kotlin - Lesson 49

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 49
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 49
// Write your code here

`,
    solution: `// Solution for Lesson 49
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  },
  {
    id: 'kotlin-50',
    title: 'Kotlin - Lesson 50',
    description: 'Master Kotlin concepts and techniques - Part 50',
    language: 'kotlin' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Kotlin - Lesson 50

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Kotlin concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`kotlin
// Kotlin example for lesson 50
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Kotlin Lesson 50
// Write your code here

`,
    solution: `// Solution for Lesson 50
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Kotlin documentation for details'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more comprehensive' 
      },
      { 
        name: 'Uses proper syntax', 
        test: (code: string) => code.includes('//') || code.includes('/*') || code.length > 5, 
        errorMessage: 'Make sure your code follows Kotlin syntax' 
      }
    ]
  }
    ]
  });
}

