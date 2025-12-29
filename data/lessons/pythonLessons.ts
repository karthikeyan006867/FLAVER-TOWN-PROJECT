import { Lesson } from '../courses'

export const pythonLessons: Lesson[] = [
  {
    id: 'py-1',
    title: 'Python Basics - Print and Variables',
    description: 'Your first Python program',
    content: `# Welcome to Python!

## What is Python?
Python is one of the world's most popular programming languages. It's powerful yet beginner-friendly, with clear, readable syntax that looks almost like English!

## Why Learn Python?
- **Versatile**: Web development, data science, AI, automation, games
- **In-Demand**: Top language for jobs in tech
- **Beginner-Friendly**: Clean syntax, less code than other languages
- **Huge Community**: Millions of developers, tons of resources
- **Industry Standard**: Used by Google, Netflix, NASA, Instagram

## How Python Works
You write code, Python interpreter reads it line-by-line, executes instructions, and shows output.

## The Print Function - Your First Output!

### What is print()?
Displays text or data to the screen (console/terminal).

\`\`\`python
print("Hello, World!")           # Displays text
print("I love Python!")          # Another message
print(42)                        # Can print numbers
print(3.14, "is pi")            # Multiple values
\`\`\`

### Why print() Matters
- **Debugging**: See what your code is doing
- **User Feedback**: Show messages to users
- **Testing**: Check if values are correct
- **Learning**: Understand how code executes

## Variables - Storing Information

### What Are Variables?
Named containers that store data. Unlike math, = means "assign" not "equals".

\`\`\`python
name = "Alice"        # String (text)
age = 25              # Integer (whole number)
height = 5.6          # Float (decimal)
is_student = True     # Boolean (True/False)
\`\`\`

### Python is Dynamically Typed
You don't declare types—Python figures it out!
\`\`\`python
x = 10        # x is a number
x = "Hello"   # Now x is a string - Python doesn't care!
\`\`\`

## F-Strings - Modern String Formatting

### What Are F-Strings?
The best way to insert variables into text. Put \`f\` before the quote and use \`{variable}\`.

\`\`\`python
name = "Bob"
age = 30
print(f"My name is {name} and I am {age} years old")
# Output: My name is Bob and I am 30 years old

# Can do math inside {}
price = 19.99
quantity = 3
print(f"Total: {price * quantity}")
# Output: Total: 59.97
\`\`\`

### Old Ways (Don't Use)
\`\`\`python
# String concatenation (messy!)
print("Name: " + name + " Age: " + str(age))

# .format() (outdated)
print("Name: {} Age: {}".format(name, age))

# F-strings are cleaner! ✅
print(f"Name: {name} Age: {age}")
\`\`\`

## Real-World Example: User Profile
\`\`\`python
username = "techguru42"
email = "guru@email.com"
follower_count = 1523
is_verified = True

print(f"Profile: @{username}")
print(f"Email: {email}")
print(f"Followers: {follower_count}")
print(f"Verified: {is_verified}")
\`\`\`

## Your Turn: Experiment!
**Task:** Create variables for your name and age, then print a formatted message.

**Experiments to Try:**
1. **Print Different Types**: Try printing strings, numbers, booleans
2. **Multiple Variables**: Create 5 variables and print them all in one f-string
3. **Math in F-Strings**: \`print(f"10 + 5 = {10 + 5}")\`—the math executes!
4. **Change Variable Values**: Assign a new value to a variable, print before and after
5. **No F-String**: Try without the \`f\`—see \`{name}\` prints literally!
6. **Quotes**: Try single quotes \`'text'\` vs double quotes \`"text"\`—both work!`,
    language: 'python',
    difficulty: 'Beginner',
    estimatedTime: 10,
    initialCode: `# Create your variables here\n\n# Print formatted message\n`,
    solution: `name = "Sarah"\nage = 22\n\nprint(f"Hello! My name is {name} and I am {age} years old.")`,
    expectedOutput: 'Hello',
    hints: ['Variables don\'t need var/let/const', 'f-strings use f"text {variable}"', 'print() displays output']
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
    id: 'py-2',
    title: 'Data Types and Type Conversion',
    description: 'Understand Python data types',
    content: `# Python Data Types

## Main Types:
\`\`\`python
text = "Hello"          # str (string)
number = 42             # int (integer)
decimal = 3.14          # float
is_true = True          # bool (boolean)
items = [1, 2, 3]       # list
\`\`\`

## Type Conversion:
\`\`\`python
str(42)        # "42" (number to string)
int("42")      # 42 (string to number)
float("3.14")  # 3.14 (string to float)
\`\`\`

## Check Type:
\`\`\`python
type(42)       # <class 'int'>
\`\`\`

**Task:** Convert string "123" to integer, add 77 to it, and print the result.`,
    language: 'python',
    difficulty: 'Beginner',
    estimatedTime: 12,
    initialCode: `# Convert and calculate\ntext_number = "123"\n\n# Add 77 and print`,
    solution: `text_number = "123"\nnumber = int(text_number)\nresult = number + 77\nprint(result)`,
    expectedOutput: '200',
    hints: ['int() converts to integer', 'Then add 77', 'print() to display']
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
    id: 'py-3',
    title: 'Lists - Python Arrays',
    description: 'Store and manipulate collections',
    content: `# Python Lists

Lists store multiple items in order.

## Creating Lists:
\`\`\`python
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]
\`\`\`

## List Methods:
\`\`\`python
fruits.append("grape")     # Add to end
fruits.remove("banana")    # Remove by value
fruits.pop()               # Remove last item
len(fruits)                # Get length
fruits[0]                  # Access first item
\`\`\`

## Looping Lists:
\`\`\`python
for fruit in fruits:
    print(fruit)
\`\`\`

**Task:** Create a list of 3 languages, add "Python", remove first one, then print each.`,
    language: 'python',
    difficulty: 'Beginner',
    estimatedTime: 15,
    initialCode: `# Create list\nlanguages = \n\n# Add Python\n\n# Remove first\n\n# Print each`,
    solution: `languages = ["HTML", "CSS", "JavaScript"]\n\nlanguages.append("Python")\nlanguages.pop(0)\n\nfor lang in languages:\n    print(lang)`,
    expectedOutput: 'CSS',
    hints: ['.append() to add', '.pop(0) removes first', 'for loop to iterate']
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
    id: 'py-4',
    title: 'Functions in Python',
    description: 'Create reusable code blocks',
    content: `# Python Functions

Functions organize and reuse code.

## Defining Functions:
\`\`\`python
def greet(name):
    return f"Hello, {name}!"

message = greet("Alice")
print(message)  # "Hello, Alice!"
\`\`\`

## Multiple Parameters:
\`\`\`python
def add(a, b):
    return a + b

result = add(5, 3)  # 8
\`\`\`

## Default Parameters:
\`\`\`python
def greet(name="Guest"):
    return f"Hello, {name}!"
\`\`\`

**Task:** Create a function \`calculate_area\` that takes width and height, returns area.`,
    language: 'python',
    difficulty: 'Beginner',
    estimatedTime: 12,
    initialCode: `# Define calculate_area function\n\n# Call with width=10, height=5\narea = calculate_area(10, 5)\nprint(area)`,
    solution: `def calculate_area(width, height):\n    return width * height\n\narea = calculate_area(10, 5)\nprint(area)`,
    expectedOutput: '50',
    hints: ['def keyword', 'parameters in ()', 'return the calculation']
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
    id: 'py-5',
    title: 'Dictionaries - Key-Value Pairs',
    description: 'Store structured data',
    content: `# Python Dictionaries

Dictionaries store data as key-value pairs.

## Creating Dictionaries:
\`\`\`python
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}
\`\`\`

## Accessing Values:
\`\`\`python
print(person["name"])        # "John"
print(person.get("age"))     # 30
\`\`\`

## Modifying:
\`\`\`python
person["age"] = 31           # Update
person["job"] = "Developer"  # Add new
del person["city"]           # Delete
\`\`\`

## Looping:
\`\`\`python
for key, value in person.items():
    print(f"{key}: {value}")
\`\`\`

**Task:** Create a \`student\` dict with name, grade, age. Print each key-value pair.`,
    language: 'python',
    difficulty: 'Beginner',
    estimatedTime: 15,
    initialCode: `# Create student dictionary\nstudent = \n\n# Print each key-value pair`,
    solution: `student = {\n    "name": "Emma",\n    "grade": "A",\n    "age": 16\n}\n\nfor key, value in student.items():\n    print(f"{key}: {value}")`,
    expectedOutput: 'name:',
    hints: ['Use curly braces {}', 'key: value pairs', '.items() for looping']    ,
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
    id: 'py-6',
    title: 'Classes and Objects',
    description: 'Object-Oriented Programming basics',
    content: `# Python Classes

Classes are blueprints for creating objects.

## Defining a Class:
\`\`\`python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def bark(self):
        return f"{self.name} says Woof!"

# Creating objects
my_dog = Dog("Buddy", 3)
print(my_dog.bark())  # "Buddy says Woof!"
\`\`\`

## Key Concepts:
- **__init__**: Constructor method (runs when object created)
- **self**: Refers to the instance
- **Methods**: Functions inside a class

**Task:** Create a \`Car\` class with brand, model, and a \`get_info\` method.`,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `# Create Car class\nclass Car:\n    # Add __init__ and get_info\n\n# Create a car object\nmy_car = Car("Toyota", "Camry")\nprint(my_car.get_info())`,
    solution: `class Car:\n    def __init__(self, brand, model):\n        self.brand = brand\n        self.model = model\n    \n    def get_info(self):\n        return f"{self.brand} {self.model}"\n\nmy_car = Car("Toyota", "Camry")\nprint(my_car.get_info())`,
    expectedOutput: 'Toyota',
    hints: ['__init__ with self, brand, model', 'self.brand = brand', 'get_info returns formatted string']
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

  // INTERMEDIATE PYTHON (Lessons 7-20)
  {
    id: 'py-7',
    title: 'List Methods',
    description: 'Master Python list operations',
    content: `# Python List Methods

## Common Methods:
\`\`\`python
fruits = ['apple', 'banana']
fruits.append('orange')      # Add to end
fruits.insert(0, 'grape')    # Insert at index
fruits.remove('banana')      # Remove by value
fruits.pop()                 # Remove and return last
fruits.sort()                # Sort in place
fruits.reverse()             # Reverse in place
\`\`\`

**Task:** Use list methods.`,
    language: 'python',
    difficulty: 'Beginner',
    estimatedTime: 15,
    initialCode: `numbers = [3, 1, 4, 1, 5, 9, 2, 6]\n\n# Sort, remove duplicates using set, convert back to list`,
    solution: `numbers = [3, 1, 4, 1, 5, 9, 2, 6]\n\nnumbers.sort()\nprint("Sorted:", numbers)\n\nunique = list(set(numbers))\nunique.sort()\nprint("Unique:", unique)`,
    hints: ['.sort() sorts in place', 'set() removes duplicates', 'list() converts back']
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
    id: 'py-8',
    title: 'Dictionary Methods',
    description: 'Work with dictionaries effectively',
    content: `# Dictionary Methods

## Common Operations:
\`\`\`python
user = {'name': 'Alice', 'age': 25}\n\nuser.get('name')              # Safe access\nuser.get('email', 'N/A')      # With default\nuser.keys()                   # All keys\nuser.values()                 # All values\nuser.items()                  # Key-value pairs\nuser.update({'city': 'NYC'})  # Add/update
\`\`\`

**Task:** Work with dictionaries.`,
    language: 'python',
    difficulty: 'Beginner',
    estimatedTime: 15,
    initialCode: `inventory = {'apples': 10, 'bananas': 5}\n\n# Add oranges: 8\n# Print all items`,
    solution: `inventory = {'apples': 10, 'bananas': 5}\n\ninventory['oranges'] = 8\n\nfor item, count in inventory.items():\n    print(f"{item}: {count}")`,
    hints: ['.items() for key-value pairs', 'Use f-strings', 'Loop through dictionary']
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
    id: 'py-9',
    title: 'List Comprehensions',
    description: 'Create lists concisely',
    content: `# List Comprehensions

## Basic:
\`\`\`python
squares = [x**2 for x in range(10)]
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
\`\`\`

## With Condition:
\`\`\`python
evens = [x for x in range(20) if x % 2 == 0]
\`\`\`

## Transform:
\`\`\`python
names = ['alice', 'bob']
upper = [name.upper() for name in names]
\`\`\`

**Task:** Create list comprehension.`,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `# Create list of squares of even numbers from 1 to 20`,
    solution: `squares_of_evens = [x**2 for x in range(1, 21) if x % 2 == 0]\nprint(squares_of_evens)\n\n# Alternative with multiple operations\nnames = ['Alice', 'Bob', 'Charlie']\nlengths = [len(name) for name in names]\nprint(lengths)`,
    hints: ['[expression for item in iterable if condition]', 'Condition is optional', 'More concise than loops']
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
    id: 'py-10',
    title: 'Lambda Functions',
    description: 'Create anonymous functions',
    content: `# Lambda Functions

## Syntax:
\`\`\`python
add = lambda a, b: a + b
add(3, 5)  # 8
\`\`\`

## With map/filter:
\`\`\`python
numbers = [1, 2, 3, 4]
doubled = list(map(lambda x: x * 2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))
\`\`\`

## Sorting:
\`\`\`python
users = [{'name': 'Bob', 'age': 30}, {'name': 'Alice', 'age': 25}]
sorted_users = sorted(users, key=lambda u: u['age'])
\`\`\`

**Task:** Use lambda functions.`,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `products = [\n    {'name': 'Laptop', 'price': 999},\n    {'name': 'Mouse', 'price': 25},\n    {'name': 'Keyboard', 'price': 75}\n]\n\n# Sort by price`,
    solution: `products = [\n    {'name': 'Laptop', 'price': 999},\n    {'name': 'Mouse', 'price': 25},\n    {'name': 'Keyboard', 'price': 75}\n]\n\nsorted_products = sorted(products, key=lambda p: p['price'])\n\nfor product in sorted_products:\n    print(f"{product['name']}: \${product['price']}")`,
    hints: ['lambda args: expression', 'key parameter for sorted', 'Single expression only']
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
    id: 'py-11',
    title: 'File I/O',
    description: 'Read and write files',
    content: `# File Operations

## Reading:
\`\`\`python
with open('file.txt', 'r') as f:
    content = f.read()
    # or line by line:
    for line in f:
        print(line.strip())
\`\`\`

## Writing:
\`\`\`python
with open('file.txt', 'w') as f:
    f.write('Hello, World!')
    f.write('\\nNew line')
\`\`\`

## Appending:
\`\`\`python
with open('file.txt', 'a') as f:
    f.write('\\nAppended text')
\`\`\`

**Task:** Understand file operations.`,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `# Write to file\nwith open('data.txt', 'w') as f:\n    # Add lines\n\n# Read from file\nwith open('data.txt', 'r') as f:\n    # Print content`,
    solution: `# Write to file\nwith open('data.txt', 'w') as f:\n    f.write('Line 1\\n')\n    f.write('Line 2\\n')\n    f.write('Line 3\\n')\n\n# Read from file\nwith open('data.txt', 'r') as f:\n    content = f.read()\n    print(content)`,
    hints: ['with statement auto-closes', "'r', 'w', 'a' modes", '.read() or iterate lines']
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
    id: 'py-12',
    title: 'Exception Handling Advanced',
    description: 'Handle multiple exception types',
    content: `# Advanced Exception Handling

## Multiple Exceptions:
\`\`\`python
try:
    result = int(input()) / 0
except ValueError:
    print("Invalid number")
except ZeroDivisionError:
    print("Cannot divide by zero")
except Exception as e:
    print(f"Error: {e}")
finally:
    print("Always runs")
\`\`\`

## Raising Exceptions:
\`\`\`python
if age < 0:
    raise ValueError("Age cannot be negative")
\`\`\`

**Task:** Handle exceptions.`,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `def divide(a, b):\n    # Add error handling\n    pass`,
    solution: `def divide(a, b):\n    try:\n        result = a / b\n        return result\n    except ZeroDivisionError:\n        print("Error: Cannot divide by zero")\n        return None\n    except TypeError:\n        print("Error: Both arguments must be numbers")\n        return None\n\nprint(divide(10, 2))\nprint(divide(10, 0))\nprint(divide(10, "2"))`,
    hints: ['Multiple except blocks', 'except Exception catches all', 'raise to throw exceptions']
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
    id: 'py-13',
    title: 'Modules and Imports',
    description: 'Organize code with modules',
    content: `# Modules

## Importing:
\`\`\`python
import math
print(math.sqrt(16))

from datetime import datetime
print(datetime.now())

import random as rnd
print(rnd.randint(1, 10))

from math import pi, sqrt
\`\`\`

## Common Modules:
- **math**: Mathematical functions
- **random**: Random numbers
- **datetime**: Date and time
- **os**: Operating system
- **json**: JSON parsing

**Task:** Use built-in modules.`,
    language: 'python',
    difficulty: 'Beginner',
    estimatedTime: 15,
    initialCode: `# Import and use math module\n\n# Calculate square root of 25`,
    solution: `import math\nimport random\nfrom datetime import datetime\n\nprint(f"Square root of 25: {math.sqrt(25)}")\nprint(f"Random number: {random.randint(1, 100)}")\nprint(f"Current time: {datetime.now()}")`,
    hints: ['import module', 'from module import name', 'as for alias']
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
    id: 'py-14',
    title: '*args and **kwargs',
    description: 'Variable-length arguments',
    content: `# *args and **kwargs

## *args (positional):
\`\`\`python
def sum_all(*args):
    return sum(args)

sum_all(1, 2, 3, 4)  # 10
\`\`\`

## **kwargs (keyword):
\`\`\`python
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25)
\`\`\`

## Combined:
\`\`\`python
def func(a, *args, **kwargs):
    pass
\`\`\`

**Task:** Create function with *args and **kwargs.`,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `def create_profile(name, *skills, **info):\n    # Print name, skills, and additional info\n    pass`,
    solution: `def create_profile(name, *skills, **info):\n    print(f"Name: {name}")\n    print(f"Skills: {', '.join(skills)}")\n    for key, value in info.items():\n        print(f"{key}: {value}")\n\ncreate_profile(\n    "Alice",\n    "Python", "JavaScript", "TypeScript",\n    city="NYC",\n    experience=5\n)`,
    hints: ['*args for variable positional', '**kwargs for variable keyword', 'Unpack in function definition']
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
    id: 'py-15',
    title: 'Decorators',
    description: 'Modify function behavior',
    content: `# Decorators

## Basic Decorator:
\`\`\`python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Before")
        result = func(*args, **kwargs)
        print("After")
        return result
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")
\`\`\`

**Task:** Create timing decorator.`,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `# Create decorator that times function execution\nimport time\n\ndef timer(func):\n    # Implement decorator\n    pass`,
    solution: `import time\n\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs);\n        end = time.time()\n        print(f"{func.__name__} took {end - start:.4f} seconds")\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    time.sleep(1)\n    return "Done"\n\nslow_function()`,
    hints: ['Return wrapper function', 'Call original function', '@ syntax applies decorator']
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
    id: 'py-16',
    title: 'Generators',
    description: 'Create memory-efficient iterators',
    content: `# Generators

## yield Keyword:
\`\`\`python
def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

for num in count_up_to(5):
    print(num)
\`\`\`

## Generator Expression:
\`\`\`python
squares = (x**2 for x in range(10))
\`\`\`

**Task:** Create generator.`,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `def fibonacci(n):\n    # Generate first n fibonacci numbers\n    pass`,
    solution: `def fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\n\nfor num in fibonacci(10):\n    print(num)`,
    hints: ['yield instead of return', 'Lazy evaluation', 'Memory efficient']
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
    id: 'py-17',
    title: 'Context Managers',
    description: 'Resource management with "with"',
    content: `# Context Managers

## Using with:
\`\`\`python
with open('file.txt') as f:
    content = f.read()
# File automatically closed
\`\`\`

## Creating Context Manager:
\`\`\`python
class MyContext:
    def __enter__(self):
        print("Entering")
        return self
    
    def __exit__(self, *args):
        print("Exiting")
\`\`\`

**Task:** Understand context managers.`,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `# Create timer context manager\nclass Timer:\n    def __enter__(self):\n        # Start timer\n        pass\n    \n    def __exit__(self, *args):\n        # End and print time\n        pass`,
    solution: `import time\n\nclass Timer:\n    def __enter__(self):\n        self.start = time.time()\n        return self\n    \n    def __exit__(self, *args):\n        elapsed = time.time() - self.start\n        print(f"Elapsed time: {elapsed:.4f} seconds")\n\nwith Timer():\n    time.sleep(0.1)\n    print("Working...")`,
    hints: ['__enter__ and __exit__ methods', 'with statement', 'Automatic cleanup']
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
    id: 'py-18',
    title: 'Regular Expressions',
    description: 'Pattern matching in Python',
    content: `# Regular Expressions

## Import re:
\`\`\`python
import re

pattern = r'\\d+'  # One or more digits
text = "I have 2 apples and 5 oranges"

re.findall(pattern, text)  # ['2', '5']
re.search(pattern, text)   # Match object
re.sub(r'\\d+', 'X', text) # Replace
\`\`\`

## Common Patterns:
- \\d: Digit
- \\w: Word character
- \\s: Whitespace
- ^: Start
- $: End

**Task:** Validate email with regex.`,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `import re\n\ndef is_valid_email(email):\n    # Add regex validation\n    pass`,
    solution: `import re\n\ndef is_valid_email(email):\n    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'\n    return bool(re.match(pattern, email))\n\nprint(is_valid_email("user@example.com"))  # True\nprint(is_valid_email("invalid.email"))      # False`,
    hints: ['re.match(), re.search(), re.findall()', 'r"" for raw strings', 'Pattern syntax']
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
    id: 'py-19',
    title: 'Collections Module',
    description: 'Specialized container datatypes',
    content: `# Collections Module

## Counter:
\`\`\`python
from collections import Counter
counts = Counter(['a', 'b', 'a', 'c', 'b', 'a'])
# Counter({'a': 3, 'b': 2, 'c': 1})
\`\`\`

## defaultdict:
\`\`\`python
from collections import defaultdict
d = defaultdict(list)
d['key'].append(1)  # No KeyError
\`\`\`

## namedtuple:
\`\`\`python
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(1, 2)
\`\`\`

**Task:** Use Counter.`,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `from collections import Counter\n\ntext = "hello world"\n# Count letter frequency`,
    solution: `from collections import Counter\n\ntext = "hello world"\nletter_counts = Counter(text.replace(' ', ''))\n\nprint("Letter frequencies:")\nfor letter, count in letter_counts.most_common():\n    print(f"{letter}: {count}")`,
    hints: ['Counter(iterable)', '.most_common()', 'Dictionary-like']
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
    id: 'py-20',
    title: 'Itertools Module',
    description: 'Advanced iteration tools',
    content: `# Itertools

## Common Functions:
\`\`\`python
from itertools import count, cycle, repeat, chain

# Infinite
for i in count(10):  # 10, 11, 12...
    if i > 15: break

# Combinations/Permutations
from itertools import combinations, permutations
combinations([1,2,3], 2)  # (1,2), (1,3), (2,3)

# Chain
chain([1,2], [3,4])  # 1, 2, 3, 4
\`\`\`

**Task:** Use itertools.`,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `from itertools import combinations\n\n# Generate all 2-number combinations from [1,2,3,4]`,
    solution: `from itertools import combinations, permutations\n\nnumbers = [1, 2, 3, 4]\n\nprint("Combinations (2):")\nfor combo in combinations(numbers, 2):\n    print(combo)\n\nprint("\\nPermutations (2):")\nfor perm in permutations(numbers, 2):\n    print(perm)`,
    hints: ['combinations vs permutations', 'Returns iterator', 'Many utility functions']
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

  // ADVANCED PYTHON (Lessons 21-36)
  {
    id: 'py-21',
    title: 'Property Decorators',
    description: 'Create computed properties',
    content: `# @property Decorator

## Getter/Setter:
\`\`\`python
class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def radius(self):
        return self._radius
    
    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value
    
    @property
    def area(self):
        return 3.14159 * self._radius ** 2
\`\`\`

**Task:** Create class with properties.`,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `class Rectangle:\n    # Add width, height properties and area`,
    solution: `class Rectangle:\n    def __init__(self, width, height):\n        self._width = width\n        self._height = height\n    \n    @property\n    def width(self):\n        return self._width\n    \n    @width.setter\n    def width(self, value):\n        if value <= 0:\n            raise ValueError("Width must be positive")\n        self._width = value\n    \n    @property\n    def height(self):\n        return self._height\n    \n    @height.setter\n    def height(self, value):\n        if value <= 0:\n            raise ValueError("Height must be positive")\n        self._height = value\n    \n    @property\n    def area(self):\n        return self._width * self._height\n\nrect = Rectangle(10, 5)\nprint(f"Area: {rect.area}")`,
    hints: ['@property for getter', '@prop.setter for setter', 'Computed properties']
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
    id: 'py-22',
    title: 'Magic Methods',
    description: 'Operator overloading',
    content: `# Magic Methods

## Common Operators:
\`\`\`python
class Vector:
    def __init__(self, x, y):
        self.x, self.y = x, y
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __str__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __len__(self):
        return 2
    
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
\`\`\`

**Task:** Implement magic methods.`,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `class Money:\n    def __init__(self, amount):\n        self.amount = amount\n    \n    # Add __add__, __str__, __eq__`,
    solution: `class Money:\n    def __init__(self, amount):\n        self.amount = amount\n    \n    def __add__(self, other):\n        return Money(self.amount + other.amount)\n    \n    def __sub__(self, other):\n        return Money(self.amount - other.amount)\n    \n    def __str__(self):\n        return f"$" + str(round(self.amount, 2))\n    \n    def __eq__(self, other):\n        return self.amount == other.amount\n\nm1 = Money(100)\nm2 = Money(50)\nprint(m1 + m2)\nprint(m1 - m2)`,
    hints: ['__add__ for +', '__str__ for string', '__eq__ for ==']
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
    id: 'py-23',
    title: 'Abstract Base Classes',
    description: 'Define interfaces',
    content: `# ABC - Abstract Base Classes

## Definition:
\`\`\`python
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def make_sound(self):
        pass

class Dog(Animal):
    def make_sound(self):
        return "Woof!"
\`\`\`

**Task:** Create abstract class.`,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `from abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    # Add abstract area method`,
    solution: `from abc import ABC, abstractmethod\nimport math\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n    \n    @abstractmethod\n    def perimeter(self):\n        pass\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    \n    def area(self):\n        return math.pi * self.radius ** 2\n    \n    def perimeter(self):\n        return 2 * math.pi * self.radius\n\ncircle = Circle(5)\nprint(f"Area: {circle.area():.2f}")`,
    hints: ['from abc import ABC, abstractmethod', '@abstractmethod decorator', 'Must implement in subclass']
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
    id: 'py-24',
    title: 'Dataclasses',
    description: 'Simplified class creation',
    content: `# Dataclasses

## Basic Dataclass:
\`\`\`python
from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int
    city: str = "Unknown"

person = Person("Alice", 25)
print(person.name)
\`\`\`

## Features:
- Auto __init__, __repr__, __eq__
- Type hints
- Default values

**Task:** Create dataclass.`,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `from dataclasses import dataclass\n\n# Create Product dataclass`,
    solution: `from dataclasses import dataclass\n\n@dataclass\nclass Product:\n    name: str\n    price: float\n    quantity: int = 0\n    \n    def total_value(self):\n        return self.price * self.quantity\n\nproduct = Product("Laptop", 999.99, 5)\nprint(product)\nprint(f"Total value: \${product.total_value()}")`,
    hints: ['@dataclass decorator', 'Type hints required', 'Auto methods']
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
    id: 'py-25',
    title: 'Type Hints',
    description: 'Add static typing to Python',
    content: `# Type Hints

## Basic Types:
\`\`\`python
def greet(name: str) -> str:
    return f"Hello, {name}"\n\ndef add(a: int, b: int) -> int:
    return a + b\n\nfrom typing import List, Dict, Optional\n\ndef process(items: List[str]) -> Dict[str, int]:
    return {item: len(item) for item in items}\n\ndef find(items: List[int], target: int) -> Optional[int]:
    return items.index(target) if target in items else None
\`\`\`

**Task:** Add type hints.`,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `from typing import List, Dict\n\ndef count_words(text):\n    # Add type hints\n    pass`,
    solution: `from typing import List, Dict\n\ndef count_words(text: str) -> Dict[str, int]:\n    words = text.lower().split()\n    counts: Dict[str, int] = {}\n    for word in words:\n        counts[word] = counts.get(word, 0) + 1\n    return counts\n\nresult = count_words("hello world hello")\nprint(result)`,
    hints: ['param: type', '-> return_type', 'typing module for complex types']
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
    id: 'py-26',
    title: 'Asyncio Basics',
    description: 'Asynchronous programming',
    content: `# Asyncio

## Async/Await:
\`\`\`python
import asyncio\n\nasync def say_hello():\n    print("Hello")\n    await asyncio.sleep(1)\n    print("World")\n\nasyncio.run(say_hello())
\`\`\`

## Multiple Coroutines:
\`\`\`python
async def main():\n    await asyncio.gather(\n        task1(),\n        task2()\n    )
\`\`\`

**Task:** Create async function.`,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `import asyncio\n\nasync def fetch_data(id):\n    # Simulate async operation\n    pass`,
    solution: `import asyncio\n\nasync def fetch_data(id):\n    print(f"Fetching data {id}...")\n    await asyncio.sleep(1)  # Simulate I/O\n    return f"Data {id}"\n\nasync def main():\n    results = await asyncio.gather(\n        fetch_data(1),\n        fetch_data(2),\n        fetch_data(3)\n    )\n    print(results)\n\n# asyncio.run(main())`,
    hints: ['async def', 'await for async ops', 'asyncio.gather for parallel']
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
    id: 'py-27',
    title: 'Metaclasses',
    description: 'Classes that create classes',
    content: `# Metaclasses

## Basic Metaclass:
\`\`\`python
class Meta(type):
    def __new__(cls, name, bases, attrs):
        # Modify class before creation\n        attrs['created_by'] = 'metaclass'\n        return super().__new__(cls, name, bases, attrs)\n\nclass MyClass(metaclass=Meta):
    pass\n\nprint(MyClass.created_by)  # 'metaclass'
\`\`\`

**Task:** Understand metaclass concept.`,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `# Metaclass adds class-level tracking`,
    solution: `class Tracker(type):\n    instances = []\n    \n    def __call__(cls, *args, **kwargs):\n        instance = super().__call__(*args, **kwargs)\n        Tracker.instances.append(instance)\n        return instance\n\nclass MyClass(metaclass=Tracker):\n    pass\n\nobj1 = MyClass()\nobj2 = MyClass()\nprint(f"Created {len(Tracker.instances)} instances")`,
    hints: ['type is the base metaclass', '__new__ creates class', 'Advanced Python feature']
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
    id: 'py-28',
    title: 'Threading',
    description: 'Concurrent execution',
    content: `# Threading

## Basic Threading:
\`\`\`python
import threading\n\ndef worker(name):\n    print(f"Worker {name} starting")\n    # Do work\n    print(f"Worker {name} done")\n\nthread = threading.Thread(target=worker, args=("A",))\nthread.start()\nthread.join()  # Wait for completion
\`\`\`

**Task:** Create threaded program.`,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `import threading\nimport time\n\ndef count_down(n):\n    # Count down from n\n    pass`,
    solution: `import threading\nimport time\n\ndef count_down(name, n):\n    for i in range(n, 0, -1):\n        print(f"{name}: {i}")\n        time.sleep(0.5)\n    print(f"{name}: Done!")\n\nthread1 = threading.Thread(target=count_down, args=("Thread-1", 5))\nthread2 = threading.Thread(target=count_down, args=("Thread-2", 3))\n\nthread1.start()\nthread2.start()\n\nthread1.join()\nthread2.join()`,
    hints: ['threading.Thread', 'target function', 'start() and join()']
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
    id: 'py-29',
    title: 'Multiprocessing',
    description: 'Parallel processing',
    content: `# Multiprocessing

## Process Pool:
\`\`\`python
from multiprocessing import Pool\n\ndef square(n):\n    return n ** 2\n\nwith Pool(4) as pool:\n    results = pool.map(square, [1, 2, 3, 4, 5])\n    print(results)
\`\`\`

**Task:** Understand multiprocessing.`,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `from multiprocessing import Pool\n\ndef process_number(n):\n    # Some CPU-intensive task\n    return n * 2`,
    solution: `from multiprocessing import Pool\n\ndef process_number(n):\n    result = sum(i * i for i in range(n))\n    return result\n\nif __name__ == '__main__':\n    numbers = [1000, 2000, 3000, 4000]\n    \n    with Pool(4) as pool:\n        results = pool.map(process_number, numbers)\n    \n    print(results)`,
    hints: ['Pool for parallel processing', 'CPU-bound tasks', 'if __name__ guard']
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
    id: 'py-30',
    title: 'Pathlib',
    description: 'Modern file path handling',
    content: `# Pathlib

## Path Operations:
\`\`\`python
from pathlib import Path\n\npath = Path('folder/file.txt')\nprint(path.name)        # 'file.txt'\nprint(path.stem)        # 'file'\nprint(path.suffix)      # '.txt'\nprint(path.parent)      # 'folder'\n\npath.exists()\npath.is_file()\npath.mkdir(parents=True, exist_ok=True)
\`\`\`

**Task:** Use pathlib.`,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `from pathlib import Path\n\n# Work with paths`,
    solution: `from pathlib import Path\n\n# Current directory\nproject_dir = Path.cwd()\nprint(f"Current directory: {project_dir}")\n\n# Create path\ndata_file = project_dir / "data" / "info.txt"\nprint(f"File path: {data_file}")\nprint(f"Parent: {data_file.parent}")\nprint(f"Name: {data_file.name}")\nprint(f"Extension: {data_file.suffix}")`,
    hints: ['Path() creates path', '/ operator joins', 'Cross-platform']
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
    id: 'py-31',
    title: 'JSON Handling',
    description: 'Work with JSON data',
    content: `# JSON Module

## Encoding/Decoding:
\`\`\`python
import json\n\n# Python to JSON\ndata = {'name': 'Alice', 'age': 25}\njson_str = json.dumps(data)\n\n# JSON to Python\nparsed = json.loads(json_str)\n\n# File operations\nwith open('data.json', 'w') as f:\n    json.dump(data, f, indent=2)\n\nwith open('data.json', 'r') as f:\n    loaded = json.load(f)
\`\`\`

**Task:** Work with JSON.`,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `import json\n\nusers = [\n    {'name': 'Alice', 'age': 25},\n    {'name': 'Bob', 'age': 30}\n]\n\n# Convert to JSON string`,
    solution: `import json\n\nusers = [\n    {'name': 'Alice', 'age': 25},\n    {'name': 'Bob', 'age': 30}\n]\n\n# To JSON string\njson_str = json.dumps(users, indent=2)\nprint(json_str)\n\n# From JSON string\nparsed = json.loads(json_str)\nfor user in parsed:\n    print(f"{user['name']}: {user['age']}")`,
    hints: ['json.dumps() to string', 'json.loads() from string', 'json.dump/load for files']
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
    id: 'py-32',
    title: 'Virtual Environments',
    description: 'Manage project dependencies',
    content: `# Virtual Environments

## Creating:
\`\`\`bash
python -m venv myenv\n\n# Activate:\n# Windows: myenv\\Scripts\\activate\n# Unix: source myenv/bin/activate\n\n# Deactivate:\ndeactivate
\`\`\`

## pip:
\`\`\`bash
pip install package_name\npip freeze > requirements.txt\npip install -r requirements.txt
\`\`\`

**Task:** Understand venv concept.`,
    language: 'python',
    difficulty: 'Beginner',
    estimatedTime: 15,
    initialCode: `# Virtual environment commands (conceptual)\n# python -m venv env\n# source env/bin/activate\n# pip install requests\n# pip freeze > requirements.txt`,
    solution: `# Virtual environment workflow\n# 1. Create: python -m venv myenv\n# 2. Activate: source myenv/bin/activate (Unix) or myenv\\Scripts\\activate (Windows)\n# 3. Install packages: pip install requests numpy\n# 4. Save dependencies: pip freeze > requirements.txt\n# 5. Install from requirements: pip install -r requirements.txt\n# 6. Deactivate: deactivate`,
    hints: ['Isolates dependencies', 'Per-project environments', 'requirements.txt for sharing']
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
    id: 'py-33',
    title: 'Requests Library',
    description: 'HTTP requests made easy',
    content: `# Requests Library

## GET Request:
\`\`\`python
import requests\n\nresponse = requests.get('https://api.example.com/data')\nif response.status_code == 200:\n    data = response.json()\n    print(data)
\`\`\`

## POST Request:
\`\`\`python
data = {'name': 'Alice', 'age': 25}\nresponse = requests.post(url, json=data)\nprint(response.json())
\`\`\`

**Task:** Make API request.`,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `# import requests\n\n# Fetch user data from API\n# def get_user(user_id):\n#     pass`,
    solution: `# import requests\n\n# def get_user(user_id):\n#     url = f"https://jsonplaceholder.typicode.com/users/{user_id}"\n#     response = requests.get(url)\n#     if response.status_code == 200:\n#         return response.json()\n#     return None\n\n# user = get_user(1)\n# if user:\n#     print(f"Name: {user['name']}")\n#     print(f"Email: {user['email']}")`,
    hints: ['requests.get(url)', 'response.json()', 'Check status_code']
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
    id: 'py-34',
    title: 'Pytest Basics',
    description: 'Testing Python code',
    content: `# Pytest

## Test Function:
\`\`\`python
def add(a, b):\n    return a + b\n\ndef test_add():\n    assert add(2, 3) == 5\n    assert add(-1, 1) == 0\n    assert add(0, 0) == 0
\`\`\`

## Running:
\`\`\`bash
pytest test_file.py
\`\`\`

**Task:** Write test.`,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `def multiply(a, b):\n    return a * b\n\n# Write test function`,
    solution: `def multiply(a, b):\n    return a * b\n\ndef test_multiply():\n    assert multiply(2, 3) == 6\n    assert multiply(-2, 3) == -6\n    assert multiply(0, 5) == 0\n    assert multiply(4, 1) == 4\n\n# Run with: pytest test_file.py`,
    hints: ['Test functions start with test_', 'assert for validation', 'pytest discovers tests']
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
    id: 'py-35',
    title: 'F-Strings Advanced',
    description: 'Format strings powerfully',
    content: `# F-Strings Advanced

## Formatting:
\`\`\`python
num = 3.14159\nf"{num:.2f}"  # "3.14"\n\nvalue = 42\nf"{value:05d}"  # "00042"\nf"{value:b}"   # Binary: "101010"\nf"{value:x}"   # Hex: "2a"\n\n# Alignment\nf"{num:>10}"   # Right align\nf"{num:<10}"   # Left align\nf"{num:^10}"   # Center\n\n# Expressions\nf"{2 + 2 = }"  # "2 + 2 = 4"\n\n# Datetime\nfrom datetime import datetime\nnow = datetime.now()\nf"{now:%Y-%m-%d %H:%M}"
\`\`\`

**Task:** Use advanced formatting.`,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `price = 99.99\nquantity = 5\n\n# Format nicely`,
    solution: `price = 99.99\nquantity = 5\ntotal = price * quantity\n\nprint(f"Price: \${round(price, 2)}")\nprint(f"Quantity: {str(quantity).zfill(3)}")\nprint(f"Total: \${round(total, 2)}")\nprint(f"Calculation: {price} × {quantity} = \${total}")`,
    hints: ['round() for decimals', 'str.zfill() for padding', 'f-strings for interpolation']
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
    id: 'py-36',
    title: 'Logging',
    description: 'Professional error tracking',
    content: `# Logging Module

## Basic Logging:
\`\`\`python
import logging\n\nlogging.basicConfig(level=logging.INFO)\n\nlogging.debug("Debug message")\nlogging.info("Info message")\nlogging.warning("Warning message")\nlogging.error("Error message")\nlogging.critical("Critical message")
\`\`\`

## File Logging:
\`\`\`python
logging.basicConfig(\n    filename='app.log',\n    level=logging.INFO,\n    format='%(asctime)s - %(levelname)s - %(message)s'\n)
\`\`\`

**Task:** Set up logging.`,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `import logging\n\n# Configure logging\n\ndef process_data(data):\n    # Add logging\n    pass`,
    solution: `import logging\n\nlogging.basicConfig(\n    level=logging.INFO,\n    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'\n)\n\nlogger = logging.getLogger(__name__)\n\ndef process_data(data):\n    logger.info(f"Processing {len(data)} items")\n    try:\n        result = sum(data)\n        logger.info(f"Result: {result}")\n        return result\n    except Exception as e:\n        logger.error(f"Error: {e}")\n        return None\n\nprocess_data([1, 2, 3, 4, 5])`,
    hints: ['logging.basicConfig()', 'Different log levels', 'format for custom output']
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

  // PROJECT LESSON
  {
    id: 'py-project-1',
    title: 'PROJECT: Contact Manager',
    description: 'Build a CLI contact management system',
    content: `# Project: Contact Manager

Create a command-line contact manager!

## Features:
1. Add new contacts (name, phone, email)
2. View all contacts
3. Search for a contact by name
4. Delete a contact
5. Store contacts in a list of dictionaries

## Python Skills:
- Lists and dictionaries
- Functions for each feature
- Loops and conditionals
- Input/output with input() and print()
- String methods (lower, strip)

## Example Structure:
\`\`\`python
contacts = []

def add_contact(name, phone, email):
    # Implementation

def view_contacts():
    # Implementation
\`\`\`

Build a complete working system!`,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 45,
    isProject: true,
    projectDescription: 'Build a CLI contact manager',
    initialCode: `contacts = []\n\n# Add your functions here\n\n# Main program loop`,
    solution: `contacts = []\n\ndef add_contact(name, phone, email):\n    contact = {"name": name, "phone": phone, "email": email}\n    contacts.append(contact)\n    print(f"Added {name} to contacts!")\n\ndef view_contacts():\n    if not contacts:\n        print("No contacts yet!")\n        return\n    \n    for i, contact in enumerate(contacts, 1):\n        print(f"{i}. {contact['name']} - {contact['phone']} - {contact['email']}")\n\ndef search_contact(name):\n    for contact in contacts:\n        if contact['name'].lower() == name.lower():\n            print(f"Found: {contact['name']} - {contact['phone']} - {contact['email']}")\n            return\n    print("Contact not found!")\n\ndef delete_contact(name):\n    for contact in contacts:\n        if contact['name'].lower() == name.lower():\n            contacts.remove(contact)\n            print(f"Deleted {name}")\n            return\n    print("Contact not found!")\n\n# Example usage\nadd_contact("John Doe", "123-456-7890", "john@email.com")\nadd_contact("Jane Smith", "987-654-3210", "jane@email.com")\nview_contacts()\nsearch_contact("John")`,
    hints: [
      'Use list of dictionaries',
      'enumerate() for numbered list',
      '.lower() for case-insensitive search',
      'Check if list is empty before displaying'
    ]
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
    id: 'py-38',
    title: 'Advanced List Comprehensions',
    description: 'Master complex list comprehensions with conditions',
    content: `# Advanced List Comprehensions

## Nested List Comprehensions
\`\`\`python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [num for row in matrix for num in row]
# [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Multiple conditions
[x for x in range(100) if x % 2 == 0 if x % 5 == 0]
# [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
\`\`\``,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `# Flatten a 2D matrix\nmatrix = [[1, 2], [3, 4], [5, 6]]\n\n# Create list of even numbers squared from 1-20`,
    solution: `matrix = [[1, 2], [3, 4], [5, 6]]\nflat = [num for row in matrix for num in row]\nevens_squared = [x**2 for x in range(1, 21) if x % 2 == 0]`,
    hints: ['Nested loops go left to right', 'Multiple if conditions', 'Use ** for powers'],
    testCases: [
      { name: 'Has list comprehension', test: (code) => code.includes('[') && code.includes('for'), errorMessage: 'Use list comprehension' }
    ]
  },
  {
    id: 'py-39',
    title: 'Generators and Iterators',
    description: 'Create memory-efficient generators',
    content: `# Generators - Lazy Evaluation

## What Are Generators?
Functions that yield values one at a time instead of returning all at once.

\`\`\`python
def countdown(n):
    while n > 0:
        yield n
        n -= 1

for num in countdown(5):
    print(num)  # 5, 4, 3, 2, 1
\`\`\`

## Generator Expressions
\`\`\`python
squares = (x**2 for x in range(1000000))  # Memory efficient
sum_squares = sum(squares)
\`\`\``,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `# Create a generator that yields fibonacci numbers\ndef fibonacci():\n    # Your code here\n    pass`,
    solution: `def fibonacci():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b`,
    hints: ['Use yield not return', 'Infinite loop with while True', 'Update a, b each iteration'],
    testCases: [
      { name: 'Uses yield', test: (code) => code.includes('yield'), errorMessage: 'Use yield keyword' }
    ]
  },
  {
    id: 'py-40',
    title: 'Decorators Basics',
    description: 'Understand and create function decorators',
    content: `# Decorators - Modify Function Behavior

## What Are Decorators?
Functions that wrap other functions to extend their behavior.

\`\`\`python
def timer(func):
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"Time: {end - start}s")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)
    return "Done!"
\`\`\``,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 30,
    initialCode: `# Create a decorator that prints before/after\ndef logger(func):\n    # Your code here\n    pass`,
    solution: `def logger(func):\n    def wrapper(*args, **kwargs):\n        print(f"Calling {func.__name__}")\n        result = func(*args, **kwargs)\n        print(f"Finished {func.__name__}")\n        return result\n    return wrapper`,
    hints: ['Return inner function', 'Use *args, **kwargs', 'Call original func inside'],
    testCases: [
      { name: 'Has wrapper function', test: (code) => code.includes('def') && code.includes('wrapper'), errorMessage: 'Create wrapper function' }
    ]
  },
  {
    id: 'py-41',
    title: 'Context Managers',
    description: 'Use with statements and create custom context managers',
    content: `# Context Managers - Resource Management

## The with Statement
\`\`\`python
with open('file.txt', 'r') as f:
    data = f.read()
# File automatically closed
\`\`\`

## Custom Context Manager
\`\`\`python
class Timer:
    def __enter__(self):
        self.start = time.time()
        return self
    
    def __exit__(self, *args):
        self.end = time.time()
        print(f"Elapsed: {self.end - self.start}s")

with Timer():
    # Code to time
    pass
\`\`\``,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `# Create a context manager for database connection\nclass Database:\n    # Implement __enter__ and __exit__\n    pass`,
    solution: `class Database:\n    def __enter__(self):\n        print("Connecting...")\n        self.conn = "connected"\n        return self\n    \n    def __exit__(self, *args):\n        print("Closing connection")\n        self.conn = None`,
    hints: ['__enter__ returns self', '__exit__ for cleanup', 'Use with statement'],
    testCases: [
      { name: 'Has __enter__', test: (code) => code.includes('__enter__'), errorMessage: 'Implement __enter__' },
      { name: 'Has __exit__', test: (code) => code.includes('__exit__'), errorMessage: 'Implement __exit__' }
    ]
  },
  {
    id: 'py-42',
    title: 'Regular Expressions',
    description: 'Pattern matching with regex',
    content: `# Regular Expressions - Text Pattern Matching

\`\`\`python
import re

# Find all emails
text = "Contact: john@email.com or jane@test.com"
emails = re.findall(r'\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b', text)

# Validate phone
phone = "(123) 456-7890"
if re.match(r'\\(\\d{3}\\) \\d{3}-\\d{4}', phone):
    print("Valid phone")
\`\`\``,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 30,
    initialCode: `import re\n\n# Extract all URLs from text\ntext = "Visit https://example.com or http://test.org"\n# Your code here`,
    solution: `import re\ntext = "Visit https://example.com or http://test.org"\nurls = re.findall(r'https?://[^\\s]+', text)\nprint(urls)`,
    hints: ['Use re.findall()', 'Pattern: https?://', '[^\\s]+ for non-whitespace'],
    testCases: [
      { name: 'Imports re', test: (code) => code.includes('import re'), errorMessage: 'Import re module' },
      { name: 'Uses findall', test: (code) => code.includes('findall'), errorMessage: 'Use re.findall()' }
    ]
  },
  {
    id: 'py-43',
    title: 'Multithreading Basics',
    description: 'Run concurrent operations with threads',
    content: `# Multithreading - Concurrent Execution

\`\`\`python
import threading
import time

def worker(name):
    print(f"{name} starting")
    time.sleep(2)
    print(f"{name} done")

# Create threads
t1 = threading.Thread(target=worker, args=("Thread-1",))
t2 = threading.Thread(target=worker, args=("Thread-2",))

t1.start()
t2.start()

t1.join()  # Wait for completion
t2.join()
\`\`\``,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 30,
    initialCode: `import threading\n\n# Create 3 threads that print numbers\ndef print_numbers(n):\n    # Your code here\n    pass`,
    solution: `import threading\n\ndef print_numbers(n):\n    for i in range(n):\n        print(i)\n\nthreads = []\nfor i in range(3):\n    t = threading.Thread(target=print_numbers, args=(5,))\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()`,
    hints: ['Create Thread objects', 'Call .start()', 'Use .join() to wait'],
    testCases: [
      { name: 'Imports threading', test: (code) => code.includes('threading'), errorMessage: 'Import threading module' }
    ]
  },
  {
    id: 'py-44',
    title: 'Async/Await - Asynchronous Programming',
    description: 'Modern Python async with asyncio',
    content: `# Async/Await - Non-Blocking Code

\`\`\`python
import asyncio

async def fetch_data(id):
    print(f"Fetching {id}...")
    await asyncio.sleep(2)  # Simulate I/O
    return f"Data {id}"

async def main():
    tasks = [fetch_data(i) for i in range(3)]
    results = await asyncio.gather(*tasks)
    print(results)

asyncio.run(main())
\`\`\``,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 35,
    initialCode: `import asyncio\n\n# Create async function that processes items\nasync def process(item):\n    # Your code here\n    pass`,
    solution: `import asyncio\n\nasync def process(item):\n    await asyncio.sleep(1)\n    return item * 2\n\nasync def main():\n    tasks = [process(i) for i in range(5)]\n    results = await asyncio.gather(*tasks)\n    print(results)`,
    hints: ['Use async def', 'await for async operations', 'asyncio.gather() for multiple tasks'],
    testCases: [
      { name: 'Uses async def', test: (code) => code.includes('async def'), errorMessage: 'Use async def' },
      { name: 'Uses await', test: (code) => code.includes('await'), errorMessage: 'Use await keyword' }
    ]
  },
  {
    id: 'py-45',
    title: 'Data Classes',
    description: 'Simplify class creation with dataclasses',
    content: `# Data Classes - Cleaner Class Definitions

\`\`\`python
from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int
    email: str = "no-email"
    
    def greet(self):
        return f"Hi, I'm {self.name}"

p = Person("Alice", 30)
print(p.name)  # Alice
print(p)  # Person(name='Alice', age=30, email='no-email')
\`\`\``,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `from dataclasses import dataclass\n\n# Create a Product dataclass\n@dataclass\nclass Product:\n    # Your code here\n    pass`,
    solution: `from dataclasses import dataclass\n\n@dataclass\nclass Product:\n    name: str\n    price: float\n    quantity: int = 0\n    \n    def total_value(self):\n        return self.price * self.quantity`,
    hints: ['Use type hints', 'Default values after required fields', '@dataclass decorator'],
    testCases: [
      { name: 'Imports dataclass', test: (code) => code.includes('dataclass'), errorMessage: 'Import dataclass' },
      { name: 'Has type hints', test: (code) => code.includes(':'), errorMessage: 'Use type hints' }
    ]
  },
  {
    id: 'py-46',
    title: 'Type Hints and MyPy',
    description: 'Static type checking in Python',
    content: `# Type Hints - Better Code Quality

\`\`\`python
from typing import List, Dict, Optional, Union

def process_names(names: List[str]) -> Dict[str, int]:
    return {name: len(name) for name in names}

def find_user(id: int) -> Optional[str]:
    users = {1: "Alice", 2: "Bob"}
    return users.get(id)  # Returns str or None

def add(x: Union[int, float], y: Union[int, float]) -> float:
    return float(x + y)
\`\`\``,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `from typing import List, Dict\n\n# Add type hints to this function\ndef count_words(text):\n    words = text.split()\n    return {word: words.count(word) for word in set(words)}`,
    solution: `from typing import List, Dict\n\ndef count_words(text: str) -> Dict[str, int]:\n    words = text.split()\n    return {word: words.count(word) for word in set(words)}`,
    hints: ['Parameter: text: str', 'Return: -> Dict[str, int]', 'from typing import Dict'],
    testCases: [
      { name: 'Has type hints', test: (code) => code.includes(':') && code.includes('->'), errorMessage: 'Add type hints' }
    ]
  },
  {
    id: 'py-47',
    title: 'Testing with unittest',
    description: 'Write unit tests for your code',
    content: `# Unit Testing - Ensure Code Quality

\`\`\`python
import unittest

def add(a, b):
    return a + b

class TestMath(unittest.TestCase):
    def test_add_positive(self):
        self.assertEqual(add(2, 3), 5)
    
    def test_add_negative(self):
        self.assertEqual(add(-1, -1), -2)
    
    def test_add_mixed(self):
        self.assertEqual(add(-5, 10), 5)

if __name__ == '__main__':
    unittest.main()
\`\`\``,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 30,
    initialCode: `import unittest\n\ndef multiply(a, b):\n    return a * b\n\n# Write test cases\nclass TestMultiply(unittest.TestCase):\n    # Your code here\n    pass`,
    solution: `import unittest\n\ndef multiply(a, b):\n    return a * b\n\nclass TestMultiply(unittest.TestCase):\n    def test_positive(self):\n        self.assertEqual(multiply(3, 4), 12)\n    \n    def test_zero(self):\n        self.assertEqual(multiply(5, 0), 0)\n    \n    def test_negative(self):\n        self.assertEqual(multiply(-2, 3), -6)`,
    hints: ['Inherit from unittest.TestCase', 'Methods start with test_', 'Use self.assertEqual()'],
    testCases: [
      { name: 'Imports unittest', test: (code) => code.includes('unittest'), errorMessage: 'Import unittest' },
      { name: 'Has test methods', test: (code) => code.includes('def test_'), errorMessage: 'Create test methods' }
    ]
  },
  {
    id: 'py-48',
    title: 'Virtual Environments',
    description: 'Manage project dependencies',
    content: `# Virtual Environments - Isolated Dependencies

## Why Virtual Environments?
- Separate dependencies per project
- Avoid conflicts between package versions
- Easy to recreate environment

## Commands
\`\`\`bash
# Create
python -m venv myenv

# Activate (Windows)
myenv\\Scripts\\activate

# Activate (Mac/Linux)
source myenv/bin/activate

# Install packages
pip install requests pandas

# Save dependencies
pip freeze > requirements.txt

# Install from requirements
pip install -r requirements.txt

# Deactivate
deactivate
\`\`\``,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `# Create a requirements.txt for a web project\n# List these packages: flask, requests, pytest`,
    solution: `flask==2.3.0\nrequests==2.31.0\npytest==7.4.0`,
    hints: ['One package per line', 'Use == for versions', 'Check PyPI for latest versions'],
    testCases: [
      { name: 'Has flask', test: (code) => code.includes('flask'), errorMessage: 'Include flask' },
      { name: 'Has requests', test: (code) => code.includes('requests'), errorMessage: 'Include requests' }
    ]
  },
  {
    id: 'py-49',
    title: 'Working with JSON',
    description: 'Parse and generate JSON data',
    content: `# JSON - Data Exchange Format

\`\`\`python
import json

# Parse JSON string
json_str = '{"name": "Alice", "age": 30}'
data = json.loads(json_str)
print(data['name'])  # Alice

# Convert to JSON
person = {"name": "Bob", "age": 25, "city": "NYC"}
json_str = json.dumps(person, indent=2)

# Read from file
with open('data.json', 'r') as f:
    data = json.load(f)

# Write to file
with open('output.json', 'w') as f:
    json.dump(data, f, indent=2)
\`\`\``,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 25,
    initialCode: `import json\n\n# Convert this dict to JSON and back\nuser = {"username": "john", "email": "john@test.com", "age": 28}`,
    solution: `import json\n\nuser = {"username": "john", "email": "john@test.com", "age": 28}\njson_str = json.dumps(user, indent=2)\nprint(json_str)\nuser_back = json.loads(json_str)\nprint(user_back)`,
    hints: ['json.dumps() for dict -> string', 'json.loads() for string -> dict', 'indent=2 for pretty printing'],
    testCases: [
      { name: 'Imports json', test: (code) => code.includes('import json'), errorMessage: 'Import json module' },
      { name: 'Uses dumps or loads', test: (code) => code.includes('dumps') || code.includes('loads'), errorMessage: 'Use json.dumps() or json.loads()' }
    ]
  },
  {
    id: 'py-50',
    title: 'Working with CSV Files',
    description: 'Read and write CSV data',
    content: `# CSV - Comma-Separated Values

\`\`\`python
import csv

# Read CSV
with open('data.csv', 'r') as f:
    reader = csv.reader(f)
    headers = next(reader)
    for row in reader:
        print(row)

# Write CSV
data = [
    ['Name', 'Age', 'City'],
    ['Alice', '30', 'NYC'],
    ['Bob', '25', 'LA']
]

with open('output.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerows(data)

# DictReader/DictWriter
with open('data.csv', 'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row['Name'], row['Age'])
\`\`\``,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 25,
    initialCode: `import csv\n\n# Create a CSV with student data\nstudents = [\n    ['Name', 'Grade', 'Score'],\n    ['Alice', 'A', '95'],\n    ['Bob', 'B', '85']\n]\n\n# Write to CSV`,
    solution: `import csv\n\nstudents = [\n    ['Name', 'Grade', 'Score'],\n    ['Alice', 'A', '95'],\n    ['Bob', 'B', '85']\n]\n\nwith open('students.csv', 'w', newline='') as f:\n    writer = csv.writer(f)\n    writer.writerows(students)`,
    hints: ['Use csv.writer()', 'writerows() for multiple rows', 'newline="" parameter'],
    testCases: [
      { name: 'Imports csv', test: (code) => code.includes('import csv'), errorMessage: 'Import csv module' }
    ]
  },
  {
    id: 'py-51',
    title: 'Web Scraping with BeautifulSoup',
    description: 'Extract data from HTML',
    content: `# Web Scraping - Extract Web Data

\`\`\`python
from bs4 import BeautifulSoup
import requests

# Fetch webpage
response = requests.get('https://example.com')
soup = BeautifulSoup(response.text, 'html.parser')

# Find elements
title = soup.find('h1').text
links = soup.find_all('a')

for link in links:
    print(link.get('href'))

# CSS selectors
articles = soup.select('.article-title')
\`\`\``,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 30,
    initialCode: `from bs4 import BeautifulSoup\n\nhtml = '<div><h1>Title</h1><p class="text">Content</p></div>'\nsoup = BeautifulSoup(html, 'html.parser')\n\n# Extract title and text`,
    solution: `from bs4 import BeautifulSoup\n\nhtml = '<div><h1>Title</h1><p class="text">Content</p></div>'\nsoup = BeautifulSoup(html, 'html.parser')\n\ntitle = soup.find('h1').text\ntext = soup.find('p', class_='text').text\n\nprint(title)\nprint(text)`,
    hints: ['soup.find() for single element', '.text to get content', 'class_ for class attribute'],
    testCases: [
      { name: 'Imports BeautifulSoup', test: (code) => code.includes('BeautifulSoup'), errorMessage: 'Import BeautifulSoup' }
    ]
  },
  {
    id: 'py-52',
    title: 'Flask Web Framework Basics',
    description: 'Build web applications with Flask',
    content: `# Flask - Python Web Framework

\`\`\`python
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return '<h1>Welcome!</h1>'

@app.route('/user/<name>')
def user(name):
    return f'<h1>Hello, {name}!</h1>'

@app.route('/submit', methods=['POST'])
def submit():
    data = request.form['data']
    return f'Received: {data}'

if __name__ == '__main__':
    app.run(debug=True)
\`\`\``,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 35,
    initialCode: `from flask import Flask\n\napp = Flask(__name__)\n\n# Create routes for home and about pages\n# Home: "Welcome"\n# About: "About Us"`,
    solution: `from flask import Flask\n\napp = Flask(__name__)\n\n@app.route('/')\ndef home():\n    return '<h1>Welcome</h1>'\n\n@app.route('/about')\ndef about():\n    return '<h1>About Us</h1>'\n\nif __name__ == '__main__':\n    app.run(debug=True)`,
    hints: ['Use @app.route() decorator', 'Return HTML strings', 'app.run() to start server'],
    testCases: [
      { name: 'Imports Flask', test: (code) => code.includes('Flask'), errorMessage: 'Import Flask' },
      { name: 'Has routes', test: (code) => code.includes('@app.route'), errorMessage: 'Create routes with @app.route()' }
    ]
  },
  {
    id: 'py-53',
    title: 'Database with SQLite',
    description: 'Store data in SQLite database',
    content: `# SQLite - Lightweight Database

\`\`\`python
import sqlite3

# Connect
conn = sqlite3.connect('database.db')
cursor = conn.cursor()

# Create table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT,
        email TEXT
    )
''')

# Insert
cursor.execute('INSERT INTO users (name, email) VALUES (?, ?)', 
               ('Alice', 'alice@email.com'))

# Query
cursor.execute('SELECT * FROM users')
rows = cursor.fetchall()

# Commit and close
conn.commit()
conn.close()
\`\`\``,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 35,
    initialCode: `import sqlite3\n\n# Create products table with: id, name, price\n# Insert 2 products\n# Query all products`,
    solution: `import sqlite3\n\nconn = sqlite3.connect('shop.db')\ncursor = conn.cursor()\n\ncursor.execute('''\n    CREATE TABLE IF NOT EXISTS products (\n        id INTEGER PRIMARY KEY,\n        name TEXT,\n        price REAL\n    )\n''')\n\ncursor.execute('INSERT INTO products (name, price) VALUES (?, ?)', ('Laptop', 999.99))\ncursor.execute('INSERT INTO products (name, price) VALUES (?, ?)', ('Mouse', 29.99))\n\ncursor.execute('SELECT * FROM products')\nproducts = cursor.fetchall()\nfor p in products:\n    print(p)\n\nconn.commit()\nconn.close()`,
    hints: ['CREATE TABLE IF NOT EXISTS', 'Use ? for parameters', 'fetchall() to get results'],
    testCases: [
      { name: 'Imports sqlite3', test: (code) => code.includes('sqlite3'), errorMessage: 'Import sqlite3' },
      { name: 'Creates table', test: (code) => code.includes('CREATE TABLE'), errorMessage: 'Create a table' }
    ]
  },
  {
    id: 'py-54',
    title: 'NumPy Arrays',
    description: 'Scientific computing with NumPy',
    content: `# NumPy - Numerical Python

\`\`\`python
import numpy as np

# Create arrays
arr = np.array([1, 2, 3, 4, 5])
matrix = np.array([[1, 2], [3, 4]])
zeros = np.zeros((3, 3))
ones = np.ones((2, 4))
range_arr = np.arange(0, 10, 2)  # [0, 2, 4, 6, 8]

# Operations
arr * 2  # [2, 4, 6, 8, 10]
arr + arr  # [2, 4, 6, 8, 10]
arr ** 2  # [1, 4, 9, 16, 25]

# Statistics
arr.mean()
arr.std()
arr.max()
\`\`\``,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 30,
    initialCode: `import numpy as np\n\n# Create array from 1-20\n# Calculate mean, max, min`,
    solution: `import numpy as np\n\narr = np.arange(1, 21)\nmean = arr.mean()\nmax_val = arr.max()\nmin_val = arr.min()\n\nprint(f"Mean: {mean}")\nprint(f"Max: {max_val}")\nprint(f"Min: {min_val}")`,
    hints: ['np.arange(1, 21)', 'arr.mean(), arr.max(), arr.min()', 'import numpy as np'],
    testCases: [
      { name: 'Imports numpy', test: (code) => code.includes('numpy') || code.includes('np'), errorMessage: 'Import numpy' }
    ]
  },
  {
    id: 'py-55',
    title: 'Pandas DataFrames',
    description: 'Data analysis with Pandas',
    content: `# Pandas - Data Analysis

\`\`\`python
import pandas as pd

# Create DataFrame
data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['NYC', 'LA', 'Chicago']
}
df = pd.DataFrame(data)

# Read CSV
df = pd.read_csv('data.csv')

# Basic operations
df.head()  # First 5 rows
df.info()  # Info
df.describe()  # Statistics

# Filter
young = df[df['Age'] < 30]

# Group by
df.groupby('City')['Age'].mean()
\`\`\``,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 35,
    initialCode: `import pandas as pd\n\n# Create DataFrame with students: Name, Grade, Score\n# Filter students with Score > 80`,
    solution: `import pandas as pd\n\ndata = {\n    'Name': ['Alice', 'Bob', 'Charlie', 'David'],\n    'Grade': ['A', 'B', 'A', 'C'],\n    'Score': [95, 78, 88, 72]\n}\n\ndf = pd.DataFrame(data)\nhigh_scores = df[df['Score'] > 80]\nprint(high_scores)`,
    hints: ['Create dict with lists', 'pd.DataFrame(data)', 'df[df[\'Score\'] > 80]'],
    testCases: [
      { name: 'Imports pandas', test: (code) => code.includes('pandas') || code.includes('pd'), errorMessage: 'Import pandas' }
    ]
  },
  {
    id: 'py-56',
    title: 'Matplotlib Visualization',
    description: 'Create plots and charts',
    content: `# Matplotlib - Data Visualization

\`\`\`python
import matplotlib.pyplot as plt

# Line plot
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]
plt.plot(x, y)
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.title('My Plot')
plt.show()

# Bar chart
categories = ['A', 'B', 'C']
values = [10, 20, 15]
plt.bar(categories, values)
plt.show()

# Scatter plot
plt.scatter(x, y)
plt.show()
\`\`\``,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 30,
    initialCode: `import matplotlib.pyplot as plt\n\n# Create bar chart of test scores\nstudents = ['Alice', 'Bob', 'Charlie']\nscores = [95, 78, 88]`,
    solution: `import matplotlib.pyplot as plt\n\nstudents = ['Alice', 'Bob', 'Charlie']\nscores = [95, 78, 88]\n\nplt.bar(students, scores)\nplt.xlabel('Students')\nplt.ylabel('Scores')\nplt.title('Test Scores')\nplt.show()`,
    hints: ['plt.bar(x, y)', 'plt.xlabel() and plt.ylabel()', 'plt.show() to display'],
    testCases: [
      { name: 'Imports matplotlib', test: (code) => code.includes('matplotlib') || code.includes('plt'), errorMessage: 'Import matplotlib.pyplot' }
    ]
  },
  {
    id: 'py-57',
    title: 'Machine Learning with scikit-learn',
    description: 'Build your first ML model',
    content: `# Scikit-Learn - Machine Learning

\`\`\`python
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

# Data
X = [[1], [2], [3], [4], [5]]
y = [2, 4, 6, 8, 10]

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2
)

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Predict
predictions = model.predict(X_test)

# Score
score = model.score(X_test, y_test)
\`\`\``,
    language: 'python',
    difficulty: 'Expert',
    estimatedTime: 40,
    initialCode: `from sklearn.linear_model import LinearRegression\n\n# Create and train a simple linear regression model\nX = [[1], [2], [3], [4]]\ny = [3, 5, 7, 9]`,
    solution: `from sklearn.linear_model import LinearRegression\n\nX = [[1], [2], [3], [4]]\ny = [3, 5, 7, 9]\n\nmodel = LinearRegression()\nmodel.fit(X, y)\n\nprediction = model.predict([[5]])\nprint(f"Prediction for 5: {prediction[0]}")`,
    hints: ['model = LinearRegression()', 'model.fit(X, y)', 'model.predict() for predictions'],
    testCases: [
      { name: 'Imports sklearn', test: (code) => code.includes('sklearn'), errorMessage: 'Import from sklearn' }
    ]
  },
  {
    id: 'py-58',
    title: 'Web APIs with Requests',
    description: 'Interact with REST APIs',
    content: `# HTTP Requests - API Integration

\`\`\`python
import requests

# GET request
response = requests.get('https://api.example.com/users')
data = response.json()

# POST request
payload = {'name': 'Alice', 'email': 'alice@test.com'}
response = requests.post('https://api.example.com/users', json=payload)

# Headers
headers = {'Authorization': 'Bearer TOKEN'}
response = requests.get('https://api.example.com/protected', headers=headers)

# Error handling
if response.status_code == 200:
    print('Success!')
else:
    print(f'Error: {response.status_code}')
\`\`\``,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 30,
    initialCode: `import requests\n\n# Fetch data from JSONPlaceholder API\n# Get first user (id=1)`,
    solution: `import requests\n\nresponse = requests.get('https://jsonplaceholder.typicode.com/users/1')\nuser = response.json()\n\nprint(f"Name: {user['name']}")\nprint(f"Email: {user['email']}")`,
    hints: ['requests.get(url)', 'response.json() to parse', 'Check response.status_code'],
    testCases: [
      { name: 'Imports requests', test: (code) => code.includes('requests'), errorMessage: 'Import requests module' }
    ]
  },
  {
    id: 'py-59',
    title: 'Logging Best Practices',
    description: 'Implement proper logging',
    content: `# Logging - Track Application Events

\`\`\`python
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    filename='app.log'
)

logger = logging.getLogger(__name__)

# Log levels
logger.debug('Debug info')
logger.info('Info message')
logger.warning('Warning!')
logger.error('Error occurred')
logger.critical('Critical issue!')

# Exception logging
try:
    1 / 0
except Exception as e:
    logger.exception('Exception caught')
\`\`\``,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 25,
    initialCode: `import logging\n\n# Set up logging\n# Log an info message`,
    solution: `import logging\n\nlogging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')\nlogger = logging.getLogger(__name__)\n\nlogger.info('Application started')\nlogger.warning('This is a warning')\nlogger.error('An error occurred')`,
    hints: ['logging.basicConfig()', 'logger.info(), logger.warning()', 'getLogger(__name__)'],
    testCases: [
      { name: 'Imports logging', test: (code) => code.includes('import logging'), errorMessage: 'Import logging module' }
    ]
  },
  {
    id: 'py-60',
    title: 'Environment Variables',
    description: 'Manage configuration with environment variables',
    content: `# Environment Variables - Configuration Management

\`\`\`python
import os
from dotenv import load_dotenv

# Load from .env file
load_dotenv()

# Get environment variable
api_key = os.getenv('API_KEY')
database_url = os.getenv('DATABASE_URL', 'default_value')

# Set environment variable
os.environ['MY_VAR'] = 'value'

# Check if exists
if 'API_KEY' in os.environ:
    print('API key found')
\`\`\`

.env file:
\`\`\`
API_KEY=your_secret_key
DATABASE_URL=postgresql://localhost/mydb
DEBUG=True
\`\`\``,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `import os\n\n# Get environment variable or use default\napp_name = # Your code here\nprint(f"App: {app_name}")`,
    solution: `import os\n\napp_name = os.getenv('APP_NAME', 'MyApp')\nprint(f"App: {app_name}")\n\nport = os.getenv('PORT', '8000')\nprint(f"Port: {port}")`,
    hints: ['os.getenv(\'KEY\', \'default\')', 'Import os module', 'Second argument is default'],
    testCases: [
      { name: 'Imports os', test: (code) => code.includes('import os'), errorMessage: 'Import os module' },
      { name: 'Uses getenv', test: (code) => code.includes('getenv'), errorMessage: 'Use os.getenv()' }
    ]
  },
  {
    id: 'py-61',
    title: 'Command Line Arguments',
    description: 'Parse command line arguments',
    content: `# Command Line Arguments - argparse

\`\`\`python
import argparse

parser = argparse.ArgumentParser(description='My CLI tool')

# Positional argument
parser.add_argument('filename', help='File to process')

# Optional argument
parser.add_argument('-v', '--verbose', action='store_true', help='Verbose output')
parser.add_argument('-o', '--output', help='Output file')

# Parse arguments
args = parser.parse_args()

print(f"Processing: {args.filename}")
if args.verbose:
    print("Verbose mode on")
\`\`\``,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 25,
    initialCode: `import argparse\n\n# Create parser for a calculator\n# Arguments: num1, num2, operation (--op)`,
    solution: `import argparse\n\nparser = argparse.ArgumentParser(description='Simple calculator')\nparser.add_argument('num1', type=float, help='First number')\nparser.add_argument('num2', type=float, help='Second number')\nparser.add_argument('--op', choices=['add', 'sub', 'mul', 'div'], required=True)\n\nargs = parser.parse_args()`,
    hints: ['argparse.ArgumentParser()', 'add_argument() for each arg', 'type=float for numbers'],
    testCases: [
      { name: 'Imports argparse', test: (code) => code.includes('argparse'), errorMessage: 'Import argparse module' }
    ]
  },
  {
    id: 'py-62',
    title: 'Working with Dates and Times',
    description: 'datetime module for time operations',
    content: `# DateTime - Work with Dates and Times

\`\`\`python
from datetime import datetime, timedelta, date

# Current date/time
now = datetime.now()
today = date.today()

# Create specific date
birthday = datetime(1990, 5, 15, 14, 30)

# Format
formatted = now.strftime('%Y-%m-%d %H:%M:%S')
parsed = datetime.strptime('2024-01-15', '%Y-%m-%d')

# Arithmetic
tomorrow = today + timedelta(days=1)
next_week = now + timedelta(weeks=1)
two_hours_ago = now - timedelta(hours=2)

# Compare
if birthday < now:
    print('Birthday has passed')
\`\`\``,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 25,
    initialCode: `from datetime import datetime, timedelta\n\n# Calculate date 30 days from now\n# Format as YYYY-MM-DD`,
    solution: `from datetime import datetime, timedelta\n\nnow = datetime.now()\nfuture = now + timedelta(days=30)\nformatted = future.strftime('%Y-%m-%d')\nprint(formatted)`,
    hints: ['datetime.now()', 'timedelta(days=30)', 'strftime(\'%Y-%m-%d\')'],
    testCases: [
      { name: 'Imports datetime', test: (code) => code.includes('datetime'), errorMessage: 'Import datetime' }
    ]
  },
  {
    id: 'py-63',
    title: 'Path Operations with pathlib',
    description: 'Modern file path handling',
    content: `# pathlib - Object-Oriented File Paths

\`\`\`python
from pathlib import Path

# Create path
p = Path('data/files/doc.txt')

# Properties
p.name  # 'doc.txt'
p.stem  # 'doc'
p.suffix  # '.txt'
p.parent  # Path('data/files')

# Join paths
base = Path('data')
file_path = base / 'files' / 'doc.txt'

# Check existence
p.exists()
p.is_file()
p.is_dir()

# Create directory
Path('new_folder').mkdir(parents=True, exist_ok=True)

# List files
for file in Path('.').glob('*.py'):
    print(file)
\`\`\``,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `from pathlib import Path\n\n# Create path to 'documents/reports/2024.pdf'\n# Print name and parent directory`,
    solution: `from pathlib import Path\n\np = Path('documents/reports/2024.pdf')\nprint(f"Name: {p.name}")\nprint(f"Parent: {p.parent}")\nprint(f"Suffix: {p.suffix}")`,
    hints: ['Path(\'path/to/file\')', '.name, .parent, .suffix', 'Use / to join paths'],
    testCases: [
      { name: 'Imports Path', test: (code) => code.includes('Path'), errorMessage: 'Import Path from pathlib' }
    ]
  },
  {
    id: 'py-64',
    title: 'Collections Module',
    description: 'Specialized container datatypes',
    content: `# Collections - Specialized Containers

\`\`\`python
from collections import Counter, defaultdict, namedtuple, deque

# Counter - count items
words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']
counter = Counter(words)
counter['apple']  # 3
counter.most_common(2)  # [('apple', 3), ('banana', 2)]

# defaultdict - default values
d = defaultdict(list)
d['fruits'].append('apple')

# namedtuple - readable tuples
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)
p.x  # 10

# deque - efficient queue
queue = deque([1, 2, 3])
queue.append(4)
queue.appendleft(0)
queue.pop()
\`\`\``,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 30,
    initialCode: `from collections import Counter\n\n# Count letter frequency in a word\nword = "programming"`,
    solution: `from collections import Counter\n\nword = "programming"\nfreq = Counter(word)\nprint(freq)\nprint(f"Most common: {freq.most_common(3)}")`,
    hints: ['Counter(word)', 'freq.most_common(n)', 'Counter is a dict subclass'],
    testCases: [
      { name: 'Imports Counter', test: (code) => code.includes('Counter'), errorMessage: 'Import Counter from collections' }
    ]
  },
  {
    id: 'py-65',
    title: 'itertools - Iterator Functions',
    description: 'Efficient looping with itertools',
    content: `# itertools - Iterator Tools

\`\`\`python
from itertools import count, cycle, chain, combinations, permutations

# Infinite iterators
counter = count(start=10, step=2)  # 10, 12, 14, ...
cycler = cycle([1, 2, 3])  # 1, 2, 3, 1, 2, 3, ...

# Combinatorics
list(combinations([1, 2, 3], 2))  # [(1,2), (1,3), (2,3)]
list(permutations([1, 2, 3], 2))  # [(1,2), (1,3), (2,1), ...]

# Chain - combine iterables
list(chain([1, 2], [3, 4]))  # [1, 2, 3, 4]

# Product - cartesian product
from itertools import product
list(product([1, 2], ['a', 'b']))  # [(1,'a'), (1,'b'), (2,'a'), (2,'b')]
\`\`\``,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `from itertools import combinations\n\n# Find all 2-number combinations from [1,2,3,4,5]`,
    solution: `from itertools import combinations\n\nnumbers = [1, 2, 3, 4, 5]\ncombos = list(combinations(numbers, 2))\nprint(combos)\nprint(f"Total combinations: {len(combos)}")`,
    hints: ['combinations(list, r)', 'Convert to list with list()', 'r is combination size'],
    testCases: [
      { name: 'Imports itertools', test: (code) => code.includes('itertools') || code.includes('combinations'), errorMessage: 'Import from itertools' }
    ]
  },
  {
    id: 'py-66',
    title: 'Functools - Higher Order Functions',
    description: 'Function manipulation tools',
    content: `# functools - Functional Programming Tools

\`\`\`python
from functools import reduce, lru_cache, partial

# reduce - accumulate
from functools import reduce
numbers = [1, 2, 3, 4, 5]
total = reduce(lambda x, y: x + y, numbers)  # 15

# lru_cache - memoization
@lru_cache(maxsize=None)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# partial - pre-fill arguments
def power(base, exponent):
    return base ** exponent

square = partial(power, exponent=2)
cube = partial(power, exponent=3)
square(5)  # 25
\`\`\``,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 30,
    initialCode: `from functools import reduce\n\n# Use reduce to find product of [1,2,3,4,5]`,
    solution: `from functools import reduce\n\nnumbers = [1, 2, 3, 4, 5]\nproduct = reduce(lambda x, y: x * y, numbers)\nprint(f"Product: {product}")`,
    hints: ['reduce(lambda x, y: x * y, list)', 'Lambda for multiplication', 'Result is accumulated value'],
    testCases: [
      { name: 'Imports reduce', test: (code) => code.includes('reduce'), errorMessage: 'Import reduce from functools' }
    ]
  },
  {
    id: 'py-67',
    title: 'Email Sending with smtplib',
    description: 'Send emails programmatically',
    content: `# SMTP - Send Emails

\`\`\`python
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Create message
msg = MIMEMultipart()
msg['From'] = 'sender@example.com'
msg['To'] = 'recipient@example.com'
msg['Subject'] = 'Test Email'

body = 'This is a test email'
msg.attach(MIMEText(body, 'plain'))

# Send email
server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()
server.login('your_email@gmail.com', 'your_password')
server.send_message(msg)
server.quit()
\`\`\``,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `from email.mime.text import MIMEText\nfrom email.mime.multipart import MIMEMultipart\n\n# Create email message structure`,
    solution: `from email.mime.text import MIMEText\nfrom email.mime.multipart import MIMEMultipart\n\nmsg = MIMEMultipart()\nmsg['From'] = 'sender@example.com'\nmsg['To'] = 'recipient@example.com'\nmsg['Subject'] = 'Hello!'\n\nbody = 'This is the email body'\nmsg.attach(MIMEText(body, 'plain'))\n\nprint(msg.as_string())`,
    hints: ['MIMEMultipart()', 'msg[\'From\'], msg[\'To\']', 'msg.attach(MIMEText(body))'],
    testCases: [
      { name: 'Imports MIME', test: (code) => code.includes('MIMEText') || code.includes('MIMEMultipart'), errorMessage: 'Import from email.mime' }
    ]
  },
  {
    id: 'py-68',
    title: 'ZIP File Operations',
    description: 'Create and extract ZIP archives',
    content: `# zipfile - Archive Operations

\`\`\`python
import zipfile
import os

# Create ZIP
with zipfile.ZipFile('archive.zip', 'w') as zf:
    zf.write('file1.txt')
    zf.write('file2.txt')

# Extract ZIP
with zipfile.ZipFile('archive.zip', 'r') as zf:
    zf.extractall('extracted_folder')

# List contents
with zipfile.ZipFile('archive.zip', 'r') as zf:
    print(zf.namelist())

# Add to existing
with zipfile.ZipFile('archive.zip', 'a') as zf:
    zf.write('file3.txt')
\`\`\``,
    language: 'python',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `import zipfile\n\n# List files in a ZIP archive\nwith zipfile.ZipFile('data.zip', 'r') as zf:\n    # Your code here\n    pass`,
    solution: `import zipfile\n\nwith zipfile.ZipFile('data.zip', 'r') as zf:\n    files = zf.namelist()\n    print("Files in archive:")\n    for file in files:\n        print(f"  - {file}")\n    \n    # Get file info\n    for info in zf.infolist():\n        print(f"{info.filename}: {info.file_size} bytes")`,
    hints: ['zf.namelist() for file list', 'zf.infolist() for details', 'Loop through results'],
    testCases: [
      { name: 'Imports zipfile', test: (code) => code.includes('zipfile'), errorMessage: 'Import zipfile module' }
    ]
  },
  {
    id: 'py-69',
    title: 'Command Pattern & Design Patterns',
    description: 'Implement common design patterns',
    content: `# Design Patterns - Reusable Solutions

## Singleton Pattern
\`\`\`python
class Singleton:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
\`\`\`

## Factory Pattern
\`\`\`python
class AnimalFactory:
    @staticmethod
    def create_animal(animal_type):
        if animal_type == 'dog':
            return Dog()
        elif animal_type == 'cat':
            return Cat()
\`\`\`

## Observer Pattern
\`\`\`python
class Subject:
    def __init__(self):
        self.observers = []
    
    def attach(self, observer):
        self.observers.append(observer)
    
    def notify(self):
        for observer in self.observers:
            observer.update()
\`\`\``,
    language: 'python',
    difficulty: 'Expert',
    estimatedTime: 40,
    initialCode: `# Implement a simple Singleton class\nclass DatabaseConnection:\n    # Your code here\n    pass`,
    solution: `class DatabaseConnection:\n    _instance = None\n    \n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n            cls._instance.connection = "Connected"\n        return cls._instance\n\n# Test\ndb1 = DatabaseConnection()\ndb2 = DatabaseConnection()\nprint(db1 is db2)  # True`,
    hints: ['Use __new__ method', '_instance class variable', 'Return existing instance'],
    testCases: [
      { name: 'Has __new__', test: (code) => code.includes('__new__'), errorMessage: 'Implement __new__ method' }
    ]
  },
  {
    id: 'py-70',
    title: 'Full Stack Python Project',
    description: 'Build a complete web application',
    content: `# Capstone: Full Stack Web App

Build a complete task management application:

## Features
- User authentication
- CRUD operations for tasks
- SQLite database
- RESTful API
- Web interface

## Technologies
- Flask (backend)
- SQLite (database)
- HTML/CSS (frontend)
- JavaScript (interactivity)

## Structure
\`\`\`
project/
  app.py          # Flask app
  models.py       # Database models
  templates/      # HTML
  static/         # CSS/JS
  database.db     # SQLite
\`\`\`

Implement the full stack!`,
    language: 'python',
    difficulty: 'Expert',
    estimatedTime: 120,
    isProject: true,
    projectDescription: 'Build complete task manager web app',
    initialCode: `# app.py - Flask application\nfrom flask import Flask, render_template, request, jsonify\nimport sqlite3\n\napp = Flask(__name__)\n\n# Your code here`,
    solution: `from flask import Flask, render_template, request, jsonify\nimport sqlite3\nfrom datetime import datetime\n\napp = Flask(__name__)\n\ndef init_db():\n    conn = sqlite3.connect('tasks.db')\n    c = conn.cursor()\n    c.execute('''\n        CREATE TABLE IF NOT EXISTS tasks (\n            id INTEGER PRIMARY KEY,\n            title TEXT NOT NULL,\n            description TEXT,\n            completed BOOLEAN DEFAULT 0,\n            created_at TIMESTAMP\n        )\n    ''')\n    conn.commit()\n    conn.close()\n\n@app.route('/')\ndef index():\n    return render_template('index.html')\n\n@app.route('/api/tasks', methods=['GET', 'POST'])\ndef tasks():\n    conn = sqlite3.connect('tasks.db')\n    c = conn.cursor()\n    \n    if request.method == 'POST':\n        data = request.json\n        c.execute('INSERT INTO tasks (title, description, created_at) VALUES (?, ?, ?)',\n                 (data['title'], data.get('description', ''), datetime.now()))\n        conn.commit()\n        return jsonify({'success': True})\n    \n    c.execute('SELECT * FROM tasks')\n    tasks = c.fetchall()\n    conn.close()\n    return jsonify([{'id': t[0], 'title': t[1], 'description': t[2], 'completed': t[3]} for t in tasks])\n\nif __name__ == '__main__':\n    init_db()\n    app.run(debug=True)`,
    hints: [
      'Initialize database with init_db()',
      'Create routes for index and API',
      'Use jsonify for API responses',
      'Handle GET and POST methods'
    ],
    testCases: [
      { name: 'Imports Flask', test: (code) => code.includes('Flask'), errorMessage: 'Import Flask' },
      { name: 'Creates app', test: (code) => code.includes('app = Flask'), errorMessage: 'Create Flask app' },
      { name: 'Has routes', test: (code) => code.includes('@app.route'), errorMessage: 'Define routes' }
    ]
  }
];