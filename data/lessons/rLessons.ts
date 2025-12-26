import { Lesson } from '../courses'

export const rLessons: Lesson[] = [
  {
    id: 'r-1',
    title: 'Introduction to R',
    description: 'Get started with R for data analysis and statistics',
    content: `# Introduction to R

R is a programming language designed for statistical computing and graphics. It's widely used in data science, statistical analysis, and machine learning.

## Key Features:
- Powerful statistical analysis
- Excellent data visualization (ggplot2)
- Rich ecosystem of packages (CRAN)
- Vector-based operations
- Interactive development

## Basic R:
\`\`\`r
# Print output
print("Hello, R!")
cat("Hello, R!\\n")

# Variables
name <- "R Programming"
age <- 30
is_fun <- TRUE
\`\`\`

## Vectors:
\`\`\`r
numbers <- c(1, 2, 3, 4, 5)
names <- c("Alice", "Bob", "Charlie")
\`\`\``,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 35,
    initialCode: `# Your R code here
print("Hello, R!")
`,
    solution: `# Variables and vectors
name <- "R Programming"
print(name)

numbers <- c(1, 2, 3, 4, 5)
print(paste("Sum:", sum(numbers)))
print(paste("Mean:", mean(numbers)))

# Data frame
df <- data.frame(
  name = c("Alice", "Bob", "Charlie"),
  age = c(25, 30, 35)
)
print(df)`,
    hints: ['Use <- for assignment', 'c() creates vectors', 'paste() concatenates strings']
  },
  {
    id: 'r-2',
    title: 'R Functions and Data Structures',
    description: 'Learn R functions and data manipulation',
    content: `# R Functions

## Function Syntax:
\`\`\`r
functionName <- function(parameters) {
  # body
  return(value)
}
\`\`\`

## Examples:
\`\`\`r
# Simple function
square <- function(x) {
  return(x^2)
}

# Multiple parameters
calculate_bmi <- function(weight, height) {
  bmi <- weight / (height^2)
  return(bmi)
}

# Default parameters
greet <- function(name = "Guest") {
  return(paste("Hello,", name))
}
\`\`\`

## Data Structures:
- Vectors: c(1, 2, 3)
- Lists: list(a=1, b=2)
- Matrices: matrix(1:9, nrow=3)
- Data Frames: data.frame(col1, col2)`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 40,
    initialCode: `# Create functions

`,
    solution: `# Factorial function
factorial <- function(n) {
  if (n <= 1) return(1)
  return(n * factorial(n-1))
}

# Statistics function
calculate_stats <- function(numbers) {
  stats <- list(
    mean = mean(numbers),
    median = median(numbers),
    sd = sd(numbers)
  )
  return(stats)
}

# Test
print(factorial(5))
data <- c(10, 20, 30, 40, 50)
print(calculate_stats(data))`,
    hints: ['function() creates functions', 'Use list() for multiple returns', 'Built-in stats functions: mean, median, sd']
  }
]
