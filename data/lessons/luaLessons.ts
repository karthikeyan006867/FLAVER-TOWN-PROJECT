import { Lesson } from '../courses'

export const luaLessons: Lesson[] = [
  {
    id: 'lua-1',
    title: 'Introduction to Lua',
    description: 'Learn Lua - a lightweight scripting language',
    content: `# Introduction to Lua

Lua is a lightweight, high-level scripting language designed for embedded use in applications.

## Key Features:
- Lightweight and fast
- Embeddable
- Simple syntax
- Dynamic typing
- Powerful table data structure

## Hello World:
\`\`\`lua
print("Hello, Lua!")
\`\`\`

## Variables:
\`\`\`lua
local name = "Lua"
local age = 30
local is_fun = true
\`\`\`

## Tables (Lua's main data structure):
\`\`\`lua
person = {
  name = "Alice",
  age = 25
}
print(person.name)
\`\`\``,
    language: 'lua',
    difficulty: 'Beginner',
    estimatedTime: 30,
    initialCode: `-- Your Lua code
print("Hello, Lua!")
`,
    solution: `-- Variables
local greeting = "Hello, Lua!"
print(greeting)

-- Tables
local person = {
  name = "Alice",
  age = 25,
  city = "NYC"
}

print(person.name .. " is " .. person.age .. " years old")

-- Arrays (tables with numeric indices)
local numbers = {10, 20, 30, 40, 50}
for i = 1, #numbers do
  print(numbers[i])
end`,
    hints: ['print() for output', 'local for local variables', '.. for string concatenation']    ,
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
    id: 'lua-2',
    title: 'Lua Functions',
    description: 'Understanding functions in Lua',
    content: `# Lua Functions

## Function Syntax:
\`\`\`lua
function functionName(parameters)
  -- body
  return value
end
\`\`\`

## Examples:
\`\`\`lua
function add(a, b)
  return a + b
end

-- Anonymous functions
local multiply = function(a, b)
  return a * b
end

-- Multiple return values
function getMinMax(a, b)
  if a < b then
    return a, b
  else
    return b, a
  end
end
\`\`\``,
    language: 'lua',
    difficulty: 'Beginner',
    estimatedTime: 35,
    initialCode: `-- Define your functions
`,
    solution: `function factorial(n)
  if n <= 1 then
    return 1
  else
    return n * factorial(n - 1)
  end
end

function sum(numbers)
  local total = 0
  for i = 1, #numbers do
    total = total + numbers[i]
  end
  return total
end

print(factorial(5))
print(sum({1, 2, 3, 4, 5}))`,
    hints: ['function keyword', 'return for results', 'if...then...else...end for conditions']
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
,

  // EXPANDED LESSONS (Generated)
  {
    id: 'lua-3',
    title: 'Best Practices',
    description: 'Master best practices concepts and techniques',
    content: `# Best Practices

## Overview
Learn about best practices and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply best practices concepts in your code.
`,
    language: 'lua',
    difficulty: 'Beginner',
    estimatedTime: 11,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Best Practices
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-4',
    title: 'Code Organization',
    description: 'Master code organization concepts and techniques',
    content: `# Code Organization

## Overview
Learn about code organization and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply code organization concepts in your code.
`,
    language: 'lua',
    difficulty: 'Beginner',
    estimatedTime: 20,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Code Organization
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-5',
    title: 'Design Patterns',
    description: 'Master design patterns concepts and techniques',
    content: `# Design Patterns

## Overview
Learn about design patterns and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply design patterns concepts in your code.
`,
    language: 'lua',
    difficulty: 'Beginner',
    estimatedTime: 22,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Design Patterns
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-6',
    title: 'Testing Strategies',
    description: 'Master testing strategies concepts and techniques',
    content: `# Testing Strategies

## Overview
Learn about testing strategies and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply testing strategies concepts in your code.
`,
    language: 'lua',
    difficulty: 'Beginner',
    estimatedTime: 23,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Testing Strategies
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-7',
    title: 'Debugging Techniques',
    description: 'Master debugging techniques concepts and techniques',
    content: `# Debugging Techniques

## Overview
Learn about debugging techniques and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply debugging techniques concepts in your code.
`,
    language: 'lua',
    difficulty: 'Beginner',
    estimatedTime: 12,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Debugging Techniques
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-8',
    title: 'Performance Optimization',
    description: 'Master performance optimization concepts and techniques',
    content: `# Performance Optimization

## Overview
Learn about performance optimization and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply performance optimization concepts in your code.
`,
    language: 'lua',
    difficulty: 'Beginner',
    estimatedTime: 12,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Performance Optimization
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-9',
    title: 'Security Considerations',
    description: 'Master security considerations concepts and techniques',
    content: `# Security Considerations

## Overview
Learn about security considerations and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply security considerations concepts in your code.
`,
    language: 'lua',
    difficulty: 'Beginner',
    estimatedTime: 16,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Security Considerations
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-10',
    title: 'Error Handling',
    description: 'Master error handling concepts and techniques',
    content: `# Error Handling

## Overview
Learn about error handling and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply error handling concepts in your code.
`,
    language: 'lua',
    difficulty: 'Beginner',
    estimatedTime: 21,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Error Handling
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-11',
    title: 'Code Refactoring',
    description: 'Master code refactoring concepts and techniques',
    content: `# Code Refactoring

## Overview
Learn about code refactoring and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply code refactoring concepts in your code.
`,
    language: 'lua',
    difficulty: 'Beginner',
    estimatedTime: 22,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Code Refactoring
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-12',
    title: 'Documentation',
    description: 'Master documentation concepts and techniques',
    content: `# Documentation

## Overview
Learn about documentation and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply documentation concepts in your code.
`,
    language: 'lua',
    difficulty: 'Beginner',
    estimatedTime: 12,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Documentation
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-13',
    title: 'Version Control Integration',
    description: 'Master version control integration concepts and techniques',
    content: `# Version Control Integration

## Overview
Learn about version control integration and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply version control integration concepts in your code.
`,
    language: 'lua',
    difficulty: 'Beginner',
    estimatedTime: 15,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Version Control Integration
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-14',
    title: 'CI/CD Basics',
    description: 'Master ci/cd basics concepts and techniques',
    content: `# CI/CD Basics

## Overview
Learn about ci/cd basics and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply ci/cd basics concepts in your code.
`,
    language: 'lua',
    difficulty: 'Beginner',
    estimatedTime: 10,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for CI/CD Basics
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-15',
    title: 'Advanced Concepts',
    description: 'Master advanced concepts concepts and techniques',
    content: `# Advanced Concepts

## Overview
Learn about advanced concepts and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply advanced concepts concepts in your code.
`,
    language: 'lua',
    difficulty: 'Beginner',
    estimatedTime: 10,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Advanced Concepts
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-16',
    title: 'Best Practices',
    description: 'Master best practices concepts and techniques',
    content: `# Best Practices

## Overview
Learn about best practices and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply best practices concepts in your code.
`,
    language: 'lua',
    difficulty: 'Intermediate',
    estimatedTime: 11,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Best Practices
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-17',
    title: 'Code Organization',
    description: 'Master code organization concepts and techniques',
    content: `# Code Organization

## Overview
Learn about code organization and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply code organization concepts in your code.
`,
    language: 'lua',
    difficulty: 'Intermediate',
    estimatedTime: 24,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Code Organization
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-18',
    title: 'Design Patterns',
    description: 'Master design patterns concepts and techniques',
    content: `# Design Patterns

## Overview
Learn about design patterns and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply design patterns concepts in your code.
`,
    language: 'lua',
    difficulty: 'Intermediate',
    estimatedTime: 22,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Design Patterns
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-19',
    title: 'Testing Strategies',
    description: 'Master testing strategies concepts and techniques',
    content: `# Testing Strategies

## Overview
Learn about testing strategies and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply testing strategies concepts in your code.
`,
    language: 'lua',
    difficulty: 'Intermediate',
    estimatedTime: 22,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Testing Strategies
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-20',
    title: 'Debugging Techniques',
    description: 'Master debugging techniques concepts and techniques',
    content: `# Debugging Techniques

## Overview
Learn about debugging techniques and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply debugging techniques concepts in your code.
`,
    language: 'lua',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Debugging Techniques
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-21',
    title: 'Performance Optimization',
    description: 'Master performance optimization concepts and techniques',
    content: `# Performance Optimization

## Overview
Learn about performance optimization and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply performance optimization concepts in your code.
`,
    language: 'lua',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Performance Optimization
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-22',
    title: 'Security Considerations',
    description: 'Master security considerations concepts and techniques',
    content: `# Security Considerations

## Overview
Learn about security considerations and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply security considerations concepts in your code.
`,
    language: 'lua',
    difficulty: 'Intermediate',
    estimatedTime: 21,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Security Considerations
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-23',
    title: 'Error Handling',
    description: 'Master error handling concepts and techniques',
    content: `# Error Handling

## Overview
Learn about error handling and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply error handling concepts in your code.
`,
    language: 'lua',
    difficulty: 'Intermediate',
    estimatedTime: 22,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Error Handling
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-24',
    title: 'Code Refactoring',
    description: 'Master code refactoring concepts and techniques',
    content: `# Code Refactoring

## Overview
Learn about code refactoring and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply code refactoring concepts in your code.
`,
    language: 'lua',
    difficulty: 'Intermediate',
    estimatedTime: 19,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Code Refactoring
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-25',
    title: 'Documentation',
    description: 'Master documentation concepts and techniques',
    content: `# Documentation

## Overview
Learn about documentation and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply documentation concepts in your code.
`,
    language: 'lua',
    difficulty: 'Intermediate',
    estimatedTime: 22,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Documentation
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-26',
    title: 'Version Control Integration',
    description: 'Master version control integration concepts and techniques',
    content: `# Version Control Integration

## Overview
Learn about version control integration and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply version control integration concepts in your code.
`,
    language: 'lua',
    difficulty: 'Intermediate',
    estimatedTime: 17,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Version Control Integration
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-27',
    title: 'CI/CD Basics',
    description: 'Master ci/cd basics concepts and techniques',
    content: `# CI/CD Basics

## Overview
Learn about ci/cd basics and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply ci/cd basics concepts in your code.
`,
    language: 'lua',
    difficulty: 'Intermediate',
    estimatedTime: 22,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for CI/CD Basics
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-28',
    title: 'Advanced Concepts',
    description: 'Master advanced concepts concepts and techniques',
    content: `# Advanced Concepts

## Overview
Learn about advanced concepts and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply advanced concepts concepts in your code.
`,
    language: 'lua',
    difficulty: 'Intermediate',
    estimatedTime: 19,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Advanced Concepts
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-29',
    title: 'Best Practices',
    description: 'Master best practices concepts and techniques',
    content: `# Best Practices

## Overview
Learn about best practices and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply best practices concepts in your code.
`,
    language: 'lua',
    difficulty: 'Intermediate',
    estimatedTime: 12,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Best Practices
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-30',
    title: 'Code Organization',
    description: 'Master code organization concepts and techniques',
    content: `# Code Organization

## Overview
Learn about code organization and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply code organization concepts in your code.
`,
    language: 'lua',
    difficulty: 'Intermediate',
    estimatedTime: 22,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Code Organization
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-31',
    title: 'Design Patterns',
    description: 'Master design patterns concepts and techniques',
    content: `# Design Patterns

## Overview
Learn about design patterns and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply design patterns concepts in your code.
`,
    language: 'lua',
    difficulty: 'Advanced',
    estimatedTime: 24,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Design Patterns
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-32',
    title: 'Testing Strategies',
    description: 'Master testing strategies concepts and techniques',
    content: `# Testing Strategies

## Overview
Learn about testing strategies and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply testing strategies concepts in your code.
`,
    language: 'lua',
    difficulty: 'Advanced',
    estimatedTime: 14,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Testing Strategies
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-33',
    title: 'Debugging Techniques',
    description: 'Master debugging techniques concepts and techniques',
    content: `# Debugging Techniques

## Overview
Learn about debugging techniques and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply debugging techniques concepts in your code.
`,
    language: 'lua',
    difficulty: 'Advanced',
    estimatedTime: 15,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Debugging Techniques
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-34',
    title: 'Performance Optimization',
    description: 'Master performance optimization concepts and techniques',
    content: `# Performance Optimization

## Overview
Learn about performance optimization and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply performance optimization concepts in your code.
`,
    language: 'lua',
    difficulty: 'Advanced',
    estimatedTime: 24,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Performance Optimization
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-35',
    title: 'Security Considerations',
    description: 'Master security considerations concepts and techniques',
    content: `# Security Considerations

## Overview
Learn about security considerations and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply security considerations concepts in your code.
`,
    language: 'lua',
    difficulty: 'Advanced',
    estimatedTime: 23,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Security Considerations
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-36',
    title: 'Error Handling',
    description: 'Master error handling concepts and techniques',
    content: `# Error Handling

## Overview
Learn about error handling and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply error handling concepts in your code.
`,
    language: 'lua',
    difficulty: 'Advanced',
    estimatedTime: 13,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Error Handling
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-37',
    title: 'Code Refactoring',
    description: 'Master code refactoring concepts and techniques',
    content: `# Code Refactoring

## Overview
Learn about code refactoring and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply code refactoring concepts in your code.
`,
    language: 'lua',
    difficulty: 'Advanced',
    estimatedTime: 13,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Code Refactoring
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-38',
    title: 'Documentation',
    description: 'Master documentation concepts and techniques',
    content: `# Documentation

## Overview
Learn about documentation and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply documentation concepts in your code.
`,
    language: 'lua',
    difficulty: 'Advanced',
    estimatedTime: 12,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Documentation
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-39',
    title: 'Version Control Integration',
    description: 'Master version control integration concepts and techniques',
    content: `# Version Control Integration

## Overview
Learn about version control integration and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply version control integration concepts in your code.
`,
    language: 'lua',
    difficulty: 'Advanced',
    estimatedTime: 24,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Version Control Integration
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-40',
    title: 'CI/CD Basics',
    description: 'Master ci/cd basics concepts and techniques',
    content: `# CI/CD Basics

## Overview
Learn about ci/cd basics and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply ci/cd basics concepts in your code.
`,
    language: 'lua',
    difficulty: 'Advanced',
    estimatedTime: 16,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for CI/CD Basics
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-41',
    title: 'Advanced Concepts',
    description: 'Master advanced concepts concepts and techniques',
    content: `# Advanced Concepts

## Overview
Learn about advanced concepts and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply advanced concepts concepts in your code.
`,
    language: 'lua',
    difficulty: 'Advanced',
    estimatedTime: 22,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Advanced Concepts
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-42',
    title: 'Best Practices',
    description: 'Master best practices concepts and techniques',
    content: `# Best Practices

## Overview
Learn about best practices and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply best practices concepts in your code.
`,
    language: 'lua',
    difficulty: 'Advanced',
    estimatedTime: 13,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Best Practices
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-43',
    title: 'Code Organization',
    description: 'Master code organization concepts and techniques',
    content: `# Code Organization

## Overview
Learn about code organization and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply code organization concepts in your code.
`,
    language: 'lua',
    difficulty: 'Advanced',
    estimatedTime: 24,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Code Organization
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-44',
    title: 'Design Patterns',
    description: 'Master design patterns concepts and techniques',
    content: `# Design Patterns

## Overview
Learn about design patterns and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply design patterns concepts in your code.
`,
    language: 'lua',
    difficulty: 'Advanced',
    estimatedTime: 12,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Design Patterns
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-45',
    title: 'Testing Strategies',
    description: 'Master testing strategies concepts and techniques',
    content: `# Testing Strategies

## Overview
Learn about testing strategies and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply testing strategies concepts in your code.
`,
    language: 'lua',
    difficulty: 'Advanced',
    estimatedTime: 11,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Testing Strategies
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-46',
    title: 'Debugging Techniques',
    description: 'Master debugging techniques concepts and techniques',
    content: `# Debugging Techniques

## Overview
Learn about debugging techniques and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply debugging techniques concepts in your code.
`,
    language: 'lua',
    difficulty: 'Advanced',
    estimatedTime: 15,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Debugging Techniques
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-47',
    title: 'Performance Optimization',
    description: 'Master performance optimization concepts and techniques',
    content: `# Performance Optimization

## Overview
Learn about performance optimization and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply performance optimization concepts in your code.
`,
    language: 'lua',
    difficulty: 'Advanced',
    estimatedTime: 23,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Performance Optimization
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-48',
    title: 'Security Considerations',
    description: 'Master security considerations concepts and techniques',
    content: `# Security Considerations

## Overview
Learn about security considerations and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply security considerations concepts in your code.
`,
    language: 'lua',
    difficulty: 'Advanced',
    estimatedTime: 11,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Security Considerations
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-49',
    title: 'Error Handling',
    description: 'Master error handling concepts and techniques',
    content: `# Error Handling

## Overview
Learn about error handling and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply error handling concepts in your code.
`,
    language: 'lua',
    difficulty: 'Advanced',
    estimatedTime: 23,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Error Handling
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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
    id: 'lua-50',
    title: 'Code Refactoring',
    description: 'Master code refactoring concepts and techniques',
    content: `# Code Refactoring

## Overview
Learn about code refactoring and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply code refactoring concepts in your code.
`,
    language: 'lua',
    difficulty: 'Advanced',
    estimatedTime: 13,
    initialCode: `// Start your lua code here
`,
    solution: `// Sample solution for Code Refactoring
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
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