import { Lesson } from '../courses'

export const jsLessons: Lesson[] = [
  {
    id: 'js-1',
    title: 'Variables - let, const, var',
    description: 'Store and manage data',
    content: `# JavaScript Variables

## What Are Variables?
Variables are containers that store data values. They're the foundation of programming—without them, you couldn't remember or manipulate data!

## Why Variables Matter
- **Store Data**: Remember user inputs, API responses, calculations
- **Reusability**: Use the same value multiple times
- **Dynamic Programs**: Values change as your program runs
- **Readable Code**: \`userName\` is clearer than hardcoded strings

## How Variables Work
1. **Declare**: Create the variable (\`let age\`)
2. **Initialize**: Give it a value (\`age = 25\`)
3. **Use**: Reference it by name (\`console.log(age)\`)

## Three Ways to Declare

### let - Reassignable Variables
\`\`\`javascript
let score = 0;      // Initialize
score = 10;         // ✅ Can change
score = 20;         // ✅ Can change again
\`\`\`

### const - Constants (Cannot Change)
\`\`\`javascript
const PI = 3.14159;
PI = 3.14;          // ❌ Error! Cannot reassign
\`\`\`

### var - Old Way (Avoid!)
\`\`\`javascript
var oldWay = "outdated";  // ❌ Has weird scoping issues
\`\`\`

## Data Types You Can Store
\`\`\`javascript
let text = "Hello";        // String (text)
let number = 42;           // Number (integer or decimal)
let price = 19.99;         // Number (decimals work too)
let isActive = true;       // Boolean (true/false)
let emptyValue = null;     // Null (intentionally empty)
let notSet;                // Undefined (not assigned yet)
\`\`\`

## Naming Rules & Best Practices
\`\`\`javascript
// ✅ Good Names (camelCase)
let userName = "Alice";
let totalPrice = 99.99;
let isLoggedIn = true;

// ❌ Invalid Names
let user-name;      // Can't use hyphens
let 1stPlace;       // Can't start with number
let class;          // Can't use reserved keywords

// ❌ Bad (but valid) Names
let x = "Alice";    // Not descriptive
let a = 99.99;      // Unclear meaning
\`\`\`

## Real-World Example: Shopping Cart
\`\`\`javascript
const storeName = "TechShop";    // Doesn't change
let cartTotal = 0;               // Changes as items added
let itemCount = 0;               // Increases/decreases

// User adds item
cartTotal = 49.99;
itemCount = 1;

// User adds another
cartTotal = cartTotal + 29.99;   // Now $79.98
itemCount = itemCount + 1;       // Now 2 items
\`\`\`

## Your Turn: Experiment!
**Task:** Create variables for your name (const) and age (let), then log them.

**Experiments to Try:**
1. **Test Mutability**: Change a \`let\` variable (works!), try changing \`const\` (error!)
2. **Undefined**: Declare without value: \`let x;\` then \`console.log(x)\`—what shows?
3. **Type Flexibility**: Assign a number, then assign text to same \`let\` variable—JavaScript allows it!
4. **Math with Variables**: \`let a = 5; let b = 10; let sum = a + b;\`
5. **Template Literals**: Use \`\${name}\` instead of \`"Hello " + name\`—cleaner!`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 10,
    initialCode: `// Declare your variables\n\n// Log them\nconsole.log();`,
    solution: `const name = "Alex";\nlet age = 25;\n\nconsole.log("Name:", name);\nconsole.log("Age:", age);`,
    expectedOutput: 'Name:',
    hints: ['const for values that won\'t change', 'let for values that might change', 'console.log() to display']
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
    id: 'js-2',
    title: 'Functions - Creating Reusable Code',
    description: 'Write functions to organize code',
    content: `# JavaScript Functions

Functions are reusable blocks of code.

## Function Declaration:
\`\`\`javascript
function greet(name) {
  return "Hello, " + name + "!";
}

let message = greet("Alice");
console.log(message); // "Hello, Alice!"
\`\`\`

## Arrow Functions (Modern):
\`\`\`javascript
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
\`\`\`

## Return Values:
Functions can return values using the \`return\` keyword.

**Task:** Create a function \`multiply\` that takes two numbers and returns their product.`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 12,
    initialCode: `// Create multiply function\n\n// Call it with 6 and 7\nconst result = multiply(6, 7);\nconsole.log(result);`,
    solution: `function multiply(a, b) {\n  return a * b;\n}\n\nconst result = multiply(6, 7);\nconsole.log(result);`,
    expectedOutput: '42',
    hints: ['function keyword', 'parameters in ()', 'return the result', 'Call with arguments']    ,
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
    id: 'js-3',
    title: 'Arrays - Working with Lists',
    description: 'Store multiple values in arrays',
    content: `# JavaScript Arrays

Arrays store multiple values in a single variable.

## Creating Arrays:
\`\`\`javascript
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
\`\`\`

## Array Methods:
\`\`\`javascript
fruits.push("grape");        // Add to end
fruits.pop();                // Remove from end
fruits.length;               // Get length
fruits[0];                   // Access first item
\`\`\`

## Looping Arrays:
\`\`\`javascript
fruits.forEach(fruit => {
  console.log(fruit);
});
\`\`\`

**Task:** Create an array of 3 programming languages, add one more, then log each one.`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 15,
    initialCode: `const languages = /* create array */;\n\n// Add one more\n\n// Log each one`,
    solution: `const languages = ["HTML", "CSS", "JavaScript"];\n\nlanguages.push("Python");\n\nlanguages.forEach(lang => {\n  console.log(lang);\n});`,
    expectedOutput: 'HTML',
    hints: ['.push() to add', '.forEach() to loop', 'arrow function for callback']
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
    id: 'js-4',
    title: 'Objects - Structured Data',
    description: 'Create and use JavaScript objects',
    content: `# JavaScript Objects

Objects store related data together.

## Creating Objects:
\`\`\`javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
  greet: function() {
    return "Hello, I'm " + this.name;
  }
};
\`\`\`

## Accessing Properties:
\`\`\`javascript
console.log(person.name);      // Dot notation
console.log(person["age"]);    // Bracket notation
console.log(person.greet());   // Call method
\`\`\`

**Task:** Create a \`car\` object with brand, model, year properties and a \`getInfo\` method.`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 15,
    initialCode: `const car = {\n  // Add properties and method\n};\n\nconsole.log(car.getInfo());`,
    solution: `const car = {\n  brand: "Toyota",\n  model: "Camry",\n  year: 2024,\n  getInfo: function() {\n    return this.brand + " " + this.model + " (" + this.year + ")";\n  }\n};\n\nconsole.log(car.getInfo());`,
    expectedOutput: 'Toyota',
    hints: ['Properties are key: value pairs', 'Methods are functions inside objects', 'this refers to the object']    ,
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
    id: 'js-5',
    title: 'DOM Manipulation - Change HTML',
    description: 'Make your websites interactive',
    content: `# DOM Manipulation

The DOM (Document Object Model) lets JavaScript interact with HTML.

## Selecting Elements:
\`\`\`javascript
const element = document.getElementById('myId');
const elements = document.querySelectorAll('.myClass');
\`\`\`

## Changing Content:
\`\`\`javascript
element.textContent = "New text";
element.innerHTML = "<strong>Bold</strong>";
element.style.color = "blue";
\`\`\`

## Creating Elements:
\`\`\`javascript
const newDiv = document.createElement('div');
newDiv.textContent = "I'm new!";
document.body.appendChild(newDiv);
\`\`\`

**Task:** Create code that changes an h1's text to "DOM Master!" and color to blue.`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `// Select h1 element\nconst heading = document.querySelector('h1');\n\n// Change text and color`,
    solution: `const heading = document.querySelector('h1');\n\nheading.textContent = "DOM Master!";\nheading.style.color = "blue";`,
    expectedOutput: 'DOM Master!',
    hints: ['querySelector to select', 'textContent to change text', 'style.color to change color']
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
    id: 'js-6',
    title: 'Event Listeners - User Interaction',
    description: 'Respond to clicks, typing, and more',
    content: `# Event Listeners

Make your page respond to user actions!

## Adding Event Listeners:
\`\`\`javascript
const button = document.querySelector('button');

button.addEventListener('click', function() {
  alert('Button clicked!');
});
\`\`\`

## Common Events:
- **click**: Mouse click
- **input**: Typing in input field
- **submit**: Form submission
- **mouseover**: Mouse hover

## Modern Syntax:
\`\`\`javascript
button.addEventListener('click', () => {
  console.log('Clicked!');
});
\`\`\`

**Task:** Add a click event listener to a button that logs "Hello!" to console.`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 12,
    initialCode: `const button = document.querySelector('button');\n\n// Add click event listener`,
    solution: `const button = document.querySelector('button');\n\nbutton.addEventListener('click', () => {\n  console.log('Hello!');\n});`,
    expectedOutput: 'Hello!',
    hints: ['addEventListener method', 'First parameter is event type', 'Second parameter is function']
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

  // INTERMEDIATE JAVASCRIPT (Lessons 7-20)
  {
    id: 'js-7',
    title: 'Array Methods - map, filter, reduce',
    description: 'Transform and process arrays',
    content: `# Array Methods

## map - Transform:
\`\`\`javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8]
\`\`\`

## filter - Select:
\`\`\`javascript
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]
\`\`\`

## reduce - Combine:
\`\`\`javascript
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 10
\`\`\`

**Task:** Use map, filter, and reduce.`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `const prices = [10, 25, 30, 15, 50];\n\n// Double all prices\n\n// Get prices over 20\n\n// Calculate total`,
    solution: `const prices = [10, 25, 30, 15, 50];\n\nconst doubled = prices.map(p => p * 2);\nconsole.log('Doubled:', doubled);\n\nconst expensive = prices.filter(p => p > 20);\nconsole.log('Over 20:', expensive);\n\nconst total = prices.reduce((sum, p) => sum + p, 0);\nconsole.log('Total:', total);`,
    hints: ['map returns new array', 'filter selects items', 'reduce accumulates value']
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
    id: 'js-8',
    title: 'Destructuring Assignment',
    description: 'Extract values from arrays and objects',
    content: `# Destructuring

## Array Destructuring:
\`\`\`javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3, 4, 5]
\`\`\`

## Object Destructuring:
\`\`\`javascript
const { name, age, city = 'Unknown' } = user;
\`\`\`

## In Parameters:
\`\`\`javascript
function greet({ name, age }) {
  console.log(\`\${name} is \${age}\`);
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
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
}
\`\`\`

**Task:** Destructure object and array.`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `const user = { name: 'Alice', age: 25, city: 'NYC' };\nconst colors = ['red', 'green', 'blue', 'yellow'];\n\n// Destructure both`,
    solution: `const user = { name: 'Alice', age: 25, city: 'NYC' };\nconst colors = ['red', 'green', 'blue', 'yellow'];\n\nconst { name, age, city } = user;\nconsole.log(name, age, city);\n\nconst [primary, secondary, ...otherColors] = colors;\nconsole.log(primary, secondary, otherColors);`,
    hints: ['{ } for objects', '[ ] for arrays', '...rest for remaining']
  },
  {
    id: 'js-9',
    title: 'Spread and Rest Operators',
    description: 'Work with variable arguments',
    content: `# Spread and Rest

## Spread (...):
\`\`\`javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj = { a: 1, b: 2 };
const obj2 = { ...obj, c: 3 }; // {a: 1, b: 2, c: 3}
\`\`\`

## Rest (...):
\`\`\`javascript
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4); // 10
\`\`\`

**Task:** Use spread and rest.`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `// Combine arrays with spread\n\n// Create function with rest parameters`,
    solution: `const fruits = ['apple', 'banana'];\nconst vegetables = ['carrot', 'broccoli'];\nconst food = [...fruits, ...vegetables];\nconsole.log(food);\n\nfunction multiply(...numbers) {\n  return numbers.reduce((product, n) => product * n, 1);\n}\n\nconsole.log(multiply(2, 3, 4)); // 24`,
    hints: ['... for spread', '... in parameters for rest', 'Spread creates copies']    ,
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
    id: 'js-10',
    title: 'Template Literals',
    description: 'Create dynamic strings',
    content: `# Template Literals

## Basic Usage:
\`\`\`javascript
const name = 'Alice';
const greeting = \`Hello, \${name}!\`;
\`\`\`

## Multi-line:
\`\`\`javascript
const html = \`
  <div>
    <h1>\${title}</h1>
    <p>\${content}</p>
  </div>
\`;
\`\`\`

## Expressions:
\`\`\`javascript
const price = 100;
const msg = \`Total: $\${price * 1.1}\`;
\`\`\`

**Task:** Create formatted string with template.`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 12,
    initialCode: `const product = 'Laptop';\nconst price = 999;\nconst discount = 0.1;\n\n// Create message with template literal`,
    solution: `const product = 'Laptop';\nconst price = 999;\nconst discount = 0.1;\n\nconst message = \`\nProduct: \${product}\nOriginal Price: $\${price}\nDiscount: \${discount * 100}%\nFinal Price: $\${price * (1 - discount)}\n\`;\n\nconsole.log(message);`,
    hints: ['Backticks ` `', '${} for expressions', 'Multi-line supported']
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
    id: 'js-11',
    title: 'Arrow Functions Advanced',
    description: 'Master arrow function syntax',
    content: `# Arrow Functions

## Implicit Return:
\`\`\`javascript
const double = x => x * 2;
const add = (a, b) => a + b;
\`\`\`

## Object Return:
\`\`\`javascript
const makePerson = (name, age) => ({ name, age });
\`\`\`

## No this Binding:
\`\`\`javascript
const obj = {
  count: 0,
  increment() {
    setInterval(() => {
      this.count++; // this refers to obj
    }, 1000);
  }
};
\`\`\`

**Task:** Create arrow functions.`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `// Create arrow function that returns object`,
    solution: `const createUser = (name, age, role) => ({\n  name,\n  age,\n  role,\n  active: true,\n  createdAt: new Date()\n});\n\nconst user = createUser('Alice', 25, 'developer');\nconsole.log(user);`,
    hints: ['() around object literal', 'No return keyword needed', 'this binding difference']    ,
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
    id: 'js-12',
    title: 'Async/Await',
    description: 'Write asynchronous code cleanly',
    content: `# Async/Await

## Basic Syntax:
\`\`\`javascript
async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
\`\`\`

## Error Handling:
\`\`\`javascript
try {
  const data = await fetchData();
} catch (error) {
  console.error(error);
}
\`\`\`

**Task:** Create async function.`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `// Create async function that waits\nasync function delayedGreeting(name) {\n  // Wait 1 second, then return greeting\n}`,
    solution: `async function delayedGreeting(name) {\n  await new Promise(resolve => setTimeout(resolve, 1000));\n  return \`Hello, \${name}!\`;\n}\n\ndelayedGreeting('Alice').then(msg => console.log(msg));`,
    hints: ['async keyword', 'await for promises', 'Returns promise']    ,
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
    id: 'js-13',
    title: 'Promises',
    description: 'Handle asynchronous operations',
    content: `# Promises

## Creating:
\`\`\`javascript
const promise = new Promise((resolve, reject) => {
  if (success) resolve(data);
  else reject(error);
});
\`\`\`

## Consuming:
\`\`\`javascript
promise
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log('Done'));
\`\`\`

**Task:** Create and use promise.`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `// Create promise that resolves after delay`,
    solution: `function delay(ms) {\n  return new Promise(resolve => {\n    setTimeout(() => resolve(\`Waited \${ms}ms\`), ms);\n  });\n}\n\ndelay(1000)\n  .then(message => console.log(message))\n  .catch(error => console.error(error));`,
    hints: ['new Promise(executor)', 'resolve for success', 'reject for errors']
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
    id: 'js-14',
    title: 'Classes and OOP',
    description: 'Object-oriented programming in JavaScript',
    content: `# Classes

## Basic Class:
\`\`\`javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
}

const person = new Person('Alice', 25);
\`\`\`

## Inheritance:
\`\`\`javascript
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
}
\`\`\`

**Task:** Create class with methods.`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `// Create Book class`,
    solution: `class Book {\n  constructor(title, author, pages) {\n    this.title = title;\n    this.author = author;\n    this.pages = pages;\n  }\n  \n  getInfo() {\n    return \`\${this.title} by \${this.author} (\${this.pages} pages)\`;\n  }\n  \n  isLong() {\n    return this.pages > 300;\n  }\n}\n\nconst book = new Book('1984', 'George Orwell', 328);\nconsole.log(book.getInfo());\nconsole.log('Long book?', book.isLong());`,
    hints: ['class keyword', 'constructor for initialization', 'methods without function keyword']    ,
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
    id: 'js-15',
    title: 'Modules - Import/Export',
    description: 'Organize code across files',
    content: `# ES6 Modules

## Export:
\`\`\`javascript
// utils.js
export const add = (a, b) => a + b;
export const PI = 3.14159;
export default class Calculator {}
\`\`\`

## Import:
\`\`\`javascript
// app.js
import Calculator, { add, PI } from './utils.js';
import * as utils from './utils.js';
\`\`\`

**Task:** Understand module syntax.`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `// Export functions\nexport const multiply = (a, b) => a * b;\nexport const divide = (a, b) => a / b;\n\n// Import in another file:\n// import { multiply, divide } from './math.js';`,
    solution: `// math.js\nexport const add = (a, b) => a + b;\nexport const subtract = (a, b) => a - b;\nexport const multiply = (a, b) => a * b;\nexport const divide = (a, b) => a / b;\n\nexport default class Calculator {\n  calculate(a, op, b) {\n    switch(op) {\n      case '+': return add(a, b);\n      case '-': return subtract(a, b);\n      case '*': return multiply(a, b);\n      case '/': return divide(a, b);\n    }\n  }\n}`,
    hints: ['export keyword', 'default export', 'import { named }']
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
    id: 'js-16',
    title: 'Local Storage',
    description: 'Store data in browser',
    content: `# Local Storage

## Save Data:
\`\`\`javascript
localStorage.setItem('username', 'Alice');
localStorage.setItem('user', JSON.stringify(userObject));
\`\`\`

## Retrieve Data:
\`\`\`javascript
const name = localStorage.getItem('username');
const user = JSON.parse(localStorage.getItem('user'));
\`\`\`

## Remove:
\`\`\`javascript
localStorage.removeItem('username');
localStorage.clear(); // Remove all
\`\`\`

**Task:** Save and retrieve from localStorage.`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `// Save user preferences\n\n// Retrieve preferences`,
    solution: `const preferences = {\n  theme: 'dark',\n  language: 'en',\n  notifications: true\n};\n\n// Save\nlocalStorage.setItem('prefs', JSON.stringify(preferences));\n\n// Retrieve\nconst saved = localStorage.getItem('prefs');\nif (saved) {\n  const prefs = JSON.parse(saved);\n  console.log('Loaded preferences:', prefs);\n}`,
    hints: ['setItem(key, value)', 'getItem(key)', 'JSON.stringify for objects']
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
    id: 'js-17',
    title: 'Fetch API',
    description: 'Make HTTP requests',
    content: `# Fetch API

## GET Request:
\`\`\`javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
\`\`\`

## POST Request:
\`\`\`javascript
fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
\`\`\`

**Task:** Fetch data from API.`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `// Fetch user data\nasync function getUser(id) {\n  // Implement fetch\n}`,
    solution: `async function getUser(id) {\n  try {\n    const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`);\n    if (!response.ok) throw new Error('Failed to fetch');\n    const user = await response.json();\n    return user;\n  } catch (error) {\n    console.error('Error:', error);\n    return null;\n  }\n}\n\ngetUser(1).then(user => console.log(user));`,
    hints: ['fetch returns promise', '.json() to parse', 'async/await recommended']
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
    id: 'js-18',
    title: 'Error Handling',
    description: 'Handle errors gracefully',
    content: `# Try/Catch

