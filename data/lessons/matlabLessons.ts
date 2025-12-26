import { Lesson } from '../courses'

export const matlabLessons: Lesson[] = [
  {
    id: 'matlab-1',
    title: 'Introduction to MATLAB',
    description: 'Learn MATLAB for numerical computing',
    content: `# Introduction to MATLAB

MATLAB is a programming platform designed specifically for engineers and scientists to analyze and design systems.

## Key Features:
- Matrix-based language
- Excellent for numerical analysis
- Built-in plotting and visualization
- Extensive toolboxes
- Simulink integration

## Hello World:
\`\`\`matlab
disp('Hello, MATLAB!')
\`\`\`

## Variables and Matrices:
\`\`\`matlab
name = 'MATLAB';
age = 40;
matrix = [1 2 3; 4 5 6; 7 8 9];
vector = [1, 2, 3, 4, 5];
\`\`\`

## Basic Operations:
\`\`\`matlab
A = [1 2; 3 4];
B = [5 6; 7 8];
C = A * B;  % Matrix multiplication
\`\`\``,
    language: 'matlab',
    difficulty: 'Intermediate',
    estimatedTime: 35,
    initialCode: `% Your MATLAB code
disp('Hello, MATLAB!')
`,
    solution: `% Variables
name = 'MATLAB';
disp(['Hello from ', name])

% Vectors
numbers = [1, 2, 3, 4, 5];
fprintf('Sum: %d\\n', sum(numbers))
fprintf('Mean: %.2f\\n', mean(numbers))

% Matrix
matrix = [1 2 3; 4 5 6; 7 8 9];
disp('Matrix:')
disp(matrix)
fprintf('Determinant: %.2f\\n', det(matrix))`,
    hints: ['disp() for output', 'fprintf() for formatted output', 'Vectors/matrices use []']
  },
  {
    id: 'matlab-2',
    title: 'MATLAB Functions',
    description: 'Creating functions in MATLAB',
    content: `# MATLAB Functions

## Function File (save as filename.m):
\`\`\`matlab
function result = functionName(parameters)
  % Function body
  result = value;
end
\`\`\`

## Examples:
\`\`\`matlab
function y = square(x)
  y = x .^ 2;
end

function [sum, product] = calculate(a, b)
  sum = a + b;
  product = a * b;
end
\`\`\`

## Anonymous Functions:
\`\`\`matlab
square = @(x) x.^2;
add = @(x, y) x + y;
\`\`\``,
    language: 'matlab',
    difficulty: 'Intermediate',
    estimatedTime: 40,
    initialCode: `% Define functions
`,
    solution: `% Function definitions
function result = factorial(n)
  if n <= 1
    result = 1;
  else
    result = n * factorial(n - 1);
  end
end

% Anonymous functions
square = @(x) x.^2;
cube = @(x) x.^3;

% Test
fprintf('Factorial: %d\\n', factorial(5))
fprintf('Square: %d\\n', square(7))

% Vector operations
v = [1, 2, 3, 4, 5];
v_squared = arrayfun(square, v);
disp('Squared vector:')
disp(v_squared)`,
    hints: ['function keyword', 'Multiple outputs with []', 'Anonymous: @(args) expr']
  }
]
