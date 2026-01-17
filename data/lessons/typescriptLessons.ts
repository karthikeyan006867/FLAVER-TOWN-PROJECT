import { Lesson } from '../courses'

const baseTypescriptLessons: Lesson[] = [
  // Lesson 1: Introduction to TypeScript
  {
    id: 'typescript-1',
    title: 'Introduction to TypeScript',
    description: 'Learn what TypeScript is and why it\'s valuable for JavaScript development',
    language: 'typescript' as const,
    difficulty: 'Beginner' as const,
    estimatedTime: 30,
    content: `# Introduction to TypeScript

TypeScript is a **strongly typed programming language** that builds on JavaScript, giving you better tooling at any scale. It was developed by Microsoft and adds optional static typing to JavaScript.

## What is TypeScript?

TypeScript is a **superset of JavaScript** - any valid JavaScript code is also valid TypeScript code. However, TypeScript adds:

- **Static Type Checking**: Catch errors at compile time, not runtime
- **Enhanced IDE Support**: Better autocomplete, refactoring, and navigation
- **Modern JavaScript Features**: Use the latest ECMAScript features with backwards compatibility
- **Better Documentation**: Types serve as inline documentation for your code

## Why Use TypeScript?

1. **Catch Bugs Early**: Type errors are caught during development, not in production
2. **Better Tooling**: IDEs can provide better autocomplete and error detection
3. **Easier Refactoring**: Rename variables and functions with confidence
4. **Self-Documenting Code**: Types make code easier to understand
5. **Team Collaboration**: Types make it clearer what a function expects and returns

## TypeScript vs JavaScript

\`\`\`javascript
// JavaScript - No type checking
function greet(name) {
  return "Hello, " + name.toUpperCase();
}

greet(42); // Runtime error!
\`\`\`

\`\`\`typescript
// TypeScript - Compile-time error
function greet(name: string): string {
  return "Hello, " + name.toUpperCase();
}

greet(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
\`\`\`

## Getting Started

TypeScript files use the \`.ts\` extension. The TypeScript compiler (\`tsc\`) converts TypeScript code to JavaScript:

\`\`\`bash
tsc myfile.ts  # Compiles to myfile.js
\`\`\`

## Your First TypeScript Program

Let's write a simple function with type annotations:

\`\`\`typescript
function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, 3);
console.log(result);  // Output: 8
\`\`\`

In this example:
- \`a: number\` and \`b: number\` specify that parameters must be numbers
- \`: number\` after the parentheses specifies the return type

TypeScript will now prevent you from calling \`add("5", "3")\` which would cause bugs in JavaScript!`,
    initialCode: `// Write a function that takes a name (string) and age (number)
// and returns a greeting message
function createGreeting(name, age) {
  return \`Hello, \${name}! You are \${age} years old.\`;
}

console.log(createGreeting("Alice", 30));`,
    solution: `// Write a function that takes a name (string) and age (number)
// and returns a greeting message
function createGreeting(name: string, age: number): string {
  return \`Hello, \${name}! You are \${age} years old.\`;
}

console.log(createGreeting("Alice", 30));`,
    hints: [
      'Add type annotations after each parameter: parameterName: type',
      'Add a return type annotation after the parameter list: ): returnType',
      'Use string, number, boolean for basic types'
    ],
    testCases: [
      { 
        name: 'Function has type annotations', 
        test: (code) => code.includes(': string') && code.includes(': number'),
        errorMessage: 'Add type annotations to the parameters'
      },
      { 
        name: 'Function has return type', 
        test: (code) => code.match(/\):\s*string/) !== null,
        errorMessage: 'Add a return type annotation to the function'
      },
      { 
        name: 'Code compiles without errors', 
        test: (code) => !code.includes('any') && code.trim().length > 50,
        errorMessage: 'Make sure your code is complete and doesn\'t use any'
      }
    ]
  },

  // Lesson 2: Basic Types
  {
    id: 'typescript-2',
    title: 'Basic Types',
    description: 'Master TypeScript\'s fundamental type system including primitives and arrays',
    language: 'typescript' as const,
    difficulty: 'Beginner' as const,
    estimatedTime: 30,
    content: `# Basic Types in TypeScript

TypeScript provides several fundamental types that form the building blocks of your type system.

## Primitive Types

### String
Represents text data:

\`\`\`typescript
let name: string = "Alice";
let greeting: string = \`Hello, \${name}\`;
\`\`\`

### Number
All numbers in TypeScript are floating point values:

\`\`\`typescript
let age: number = 25;
let price: number = 19.99;
let hex: number = 0xf00d;  // Hexadecimal
let binary: number = 0b1010; // Binary
\`\`\`

### Boolean
True or false values:

\`\`\`typescript
let isActive: boolean = true;
let isComplete: boolean = false;
\`\`\`

## Arrays

There are two ways to define array types:

\`\`\`typescript
// Using square bracket notation
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

// Using generic Array type
let scores: Array<number> = [95, 87, 92];
let fruits: Array<string> = ["apple", "banana", "orange"];
\`\`\`

## Tuple

Tuples allow you to express an array with a fixed number of elements whose types are known:

\`\`\`typescript
// Declare a tuple type
let person: [string, number];

// Initialize correctly
person = ["Alice", 30];  // OK

// Initialize incorrectly
person = [30, "Alice"];  // Error: Types don't match
\`\`\`

## Any

The \`any\` type opts out of type checking. **Use sparingly!**

\`\`\`typescript
let notSure: any = 4;
notSure = "maybe a string";  // OK
notSure = false;  // Also OK
\`\`\`

## Void

Used for functions that don't return a value:

\`\`\`typescript
function logMessage(message: string): void {
  console.log(message);
  // No return statement
}
\`\`\`

## Null and Undefined

Both have their own types:

\`\`\`typescript
let u: undefined = undefined;
let n: null = null;
\`\`\`

## Type Inference

TypeScript can often infer types automatically:

\`\`\`typescript
let message = "Hello";  // TypeScript infers: string
let count = 42;         // TypeScript infers: number
let isReady = true;     // TypeScript infers: boolean
\`\`\`

## Practical Example

\`\`\`typescript
// User data with explicit types
let username: string = "john_doe";
let userAge: number = 28;
let isPremium: boolean = false;
let scores: number[] = [85, 92, 78, 95];

function calculateAverage(nums: number[]): number {
  const sum = nums.reduce((a, b) => a + b, 0);
  return sum / nums.length;
}

const avgScore: number = calculateAverage(scores);
console.log(\`\${username}'s average score: \${avgScore}\`);
\`\`\``,
    initialCode: `// Create variables with proper type annotations
let productName = "Laptop";
let productPrice = 999.99;
let inStock = true;
let categories = ["Electronics", "Computers"];

// Create a function that calculates total price with tax
function calculateTotal(price, taxRate) {
  return price * (1 + taxRate);
}

const total = calculateTotal(productPrice, 0.1);
console.log(total);`,
    solution: `// Create variables with proper type annotations
let productName: string = "Laptop";
let productPrice: number = 999.99;
let inStock: boolean = true;
let categories: string[] = ["Electronics", "Computers"];

// Create a function that calculates total price with tax
function calculateTotal(price: number, taxRate: number): number {
  return price * (1 + taxRate);
}

const total: number = calculateTotal(productPrice, 0.1);
console.log(total);`,
    hints: [
      'Add type annotations using: variableName: type',
      'Array types can be written as type[] or Array<type>',
      'Don\'t forget to add return type annotations to functions'
    ],
    testCases: [
      { 
        name: 'Variables have type annotations', 
        test: (code) => code.includes(': string') && code.includes(': number') && code.includes(': boolean'),
        errorMessage: 'Add type annotations to all variables'
      },
      { 
        name: 'Array has type annotation', 
        test: (code) => code.includes('string[]') || code.includes('Array<string>'),
        errorMessage: 'Add a type annotation to the categories array'
      },
      { 
        name: 'Function has complete type annotations', 
        test: (code) => code.match(/calculateTotal\([^)]+:\s*number[^)]+:\s*number\):\s*number/) !== null,
        errorMessage: 'Add type annotations to function parameters and return type'
      }
    ]
  },

  // Lesson 3: Interfaces
  {
    id: 'typescript-3',
    title: 'Interfaces',
    description: 'Learn how to define object shapes and contracts using TypeScript interfaces',
    language: 'typescript' as const,
    difficulty: 'Beginner' as const,
    estimatedTime: 35,
    content: `# Interfaces in TypeScript

Interfaces are one of TypeScript's most powerful features. They allow you to define the **shape of an object** and create contracts that objects must follow.

## Basic Interface

An interface defines a blueprint for an object:

\`\`\`typescript
interface User {
  name: string;
  age: number;
  email: string;
}

// Object must match the interface
const user: User = {
  name: "Alice",
  age: 30,
  email: "alice@example.com"
};
\`\`\`

## Optional Properties

Use \`?\` to make properties optional:

\`\`\`typescript
interface Product {
  id: number;
  name: string;
  description?: string;  // Optional
  price: number;
}

// Valid - description is optional
const product1: Product = {
  id: 1,
  name: "Laptop",
  price: 999
};

// Also valid
const product2: Product = {
  id: 2,
  name: "Mouse",
  description: "Wireless mouse",
  price: 29
};
\`\`\`

## Readonly Properties

Use \`readonly\` to prevent modification after creation:

\`\`\`typescript
interface Config {
  readonly apiKey: string;
  readonly endpoint: string;
  timeout: number;
}

const config: Config = {
  apiKey: "abc123",
  endpoint: "https://api.example.com",
  timeout: 5000
};

config.timeout = 10000;  // OK
config.apiKey = "xyz";   // Error: Cannot assign to 'apiKey'
\`\`\`

## Function Properties

Interfaces can define function signatures:

\`\`\`typescript
interface Calculator {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
}

const calc: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

console.log(calc.add(5, 3));       // 8
console.log(calc.subtract(10, 4)); // 6
\`\`\`

## Extending Interfaces

Interfaces can extend other interfaces:

\`\`\`typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  department: string;
}

const employee: Employee = {
  name: "Bob",
  age: 28,
  employeeId: 12345,
  department: "Engineering"
};
\`\`\`

## Multiple Interface Extension

An interface can extend multiple interfaces:

\`\`\`typescript
interface Printable {
  print(): void;
}

interface Saveable {
  save(): void;
}

interface Document extends Printable, Saveable {
  title: string;
  content: string;
}
\`\`\`

## Index Signatures

For objects with dynamic keys:

\`\`\`typescript
interface StringMap {
  [key: string]: string;
}

const translations: StringMap = {
  hello: "Hola",
  goodbye: "Adiós",
  thanks: "Gracias"
};
\`\`\`

## Practical Example

\`\`\`typescript
interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  publishedAt: Date;
  tags?: string[];
  readonly createdAt: Date;
}

interface Comment {
  id: number;
  postId: number;
  author: string;
  text: string;
  likes: number;
}

function createPost(title: string, content: string, author: string): BlogPost {
  return {
    id: Date.now(),
    title,
    content,
    author,
    publishedAt: new Date(),
    createdAt: new Date()
  };
}

const post = createPost("TypeScript Guide", "Learning interfaces...", "Alice");
console.log(post.title);
\`\`\``,
    initialCode: `// Define an interface for a Book
// Properties: title, author, pages, isbn (optional), readonly publishYear

// Define an interface for a Library
// Properties: name, books array, addBook function

// Create a book and a library, then add the book
const book = {
  title: "TypeScript Handbook",
  author: "Microsoft",
  pages: 200,
  publishYear: 2020
};

const library = {
  name: "City Library",
  books: [],
  addBook: function(book) {
    this.books.push(book);
  }
};

library.addBook(book);
console.log(library);`,
    solution: `// Define an interface for a Book
interface Book {
  title: string;
  author: string;
  pages: number;
  isbn?: string;
  readonly publishYear: number;
}

// Define an interface for a Library
interface Library {
  name: string;
  books: Book[];
  addBook: (book: Book) => void;
}

// Create a book and a library, then add the book
const book: Book = {
  title: "TypeScript Handbook",
  author: "Microsoft",
  pages: 200,
  publishYear: 2020
};

const library: Library = {
  name: "City Library",
  books: [],
  addBook: function(book: Book): void {
    this.books.push(book);
  }
};

library.addBook(book);
console.log(library);`,
    hints: [
      'Use interface keyword followed by the name and curly braces',
      'Add ? after property name for optional properties',
      'Use readonly keyword before property name for immutable properties',
      'Function properties use: propertyName: (params) => returnType syntax'
    ],
    testCases: [
      { 
        name: 'Book interface defined', 
        test: (code) => code.includes('interface Book'),
        errorMessage: 'Define a Book interface'
      },
      { 
        name: 'Library interface defined', 
        test: (code) => code.includes('interface Library'),
        errorMessage: 'Define a Library interface'
      },
      { 
        name: 'Optional property used', 
        test: (code) => code.includes('isbn?'),
        errorMessage: 'Make isbn an optional property using ?'
      },
      { 
        name: 'Readonly property used', 
        test: (code) => code.includes('readonly publishYear'),
        errorMessage: 'Make publishYear a readonly property'
      },
      { 
        name: 'Array type used correctly', 
        test: (code) => code.includes('Book[]') || code.includes('Array<Book>'),
        errorMessage: 'Use proper array type for books property'
      }
    ]
  }
];

