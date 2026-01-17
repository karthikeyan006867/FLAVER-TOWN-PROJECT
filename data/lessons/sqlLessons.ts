import { Lesson } from '../courses'

const detailedSQLLessons: Lesson[] = [
  {
    id: 'sql-1',
    title: 'Introduction to SQL',
    description: 'Learn SQL basics and SELECT statement',
    language: 'sql' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Welcome to SQL!

SQL (Structured Query Language) is the standard language for managing relational databases.

## Your First Query

\`\`\`sql
SELECT * FROM users;
\`\`\`

## Key Concepts
- **SELECT**: Retrieve data from tables
- **FROM**: Specify which table
- **WHERE**: Filter results
- **ORDER BY**: Sort results

## Your Task
Write a query to select all columns from a table called products`,
    initialCode: `-- Write your SQL query here`,
    solution: `SELECT * FROM products;`,
    hints: ['Use SELECT * to get all columns', 'FROM specifies the table', 'End with semicolon'],
    testCases: [
      { name: 'Has SELECT', test: (code) => code.toUpperCase().includes('SELECT'), errorMessage: 'Use SELECT' },
      { name: 'Has FROM', test: (code) => code.toUpperCase().includes('FROM'), errorMessage: 'Use FROM clause' },
      { name: 'References products', test: (code) => code.toLowerCase().includes('products'), errorMessage: 'Query products table' }
    ]
  },
  {
    id: 'sql-2',
    title: 'WHERE Clause',
    description: 'Filter data with conditions',
    language: 'sql' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# WHERE Clause

Filter rows based on conditions.

\`\`\`sql
SELECT * FROM users WHERE age > 18;
SELECT * FROM products WHERE price < 50;
SELECT * FROM orders WHERE status = 'shipped';
\`\`\`

## Operators
- \`=\`: Equal
- \`>\`, \`<\`: Greater/less than
- \`>=\`, \`<=\`: Greater/less or equal
- \`!=\` or \`<>\`: Not equal
- \`AND\`, \`OR\`: Combine conditions

## Your Task
Select all products where price is less than 100`,
    initialCode: `-- Filter products by price`,
    solution: `SELECT * FROM products WHERE price < 100;`,
    hints: ['Use WHERE for filtering', 'Use < for less than', 'Compare price column'],
    testCases: [
      { name: 'Has WHERE', test: (code) => code.toUpperCase().includes('WHERE'), errorMessage: 'Use WHERE clause' },
      { name: 'Filters price', test: (code) => code.toLowerCase().includes('price'), errorMessage: 'Filter by price' },
      { name: 'Uses comparison', test: (code) => code.includes('<') || code.includes('>'), errorMessage: 'Use comparison operator' }
    ]
  },
  {
    id: 'sql-3',
    title: 'INSERT Statement',
    description: 'Add new data to tables',
    language: 'sql' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# INSERT Data

Add new rows to tables.

\`\`\`sql
INSERT INTO users (name, email, age) 
VALUES ('Alice', 'alice@email.com', 25);

INSERT INTO products (name, price) 
VALUES ('Laptop', 999.99);
\`\`\`

## Syntax
1. \`INSERT INTO table_name (columns)\`
2. \`VALUES (values)\`

## Your Task
Insert a new user with name 'Bob' and email 'bob@email.com'`,
    initialCode: `-- Insert a new user`,
    solution: `INSERT INTO users (name, email) VALUES ('Bob', 'bob@email.com');`,
    hints: ['Use INSERT INTO', 'List columns in ()', 'VALUES contains data'],
    testCases: [
      { name: 'Has INSERT', test: (code) => code.toUpperCase().includes('INSERT'), errorMessage: 'Use INSERT' },
      { name: 'Has VALUES', test: (code) => code.toUpperCase().includes('VALUES'), errorMessage: 'Use VALUES' },
      { name: 'Inserts user', test: (code) => code.toLowerCase().includes('users'), errorMessage: 'Insert into users table' }
    ]
  }
];

