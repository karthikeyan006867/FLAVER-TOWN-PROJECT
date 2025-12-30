import { Lesson } from '../courses'

export const powershellLessons: Lesson[] = [
  {
    id: 'powershell-1',
    title: 'Introduction to PowerShell',
    description: 'Learn PowerShell for Windows automation',
    content: `# Introduction to PowerShell

PowerShell is a cross-platform task automation solution consisting of a command-line shell and scripting language.

## Key Features:
- Object-oriented pipeline
- .NET integration
- Extensive cmdlets
- Remote management
- Cross-platform (PowerShell Core)

## Hello World:
\`\`\`powershell
Write-Host "Hello, PowerShell!"
\`\`\`

## Variables:
\`\`\`powershell
$name = "PowerShell"
$version = 7
$isAwesome = $true
\`\`\`

## Arrays and Hash Tables:
\`\`\`powershell
$numbers = @(1, 2, 3, 4, 5)
$person = @{
  Name = "Alice"
  Age = 30
}
\`\`\``,
    language: 'powershell',
    difficulty: 'Beginner',
    estimatedTime: 35,
    initialCode: `# Your PowerShell code
Write-Host "Hello, PowerShell!"
`,
    solution: `# Variables
$greeting = "Hello, PowerShell!"
Write-Host $greeting

# Arrays
$numbers = @(1, 2, 3, 4, 5)
$sum = ($numbers | Measure-Object -Sum).Sum
Write-Host "Sum: $sum"

# Hash table
$person = @{
  Name = "Alice"
  Age = 30
  City = "Seattle"
}
Write-Host "Name: $($person.Name)"

# Pipeline
Get-Process | Select-Object -First 5 Name, CPU`,
    hints: ['$ for variables', '@() for arrays', '@{} for hash tables', '| for pipeline']    ,
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
    id: 'powershell-2',
    title: 'PowerShell Functions and Cmdlets',
    description: 'Creating functions and using cmdlets',
    content: `# PowerShell Functions

## Function Syntax:
\`\`\`powershell
function FunctionName {
  param($Parameter1, $Parameter2)
  # body
  return $value
}
\`\`\`

## Advanced Function:
\`\`\`powershell
function Get-Square {
  param(
    [int]$Number
  )
  return $Number * $Number
}
\`\`\`

## Common Cmdlets:
- Get-ChildItem (ls, dir)
- Set-Location (cd)
- Copy-Item (cp)
- Remove-Item (rm)
- Select-Object
- Where-Object
\`\`\``,
    language: 'powershell',
    difficulty: 'Beginner',
    estimatedTime: 40,
    initialCode: `# Define functions
`,
    solution: `function Get-Factorial {
  param([int]$n)
  
  if ($n -le 1) {
    return 1
  }
  return $n * (Get-Factorial -n ($n - 1))
}

function Get-FileCount {
  param([string]$Path = ".")
  
  $files = Get-ChildItem -Path $Path -File
  return $files.Count
}

Write-Host "Factorial of 5: $(Get-Factorial -n 5)"`,
    hints: ['param() for parameters', 'Verb-Noun naming convention', 'Return keyword optional']    ,
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
  }
,

  // EXPANDED LESSONS (Generated)
  {
    id: 'powershell-3',
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
    language: 'powershell',
    difficulty: 'Beginner',
    estimatedTime: 20,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-4',
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
    language: 'powershell',
    difficulty: 'Beginner',
    estimatedTime: 17,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-5',
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
    language: 'powershell',
    difficulty: 'Beginner',
    estimatedTime: 13,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-6',
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
    language: 'powershell',
    difficulty: 'Beginner',
    estimatedTime: 17,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-7',
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
    language: 'powershell',
    difficulty: 'Beginner',
    estimatedTime: 19,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-8',
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
    language: 'powershell',
    difficulty: 'Beginner',
    estimatedTime: 17,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-9',
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
    language: 'powershell',
    difficulty: 'Beginner',
    estimatedTime: 19,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-10',
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
    language: 'powershell',
    difficulty: 'Beginner',
    estimatedTime: 12,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-11',
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
    language: 'powershell',
    difficulty: 'Beginner',
    estimatedTime: 20,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-12',
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
    language: 'powershell',
    difficulty: 'Beginner',
    estimatedTime: 19,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-13',
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
    language: 'powershell',
    difficulty: 'Beginner',
    estimatedTime: 14,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-14',
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
    language: 'powershell',
    difficulty: 'Beginner',
    estimatedTime: 22,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-15',
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
    language: 'powershell',
    difficulty: 'Beginner',
    estimatedTime: 16,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-16',
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
    language: 'powershell',
    difficulty: 'Intermediate',
    estimatedTime: 17,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-17',
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
    language: 'powershell',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-18',
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
    language: 'powershell',
    difficulty: 'Intermediate',
    estimatedTime: 21,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-19',
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
    language: 'powershell',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-20',
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
    language: 'powershell',
    difficulty: 'Intermediate',
    estimatedTime: 24,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-21',
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
    language: 'powershell',
    difficulty: 'Intermediate',
    estimatedTime: 22,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-22',
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
    language: 'powershell',
    difficulty: 'Intermediate',
    estimatedTime: 24,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-23',
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
    language: 'powershell',
    difficulty: 'Intermediate',
    estimatedTime: 24,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-24',
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
    language: 'powershell',
    difficulty: 'Intermediate',
    estimatedTime: 22,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-25',
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
    language: 'powershell',
    difficulty: 'Intermediate',
    estimatedTime: 13,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-26',
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
    language: 'powershell',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-27',
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
    language: 'powershell',
    difficulty: 'Intermediate',
    estimatedTime: 23,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-28',
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
    language: 'powershell',
    difficulty: 'Intermediate',
    estimatedTime: 13,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-29',
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
    language: 'powershell',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-30',
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
    language: 'powershell',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-31',
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
    language: 'powershell',
    difficulty: 'Advanced',
    estimatedTime: 12,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-32',
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
    language: 'powershell',
    difficulty: 'Advanced',
    estimatedTime: 10,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-33',
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
    language: 'powershell',
    difficulty: 'Advanced',
    estimatedTime: 13,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-34',
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
    language: 'powershell',
    difficulty: 'Advanced',
    estimatedTime: 10,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-35',
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
    language: 'powershell',
    difficulty: 'Advanced',
    estimatedTime: 18,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-36',
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
    language: 'powershell',
    difficulty: 'Advanced',
    estimatedTime: 15,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-37',
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
    language: 'powershell',
    difficulty: 'Advanced',
    estimatedTime: 13,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-38',
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
    language: 'powershell',
    difficulty: 'Advanced',
    estimatedTime: 23,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-39',
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
    language: 'powershell',
    difficulty: 'Advanced',
    estimatedTime: 17,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-40',
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
    language: 'powershell',
    difficulty: 'Advanced',
    estimatedTime: 14,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-41',
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
    language: 'powershell',
    difficulty: 'Advanced',
    estimatedTime: 16,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-42',
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
    language: 'powershell',
    difficulty: 'Advanced',
    estimatedTime: 17,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-43',
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
    language: 'powershell',
    difficulty: 'Advanced',
    estimatedTime: 15,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-44',
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
    language: 'powershell',
    difficulty: 'Advanced',
    estimatedTime: 14,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-45',
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
    language: 'powershell',
    difficulty: 'Advanced',
    estimatedTime: 23,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-46',
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
    language: 'powershell',
    difficulty: 'Advanced',
    estimatedTime: 15,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-47',
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
    language: 'powershell',
    difficulty: 'Advanced',
    estimatedTime: 16,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-48',
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
    language: 'powershell',
    difficulty: 'Advanced',
    estimatedTime: 21,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-49',
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
    language: 'powershell',
    difficulty: 'Advanced',
    estimatedTime: 16,
    initialCode: `// Start your powershell code here
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
    id: 'powershell-50',
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
    language: 'powershell',
    difficulty: 'Advanced',
    estimatedTime: 16,
    initialCode: `// Start your powershell code here
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
