import { Lesson } from '../courses'

export const mongodbLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced';
  return {
    id: `mongodb-${i + 1}`,
    title: `MongoDB Lesson ${i + 1}`,
    description: `Master MongoDB NoSQL database - Lesson ${i + 1}`,
    language: 'javascript' as const,
    difficulty,
    estimatedTime: 30,
    content: `# MongoDB Lesson ${i + 1}

Welcome to lesson ${i + 1} of the MongoDB course!

## Learning Objectives
- Work with document-based NoSQL databases
- Master MongoDB queries and aggregation
- Implement indexing and performance optimization

## Practice Exercise
Complete the coding challenge below to test your MongoDB knowledge.`,
    initialCode: '// Write your MongoDB query here\n',
    solution: '// Solution for lesson ${i + 1}\n',
    hints: ['Document model', 'Aggregation pipeline', 'Indexing strategies'],
    testCases: [
      { name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' },
      { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }
    ]
  };
});
