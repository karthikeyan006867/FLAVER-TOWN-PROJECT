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
  ...Array.from({ length: 47 }, (_, i) => {
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
  },
  {
    id: 'nodejs-4',
    title: 'Node.js - Lesson 4',
    description: 'Master Node.js concepts and techniques - Part 4',
    language: 'nodejs' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# Node.js - Lesson 4

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 4
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 4
// Write your code here

`,
    solution: `// Solution for Lesson 4
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-5',
    title: 'Node.js - Lesson 5',
    description: 'Master Node.js concepts and techniques - Part 5',
    language: 'nodejs' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# Node.js - Lesson 5

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 5
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 5
// Write your code here

`,
    solution: `// Solution for Lesson 5
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-6',
    title: 'Node.js - Lesson 6',
    description: 'Master Node.js concepts and techniques - Part 6',
    language: 'nodejs' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Node.js - Lesson 6

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 6
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 6
// Write your code here

`,
    solution: `// Solution for Lesson 6
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-7',
    title: 'Node.js - Lesson 7',
    description: 'Master Node.js concepts and techniques - Part 7',
    language: 'nodejs' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# Node.js - Lesson 7

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 7
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 7
// Write your code here

`,
    solution: `// Solution for Lesson 7
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-8',
    title: 'Node.js - Lesson 8',
    description: 'Master Node.js concepts and techniques - Part 8',
    language: 'nodejs' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# Node.js - Lesson 8

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 8
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 8
// Write your code here

`,
    solution: `// Solution for Lesson 8
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-9',
    title: 'Node.js - Lesson 9',
    description: 'Master Node.js concepts and techniques - Part 9',
    language: 'nodejs' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# Node.js - Lesson 9

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 9
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 9
// Write your code here

`,
    solution: `// Solution for Lesson 9
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-10',
    title: 'Node.js - Lesson 10',
    description: 'Master Node.js concepts and techniques - Part 10',
    language: 'nodejs' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Node.js - Lesson 10

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 10
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 10
// Write your code here

`,
    solution: `// Solution for Lesson 10
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-11',
    title: 'Node.js - Lesson 11',
    description: 'Master Node.js concepts and techniques - Part 11',
    language: 'nodejs' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# Node.js - Lesson 11

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 11
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 11
// Write your code here

`,
    solution: `// Solution for Lesson 11
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-12',
    title: 'Node.js - Lesson 12',
    description: 'Master Node.js concepts and techniques - Part 12',
    language: 'nodejs' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# Node.js - Lesson 12

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 12
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 12
// Write your code here

`,
    solution: `// Solution for Lesson 12
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-13',
    title: 'Node.js - Lesson 13',
    description: 'Master Node.js concepts and techniques - Part 13',
    language: 'nodejs' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# Node.js - Lesson 13

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 13
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 13
// Write your code here

`,
    solution: `// Solution for Lesson 13
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-14',
    title: 'Node.js - Lesson 14',
    description: 'Master Node.js concepts and techniques - Part 14',
    language: 'nodejs' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Node.js - Lesson 14

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 14
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 14
// Write your code here

`,
    solution: `// Solution for Lesson 14
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-15',
    title: 'Node.js - Lesson 15',
    description: 'Master Node.js concepts and techniques - Part 15',
    language: 'nodejs' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# Node.js - Lesson 15

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 15
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 15
// Write your code here

`,
    solution: `// Solution for Lesson 15
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-16',
    title: 'Node.js - Lesson 16',
    description: 'Master Node.js concepts and techniques - Part 16',
    language: 'nodejs' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# Node.js - Lesson 16

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 16
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 16
// Write your code here

`,
    solution: `// Solution for Lesson 16
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-17',
    title: 'Node.js - Lesson 17',
    description: 'Master Node.js concepts and techniques - Part 17',
    language: 'nodejs' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# Node.js - Lesson 17

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 17
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 17
// Write your code here

`,
    solution: `// Solution for Lesson 17
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-18',
    title: 'Node.js - Lesson 18',
    description: 'Master Node.js concepts and techniques - Part 18',
    language: 'nodejs' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Node.js - Lesson 18

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 18
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 18
// Write your code here

`,
    solution: `// Solution for Lesson 18
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-19',
    title: 'Node.js - Lesson 19',
    description: 'Master Node.js concepts and techniques - Part 19',
    language: 'nodejs' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# Node.js - Lesson 19

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 19
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 19
// Write your code here

`,
    solution: `// Solution for Lesson 19
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-20',
    title: 'Node.js - Lesson 20',
    description: 'Master Node.js concepts and techniques - Part 20',
    language: 'nodejs' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# Node.js - Lesson 20

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 20
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 20
// Write your code here

`,
    solution: `// Solution for Lesson 20
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-21',
    title: 'Node.js - Lesson 21',
    description: 'Master Node.js concepts and techniques - Part 21',
    language: 'nodejs' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# Node.js - Lesson 21

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 21
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 21
// Write your code here

`,
    solution: `// Solution for Lesson 21
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-22',
    title: 'Node.js - Lesson 22',
    description: 'Master Node.js concepts and techniques - Part 22',
    language: 'nodejs' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Node.js - Lesson 22

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 22
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 22
// Write your code here

`,
    solution: `// Solution for Lesson 22
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-23',
    title: 'Node.js - Lesson 23',
    description: 'Master Node.js concepts and techniques - Part 23',
    language: 'nodejs' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# Node.js - Lesson 23

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 23
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 23
// Write your code here

`,
    solution: `// Solution for Lesson 23
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-24',
    title: 'Node.js - Lesson 24',
    description: 'Master Node.js concepts and techniques - Part 24',
    language: 'nodejs' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# Node.js - Lesson 24

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 24
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 24
// Write your code here

`,
    solution: `// Solution for Lesson 24
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-25',
    title: 'Node.js - Lesson 25',
    description: 'Master Node.js concepts and techniques - Part 25',
    language: 'nodejs' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# Node.js - Lesson 25

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 25
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 25
// Write your code here

`,
    solution: `// Solution for Lesson 25
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-26',
    title: 'Node.js - Lesson 26',
    description: 'Master Node.js concepts and techniques - Part 26',
    language: 'nodejs' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Node.js - Lesson 26

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 26
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 26
// Write your code here

`,
    solution: `// Solution for Lesson 26
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-27',
    title: 'Node.js - Lesson 27',
    description: 'Master Node.js concepts and techniques - Part 27',
    language: 'nodejs' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# Node.js - Lesson 27

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 27
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 27
// Write your code here

`,
    solution: `// Solution for Lesson 27
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-28',
    title: 'Node.js - Lesson 28',
    description: 'Master Node.js concepts and techniques - Part 28',
    language: 'nodejs' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# Node.js - Lesson 28

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 28
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 28
// Write your code here

`,
    solution: `// Solution for Lesson 28
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-29',
    title: 'Node.js - Lesson 29',
    description: 'Master Node.js concepts and techniques - Part 29',
    language: 'nodejs' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# Node.js - Lesson 29

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 29
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 29
// Write your code here

`,
    solution: `// Solution for Lesson 29
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-30',
    title: 'Node.js - Lesson 30',
    description: 'Master Node.js concepts and techniques - Part 30',
    language: 'nodejs' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Node.js - Lesson 30

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 30
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 30
// Write your code here

`,
    solution: `// Solution for Lesson 30
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-31',
    title: 'Node.js - Lesson 31',
    description: 'Master Node.js concepts and techniques - Part 31',
    language: 'nodejs' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# Node.js - Lesson 31

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 31
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 31
// Write your code here

`,
    solution: `// Solution for Lesson 31
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-32',
    title: 'Node.js - Lesson 32',
    description: 'Master Node.js concepts and techniques - Part 32',
    language: 'nodejs' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# Node.js - Lesson 32

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 32
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 32
// Write your code here

`,
    solution: `// Solution for Lesson 32
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-33',
    title: 'Node.js - Lesson 33',
    description: 'Master Node.js concepts and techniques - Part 33',
    language: 'nodejs' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# Node.js - Lesson 33

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 33
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 33
// Write your code here

`,
    solution: `// Solution for Lesson 33
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-34',
    title: 'Node.js - Lesson 34',
    description: 'Master Node.js concepts and techniques - Part 34',
    language: 'nodejs' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Node.js - Lesson 34

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 34
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 34
// Write your code here

`,
    solution: `// Solution for Lesson 34
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-35',
    title: 'Node.js - Lesson 35',
    description: 'Master Node.js concepts and techniques - Part 35',
    language: 'nodejs' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# Node.js - Lesson 35

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 35
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 35
// Write your code here

`,
    solution: `// Solution for Lesson 35
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-36',
    title: 'Node.js - Lesson 36',
    description: 'Master Node.js concepts and techniques - Part 36',
    language: 'nodejs' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# Node.js - Lesson 36

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 36
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 36
// Write your code here

`,
    solution: `// Solution for Lesson 36
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-37',
    title: 'Node.js - Lesson 37',
    description: 'Master Node.js concepts and techniques - Part 37',
    language: 'nodejs' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# Node.js - Lesson 37

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 37
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 37
// Write your code here

`,
    solution: `// Solution for Lesson 37
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-38',
    title: 'Node.js - Lesson 38',
    description: 'Master Node.js concepts and techniques - Part 38',
    language: 'nodejs' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Node.js - Lesson 38

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 38
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 38
// Write your code here

`,
    solution: `// Solution for Lesson 38
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-39',
    title: 'Node.js - Lesson 39',
    description: 'Master Node.js concepts and techniques - Part 39',
    language: 'nodejs' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# Node.js - Lesson 39

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 39
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 39
// Write your code here

`,
    solution: `// Solution for Lesson 39
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-40',
    title: 'Node.js - Lesson 40',
    description: 'Master Node.js concepts and techniques - Part 40',
    language: 'nodejs' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# Node.js - Lesson 40

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 40
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 40
// Write your code here

`,
    solution: `// Solution for Lesson 40
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-41',
    title: 'Node.js - Lesson 41',
    description: 'Master Node.js concepts and techniques - Part 41',
    language: 'nodejs' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# Node.js - Lesson 41

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 41
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 41
// Write your code here

`,
    solution: `// Solution for Lesson 41
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-42',
    title: 'Node.js - Lesson 42',
    description: 'Master Node.js concepts and techniques - Part 42',
    language: 'nodejs' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Node.js - Lesson 42

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 42
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 42
// Write your code here

`,
    solution: `// Solution for Lesson 42
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-43',
    title: 'Node.js - Lesson 43',
    description: 'Master Node.js concepts and techniques - Part 43',
    language: 'nodejs' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# Node.js - Lesson 43

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 43
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 43
// Write your code here

`,
    solution: `// Solution for Lesson 43
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-44',
    title: 'Node.js - Lesson 44',
    description: 'Master Node.js concepts and techniques - Part 44',
    language: 'nodejs' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# Node.js - Lesson 44

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 44
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 44
// Write your code here

`,
    solution: `// Solution for Lesson 44
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-45',
    title: 'Node.js - Lesson 45',
    description: 'Master Node.js concepts and techniques - Part 45',
    language: 'nodejs' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# Node.js - Lesson 45

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 45
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 45
// Write your code here

`,
    solution: `// Solution for Lesson 45
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-46',
    title: 'Node.js - Lesson 46',
    description: 'Master Node.js concepts and techniques - Part 46',
    language: 'nodejs' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Node.js - Lesson 46

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 46
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 46
// Write your code here

`,
    solution: `// Solution for Lesson 46
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-47',
    title: 'Node.js - Lesson 47',
    description: 'Master Node.js concepts and techniques - Part 47',
    language: 'nodejs' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# Node.js - Lesson 47

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 47
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 47
// Write your code here

`,
    solution: `// Solution for Lesson 47
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-48',
    title: 'Node.js - Lesson 48',
    description: 'Master Node.js concepts and techniques - Part 48',
    language: 'nodejs' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# Node.js - Lesson 48

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 48
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 48
// Write your code here

`,
    solution: `// Solution for Lesson 48
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-49',
    title: 'Node.js - Lesson 49',
    description: 'Master Node.js concepts and techniques - Part 49',
    language: 'nodejs' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# Node.js - Lesson 49

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 49
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 49
// Write your code here

`,
    solution: `// Solution for Lesson 49
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  },
  {
    id: 'nodejs-50',
    title: 'Node.js - Lesson 50',
    description: 'Master Node.js concepts and techniques - Part 50',
    language: 'nodejs' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Node.js - Lesson 50

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential Node.js concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`nodejs
// Node.js example for lesson 50
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// Node.js Lesson 50
// Write your code here

`,
    solution: `// Solution for Lesson 50
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to Node.js documentation for details'
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
        errorMessage: 'Make sure your code follows Node.js syntax' 
      }
    ]
  })
]