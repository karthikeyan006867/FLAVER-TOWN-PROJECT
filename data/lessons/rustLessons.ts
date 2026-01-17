import { Lesson } from '../courses'

export const rustLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced';
  return {
    id: `rust-${i + 1}`,
    title: `Rust - Lesson ${i + 1}`,
    description: `Learn Rust - Part ${i + 1}`,
    language: 'rust' as const,
    difficulty,
    estimatedTime: 30,
    content: `# Rust Lesson ${i + 1}

## Overview
Master Rust programming and concepts.

## Practice
Complete the exercise to test your knowledge.
`,
    initialCode: `// Write your Rust code here\n\n`,
    solution: `// Solution for Rust lesson ${i + 1}\n\n`,
    hints: ['Study the documentation', 'Practice regularly', 'Test your code'],
    testCases: [
      { name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' },
      { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }
    ]
  };
});
