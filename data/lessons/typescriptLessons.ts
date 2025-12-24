import { Lesson } from '../courses'

export const typescriptLessons: Lesson[] = [
  {
    id: 'ts-1',
    title: 'Introduction to TypeScript',
    description: 'Learn what TypeScript is and why it matters',
    content: `# Welcome to TypeScript!

TypeScript is JavaScript with syntax for types. It helps catch errors early and makes code more reliable.

## What is TypeScript?
- **Superset of JavaScript**: All valid JS is valid TS
- **Type Safety**: Catch errors before runtime
- **Better IDE Support**: Autocomplete and intellisense
- **Compiles to JavaScript**: Runs anywhere JS runs

## Why TypeScript?
\`\`\`typescript
// JavaScript - error at runtime
function greet(name) {
  return "Hello, " + name.toUpperCase();
}
greet(123); // Runtime error!

// TypeScript - error before running
function greet(name: string) {
  return "Hello, " + name.toUpperCase();
}
greet(123); // Compile error - type mismatch!
\`\`\`

**Task:** Understand the benefits of type safety.`,
    language: 'typescript',
    difficulty: 'Beginner',
    estimatedTime: 10,
    initialCode: `// Welcome to TypeScript!\n// Type annotations help catch errors\n\nfunction welcome(name: string) {\n  return "Hello, " + name;\n}\n\nconsole.log(welcome("World"));`,
    solution: `function welcome(name: string) {\n  return "Hello, " + name;\n}\n\nconsole.log(welcome("World"));`,
    hints: ['TypeScript adds type annotations', 'Helps catch errors early', 'All JS is valid TS']
  },
  {
    id: 'ts-2',
    title: 'Basic Types',
    description: 'Master TypeScript primitive types',
    content: `# TypeScript Basic Types

## Primitive Types:
\`\`\`typescript
let name: string = "Alice";
let age: number = 25;
let isStudent: boolean = true;
let nothing: null = null;
let notSet: undefined = undefined;
\`\`\`

## Type Inference:
\`\`\`typescript
let inferredString = "Hello"; // TypeScript knows it's string
let inferredNumber = 42; // TypeScript knows it's number
\`\`\`

## Any Type (avoid when possible):
\`\`\`typescript
let anything: any = "can be anything";
anything = 123; // No error, but loses type safety
\`\`\`

**Task:** Create typed variables for name, age, and isActive.`,
    language: 'typescript',
    difficulty: 'Beginner',
    estimatedTime: 12,
    initialCode: `// Declare typed variables\nlet name: ;\nlet age: ;\nlet isActive: ;\n\nconsole.log(name, age, isActive);`,
    solution: `let name: string = "John";\nlet age: number = 30;\nlet isActive: boolean = true;\n\nconsole.log(name, age, isActive);`,
    hints: ['string, number, boolean are primitive types', 'Type comes after colon', 'Initialize with appropriate value']
  },
  {
    id: 'ts-3',
    title: 'Arrays and Tuples',
    description: 'Work with typed arrays and tuples',
    content: `# Arrays and Tuples

## Arrays:
\`\`\`typescript
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
let mixed: (string | number)[] = ["hi", 42];
\`\`\`

## Tuples (fixed-length arrays):
\`\`\`typescript
let person: [string, number] = ["Alice", 25];
let rgb: [number, number, number] = [255, 0, 0];
\`\`\`

## Array Methods Keep Type:
\`\`\`typescript
let nums: number[] = [1, 2, 3];
let doubled = nums.map(n => n * 2); // still number[]
\`\`\`

**Task:** Create array of strings and tuple with name and age.`,
    language: 'typescript',
    difficulty: 'Beginner',
    estimatedTime: 15,
    initialCode: `// Create array of fruits\nlet fruits: \n\n// Create tuple for person [name, age]\nlet person: \n\nconsole.log(fruits, person);`,
    solution: `let fruits: string[] = ["apple", "banana", "orange"];\n\nlet person: [string, number] = ["John", 30];\n\nconsole.log(fruits, person);`,
    hints: ['Array syntax: type[]', 'Tuple syntax: [type1, type2]', 'Order matters in tuples']
  },
  {
    id: 'ts-4',
    title: 'Objects and Interfaces',
    description: 'Define object shapes with interfaces',
    content: `# Interfaces for Objects

## Object Type:
\`\`\`typescript
let user: { name: string; age: number } = {
  name: "Alice",
  age: 25
};
\`\`\`

## Interfaces (better way):
\`\`\`typescript
interface User {
  name: string;
  age: number;
  email?: string; // Optional property
}

let user: User = {
  name: "Alice",
  age: 25
};
\`\`\`

## Readonly Properties:
\`\`\`typescript
interface Config {
  readonly apiKey: string;
}
\`\`\`

**Task:** Create User interface and user object.`,
    language: 'typescript',
    difficulty: 'Beginner',
    estimatedTime: 15,
    initialCode: `// Define User interface\ninterface User {\n  // Add properties\n}\n\n// Create user object\nlet user: User = {\n  \n};\n\nconsole.log(user);`,
    solution: `interface User {\n  name: string;\n  age: number;\n  email: string;\n}\n\nlet user: User = {\n  name: "Alice",\n  age: 25,\n  email: "alice@example.com"\n};\n\nconsole.log(user);`,
    hints: ['interface keyword defines shape', 'Properties with type annotations', '? makes property optional']
  },
  {
    id: 'ts-5',
    title: 'Functions with Types',
    description: 'Add types to function parameters and returns',
    content: `# Typed Functions

## Function Types:
\`\`\`typescript
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiply = (a: number, b: number): number => a * b;
\`\`\`

## Optional Parameters:
\`\`\`typescript
function greet(name: string, greeting?: string): string {
  return \`\${greeting || "Hello"}, \${name}\`;
}
\`\`\`

## Default Parameters:
\`\`\`typescript
function log(message: string, level: string = "info"): void {
  console.log(\`[\${level}] \${message}\`);
}
\`\`\`

**Task:** Create function that takes two numbers and returns their sum.`,
    language: 'typescript',
    difficulty: 'Beginner',
    estimatedTime: 15,
    initialCode: `// Create typed function\nfunction calculate(a: , b: ):  {\n  \n}\n\nconsole.log(calculate(5, 3));`,
    solution: `function calculate(a: number, b: number): number {\n  return a + b;\n}\n\nconsole.log(calculate(5, 3));`,
    hints: ['Parameters: name: type', 'Return type after closing paren', 'void for no return']
  },
  {
    id: 'ts-6',
    title: 'Union and Literal Types',
    description: 'Use union types and literal values',
    content: `# Union and Literal Types

## Union Types:
\`\`\`typescript
let value: string | number;
value = "hello"; // OK
value = 42; // OK

function format(input: string | number): string {
  return String(input);
}
\`\`\`

## Literal Types:
\`\`\`typescript
let direction: "up" | "down" | "left" | "right";
direction = "up"; // OK
direction = "forward"; // Error!

type Status = "pending" | "success" | "error";
\`\`\`

## Type Guards:
\`\`\`typescript
function process(input: string | number) {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  return input.toFixed(2);
}
\`\`\`

**Task:** Create function accepting string or number, returning formatted output.`,
    language: 'typescript',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `function format(input: string | number): string {\n  // Add type guard and formatting\n  \n}\n\nconsole.log(format("hello"));\nconsole.log(format(42));`,
    solution: `function format(input: string | number): string {\n  if (typeof input === "string") {\n    return input.toUpperCase();\n  }\n  return input.toFixed(2);\n}\n\nconsole.log(format("hello"));\nconsole.log(format(42));`,
    hints: ['Use | for union types', 'typeof for type guards', 'Handle each type separately']
  },
  {
    id: 'ts-7',
    title: 'Type Aliases',
    description: 'Create reusable type definitions',
    content: `# Type Aliases

## Basic Type Alias:
\`\`\`typescript
type UserID = string | number;
type Point = { x: number; y: number };

let id: UserID = 123;
let origin: Point = { x: 0, y: 0 };
\`\`\`

## Complex Types:
\`\`\`typescript
type User = {
  id: UserID;
  name: string;
  location: Point;
};
\`\`\`

## Type vs Interface:
- **type**: More flexible, can't be reopened
- **interface**: For objects, can be extended

**Task:** Create Point type and function using it.`,
    language: 'typescript',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `// Define Point type\ntype Point = \n\n// Function to calculate distance\nfunction distance(p1: Point, p2: Point): number {\n  \n}\n\nconsole.log(distance({x: 0, y: 0}, {x: 3, y: 4}));`,
    solution: `type Point = { x: number; y: number };\n\nfunction distance(p1: Point, p2: Point): number {\n  const dx = p2.x - p1.x;\n  const dy = p2.y - p1.y;\n  return Math.sqrt(dx * dx + dy * dy);\n}\n\nconsole.log(distance({x: 0, y: 0}, {x: 3, y: 4}));`,
    hints: ['type keyword creates alias', 'Use in function parameters', 'Calculate Pythagorean theorem']
  },
  {
    id: 'ts-8',
    title: 'Enums',
    description: 'Define sets of named constants',
    content: `# Enums

## Numeric Enums:
\`\`\`typescript
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

let dir: Direction = Direction.Up;
\`\`\`

## String Enums:
\`\`\`typescript
enum Status {
  Pending = "PENDING",
  Success = "SUCCESS",
  Error = "ERROR"
}
\`\`\`

## Using Enums:
\`\`\`typescript
function handleStatus(status: Status) {
  switch (status) {
    case Status.Pending:
      console.log("Loading...");
      break;
    case Status.Success:
      console.log("Done!");
      break;
  }
}
\`\`\`

**Task:** Create Status enum and function using it.`,
    language: 'typescript',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `// Define Status enum\nenum Status {\n  \n}\n\n// Function using enum\nfunction checkStatus(s: Status): string {\n  \n}\n\nconsole.log(checkStatus(Status.Success));`,
    solution: `enum Status {\n  Pending = "PENDING",\n  Success = "SUCCESS",\n  Error = "ERROR"\n}\n\nfunction checkStatus(s: Status): string {\n  switch (s) {\n    case Status.Pending:\n      return "In progress";\n    case Status.Success:\n      return "Completed";\n    case Status.Error:\n      return "Failed";\n    default:\n      return "Unknown";\n  }\n}\n\nconsole.log(checkStatus(Status.Success));`,
    hints: ['enum keyword', 'String enums need values', 'Use in switch statements']
  },
  {
    id: 'ts-9',
    title: 'Generics Basics',
    description: 'Create reusable, type-safe functions',
    content: `# Introduction to Generics

## Why Generics?
Create functions that work with any type while maintaining type safety.

## Basic Generic:
\`\`\`typescript
function identity<T>(value: T): T {
  return value;
}

let num = identity<number>(42);
let str = identity<string>("hello");
let auto = identity(true); // Type inferred
\`\`\`

## Generic Arrays:
\`\`\`typescript
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}
\`\`\`

## Multiple Type Parameters:
\`\`\`typescript
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}
\`\`\`

**Task:** Create generic function to return first array element.`,
    language: 'typescript',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `// Create generic function\nfunction first<T>(arr: ): T | undefined {\n  \n}\n\nconsole.log(first([1, 2, 3]));\nconsole.log(first(["a", "b"]));`,
    solution: `function first<T>(arr: T[]): T | undefined {\n  return arr[0];\n}\n\nconsole.log(first([1, 2, 3]));\nconsole.log(first(["a", "b"]));`,
    hints: ['<T> declares type parameter', 'T[] is array of T', 'Return T or undefined']
  },
  {
    id: 'ts-10',
    title: 'Generic Interfaces',
    description: 'Create flexible interface definitions',
    content: `# Generic Interfaces

## Basic Generic Interface:
\`\`\`typescript
interface Box<T> {
  value: T;
}

let numberBox: Box<number> = { value: 42 };
let stringBox: Box<string> = { value: "hello" };
\`\`\`

## Generic with Methods:
\`\`\`typescript
interface Container<T> {
  value: T;
  getValue(): T;
  setValue(val: T): void;
}
\`\`\`

## Multiple Type Parameters:
\`\`\`typescript
interface Pair<K, V> {
  key: K;
  value: V;
}

let pair: Pair<string, number> = {
  key: "age",
  value: 25
};
\`\`\`

**Task:** Create generic Result interface for success/error.`,
    language: 'typescript',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `// Define generic Result interface\ninterface Result<T> {\n  \n}\n\n// Create instances\nlet success: Result<number> = {\n  \n};\n\nlet error: Result<string> = {\n  \n};`,
    solution: `interface Result<T> {\n  success: boolean;\n  data?: T;\n  error?: string;\n}\n\nlet success: Result<number> = {\n  success: true,\n  data: 42\n};\n\nlet error: Result<string> = {\n  success: false,\n  error: "Failed to load"\n};`,
    hints: ['Generic type in angle brackets', 'Optional properties with ?', 'Success/error pattern']
  },
  {
    id: 'ts-11',
    title: 'Classes with Types',
    description: 'Add TypeScript to classes',
    content: `# TypeScript Classes

## Basic Class:
\`\`\`typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return \`Hi, I'm \${this.name}\`;
  }
}
\`\`\`

## Access Modifiers:
\`\`\`typescript
class BankAccount {
  private balance: number = 0;
  public owner: string;
  protected accountNumber: string;

  deposit(amount: number): void {
    this.balance += amount;
  }
}
\`\`\`

## Shorthand:
\`\`\`typescript
class User {
  constructor(
    public name: string,
    private age: number
  ) {}
}
\`\`\`

**Task:** Create User class with name, email, and greet method.`,
    language: 'typescript',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `class User {\n  // Add properties\n  \n  // Constructor\n  \n  // Methods\n  \n}\n\nconst user = new User("Alice", "alice@example.com");\nconsole.log(user.greet());`,
    solution: `class User {\n  name: string;\n  email: string;\n\n  constructor(name: string, email: string) {\n    this.name = name;\n    this.email = email;\n  }\n\n  greet(): string {\n    return \`Hello, I'm \${this.name}\`;\n  }\n}\n\nconst user = new User("Alice", "alice@example.com");\nconsole.log(user.greet());`,
    hints: ['Declare property types', 'Constructor parameters typed', 'Methods have return types']
  },
  {
    id: 'ts-12',
    title: 'Class Inheritance',
    description: 'Extend classes with proper typing',
    content: `# Class Inheritance

## Extending Classes:
\`\`\`typescript
class Animal {
  constructor(public name: string) {}
  
  move(distance: number): void {
    console.log(\`\${this.name} moved \${distance}m\`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof!");
  }
}
\`\`\`

## Super Keyword:
\`\`\`typescript
class Employee extends Person {
  constructor(name: string, public jobTitle: string) {
    super(name);
  }
}
\`\`\`

## Abstract Classes:
\`\`\`typescript
abstract class Shape {
  abstract area(): number;
}
\`\`\`

**Task:** Create Employee extending Person with jobTitle.`,
    language: 'typescript',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `class Person {\n  constructor(public name: string) {}\n}\n\n// Extend Person\nclass Employee extends Person {\n  \n}\n\nconst emp = new Employee("John", "Developer");\nconsole.log(emp.name, emp.jobTitle);`,
    solution: `class Person {\n  constructor(public name: string) {}\n}\n\nclass Employee extends Person {\n  constructor(name: string, public jobTitle: string) {\n    super(name);\n  }\n  \n  getInfo(): string {\n    return \`\${this.name} - \${this.jobTitle}\`;\n  }\n}\n\nconst emp = new Employee("John", "Developer");\nconsole.log(emp.getInfo());`,
    hints: ['extends keyword', 'super() calls parent constructor', 'Add new properties']
  },
  {
    id: 'ts-13',
    title: 'Implementing Interfaces',
    description: 'Use interfaces with classes',
    content: `# Implementing Interfaces

## Interface Implementation:
\`\`\`typescript
interface Printable {
  print(): void;
}

class Document implements Printable {
  constructor(public content: string) {}
  
  print(): void {
    console.log(this.content);
  }
}
\`\`\`

## Multiple Interfaces:
\`\`\`typescript
interface Serializable {
  serialize(): string;
}

class Data implements Printable, Serializable {
  print(): void { }
  serialize(): string { return ""; }
}
\`\`\`

**Task:** Create Storable interface and Product class implementing it.`,
    language: 'typescript',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `// Define Storable interface\ninterface Storable {\n  \n}\n\n// Implement interface\nclass Product implements Storable {\n  \n}\n\nconst product = new Product("Laptop", 999);\nconsole.log(product.save());`,
    solution: `interface Storable {\n  save(): string;\n  load(data: string): void;\n}\n\nclass Product implements Storable {\n  constructor(public name: string, public price: number) {}\n  \n  save(): string {\n    return JSON.stringify(this);\n  }\n  \n  load(data: string): void {\n    const obj = JSON.parse(data);\n    this.name = obj.name;\n    this.price = obj.price;\n  }\n}\n\nconst product = new Product("Laptop", 999);\nconsole.log(product.save());`,
    hints: ['implements keyword', 'Must define all interface methods', 'Can implement multiple']
  },
  {
    id: 'ts-14',
    title: 'Type Assertions',
    description: 'Tell TypeScript about types you know',
    content: `# Type Assertions

## As Syntax:
\`\`\`typescript
let value: any = "hello";
let length: number = (value as string).length;
\`\`\`

## Angle Bracket (JSX incompatible):
\`\`\`typescript
let value: any = "hello";
let length: number = (<string>value).length;
\`\`\`

## DOM Elements:
\`\`\`typescript
const input = document.getElementById("input") as HTMLInputElement;
input.value = "Hello";
\`\`\`

## Non-null Assertion:
\`\`\`typescript
function getValue(id: string): string | undefined {
  return map.get(id);
}

let value = getValue("key")!; // Assert non-null
\`\`\`

**Task:** Use type assertion with DOM element.`,
    language: 'typescript',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `// Type assert DOM element\nconst button = document.getElementById("btn");\n\n// Add event listener\n`,
    solution: `const button = document.getElementById("btn") as HTMLButtonElement;\n\nbutton.addEventListener("click", () => {\n  console.log("Clicked!");\n});`,
    hints: ['as HTMLElementType', 'Common: HTMLInputElement, HTMLButtonElement', 'Use when you know the type']
  },
  {
    id: 'ts-15',
    title: 'Utility Types - Partial & Required',
    description: 'Use built-in utility types',
    content: `# Utility Types: Partial & Required

## Partial<T>:
Makes all properties optional.

\`\`\`typescript
interface User {
  name: string;
  age: number;
  email: string;
}

function updateUser(user: User, updates: Partial<User>) {
  return { ...user, ...updates };
}

updateUser(user, { age: 26 }); // Only age
\`\`\`

## Required<T>:
Makes all properties required.

\`\`\`typescript
interface Config {
  host?: string;
  port?: number;
}

let config: Required<Config> = {
  host: "localhost",
  port: 3000
};
\`\`\`

**Task:** Create update function using Partial.`,
    language: 'typescript',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `interface Product {\n  id: number;\n  name: string;\n  price: number;\n}\n\n// Create update function\nfunction updateProduct(product: Product, updates: ) {\n  \n}\n\nconst p = { id: 1, name: "Laptop", price: 999 };\nconsole.log(updateProduct(p, { price: 899 }));`,
    solution: `interface Product {\n  id: number;\n  name: string;\n  price: number;\n}\n\nfunction updateProduct(product: Product, updates: Partial<Product>): Product {\n  return { ...product, ...updates };\n}\n\nconst p = { id: 1, name: "Laptop", price: 999 };\nconsole.log(updateProduct(p, { price: 899 }));`,
    hints: ['Partial<Type> makes all optional', 'Use spread operator', 'Return merged object']
  },
  {
    id: 'ts-16',
    title: 'Utility Types - Pick & Omit',
    description: 'Select or exclude properties from types',
    content: `# Utility Types: Pick & Omit

## Pick<T, Keys>:
Select specific properties.

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Pick<User, "id" | "name" | "email">;
// { id: number; name: string; email: string; }
\`\`\`

## Omit<T, Keys>:
Exclude specific properties.

\`\`\`typescript
type UserWithoutPassword = Omit<User, "password">;
// { id: number; name: string; email: string; }
\`\`\`

**Task:** Create public-facing user type.`,
    language: 'typescript',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `interface User {\n  id: number;\n  name: string;\n  email: string;\n  password: string;\n  createdAt: Date;\n}\n\n// Create PublicUser omitting sensitive fields\ntype PublicUser = \n\nfunction getPublicUser(user: User): PublicUser {\n  \n}`,
    solution: `interface User {\n  id: number;\n  name: string;\n  email: string;\n  password: string;\n  createdAt: Date;\n}\n\ntype PublicUser = Omit<User, "password" | "createdAt">;\n\nfunction getPublicUser(user: User): PublicUser {\n  const { password, createdAt, ...publicData } = user;\n  return publicData;\n}`,
    hints: ['Omit<Type, "key1" | "key2">', 'Pick opposite of Omit', 'Use destructuring to extract']
  },
  {
    id: 'ts-17',
    title: 'Utility Types - Record & Readonly',
    description: 'Create mapped and immutable types',
    content: `# Record & Readonly

## Record<Keys, Type>:
Create object type with specific keys.

\`\`\`typescript
type Role = "admin" | "user" | "guest";
type Permissions = Record<Role, string[]>;

const perms: Permissions = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"]
};
\`\`\`

## Readonly<T>:
Make all properties readonly.

\`\`\`typescript
interface Config {
  apiKey: string;
  timeout: number;
}

const config: Readonly<Config> = {
  apiKey: "abc123",
  timeout: 5000
};

config.apiKey = "new"; // Error!
\`\`\`

**Task:** Create settings with Record.`,
    language: 'typescript',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `type Environment = "dev" | "staging" | "prod";\n\n// Create config for each environment\ntype Config = \n\nconst configs: Config = {\n  \n};\n\nconsole.log(configs);`,
    solution: `type Environment = "dev" | "staging" | "prod";\n\ntype Config = Record<Environment, { apiUrl: string; debug: boolean }>;\n\nconst configs: Config = {\n  dev: { apiUrl: "http://localhost", debug: true },\n  staging: { apiUrl: "https://staging.api", debug: true },\n  prod: { apiUrl: "https://api.com", debug: false }\n};\n\nconsole.log(configs);`,
    hints: ['Record<Keys, ValueType>', 'Keys must be string | number | symbol', 'Readonly prevents modification']
  },
  {
    id: 'ts-18',
    title: 'Type Guards',
    description: 'Narrow types with runtime checks',
    content: `# Type Guards

## typeof Guards:
\`\`\`typescript
function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase(); // string
  }
  return value.toFixed(2); // number
}
\`\`\`

## instanceof Guards:
\`\`\`typescript
class Dog {
  bark() { console.log("Woof!"); }
}

function handle(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  }
}
\`\`\`

## Custom Type Guards:
\`\`\`typescript
interface Fish {
  swim(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
\`\`\`

**Task:** Create custom type guard.`,
    language: 'typescript',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `interface User {\n  type: "user";\n  name: string;\n}\n\ninterface Admin {\n  type: "admin";\n  name: string;\n  permissions: string[];\n}\n\n// Create type guard\nfunction isAdmin(person: User | Admin):  {\n  \n}\n\nfunction greet(person: User | Admin) {\n  if (isAdmin(person)) {\n    console.log(\`Admin \${person.name} with \${person.permissions.length} perms\`);\n  }\n}`,
    solution: `interface User {\n  type: "user";\n  name: string;\n}\n\ninterface Admin {\n  type: "admin";\n  name: string;\n  permissions: string[];\n}\n\nfunction isAdmin(person: User | Admin): person is Admin {\n  return person.type === "admin";\n}\n\nfunction greet(person: User | Admin) {\n  if (isAdmin(person)) {\n    console.log(\`Admin \${person.name} with \${person.permissions.length} perms\`);\n  } else {\n    console.log(\`User \${person.name}\`);\n  }\n}`,
    hints: ['Return type: value is Type', 'Check discriminating property', 'Narrows type in if block']
  },
  {
    id: 'ts-19',
    title: 'Discriminated Unions',
    description: 'Pattern match with tagged unions',
    content: `# Discriminated Unions

Also called "tagged unions" or "algebraic data types".

## Pattern:
\`\`\`typescript
interface Square {
  kind: "square";
  size: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Circle;

function area(shape: Shape): number {
  switch (shape.kind) {
    case "square":
      return shape.size ** 2;
    case "circle":
      return Math.PI * shape.radius ** 2;
  }
}
\`\`\`

## Benefits:
- Type safety
- Exhaustive checking
- Better autocomplete

**Task:** Create Result type with success/error variants.`,
    language: 'typescript',
    difficulty: 'Advanced',
    estimatedTime: 22,
    initialCode: `// Define discriminated union\ninterface Success {\n  \n}\n\ninterface Error {\n  \n}\n\ntype Result = Success | Error;\n\nfunction handleResult(result: Result): string {\n  \n}`,
    solution: `interface Success {\n  status: "success";\n  data: any;\n}\n\ninterface Error {\n  status: "error";\n  message: string;\n}\n\ntype Result = Success | Error;\n\nfunction handleResult(result: Result): string {\n  switch (result.status) {\n    case "success":\n      return \`Got data: \${result.data}\`;\n    case "error":\n      return \`Error: \${result.message}\`;\n  }\n}`,
    hints: ['Common tag property (kind, type, status)', 'Use in switch statement', 'Each variant is interface']
  },
  {
    id: 'ts-20',
    title: 'Mapped Types',
    description: 'Transform types programmatically',
    content: `# Mapped Types

## Basic Mapping:
\`\`\`typescript
type Flags<T> = {
  [K in keyof T]: boolean;
};

interface User {
  name: string;
  age: number;
}

type UserFlags = Flags<User>;
// { name: boolean; age: boolean; }
\`\`\`

## With Modifiers:
\`\`\`typescript
type Optional<T> = {
  [K in keyof T]?: T[K];
};

type ReadonlyPartial<T> = {
  readonly [K in keyof T]?: T[K];
};
\`\`\`

## Key Remapping:
\`\`\`typescript
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};
\`\`\`

**Task:** Create Nullable type.`,
    language: 'typescript',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `// Create Nullable mapped type\ntype Nullable<T> = {\n  \n};\n\ninterface User {\n  name: string;\n  age: number;\n}\n\ntype NullableUser = Nullable<User>;\n// Should be { name: string | null; age: number | null; }`,
    solution: `type Nullable<T> = {\n  [K in keyof T]: T[K] | null;\n};\n\ninterface User {\n  name: string;\n  age: number;\n}\n\ntype NullableUser = Nullable<User>;\n\nconst user: NullableUser = {\n  name: "John",\n  age: null\n};`,
    hints: ['[K in keyof T] iterates properties', 'T[K] is property type', 'Add | null to make nullable']
  },
  {
    id: 'ts-21',
    title: 'Conditional Types',
    description: 'Types that depend on conditions',
    content: `# Conditional Types

## Syntax:
\`\`\`typescript
T extends U ? X : Y
\`\`\`

## Example:
\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false
\`\`\`

## Practical Use:
\`\`\`typescript
type Flatten<T> = T extends Array<infer U> ? U : T;

type Num = Flatten<number[]>; // number
type Str = Flatten<string>;   // string
\`\`\`

## With Unions:
\`\`\`typescript
type Filter<T, U> = T extends U ? T : never;
type Numbers = Filter<string | number | boolean, number>;
// number
\`\`\`

**Task:** Create NonNullable type.`,
    language: 'typescript',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `// Create NonNullable type\ntype MyNonNullable<T> = \n\ntype A = MyNonNullable<string | null | undefined>;\n// Should be string`,
    solution: `type MyNonNullable<T> = T extends null | undefined ? never : T;\n\ntype A = MyNonNullable<string | null | undefined>;\n\nfunction process(value: A) {\n  console.log(value.toUpperCase());\n}`,
    hints: ['extends checks if type matches', 'never removes from union', 'Built-in: NonNullable<T>']
  },
  {
    id: 'ts-22',
    title: 'Template Literal Types',
    description: 'Create types from string templates',
    content: `# Template Literal Types

## Basic:
\`\`\`typescript
type World = "world";
type Greeting = \`hello \${World}\`; // "hello world"
\`\`\`

## With Unions:
\`\`\`typescript
type Color = "red" | "blue";
type Quantity = "one" | "two";
type ColoredBall = \`\${Quantity} \${Color} ball\`;
// "one red ball" | "one blue ball" | "two red ball" | "two blue ball"
\`\`\`

## Practical Example:
\`\`\`typescript
type EventName = "click" | "scroll";
type EventHandler = \`on\${Capitalize<EventName>}\`;
// "onClick" | "onScroll"
\`\`\`

## Intrinsic Helpers:
- \`Uppercase<T>\`
- \`Lowercase<T>\`
- \`Capitalize<T>\`
- \`Uncapitalize<T>\`

**Task:** Create CSS property types.`,
    language: 'typescript',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `type Property = "margin" | "padding";\ntype Side = "top" | "bottom" | "left" | "right";\n\n// Create combined type like "margin-top", "padding-left", etc.\ntype CSSProperty = \n\nconst prop: CSSProperty = "margin-top"; // Should be valid`,
    solution: `type Property = "margin" | "padding";\ntype Side = "top" | "bottom" | "left" | "right";\n\ntype CSSProperty = \`\${Property}-\${Side}\`;\n\nconst prop1: CSSProperty = "margin-top";\nconst prop2: CSSProperty = "padding-left";\n\nfunction setStyle(property: CSSProperty, value: string) {\n  console.log(\`Setting \${property} to \${value}\`);\n}`,
    hints: ['Use template literal syntax', 'Unions create all combinations', 'Intrinsic helpers available']
  },
  {
    id: 'ts-23',
    title: 'Index Signatures',
    description: 'Define dynamic property types',
    content: `# Index Signatures

## String Index:
\`\`\`typescript
interface StringMap {
  [key: string]: string;
}

let map: StringMap = {
  name: "John",
  city: "NYC"
};
\`\`\`

## Number Index:
\`\`\`typescript
interface NumberArray {
  [index: number]: string;
}

let arr: NumberArray = ["a", "b", "c"];
\`\`\`

## With Known Properties:
\`\`\`typescript
interface Config {
  version: string;
  [key: string]: string | number;
}
\`\`\`

## Generic Index:
\`\`\`typescript
interface Dictionary<T> {
  [key: string]: T;
}

let ages: Dictionary<number> = {
  john: 30,
  jane: 25
};
\`\`\`

**Task:** Create generic cache.`,
    language: 'typescript',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `// Create Cache interface\ninterface Cache<T> {\n  \n}\n\nconst userCache: Cache<{ name: string }> = {\n  \n};\n\nuserCache["user1"] = { name: "John" };`,
    solution: `interface Cache<T> {\n  [key: string]: T;\n}\n\nconst userCache: Cache<{ name: string }> = {};\n\nuserCache["user1"] = { name: "John" };\nuserCache["user2"] = { name: "Jane" };\n\nfunction getUser(id: string): { name: string } | undefined {\n  return userCache[id];\n}`,
    hints: ['[key: string]: Type syntax', 'Generic makes it flexible', 'Can mix with known properties']
  },
  {
    id: 'ts-24',
    title: 'Decorators',
    description: 'Metaprogramming with decorators',
    content: `# Decorators (Experimental)

Enable in tsconfig.json: \`"experimentalDecorators": true\`

## Class Decorator:
\`\`\`typescript
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {
  greeting: string;
}
\`\`\`

## Method Decorator:
\`\`\`typescript
function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  
  descriptor.value = function(...args: any[]) {
    console.log(\`Calling \${key}\`);
    return original.apply(this, args);
  };
}

class Calculator {
  @log
  add(a: number, b: number) {
    return a + b;
  }
}
\`\`\`

**Task:** Create timing decorator.`,
    language: 'typescript',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `// Create @measure decorator\nfunction measure(target: any, key: string, descriptor: PropertyDescriptor) {\n  \n}\n\nclass Service {\n  @measure\n  async fetchData() {\n    await new Promise(resolve => setTimeout(resolve, 1000));\n    return "data";\n  }\n}`,
    solution: `function measure(target: any, key: string, descriptor: PropertyDescriptor) {\n  const original = descriptor.value;\n  \n  descriptor.value = async function(...args: any[]) {\n    const start = performance.now();\n    const result = await original.apply(this, args);\n    const end = performance.now();\n    console.log(\`\${key} took \${end - start}ms\`);\n    return result;\n  };\n}\n\nclass Service {\n  @measure\n  async fetchData() {\n    await new Promise(resolve => setTimeout(resolve, 1000));\n    return "data";\n  }\n}`,
    hints: ['Descriptor.value is the method', 'Wrap original function', 'Return from decorator']
  },
  {
    id: 'ts-25',
    title: 'Modules and Namespaces',
    description: 'Organize code with modules',
    content: `# Modules vs Namespaces

## ES6 Modules (Preferred):
\`\`\`typescript
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export const PI = 3.14159;

// app.ts
import { add, PI } from './math';
\`\`\`

## Default Exports:
\`\`\`typescript
// utils.ts
export default class Utils {
  static format(s: string): string {
    return s.toUpperCase();
  }
}

// app.ts
import Utils from './utils';
\`\`\`

## Namespaces (Legacy):
\`\`\`typescript
namespace Shapes {
  export class Circle {
    constructor(public radius: number) {}
  }
}

let c = new Shapes.Circle(10);
\`\`\`

**Task:** Create and import module.`,
    language: 'typescript',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `// File: validator.ts\nexport function isEmail(s: string): boolean {\n  return s.includes('@');\n}\n\nexport function isURL(s: string): boolean {\n  return s.startsWith('http');\n}\n\n// File: app.ts\n// Import and use validators\n`,
    solution: `// validator.ts\nexport function isEmail(s: string): boolean {\n  return s.includes('@');\n}\n\nexport function isURL(s: string): boolean {\n  return s.startsWith('http');\n}\n\n// app.ts\nimport { isEmail, isURL } from './validator';\n\nconsole.log(isEmail('test@example.com'));\nconsole.log(isURL('https://example.com'));`,
    hints: ['export keyword', 'import { name } from path', 'Use ES6 modules over namespaces']
  },
  {
    id: 'ts-26',
    title: 'Type Declaration Files',
    description: 'Work with .d.ts files',
    content: `# Declaration Files (.d.ts)

## Purpose:
Provide type information for JavaScript libraries.

## Ambient Declarations:
\`\`\`typescript
// types.d.ts
declare const VERSION: string;
declare function log(message: string): void;

declare namespace MathUtils {
  function add(a: number, b: number): number;
}
\`\`\`

## Module Declarations:
\`\`\`typescript
// lodash.d.ts
declare module 'lodash' {
  export function chunk<T>(array: T[], size: number): T[][];
}
\`\`\`

## DefinitelyTyped:
Install types: \`npm install @types/library-name\`

## Creating Your Own:
\`\`\`typescript
// mylib.d.ts
export interface Config {
  apiKey: string;
}

export function init(config: Config): void;
\`\`\`

**Task:** Create declaration for global library.`,
    language: 'typescript',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `// Create declaration file for jQuery-like library\n// global.d.ts\n\n// Declare $ function\n\n// Usage:\n// $(selector).text(value)\n// $(selector).on(event, handler)`,
    solution: `// global.d.ts\ninterface JQuery {\n  text(value?: string): JQuery;\n  on(event: string, handler: () => void): JQuery;\n  addClass(className: string): JQuery;\n}\n\ndeclare function $(selector: string): JQuery;\n\n// Usage\nconst elem = $("#myElement");\nelem.text("Hello").addClass("active");`,
    hints: ['declare keyword for globals', 'Interface for methods', 'Chainable returns self']
  },
  {
    id: 'ts-27',
    title: 'Advanced Generics - Constraints',
    description: 'Constrain generic types',
    content: `# Generic Constraints

## Extends Constraint:
\`\`\`typescript
interface HasLength {
  length: number;
}

function longest<T extends HasLength>(a: T, b: T): T {
  return a.length > b.length ? a : b;
}

longest("hello", "hi"); // OK
longest([1, 2], [1]); // OK
longest(10, 20); // Error - number has no length
\`\`\`

## Using Type Parameters:
\`\`\`typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let person = { name: "John", age: 30 };
getProperty(person, "name"); // OK
getProperty(person, "invalid"); // Error
\`\`\`

**Task:** Create constrained generic function.`,
    language: 'typescript',
    difficulty: 'Advanced',
    estimatedTime: 22,
    initialCode: `// Create function that gets property value\nfunction getProp<T, K >(obj: T, key: K):  {\n  \n}\n\nconst user = { name: "Alice", age: 25 };\nconsole.log(getProp(user, "name"));`,
    solution: `function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\n\nconst user = { name: "Alice", age: 25 };\nconsole.log(getProp(user, "name"));\nconsole.log(getProp(user, "age"));\n// getProp(user, "invalid"); // Error!`,
    hints: ['K extends keyof T', 'Return type T[K]', 'Ensures key exists']
  },
  {
    id: 'ts-28',
    title: 'Infer Keyword',
    description: 'Extract types from other types',
    content: `# Infer Keyword

## Basic Usage:
\`\`\`typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

function getString(): string {
  return "hello";
}

type Result = ReturnType<typeof getString>; // string
\`\`\`

## Array Element Type:
\`\`\`typescript
type ElementType<T> = T extends (infer E)[] ? E : T;

type Num = ElementType<number[]>; // number
type Str = ElementType<string>; // string
\`\`\`

## Promise Value:
\`\`\`typescript
type Awaited<T> = T extends Promise<infer U> ? U : T;

type Value = Awaited<Promise<number>>; // number
\`\`\`

**Task:** Create type to extract function parameters.`,
    language: 'typescript',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `// Create Parameters type\ntype MyParameters<T> = \n\nfunction test(name: string, age: number): void {}\n\ntype Params = MyParameters<typeof test>;\n// Should be [string, number]`,
    solution: `type MyParameters<T> = T extends (...args: infer P) => any ? P : never;\n\nfunction test(name: string, age: number): void {}\n\ntype Params = MyParameters<typeof test>;\n\nfunction call(...args: Params) {\n  test(...args);\n}`,
    hints: ['infer in conditional type', 'Match function signature', '...args is array']
  },
  {
    id: 'ts-29',
    title: 'TypeScript with React',
    description: 'Type React components and hooks',
    content: `# TypeScript + React

## Function Component:
\`\`\`typescript
interface Props {
  name: string;
  age?: number;
}

const Greeting: React.FC<Props> = ({ name, age }) => {
  return <div>Hello {name}, {age}</div>;
};
\`\`\`

## useState Hook:
\`\`\`typescript
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
\`\`\`

## Event Handlers:
\`\`\`typescript
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e.currentTarget);
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};
\`\`\`

## useRef:
\`\`\`typescript
const inputRef = useRef<HTMLInputElement>(null);
\`\`\`

**Task:** Create typed component.`,
    language: 'typescript',
    difficulty: 'Advanced',
    estimatedTime: 25,
    initialCode: `// Create Button component with props\ninterface ButtonProps {\n  \n}\n\nconst Button: React.FC<ButtonProps> = () => {\n  \n};\n\n// Usage: <Button label="Click me" onClick={() => {}} />`,
    solution: `interface ButtonProps {\n  label: string;\n  onClick: () => void;\n  disabled?: boolean;\n}\n\nconst Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {\n  return (\n    <button onClick={onClick} disabled={disabled}>\n      {label}\n    </button>\n  );\n};\n\n// Usage\n<Button label="Click me" onClick={() => console.log("Clicked")} />`,
    hints: ['React.FC<Props>', 'Event types from React', 'Optional props with ?']
  },
  {
    id: 'ts-30',
    title: 'PROJECT: Type-Safe API Client',
    description: 'Build a fully typed API client',
    content: `# Project: Type-Safe API Client

Create a type-safe API client for a REST API!

## Requirements:
1. Generic request function with type parameters
2. Response types for each endpoint
3. Error handling with discriminated unions
4. Request/Response interceptors

## Features to Implement:
- GET, POST, PUT, DELETE methods
- Type-safe responses
- Error types
- Loading states
- Generic fetch wrapper

## Types Needed:
\`\`\`typescript
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface ApiResponse<T> {
  data: T;
  status: number;
}

interface ApiError {
  message: string;
  code: string;
}
\`\`\`

Build a production-ready API client!`,
    language: 'typescript',
    difficulty: 'Advanced',
    estimatedTime: 45,
    isProject: true,
    projectDescription: 'Build a fully typed API client',
    initialCode: `// Define your types\n\n// Create API client class\nclass ApiClient {\n  \n}\n\n// Usage example\nconst api = new ApiClient("https://api.example.com");\nconst users = await api.get<User[]>("/users");`,
    solution: `type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";\n\ninterface ApiResponse<T> {\n  data: T;\n  status: number;\n}\n\ninterface ApiError {\n  message: string;\n  code: string;\n  status: number;\n}\n\ntype Result<T> = \n  | { success: true; data: T }\n  | { success: false; error: ApiError };\n\nclass ApiClient {\n  constructor(private baseUrl: string) {}\n\n  private async request<T>(\n    method: HttpMethod,\n    path: string,\n    body?: any\n  ): Promise<Result<T>> {\n    try {\n      const response = await fetch(\`\${this.baseUrl}\${path}\`, {\n        method,\n        headers: { "Content-Type": "application/json" },\n        body: body ? JSON.stringify(body) : undefined\n      });\n\n      if (!response.ok) {\n        return {\n          success: false,\n          error: {\n            message: "Request failed",\n            code: "REQUEST_FAILED",\n            status: response.status\n          }\n        };\n      }\n\n      const data = await response.json();\n      return { success: true, data };\n    } catch (error) {\n      return {\n        success: false,\n        error: {\n          message: error instanceof Error ? error.message : "Unknown error",\n          code: "NETWORK_ERROR",\n          status: 0\n        }\n      };\n    }\n  }\n\n  async get<T>(path: string): Promise<Result<T>> {\n    return this.request<T>("GET", path);\n  }\n\n  async post<T>(path: string, body: any): Promise<Result<T>> {\n    return this.request<T>("POST", path, body);\n  }\n\n  async put<T>(path: string, body: any): Promise<Result<T>> {\n    return this.request<T>("PUT", path, body);\n  }\n\n  async delete<T>(path: string): Promise<Result<T>> {\n    return this.request<T>("DELETE", path);\n  }\n}\n\n// Usage\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nconst api = new ApiClient("https://api.example.com");\n\nasync function getUsers() {\n  const result = await api.get<User[]>("/users");\n  \n  if (result.success) {\n    console.log(result.data);\n  } else {\n    console.error(result.error.message);\n  }\n}`,
    hints: [
      'Use generics for response types',
      'Discriminated union for Result',
      'Private method for shared logic',
      'Handle errors gracefully',
      'Type-safe method signatures'
    ]
  }
];
