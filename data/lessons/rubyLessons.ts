import { Lesson } from '../courses'

export const rubyLessons: Lesson[] = Array.from({ length: 40 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 15 ? 'Beginner' : i < 30 ? 'Intermediate' : 'Advanced'
  return {
  id: `ruby-${i + 1}`,
  title: `Ruby ${i < 10 ? 'Fundamentals' : i < 25 ? 'OOP' : 'Rails'} - Lesson ${i + 1}`,
  description: `Master ${i < 10 ? 'Ruby syntax' : i < 25 ? 'object-oriented Ruby' : 'Ruby on Rails'}`,
  content: `# Ruby Lesson ${i + 1}\n\n${i < 10 ? 'Variables, Methods, Blocks' : i < 25 ? 'Classes, Modules, Inheritance' : 'MVC, ActiveRecord, REST'}\n\n\`\`\`ruby\nputs "Hello, Ruby!"\n\`\`\``,
  language: 'python' as const,
  difficulty,
  estimatedTime: 20 + i,
  initialCode: `# Ruby code\n\n`,
  solution: `# Ruby solution\nputs "Hello, Ruby!"\n\nclass User\n  attr_accessor :name\nend`,
  expectedOutput: 'Hello',
  hints: [`Ruby lesson ${i + 1}`, 'Everything is an object', 'Use blocks for iteration']
}
})
