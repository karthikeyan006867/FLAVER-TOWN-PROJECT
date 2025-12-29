import { Lesson } from '../courses'

export const ocamlLessons: Lesson[] = [
  {
    id: 'ocaml-1',
    title: 'Introduction to OCaml',
    description: 'Learn OCaml - a powerful functional language',
    content: `# Introduction to OCaml

OCaml is a general-purpose, multi-paradigm programming language which extends the Caml dialect of ML with object-oriented features.

## Key Features:
- Functional and imperative
- Strong static typing
- Type inference
- Pattern matching
- Fast native code compilation

## Hello World:
\`\`\`ocaml
print_endline "Hello, OCaml!";;
\`\`\`

## Variables:
\`\`\`ocaml
let name = "OCaml";;
let age = 27;;
let pi = 3.14159;;
\`\`\`

## Functions:
\`\`\`ocaml
let square x = x * x;;
let add x y = x + y;;
\`\`\``,
    language: 'ocaml',
    difficulty: 'Advanced',
    estimatedTime: 40,
    initialCode: `(* Your OCaml code *)
print_endline "Hello, OCaml!";;
`,
    solution: `(* Values *)
let greeting = "Hello, OCaml!";;
print_endline greeting;;

(* Lists *)
let numbers = [1; 2; 3; 4; 5];;

(* Functions *)
let rec factorial n =
  if n <= 1 then 1
  else n * factorial (n - 1);;

let square x = x * x;;

(* Output *)
Printf.printf "Factorial: %d\\n" (factorial 5);;
Printf.printf "Square: %d\\n" (square 7);;`,
    hints: ['let for bindings', ';;  terminates top-level statements', 'rec for recursive functions'],
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