## Basic:
\`\`\`javascript
try {
  const result = riskyOperation();
} catch (error) {
  console.error('Error:', error.message);
} finally {
  console.log('Always runs');
}
\`\`\`

## Throwing Errors:
\`\`\`javascript
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}
\`\`\`

**Task:** Add error handling.`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `function parseJSON(str) {\n  // Add try/catch\n}`,
    solution: `function parseJSON(str) {\n  try {\n    const data = JSON.parse(str);\n    return { success: true, data };\n  } catch (error) {\n    return { success: false, error: error.message };\n  }\n}\n\nconsole.log(parseJSON('{"name": "Alice"}'));\nconsole.log(parseJSON('invalid json'));`,
    hints: ['try/catch blocks', 'throw new Error()', 'finally optional']    ,
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
    id: 'js-19',
    title: 'Regular Expressions',
    description: 'Pattern matching in strings',
    content: `# Regular Expressions

## Basic Patterns:
\`\`\`javascript
const pattern = /hello/i; // i = case insensitive
const hasHello = pattern.test('Hello World'); // true
\`\`\`

## Common Methods:
\`\`\`javascript
const match = 'abc123'.match(/\\d+/); // ['123']
const replaced = 'hello'.replace(/l/g, 'L'); // 'heLLo'
\`\`\`

## Email Validation:
\`\`\`javascript
const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
\`\`\`

**Task:** Validate email with regex.`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `function isValidEmail(email) {\n  // Add regex validation\n}`,
    solution: `function isValidEmail(email) {\n  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  return emailRegex.test(email);\n}\n\nconsole.log(isValidEmail('user@example.com')); // true\nconsole.log(isValidEmail('invalid.email')); // false`,
    hints: ['/pattern/flags', '.test() returns boolean', '.match() returns matches']
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
    id: 'js-20',
    title: 'Debouncing and Throttling',
    description: 'Control function execution rate',
    content: `# Debounce & Throttle

## Debounce (wait until done):
\`\`\`javascript
function debounce(func, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}
\`\`\`

## Use Case:
\`\`\`javascript
const search = debounce(() => {
  console.log('Searching...');
}, 500);

input.addEventListener('input', search);
\`\`\`

**Task:** Create debounce function.`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `function debounce(func, delay) {\n  // Implement debounce\n}`,
    solution: `function debounce(func, delay) {\n  let timeoutId;\n  return function(...args) {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => {\n      func.apply(this, args);\n    }, delay);\n  };\n}\n\nconst log = debounce(() => console.log('Executed!'), 1000);\n\n// Call multiple times, only last call executes\nlog();\nlog();\nlog();`,
    hints: ['Closure to store timeout', 'clearTimeout before new', 'setTimeout to delay']    ,
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

  // ADVANCED JAVASCRIPT (Lessons 21-36)
  {
    id: 'js-21',
    title: 'Set and Map Data Structures',
    description: 'Work with unique values and key-value pairs',
    content: `# Set and Map

## Set (unique values):
\`\`\`javascript
const set = new Set([1, 2, 2, 3]);
set.add(4);
set.has(2); // true
set.delete(1);
set.size; // 3
\`\`\`

## Map (key-value):
\`\`\`javascript
const map = new Map();
map.set('name', 'Alice');
map.get('name'); // 'Alice'
map.has('name'); // true
\`\`\`

**Task:** Use Set to remove duplicates.`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `const numbers = [1, 2, 2, 3, 4, 4, 5];\n// Remove duplicates`,
    solution: `const numbers = [1, 2, 2, 3, 4, 4, 5];\nconst unique = [...new Set(numbers)];\nconsole.log(unique);\n\nconst userMap = new Map();\nuserMap.set('id', 1);\nuserMap.set('name', 'Alice');\nuserMap.set('role', 'admin');\n\nconsole.log(userMap.get('name'));`,
    hints: ['new Set(array)', 'Spread to array', 'Map for any key type']
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
    id: 'js-22',
    title: 'WeakMap and WeakSet',
    description: 'Garbage-collectible collections',
    content: `# WeakMap and WeakSet

## WeakMap:
\`\`\`javascript
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, 'metadata');
// When obj is garbage collected, entry is removed
\`\`\`

## Use Case (private data):
\`\`\`javascript
const privateData = new WeakMap();
class User {
  constructor(name) {
    privateData.set(this, { password: 'secret' });
    this.name = name;
  }
}
\`\`\`

**Task:** Understand WeakMap for private data.`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `// WeakMap for private data\nconst private = new WeakMap();\n\nclass Account {\n  // Store private balance\n}`,
    solution: `const privateData = new WeakMap();\n\nclass Account {\n  constructor(owner, balance) {\n    this.owner = owner;\n    privateData.set(this, { balance });\n  }\n  \n  getBalance() {\n    return privateData.get(this).balance;\n  }\n  \n  deposit(amount) {\n    const data = privateData.get(this);\n    data.balance += amount;\n  }\n}`,
    hints: ['Keys must be objects', 'Garbage collected', 'Perfect for private data']    ,
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
    id: 'js-23',
    title: 'Proxy and Reflect',
    description: 'Intercept object operations',
    content: `# Proxy

## Basic Proxy:
\`\`\`javascript
const target = { name: 'Alice' };
const proxy = new Proxy(target, {
  get(target, prop) {
    console.log(\`Getting \${prop}\`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(\`Setting \${prop} to \${value}\`);
    target[prop] = value;
    return true;
  }
});
\`\`\`

**Task:** Create validation proxy.`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `// Create proxy that validates age`,
    solution: `const user = { name: 'Alice', age: 25 };\n\nconst proxy = new Proxy(user, {\n  set(target, prop, value) {\n    if (prop === 'age') {\n      if (typeof value !== 'number' || value < 0) {\n        throw new Error('Age must be positive number');\n      }\n    }\n    target[prop] = value;\n    return true;\n  }\n});\n\nproxy.age = 30; // OK\n// proxy.age = -5; // Error`,
    hints: ['new Proxy(target, handler)', 'get/set traps', 'Validation logic']    ,
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
    id: 'js-24',
    title: 'Generators',
    description: 'Create iterable sequences',
    content: `# Generators

## Basic Generator:
\`\`\`javascript
function* count() {
  yield 1;
  yield 2;
  yield 3;
}

const counter = count();
counter.next(); // { value: 1, done: false }
\`\`\`

## Infinite Sequence:
\`\`\`javascript
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
\`\`\`

**Task:** Create range generator.`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `function* range(start, end) {\n  // Yield numbers from start to end\n}`,
    solution: `function* range(start, end) {\n  for (let i = start; i <= end; i++) {\n    yield i;\n  }\n}\n\nfor (const num of range(1, 5)) {\n  console.log(num);\n}`,
    hints: ['function* syntax', 'yield keyword', 'Pause and resume']    ,
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
    id: 'js-25',
    title: 'Symbols',
    description: 'Create unique identifiers',
    content: `# Symbols

## Basic Symbol:
\`\`\`javascript
const id = Symbol('id');
const id2 = Symbol('id');
id === id2; // false (each unique)
\`\`\`

## As Object Keys:
\`\`\`javascript
const user = {
  name: 'Alice',
  [Symbol('id')]: 123
};
\`\`\`

## Well-known Symbols:
\`\`\`javascript
obj[Symbol.iterator] = function*() { ... };
\`\`\`

**Task:** Use Symbol for private property.`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 18,
    initialCode: `// Create object with Symbol property`,
    solution: `const _password = Symbol('password');\n\nclass User {\n  constructor(name, password) {\n    this.name = name;\n    this[_password] = password;\n  }\n  \n  checkPassword(input) {\n    return this[_password] === input;\n  }\n}\n\nconst user = new User('Alice', 'secret123');\nconsole.log(user.checkPassword('secret123'));`,
    hints: ['Symbol() creates unique', 'Use as object key', 'Not enumerable']
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
    id: 'js-26',
    title: 'Iterators and Iterables',
    description: 'Create custom iteration',
    content: `# Iterators

## Iterator Protocol:
\`\`\`javascript
const iterator = {
  current: 0,
  last: 5,
  next() {
    if (this.current <= this.last) {
      return { value: this.current++, done: false };
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
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
    }
    return { done: true };
  }
};
\`\`\`

## Iterable:
\`\`\`javascript
const iterable = {
  [Symbol.iterator]() {
    return iterator;
  }
};
\`\`\`

**Task:** Create custom iterable.`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `// Create iterable that returns even numbers`,
    solution: `class EvenNumbers {\n  constructor(max) {\n    this.max = max;\n  }\n  \n  [Symbol.iterator]() {\n    let current = 0;\n    const max = this.max;\n    \n    return {\n      next() {\n        if (current <= max) {\n          const value = current;\n          current += 2;\n          return { value, done: false };\n        }\n        return { done: true };\n      }\n    };\n  }\n}\n\nfor (const num of new EvenNumbers(10)) {\n  console.log(num);\n}`,
    hints: ['[Symbol.iterator]() method', 'Returns iterator', 'next() returns {value, done}']
  },
  {
    id: 'js-27',
    title: 'Function Composition',
    description: 'Combine functions',
    content: `# Function Composition

## Compose:
\`\`\`javascript
const compose = (...fns) => x => 
  fns.reduceRight((acc, fn) => fn(acc), x);

const addOne = x => x + 1;
const double = x => x * 2;
const addOneThenDouble = compose(double, addOne);
addOneThenDouble(3); // 8
\`\`\`

## Pipe:
\`\`\`javascript
const pipe = (...fns) => x => 
  fns.reduce((acc, fn) => fn(acc), x);
\`\`\`

**Task:** Create composition utilities.`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `// Create pipe function`,
    solution: `const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);\n\nconst trim = str => str.trim();\nconst uppercase = str => str.toUpperCase();\nconst exclaim = str => str + '!';\n\nconst shout = pipe(trim, uppercase, exclaim);\n\nconsole.log(shout('  hello  ')); // "HELLO!"`,
    hints: ['reduce/reduceRight', 'Function returns function', 'Left-to-right or right-to-left']
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
    id: 'js-28',
    title: 'Currying',
    description: 'Transform multi-argument functions',
    content: `# Currying

## Basic Curry:
\`\`\`javascript
const add = a => b => a + b;
const add5 = add(5);
add5(3); // 8
\`\`\`

## Generic Curry:
\`\`\`javascript
const curry = fn => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
};
\`\`\`

**Task:** Create curried function.`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `// Create curried multiply function`,
    solution: `const multiply = a => b => c => a * b * c;\n\nconst multiplyBy2 = multiply(2);\nconst multiplyBy2And3 = multiplyBy2(3);\nconsole.log(multiplyBy2And3(4)); // 24\n\n// Generic curry\nconst curry = fn => {\n  return function curried(...args) {\n    if (args.length >= fn.length) {\n      return fn(...args);\n    }\n    return (...nextArgs) => curried(...args, ...nextArgs);\n  };\n};`,
    hints: ['Return function that returns function', 'Partial application', 'Build up arguments']    ,
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
    id: 'js-29',
    title: 'Memoization',
    description: 'Cache function results',
    content: `# Memoization

## Basic Memoize:
\`\`\`javascript
const memoize = fn => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};
\`\`\`

**Task:** Memoize expensive function.`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `function fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}\n\n// Add memoization`,
    solution: `const memoize = fn => {\n  const cache = new Map();\n  return (...args) => {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) {\n      return cache.get(key);\n    }\n    const result = fn(...args);\n    cache.set(key, result);\n    return result;\n  };\n};\n\nconst fibonacci = memoize(function(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n});\n\nconsole.log(fibonacci(40)); // Fast!`,
    hints: ['Cache by arguments', 'Check cache first', 'Store and return']
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
    id: 'js-30',
    title: 'Observer Pattern',
    description: 'Implement pub/sub system',
    content: `# Observer Pattern

## Event Emitter:
\`\`\`javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  }
  
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(cb => cb(data));
    }
  }
}
\`\`\`

**Task:** Create event emitter.`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `class EventEmitter {\n  // Implement\n}`,
    solution: `class EventEmitter {\n  constructor() {\n    this.events = new Map();\n  }\n  \n  on(event, callback) {\n    if (!this.events.has(event)) {\n      this.events.set(event, []);\n    }\n    this.events.get(event).push(callback);\n  }\n  \n  emit(event, data) {\n    if (this.events.has(event)) {\n      this.events.get(event).forEach(cb => cb(data));\n    }\n  }\n  \n  off(event, callback) {\n    if (this.events.has(event)) {\n      const callbacks = this.events.get(event).filter(cb => cb !== callback);\n      this.events.set(event, callbacks);\n    }\n  }\n}\n\nconst emitter = new EventEmitter();\nemitter.on('data', data => console.log('Received:', data));\nemitter.emit('data', {id: 1});`,
    hints: ['Store callbacks by event', 'on() subscribes', 'emit() notifies']    ,
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
    id: 'js-31',
    title: 'Factory Pattern',
    description: 'Create objects without constructors',
    content: `# Factory Pattern

## Factory Function:
\`\`\`javascript
function createUser(name, role) {
  return {
    name,
    role,
    greet() {
      return \`Hello, I'm \${this.name}\`;
    }
  };
}
\`\`\`

**Task:** Create object factory.`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `// Create factory for creating products`,
    solution: `function createProduct(name, price, category) {\n  return {\n    name,\n    price,\n    category,\n    getInfo() {\n      return \`\${this.name} - $\${this.price} (\${this.category})\`;\n    },\n    applyDiscount(percent) {\n      this.price *= (1 - percent / 100);\n      return this;\n    }\n  };\n}\n\nconst laptop = createProduct('Laptop', 999, 'Electronics');\nconsole.log(laptop.applyDiscount(10).getInfo());`,
    hints: ['Return object literal', 'Methods included', 'No new keyword needed']    ,
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
    id: 'js-32',
    title: 'Module Pattern',
    description: 'Create private and public members',
    content: `# Module Pattern

## IIFE Module:
\`\`\`javascript
const module = (function() {
  let private = 'secret';
  
  return {
    getPrivate() {
      return private;
    },
    setPrivate(value) {
      private = value;
    }
  };
})();
\`\`\`

**Task:** Create module with private state.`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `// Create counter module`,
    solution: `const Counter = (function() {\n  let count = 0;\n  \n  return {\n    increment() {\n      count++;\n      return count;\n    },\n    decrement() {\n      count--;\n      return count;\n    },\n    getCount() {\n      return count;\n    },\n    reset() {\n      count = 0;\n    }\n  };\n})();\n\nCounter.increment();\nCounter.increment();\nconsole.log(Counter.getCount()); // 2`,
    hints: ['IIFE creates scope', 'Return public API', 'Private variables in closure']    ,
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
    id: 'js-33',
    title: 'Singleton Pattern',
    description: 'Ensure single instance',
    content: `# Singleton Pattern

## Implementation:
\`\`\`javascript
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }
}
\`\`\`

**Task:** Create singleton.`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `// Create Database singleton`,
    solution: `class Database {\n  constructor() {\n    if (Database.instance) {\n      return Database.instance;\n    }\n    this.connection = 'Connected';\n    this.data = [];\n    Database.instance = this;\n  }\n  \n  query(sql) {\n    console.log(\`Executing: \${sql}\`);\n  }\n}\n\nconst db1 = new Database();\nconst db2 = new Database();\nconsole.log(db1 === db2); // true`,
    hints: ['Check for existing instance', 'Store instance as static', 'Return existing']    ,
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
    id: 'js-34',
    title: 'Promise.all and Promise.race',
    description: 'Handle multiple promises',
    content: `# Promise Combinators

## Promise.all (wait for all):
\`\`\`javascript
Promise.all([promise1, promise2, promise3])
  .then(results => console.log(results))
  .catch(error => console.error(error));
\`\`\`

## Promise.race (first to complete):
\`\`\`javascript
Promise.race([promise1, promise2])
  .then(result => console.log(result));
\`\`\`

**Task:** Use Promise.all.`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `// Fetch multiple users simultaneously`,
    solution: `async function fetchUsers(ids) {\n  const promises = ids.map(id => \n    fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`)\n      .then(r => r.json())\n  );\n  \n  try {\n    const users = await Promise.all(promises);\n    return users;\n  } catch (error) {\n    console.error('Failed to fetch:', error);\n    return [];\n  }\n}\n\nfetchUsers([1, 2, 3]).then(users => console.log(users));`,
    hints: ['Promise.all([...])', 'Returns array of results', 'Fails if any fails']
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
    id: 'js-35',
    title: 'Web Workers',
    description: 'Run JavaScript in background',
    content: `# Web Workers

