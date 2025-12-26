import { Lesson } from '../courses'

export const dartLessons: Lesson[] = [
  {
    id: 'dart-1',
    title: 'Introduction to Dart',
    description: 'Learn Dart basics - the language behind Flutter',
    content: `# Introduction to Dart

Dart is a client-optimized language for developing fast apps on any platform. It's the language used by Flutter for mobile app development.

## Key Features:
- Optimized for UI development
- Fast on all platforms
- Productive development (hot reload)
- Sound null safety
- Rich standard library

## Hello World:
\`\`\`dart
void main() {
  print('Hello, Dart!');
}
\`\`\`

## Variables:
\`\`\`dart
var name = 'Dart';  // Type inference
int age = 25;       // Explicit type
final pi = 3.14;    // Runtime constant
const api = 'v1';   // Compile-time constant
\`\`\``,
    language: 'dart',
    difficulty: 'Beginner',
    estimatedTime: 30,
    initialCode: `void main() {
  // Write your Dart program
  
}`,
    solution: `void main() {
  var greeting = 'Hello, Dart!';
  print(greeting);
  
  final numbers = [1, 2, 3, 4, 5];
  print('Sum: $\{numbers.reduce((a, b) => a + b)}');
}`,
    hints: ['Use print() for output', 'var for type inference', 'String interpolation with ${}']
  },
  {
    id: 'dart-2',
    title: 'Dart Functions',
    description: 'Understanding functions in Dart',
    content: `# Dart Functions

## Function Syntax:
\`\`\`dart
ReturnType functionName(parameters) {
  // body
}
\`\`\`

## Examples:
\`\`\`dart
// Standard function
int add(int a, int b) {
  return a + b;
}

// Arrow function
int multiply(int a, int b) => a * b;

// Optional parameters
String greet([String name = 'Guest']) {
  return 'Hello, $name!';
}

// Named parameters
void printInfo({required String name, int age = 0}) {
  print('$name is $age years old');
}
\`\`\``,
    language: 'dart',
    difficulty: 'Beginner',
    estimatedTime: 35,
    initialCode: `// Create functions here

void main() {
  
}`,
    solution: `int square(int n) => n * n;

List<int> generateRange(int start, int end) {
  return List.generate(end - start + 1, (i) => start + i);
}

void main() {
  print(square(5));
  print(generateRange(1, 5));
}`,
    hints: ['=> for single expression functions', 'Use List.generate for ranges', 'Type parameters in <>']
  }
]
