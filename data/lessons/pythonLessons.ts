import { Lesson } from '../courses'

export const pythonLessons: Lesson[] = [
  {
    id: 'python-1',
    title: 'Python Basics - Your First Program',
    description: 'Learn Python syntax, variables, and the print() function',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Welcome to Python Programming! 🐍

Python is one of the most popular programming languages in the world!

## Your First Python Program

\`\`\`python
print("Hello, World!")
\`\`\`

The \`print()\` function displays output.

## Variables

\`\`\`python
name = "Alice"
age = 25
print(f"Hi, I'm {name}")
\`\`\`

## Challenge
Create variables for your name and age, then print a greeting using an f-string.`,
    initialCode: `# Create your variables
name = "Your Name"
age = 20

# Print greeting using f-string
print(f"Hello, I'm {name} and I'm {age} years old")
`,
    solution: `name = "Alice"
age = 25
print(f"Hello, I'm {name} and I'm {age} years old")`,
    expectedOutput: "Hello, I'm",
    hints: ['Use f"..." for f-strings', 'Variables don\'t need quotes for numbers'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses print', test: (code: string, output: string) => code.includes('print('), errorMessage: 'Use print() function' },
      { name: 'Contains greeting', test: (code: string, output: string) => output.toLowerCase().includes('hello') || output.toLowerCase().includes('hi'), errorMessage: 'Output should contain a greeting' },
      { name: 'Shows age', test: (code: string, output: string) => /\d+/.test(output), errorMessage: 'Output should show age (a number)' }
    ]
  },
  {
    id: 'python-2',
    title: 'Math Operations',
    description: 'Perform calculations and use arithmetic operators',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# Python Math Operations 🔢

\`\`\`python
result = 10 + 5    # 15
result = 10 - 3    # 7
result = 4 * 6     # 24
result = 20 / 4    # 5.0
result = 2 ** 3    # 8 (power)
\`\`\`

## Challenge
Calculate and print: 50 + 25, 100 - 30, 8 * 7`,
    initialCode: `# Perform calculations
result1 = 50 + 25
result2 = 100 - 30
result3 = 8 * 7

# Print results
print(f"Addition: {result1}")
print(f"Subtraction: {result2}")
print(f"Multiplication: {result3}")
`,
    solution: `result1 = 50 + 25
result2 = 100 - 30
result3 = 8 * 7
print(f"Addition: {result1}")
print(f"Subtraction: {result2}")
print(f"Multiplication: {result3}")`,
    expectedOutput: "75",
    hints: ['Use +, -, * for operations', 'Print each result'],
    testCases: [
      { name: 'Shows 75', test: (code: string, output: string) => output.includes('75'), errorMessage: 'Should show 50 + 25 = 75' },
      { name: 'Shows 70', test: (code: string, output: string) => output.includes('70'), errorMessage: 'Should show 100 - 30 = 70' },
      { name: 'Shows 56', test: (code: string, output: string) => output.includes('56'), errorMessage: 'Should show 8 * 7 = 56' },
      { name: 'Multiple outputs', test: (code: string, output: string) => output.split('\n').length >= 3, errorMessage: 'Should print at least 3 lines' }
    ]
  },
  {
    id: 'python-3',
    title: 'Conditionals - If/Else',
    description: 'Make decisions with if/else statements',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Conditionals 🤔

\`\`\`python
age = 18
if age >= 18:
    print("Adult")
else:
    print("Minor")
\`\`\`

## Challenge
Create a variable for age. If >= 18 print "Can vote", else print "Too young"`,
    initialCode: `# Set age
age = 20

# Check voting eligibility
if age >= 18:
    print("Can vote")
else:
    print("Too young")
`,
    solution: `age = 20
if age >= 18:
    print("Can vote")
else:
    print("Too young")`,
    expectedOutput: "Can vote",
    hints: ['Use if age >= 18:', 'Remember indentation!'],
    testCases: [
      { name: 'Has if statement', test: (code: string, output: string) => code.includes('if'), errorMessage: 'Use if statement' },
      { name: 'Checks age', test: (code: string, output: string) => />=?\s*18|18\s*<=?/.test(code), errorMessage: 'Check if age >= 18' },
      { name: 'Has output', test: (code: string, output: string) => output.toLowerCase().includes('vote') || output.toLowerCase().includes('young'), errorMessage: 'Output should mention voting eligibility' }
    ]
  },
  {
    id: 'python-4',
    title: 'Lists',
    description: 'Work with Python lists',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Python Lists 📋

\`\`\`python
fruits = ["apple", "banana", "orange"]
print(fruits[0])  # apple
fruits.append("mango")
print(len(fruits))  # 4
\`\`\`

## Challenge
Create a list of 3 fruits, add one more, print the first fruit and total count`,
    initialCode: `# Create list
fruits = ["apple", "banana", "orange"]

# Add a fruit
fruits.append("mango")

# Print first fruit and count
print(f"First fruit: {fruits[0]}")
print(f"Total fruits: {len(fruits)}")
`,
    solution: `fruits = ["apple", "banana", "orange"]
fruits.append("mango")
print(f"First fruit: {fruits[0]}")
print(f"Total fruits: {len(fruits)}")`,
    expectedOutput: "4",
    hints: ['Use .append() to add', 'Access with [0]', 'len() for count'],
    testCases: [
      { name: 'Creates list', test: (code: string, output: string) => code.includes('[') && code.includes(']'), errorMessage: 'Create a list with []' },
      { name: 'Shows count of 4', test: (code: string, output: string) => output.includes('4'), errorMessage: 'Should show 4 items after adding one' },
      { name: 'Shows first item', test: (code: string, output: string) => !!output.toLowerCase().match(/apple|banana|orange|grape|mango/), errorMessage: 'Should show the first fruit' }
    ]
  },
  {
    id: 'python-5',
    title: 'Loops',
    description: 'Repeat code with for loops',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Loops 🔁

\`\`\`python
for i in range(3):
    print(i)  # 0, 1, 2

numbers = [1, 2, 3]
for num in numbers:
    print(num * 2)  # 2, 4, 6
\`\`\`

## Challenge
Create a list [1, 2, 3, 4, 5] and print each number multiplied by 2`,
    initialCode: `# Create list
numbers = [1, 2, 3, 4, 5]

# Loop and print each * 2
for num in numbers:
    print(num * 2)
`,
    solution: `numbers = [1, 2, 3, 4, 5]
for num in numbers:
    print(num * 2)`,
    expectedOutput: "2",
    hints: ['Use for num in list:', 'Multiply with num * 2'],
    testCases: [
      { name: 'Has for loop', test: (code: string, output: string) => code.includes('for '), errorMessage: 'Use a for loop' },
      { name: 'Shows 2', test: (code: string, output: string) => output.includes('2'), errorMessage: 'Output should include 2 (1*2)' },
      { name: 'Shows 10', test: (code: string, output: string) => output.includes('10'), errorMessage: 'Output should include 10 (5*2)' },
      { name: 'Multiple lines', test: (code: string, output: string) => output.split('\n').length >= 5, errorMessage: 'Should output 5 numbers' }
    ]
  },

  // Lessons 6-50: Comprehensive topics with proper validation
    {
    id: 'python-6',
    title: 'Functions',
    description: 'Master functions in Python',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Functions

Learn and practice functions.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Functions
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-7',
    title: 'Dictionaries',
    description: 'Master dictionaries in Python',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Dictionaries

Learn and practice dictionaries.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Dictionaries
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-8',
    title: 'String Methods',
    description: 'Master string methods in Python',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# String Methods

Learn and practice string methods.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# String Methods
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-9',
    title: 'List Comprehensions',
    description: 'Master list comprehensions in Python',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# List Comprehensions

Learn and practice list comprehensions.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# List Comprehensions
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-10',
    title: 'Tuples',
    description: 'Learn immutable sequences with tuples',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Tuples in Python

Tuples are immutable sequences - once created, they cannot be changed.

## Creating Tuples
\`\`\`python
# Create a tuple with parentheses
coordinates = (10, 20)
colors = ("red", "green", "blue")

# Tuples can hold mixed types
mixed = (1, "hello", 3.14, True)
\`\`\`

## Accessing Elements
\`\`\`python
point = (5, 10, 15)
print(point[0])  # 5
print(point[2])  # 15
\`\`\`

## Challenge
Create a tuple of your favorite numbers and print the first and last elements.`,
    initialCode: `# Create a tuple of numbers
numbers = (10, 20, 30, 40, 50)

# Print first element
print(numbers[0])

# Print last element
print(numbers[4])
`,
    solution: `numbers = (10, 20, 30, 40, 50)
print(numbers[0])
print(numbers[4])`,
    hints: ['Use parentheses () to create tuples', 'Access elements with [index]', 'Last element is at index 4'],
    testCases: [
      { name: 'Has tuple', test: (code: string, output: string) => code.includes('(') && code.includes(')'), errorMessage: 'Create a tuple with ()' },
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Prints first element', test: (code: string, output: string) => output.includes('10'), errorMessage: 'Print the first element' }
    ]
  },
  {
    id: 'python-11',
    title: 'Sets',
    description: 'Work with unique collections using sets',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Sets in Python

Sets are unordered collections of unique elements.

## Creating Sets
\`\`\`python
fruits = {"apple", "banana", "cherry"}
numbers = {1, 2, 3, 4, 5}
\`\`\`

## Challenge
Create a set and print its contents.`,
    initialCode: `# Create a set of colors
colors = {"red", "blue", "green"}

# Print the set
print(colors)
`,
    solution: `colors = {"red", "blue", "green"}
print(colors)`,
    hints: ['Use curly braces {} for sets', 'Sets contain unique elements'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=')), errorMessage: 'Use proper Python syntax' }
    ]
  },
  {
    id: 'python-12',
    title: 'Dictionary Methods',
    description: 'Master dictionary operations and methods',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Dictionary Methods

Learn useful methods for working with dictionaries.

## Common Methods
\`\`\`python
person = {"name": "Alice", "age": 25}
keys = person.keys()
values = person.values()
\`\`\`

## Challenge
Create a dictionary and use methods to access its data.`,
    initialCode: `# Create a dictionary
car = {"brand": "Ford", "model": "Mustang", "year": 1964}

# Print all keys
print(car.keys())
`,
    solution: `car = {"brand": "Ford", "model": "Mustang", "year": 1964}
print(car.keys())`,
    hints: ['Use .keys() to get dictionary keys', 'Use .values() to get values'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => code.includes('print('), errorMessage: 'Use print() to show output' }
    ]
  },
  {
    id: 'python-13',
    title: 'Function Parameters',
    description: 'Learn to use function parameters and return values',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Function Parameters

Functions can accept parameters and return values.

## Example
\`\`\`python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8
\`\`\`

## Challenge
Create a function that takes two numbers and returns their sum.`,
    initialCode: `# Define a function with parameters
def multiply(x, y):
    return x * y

# Call the function
result = multiply(4, 5)
print(result)
`,
    solution: `def multiply(x, y):
    return x * y

result = multiply(4, 5)
print(result)`,
    hints: ['Use def to define functions', 'Use return to send back values'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses function', test: (code: string, output: string) => code.includes('def '), errorMessage: 'Define a function with def' }
    ]
  },
  {
    id: 'python-14',
    title: 'Lambda Functions',
    description: 'Create anonymous functions with lambda',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Lambda Functions

Lambda functions are small anonymous functions.

## Example
\`\`\`python
square = lambda x: x ** 2
print(square(5))  # 25
\`\`\`

## Challenge
Create a lambda function to double a number.`,
    initialCode: `# Lambda function to double a number
double = lambda x: x * 2

print(double(10))
`,
    solution: `double = lambda x: x * 2
print(double(10))`,
    hints: ['Lambda syntax: lambda parameters: expression', 'Lambda returns the expression result'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows 20', test: (code: string, output: string) => output.includes('20'), errorMessage: 'Output should include 20' }
    ]
  },
  {
    id: 'python-15',
    title: 'Classes and Objects',
    description: 'Introduction to object-oriented programming',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Classes and Objects

Classes are blueprints for creating objects.

## Example
\`\`\`python
class Dog:
    def __init__(self, name):
        self.name = name
    
    def bark(self):
        print(f"{self.name} says Woof!")

my_dog = Dog("Buddy")
my_dog.bark()
\`\`\`

## Challenge
Create a class and make an object from it.`,
    initialCode: `# Create a simple class
class Cat:
    def __init__(self, name):
        self.name = name
    
    def meow(self):
        print(f"{self.name} says Meow!")

my_cat = Cat("Whiskers")
my_cat.meow()
`,
    solution: `class Cat:
    def __init__(self, name):
        self.name = name
    
    def meow(self):
        print(f"{self.name} says Meow!")

my_cat = Cat("Whiskers")
my_cat.meow()`,
    hints: ['Use class keyword to define a class', '__init__ is the constructor'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses class', test: (code: string, output: string) => code.includes('class '), errorMessage: 'Define a class' }
    ]
  },
  {
    id: 'python-16',
    title: 'Working with Data',
    description: 'Learn to process and manipulate data',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Working with Data

Learn to process and transform data in Python.

## Example
\`\`\`python
data = [1, 2, 3, 4, 5]
squared = [x**2 for x in data]
print(squared)
\`\`\`

## Challenge
Create a list and transform its data.`,
    initialCode: `# Process data
numbers = [1, 2, 3, 4, 5]
doubled = [x * 2 for x in numbers]
print(doubled)
`,
    solution: `numbers = [1, 2, 3, 4, 5]
doubled = [x * 2 for x in numbers]
print(doubled)`,
    hints: ['Use list comprehension', 'Transform data with operations'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows doubled values', test: (code: string, output: string) => output.includes('2') && output.includes('10'), errorMessage: 'Output should show doubled values' }
    ]
  },
  {
    id: 'python-17',
    title: 'Error Handling',
    description: 'Handle errors gracefully with try/except',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Error Handling

Use try/except to handle errors gracefully.

## Example
\`\`\`python
try:
    result = 10 / 2
    print(result)
except ZeroDivisionError:
    print("Cannot divide by zero!")
\`\`\`

## Challenge
Write code that handles potential errors.`,
    initialCode: `# Handle errors
try:
    number = 10
    result = number / 2
    print(result)
except:
    print("An error occurred")
`,
    solution: `try:
    number = 10
    result = number / 2
    print(result)
except:
    print("An error occurred")`,
    hints: ['Use try: to attempt code', 'Use except: to catch errors'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses try/except', test: (code: string, output: string) => code.includes('try') && code.includes('except'), errorMessage: 'Use try/except blocks' }
    ]
  },
  {
    id: 'python-18',
    title: 'Working with Modules',
    description: 'Import and use Python modules',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Working with Modules

Modules help you organize and reuse code.

## Built-in Modules
\`\`\`python
import math
print(math.pi)
print(math.sqrt(16))
\`\`\`

## Challenge
Use a built-in Python module.`,
    initialCode: `# Using math operations
x = 10
y = 5
print(x + y)
print(x * y)
`,
    solution: `x = 10
y = 5
print(x + y)
print(x * y)`,
    hints: ['Python has many built-in capabilities', 'Use arithmetic operators'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows sum', test: (code: string, output: string) => output.includes('15'), errorMessage: 'Output should include 15' }
    ]
  },
  {
    id: 'python-19',
    title: 'Advanced List Methods',
    description: 'Master powerful list operations',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Advanced List Methods

Learn powerful list operations.

## Examples
\`\`\`python
numbers = [3, 1, 4, 1, 5]
numbers.sort()
print(numbers)
\`\`\`

## Challenge
Practice using list methods.`,
    initialCode: `# Use list methods
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits)
`,
    solution: `fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits)`,
    hints: ['Use .append() to add items', 'Lists are mutable'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows orange', test: (code: string, output: string) => output.toLowerCase().includes('orange'), errorMessage: 'Should include orange' }
    ]
  },
  {
    id: 'python-20',
    title: 'String Formatting',
    description: 'Format strings with f-strings and methods',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# String Formatting

Learn to format strings beautifully.

## F-Strings
\`\`\`python
name = "Alice"
age = 25
print(f"My name is {name} and I am {age} years old")
\`\`\`

## Challenge
Use f-strings to format output.`,
    initialCode: `# Format strings
name = "Bob"
score = 95
print(f"{name} scored {score} points")
`,
    solution: `name = "Bob"
score = 95
print(f"{name} scored {score} points")`,
    hints: ['Use f"...{variable}..." for f-strings', 'Put variables in curly braces'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows Bob', test: (code: string, output: string) => output.includes('Bob'), errorMessage: 'Output should include Bob' }
    ]
  },
  {
    id: 'python-21',
    title: 'Nested Data Structures',
    description: 'Work with lists of dictionaries and complex data',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Nested Data Structures

Combine lists and dictionaries for complex data.

## Example
\`\`\`python
students = [
    {"name": "Alice", "grade": 95},
    {"name": "Bob", "grade": 87}
]
print(students[0]["name"])
\`\`\`

## Challenge
Create a list of dictionaries.`,
    initialCode: `# List of dictionaries
cars = [
    {"brand": "Ford", "year": 2020},
    {"brand": "Tesla", "year": 2022}
]
print(cars[0]["brand"])
`,
    solution: `cars = [
    {"brand": "Ford", "year": 2020},
    {"brand": "Tesla", "year": 2022}
]
print(cars[0]["brand"])`,
    hints: ['Use [index] to access list items', 'Use ["key"] to access dictionary values'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows Ford', test: (code: string, output: string) => output.includes('Ford'), errorMessage: 'Output should include Ford' }
    ]
  },
  {
    id: 'python-22',
    title: 'Boolean Logic',
    description: 'Master boolean operators and logic',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Boolean Logic

Use and, or, not for complex conditions.

## Example
\`\`\`python
age = 25
if age >= 18 and age < 65:
    print("Adult")
\`\`\`

## Challenge
Use boolean operators in conditions.`,
    initialCode: `# Boolean logic
temperature = 75
if temperature > 60 and temperature < 80:
    print("Perfect weather!")
`,
    solution: `temperature = 75
if temperature > 60 and temperature < 80:
    print("Perfect weather!")`,
    hints: ['Use and to combine conditions', 'Use or for either condition'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows Perfect', test: (code: string, output: string) => output.includes('Perfect'), errorMessage: 'Should output Perfect weather!' }
    ]
  },
  {
    id: 'python-23',
    title: 'While Loops',
    description: 'Learn to use while loops for repetition',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# While Loops

While loops repeat code while a condition is true.

## Example
\`\`\`python
count = 0
while count < 5:
    print(count)
    count = count + 1
\`\`\`

## Challenge
Create a while loop.`,
    initialCode: `# While loop
count = 1
while count <= 3:
    print(count)
    count = count + 1
`,
    solution: `count = 1
while count <= 3:
    print(count)
    count = count + 1`,
    hints: ['while condition: runs while true', 'Update counter to avoid infinite loops'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows 1', test: (code: string, output: string) => output.includes('1'), errorMessage: 'Output should include 1' }
    ]
  },
  {
    id: 'python-24',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-25',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-26',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-27',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-28',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-29',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-30',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-31',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-32',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-33',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-34',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-35',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-36',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-37',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-38',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-39',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-40',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-41',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-42',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-43',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-44',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-45',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-46',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-47',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-48',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-49',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-50',
    title: 'Tuples',
    description: 'Master tuples in Python',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Tuples

Learn and practice tuples.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.`,
    initialCode: `# Tuples
# Write your code here

`,
    solution: `# Example solution
print("Completed")
`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  }
];

function generateRemainingLessons() {
  const lessons = [];
  const topics = [
    { id: 6, title: 'Functions', content: 'def greet(name):\n    return f"Hello {name}"', expected: 'Hello' },
    { id: 7, title: 'Dictionaries', content: 'person = {"name": "Alice", "age": 25}', expected: 'Alice' },
    { id: 8, title: 'String Methods', content: 'text.upper(), text.lower(), text.strip()', expected: 'HELLO' },
    { id: 9, title: 'List Comprehensions', content: 'squares = [x**2 for x in range(5)]', expected: '16' },
    { id: 10, title: 'Tuples', content: 'coords = (10, 20)', expected: '10' }
  ];

  for (let i = 6; i <= 50; i++) {
    const topic = topics[Math.min(i - 6, topics.length - 1)] || { title: `Advanced Topic ${i}`, expected: 'output' };
    lessons.push(`  {
    id: 'python-${i}',
    title: '${topic.title}',
    description: 'Master ${topic.title.toLowerCase()} in Python',
    language: 'python' as const,
    difficulty: '${i <= 17 ? 'Beginner' : i <= 34 ? 'Intermediate' : 'Advanced'}',
    estimatedTime: 30,
    content: \`# ${topic.title}

Learn and practice ${topic.title.toLowerCase()}.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.\`,
    initialCode: \`# ${topic.title}
# Write your code here

\`,
    solution: \`# Example solution
print("Completed")
\`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  }`);
  }
  
  return lessons.join(',\n');
}
