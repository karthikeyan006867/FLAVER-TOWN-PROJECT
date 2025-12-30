import { Lesson } from '../courses'

export const djangoLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced';
  return {
    id: `django-${i + 1}`,
    title: `Django Lesson ${i + 1}`,
    description: `Master Django web framework - Lesson ${i + 1}`,
    language: 'python' as const,
    difficulty,
    estimatedTime: 35,
    content: `# Django Lesson ${i + 1}

Welcome to lesson ${i + 1} of the Django course!

## Learning Objectives
- Build web applications with Django MVT architecture
- Master Django ORM and database operations
- Implement authentication and REST APIs

## Practice Exercise
Complete the coding challenge below to test your Django knowledge.`,
    initialCode: '# Write your Django Python code here\n',
    solution: '# Solution for lesson ${i + 1}\n',
    hints: ['Use Django models', 'MVT pattern', 'Django admin interface'],
    testCases: [
      { name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' },
      { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }
    ]
  };
});
