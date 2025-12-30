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
    language: 'scala',
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
    hints: ['Use object to define singleton', 'val for immutable', 'println for output']    ,
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
    language: 'scala',
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
    hints: ['Use def for functions', 'Last expression is returned', 'Type inference works for most cases']    ,
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
    id: 'scala-3',
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
    language: 'scala',
    difficulty: 'Beginner',
    estimatedTime: 17,
    initialCode: `// Start your scala code here
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
    id: 'scala-4',
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
    language: 'scala',
    difficulty: 'Beginner',
    estimatedTime: 19,
    initialCode: `// Start your scala code here
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
    id: 'scala-5',
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
    language: 'scala',
    difficulty: 'Beginner',
    estimatedTime: 10,
    initialCode: `// Start your scala code here
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
    id: 'scala-6',
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
    language: 'scala',
    difficulty: 'Beginner',
    estimatedTime: 21,
    initialCode: `// Start your scala code here
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
    id: 'scala-7',
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
    language: 'scala',
    difficulty: 'Beginner',
    estimatedTime: 16,
    initialCode: `// Start your scala code here
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
    id: 'scala-8',
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
    language: 'scala',
    difficulty: 'Beginner',
    estimatedTime: 18,
    initialCode: `// Start your scala code here
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
    id: 'scala-9',
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
    language: 'scala',
    difficulty: 'Beginner',
    estimatedTime: 14,
    initialCode: `// Start your scala code here
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
    id: 'scala-10',
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
    language: 'scala',
    difficulty: 'Beginner',
    estimatedTime: 15,
    initialCode: `// Start your scala code here
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
    id: 'scala-11',
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
    language: 'scala',
    difficulty: 'Beginner',
    estimatedTime: 10,
    initialCode: `// Start your scala code here
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
    id: 'scala-12',
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
    language: 'scala',
    difficulty: 'Beginner',
    estimatedTime: 24,
    initialCode: `// Start your scala code here
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
    id: 'scala-13',
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
    language: 'scala',
    difficulty: 'Beginner',
    estimatedTime: 12,
    initialCode: `// Start your scala code here
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
    id: 'scala-14',
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
    language: 'scala',
    difficulty: 'Beginner',
    estimatedTime: 24,
    initialCode: `// Start your scala code here
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
    id: 'scala-15',
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
    language: 'scala',
    difficulty: 'Beginner',
    estimatedTime: 10,
    initialCode: `// Start your scala code here
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
    id: 'scala-16',
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
    language: 'scala',
    difficulty: 'Intermediate',
    estimatedTime: 12,
    initialCode: `// Start your scala code here
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
    id: 'scala-17',
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
    language: 'scala',
    difficulty: 'Intermediate',
    estimatedTime: 13,
    initialCode: `// Start your scala code here
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
    id: 'scala-18',
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
    language: 'scala',
    difficulty: 'Intermediate',
    estimatedTime: 11,
    initialCode: `// Start your scala code here
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
    id: 'scala-19',
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
    language: 'scala',
    difficulty: 'Intermediate',
    estimatedTime: 12,
    initialCode: `// Start your scala code here
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
    id: 'scala-20',
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
    language: 'scala',
    difficulty: 'Intermediate',
    estimatedTime: 13,
    initialCode: `// Start your scala code here
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
    id: 'scala-21',
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
    language: 'scala',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `// Start your scala code here
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
    id: 'scala-22',
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
    language: 'scala',
    difficulty: 'Intermediate',
    estimatedTime: 14,
    initialCode: `// Start your scala code here
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
    id: 'scala-23',
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
    language: 'scala',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `// Start your scala code here
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
    id: 'scala-24',
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
    language: 'scala',
    difficulty: 'Intermediate',
    estimatedTime: 16,
    initialCode: `// Start your scala code here
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
    id: 'scala-25',
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
    language: 'scala',
    difficulty: 'Intermediate',
    estimatedTime: 10,
    initialCode: `// Start your scala code here
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
    id: 'scala-26',
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
    language: 'scala',
    difficulty: 'Intermediate',
    estimatedTime: 22,
    initialCode: `// Start your scala code here
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
    id: 'scala-27',
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
    language: 'scala',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `// Start your scala code here
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
    id: 'scala-28',
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
    language: 'scala',
    difficulty: 'Intermediate',
    estimatedTime: 16,
    initialCode: `// Start your scala code here
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
    id: 'scala-29',
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
    language: 'scala',
    difficulty: 'Intermediate',
    estimatedTime: 14,
    initialCode: `// Start your scala code here
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
    id: 'scala-30',
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
    language: 'scala',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `// Start your scala code here
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
    id: 'scala-31',
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
    language: 'scala',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `// Start your scala code here
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
    id: 'scala-32',
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
    language: 'scala',
    difficulty: 'Advanced',
    estimatedTime: 21,
    initialCode: `// Start your scala code here
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
    id: 'scala-33',
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
    language: 'scala',
    difficulty: 'Advanced',
    estimatedTime: 12,
    initialCode: `// Start your scala code here
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
    id: 'scala-34',
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
    language: 'scala',
    difficulty: 'Advanced',
    estimatedTime: 18,
    initialCode: `// Start your scala code here
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
    id: 'scala-35',
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
    language: 'scala',
    difficulty: 'Advanced',
    estimatedTime: 22,
    initialCode: `// Start your scala code here
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
    id: 'scala-36',
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
    language: 'scala',
    difficulty: 'Advanced',
    estimatedTime: 13,
    initialCode: `// Start your scala code here
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
    id: 'scala-37',
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
    language: 'scala',
    difficulty: 'Advanced',
    estimatedTime: 15,
    initialCode: `// Start your scala code here
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
    id: 'scala-38',
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
    language: 'scala',
    difficulty: 'Advanced',
    estimatedTime: 22,
    initialCode: `// Start your scala code here
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
    id: 'scala-39',
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
    language: 'scala',
    difficulty: 'Advanced',
    estimatedTime: 19,
    initialCode: `// Start your scala code here
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
    id: 'scala-40',
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
    language: 'scala',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `// Start your scala code here
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
    id: 'scala-41',
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
    language: 'scala',
    difficulty: 'Advanced',
    estimatedTime: 18,
    initialCode: `// Start your scala code here
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
    id: 'scala-42',
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
    language: 'scala',
    difficulty: 'Advanced',
    estimatedTime: 22,
    initialCode: `// Start your scala code here
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
    id: 'scala-43',
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
    language: 'scala',
    difficulty: 'Advanced',
    estimatedTime: 10,
    initialCode: `// Start your scala code here
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
    id: 'scala-44',
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
    language: 'scala',
    difficulty: 'Advanced',
    estimatedTime: 14,
    initialCode: `// Start your scala code here
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
    id: 'scala-45',
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
    language: 'scala',
    difficulty: 'Advanced',
    estimatedTime: 19,
    initialCode: `// Start your scala code here
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
    id: 'scala-46',
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
    language: 'scala',
    difficulty: 'Advanced',
    estimatedTime: 17,
    initialCode: `// Start your scala code here
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
    id: 'scala-47',
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
    language: 'scala',
    difficulty: 'Advanced',
    estimatedTime: 15,
    initialCode: `// Start your scala code here
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
    id: 'scala-48',
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
    language: 'scala',
    difficulty: 'Advanced',
    estimatedTime: 11,
    initialCode: `// Start your scala code here
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
    id: 'scala-49',
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
    language: 'scala',
    difficulty: 'Advanced',
    estimatedTime: 22,
    initialCode: `// Start your scala code here
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
    id: 'scala-50',
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
    language: 'scala',
    difficulty: 'Advanced',
    estimatedTime: 15,
    initialCode: `// Start your scala code here
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
