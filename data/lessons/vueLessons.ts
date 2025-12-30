import { Lesson } from '../courses'

export const vueLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced';
  return {
    id: `vue-${i + 1}`,
    title: `Vue.js Lesson ${i + 1}`,
    description: `Master Vue.js concepts - Lesson ${i + 1}`,
    language: 'javascript' as const,
    difficulty,
    estimatedTime: 30,
    content: `# Vue.js Lesson ${i + 1}

Welcome to lesson ${i + 1} of the Vue.js course!

## Learning Objectives
- Understand Vue.js reactive components
- Work with Vue directives and data binding
- Build interactive single-page applications

## Practice Exercise
Complete the coding challenge below to test your Vue.js knowledge.`,
    initialCode: '// Write your Vue.js code here\n',
    solution: '// Solution for lesson ${i + 1}\n',
    hints: ['Use reactive data', 'Leverage Vue directives', 'Component composition'],
    testCases: [
      { name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' },
      { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }
    ]
  };
});
