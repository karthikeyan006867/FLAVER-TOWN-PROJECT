import { Lesson } from '../courses'

export const goLessons: Lesson[] = Array.from({ length: 40 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 15 ? 'Beginner' : i < 30 ? 'Intermediate' : 'Advanced'
  return {
  id: `go-${i + 1}`,
  title: `Go ${i < 10 ? 'Basics' : i < 25 ? 'Concurrency' : 'Web Services'} - Lesson ${i + 1}`,
  description: `Master ${i < 10 ? 'Go fundamentals' : i < 25 ? 'goroutines and channels' : 'microservices'}`,
  content: `# Go Lesson ${i + 1}\n\n${i < 10 ? 'Syntax, Types, Functions' : i < 25 ? 'Goroutines, Channels, Select' : 'HTTP Servers, gRPC, Docker'}\n\n\`\`\`go\npackage main\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("Hello Go")\n}\n\`\`\``,
  language: 'go' as const,
  difficulty,
  estimatedTime: 20 + i,
  initialCode: `package main\n\nimport "fmt"\n\nfunc main() {\n  // Your code\n}`,
  solution: `package main\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("Hello Go")\n  x := 42\n  fmt.Printf("Number: %d\\n", x)\n}`,
  expectedOutput: 'Hello',
  hints: [`Go lesson ${i + 1}`, 'Use := for short declaration', 'Concurrency is built-in']
}
})
