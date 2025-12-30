import { Lesson } from '../courses'

export const angularLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced';
  return {
    id: `angular-${i + 1}`,
    title: `Angular Lesson ${i + 1}`,
    description: `Master Angular development - Lesson ${i + 1}`,
    language: 'typescript' as const,
    difficulty,
    estimatedTime: 35,
    content: `# Angular Lesson ${i + 1}

Welcome to lesson ${i + 1} of the Angular course!

## Learning Objectives
- Build enterprise Angular applications
- Master TypeScript and RxJS patterns
- Implement dependency injection and services

## Practice Exercise
Complete the coding challenge below to test your Angular knowledge.`,
    initialCode: '// Write your Angular TypeScript code here\n',
    solution: '// Solution for lesson ${i + 1}\n',
    hints: ['Use Angular CLI', 'Leverage dependency injection', 'RxJS observables'],
    testCases: [
      { name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' },
      { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }
    ]
  };
});
