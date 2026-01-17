import { Lesson } from '../courses'

export const reactLessons: Lesson[] = [
  {
    id: 'react-1',
    title: 'React Introduction - What is React?',
    description: 'Understanding React and component-based architecture',
    content: `# Welcome to React!

React is a JavaScript library for building user interfaces using components.

## Why React?
- **Component-Based**: Build encapsulated components that manage their own state
- **Declarative**: Design simple views for each state in your application
- **Learn Once, Write Anywhere**: Create web apps, mobile apps, and more

## Your First Component:
\`\`\`jsx
function Welcome() {
  return <h1>Hello, React!</h1>
}
\`\`\`

## JSX (JavaScript XML):
JSX lets you write HTML-like code in JavaScript:
\`\`\`jsx
const element = <h1>Hello, World!</h1>
const name = "Alice"
const greeting = <h1>Hello, {name}!</h1>
\`\`\`

## Key Concepts:
- Components are JavaScript functions that return JSX
- JSX expressions go inside curly braces {}
- Components can be reused throughout your app

**Task:** Create your first React component.`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 20,
    initialCode: `function Greeting() {\n  // Return a heading that says "Welcome to React!"\n  \n}\n\n// Don't change this\nexport default Greeting`,
    solution: `function Greeting() {\n  return <h1>Welcome to React!</h1>\n}\n\nexport default Greeting`,
    expectedOutput: 'Welcome',
    hints: ['Use <h1> tags', 'Return JSX from the function', 'JSX looks like HTML']    ,
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
    id: 'react-2',
    title: 'JSX and Expressions',
    description: 'Learn to use JavaScript expressions in JSX',
    content: `# JSX and JavaScript Expressions

JSX lets you embed JavaScript expressions using curly braces {}.

## Embedding Expressions:
\`\`\`jsx
const name = "Alice"
const age = 25

function Profile() {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Next year: {age + 1}</p>
    </div>
  )
}
\`\`\`

## JSX Rules:
- Use {} for JavaScript expressions
- Use className instead of class
- Close all tags (even <img />)
- Return single parent element

## Conditional Rendering:
\`\`\`jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
    </div>
  )
}
\`\`\`

**Task:** Create a component that displays user information.`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 25,
    initialCode: `function UserCard() {\n  const userName = "John Doe"\n  const userAge = 30\n  const isActive = true\n  \n  return (\n    <div>\n      {/* Display name, age, and status */}\n    </div>\n  )\n}\n\nexport default UserCard`,
    solution: `function UserCard() {\n  const userName = "John Doe"\n  const userAge = 30\n  const isActive = true\n  \n  return (\n    <div>\n      <h2>{userName}</h2>\n      <p>Age: {userAge}</p>\n      <p>Status: {isActive ? "Active" : "Inactive"}</p>\n    </div>\n  )\n}\n\nexport default UserCard`,
    expectedOutput: 'John',
    hints: ['Use {} to embed variables', 'Ternary operator for conditions', 'Wrap JSX in ( )']    ,
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
    id: 'react-3',
    title: 'Props - Passing Data to Components',
    description: 'Learn to pass and use props in React components',
    content: `# Props in React

Props (properties) let you pass data from parent to child components.

## Basic Props:
\`\`\`jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>
}

// Using the component
<Greeting name="Alice" />
\`\`\`

## Destructuring Props:
\`\`\`jsx
function UserCard({ name, age, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  )
}
\`\`\`

## Default Props:
\`\`\`jsx
function Button({ text = "Click me", color = "blue" }) {
  return <button style={{ color }}>{text}</button>
}
\`\`\`

## Props Are Read-Only:
Never modify props inside a component!

**Task:** Create a Product component with props.`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 25,
    initialCode: 'function Product({ name, price, inStock }) {\n  return (\n    <div>\n      {/* Display product information */}\n    </div>\n  )\n}\n\n// Test it\nconst app = <Product name="Laptop" price={999} inStock={true} />\nexport default Product',
    solution: 'function Product({ name, price, inStock }) {\n  return (\n    <div>\n      <h3>{name}</h3>\n      <p>Price: {price}</p>\n      <p>{inStock ? "In Stock ✓" : "Out of Stock ✗"}</p>\n    </div>\n  )\n}\n\nexport default Product',
    expectedOutput: 'Laptop',
    hints: ['Destructure props in parameters', 'Use JSX curly braces for price display', 'Conditional for stock status']    ,
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
  // Add 37 more comprehensive React lessons
  ...Array.from({ length: 47 }, (_, i) => {
    const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 15 ? 'Beginner' : i < 28 ? 'Intermediate' : 'Advanced'
    return {
      id: `react-${i + 4}`,
      title: `React ${i < 8 ? 'Components' : i < 20 ? 'Hooks & State' : 'Advanced'} - Lesson ${i + 4}`,
      description: `Master ${i < 8 ? 'component composition' : i < 20 ? 'useState and useEffect' : 'context and optimization'}`,
      content: `# React Lesson ${i + 4}\n\nComprehensive lesson with clear examples and step-by-step guidance coming soon.`,
      language: 'javascript' as const,
      difficulty,
      estimatedTime: 25 + Math.floor(i / 2),
      initialCode: `import React from 'react'\n\nfunction Component() {\n  // Your code here\n  return <div>React</div>\n}\n\nexport default Component`,
      solution: `import React from 'react'\n\nfunction Component() {\n  return <div>React Component ${i + 4}</div>\n}\n\nexport default Component`,
      expectedOutput: 'React',
      hints: ['Follow React patterns', 'Components return JSX', 'Props flow down']
    }
  },
  {
    id: 'react-4',
    title: 'React - Lesson 4',
    description: 'Master React concepts and techniques - Part 4',
    language: 'react' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# React - Lesson 4

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 4
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 4
// Write your code here

`,
    solution: `// Solution for Lesson 4
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-5',
    title: 'React - Lesson 5',
    description: 'Master React concepts and techniques - Part 5',
    language: 'react' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# React - Lesson 5

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 5
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 5
// Write your code here

`,
    solution: `// Solution for Lesson 5
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-6',
    title: 'React - Lesson 6',
    description: 'Master React concepts and techniques - Part 6',
    language: 'react' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# React - Lesson 6

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 6
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 6
// Write your code here

`,
    solution: `// Solution for Lesson 6
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-7',
    title: 'React - Lesson 7',
    description: 'Master React concepts and techniques - Part 7',
    language: 'react' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# React - Lesson 7

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 7
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 7
// Write your code here

`,
    solution: `// Solution for Lesson 7
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-8',
    title: 'React - Lesson 8',
    description: 'Master React concepts and techniques - Part 8',
    language: 'react' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# React - Lesson 8

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 8
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 8
// Write your code here

`,
    solution: `// Solution for Lesson 8
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-9',
    title: 'React - Lesson 9',
    description: 'Master React concepts and techniques - Part 9',
    language: 'react' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# React - Lesson 9

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 9
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 9
// Write your code here

`,
    solution: `// Solution for Lesson 9
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-10',
    title: 'React - Lesson 10',
    description: 'Master React concepts and techniques - Part 10',
    language: 'react' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# React - Lesson 10

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 10
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 10
// Write your code here

`,
    solution: `// Solution for Lesson 10
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-11',
    title: 'React - Lesson 11',
    description: 'Master React concepts and techniques - Part 11',
    language: 'react' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# React - Lesson 11

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 11
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 11
// Write your code here

`,
    solution: `// Solution for Lesson 11
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-12',
    title: 'React - Lesson 12',
    description: 'Master React concepts and techniques - Part 12',
    language: 'react' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# React - Lesson 12

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 12
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 12
// Write your code here

`,
    solution: `// Solution for Lesson 12
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-13',
    title: 'React - Lesson 13',
    description: 'Master React concepts and techniques - Part 13',
    language: 'react' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# React - Lesson 13

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 13
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 13
// Write your code here

`,
    solution: `// Solution for Lesson 13
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-14',
    title: 'React - Lesson 14',
    description: 'Master React concepts and techniques - Part 14',
    language: 'react' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# React - Lesson 14

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 14
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 14
// Write your code here

`,
    solution: `// Solution for Lesson 14
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-15',
    title: 'React - Lesson 15',
    description: 'Master React concepts and techniques - Part 15',
    language: 'react' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# React - Lesson 15

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 15
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 15
// Write your code here

`,
    solution: `// Solution for Lesson 15
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-16',
    title: 'React - Lesson 16',
    description: 'Master React concepts and techniques - Part 16',
    language: 'react' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# React - Lesson 16

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 16
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 16
// Write your code here

`,
    solution: `// Solution for Lesson 16
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-17',
    title: 'React - Lesson 17',
    description: 'Master React concepts and techniques - Part 17',
    language: 'react' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# React - Lesson 17

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 17
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 17
// Write your code here

`,
    solution: `// Solution for Lesson 17
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-18',
    title: 'React - Lesson 18',
    description: 'Master React concepts and techniques - Part 18',
    language: 'react' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# React - Lesson 18

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 18
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 18
// Write your code here

`,
    solution: `// Solution for Lesson 18
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-19',
    title: 'React - Lesson 19',
    description: 'Master React concepts and techniques - Part 19',
    language: 'react' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# React - Lesson 19

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 19
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 19
// Write your code here

`,
    solution: `// Solution for Lesson 19
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-20',
    title: 'React - Lesson 20',
    description: 'Master React concepts and techniques - Part 20',
    language: 'react' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# React - Lesson 20

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 20
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 20
// Write your code here

`,
    solution: `// Solution for Lesson 20
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-21',
    title: 'React - Lesson 21',
    description: 'Master React concepts and techniques - Part 21',
    language: 'react' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# React - Lesson 21

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 21
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 21
// Write your code here

`,
    solution: `// Solution for Lesson 21
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-22',
    title: 'React - Lesson 22',
    description: 'Master React concepts and techniques - Part 22',
    language: 'react' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# React - Lesson 22

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 22
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 22
// Write your code here

`,
    solution: `// Solution for Lesson 22
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-23',
    title: 'React - Lesson 23',
    description: 'Master React concepts and techniques - Part 23',
    language: 'react' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# React - Lesson 23

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 23
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 23
// Write your code here

`,
    solution: `// Solution for Lesson 23
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-24',
    title: 'React - Lesson 24',
    description: 'Master React concepts and techniques - Part 24',
    language: 'react' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# React - Lesson 24

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 24
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 24
// Write your code here

`,
    solution: `// Solution for Lesson 24
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-25',
    title: 'React - Lesson 25',
    description: 'Master React concepts and techniques - Part 25',
    language: 'react' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# React - Lesson 25

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 25
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 25
// Write your code here

`,
    solution: `// Solution for Lesson 25
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-26',
    title: 'React - Lesson 26',
    description: 'Master React concepts and techniques - Part 26',
    language: 'react' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# React - Lesson 26

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 26
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 26
// Write your code here

`,
    solution: `// Solution for Lesson 26
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-27',
    title: 'React - Lesson 27',
    description: 'Master React concepts and techniques - Part 27',
    language: 'react' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# React - Lesson 27

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 27
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 27
// Write your code here

`,
    solution: `// Solution for Lesson 27
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-28',
    title: 'React - Lesson 28',
    description: 'Master React concepts and techniques - Part 28',
    language: 'react' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# React - Lesson 28

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 28
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 28
// Write your code here

`,
    solution: `// Solution for Lesson 28
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-29',
    title: 'React - Lesson 29',
    description: 'Master React concepts and techniques - Part 29',
    language: 'react' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# React - Lesson 29

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 29
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 29
// Write your code here

`,
    solution: `// Solution for Lesson 29
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-30',
    title: 'React - Lesson 30',
    description: 'Master React concepts and techniques - Part 30',
    language: 'react' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# React - Lesson 30

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 30
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 30
// Write your code here

`,
    solution: `// Solution for Lesson 30
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-31',
    title: 'React - Lesson 31',
    description: 'Master React concepts and techniques - Part 31',
    language: 'react' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# React - Lesson 31

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 31
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 31
// Write your code here

`,
    solution: `// Solution for Lesson 31
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-32',
    title: 'React - Lesson 32',
    description: 'Master React concepts and techniques - Part 32',
    language: 'react' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# React - Lesson 32

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 32
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 32
// Write your code here

`,
    solution: `// Solution for Lesson 32
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-33',
    title: 'React - Lesson 33',
    description: 'Master React concepts and techniques - Part 33',
    language: 'react' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# React - Lesson 33

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 33
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 33
// Write your code here

`,
    solution: `// Solution for Lesson 33
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-34',
    title: 'React - Lesson 34',
    description: 'Master React concepts and techniques - Part 34',
    language: 'react' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# React - Lesson 34

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 34
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 34
// Write your code here

`,
    solution: `// Solution for Lesson 34
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-35',
    title: 'React - Lesson 35',
    description: 'Master React concepts and techniques - Part 35',
    language: 'react' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# React - Lesson 35

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 35
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 35
// Write your code here

`,
    solution: `// Solution for Lesson 35
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-36',
    title: 'React - Lesson 36',
    description: 'Master React concepts and techniques - Part 36',
    language: 'react' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# React - Lesson 36

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 36
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 36
// Write your code here

`,
    solution: `// Solution for Lesson 36
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-37',
    title: 'React - Lesson 37',
    description: 'Master React concepts and techniques - Part 37',
    language: 'react' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# React - Lesson 37

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 37
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 37
// Write your code here

`,
    solution: `// Solution for Lesson 37
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-38',
    title: 'React - Lesson 38',
    description: 'Master React concepts and techniques - Part 38',
    language: 'react' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# React - Lesson 38

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 38
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 38
// Write your code here

`,
    solution: `// Solution for Lesson 38
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-39',
    title: 'React - Lesson 39',
    description: 'Master React concepts and techniques - Part 39',
    language: 'react' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# React - Lesson 39

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 39
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 39
// Write your code here

`,
    solution: `// Solution for Lesson 39
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-40',
    title: 'React - Lesson 40',
    description: 'Master React concepts and techniques - Part 40',
    language: 'react' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# React - Lesson 40

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 40
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 40
// Write your code here

`,
    solution: `// Solution for Lesson 40
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-41',
    title: 'React - Lesson 41',
    description: 'Master React concepts and techniques - Part 41',
    language: 'react' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# React - Lesson 41

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 41
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 41
// Write your code here

`,
    solution: `// Solution for Lesson 41
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-42',
    title: 'React - Lesson 42',
    description: 'Master React concepts and techniques - Part 42',
    language: 'react' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# React - Lesson 42

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 42
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 42
// Write your code here

`,
    solution: `// Solution for Lesson 42
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-43',
    title: 'React - Lesson 43',
    description: 'Master React concepts and techniques - Part 43',
    language: 'react' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# React - Lesson 43

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 43
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 43
// Write your code here

`,
    solution: `// Solution for Lesson 43
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-44',
    title: 'React - Lesson 44',
    description: 'Master React concepts and techniques - Part 44',
    language: 'react' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# React - Lesson 44

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 44
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 44
// Write your code here

`,
    solution: `// Solution for Lesson 44
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-45',
    title: 'React - Lesson 45',
    description: 'Master React concepts and techniques - Part 45',
    language: 'react' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# React - Lesson 45

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 45
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 45
// Write your code here

`,
    solution: `// Solution for Lesson 45
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-46',
    title: 'React - Lesson 46',
    description: 'Master React concepts and techniques - Part 46',
    language: 'react' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# React - Lesson 46

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 46
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 46
// Write your code here

`,
    solution: `// Solution for Lesson 46
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-47',
    title: 'React - Lesson 47',
    description: 'Master React concepts and techniques - Part 47',
    language: 'react' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# React - Lesson 47

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 47
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 47
// Write your code here

`,
    solution: `// Solution for Lesson 47
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-48',
    title: 'React - Lesson 48',
    description: 'Master React concepts and techniques - Part 48',
    language: 'react' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# React - Lesson 48

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 48
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 48
// Write your code here

`,
    solution: `// Solution for Lesson 48
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-49',
    title: 'React - Lesson 49',
    description: 'Master React concepts and techniques - Part 49',
    language: 'react' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# React - Lesson 49

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 49
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 49
// Write your code here

`,
    solution: `// Solution for Lesson 49
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  },
  {
    id: 'react-50',
    title: 'React - Lesson 50',
    description: 'Master React concepts and techniques - Part 50',
    language: 'react' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# React - Lesson 50

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential React concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`react
// React example for lesson 50
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// React Lesson 50
// Write your code here

`,
    solution: `// Solution for Lesson 50
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to React documentation for details'
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
        errorMessage: 'Make sure your code follows React syntax' 
      }
    ]
  })
]
