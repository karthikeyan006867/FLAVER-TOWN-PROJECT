import { Lesson } from '../courses'

export const objectivecLessons: Lesson[] = [
  {
    id: 'objc-1',
    title: 'Introduction to Objective-C',
    description: 'Learn Objective-C for macOS and iOS development',
    content: `# Introduction to Objective-C

Objective-C is a general-purpose, object-oriented programming language that adds Smalltalk-style messaging to C.

## Key Features:
- Built on top of C
- Dynamic runtime
- Message passing
- Used for macOS/iOS development
- Foundation framework

## Hello World:
\`\`\`objectivec
#import <Foundation/Foundation.h>

int main() {
  @autoreleasepool {
    NSLog(@"Hello, Objective-C!");
  }
  return 0;
}
\`\`\`

## Variables and Objects:
\`\`\`objectivec
NSString *name = @"Objective-C";
NSNumber *age = @40;
NSArray *numbers = @[@1, @2, @3];
\`\`\``,
    language: 'javascript',
    difficulty: 'Intermediate',
    estimatedTime: 40,
    initialCode: `#import <Foundation/Foundation.h>

int main() {
  @autoreleasepool {
    // Your code here
  }
  return 0;
}
`,
    solution: `#import <Foundation/Foundation.h>

int main() {
  @autoreleasepool {
    // Strings
    NSString *greeting = @"Hello, Objective-C!";
    NSLog(@"%@", greeting);
    
    // Arrays
    NSArray *numbers = @[@1, @2, @3, @4, @5];
    NSLog(@"Count: %lu", [numbers count]);
    
    // Dictionary
    NSDictionary *person = @{
      @"name": @"Alice",
      @"age": @30
    };
    NSLog(@"Name: %@", person[@"name"]);
  }
  return 0;
}`,
    hints: ['@ prefix for Objective-C literals', 'NSLog for output', 'Square brackets for methods']
  }
]
