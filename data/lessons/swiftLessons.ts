import { Lesson } from '../courses'

export const swiftLessons: Lesson[] = Array.from({ length: 40 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 15 ? 'Beginner' : i < 30 ? 'Intermediate' : 'Advanced'
  return {
  id: `swift-${i + 1}`,
  title: `Swift ${i < 10 ? 'Fundamentals' : i < 25 ? 'iOS Dev' : 'SwiftUI'} - Lesson ${i + 1}`,
  description: `Master ${i < 10 ? 'Swift basics' : i < 25 ? 'UIKit and frameworks' : 'SwiftUI and Combine'}`,
  content: `# Swift Lesson ${i + 1}\n\n${i < 10 ? 'Variables, Optionals, Functions' : i < 25 ? 'Classes, Protocols, Extensions' : 'Views, State, Bindings'}\n\n\`\`\`swift\nimport Foundation\n\nprint("Hello Swift")\n\`\`\``,
  language: 'javascript' as const,
  difficulty,
  estimatedTime: 25 + i,
  initialCode: `import Foundation\n\n// Your Swift code\n`,
  solution: `import Foundation\n\nprint("Hello Swift")\nlet name = "iOS"\nprint("Platform: \\(name)")`,
  expectedOutput: 'Hello',
  hints: [`Swift lesson ${i + 1}`, 'Optionals prevent nil errors', 'String interpolation with \\()']
}
})
