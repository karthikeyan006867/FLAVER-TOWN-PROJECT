import { Lesson } from '../courses'

export const luaLessons: Lesson[] = [
  {
    id: 'lua-1',
    title: 'Introduction to Lua',
    description: 'Learn Lua - a lightweight scripting language',
    content: `# Introduction to Lua

Lua is a lightweight, high-level scripting language designed for embedded use in applications.

## Key Features:
- Lightweight and fast
- Embeddable
- Simple syntax
- Dynamic typing
- Powerful table data structure

## Hello World:
\`\`\`lua
print("Hello, Lua!")
\`\`\`

## Variables:
\`\`\`lua
local name = "Lua"
local age = 30
local is_fun = true
\`\`\`

## Tables (Lua's main data structure):
\`\`\`lua
person = {
  name = "Alice",
  age = 25
}
print(person.name)
\`\`\``,
    language: 'lua',
    difficulty: 'Beginner',
    estimatedTime: 30,
    initialCode: `-- Your Lua code
print("Hello, Lua!")
`,
    solution: `-- Variables
local greeting = "Hello, Lua!"
print(greeting)

-- Tables
local person = {
  name = "Alice",
  age = 25,
  city = "NYC"
}

print(person.name .. " is " .. person.age .. " years old")

-- Arrays (tables with numeric indices)
local numbers = {10, 20, 30, 40, 50}
for i = 1, #numbers do
  print(numbers[i])
end`,
    hints: ['print() for output', 'local for local variables', '.. for string concatenation']
  },
  {
    id: 'lua-2',
    title: 'Lua Functions',
    description: 'Understanding functions in Lua',
    content: `# Lua Functions

## Function Syntax:
\`\`\`lua
function functionName(parameters)
  -- body
  return value
end
\`\`\`

## Examples:
\`\`\`lua
function add(a, b)
  return a + b
end

-- Anonymous functions
local multiply = function(a, b)
  return a * b
end

-- Multiple return values
function getMinMax(a, b)
  if a < b then
    return a, b
  else
    return b, a
  end
end
\`\`\``,
    language: 'lua',
    difficulty: 'Beginner',
    estimatedTime: 35,
    initialCode: `-- Define your functions
`,
    solution: `function factorial(n)
  if n <= 1 then
    return 1
  else
    return n * factorial(n - 1)
  end
end

function sum(numbers)
  local total = 0
  for i = 1, #numbers do
    total = total + numbers[i]
  end
  return total
end

print(factorial(5))
print(sum({1, 2, 3, 4, 5}))`,
    hints: ['function keyword', 'return for results', 'if...then...else...end for conditions']
  }
]
