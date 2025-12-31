// Course Certification Tests - 10 Questions per Course
export interface TestQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
}

export interface CourseTest {
  courseId: string
  courseName: string
  passingScore: number
  timeLimit: number // minutes
  maxAttempts: number
  questions: TestQuestion[]
}

// Python Test
export const pythonTest: CourseTest = {
  courseId: 'python',
  courseName: 'Python Programming',
  passingScore: 70,
  timeLimit: 20,
  maxAttempts: 3,
  questions: [
    {
      id: 'py-1',
      question: 'What will be the output of: print(type([]) == list)?',
      options: ['True', 'False', 'Error', 'None'],
      correctAnswer: 0,
      explanation: 'type([]) returns <class \'list\'> which equals list, so the comparison is True',
      difficulty: 'Easy'
    },
    {
      id: 'py-2',
      question: 'Which of these is NOT a valid way to create a dictionary in Python?',
      options: [
        'd = {\"key\": \"value\"}',
        'd = dict(key=\"value\")',
        'd = {key: value}',
        'd = dict([(\"key\", \"value\")])'
      ],
      correctAnswer: 2,
      explanation: 'Without quotes, {key: value} will look for variables named key and value',
      difficulty: 'Medium'
    },
    {
      id: 'py-3',
      question: 'What is the result of: [1,2,3] + [4,5,6]?',
      options: ['[5,7,9]', '[1,2,3,4,5,6]', 'Error', '[1,4,2,5,3,6]'],
      correctAnswer: 1,
      explanation: 'The + operator concatenates lists in Python',
      difficulty: 'Easy'
    },
    {
      id: 'py-4',
      question: 'What does list comprehension [x**2 for x in range(5) if x % 2 == 0] produce?',
      options: ['[0,4,16]', '[0,1,4,9,16]', '[1,4,9,16]', '[0,2,4]'],
      correctAnswer: 0,
      explanation: 'Filters even numbers (0,2,4) and squares them: 0²=0, 2²=4, 4²=16',
      difficulty: 'Medium'
    },
    {
      id: 'py-5',
      question: 'In Python 3, what does the / operator do with two integers?',
      options: ['Integer division', 'Float division', 'Modulo', 'Error'],
      correctAnswer: 1,
      explanation: 'In Python 3, / always performs float division. Use // for integer division',
      difficulty: 'Medium'
    },
    {
      id: 'py-6',
      question: 'What is the purpose of *args in a function definition?',
      options: [
        'Allows any number of positional arguments',
        'Makes arguments optional',
        'Allows keyword arguments',
        'Creates a pointer'
      ],
      correctAnswer: 0,
      explanation: '*args collects any number of positional arguments into a tuple',
      difficulty: 'Medium'
    },
    {
      id: 'py-7',
      question: 'Which method removes AND returns the last element from a list?',
      options: ['remove()', 'pop()', 'delete()', 'clear()'],
      correctAnswer: 1,
      explanation: 'pop() removes and returns the last element (or element at index)',
      difficulty: 'Easy'
    },
    {
      id: 'py-8',
      question: 'What will len({1,2,2,3,3,3}) return?',
      options: ['6', '3', 'Error', '1'],
      correctAnswer: 1,
      explanation: 'Sets only contain unique elements, so {1,2,2,3,3,3} = {1,2,3} with length 3',
      difficulty: 'Medium'
    },
    {
      id: 'py-9',
      question: 'Which is the correct way to handle exceptions for multiple error types?',
      options: [
        'except ValueError, TypeError:',
        'except (ValueError, TypeError):',
        'except ValueError and TypeError:',
        'except ValueError or TypeError:'
      ],
      correctAnswer: 1,
      explanation: 'Multiple exception types must be in parentheses as a tuple',
      difficulty: 'Hard'
    },
    {
      id: 'py-10',
      question: 'What does the @staticmethod decorator do in a class?',
      options: [
        'Makes method accessible without instance',
        'Makes method private',
        'Makes method abstract',
        'Makes method asynchronous'
      ],
      correctAnswer: 0,
      explanation: '@staticmethod allows calling a method without creating an instance of the class',
      difficulty: 'Hard'
    }
  ]
}

