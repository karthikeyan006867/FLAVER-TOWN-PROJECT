import { Lesson } from '../courses'

export const bashLessons: Lesson[] = [
  {
    id: 'bash-1',
    title: 'Introduction to Bash Scripting',
    description: 'Learn shell scripting with Bash',
    content: `# Bash Scripting

Bash is a Unix shell and command language used for automation and system administration.

## Key Features:
- Command-line automation
- System administration
- File manipulation
- Process management

## Your First Script:
\`\`\`bash
#!/bin/bash
echo "Hello, Bash!"
\`\`\`

## Variables:
\`\`\`bash
name="Bash"
echo "Learning $name"
echo "Learning \${name} scripting"
\`\`\`

## User Input:
\`\`\`bash
read -p "Enter your name: " username
echo "Hello, $username!"
\`\`\``,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 30,
    initialCode: `#!/bin/bash
# Your bash script here
`,
    solution: `#!/bin/bash
echo "Bash Script Demo"

name="Student"
echo "Welcome, $name!"

# Variables
course="Shell Scripting"
duration=4
echo "Course: $course, Duration: $duration weeks"

# User input
read -p "Enter your favorite language: " lang
echo "Great! $lang is awesome!"`,
    hints: ['Use echo for output', 'Variables: name="value"', 'Access with $variable']
  },
  {
    id: 'bash-2',
    title: 'Bash Conditionals and Loops',
    description: 'Control flow in Bash',
    content: `# Bash Control Flow

## If Statements:
\`\`\`bash
if [ condition ]; then
  # code
elif [ condition ]; then
  # code
else
  # code
fi
\`\`\`

## For Loops:
\`\`\`bash
for i in 1 2 3 4 5; do
  echo $i
done

for file in *.txt; do
  echo $file
done
\`\`\`

## While Loops:
\`\`\`bash
count=1
while [ $count -le 5 ]; do
  echo $count
  ((count++))
done
\`\`\``,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 40,
    initialCode: `#!/bin/bash
# Control flow practice
`,
    solution: `#!/bin/bash

# If statement
age=25
if [ $age -ge 18 ]; then
  echo "Adult"
else
  echo "Minor"
fi

# For loop
for i in {1..5}; do
  echo "Number: $i"
done

# While loop
counter=1
while [ $counter -le 3 ]; do
  echo "Iteration $counter"
  ((counter++))
done`,
    hints: ['[ ] for conditions', '-eq, -lt, -gt for comparisons', 'do...done for loops']
  }
]
