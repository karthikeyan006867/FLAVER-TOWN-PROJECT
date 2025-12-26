import { Lesson } from '../courses'

export const powershellLessons: Lesson[] = [
  {
    id: 'powershell-1',
    title: 'Introduction to PowerShell',
    description: 'Learn PowerShell for Windows automation',
    content: `# Introduction to PowerShell

PowerShell is a cross-platform task automation solution consisting of a command-line shell and scripting language.

## Key Features:
- Object-oriented pipeline
- .NET integration
- Extensive cmdlets
- Remote management
- Cross-platform (PowerShell Core)

## Hello World:
\`\`\`powershell
Write-Host "Hello, PowerShell!"
\`\`\`

## Variables:
\`\`\`powershell
$name = "PowerShell"
$version = 7
$isAwesome = $true
\`\`\`

## Arrays and Hash Tables:
\`\`\`powershell
$numbers = @(1, 2, 3, 4, 5)
$person = @{
  Name = "Alice"
  Age = 30
}
\`\`\``,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 35,
    initialCode: `# Your PowerShell code
Write-Host "Hello, PowerShell!"
`,
    solution: `# Variables
$greeting = "Hello, PowerShell!"
Write-Host $greeting

# Arrays
$numbers = @(1, 2, 3, 4, 5)
$sum = ($numbers | Measure-Object -Sum).Sum
Write-Host "Sum: $sum"

# Hash table
$person = @{
  Name = "Alice"
  Age = 30
  City = "Seattle"
}
Write-Host "Name: $($person.Name)"

# Pipeline
Get-Process | Select-Object -First 5 Name, CPU`,
    hints: ['$ for variables', '@() for arrays', '@{} for hash tables', '| for pipeline']
  },
  {
    id: 'powershell-2',
    title: 'PowerShell Functions and Cmdlets',
    description: 'Creating functions and using cmdlets',
    content: `# PowerShell Functions

## Function Syntax:
\`\`\`powershell
function FunctionName {
  param($Parameter1, $Parameter2)
  # body
  return $value
}
\`\`\`

## Advanced Function:
\`\`\`powershell
function Get-Square {
  param(
    [int]$Number
  )
  return $Number * $Number
}
\`\`\`

## Common Cmdlets:
- Get-ChildItem (ls, dir)
- Set-Location (cd)
- Copy-Item (cp)
- Remove-Item (rm)
- Select-Object
- Where-Object
\`\`\``,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 40,
    initialCode: `# Define functions
`,
    solution: `function Get-Factorial {
  param([int]$n)
  
  if ($n -le 1) {
    return 1
  }
  return $n * (Get-Factorial -n ($n - 1))
}

function Get-FileCount {
  param([string]$Path = ".")
  
  $files = Get-ChildItem -Path $Path -File
  return $files.Count
}

Write-Host "Factorial of 5: $(Get-Factorial -n 5)"`,
    hints: ['param() for parameters', 'Verb-Noun naming convention', 'Return keyword optional']
  }
]