// JavaScript Test
export const javaScriptTest: CourseTest = {
  courseId: 'javascript',
  courseName: 'JavaScript Programming',
  passingScore: 70,
  timeLimit: 20,
  maxAttempts: 3,
  questions: [
    {
      id: 'js-1',
      question: 'What is the output of: console.log(typeof null)?',
      options: ['null', 'undefined', 'object', 'number'],
      correctAnswer: 2,
      explanation: 'typeof null returns "object" - this is a known JavaScript quirk',
      difficulty: 'Medium'
    },
    {
      id: 'js-2',
      question: 'What does the === operator check?',
      options: ['Value only', 'Type only', 'Value and type', 'Reference'],
      correctAnswer: 2,
      explanation: '=== checks both value and type (strict equality)',
      difficulty: 'Easy'
    },
    {
      id: 'js-3',
      question: 'What will [1,2,3].map(x => x * 2) return?',
      options: ['[2,4,6]', '[1,2,3]', '6', 'Error'],
      correctAnswer: 0,
      explanation: 'map() creates new array by applying function to each element',
      difficulty: 'Easy'
    },
    {
      id: 'js-4',
      question: 'What is a closure in JavaScript?',
      options: [
        'A function that returns a function',
        'A function with access to outer scope variables',
        'A self-invoking function',
        'A function with no parameters'
      ],
      correctAnswer: 1,
      explanation: 'Closure is when inner function has access to outer function\'s variables',
      difficulty: 'Hard'
    },
    {
      id: 'js-5',
      question: 'What does Promise.all() do?',
      options: [
        'Waits for all promises to resolve',
        'Returns first resolved promise',
        'Runs promises sequentially',
        'Cancels all promises'
      ],
      correctAnswer: 0,
      explanation: 'Promise.all() waits for all promises to resolve (or any to reject)',
      difficulty: 'Medium'
    },
    {
      id: 'js-6',
      question: 'What is the difference between let and var?',
      options: [
        'let is block-scoped, var is function-scoped',
        'let is faster',
        'var is newer',
        'No difference'
      ],
      correctAnswer: 0,
      explanation: 'let has block scope, var has function scope',
      difficulty: 'Medium'
    },
    {
      id: 'js-7',
      question: 'What will "5" + 3 return?',
      options: ['"53"', '8', 'Error', '15'],
      correctAnswer: 0,
      explanation: 'The + operator concatenates when one operand is a string',
      difficulty: 'Easy'
    },
    {
      id: 'js-8',
      question: 'Which method does NOT modify the original array?',
      options: ['push()', 'pop()', 'map()', 'splice()'],
      correctAnswer: 2,
      explanation: 'map() returns a new array without modifying the original',
      difficulty: 'Medium'
    },
    {
      id: 'js-9',
      question: 'What is the purpose of async/await?',
      options: [
        'Handle promises more elegantly',
        'Make code run faster',
        'Handle errors',
        'Create new threads'
      ],
      correctAnswer: 0,
      explanation: 'async/await provides cleaner syntax for working with promises',
      difficulty: 'Medium'
    },
    {
      id: 'js-10',
      question: 'What does Object.freeze() do?',
      options: [
        'Prevents object modification',
        'Converts to JSON',
        'Clones object',
        'Saves object to disk'
      ],
      correctAnswer: 0,
      explanation: 'Object.freeze() makes an object immutable',
      difficulty: 'Hard'
    }
  ]
}

// HTML Test
export const htmlTest: CourseTest = {
  courseId: 'html',
  courseName: 'HTML Fundamentals',
  passingScore: 70,
  timeLimit: 15,
  maxAttempts: 3,
  questions: [
    {
      id: 'html-1',
      question: 'Which HTML5 tag is used for independent, self-contained content?',
      options: ['<div>', '<section>', '<article>', '<aside>'],
      correctAnswer: 2,
      explanation: '<article> represents independent, self-contained content',
      difficulty: 'Medium'
    },
    {
      id: 'html-2',
      question: 'What is the correct HTML for creating a hyperlink?',
      options: [
        '<a url="https://example.com">Link</a>',
        '<a href="https://example.com">Link</a>',
        '<link href="https://example.com">Link</link>',
        '<hyperlink>https://example.com</hyperlink>'
      ],
      correctAnswer: 1,
      explanation: '<a href="..."> is the correct syntax for links',
      difficulty: 'Easy'
    },
    {
      id: 'html-3',
      question: 'Which attribute makes an input field required?',
      options: ['mandatory', 'required', 'validate', 'necessary'],
      correctAnswer: 1,
      explanation: 'The required attribute makes form fields mandatory',
      difficulty: 'Easy'
    },
    {
      id: 'html-4',
      question: 'What is the purpose of the <meta charset="UTF-8"> tag?',
      options: [
        'Sets page title',
        'Defines character encoding',
        'Links stylesheet',
        'Sets viewport'
      ],
      correctAnswer: 1,
      explanation: 'charset defines the character encoding for the HTML document',
      difficulty: 'Medium'
    },
    {
      id: 'html-5',
      question: 'Which HTML5 input type is used for email addresses?',
      options: ['<input type="text">', '<input type="email">', '<input type="mail">', '<input type="address">'],
      correctAnswer: 1,
      explanation: 'type="email" provides email validation',
      difficulty: 'Easy'
    },
    {
      id: 'html-6',
      question: 'What does semantic HTML mean?',
      options: [
        'HTML with meaning/purpose',
        'HTML with styling',
        'HTML with JavaScript',
        'HTML version 5'
      ],
      correctAnswer: 0,
      explanation: 'Semantic HTML uses tags that describe their meaning/purpose',
      difficulty: 'Medium'
    },
    {
      id: 'html-7',
      question: 'Which tag is used for the largest heading?',
      options: ['<h1>', '<h6>', '<heading>', '<head>'],
      correctAnswer: 0,
      explanation: '<h1> is the largest/most important heading',
      difficulty: 'Easy'
    },
    {
      id: 'html-8',
      question: 'What is the difference between <div> and <span>?',
      options: [
        'div is block, span is inline',
        'div is inline, span is block',
        'No difference',
        'span is deprecated'
      ],
      correctAnswer: 0,
      explanation: '<div> is block-level, <span> is inline',
      difficulty: 'Medium'
    },
    {
      id: 'html-9',
      question: 'Which attribute specifies alternative text for an image?',
      options: ['title', 'alt', 'src', 'caption'],
      correctAnswer: 1,
      explanation: 'alt attribute provides alternative text for accessibility',
      difficulty: 'Easy'
    },
    {
      id: 'html-10',
      question: 'What is the purpose of the <canvas> element?',
      options: [
        'Display images',
        'Draw graphics with JavaScript',
        'Create forms',
        'Embed videos'
      ],
      correctAnswer: 1,
      explanation: '<canvas> provides a drawing surface for JavaScript graphics',
      difficulty: 'Hard'
    }
  ]
}

// Export all tests
export const courseTests: Record<string, CourseTest> = {
  python: pythonTest,
  javascript: javaScriptTest,
  html: htmlTest
  // Tests for remaining courses will be added
}

// Helper function to get test for a course
export function getCourseTest(courseId: string): CourseTest | null {
  return courseTests[courseId] || null
}
