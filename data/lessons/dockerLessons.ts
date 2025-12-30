import { Lesson } from '../courses'

export const dockerLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced';
  return {
    id: `docker-${i + 1}`,
    title: `Docker Lesson ${i + 1}`,
    description: `Master Docker containerization - Lesson ${i + 1}`,
    language: 'bash' as const,
    difficulty,
    estimatedTime: 30,
    content: `# Docker Lesson ${i + 1}

Welcome to lesson ${i + 1} of the Docker course!

## Learning Objectives
- Build and manage Docker containers
- Create Dockerfiles and images
- Orchestrate with Docker Compose

## Practice Exercise
Complete the coding challenge below to test your Docker knowledge.`,
    initialCode: '# Write your Docker commands here\n',
    solution: '# Solution for lesson ${i + 1}\n',
    hints: ['Docker images', 'Container networking', 'Volume management'],
    testCases: [
      { name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' },
      { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }
    ]
  };
});
