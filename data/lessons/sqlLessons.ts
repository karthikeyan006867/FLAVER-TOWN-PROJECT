import { Lesson } from '../courses'

export const sqlLessons: Lesson[] = [
  {
    id: 'sql-1',
    title: 'Introduction to SQL',
    description: 'Learn SQL basics for database management',
    content: `# Introduction to SQL

SQL (Structured Query Language) is the standard language for managing relational databases.

## Key Concepts:
- Tables: Store data in rows and columns
- Queries: Retrieve data from tables
- CRUD: Create, Read, Update, Delete

## Basic Commands:
\`\`\`sql
-- Select all data
SELECT * FROM users;

-- Select specific columns
SELECT name, email FROM users;

-- Filter with WHERE
SELECT * FROM users WHERE age > 18;

-- Order results
SELECT * FROM users ORDER BY name ASC;
\`\`\`

## Creating Tables:
\`\`\`sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INT
);
\`\`\``,
    language: 'sql',
    difficulty: 'Beginner',
    estimatedTime: 35,
    initialCode: `-- Write your SQL query
SELECT * FROM users;
`,
    solution: `-- Create a table
CREATE TABLE students (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  grade INT,
  enrollment_date DATE
);

-- Insert data
INSERT INTO students (name, grade, enrollment_date)
VALUES ('Alice', 95, '2024-01-15');

-- Query data
SELECT name, grade 
FROM students 
WHERE grade >= 90 
ORDER BY grade DESC;`,
    hints: ['SELECT retrieves data', 'WHERE filters results', 'INSERT adds new records']
  },
  {
    id: 'sql-2',
    title: 'SQL Joins and Relationships',
    description: 'Understanding table relationships and joins',
    content: `# SQL Joins

## Types of Joins:
\`\`\`sql
-- INNER JOIN: Matching records from both tables
SELECT users.name, orders.order_date
FROM users
INNER JOIN orders ON users.id = orders.user_id;

-- LEFT JOIN: All from left, matching from right
SELECT users.name, orders.order_date
FROM users
LEFT JOIN orders ON users.id = orders.user_id;

-- RIGHT JOIN: All from right, matching from left
SELECT users.name, orders.order_date
FROM users
RIGHT JOIN orders ON users.id = orders.user_id;
\`\`\`

## Aggregate Functions:
\`\`\`sql
SELECT COUNT(*) FROM users;
SELECT AVG(age) FROM users;
SELECT MAX(price) FROM products;
SELECT SUM(amount) FROM orders;
\`\`\``,
    language: 'sql',
    difficulty: 'Intermediate',
    estimatedTime: 45,
    initialCode: `-- Write join queries
`,
    solution: `-- Get users with their order count
SELECT users.name, COUNT(orders.id) as order_count
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.id, users.name;

-- Get products and categories
SELECT products.name, categories.category_name, products.price
FROM products
INNER JOIN categories ON products.category_id = categories.id
WHERE products.price > 100
ORDER BY products.price DESC;`,
    hints: ['JOIN combines tables', 'GROUP BY aggregates data', 'COUNT, SUM, AVG are aggregate functions']
  }
]