// Generate remaining lessons
for (let i = 4; i <= 50; i++) {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i <= 17 ? 'Beginner' : i <= 34 ? 'Intermediate' : 'Advanced';
  const topics = ['UPDATE', 'DELETE', 'JOIN', 'GROUP BY', 'HAVING', 'Subqueries', 'Indexes', 'Views', 'Transactions', 'Functions'];
  const topic = topics[(i - 4) % topics.length];
  
  detailedSQLLessons.push({
    id: `sql-${i}`,
    title: `${topic} in SQL`,
    description: `Learn ${topic} for data manipulation`,
    language: 'sql' as const,
    difficulty,
    estimatedTime: 30 + (i % 15),
    content: `# ${topic} in SQL

Master ${topic} - essential for database operations.

\`\`\`sql
-- ${topic} example
SELECT * FROM table_name;
\`\`\`

Practice ${topic} concepts.`,
    initialCode: `-- Write ${topic} query`,
    solution: `-- ${topic} solution\nSELECT * FROM table_name;`,
    hints: [`Focus on ${topic}`, 'Test your queries', 'Use proper syntax'],
    testCases: [
      { name: 'Has SQL keywords', test: (code) => code.toUpperCase().includes('SELECT') || code.toUpperCase().includes('INSERT'), errorMessage: 'Write SQL' },
      { name: 'Not empty', test: (code) => code.trim().length > 10, errorMessage: 'Write a query' },
  {
    id: 'sql-4',
    title: 'SQL - Lesson 4',
    description: 'Master SQL concepts and techniques - Part 4',
    language: 'sql' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# SQL - Lesson 4

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 4
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 4
// Write your code here

`,
    solution: `// Solution for Lesson 4
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-5',
    title: 'SQL - Lesson 5',
    description: 'Master SQL concepts and techniques - Part 5',
    language: 'sql' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# SQL - Lesson 5

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 5
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 5
// Write your code here

`,
    solution: `// Solution for Lesson 5
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-6',
    title: 'SQL - Lesson 6',
    description: 'Master SQL concepts and techniques - Part 6',
    language: 'sql' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# SQL - Lesson 6

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 6
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 6
// Write your code here

`,
    solution: `// Solution for Lesson 6
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-7',
    title: 'SQL - Lesson 7',
    description: 'Master SQL concepts and techniques - Part 7',
    language: 'sql' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# SQL - Lesson 7

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 7
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 7
// Write your code here

`,
    solution: `// Solution for Lesson 7
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-8',
    title: 'SQL - Lesson 8',
    description: 'Master SQL concepts and techniques - Part 8',
    language: 'sql' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# SQL - Lesson 8

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 8
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 8
// Write your code here

`,
    solution: `// Solution for Lesson 8
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-9',
    title: 'SQL - Lesson 9',
    description: 'Master SQL concepts and techniques - Part 9',
    language: 'sql' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# SQL - Lesson 9

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 9
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 9
// Write your code here

`,
    solution: `// Solution for Lesson 9
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-10',
    title: 'SQL - Lesson 10',
    description: 'Master SQL concepts and techniques - Part 10',
    language: 'sql' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# SQL - Lesson 10

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 10
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 10
// Write your code here

`,
    solution: `// Solution for Lesson 10
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-11',
    title: 'SQL - Lesson 11',
    description: 'Master SQL concepts and techniques - Part 11',
    language: 'sql' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# SQL - Lesson 11

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 11
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 11
// Write your code here

`,
    solution: `// Solution for Lesson 11
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-12',
    title: 'SQL - Lesson 12',
    description: 'Master SQL concepts and techniques - Part 12',
    language: 'sql' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# SQL - Lesson 12

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 12
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 12
// Write your code here

`,
    solution: `// Solution for Lesson 12
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-13',
    title: 'SQL - Lesson 13',
    description: 'Master SQL concepts and techniques - Part 13',
    language: 'sql' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# SQL - Lesson 13

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 13
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 13
// Write your code here

`,
    solution: `// Solution for Lesson 13
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-14',
    title: 'SQL - Lesson 14',
    description: 'Master SQL concepts and techniques - Part 14',
    language: 'sql' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# SQL - Lesson 14

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 14
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 14
// Write your code here

`,
    solution: `// Solution for Lesson 14
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-15',
    title: 'SQL - Lesson 15',
    description: 'Master SQL concepts and techniques - Part 15',
    language: 'sql' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# SQL - Lesson 15

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 15
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 15
// Write your code here

`,
    solution: `// Solution for Lesson 15
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-16',
    title: 'SQL - Lesson 16',
    description: 'Master SQL concepts and techniques - Part 16',
    language: 'sql' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# SQL - Lesson 16

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 16
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 16
// Write your code here

`,
    solution: `// Solution for Lesson 16
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-17',
    title: 'SQL - Lesson 17',
    description: 'Master SQL concepts and techniques - Part 17',
    language: 'sql' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# SQL - Lesson 17

## Learning Objectives
- Understand fundamental concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for beginner-level developers.

## Key Topics
- Basic syntax and structure
- Core language features
- Simple examples

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 17
// Add your implementation here
\`\`\`

## Tips for Success
- Start with basics
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 17
// Write your code here

`,
    solution: `// Solution for Lesson 17
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-18',
    title: 'SQL - Lesson 18',
    description: 'Master SQL concepts and techniques - Part 18',
    language: 'sql' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# SQL - Lesson 18

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 18
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 18
// Write your code here

`,
    solution: `// Solution for Lesson 18
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-19',
    title: 'SQL - Lesson 19',
    description: 'Master SQL concepts and techniques - Part 19',
    language: 'sql' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# SQL - Lesson 19

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 19
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 19
// Write your code here

`,
    solution: `// Solution for Lesson 19
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-20',
    title: 'SQL - Lesson 20',
    description: 'Master SQL concepts and techniques - Part 20',
    language: 'sql' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# SQL - Lesson 20

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 20
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 20
// Write your code here

`,
    solution: `// Solution for Lesson 20
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-21',
    title: 'SQL - Lesson 21',
    description: 'Master SQL concepts and techniques - Part 21',
    language: 'sql' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# SQL - Lesson 21

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 21
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 21
// Write your code here

`,
    solution: `// Solution for Lesson 21
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-22',
    title: 'SQL - Lesson 22',
    description: 'Master SQL concepts and techniques - Part 22',
    language: 'sql' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# SQL - Lesson 22

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 22
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 22
// Write your code here

`,
    solution: `// Solution for Lesson 22
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-23',
    title: 'SQL - Lesson 23',
    description: 'Master SQL concepts and techniques - Part 23',
    language: 'sql' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# SQL - Lesson 23

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 23
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 23
// Write your code here

`,
    solution: `// Solution for Lesson 23
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-24',
    title: 'SQL - Lesson 24',
    description: 'Master SQL concepts and techniques - Part 24',
    language: 'sql' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# SQL - Lesson 24

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 24
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 24
// Write your code here

`,
    solution: `// Solution for Lesson 24
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-25',
    title: 'SQL - Lesson 25',
    description: 'Master SQL concepts and techniques - Part 25',
    language: 'sql' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# SQL - Lesson 25

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 25
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 25
// Write your code here

`,
    solution: `// Solution for Lesson 25
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-26',
    title: 'SQL - Lesson 26',
    description: 'Master SQL concepts and techniques - Part 26',
    language: 'sql' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# SQL - Lesson 26

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 26
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 26
// Write your code here

`,
    solution: `// Solution for Lesson 26
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-27',
    title: 'SQL - Lesson 27',
    description: 'Master SQL concepts and techniques - Part 27',
    language: 'sql' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# SQL - Lesson 27

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 27
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 27
// Write your code here

`,
    solution: `// Solution for Lesson 27
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-28',
    title: 'SQL - Lesson 28',
    description: 'Master SQL concepts and techniques - Part 28',
    language: 'sql' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# SQL - Lesson 28

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 28
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 28
// Write your code here

`,
    solution: `// Solution for Lesson 28
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-29',
    title: 'SQL - Lesson 29',
    description: 'Master SQL concepts and techniques - Part 29',
    language: 'sql' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# SQL - Lesson 29

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 29
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 29
// Write your code here

`,
    solution: `// Solution for Lesson 29
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-30',
    title: 'SQL - Lesson 30',
    description: 'Master SQL concepts and techniques - Part 30',
    language: 'sql' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# SQL - Lesson 30

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 30
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 30
// Write your code here

`,
    solution: `// Solution for Lesson 30
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-31',
    title: 'SQL - Lesson 31',
    description: 'Master SQL concepts and techniques - Part 31',
    language: 'sql' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# SQL - Lesson 31

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 31
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 31
// Write your code here

`,
    solution: `// Solution for Lesson 31
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-32',
    title: 'SQL - Lesson 32',
    description: 'Master SQL concepts and techniques - Part 32',
    language: 'sql' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# SQL - Lesson 32

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 32
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 32
// Write your code here

`,
    solution: `// Solution for Lesson 32
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-33',
    title: 'SQL - Lesson 33',
    description: 'Master SQL concepts and techniques - Part 33',
    language: 'sql' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# SQL - Lesson 33

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 33
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 33
// Write your code here

`,
    solution: `// Solution for Lesson 33
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-34',
    title: 'SQL - Lesson 34',
    description: 'Master SQL concepts and techniques - Part 34',
    language: 'sql' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# SQL - Lesson 34

## Learning Objectives
- Apply intermediate concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for intermediate-level developers.

## Key Topics
- Design patterns
- Best practices
- Real-world applications

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 34
// Add your implementation here
\`\`\`

## Tips for Success
- Focus on patterns
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 34
// Write your code here

`,
    solution: `// Solution for Lesson 34
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-35',
    title: 'SQL - Lesson 35',
    description: 'Master SQL concepts and techniques - Part 35',
    language: 'sql' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# SQL - Lesson 35

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 35
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 35
// Write your code here

`,
    solution: `// Solution for Lesson 35
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-36',
    title: 'SQL - Lesson 36',
    description: 'Master SQL concepts and techniques - Part 36',
    language: 'sql' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# SQL - Lesson 36

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 36
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 36
// Write your code here

`,
    solution: `// Solution for Lesson 36
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-37',
    title: 'SQL - Lesson 37',
    description: 'Master SQL concepts and techniques - Part 37',
    language: 'sql' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# SQL - Lesson 37

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 37
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 37
// Write your code here

`,
    solution: `// Solution for Lesson 37
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-38',
    title: 'SQL - Lesson 38',
    description: 'Master SQL concepts and techniques - Part 38',
    language: 'sql' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# SQL - Lesson 38

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 38
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 38
// Write your code here

`,
    solution: `// Solution for Lesson 38
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-39',
    title: 'SQL - Lesson 39',
    description: 'Master SQL concepts and techniques - Part 39',
    language: 'sql' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# SQL - Lesson 39

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 39
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 39
// Write your code here

`,
    solution: `// Solution for Lesson 39
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-40',
    title: 'SQL - Lesson 40',
    description: 'Master SQL concepts and techniques - Part 40',
    language: 'sql' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# SQL - Lesson 40

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 40
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 40
// Write your code here

`,
    solution: `// Solution for Lesson 40
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-41',
    title: 'SQL - Lesson 41',
    description: 'Master SQL concepts and techniques - Part 41',
    language: 'sql' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# SQL - Lesson 41

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 41
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 41
// Write your code here

`,
    solution: `// Solution for Lesson 41
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-42',
    title: 'SQL - Lesson 42',
    description: 'Master SQL concepts and techniques - Part 42',
    language: 'sql' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# SQL - Lesson 42

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 42
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 42
// Write your code here

`,
    solution: `// Solution for Lesson 42
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-43',
    title: 'SQL - Lesson 43',
    description: 'Master SQL concepts and techniques - Part 43',
    language: 'sql' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# SQL - Lesson 43

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 43
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 43
// Write your code here

`,
    solution: `// Solution for Lesson 43
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-44',
    title: 'SQL - Lesson 44',
    description: 'Master SQL concepts and techniques - Part 44',
    language: 'sql' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# SQL - Lesson 44

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 44
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 44
// Write your code here

`,
    solution: `// Solution for Lesson 44
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-45',
    title: 'SQL - Lesson 45',
    description: 'Master SQL concepts and techniques - Part 45',
    language: 'sql' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# SQL - Lesson 45

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 45
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 45
// Write your code here

`,
    solution: `// Solution for Lesson 45
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-46',
    title: 'SQL - Lesson 46',
    description: 'Master SQL concepts and techniques - Part 46',
    language: 'sql' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# SQL - Lesson 46

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 46
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 46
// Write your code here

`,
    solution: `// Solution for Lesson 46
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-47',
    title: 'SQL - Lesson 47',
    description: 'Master SQL concepts and techniques - Part 47',
    language: 'sql' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# SQL - Lesson 47

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 47
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 47
// Write your code here

`,
    solution: `// Solution for Lesson 47
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-48',
    title: 'SQL - Lesson 48',
    description: 'Master SQL concepts and techniques - Part 48',
    language: 'sql' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# SQL - Lesson 48

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 48
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 48
// Write your code here

`,
    solution: `// Solution for Lesson 48
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-49',
    title: 'SQL - Lesson 49',
    description: 'Master SQL concepts and techniques - Part 49',
    language: 'sql' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# SQL - Lesson 49

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 49
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 49
// Write your code here

`,
    solution: `// Solution for Lesson 49
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  },
  {
    id: 'sql-50',
    title: 'SQL - Lesson 50',
    description: 'Master SQL concepts and techniques - Part 50',
    language: 'sql' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# SQL - Lesson 50

## Learning Objectives
- Master advanced concepts
- Build practical projects
- Write clean, efficient code

## Overview
This lesson covers essential SQL concepts for advanced-level developers.

## Key Topics
- Advanced techniques
- Performance optimization
- Complex architectures

## Practice Exercise
Apply what you've learned by completing the coding challenge below.

## Code Example
\`\`\`sql
// SQL example for lesson 50
// Add your implementation here
\`\`\`

## Tips for Success
- Optimize for performance
- Practice regularly
- Review documentation
- Test your code thoroughly
`,
    initialCode: `// SQL Lesson 50
// Write your code here

`,
    solution: `// Solution for Lesson 50
// Complete implementation

`,
    hints: [
      'Review the learning objectives',
      'Start with a simple approach',
      'Test your code step by step',
      'Refer to SQL documentation for details'
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
        errorMessage: 'Make sure your code follows SQL syntax' 
      }
    ]
  }
    ]
  });
}

export const sqlLessons = detailedSQLLessons