## Main Thread:
\`\`\`javascript
const worker = new Worker('worker.js');
worker.postMessage({data: 'hello'});
worker.onmessage = e => console.log(e.data);
\`\`\`

## Worker File:
\`\`\`javascript
self.onmessage = e => {
  const result = heavyComputation(e.data);
  self.postMessage(result);
};
\`\`\`

**Task:** Understand Web Worker concept.`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `// Web Worker for heavy computation\n// worker.js\nself.onmessage = function(e) {\n  // Process data\n  const result = e.data * 2;\n  self.postMessage(result);\n};`,
    solution: `// Main thread\n// const worker = new Worker('worker.js');\n// worker.postMessage(10);\n// worker.onmessage = e => console.log('Result:', e.data);\n\n// Worker file (worker.js):\nself.onmessage = function(e) {\n  const numbers = e.data;\n  const sum = numbers.reduce((a, b) => a + b, 0);\n  self.postMessage(sum);\n};`,
    hints: ['Separate JavaScript file', 'postMessage to communicate', 'No DOM access in worker']
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
    id: 'js-36',
    title: 'Intersection Observer',
    description: 'Detect element visibility',
    content: `# Intersection Observer

## Setup:
\`\`\`javascript
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element visible');
    }
  });
});

observer.observe(element);
\`\`\`

**Task:** Create lazy loading observer.`,
    language: 'javascript',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `// Create lazy image loader`,
    solution: `const imageObserver = new IntersectionObserver((entries, observer) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      const img = entry.target;\n      img.src = img.dataset.src;\n      img.classList.add('loaded');\n      observer.unobserve(img);\n    }\n  });\n}, {\n  rootMargin: '50px'\n});\n\n// Usage:\n// document.querySelectorAll('img[data-src]').forEach(img => {\n//   imageObserver.observe(img);\n// });`,
    hints: ['IntersectionObserver API', 'isIntersecting property', 'unobserve when done']    ,
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

  // PROJECT LESSON
  {
    id: 'js-project-1',
    title: 'PROJECT: Interactive To-Do List',
    description: 'Build a working to-do list with add/remove',
    content: `# Project: To-Do List App

Create a functional to-do list application!

## Requirements:
1. Input field for new tasks
2. Button to add tasks
3. Display list of tasks
4. Each task has a delete button
5. Click task to mark as complete (line-through)

## JavaScript Skills:
- DOM selection (querySelector)
- Event listeners (click, input)
- Creating elements (createElement)
- Array manipulation (push, filter)
- Conditionals (if statements)

## HTML Structure Needed:
\`\`\`html
<input id="taskInput">
<button id="addBtn">Add</button>
<ul id="taskList"></ul>
\`\`\`

Build the complete functionality!`,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 45,
    isProject: true,
    projectDescription: 'Build a fully functional to-do list',
    initialCode: `const input = document.getElementById('taskInput');\nconst addBtn = document.getElementById('addBtn');\nconst taskList = document.getElementById('taskList');\n\n// Add your code here`,
    solution: `const input = document.getElementById('taskInput');\nconst addBtn = document.getElementById('addBtn');\nconst taskList = document.getElementById('taskList');\n\naddBtn.addEventListener('click', addTask);\n\nfunction addTask() {\n  const taskText = input.value.trim();\n  \n  if (taskText === '') return;\n  \n  const li = document.createElement('li');\n  li.textContent = taskText;\n  \n  // Toggle complete on click\n  li.addEventListener('click', function() {\n    this.style.textDecoration = \n      this.style.textDecoration === 'line-through' ? 'none' : 'line-through';\n  });\n  \n  // Delete button\n  const deleteBtn = document.createElement('button');\n  deleteBtn.textContent = 'Delete';\n  deleteBtn.addEventListener('click', function(e) {\n    e.stopPropagation();\n    li.remove();\n  });\n  \n  li.appendChild(deleteBtn);\n  taskList.appendChild(li);\n  \n  input.value = '';\n}\n\ninput.addEventListener('keypress', function(e) {\n  if (e.key === 'Enter') addTask();\n});`,
    hints: [
      'Check if input is empty',
      'Create li element for each task',
      'Add click listener for complete toggle',
      'stopPropagation() prevents bubbling',
      'Enter key should also add task'
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
  }
];