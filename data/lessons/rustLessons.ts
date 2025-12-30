import { Lesson } from '../courses'

export const rustLessons: Lesson[] = Array.from({ length: 40 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 15 ? 'Beginner' : i < 30 ? 'Intermediate' : 'Advanced'
  return {
  id: `rust-${i + 1}`,
  title: `Rust ${i < 10 ? 'Basics' : i < 25 ? 'Ownership' : 'Systems'} - Lesson ${i + 1}`,
  description: `Learn ${i < 10 ? 'Rust syntax' : i < 25 ? 'ownership and borrowing' : 'systems programming'}`,
  content: `# Rust Lesson ${i + 1}\n\n${i < 10 ? 'Variables, Functions, Types' : i < 25 ? 'Ownership, References, Lifetimes' : 'Unsafe Code, FFI, Performance'}\n\n\`\`\`rust\nfn main() {\n  println!("Hello Rust!");\n}\n\`\`\``,
  language: 'rust' as const,
  difficulty,
  estimatedTime: 30 + i,
  initialCode: `fn main() {\n  // Your code\n}`,
  solution: `fn main() {\n  println!("Hello Rust!");\n  let x = 42;\n  println!("Number: {}", x);\n}`,
  expectedOutput: 'Hello',
  hints: [`Rust lesson ${i + 1}`, 'Memory safe without GC', 'Ownership prevents bugs']
}
})