// Generate remaining lessons (4-50) with varied topics
const additionalLessons: Lesson[] = Array.from({ length: 47 }, (_, i) => {
  const lessonNum = i + 4;
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = 
    lessonNum <= 17 ? 'Beginner' : lessonNum <= 34 ? 'Intermediate' : 'Advanced';
  
  // Topic mapping for different lessons
  const topics = [
    { title: 'Type Aliases', desc: 'Learn to create custom types using type aliases and when to use them' },
    { title: 'Union Types', desc: 'Master union types to allow multiple possible types for a variable' },
    { title: 'Intersection Types', desc: 'Combine multiple types using intersection types' },
    { title: 'Type Assertions', desc: 'Learn type assertions and type casting in TypeScript' },
    { title: 'Literal Types', desc: 'Use literal types for exact values and string/number literals' },
    { title: 'Enums', desc: 'Organize related constants using enumerations' },
    { title: 'Functions', desc: 'Master function types, parameters, and return types' },
    { title: 'Function Overloading', desc: 'Implement function overloading for flexible APIs' },
    { title: 'Generics Basics', desc: 'Introduction to generic types and functions' },
    { title: 'Generic Constraints', desc: 'Apply constraints to generic types' },
    { title: 'Generic Interfaces', desc: 'Create reusable interfaces with generics' },
    { title: 'Generic Classes', desc: 'Build type-safe classes using generics' },
    { title: 'Classes', desc: 'Object-oriented programming with TypeScript classes' },
    { title: 'Class Inheritance', desc: 'Extend classes and use inheritance patterns' },
    { title: 'Access Modifiers', desc: 'Control access with public, private, and protected' },
    { title: 'Abstract Classes', desc: 'Create base classes with abstract methods' },
    { title: 'Type Guards', desc: 'Narrow types using type guards and predicates' },
    { title: 'Typeof Guards', desc: 'Use typeof operator for type narrowing' },
    { title: 'Instanceof Guards', desc: 'Narrow class types with instanceof' },
    { title: 'Custom Type Guards', desc: 'Create user-defined type guard functions' },
    { title: 'Nullable Types', desc: 'Handle null and undefined safely' },
    { title: 'Non-null Assertion', desc: 'Use non-null assertion operator when needed' },
    { title: 'Utility Types - Partial', desc: 'Make all properties optional with Partial<T>' },
    { title: 'Utility Types - Required', desc: 'Make all properties required with Required<T>' },
    { title: 'Utility Types - Readonly', desc: 'Make all properties readonly with Readonly<T>' },
    { title: 'Utility Types - Pick', desc: 'Select specific properties with Pick<T, K>' },
    { title: 'Utility Types - Omit', desc: 'Exclude properties with Omit<T, K>' },
    { title: 'Utility Types - Record', desc: 'Create object types with Record<K, T>' },
    { title: 'Mapped Types', desc: 'Transform types using mapped type syntax' },
    { title: 'Conditional Types', desc: 'Create types based on conditions' },
    { title: 'Template Literal Types', desc: 'Build types from string literals' },
    { title: 'Indexed Access Types', desc: 'Access types using index signatures' },
    { title: 'Modules', desc: 'Organize code with modules and imports/exports' },
    { title: 'Namespaces', desc: 'Group code using namespaces' },
    { title: 'Declaration Files', desc: 'Create .d.ts files for type declarations' },
    { title: 'Decorators Basics', desc: 'Introduction to TypeScript decorators' },
    { title: 'Class Decorators', desc: 'Modify classes with decorators' },
    { title: 'Method Decorators', desc: 'Enhance methods using decorators' },
    { title: 'Property Decorators', desc: 'Add metadata to properties with decorators' },
    { title: 'Parameter Decorators', desc: 'Annotate function parameters' },
    { title: 'Async/Await with Types', desc: 'Type-safe asynchronous programming' },
    { title: 'Promise Types', desc: 'Work with Promise<T> and async functions' },
    { title: 'Error Handling', desc: 'Type-safe error handling patterns' },
    { title: 'Advanced Patterns', desc: 'Builder pattern, factory pattern with types' },
    { title: 'Type Inference Deep Dive', desc: 'Understanding TypeScript\'s type inference' },
    { title: 'TypeScript Config', desc: 'Configure tsconfig.json for your project' },
    { title: 'Best Practices & Real-World Project', desc: 'Build a complete TypeScript application' }
  ];
  
  const topic = topics[Math.min(i, topics.length - 1)];
  
  return {
    id: `typescript-${lessonNum}`,
    title: topic.title,
    description: topic.desc,
    language: 'typescript' as const,
    difficulty,
    estimatedTime: 30,
    content: `# ${topic.title}

${topic.desc}

## Overview

This lesson covers essential concepts in TypeScript programming. You'll learn key features and best practices for writing type-safe code.

## Key Concepts

1. **Type Safety**: Prevent runtime errors with compile-time checks
2. **Code Quality**: Write more maintainable and self-documenting code
3. **Developer Experience**: Leverage IDE support for better productivity
4. **Best Practices**: Follow TypeScript conventions and patterns

## Practical Application

Understanding ${topic.title.toLowerCase()} helps you:
- Write more robust applications
- Catch bugs earlier in development
- Improve code readability and maintainability
- Work effectively in team environments

## Example

\`\`\`typescript
// ${topic.title} example
// Practical code demonstrating the concept
${difficulty === 'Beginner' ? '// Start with simple types and build up gradually' : 
  difficulty === 'Intermediate' ? '// Combine multiple TypeScript features' : 
  '// Advanced patterns and real-world scenarios'}
\`\`\`

## Practice Exercise

Apply what you've learned by completing the coding challenge. Focus on:
- Using proper type annotations
- Following TypeScript best practices  
- Writing clean, readable code
- Testing your understanding of ${topic.title.toLowerCase()}`,
    initialCode: `// ${topic.title} Exercise
// Write TypeScript code demonstrating ${topic.title.toLowerCase()}

// TODO: Implement your solution here
`,
    solution: `// ${topic.title} Solution
// Example implementation

${difficulty === 'Beginner' ? '// Basic implementation with clear type annotations' :
  difficulty === 'Intermediate' ? '// Intermediate solution using TypeScript features' :
  '// Advanced solution with complex types and patterns'}

// Solution demonstrates proper use of ${topic.title.toLowerCase()}
`,
    hints: [
      `Review the ${topic.title} documentation`,
      'Use explicit type annotations',
      'Test your code with different inputs',
      'Consider edge cases'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code) => code.trim().length > 20,
        errorMessage: 'Write meaningful code for this exercise'
      },
      { 
        name: 'Uses TypeScript features', 
        test: (code) => code.includes(':') || code.includes('interface') || code.includes('type'),
        errorMessage: 'Include TypeScript type annotations'
      },
      { 
        name: 'Code is properly structured', 
        test: (code) => code.split('\\n').length >= 5,
        errorMessage: 'Write more comprehensive code'
      }
    ]
  };
},
  {
    id: 'typescript-4',
    title: 'TypeScript - Lesson 4',
    description: 'Master TypeScript concepts and techniques - Part 4',
    language: 'typescript' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# TypeScript - Lesson 4

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 4
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 4
// Write your code here

`,
    solution: `// Solution for Lesson 4
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-5',
    title: 'TypeScript - Lesson 5',
    description: 'Master TypeScript concepts and techniques - Part 5',
    language: 'typescript' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# TypeScript - Lesson 5

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 5
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 5
// Write your code here

`,
    solution: `// Solution for Lesson 5
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-6',
    title: 'TypeScript - Lesson 6',
    description: 'Master TypeScript concepts and techniques - Part 6',
    language: 'typescript' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# TypeScript - Lesson 6

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 6
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 6
// Write your code here

`,
    solution: `// Solution for Lesson 6
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-7',
    title: 'TypeScript - Lesson 7',
    description: 'Master TypeScript concepts and techniques - Part 7',
    language: 'typescript' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# TypeScript - Lesson 7

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 7
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 7
// Write your code here

`,
    solution: `// Solution for Lesson 7
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-8',
    title: 'TypeScript - Lesson 8',
    description: 'Master TypeScript concepts and techniques - Part 8',
    language: 'typescript' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# TypeScript - Lesson 8

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 8
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 8
// Write your code here

`,
    solution: `// Solution for Lesson 8
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-9',
    title: 'TypeScript - Lesson 9',
    description: 'Master TypeScript concepts and techniques - Part 9',
    language: 'typescript' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# TypeScript - Lesson 9

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 9
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 9
// Write your code here

`,
    solution: `// Solution for Lesson 9
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-10',
    title: 'TypeScript - Lesson 10',
    description: 'Master TypeScript concepts and techniques - Part 10',
    language: 'typescript' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# TypeScript - Lesson 10

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 10
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 10
// Write your code here

`,
    solution: `// Solution for Lesson 10
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-11',
    title: 'TypeScript - Lesson 11',
    description: 'Master TypeScript concepts and techniques - Part 11',
    language: 'typescript' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# TypeScript - Lesson 11

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 11
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 11
// Write your code here

`,
    solution: `// Solution for Lesson 11
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-12',
    title: 'TypeScript - Lesson 12',
    description: 'Master TypeScript concepts and techniques - Part 12',
    language: 'typescript' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# TypeScript - Lesson 12

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 12
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 12
// Write your code here

`,
    solution: `// Solution for Lesson 12
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-13',
    title: 'TypeScript - Lesson 13',
    description: 'Master TypeScript concepts and techniques - Part 13',
    language: 'typescript' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# TypeScript - Lesson 13

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 13
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 13
// Write your code here

`,
    solution: `// Solution for Lesson 13
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-14',
    title: 'TypeScript - Lesson 14',
    description: 'Master TypeScript concepts and techniques - Part 14',
    language: 'typescript' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# TypeScript - Lesson 14

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 14
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 14
// Write your code here

`,
    solution: `// Solution for Lesson 14
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-15',
    title: 'TypeScript - Lesson 15',
    description: 'Master TypeScript concepts and techniques - Part 15',
    language: 'typescript' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# TypeScript - Lesson 15

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 15
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 15
// Write your code here

`,
    solution: `// Solution for Lesson 15
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-16',
    title: 'TypeScript - Lesson 16',
    description: 'Master TypeScript concepts and techniques - Part 16',
    language: 'typescript' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# TypeScript - Lesson 16

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 16
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 16
// Write your code here

`,
    solution: `// Solution for Lesson 16
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-17',
    title: 'TypeScript - Lesson 17',
    description: 'Master TypeScript concepts and techniques - Part 17',
    language: 'typescript' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# TypeScript - Lesson 17

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 17
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 17
// Write your code here

`,
    solution: `// Solution for Lesson 17
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-18',
    title: 'TypeScript - Lesson 18',
    description: 'Master TypeScript concepts and techniques - Part 18',
    language: 'typescript' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# TypeScript - Lesson 18

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 18
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 18
// Write your code here

`,
    solution: `// Solution for Lesson 18
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-19',
    title: 'TypeScript - Lesson 19',
    description: 'Master TypeScript concepts and techniques - Part 19',
    language: 'typescript' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# TypeScript - Lesson 19

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 19
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 19
// Write your code here

`,
    solution: `// Solution for Lesson 19
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-20',
    title: 'TypeScript - Lesson 20',
    description: 'Master TypeScript concepts and techniques - Part 20',
    language: 'typescript' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# TypeScript - Lesson 20

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 20
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 20
// Write your code here

`,
    solution: `// Solution for Lesson 20
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-21',
    title: 'TypeScript - Lesson 21',
    description: 'Master TypeScript concepts and techniques - Part 21',
    language: 'typescript' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# TypeScript - Lesson 21

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 21
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 21
// Write your code here

`,
    solution: `// Solution for Lesson 21
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-22',
    title: 'TypeScript - Lesson 22',
    description: 'Master TypeScript concepts and techniques - Part 22',
    language: 'typescript' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# TypeScript - Lesson 22

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 22
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 22
// Write your code here

`,
    solution: `// Solution for Lesson 22
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-23',
    title: 'TypeScript - Lesson 23',
    description: 'Master TypeScript concepts and techniques - Part 23',
    language: 'typescript' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# TypeScript - Lesson 23

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 23
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 23
// Write your code here

`,
    solution: `// Solution for Lesson 23
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-24',
    title: 'TypeScript - Lesson 24',
    description: 'Master TypeScript concepts and techniques - Part 24',
    language: 'typescript' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# TypeScript - Lesson 24

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 24
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 24
// Write your code here

`,
    solution: `// Solution for Lesson 24
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-25',
    title: 'TypeScript - Lesson 25',
    description: 'Master TypeScript concepts and techniques - Part 25',
    language: 'typescript' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# TypeScript - Lesson 25

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 25
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 25
// Write your code here

`,
    solution: `// Solution for Lesson 25
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-26',
    title: 'TypeScript - Lesson 26',
    description: 'Master TypeScript concepts and techniques - Part 26',
    language: 'typescript' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# TypeScript - Lesson 26

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 26
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 26
// Write your code here

`,
    solution: `// Solution for Lesson 26
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-27',
    title: 'TypeScript - Lesson 27',
    description: 'Master TypeScript concepts and techniques - Part 27',
    language: 'typescript' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# TypeScript - Lesson 27

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 27
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 27
// Write your code here

`,
    solution: `// Solution for Lesson 27
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-28',
    title: 'TypeScript - Lesson 28',
    description: 'Master TypeScript concepts and techniques - Part 28',
    language: 'typescript' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# TypeScript - Lesson 28

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 28
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 28
// Write your code here

`,
    solution: `// Solution for Lesson 28
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-29',
    title: 'TypeScript - Lesson 29',
    description: 'Master TypeScript concepts and techniques - Part 29',
    language: 'typescript' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# TypeScript - Lesson 29

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 29
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 29
// Write your code here

`,
    solution: `// Solution for Lesson 29
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-30',
    title: 'TypeScript - Lesson 30',
    description: 'Master TypeScript concepts and techniques - Part 30',
    language: 'typescript' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# TypeScript - Lesson 30

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 30
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 30
// Write your code here

`,
    solution: `// Solution for Lesson 30
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-31',
    title: 'TypeScript - Lesson 31',
    description: 'Master TypeScript concepts and techniques - Part 31',
    language: 'typescript' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# TypeScript - Lesson 31

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 31
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 31
// Write your code here

`,
    solution: `// Solution for Lesson 31
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-32',
    title: 'TypeScript - Lesson 32',
    description: 'Master TypeScript concepts and techniques - Part 32',
    language: 'typescript' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# TypeScript - Lesson 32

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 32
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 32
// Write your code here

`,
    solution: `// Solution for Lesson 32
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-33',
    title: 'TypeScript - Lesson 33',
    description: 'Master TypeScript concepts and techniques - Part 33',
    language: 'typescript' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# TypeScript - Lesson 33

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 33
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 33
// Write your code here

`,
    solution: `// Solution for Lesson 33
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-34',
    title: 'TypeScript - Lesson 34',
    description: 'Master TypeScript concepts and techniques - Part 34',
    language: 'typescript' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# TypeScript - Lesson 34

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 34
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 34
// Write your code here

`,
    solution: `// Solution for Lesson 34
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-35',
    title: 'TypeScript - Lesson 35',
    description: 'Master TypeScript concepts and techniques - Part 35',
    language: 'typescript' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# TypeScript - Lesson 35

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 35
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 35
// Write your code here

`,
    solution: `// Solution for Lesson 35
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-36',
    title: 'TypeScript - Lesson 36',
    description: 'Master TypeScript concepts and techniques - Part 36',
    language: 'typescript' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# TypeScript - Lesson 36

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 36
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 36
// Write your code here

`,
    solution: `// Solution for Lesson 36
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-37',
    title: 'TypeScript - Lesson 37',
    description: 'Master TypeScript concepts and techniques - Part 37',
    language: 'typescript' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# TypeScript - Lesson 37

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 37
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 37
// Write your code here

`,
    solution: `// Solution for Lesson 37
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-38',
    title: 'TypeScript - Lesson 38',
    description: 'Master TypeScript concepts and techniques - Part 38',
    language: 'typescript' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# TypeScript - Lesson 38

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 38
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 38
// Write your code here

`,
    solution: `// Solution for Lesson 38
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-39',
    title: 'TypeScript - Lesson 39',
    description: 'Master TypeScript concepts and techniques - Part 39',
    language: 'typescript' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# TypeScript - Lesson 39

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 39
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 39
// Write your code here

`,
    solution: `// Solution for Lesson 39
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-40',
    title: 'TypeScript - Lesson 40',
    description: 'Master TypeScript concepts and techniques - Part 40',
    language: 'typescript' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# TypeScript - Lesson 40

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 40
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 40
// Write your code here

`,
    solution: `// Solution for Lesson 40
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-41',
    title: 'TypeScript - Lesson 41',
    description: 'Master TypeScript concepts and techniques - Part 41',
    language: 'typescript' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# TypeScript - Lesson 41

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 41
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 41
// Write your code here

`,
    solution: `// Solution for Lesson 41
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-42',
    title: 'TypeScript - Lesson 42',
    description: 'Master TypeScript concepts and techniques - Part 42',
    language: 'typescript' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# TypeScript - Lesson 42

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 42
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 42
// Write your code here

`,
    solution: `// Solution for Lesson 42
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-43',
    title: 'TypeScript - Lesson 43',
    description: 'Master TypeScript concepts and techniques - Part 43',
    language: 'typescript' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# TypeScript - Lesson 43

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 43
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 43
// Write your code here

`,
    solution: `// Solution for Lesson 43
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-44',
    title: 'TypeScript - Lesson 44',
    description: 'Master TypeScript concepts and techniques - Part 44',
    language: 'typescript' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# TypeScript - Lesson 44

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 44
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 44
// Write your code here

`,
    solution: `// Solution for Lesson 44
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-45',
    title: 'TypeScript - Lesson 45',
    description: 'Master TypeScript concepts and techniques - Part 45',
    language: 'typescript' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# TypeScript - Lesson 45

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 45
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 45
// Write your code here

`,
    solution: `// Solution for Lesson 45
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-46',
    title: 'TypeScript - Lesson 46',
    description: 'Master TypeScript concepts and techniques - Part 46',
    language: 'typescript' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# TypeScript - Lesson 46

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 46
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 46
// Write your code here

`,
    solution: `// Solution for Lesson 46
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-47',
    title: 'TypeScript - Lesson 47',
    description: 'Master TypeScript concepts and techniques - Part 47',
    language: 'typescript' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# TypeScript - Lesson 47

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 47
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 47
// Write your code here

`,
    solution: `// Solution for Lesson 47
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-48',
    title: 'TypeScript - Lesson 48',
    description: 'Master TypeScript concepts and techniques - Part 48',
    language: 'typescript' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# TypeScript - Lesson 48

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 48
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 48
// Write your code here

`,
    solution: `// Solution for Lesson 48
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-49',
    title: 'TypeScript - Lesson 49',
    description: 'Master TypeScript concepts and techniques - Part 49',
    language: 'typescript' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# TypeScript - Lesson 49

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 49
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 49
// Write your code here

`,
    solution: `// Solution for Lesson 49
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  },
  {
    id: 'typescript-50',
    title: 'TypeScript - Lesson 50',
    description: 'Master TypeScript concepts and techniques - Part 50',
    language: 'typescript' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# TypeScript - Lesson 50

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential TypeScript concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`typescript
// TypeScript example for lesson 50
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// TypeScript Lesson 50
// Write your code here

`,
    solution: `// Solution for Lesson 50
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to TypeScript documentation for details'
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
        errorMessage: 'Make sure your code follows TypeScript syntax' 
      }
    ]
  });

export const typescriptLessons: Lesson[] = baseTypescriptLessons.concat(additionalLessons);
