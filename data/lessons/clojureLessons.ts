import { Lesson } from '../courses'

export const clojureLessons: Lesson[] = [
  {
    id: 'clojure-1',
    title: 'Introduction to Clojure',
    description: 'Learn Clojure - a modern Lisp for the JVM',
    content: `# Introduction to Clojure

Clojure is a dynamic, functional programming language that runs on the JVM, designed for concurrency.

## Key Features:
- Lisp dialect
- Functional programming
- Immutable data structures
- Runs on JVM
- Excellent concurrency support

## Hello World:
\`\`\`clojure
(println "Hello, Clojure!")
\`\`\`

## Values and Data Structures:
\`\`\`clojure
(def name "Clojure")
(def numbers [1 2 3 4 5])
(def person {:name "Alice" :age 30})
\`\`\`

## Functions:
\`\`\`clojure
(defn square [x]
  (* x x))
\`\`\``,
    language: 'clojure',
    difficulty: 'Advanced',
    estimatedTime: 40,
    initialCode: `;; Your Clojure code
(println "Hello, Clojure!")
`,
    solution: `;; Values
(def greeting "Hello, Clojure!")
(println greeting)

;; Vectors
(def numbers [1 2 3 4 5])
(println "Sum:" (reduce + numbers))

;; Maps
(def person {:name "Alice" :age 30 :city "Boston"})
(println "Name:" (:name person))

;; Functions
(defn factorial [n]
  (if (<= n 1)
    1
    (* n (factorial (dec n)))))

(println "Factorial:" (factorial 5))`,
    hints: ['(function args) syntax', 'def for values', 'defn for functions', 'Keywords start with :'],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets minimum length',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write more code to match the lesson requirements'
      }
    ]
  }
]
