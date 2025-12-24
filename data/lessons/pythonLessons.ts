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
    hints: ['Use curly braces {}', 'key: value pairs', '.items() for looping']
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
  }
];
