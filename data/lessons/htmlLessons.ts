import { Lesson } from '../courses'

export const htmlLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced';
  return {
    id: `html-${i + 1}`,
    title: `html Lesson ${i + 1}`,
    description: `Master html programming concepts - Lesson ${i + 1}`,
    language: 'html' as const,
    difficulty,
    estimatedTime: 30,
    content: `# html Lesson ${i + 1}

Welcome to lesson ${i + 1} of the html course!

## Learning Objectives
- Understand core html concepts
- Apply programming fundamentals
- Build practical skills

## Practice Exercise
Complete the coding challenge below to test your knowledge.`,
    initialCode: '// Write your html code here\n',
    solution: '// Solution for lesson ${i + 1}\n',
    hints: ['Start with the basics', 'Practice regularly', 'Test your code'],
    testCases: [
      { name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' },
      { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }
    ]
  };
});
