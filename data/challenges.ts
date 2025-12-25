import { Course } from './courses'

export interface Challenge {
  id: string
  title: string
  description: string
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert'
  language: 'html' | 'css' | 'javascript' | 'python' | 'typescript' | 'react' | 'nodejs' | 'ruby' | 'php' | 'java' | 'csharp' | 'go' | 'rust' | 'swift'
  category: 'Algorithm' | 'Data Structure' | 'Web' | 'Logic' | 'Math' | 'String' | 'Array'
  points: number
  timeLimit: number // in minutes
  prompt: string
  initialCode: string
  expectedOutput?: string
  testCases: ChallengeTestCase[]
  hints: string[]
  solution?: string
}

export interface ChallengeTestCase {
  input: any
  expectedOutput: any
  description: string
}

export const challenges: Challenge[] = [
  // JavaScript Challenges
  {
    id: 'js-ch-1',
    title: 'FizzBuzz',
    description: 'Classic programming challenge - print numbers with Fizz, Buzz, FizzBuzz',
    difficulty: 'Easy',
    language: 'javascript',
    category: 'Logic',
    points: 50,
    timeLimit: 15,
    prompt: `Write a function that prints numbers from 1 to n:
- For multiples of 3, print "Fizz"
- For multiples of 5, print "Buzz"
- For multiples of both 3 and 5, print "FizzBuzz"
- Otherwise, print the number`,
    initialCode: `function fizzBuzz(n) {
  // Your code here
}

// Test
fizzBuzz(15);`,
    solution: `function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}`,
    testCases: [
      { input: 15, expectedOutput: 'FizzBuzz', description: 'FizzBuzz for 15' },
      { input: 3, expectedOutput: 'Fizz', description: 'Fizz for 3' },
      { input: 5, expectedOutput: 'Buzz', description: 'Buzz for 5' }
    ],
    hints: ['Use modulo operator %', 'Check for 15 first', 'Loop from 1 to n']
  },
  {
    id: 'js-ch-2',
    title: 'Reverse String',
    description: 'Reverse a string without using built-in reverse method',
    difficulty: 'Easy',
    language: 'javascript',
    category: 'String',
    points: 40,
    timeLimit: 10,
    prompt: 'Write a function that reverses a string without using .reverse()',
    initialCode: `function reverseString(str) {
  // Your code here
}

console.log(reverseString("hello"));`,
    solution: `function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}`,
    testCases: [
      { input: 'hello', expectedOutput: 'olleh', description: 'Reverse "hello"' },
      { input: 'world', expectedOutput: 'dlrow', description: 'Reverse "world"' }
    ],
    hints: ['Loop backwards', 'Build new string', 'Start from str.length - 1']
  },
  {
    id: 'js-ch-3',
    title: 'Palindrome Checker',
    description: 'Check if a string is a palindrome',
    difficulty: 'Easy',
    language: 'javascript',
    category: 'String',
    points: 60,
    timeLimit: 15,
    prompt: 'Check if a string reads the same forwards and backwards',
    initialCode: `function isPalindrome(str) {
  // Your code here
}

console.log(isPalindrome("racecar"));`,
    solution: `function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}`,
    testCases: [
      { input: 'racecar', expectedOutput: true, description: 'racecar is palindrome' },
      { input: 'hello', expectedOutput: false, description: 'hello is not palindrome' }
    ],
    hints: ['Clean the string first', 'Compare with reversed', 'Ignore case and spaces']
  },
  
  // Python Challenges
  {
    id: 'py-ch-1',
    title: 'Sum of List',
    description: 'Calculate the sum of all numbers in a list',
    difficulty: 'Easy',
    language: 'python',
    category: 'Array',
    points: 40,
    timeLimit: 10,
    prompt: 'Write a function to sum all numbers in a list without using sum()',
    initialCode: `def sum_list(numbers):
    # Your code here
    pass

print(sum_list([1, 2, 3, 4, 5]))`,
    solution: `def sum_list(numbers):
    total = 0
    for num in numbers:
        total += num
    return total`,
    testCases: [
      { input: [1, 2, 3, 4, 5], expectedOutput: 15, description: 'Sum 1-5' },
      { input: [10, 20, 30], expectedOutput: 60, description: 'Sum 10, 20, 30' }
    ],
    hints: ['Initialize total to 0', 'Loop through numbers', 'Add each to total']
  },
  {
    id: 'py-ch-2',
    title: 'Find Max Number',
    description: 'Find the maximum number in a list',
    difficulty: 'Easy',
    language: 'python',
    category: 'Array',
    points: 50,
    timeLimit: 15,
    prompt: 'Find the largest number in a list without using max()',
    initialCode: `def find_max(numbers):
    # Your code here
    pass

print(find_max([3, 7, 2, 9, 1]))`,
    solution: `def find_max(numbers):
    if not numbers:
        return None
    max_num = numbers[0]
    for num in numbers[1:]:
        if num > max_num:
            max_num = num
    return max_num`,
    testCases: [
      { input: [3, 7, 2, 9, 1], expectedOutput: 9, description: 'Max is 9' },
      { input: [100, 50, 75], expectedOutput: 100, description: 'Max is 100' }
    ],
    hints: ['Start with first element', 'Compare each number', 'Update max when found larger']
  },
  
  // TypeScript Challenges
  {
    id: 'ts-ch-1',
    title: 'Type-Safe Calculator',
    description: 'Create a strongly-typed calculator function',
    difficulty: 'Medium',
    language: 'typescript',
    category: 'Logic',
    points: 80,
    timeLimit: 20,
    prompt: 'Create a calculator with proper TypeScript types',
    initialCode: `type Operation = // Define type

function calculate(a: number, b: number, op: Operation): number {
  // Your code here
}`,
    solution: `type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

function calculate(a: number, b: number, op: Operation): number {
  switch (op) {
    case 'add': return a + b;
    case 'subtract': return a - b;
    case 'multiply': return a * b;
    case 'divide': return a / b;
  }
}`,
    testCases: [
      { input: [10, 5, 'add'], expectedOutput: 15, description: '10 + 5 = 15' },
      { input: [10, 2, 'multiply'], expectedOutput: 20, description: '10 * 2 = 20' }
    ],
    hints: ['Use union type for operations', 'Switch statement', 'Return number type']
  },
  
  // More Advanced Challenges
  {
    id: 'js-ch-4',
    title: 'Two Sum',
    description: 'Find two numbers that add up to target',
    difficulty: 'Medium',
    language: 'javascript',
    category: 'Algorithm',
    points: 100,
    timeLimit: 25,
    prompt: 'Find indices of two numbers that add up to target',
    initialCode: `function twoSum(nums, target) {
  // Your code here
}

console.log(twoSum([2, 7, 11, 15], 9));`,
    solution: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
    testCases: [
      { input: [[2, 7, 11, 15], 9], expectedOutput: [0, 1], description: '2 + 7 = 9' }
    ],
    hints: ['Use hash map', 'Store complements', 'O(n) time complexity']
  },
  {
    id: 'py-ch-3',
    title: 'Fibonacci Sequence',
    description: 'Generate Fibonacci numbers',
    difficulty: 'Medium',
    language: 'python',
    category: 'Math',
    points: 90,
    timeLimit: 20,
    prompt: 'Generate first n Fibonacci numbers',
    initialCode: `def fibonacci(n):
    # Your code here
    pass

print(fibonacci(10))`,
    solution: `def fibonacci(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib`,
    testCases: [
      { input: 10, expectedOutput: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34], description: 'First 10 Fibonacci' }
    ],
    hints: ['Start with [0, 1]', 'Each number is sum of previous two', 'Use loop or recursion']
  },
  {
    id: 'js-ch-5',
    title: 'Binary Search',
    description: 'Implement binary search algorithm',
    difficulty: 'Hard',
    language: 'javascript',
    category: 'Algorithm',
    points: 150,
    timeLimit: 30,
    prompt: 'Find target in sorted array using binary search',
    initialCode: `function binarySearch(arr, target) {
  // Your code here
}

console.log(binarySearch([1, 3, 5, 7, 9, 11], 7));`,
    solution: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,
    testCases: [
      { input: [[1, 3, 5, 7, 9, 11], 7], expectedOutput: 3, description: 'Find 7 at index 3' }
    ],
    hints: ['Divide array in half', 'Compare middle element', 'O(log n) complexity']
  }
]
