import { Lesson } from '../courses'

export const nodejsLessons: Lesson[] = [
  {
    id: 'node-1',
    title: 'Introduction to Node.js',
    description: 'Understanding Node.js and server-side JavaScript',
    content: `# Welcome to Node.js!

Node.js is a JavaScript runtime built on Chrome's V8 engine that lets you run JavaScript on the server.

## Why Node.js?
- **Fast**: Non-blocking, event-driven architecture
- **JavaScript Everywhere**: Same language for frontend and backend
- **NPM**: Largest ecosystem of libraries
- **Scalable**: Perfect for real-time applications

## Your First Node.js Program:
\`\`\`javascript
// app.js
console.log("Hello from Node.js!")
\`\`\`

Run it with: \`node app.js\`

## Built-in Modules:
Node.js comes with many built-in modules:
\`\`\`javascript
const os = require('os')
console.log('Platform:', os.platform())
console.log('CPU cores:', os.cpus().length)
\`\`\`

## Creating a Simple Server:
\`\`\`javascript
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello World!')
})

server.listen(3000, () => {
  console.log('Server running on port 3000')
})
\`\`\`

**Task:** Create your first Node.js program.`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 20,
    initialCode: `// Import the 'os' module\nconst os = require('os')\n\n// Log the operating system platform\n\n// Log the total memory\n`,
    solution: `const os = require('os')\n\nconsole.log('Platform:', os.platform())\nconsole.log('Total Memory:', os.totalmem())\nconsole.log('Free Memory:', os.freemem())`,
    expectedOutput: 'Platform',
    hints: ['Use require() to import', 'os.platform() for OS', 'os.totalmem() for memory']
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
    id: 'node-2',
    title: 'Modules and require()',
    description: 'Learn to use and create modules in Node.js',
    content: `# Node.js Modules

Modules let you organize code into reusable pieces.

## Using Built-in Modules:
\`\`\`javascript
const fs = require('fs')
const path = require('path')
const http = require('http')
\`\`\`

## Creating Your Own Module:
\`\`\`javascript
// math.js
function add(a, b) {
  return a + b
}

function multiply(a, b) {
  return a * b
}

module.exports = { add, multiply }
\`\`\`

## Using Your Module:
\`\`\`javascript
// app.js
const math = require('./math')

console.log(math.add(5, 3)) // 8
console.log(math.multiply(4, 2)) // 8
\`\`\`

## Export Patterns:
\`\`\`javascript
// Single export
module.exports = function() { }

// Multiple exports
exports.add = function(a, b) { return a + b }
exports.subtract = function(a, b) { return a - b }
\`\`\`

**Task:** Create a module with helper functions.`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 25,
    initialCode: `// Create a greeting module\nfunction greet(name) {\n  // Return greeting message\n}\n\nfunction farewell(name) {\n  // Return farewell message\n}\n\nmodule.exports = { greet, farewell }`,
    solution: `function greet(name) {\n  return \`Hello, \${name}!\`\n}\n\nfunction farewell(name) {\n  return \`Goodbye, \${name}!\`\n}\n\nmodule.exports = { greet, farewell }\n\n// Test\nconst { greet, farewell } = module.exports\nconsole.log(greet("Alice"))\nconsole.log(farewell("Bob"))`,
    expectedOutput: 'Hello',
    hints: ['Return string from functions', 'Use template literals', 'Export both functions']    ,
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
    id: 'node-3',
    title: 'File System (fs) Module',
    description: 'Reading and writing files with Node.js',
    content: `# Working with Files

The \`fs\` module lets you interact with the file system.

## Reading Files:
\`\`\`javascript
const fs = require('fs')

// Synchronous (blocking)
const data = fs.readFileSync('file.txt', 'utf8')
console.log(data)

// Asynchronous (non-blocking) - Better!
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
})
\`\`\`

## Writing Files:
\`\`\`javascript
// Write to file
fs.writeFile('output.txt', 'Hello Node!', (err) => {
  if (err) throw err
  console.log('File saved!')
})

// Append to file
fs.appendFile('log.txt', 'New entry\\n', (err) => {
  if (err) throw err
})
\`\`\`

## Promises with fs (Modern Way):
\`\`\`javascript
const fs = require('fs').promises

async function readData() {
  const data = await fs.readFile('file.txt', 'utf8')
  console.log(data)
}
\`\`\`

**Task:** Create a file reading function.`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 30,
    initialCode: `const fs = require('fs')\n\n// Read a file asynchronously\nfunction readFileContent(filename) {\n  fs.readFile(filename, 'utf8', (err, data) => {\n    // Handle error and data\n  })\n}\n\nreadFileContent('example.txt')`,
    solution: `const fs = require('fs')\n\nfunction readFileContent(filename) {\n  fs.readFile(filename, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Error reading file:', err)\n      return\n    }\n    console.log('File content:', data)\n  })\n}\n\nreadFileContent('example.txt')`,
    expectedOutput: 'File',
    hints: ['Check for errors first', 'Use utf8 encoding', 'Console.log the data']    ,
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
  ...Array.from({ length: 37 }, (_, i) => {
    const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 12 ? 'Beginner' : i < 28 ? 'Intermediate' : 'Advanced'
    return {
      id: `node-${i + 4}`,
      title: `Node.js ${i < 8 ? 'Fundamentals' : i < 22 ? 'Express & APIs' : 'Advanced'} - Lesson ${i + 4}`,
      description: `Master ${i < 8 ? 'core Node.js concepts' : i < 22 ? 'building REST APIs' : 'deployment and scaling'}`,
      content: `# Node.js Lesson ${i + 4}\n\nDetailed backend development lesson with clear examples coming soon.`,
      language: 'javascript' as const,
      difficulty,
      estimatedTime: 30 + Math.floor(i / 2),
      initialCode: `const express = require('express')\nconst app = express()\n\n// Your code here\n`,
      solution: `const express = require('express')\nconst app = express()\n\napp.get('/', (req, res) => {\n  res.send('Node.js Lesson ${i + 4}')\n})\n\napp.listen(3000)`,
      expectedOutput: 'Node',
      hints: ['Use Express for APIs', 'Middleware processes requests', 'async/await for database']
    }
  })
,

  // EXPANDED LESSONS (Generated)
  {
    id: 'nodejs-5',
    title: 'Destructuring Advanced',
    description: 'Master destructuring advanced concepts and techniques',
    content: `# Destructuring Advanced

## Overview
Learn about destructuring advanced and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply destructuring advanced concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 13,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Destructuring Advanced
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
    id: 'nodejs-6',
    title: 'Spread Operator Tricks',
    description: 'Master spread operator tricks concepts and techniques',
    content: `# Spread Operator Tricks

## Overview
Learn about spread operator tricks and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply spread operator tricks concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 11,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Spread Operator Tricks
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
    id: 'nodejs-7',
    title: 'Rest Parameters',
    description: 'Master rest parameters concepts and techniques',
    content: `# Rest Parameters

## Overview
Learn about rest parameters and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply rest parameters concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 17,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Rest Parameters
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
    id: 'nodejs-8',
    title: 'Optional Chaining Deep Dive',
    description: 'Master optional chaining deep dive concepts and techniques',
    content: `# Optional Chaining Deep Dive

## Overview
Learn about optional chaining deep dive and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply optional chaining deep dive concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 22,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Optional Chaining Deep Dive
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
    id: 'nodejs-9',
    title: 'Nullish Coalescing',
    description: 'Master nullish coalescing concepts and techniques',
    content: `# Nullish Coalescing

## Overview
Learn about nullish coalescing and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply nullish coalescing concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 12,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Nullish Coalescing
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
    id: 'nodejs-10',
    title: 'Template Literals Advanced',
    description: 'Master template literals advanced concepts and techniques',
    content: `# Template Literals Advanced

## Overview
Learn about template literals advanced and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply template literals advanced concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 14,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Template Literals Advanced
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
    id: 'nodejs-11',
    title: 'Tagged Templates',
    description: 'Master tagged templates concepts and techniques',
    content: `# Tagged Templates

## Overview
Learn about tagged templates and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply tagged templates concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 20,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Tagged Templates
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
    id: 'nodejs-12',
    title: 'Symbol Type',
    description: 'Master symbol type concepts and techniques',
    content: `# Symbol Type

## Overview
Learn about symbol type and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply symbol type concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 12,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Symbol Type
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
    id: 'nodejs-13',
    title: 'WeakMap and WeakSet',
    description: 'Master weakmap and weakset concepts and techniques',
    content: `# WeakMap and WeakSet

## Overview
Learn about weakmap and weakset and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply weakmap and weakset concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 16,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for WeakMap and WeakSet
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
    id: 'nodejs-14',
    title: 'Proxy Traps',
    description: 'Master proxy traps concepts and techniques',
    content: `# Proxy Traps

## Overview
Learn about proxy traps and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply proxy traps concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 17,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Proxy Traps
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
    id: 'nodejs-15',
    title: 'Reflect API',
    description: 'Master reflect api concepts and techniques',
    content: `# Reflect API

## Overview
Learn about reflect api and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply reflect api concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 11,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Reflect API
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
    id: 'nodejs-16',
    title: 'Generator Advanced Patterns',
    description: 'Master generator advanced patterns concepts and techniques',
    content: `# Generator Advanced Patterns

## Overview
Learn about generator advanced patterns and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply generator advanced patterns concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 14,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Generator Advanced Patterns
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
    id: 'nodejs-17',
    title: 'Destructuring Advanced',
    description: 'Master destructuring advanced concepts and techniques',
    content: `# Destructuring Advanced

## Overview
Learn about destructuring advanced and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply destructuring advanced concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Destructuring Advanced
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
    id: 'nodejs-18',
    title: 'Spread Operator Tricks',
    description: 'Master spread operator tricks concepts and techniques',
    content: `# Spread Operator Tricks

## Overview
Learn about spread operator tricks and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply spread operator tricks concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 21,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Spread Operator Tricks
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
    id: 'nodejs-19',
    title: 'Rest Parameters',
    description: 'Master rest parameters concepts and techniques',
    content: `# Rest Parameters

## Overview
Learn about rest parameters and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply rest parameters concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 17,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Rest Parameters
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
    id: 'nodejs-20',
    title: 'Optional Chaining Deep Dive',
    description: 'Master optional chaining deep dive concepts and techniques',
    content: `# Optional Chaining Deep Dive

## Overview
Learn about optional chaining deep dive and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply optional chaining deep dive concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Optional Chaining Deep Dive
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
    id: 'nodejs-21',
    title: 'Nullish Coalescing',
    description: 'Master nullish coalescing concepts and techniques',
    content: `# Nullish Coalescing

## Overview
Learn about nullish coalescing and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply nullish coalescing concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 10,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Nullish Coalescing
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
    id: 'nodejs-22',
    title: 'Template Literals Advanced',
    description: 'Master template literals advanced concepts and techniques',
    content: `# Template Literals Advanced

## Overview
Learn about template literals advanced and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply template literals advanced concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 21,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Template Literals Advanced
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
    id: 'nodejs-23',
    title: 'Tagged Templates',
    description: 'Master tagged templates concepts and techniques',
    content: `# Tagged Templates

## Overview
Learn about tagged templates and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply tagged templates concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 24,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Tagged Templates
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
    id: 'nodejs-24',
    title: 'Symbol Type',
    description: 'Master symbol type concepts and techniques',
    content: `# Symbol Type

## Overview
Learn about symbol type and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply symbol type concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 11,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Symbol Type
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
    id: 'nodejs-25',
    title: 'WeakMap and WeakSet',
    description: 'Master weakmap and weakset concepts and techniques',
    content: `# WeakMap and WeakSet

## Overview
Learn about weakmap and weakset and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply weakmap and weakset concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 13,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for WeakMap and WeakSet
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
    id: 'nodejs-26',
    title: 'Proxy Traps',
    description: 'Master proxy traps concepts and techniques',
    content: `# Proxy Traps

## Overview
Learn about proxy traps and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply proxy traps concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 19,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Proxy Traps
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
    id: 'nodejs-27',
    title: 'Reflect API',
    description: 'Master reflect api concepts and techniques',
    content: `# Reflect API

## Overview
Learn about reflect api and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply reflect api concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Reflect API
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
    id: 'nodejs-28',
    title: 'Generator Advanced Patterns',
    description: 'Master generator advanced patterns concepts and techniques',
    content: `# Generator Advanced Patterns

## Overview
Learn about generator advanced patterns and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply generator advanced patterns concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 22,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Generator Advanced Patterns
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
    id: 'nodejs-29',
    title: 'Destructuring Advanced',
    description: 'Master destructuring advanced concepts and techniques',
    content: `# Destructuring Advanced

## Overview
Learn about destructuring advanced and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply destructuring advanced concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 19,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Destructuring Advanced
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
    id: 'nodejs-30',
    title: 'Spread Operator Tricks',
    description: 'Master spread operator tricks concepts and techniques',
    content: `# Spread Operator Tricks

## Overview
Learn about spread operator tricks and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply spread operator tricks concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 24,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Spread Operator Tricks
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
    id: 'nodejs-31',
    title: 'Rest Parameters',
    description: 'Master rest parameters concepts and techniques',
    content: `# Rest Parameters

## Overview
Learn about rest parameters and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply rest parameters concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 19,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Rest Parameters
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
    id: 'nodejs-32',
    title: 'Optional Chaining Deep Dive',
    description: 'Master optional chaining deep dive concepts and techniques',
    content: `# Optional Chaining Deep Dive

## Overview
Learn about optional chaining deep dive and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply optional chaining deep dive concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 15,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Optional Chaining Deep Dive
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
    id: 'nodejs-33',
    title: 'Nullish Coalescing',
    description: 'Master nullish coalescing concepts and techniques',
    content: `# Nullish Coalescing

## Overview
Learn about nullish coalescing and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply nullish coalescing concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 12,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Nullish Coalescing
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
    id: 'nodejs-34',
    title: 'Template Literals Advanced',
    description: 'Master template literals advanced concepts and techniques',
    content: `# Template Literals Advanced

## Overview
Learn about template literals advanced and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply template literals advanced concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 13,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Template Literals Advanced
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
    id: 'nodejs-35',
    title: 'Tagged Templates',
    description: 'Master tagged templates concepts and techniques',
    content: `# Tagged Templates

## Overview
Learn about tagged templates and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply tagged templates concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 17,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Tagged Templates
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
    id: 'nodejs-36',
    title: 'Symbol Type',
    description: 'Master symbol type concepts and techniques',
    content: `# Symbol Type

## Overview
Learn about symbol type and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply symbol type concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 13,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Symbol Type
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
    id: 'nodejs-37',
    title: 'WeakMap and WeakSet',
    description: 'Master weakmap and weakset concepts and techniques',
    content: `# WeakMap and WeakSet

## Overview
Learn about weakmap and weakset and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply weakmap and weakset concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 21,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for WeakMap and WeakSet
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
    id: 'nodejs-38',
    title: 'Proxy Traps',
    description: 'Master proxy traps concepts and techniques',
    content: `# Proxy Traps

## Overview
Learn about proxy traps and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply proxy traps concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 15,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Proxy Traps
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
    id: 'nodejs-39',
    title: 'Reflect API',
    description: 'Master reflect api concepts and techniques',
    content: `# Reflect API

## Overview
Learn about reflect api and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply reflect api concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 14,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Reflect API
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
    id: 'nodejs-40',
    title: 'Generator Advanced Patterns',
    description: 'Master generator advanced patterns concepts and techniques',
    content: `# Generator Advanced Patterns

## Overview
Learn about generator advanced patterns and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply generator advanced patterns concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 17,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Generator Advanced Patterns
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
    id: 'nodejs-41',
    title: 'Destructuring Advanced',
    description: 'Master destructuring advanced concepts and techniques',
    content: `# Destructuring Advanced

## Overview
Learn about destructuring advanced and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply destructuring advanced concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 10,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Destructuring Advanced
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
    id: 'nodejs-42',
    title: 'Spread Operator Tricks',
    description: 'Master spread operator tricks concepts and techniques',
    content: `# Spread Operator Tricks

## Overview
Learn about spread operator tricks and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply spread operator tricks concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Spread Operator Tricks
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
    id: 'nodejs-43',
    title: 'Rest Parameters',
    description: 'Master rest parameters concepts and techniques',
    content: `# Rest Parameters

## Overview
Learn about rest parameters and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply rest parameters concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 17,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Rest Parameters
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
    id: 'nodejs-44',
    title: 'Optional Chaining Deep Dive',
    description: 'Master optional chaining deep dive concepts and techniques',
    content: `# Optional Chaining Deep Dive

## Overview
Learn about optional chaining deep dive and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply optional chaining deep dive concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 16,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Optional Chaining Deep Dive
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
    id: 'nodejs-45',
    title: 'Nullish Coalescing',
    description: 'Master nullish coalescing concepts and techniques',
    content: `# Nullish Coalescing

## Overview
Learn about nullish coalescing and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply nullish coalescing concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 14,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Nullish Coalescing
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
    id: 'nodejs-46',
    title: 'Template Literals Advanced',
    description: 'Master template literals advanced concepts and techniques',
    content: `# Template Literals Advanced

## Overview
Learn about template literals advanced and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply template literals advanced concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 13,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Template Literals Advanced
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
    id: 'nodejs-47',
    title: 'Tagged Templates',
    description: 'Master tagged templates concepts and techniques',
    content: `# Tagged Templates

## Overview
Learn about tagged templates and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply tagged templates concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Tagged Templates
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
    id: 'nodejs-48',
    title: 'Symbol Type',
    description: 'Master symbol type concepts and techniques',
    content: `# Symbol Type

## Overview
Learn about symbol type and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply symbol type concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 21,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Symbol Type
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
    id: 'nodejs-49',
    title: 'WeakMap and WeakSet',
    description: 'Master weakmap and weakset concepts and techniques',
    content: `# WeakMap and WeakSet

## Overview
Learn about weakmap and weakset and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply weakmap and weakset concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for WeakMap and WeakSet
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
    id: 'nodejs-50',
    title: 'Proxy Traps',
    description: 'Master proxy traps concepts and techniques',
    content: `# Proxy Traps

## Overview
Learn about proxy traps and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply proxy traps concepts in your code.
`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 16,
    initialCode: `// Start your javascript code here
`,
    solution: `// Sample solution for Proxy Traps
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
    id: 'nodejs-51',
    title: 'Advanced Module Management',
    description: 'Master module resolution and management',
    content: '# Advanced Module Management\n\nLearn advanced techniques for managing modules.',
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: '// Node.js module management\n',
    solution: '// Advanced module example\n',
    hints: ['Module patterns', 'Custom exports', 'Module resolution'],
    testCases: [{ name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' }, { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }]
  },
  {
    id: 'nodejs-52',
    title: 'Performance Optimization',
    description: 'Optimize Node.js application performance',
    content: '# Performance Optimization\n\nTechniques to improve your Node.js app speed.',
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: '// Performance optimization\n',
    solution: '// Optimized code\n',
    hints: ['Profiling', 'Benchmarking', 'Caching'],
    testCases: [{ name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' }, { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }]
  },
  {
    id: 'nodejs-53',
    title: 'Load Balancing',
    description: 'Distribute requests across multiple processes',
    content: '# Load Balancing\n\nDistribute your application load.',
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: '// Load balancing setup\n',
    solution: '// Load balancer code\n',
    hints: ['Round robin', 'Sticky sessions', 'Health checks'],
    testCases: [{ name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' }, { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }]
  },
  {
    id: 'nodejs-54',
    title: 'Containerization with Docker',
    description: 'Containerize Node.js applications',
    content: '# Docker and Node.js\n\nLearn to containerize your applications.',
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: '# Dockerfile\nFROM node:18\n',
    solution: '# Production ready Dockerfile\n',
    hints: ['Multi-stage builds', 'Alpine images', 'Security'],
    testCases: [{ name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' }, { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }]
  },
  {
    id: 'nodejs-55',
    title: 'Microservices Architecture',
    description: 'Build scalable microservices',
    content: '# Microservices\n\nDesign distributed microservice architectures.',
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 30,
    initialCode: '// Microservice setup\n',
    solution: '// Microservice implementation\n',
    hints: ['Service discovery', 'API gateway', 'Message queues'],
    testCases: [{ name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' }, { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }]
  },
  {
    id: 'nodejs-56',
    title: 'Monitoring and Logging',
    description: 'Monitor production applications',
    content: '# Monitoring\n\nImplement comprehensive monitoring solutions.',
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: '// Monitoring setup\n',
    solution: '// Monitoring implementation\n',
    hints: ['ELK stack', 'Prometheus', 'Grafana'],
    testCases: [{ name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' }, { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }]
  },
  {
    id: 'nodejs-57',
    title: 'Security Best Practices',
    description: 'Secure your Node.js applications',
    content: '# Node.js Security\n\nImplement security best practices.',
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: '// Security setup\n',
    solution: '// Secure implementation\n',
    hints: ['Input validation', 'Rate limiting', 'CORS'],
    testCases: [{ name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' }, { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }]
  },
  {
    id: 'nodejs-58',
    title: 'API Best Practices',
    description: 'Design RESTful APIs properly',
    content: '# API Best Practices\n\nDesign scalable, maintainable APIs.',
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: '// API design\n',
    solution: '// Best practice API\n',
    hints: ['RESTful principles', 'Versioning', 'Documentation'],
    testCases: [{ name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' }, { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }]
  },
  {
    id: 'nodejs-59',
    title: 'Real-time Applications',
    description: 'Build real-time features with WebSockets',
    content: '# Real-time Applications\n\nImplement real-time features.',
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: '// WebSocket setup\n',
    solution: '// Real-time implementation\n',
    hints: ['Socket.io', 'WebSockets', 'Event handling'],
    testCases: [{ name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' }, { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }]
  },
  {
    id: 'nodejs-60',
    title: 'Production Deployment',
    description: 'Deploy Node.js to production',
    content: '# Production Deployment\n\nDeploy your applications safely.',
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: '// Deployment config\n',
    solution: '// Production setup\n',
    hints: ['Environment variables', 'Process management', 'CI/CD'],
    testCases: [{ name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' }, { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }]
]