import { Lesson } from '../courses'

export const phpLessons: Lesson[] = Array.from({ length: 40 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 15 ? 'Beginner' : i < 30 ? 'Intermediate' : 'Advanced'
  return {
  id: `php-${i + 1}`,
  title: `PHP ${i < 10 ? 'Basics' : i < 25 ? 'Web Dev' : 'Laravel'} - Lesson ${i + 1}`,
  description: `Learn ${i < 10 ? 'PHP fundamentals' : i < 25 ? 'forms and databases' : 'Laravel framework'}`,
  content: `# PHP Lesson ${i + 1}\n\n${i < 10 ? 'Variables, Functions, Arrays' : i < 25 ? 'Forms, MySQL, Sessions' : 'MVC, Eloquent, Blade'}\n\n\`\`\`php\n<?php\necho "Hello PHP";\n?>\n\`\`\``,
  language: 'javascript' as const,
  difficulty,
  estimatedTime: 20 + i,
  initialCode: `<?php\n// PHP code\n\n?>`,
  solution: `<?php\necho "Hello PHP";\n$name = "John";\necho "Welcome, $name";\n?>`,
  expectedOutput: 'Hello',
  hints: [`PHP lesson ${i + 1}`, 'Start with <?php', 'Use $ for variables']
}
})
