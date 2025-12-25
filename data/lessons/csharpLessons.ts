import { Lesson } from '../courses'

export const csharpLessons: Lesson[] = Array.from({ length: 40 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 15 ? 'Beginner' : i < 30 ? 'Intermediate' : 'Advanced'
  return {
  id: `cs-${i + 1}`,
  title: `C# ${i < 10 ? 'Basics' : i < 25 ? '.NET' : 'ASP.NET'} - Lesson ${i + 1}`,
  description: `Learn ${i < 10 ? 'C# syntax' : i < 25 ? '.NET Framework' : 'ASP.NET Core'}`,
  content: `# C# Lesson ${i + 1}\n\n${i < 10 ? 'Variables, Methods, Classes' : i < 25 ? 'LINQ, Async/Await, Collections' : 'MVC, Entity Framework, Web APIs'}\n\n\`\`\`csharp\nusing System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hello C#");\n  }\n}\n\`\`\``,
  language: 'csharp' as const,
  difficulty,
  estimatedTime: 25 + i,
  initialCode: `using System;\n\nclass Program {\n  static void Main() {\n    // Your code\n  }\n}`,
  solution: `using System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hello C#");\n    int num = 42;\n    Console.WriteLine($"Number: {num}");\n  }\n}`,
  expectedOutput: 'Hello',
  hints: [`C# lesson ${i + 1}`, 'Use Console.WriteLine', 'Strongly typed like Java']
}
})
