import { Course } from './courses'

export interface Challenge {
  id: string
  title: string
  description: string
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert'
  language: 'html' | 'css' | 'javascript' | 'python' | 'typescript' | 'react' | 'nodejs' | 'ruby' | 'php' | 'java' | 'csharp' | 'go' | 'rust' | 'swift' | 'kotlin' | 'scala' | 'dart' | 'r' | 'sql' | 'bash' | 'elixir' | 'haskell' | 'lua' | 'perl' | 'julia' | 'powershell' | 'groovy' | 'clojure' | 'erlang' | 'fsharp' | 'ocaml' | 'matlab' | 'objectivec' | 'crystal'
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
  },
  // Python Challenges
  {
    id: 'py-ch-1',
    title: 'List Comprehension',
    description: 'Master Python list comprehensions',
    difficulty: 'Medium',
    language: 'python',
    category: 'Array',
    points: 80,
    timeLimit: 20,
    prompt: 'Create a list of squares of even numbers from 1 to 20',
    initialCode: `# Use list comprehension
squares = 

print(squares)`,
    solution: `squares = [x**2 for x in range(1, 21) if x % 2 == 0]
print(squares)`,
    testCases: [
      { input: null, expectedOutput: [4, 16, 36, 64, 100, 144, 196, 256, 324, 400], description: 'Squares of even numbers' }
    ],
    hints: ['Use list comprehension [x for x in ...]', 'Filter with if condition', 'Square with ** operator']
  },
  {
    id: 'py-ch-2',
    title: 'Dictionary Operations',
    description: 'Work with Python dictionaries',
    difficulty: 'Easy',
    language: 'python',
    category: 'Data Structure',
    points: 60,
    timeLimit: 15,
    prompt: 'Count frequency of each character in a string',
    initialCode: `def char_frequency(text):
    # Your code here
    pass

print(char_frequency("hello"))`,
    solution: `def char_frequency(text):
    freq = {}
    for char in text:
        freq[char] = freq.get(char, 0) + 1
    return freq

print(char_frequency("hello"))`,
    testCases: [
      { input: 'hello', expectedOutput: {'h': 1, 'e': 1, 'l': 2, 'o': 1}, description: 'Character frequency' }
    ],
    hints: ['Use dictionary', '.get() method with default', 'Loop through characters']
  },
  {
    id: 'kotlin-ch-1',
    title: 'Kotlin Collections',
    description: 'Filter and map Kotlin collections',
    difficulty: 'Medium',
    language: 'kotlin',
    category: 'Array',
    points: 90,
    timeLimit: 20,
    prompt: 'Filter numbers > 5, then double them',
    initialCode: `fun main() {
    val numbers = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    // Your code here
}`,
    solution: `fun main() {
    val numbers = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    val result = numbers.filter { it > 5 }.map { it * 2 }
    println(result)
}`,
    testCases: [
      { input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expectedOutput: [12, 14, 16, 18, 20], description: 'Filter and double' }
    ],
    hints: ['Use .filter{}', 'Use .map{}', 'Chain operations']
  },
  {
    id: 'sql-ch-1',
    title: 'SQL Join Query',
    description: 'Write a complex JOIN query',
    difficulty: 'Hard',
    language: 'sql',
    category: 'Data Structure',
    points: 120,
    timeLimit: 30,
    prompt: 'Get all users and their order count',
    initialCode: `-- Write your SQL query
SELECT 
FROM 
`,
    solution: `SELECT users.name, COUNT(orders.id) as order_count
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.id, users.name
ORDER BY order_count DESC;`,
    testCases: [
      { input: null, expectedOutput: 'JOIN', description: 'Uses JOIN' }
    ],
    hints: ['Use LEFT JOIN', 'GROUP BY user', 'COUNT for aggregation']
  },
  {
    id: 'dart-ch-1',
    title: 'Dart Async/Await',
    description: 'Handle asynchronous operations',
    difficulty: 'Medium',
    language: 'dart',
    category: 'Logic',
    points: 100,
    timeLimit: 25,
    prompt: 'Fetch data asynchronously and process it',
    initialCode: `Future<List<int>> fetchData() async {
  // Simulate API call
  await Future.delayed(Duration(seconds: 1));
  return [1, 2, 3, 4, 5];
}

void main() async {
  // Your code here
}`,
    solution: `Future<List<int>> fetchData() async {
  await Future.delayed(Duration(seconds: 1));
  return [1, 2, 3, 4, 5];
}

void main() async {
  final data = await fetchData();
  final sum = data.reduce((a, b) => a + b);
  print('Sum: $sum');
}`,
    testCases: [
      { input: null, expectedOutput: 15, description: 'Sum of fetched data' }
    ],
    hints: ['Use await', 'async keyword', '.reduce() for sum']
  },
  {
    id: 'r-ch-1',
    title: 'R Data Analysis',
    description: 'Analyze statistical data',
    difficulty: 'Medium',
    language: 'r',
    category: 'Math',
    points: 95,
    timeLimit: 25,
    prompt: 'Calculate mean, median, and standard deviation',
    initialCode: `# Data
data <- c(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)

# Your code here
`,
    solution: `data <- c(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)

mean_val <- mean(data)
median_val <- median(data)
sd_val <- sd(data)

print(paste("Mean:", mean_val))
print(paste("Median:", median_val))
print(paste("SD:", sd_val))`,
    testCases: [
      { input: [10, 20, 30, 40, 50], expectedOutput: 30, description: 'Calculate mean' }
    ],
    hints: ['mean() function', 'median() function', 'sd() for standard deviation']
  },
  {
    id: 'bash-ch-1',
    title: 'Bash File Processing',
    description: 'Process files with bash',
    difficulty: 'Medium',
    language: 'bash',
    category: 'String',
    points: 85,
    timeLimit: 20,
    prompt: 'Count lines, words, and characters in a file',
    initialCode: `#!/bin/bash
# Your script here
`,
    solution: `#!/bin/bash
file="$1"
lines=$(wc -l < "$file")
words=$(wc -w < "$file")
chars=$(wc -c < "$file")

echo "Lines: $lines"
echo "Words: $words"
echo "Characters: $chars"`,
    testCases: [
      { input: 'file.txt', expectedOutput: 'Lines:', description: 'Count statistics' }
    ],
    hints: ['wc command', '-l for lines', '-w for words']
  },
  {
    id: 'go-ch-1',
    title: 'Go Concurrency',
    description: 'Use goroutines and channels',
    difficulty: 'Hard',
    language: 'go',
    category: 'Algorithm',
    points: 130,
    timeLimit: 35,
    prompt: 'Calculate sum of array using concurrent goroutines',
    initialCode: `package main

import "fmt"

func main() {
    numbers := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
    // Your code here
}`,
    solution: `package main

import "fmt"

func sum(nums []int, ch chan int) {
    total := 0
    for _, v := range nums {
        total += v
    }
    ch <- total
}

func main() {
    numbers := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
    ch := make(chan int)
    mid := len(numbers) / 2
    
    go sum(numbers[:mid], ch)
    go sum(numbers[mid:], ch)
    
    x, y := <-ch, <-ch
    fmt.Println("Sum:", x+y)
}`,
    testCases: [
      { input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expectedOutput: 55, description: 'Concurrent sum' }
    ],
    hints: ['Create channel with make', 'Use go keyword', 'Receive from channel with <-']
  },
  {
    id: 'rust-ch-1',
    title: 'Rust Ownership',
    description: 'Work with Rust ownership system',
    difficulty: 'Hard',
    language: 'rust',
    category: 'Logic',
    points: 140,
    timeLimit: 40,
    prompt: 'Implement a function that takes ownership and returns string length',
    initialCode: `fn string_length(s: String) -> usize {
    // Your code here
}

fn main() {
    let text = String::from("Hello, Rust!");
    // Your code here
}`,
    solution: `fn string_length(s: String) -> usize {
    s.len()
}

fn main() {
    let text = String::from("Hello, Rust!");
    let length = string_length(text);
    println!("Length: {}", length);
}`,
    testCases: [
      { input: 'Hello, Rust!', expectedOutput: 12, description: 'String length' }
    ],
    hints: ['String::from creates owned string', '.len() method', 'Ownership moves']
  },
  {
    id: 'scala-ch-1',
    title: 'Scala Pattern Matching',
    description: 'Use pattern matching effectively',
    difficulty: 'Medium',
    language: 'scala',
    category: 'Logic',
    points: 100,
    timeLimit: 25,
    prompt: 'Classify numbers as positive, negative, or zero',
    initialCode: `object Main {
  def classify(n: Int): String = {
    // Your code here
  }
  
  def main(args: Array[String]): Unit = {
    println(classify(5))
  }
}`,
    solution: `object Main {
  def classify(n: Int): String = n match {
    case 0 => "zero"
    case x if x > 0 => "positive"
    case _ => "negative"
  }
  
  def main(args: Array[String]): Unit = {
    println(classify(5))
    println(classify(-3))
    println(classify(0))
  }
}`,
    testCases: [
      { input: 5, expectedOutput: 'positive', description: 'Positive number' }
    ],
    hints: ['Use match expression', 'case with guards', '_ for default']
  },
  {
    id: 'julia-ch-1',
    title: 'Julia Matrix Operations',
    description: 'Perform matrix calculations',
    difficulty: 'Medium',
    language: 'julia',
    category: 'Math',
    points: 95,
    timeLimit: 25,
    prompt: 'Calculate matrix multiplication and transpose',
    initialCode: `# Define matrices
A = [1 2; 3 4]
B = [5 6; 7 8]

# Your code here
`,
    solution: `A = [1 2; 3 4]
B = [5 6; 7 8]

C = A * B
println("Product:")
println(C)

D = transpose(A)
println("Transpose:")
println(D)`,
    testCases: [
      { input: [[1, 2], [3, 4]], expectedOutput: [[19, 22], [43, 50]], description: 'Matrix multiplication' }
    ],
    hints: ['* for matrix multiplication', 'transpose() function', 'println() for output']
  },
  {
    id: 'powershell-ch-1',
    title: 'PowerShell Pipeline',
    description: 'Use PowerShell pipelines effectively',
    difficulty: 'Medium',
    language: 'powershell',
    category: 'Logic',
    points: 90,
    timeLimit: 20,
    prompt: 'Get top 5 processes by CPU usage',
    initialCode: `# Your PowerShell command
`,
    solution: `Get-Process | Sort-Object CPU -Descending | Select-Object -First 5 Name, CPU | Format-Table`,
    testCases: [
      { input: null, expectedOutput: 'Get-Process', description: 'Uses pipeline' }
    ],
    hints: ['Get-Process cmdlet', 'Sort-Object', 'Select-Object -First']
  },
  {
    id: 'elixir-ch-1',
    title: 'Elixir Recursion',
    description: 'Implement recursive functions',
    difficulty: 'Hard',
    language: 'elixir',
    category: 'Algorithm',
    points: 120,
    timeLimit: 30,
    prompt: 'Calculate Fibonacci sequence recursively',
    initialCode: `defmodule Fibonacci do
  def fib(n) do
    # Your code here
  end
end

IO.puts(Fibonacci.fib(10))`,
    solution: `defmodule Fibonacci do
  def fib(0), do: 0
  def fib(1), do: 1
  def fib(n) when n > 1 do
    fib(n - 1) + fib(n - 2)
  end
end

IO.puts(Fibonacci.fib(10))`,
    testCases: [
      { input: 10, expectedOutput: 55, description: '10th Fibonacci number' }
    ],
    hints: ['Pattern matching in function heads', 'Guards with when', 'Recursive calls']
  },
  {
    id: 'haskell-ch-1',
    title: 'Haskell Higher-Order Functions',
    description: 'Use map, filter, and fold',
    difficulty: 'Hard',
    language: 'haskell',
    category: 'Algorithm',
    points: 130,
    timeLimit: 35,
    prompt: 'Filter odd numbers, square them, then sum',
    initialCode: `-- Your Haskell code
numbers = [1..10]

main = do
  -- Your code here
`,
    solution: `numbers = [1..10]

result = sum $ map (^2) $ filter odd numbers

main = do
  print result`,
    testCases: [
      { input: [1, 2, 3, 4, 5], expectedOutput: 35, description: 'Sum of squared odds' }
    ],
    hints: ['filter with predicate', 'map for transformation', 'sum for total']
  },
  {
    id: 'lua-ch-1',
    title: 'Lua Table Manipulation',
    description: 'Work with Lua tables',
    difficulty: 'Easy',
    language: 'lua',
    category: 'Data Structure',
    points: 70,
    timeLimit: 15,
    prompt: 'Create and iterate over a table',
    initialCode: `-- Your Lua code
`,
    solution: `local fruits = {"apple", "banana", "orange", "grape"}

for i, fruit in ipairs(fruits) do
  print(i .. ": " .. fruit)
end

-- Table as map
local scores = {
  Alice = 95,
  Bob = 87,
  Charlie = 92
}

for name, score in pairs(scores) do
  print(name .. " scored " .. score)
end`,
    testCases: [
      { input: ['apple', 'banana'], expectedOutput: '1: apple', description: 'Table iteration' }
    ],
    hints: ['ipairs for arrays', 'pairs for maps', '.. for concatenation']
  },
  {
    id: 'perl-ch-1',
    title: 'Perl Regular Expressions',
    description: 'Master Perl regex',
    difficulty: 'Medium',
    language: 'perl',
    category: 'String',
    points: 100,
    timeLimit: 25,
    prompt: 'Extract email addresses from text',
    initialCode: `#!/usr/bin/perl
use strict;
use warnings;

my $text = "Contact us at info@example.com or support@test.org";

# Your code here
`,
    solution: `#!/usr/bin/perl
use strict;
use warnings;

my $text = "Contact us at info@example.com or support@test.org";

while ($text =~ /([\\w.-]+@[\\w.-]+\\.\\w+)/g) {
  print "Found: $1\\n";
}`,
    testCases: [
      { input: 'test@example.com', expectedOutput: 'test@example.com', description: 'Extract email' }
    ],
    hints: ['=~ for regex match', '/pattern/g for global', '[\\w.-]+ for word characters']
  },
  {
    id: 'clojure-ch-1',
    title: 'Clojure Map/Reduce',
    description: 'Functional data transformation',
    difficulty: 'Medium',
    language: 'clojure',
    category: 'Algorithm',
    points: 105,
    timeLimit: 25,
    prompt: 'Transform and aggregate data functionally',
    initialCode: `;; Your Clojure code
(def numbers [1 2 3 4 5])
`,
    solution: `(def numbers [1 2 3 4 5])

(def doubled (map #(* 2 %) numbers))
(def sum (reduce + doubled))

(println "Doubled:" doubled)
(println "Sum:" sum)`,
    testCases: [
      { input: [1, 2, 3, 4, 5], expectedOutput: 30, description: 'Double and sum' }
    ],
    hints: ['map for transformation', 'reduce for aggregation', '#() for anonymous functions']
  },
  {
    id: 'fsharp-ch-1',
    title: 'F# Pipeline Operator',
    description: 'Use F# pipeline for clean code',
    difficulty: 'Medium',
    language: 'fsharp',
    category: 'Algorithm',
    points: 95,
    timeLimit: 20,
    prompt: 'Chain operations using pipeline operator',
    initialCode: `// Your F# code
let numbers = [1; 2; 3; 4; 5; 6; 7; 8; 9; 10]
`,
    solution: `let numbers = [1; 2; 3; 4; 5; 6; 7; 8; 9; 10]

let result =
  numbers
  |> List.filter (fun x -> x % 2 = 0)
  |> List.map (fun x -> x * x)
  |> List.sum

printfn "Result: %d" result`,
    testCases: [
      { input: [1, 2, 3, 4, 5], expectedOutput: 220, description: 'Filter, square, sum evens' }
    ],
    hints: ['|> pipeline operator', 'List.filter', 'List.map and List.sum']
  },
  {
    id: 'matlab-ch-1',
    title: 'MATLAB Vector Operations',
    description: 'Vectorized computations in MATLAB',
    difficulty: 'Medium',
    language: 'matlab',
    category: 'Math',
    points: 90,
    timeLimit: 20,
    prompt: 'Perform element-wise operations on vectors',
    initialCode: `% Your MATLAB code
x = [1, 2, 3, 4, 5];
`,
    solution: `x = [1, 2, 3, 4, 5];
y = [2, 4, 6, 8, 10];

% Element-wise operations
sum_vec = x + y;
product_vec = x .* y;
squared = x.^2;

fprintf('Sum: ');
disp(sum_vec);
fprintf('Product: ');
disp(product_vec);
fprintf('Squared: ');
disp(squared);`,
    testCases: [
      { input: [[1, 2, 3], [2, 4, 6]], expectedOutput: [3, 6, 9], description: 'Vector addition' }
    ],
    hints: ['.* for element-wise multiplication', '.^ for element-wise power', 'disp() for output']
  },
  {
    id: 'crystal-ch-1',
    title: 'Crystal Type System',
    description: 'Work with Crystal\'s static types',
    difficulty: 'Medium',
    language: 'crystal',
    category: 'Logic',
    points: 95,
    timeLimit: 20,
    prompt: 'Create a generic function with type constraints',
    initialCode: `# Your Crystal code
`,
    solution: `def sum(values : Array(T)) : T forall T
  total = values[0]
  values[1..].each do |v|
    total += v
  end
  total
end

puts sum([1, 2, 3, 4, 5])
puts sum([1.5, 2.5, 3.5])`,
    testCases: [
      { input: [1, 2, 3, 4, 5], expectedOutput: 15, description: 'Generic sum' }
    ],
    hints: ['forall T for generic types', 'Type annotations with :', 'Array(T) for generic array']
  },
  {
    id: 'groovy-ch-1',
    title: 'Groovy Closures',
    description: 'Master Groovy closures',
    difficulty: 'Medium',
    language: 'groovy',
    category: 'Algorithm',
    points: 85,
    timeLimit: 20,
    prompt: 'Use closures for data transformation',
    initialCode: `// Your Groovy code
def numbers = [1, 2, 3, 4, 5]
`,
    solution: `def numbers = [1, 2, 3, 4, 5]

def doubled = numbers.collect { it * 2 }
def evens = numbers.findAll { it % 2 == 0 }
def sum = numbers.inject(0) { acc, val -> acc + val }

println "Doubled: $doubled"
println "Evens: $evens"
println "Sum: $sum"`,
    testCases: [
      { input: [1, 2, 3, 4, 5], expectedOutput: [2, 4, 6, 8, 10], description: 'Double numbers' }
    ],
    hints: ['.collect for map', '.findAll for filter', '.inject for reduce']
  }
]
