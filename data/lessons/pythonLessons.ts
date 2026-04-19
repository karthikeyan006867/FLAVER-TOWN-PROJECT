import { Lesson } from '../courses'

type PythonTopic = {
  title: string
  description: string
  focus: string
  miniTask: string
  starter: string
  solution: string
  estimatedTime: number
}

const pythonTopics: PythonTopic[] = [
  {
    title: 'Python Intro and Setup',
    description: 'Understand what Python is, where it is used, and how to run your first script.',
    focus: 'Python is a readable language used in web apps, automation, AI, and data work.',
    miniTask: 'Print your name, city, and one learning goal using three print statements.',
    starter: '# Your first Python program\n',
    solution: 'print("My name is Alex")\nprint("I live in Chennai")\nprint("Goal: Become confident with Python")\n',
    estimatedTime: 25
  },
  {
    title: 'Python Syntax Basics',
    description: 'Learn indentation, line structure, and how Python reads code blocks.',
    focus: 'Indentation is part of Python syntax, not just formatting.',
    miniTask: 'Write a simple if block and keep indentation correct.',
    starter: 'score = 75\n# Add an if statement here\n',
    solution: 'score = 75\nif score >= 50:\n    print("Pass")\n',
    estimatedTime: 25
  },
  {
    title: 'Comments and Readable Code',
    description: 'Use comments to explain intent and keep code understandable.',
    focus: 'Good comments explain why, not what every line does.',
    miniTask: 'Add comments to explain a short script that calculates total marks.',
    starter: 'math = 80\nscience = 90\ntotal = math + science\nprint(total)\n',
    solution: '# Scores for two subjects\nmath = 80\nscience = 90\n\n# Total score\ntotal = math + science\nprint(total)\n',
    estimatedTime: 20
  },
  {
    title: 'Variables and Naming Rules',
    description: 'Store data in variables and follow clean naming practices.',
    focus: 'Use descriptive names like user_age instead of a or x1 for clarity.',
    miniTask: 'Create variables for a product name, price, and stock count.',
    starter: '# Create product variables\n',
    solution: 'product_name = "Keyboard"\nprice = 1499\nstock_count = 12\nprint(product_name, price, stock_count)\n',
    estimatedTime: 25
  },
  {
    title: 'Input and Output',
    description: 'Take user input and display meaningful output messages.',
    focus: 'input() always returns text, so convert when numeric values are needed.',
    miniTask: 'Ask for age and print what age the user will be next year.',
    starter: 'name = input("Enter your name: ")\n# Ask for age and print result\n',
    solution: 'name = input("Enter your name: ")\nage = int(input("Enter your age: "))\nprint(f"Hi {name}, next year you will be {age + 1}")\n',
    estimatedTime: 30
  },
  {
    title: 'Numbers and Math Operations',
    description: 'Work with integers, floats, and arithmetic operators.',
    focus: 'Python supports +, -, *, /, //, %, and ** for common math needs.',
    miniTask: 'Compute bill total and average amount spent for 3 days.',
    starter: 'day1 = 250\nday2 = 300\nday3 = 450\n# Calculate total and average\n',
    solution: 'day1 = 250\nday2 = 300\nday3 = 450\ntotal = day1 + day2 + day3\navg = total / 3\nprint(total, avg)\n',
    estimatedTime: 30
  },
  {
    title: 'Type Conversion (Casting)',
    description: 'Convert values between string, int, float, and bool safely.',
    focus: 'Explicit conversion avoids unexpected bugs in calculations.',
    miniTask: 'Convert two text inputs into numbers and print their sum.',
    starter: 'a = input("Number A: ")\nb = input("Number B: ")\n# Convert and add\n',
    solution: 'a = input("Number A: ")\nb = input("Number B: ")\ntotal = int(a) + int(b)\nprint(total)\n',
    estimatedTime: 30
  },
  {
    title: 'Strings and Formatting',
    description: 'Create, combine, and format strings with f-strings.',
    focus: 'f-strings are the easiest and cleanest way to build dynamic messages.',
    miniTask: 'Create a profile sentence using f-string formatting.',
    starter: 'name = "Riya"\nrole = "Student"\n# Print formatted sentence\n',
    solution: 'name = "Riya"\nrole = "Student"\nprint(f"{name} is a {role} learning Python.")\n',
    estimatedTime: 25
  },
  {
    title: 'String Methods',
    description: 'Use common methods like lower, upper, split, strip, and replace.',
    focus: 'String methods help clean and transform user input quickly.',
    miniTask: 'Clean a messy username and print normalized output.',
    starter: 'raw_name = "  JoHN_dOE  "\n# Normalize the string\n',
    solution: 'raw_name = "  JoHN_dOE  "\nclean = raw_name.strip().replace("_", " ").title()\nprint(clean)\n',
    estimatedTime: 30
  },
  {
    title: 'Booleans and Comparison Operators',
    description: 'Use true/false logic with comparison operators for decisions.',
    focus: 'Comparisons like ==, !=, >, < return boolean values.',
    miniTask: 'Check if a user is eligible to vote.',
    starter: 'age = 17\n# Create eligibility check\n',
    solution: 'age = 17\nis_eligible = age >= 18\nprint(is_eligible)\n',
    estimatedTime: 25
  },
  {
    title: 'Logical Operators',
    description: 'Combine conditions using and, or, and not.',
    focus: 'Logical operators help build realistic validation rules.',
    miniTask: 'Check if a login is valid using username and password length.',
    starter: 'username = "alex"\npassword = "12345"\n# Validate both values\n',
    solution: 'username = "alex"\npassword = "12345"\nis_valid = len(username) >= 3 and len(password) >= 8\nprint(is_valid)\n',
    estimatedTime: 30
  },
  {
    title: 'If, Elif, Else',
    description: 'Build branching logic for different outcomes.',
    focus: 'if/elif/else lets your program choose between multiple paths.',
    miniTask: 'Print grade based on marks.',
    starter: 'marks = 82\n# Add grade logic\n',
    solution: 'marks = 82\nif marks >= 90:\n    print("A")\nelif marks >= 75:\n    print("B")\nelse:\n    print("C")\n',
    estimatedTime: 30
  },
  {
    title: 'Match-Case Patterns',
    description: 'Use match-case for cleaner multi-option branching (Python 3.10+).',
    focus: 'match-case can be clearer than long if-elif chains for fixed options.',
    miniTask: 'Map day number to weekday name using match-case.',
    starter: 'day = 3\n# Use match-case\n',
    solution: 'day = 3\nmatch day:\n    case 1:\n        print("Monday")\n    case 2:\n        print("Tuesday")\n    case 3:\n        print("Wednesday")\n    case _:\n        print("Unknown")\n',
    estimatedTime: 35
  },
  {
    title: 'While Loops',
    description: 'Repeat actions while a condition is true.',
    focus: 'while loops are useful when number of repetitions is not known in advance.',
    miniTask: 'Print numbers 1 to 5 using while loop.',
    starter: 'count = 1\n# Print 1..5\n',
    solution: 'count = 1\nwhile count <= 5:\n    print(count)\n    count += 1\n',
    estimatedTime: 30
  },
  {
    title: 'For Loops and Range',
    description: 'Use for loops to iterate over sequences and number ranges.',
    focus: 'for loops are concise and ideal for fixed iteration tasks.',
    miniTask: 'Print multiplication table of 4 from 1 to 10.',
    starter: '# Print 4 table\n',
    solution: 'for i in range(1, 11):\n    print(f"4 x {i} = {4 * i}")\n',
    estimatedTime: 30
  },
  {
    title: 'Break, Continue, Pass',
    description: 'Control loop flow using break, continue, and pass.',
    focus: 'Use these statements to skip, stop, or leave placeholders in logic.',
    miniTask: 'Print odd numbers from 1 to 10 using continue.',
    starter: 'for i in range(1, 11):\n    # Use continue for even numbers\n    pass\n',
    solution: 'for i in range(1, 11):\n    if i % 2 == 0:\n        continue\n    print(i)\n',
    estimatedTime: 25
  },
  {
    title: 'Lists Basics',
    description: 'Store ordered collections and access elements by index.',
    focus: 'Lists are mutable and are the most common Python collection type.',
    miniTask: 'Create a shopping list and print first and last item.',
    starter: '# Create a list of items\n',
    solution: 'items = ["milk", "bread", "eggs", "rice"]\nprint(items[0])\nprint(items[-1])\n',
    estimatedTime: 30
  },
  {
    title: 'List Methods',
    description: 'Use append, remove, pop, sort, and reverse effectively.',
    focus: 'List methods help update collection data during runtime.',
    miniTask: 'Add a value, remove one value, and print sorted result.',
    starter: 'scores = [70, 85, 60]\n# Update this list\n',
    solution: 'scores = [70, 85, 60]\nscores.append(90)\nscores.remove(60)\nscores.sort()\nprint(scores)\n',
    estimatedTime: 30
  },
  {
    title: 'Tuples',
    description: 'Use immutable ordered collections when data should not change.',
    focus: 'Tuples are lightweight and useful for fixed records.',
    miniTask: 'Store RGB color values in tuple and print each value.',
    starter: '# Create RGB tuple\n',
    solution: 'rgb = (255, 120, 40)\nprint(rgb[0], rgb[1], rgb[2])\n',
    estimatedTime: 20
  },
  {
    title: 'Sets',
    description: 'Use sets for unique values and fast membership checks.',
    focus: 'Sets automatically remove duplicates.',
    miniTask: 'Remove duplicate tags from a list using set.',
    starter: 'tags = ["python", "ai", "python", "web"]\n# Keep unique tags\n',
    solution: 'tags = ["python", "ai", "python", "web"]\nunique_tags = set(tags)\nprint(unique_tags)\n',
    estimatedTime: 25
  },
  {
    title: 'Dictionaries Basics',
    description: 'Work with key-value data structures.',
    focus: 'Dictionaries are ideal for structured records like user profiles.',
    miniTask: 'Create user dictionary and print name and city values.',
    starter: '# Create a user dictionary\n',
    solution: 'user = {"name": "Asha", "city": "Madurai", "age": 21}\nprint(user["name"])\nprint(user["city"])\n',
    estimatedTime: 30
  },
  {
    title: 'Dictionary Methods',
    description: 'Use get, keys, values, items, update, and pop.',
    focus: 'Dictionary methods help safely read and modify data.',
    miniTask: 'Use get for missing key and add a new key.',
    starter: 'profile = {"name": "Sam", "level": "Beginner"}\n# Read and update\n',
    solution: 'profile = {"name": "Sam", "level": "Beginner"}\nprint(profile.get("city", "Unknown"))\nprofile.update({"city": "Salem"})\nprint(profile)\n',
    estimatedTime: 30
  },
  {
    title: 'Nested Data Structures',
    description: 'Combine lists and dictionaries for realistic data models.',
    focus: 'Real apps often use nested dictionaries and lists together.',
    miniTask: 'Create a list of student dictionaries and print one field.',
    starter: '# Build nested data\n',
    solution: 'students = [{"name": "Ana", "score": 90}, {"name": "Raj", "score": 85}]\nprint(students[1]["name"])\n',
    estimatedTime: 35
  },
  {
    title: 'List Comprehensions',
    description: 'Build lists in one readable line using comprehensions.',
    focus: 'Comprehensions are concise but should remain readable.',
    miniTask: 'Create a list of squares from 1 to 10.',
    starter: '# Use list comprehension\n',
    solution: 'squares = [n * n for n in range(1, 11)]\nprint(squares)\n',
    estimatedTime: 30
  },
  {
    title: 'Functions Fundamentals',
    description: 'Define reusable functions with parameters and return values.',
    focus: 'Functions reduce repetition and organize code into small units.',
    miniTask: 'Create a function that returns area of a rectangle.',
    starter: '# Define rectangle_area function\n',
    solution: 'def rectangle_area(width, height):\n    return width * height\n\nprint(rectangle_area(5, 3))\n',
    estimatedTime: 35
  },
  {
    title: 'Function Arguments Deep Dive',
    description: 'Use positional, keyword, default, and variable-length arguments.',
    focus: 'Flexible function signatures make APIs easier to use.',
    miniTask: 'Create a greet function with default city and keyword args.',
    starter: '# Define greet function\n',
    solution: 'def greet(name, city="Chennai"):\n    return f"Hello {name} from {city}"\n\nprint(greet("Irfan"))\nprint(greet(name="Nila", city="Coimbatore"))\n',
    estimatedTime: 35
  },
  {
    title: 'Scope and Lifetime',
    description: 'Understand local, global, and nonlocal variable behavior.',
    focus: 'Scope determines where a variable can be read or modified.',
    miniTask: 'Create a global variable and read it inside a function.',
    starter: 'app_name = "Flavor Town"\n# Use inside function\n',
    solution: 'app_name = "Flavor Town"\n\ndef show_app():\n    print(app_name)\n\nshow_app()\n',
    estimatedTime: 30
  },
  {
    title: 'Lambda, Map, Filter',
    description: 'Write compact transformations with functional helpers.',
    focus: 'Use these tools when they simplify code, not when they hide intent.',
    miniTask: 'Double each number in a list using map and lambda.',
    starter: 'nums = [1, 2, 3, 4]\n# Transform list\n',
    solution: 'nums = [1, 2, 3, 4]\ndoubled = list(map(lambda x: x * 2, nums))\nprint(doubled)\n',
    estimatedTime: 30
  },
  {
    title: 'Recursion Basics',
    description: 'Solve problems by calling a function from itself safely.',
    focus: 'Every recursive function needs a base case to stop.',
    miniTask: 'Write recursive factorial function.',
    starter: '# Write factorial(n)\n',
    solution: 'def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))\n',
    estimatedTime: 35
  },
  {
    title: 'Error Handling with Try Except',
    description: 'Prevent crashes by handling expected runtime errors.',
    focus: 'Graceful error handling improves user experience.',
    miniTask: 'Handle invalid integer input with try/except.',
    starter: 'value = "abc"\n# Convert safely\n',
    solution: 'value = "abc"\ntry:\n    number = int(value)\n    print(number)\nexcept ValueError:\n    print("Please enter a valid number")\n',
    estimatedTime: 35
  },
  {
    title: 'Raise and Custom Exceptions',
    description: 'Create and throw meaningful exceptions for invalid states.',
    focus: 'Raising clear exceptions helps debugging and API usage.',
    miniTask: 'Raise ValueError when age is negative.',
    starter: 'def set_age(age):\n    # Validate age\n    pass\n',
    solution: 'def set_age(age):\n    if age < 0:\n        raise ValueError("Age cannot be negative")\n    return age\n\nprint(set_age(20))\n',
    estimatedTime: 30
  },
  {
    title: 'File Handling Basics',
    description: 'Read and write text files using context managers.',
    focus: 'Use with open(...) so files close automatically.',
    miniTask: 'Write two lines to a file and read them back.',
    starter: '# Write and read demo.txt\n',
    solution: 'with open("demo.txt", "w", encoding="utf-8") as file:\n    file.write("Python is fun\\n")\n    file.write("File handling is useful\\n")\n\nwith open("demo.txt", "r", encoding="utf-8") as file:\n    print(file.read())\n',
    estimatedTime: 35
  },
  {
    title: 'Working with Paths and OS',
    description: 'Use pathlib and os tools for cross-platform file operations.',
    focus: 'pathlib makes path manipulation cleaner and safer.',
    miniTask: 'Create a folder and a file path using pathlib.',
    starter: 'from pathlib import Path\n# Create paths\n',
    solution: 'from pathlib import Path\n\nbase = Path("notes")\nbase.mkdir(exist_ok=True)\nfile_path = base / "todo.txt"\nprint(file_path)\n',
    estimatedTime: 35
  },
  {
    title: 'Modules and Imports',
    description: 'Split code into modules and import what you need.',
    focus: 'Modules keep code organized as projects grow.',
    miniTask: 'Import sqrt from math and compute root value.',
    starter: '# Use math module\n',
    solution: 'from math import sqrt\nprint(sqrt(81))\n',
    estimatedTime: 25
  },
  {
    title: 'Python Built-in Functions',
    description: 'Use core helpers like len, sum, min, max, sorted, and enumerate.',
    focus: 'Built-ins solve common tasks with less code.',
    miniTask: 'Use built-ins to summarize a list of marks.',
    starter: 'marks = [78, 88, 94, 67]\n# Print count, total, max\n',
    solution: 'marks = [78, 88, 94, 67]\nprint(len(marks))\nprint(sum(marks))\nprint(max(marks))\n',
    estimatedTime: 25
  },
  {
    title: 'Object-Oriented Programming Intro',
    description: 'Understand classes, objects, and why OOP is useful.',
    focus: 'Classes group data and behavior into reusable blueprints.',
    miniTask: 'Create a Student class and instantiate one object.',
    starter: '# Define Student class\n',
    solution: 'class Student:\n    def __init__(self, name):\n        self.name = name\n\nstudent = Student("Maya")\nprint(student.name)\n',
    estimatedTime: 40
  },
  {
    title: 'Constructors and Instance Attributes',
    description: 'Use __init__ to initialize object state.',
    focus: 'Constructors define required values for new objects.',
    miniTask: 'Create Product class with name and price attributes.',
    starter: '# Build Product class\n',
    solution: 'class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\nitem = Product("Mouse", 799)\nprint(item.name, item.price)\n',
    estimatedTime: 35
  },
  {
    title: 'Class and Static Methods',
    description: 'Differentiate instance methods, class methods, and static methods.',
    focus: 'Choose method type based on whether it needs object or class state.',
    miniTask: 'Create utility class with static tax calculator.',
    starter: '# Add static method\n',
    solution: 'class PriceUtils:\n    @staticmethod\n    def add_tax(amount, rate=0.18):\n        return amount * (1 + rate)\n\nprint(PriceUtils.add_tax(1000))\n',
    estimatedTime: 35
  },
  {
    title: 'Inheritance and Polymorphism',
    description: 'Reuse behavior with inheritance and override methods cleanly.',
    focus: 'Polymorphism allows same method name with type-specific behavior.',
    miniTask: 'Create Animal base class and Dog subclass with overridden sound.',
    starter: '# Build inheritance example\n',
    solution: 'class Animal:\n    def sound(self):\n        return "Generic sound"\n\nclass Dog(Animal):\n    def sound(self):\n        return "Bark"\n\nprint(Dog().sound())\n',
    estimatedTime: 40
  },
  {
    title: 'Encapsulation and Properties',
    description: 'Protect object state using private attributes and property decorators.',
    focus: 'Properties provide validation while keeping clean attribute-style access.',
    miniTask: 'Create Account class with validated balance property.',
    starter: '# Build Account class with property\n',
    solution: 'class Account:\n    def __init__(self):\n        self._balance = 0\n\n    @property\n    def balance(self):\n        return self._balance\n\n    @balance.setter\n    def balance(self, value):\n        if value < 0:\n            raise ValueError("Balance cannot be negative")\n        self._balance = value\n\nacc = Account()\nacc.balance = 500\nprint(acc.balance)\n',
    estimatedTime: 45
  },
  {
    title: 'Iterators and Generators',
    description: 'Produce values lazily to handle large data efficiently.',
    focus: 'Generators save memory by yielding one item at a time.',
    miniTask: 'Create generator that yields even numbers up to n.',
    starter: '# Define even_numbers generator\n',
    solution: 'def even_numbers(limit):\n    for num in range(0, limit + 1, 2):\n        yield num\n\nprint(list(even_numbers(10)))\n',
    estimatedTime: 35
  },
  {
    title: 'Decorators',
    description: 'Wrap function behavior using decorators.',
    focus: 'Decorators are reusable wrappers for logging, auth, timing, and more.',
    miniTask: 'Create decorator that prints before and after function call.',
    starter: '# Create a simple decorator\n',
    solution: 'def logger(fn):\n    def wrapper(*args, **kwargs):\n        print("Starting")\n        result = fn(*args, **kwargs)\n        print("Done")\n        return result\n    return wrapper\n\n@logger\ndef say_hi():\n    print("Hi")\n\nsay_hi()\n',
    estimatedTime: 40
  },
  {
    title: 'Type Hints and Annotations',
    description: 'Add type hints for safer, self-documenting code.',
    focus: 'Type hints improve tooling support and maintainability.',
    miniTask: 'Annotate a function that computes discount price.',
    starter: '# Add type hints\n',
    solution: 'def discounted_price(price: float, percent: float) -> float:\n    return price * (1 - percent / 100)\n\nprint(discounted_price(1200, 10))\n',
    estimatedTime: 30
  },
  {
    title: 'Dataclasses',
    description: 'Create concise data models using dataclass decorator.',
    focus: 'Dataclasses auto-generate init and repr for simple models.',
    miniTask: 'Model a Course record with title and duration.',
    starter: 'from dataclasses import dataclass\n# Create dataclass\n',
    solution: 'from dataclasses import dataclass\n\n@dataclass\nclass Course:\n    title: str\n    duration_weeks: int\n\ncourse = Course("Python", 10)\nprint(course)\n',
    estimatedTime: 30
  },
  {
    title: 'Python Standard Library Essentials',
    description: 'Use common modules like datetime, random, and collections.',
    focus: 'The standard library solves many needs without extra packages.',
    miniTask: 'Print today date and generate a random OTP.',
    starter: '# Use datetime and random\n',
    solution: 'from datetime import date\nfrom random import randint\n\nprint(date.today())\nprint(randint(100000, 999999))\n',
    estimatedTime: 30
  },
  {
    title: 'Virtual Environments and Pip',
    description: 'Isolate project dependencies with venv and manage packages using pip.',
    focus: 'Virtual environments prevent dependency conflicts between projects.',
    miniTask: 'Write a note script that prints package install commands.',
    starter: '# Print environment setup commands\n',
    solution: 'commands = [\n    "python -m venv .venv",\n    "source .venv/bin/activate",\n    "pip install requests"\n]\nfor cmd in commands:\n    print(cmd)\n',
    estimatedTime: 25
  },
  {
    title: 'Testing with Pytest Basics',
    description: 'Understand how to validate behavior with automated tests.',
    focus: 'Tests build confidence when refactoring and adding features.',
    miniTask: 'Write a small pure function easy to test.',
    starter: '# Write function for testing\n',
    solution: 'def add(a, b):\n    return a + b\n\n# Example pytest test:\n# def test_add():\n#     assert add(2, 3) == 5\n',
    estimatedTime: 35
  },
  {
    title: 'Debugging Techniques',
    description: 'Debug with print, assertions, and clear step-by-step checks.',
    focus: 'Good debugging is about narrowing the problem quickly.',
    miniTask: 'Add assertion to validate that quantity is non-negative.',
    starter: 'quantity = 5\n# Add debug checks\n',
    solution: 'quantity = 5\nassert quantity >= 0, "Quantity cannot be negative"\nprint("Quantity is valid")\n',
    estimatedTime: 30
  },
  {
    title: 'JSON and API Data Handling',
    description: 'Read and write JSON data structures.',
    focus: 'JSON is the most common format for web API communication.',
    miniTask: 'Convert dictionary to JSON string and back.',
    starter: 'import json\nuser = {"name": "Liya", "score": 95}\n# Serialize and deserialize\n',
    solution: 'import json\nuser = {"name": "Liya", "score": 95}\njson_text = json.dumps(user)\nprint(json_text)\nparsed = json.loads(json_text)\nprint(parsed["name"])\n',
    estimatedTime: 35
  },
  {
    title: 'Requests and HTTP Basics',
    description: 'Understand how Python clients communicate with web APIs.',
    focus: 'HTTP methods like GET and POST are core backend concepts.',
    miniTask: 'Prepare a sample GET request snippet and inspect status code.',
    starter: '# Pseudo-code using requests\n',
    solution: '# import requests\n# response = requests.get("https://api.example.com/items")\n# print(response.status_code)\nprint("Use requests.get(url) to fetch API data")\n',
    estimatedTime: 35
  },
  {
    title: 'Regular Expressions',
    description: 'Validate and extract text patterns using re module.',
    focus: 'Regex is useful for tasks like email and phone validation.',
    miniTask: 'Check whether a text contains a valid email-like pattern.',
    starter: 'import re\ntext = "contact me at hello@example.com"\n# Find email\n',
    solution: 'import re\ntext = "contact me at hello@example.com"\nmatch = re.search(r"[\\w.-]+@[\\w.-]+\\.\\w+", text)\nprint(bool(match))\n',
    estimatedTime: 35
  },
  {
    title: 'Concurrency with Threading and Async Intro',
    description: 'Understand the basics of handling multiple tasks.',
    focus: 'Use threading for I/O work and async for scalable wait-heavy flows.',
    miniTask: 'Define an async function and run it with asyncio.',
    starter: 'import asyncio\n# Create async function\n',
    solution: 'import asyncio\n\nasync def greet():\n    await asyncio.sleep(0.1)\n    print("Hello async")\n\nasyncio.run(greet())\n',
    estimatedTime: 40
  },
  {
    title: 'NumPy Introduction',
    description: 'Learn why NumPy arrays are faster than basic Python loops for numeric work.',
    focus: 'NumPy powers scientific computing and many data science workflows.',
    miniTask: 'Create a simple numeric array example snippet.',
    starter: '# NumPy example (install numpy first)\n',
    solution: '# import numpy as np\n# arr = np.array([1, 2, 3, 4])\n# print(arr.mean())\nprint("NumPy arrays support fast vector math")\n',
    estimatedTime: 35
  },
  {
    title: 'Pandas Introduction',
    description: 'Work with table-like data using DataFrame basics.',
    focus: 'Pandas is the standard tool for cleaning and analyzing tabular datasets.',
    miniTask: 'Create a tiny DataFrame from dictionary data.',
    starter: '# Pandas example (install pandas first)\n',
    solution: '# import pandas as pd\n# df = pd.DataFrame({"name": ["Ana", "Raj"], "score": [90, 85]})\n# print(df.head())\nprint("Pandas DataFrame stores table data")\n',
    estimatedTime: 35
  },
  {
    title: 'Matplotlib for Visualization',
    description: 'Create basic charts for quick data insights.',
    focus: 'Simple plots often reveal trends faster than raw numbers.',
    miniTask: 'Write line plot example code snippet.',
    starter: '# Matplotlib example\n',
    solution: '# import matplotlib.pyplot as plt\n# x = [1, 2, 3]\n# y = [10, 15, 13]\n# plt.plot(x, y)\n# plt.title("Sample Trend")\n# plt.show()\nprint("Matplotlib helps visualize data quickly")\n',
    estimatedTime: 35
  },
  {
    title: 'SciPy and Scientific Tools Overview',
    description: 'Understand where SciPy fits for advanced math and optimization.',
    focus: 'SciPy extends NumPy with powerful scientific routines.',
    miniTask: 'Document one SciPy use case in code comments.',
    starter: '# Add a short SciPy usage note\n',
    solution: '# SciPy can solve optimization and integration problems.\n# Example: scipy.optimize.minimize(...)\nprint("SciPy builds on NumPy for scientific computing")\n',
    estimatedTime: 30
  },
  {
    title: 'SQLite and Database Basics',
    description: 'Store and query local data using sqlite3 module.',
    focus: 'SQLite is perfect for prototypes and small production apps.',
    miniTask: 'Create table and insert one row in in-memory database.',
    starter: 'import sqlite3\n# Connect and run SQL\n',
    solution: 'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncur = conn.cursor()\ncur.execute("CREATE TABLE users (name TEXT)")\ncur.execute("INSERT INTO users VALUES (?)", ("Aru",))\ncur.execute("SELECT name FROM users")\nprint(cur.fetchone()[0])\nconn.close()\n',
    estimatedTime: 40
  },
  {
    title: 'Flask and Django Landscape',
    description: 'Compare two popular Python web frameworks and when to use each.',
    focus: 'Flask is lightweight; Django is batteries-included for larger apps.',
    miniTask: 'Write a tiny framework comparison dictionary and print one key insight.',
    starter: '# Compare Flask and Django\n',
    solution: 'frameworks = {\n    "Flask": "Lightweight and flexible",\n    "Django": "Full-featured with admin and ORM"\n}\nprint(frameworks["Django"])\n',
    estimatedTime: 30
  },
  {
    title: 'Django Project Concepts',
    description: 'Understand apps, models, views, templates, and URLs in Django.',
    focus: 'Django follows a clear architecture that speeds up secure development.',
    miniTask: 'Write comments describing Django MVT flow in your own words.',
    starter: '# Describe Django request flow\n',
    solution: '# URL routes request to view\n# View reads/writes model data\n# Template renders HTML response\nprint("Django uses models, views, templates")\n',
    estimatedTime: 35
  },
  {
    title: 'Building REST APIs in Python',
    description: 'Learn core API principles: routes, JSON responses, and status codes.',
    focus: 'RESTful design keeps client-server communication predictable.',
    miniTask: 'Design a simple JSON response dictionary for a users endpoint.',
    starter: '# Create API-style response\n',
    solution: 'response = {\n    "status": "success",\n    "data": [{"id": 1, "name": "Nila"}]\n}\nprint(response)\n',
    estimatedTime: 35
  },
  {
    title: 'Packaging and Project Structure',
    description: 'Organize Python apps with folders, modules, and requirements files.',
    focus: 'A clean project structure helps teams move faster.',
    miniTask: 'Print a recommended folder structure list.',
    starter: '# Show a project structure\n',
    solution: 'structure = ["src/", "tests/", "requirements.txt", "README.md"]\nfor item in structure:\n    print(item)\n',
    estimatedTime: 30
  },
  {
    title: 'Capstone: Build a CLI Study Tracker',
    description: 'Apply major concepts to create a small real-world CLI project.',
    focus: 'Capstone combines variables, functions, files, and data structures together.',
    miniTask: 'Implement add_task and list_tasks functions using a list.',
    starter: 'tasks = []\n\ndef add_task(task):\n    # Add task\n    pass\n\ndef list_tasks():\n    # Print tasks\n    pass\n',
    solution: 'tasks = []\n\ndef add_task(task):\n    tasks.append(task)\n\ndef list_tasks():\n    for index, task in enumerate(tasks, start=1):\n        print(f"{index}. {task}")\n\nadd_task("Practice loops")\nadd_task("Read about OOP")\nlist_tasks()\n',
    estimatedTime: 45
  }
]

export const pythonLessons: Lesson[] = pythonTopics.map((topic, index) => {
  const lessonNumber = index + 1
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' =
    lessonNumber <= 17 ? 'Beginner' : lessonNumber <= 34 ? 'Intermediate' : 'Advanced'

  return {
    id: `python-${lessonNumber}`,
    title: `Python ${lessonNumber}: ${topic.title}`,
    description: topic.description,
    language: 'python' as const,
    difficulty,
    estimatedTime: topic.estimatedTime,
    content: `# ${topic.title}

## Simple Explanation
${topic.focus}

## What You Will Learn
- ${topic.description}
- How to apply this concept in real projects
- Common mistakes to avoid

## Practice Task
${topic.miniTask}

## Success Tip
Write small code, run often, and improve step by step.`,
    initialCode: topic.starter,
    solution: topic.solution,
    hints: [
      'Start with the smallest working version first.',
      'Run code after every small change to catch issues early.',
      'Use clear variable names so your logic is easy to read.'
    ],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some Python code before running tests.'
      },
      {
        name: 'Code has meaningful length',
        test: (code) => code.trim().length >= 20,
        errorMessage: 'Add a little more logic so the solution is complete.'
      }
    ]
  }
})
