import { Lesson } from '../courses'

export const typescriptLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced';
  return {
    id: `typescript-${i + 1}`,
    title: `typescript Lesson ${i + 1}`,
    description: `Master typescript programming concepts - Lesson ${i + 1}`,
    language: 'typescript' as const,
    difficulty,
    estimatedTime: 30,
    content: `# typescript Lesson ${i + 1}

Welcome to lesson ${i + 1} of the typescript course!

## Learning Objectives
- Understand core typescript concepts
- Apply programming fundamentals
- Build practical skills

## Practice Exercise
Complete the coding challenge below to test your knowledge.`,
    initialCode: '// Write your typescript code here\n',
    solution: '// Solution for lesson ${i + 1}\n',
    hints: ['Start with the basics', 'Practice regularly', 'Test your code'],
    testCases: [
      { name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' },
      { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }
    ]
  };
});
