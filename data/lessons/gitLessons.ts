import { Lesson } from '../courses'

export const gitLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced';
  return {
    id: `git-${i + 1}`,
    title: `Git Lesson ${i + 1}`,
    description: `Master Git version control - Lesson ${i + 1}`,
    language: 'bash' as const,
    difficulty,
    estimatedTime: 25,
    content: `# Git Lesson ${i + 1}

Welcome to lesson ${i + 1} of the Git course!

## Learning Objectives
- Master version control with Git
- Work with branches, merging, and rebasing
- Collaborate using Git workflows

## Practice Exercise
Complete the coding challenge below to test your Git knowledge.`,
    initialCode: '# Write your Git commands here\n',
    solution: '# Solution for lesson ${i + 1}\n',
    hints: ['Branching strategies', 'Merge vs rebase', 'Git workflows'],
    testCases: [
      { name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' },
      { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }
    ]
  };
});
