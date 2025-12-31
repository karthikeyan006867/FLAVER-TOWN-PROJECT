import { Lesson } from '../courses'

export const htmlLessons: Lesson[] = [
  {
    id: 'html-1',
    title: 'HTML Basics - Your First Web Page',
    description: 'Master HTML structure in HTML',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# HTML Basics - Your First Web Page

Learn about HTML structure in HTML.

## Key Concepts:
- Understanding HTML structure
- Best practices
- Real-world examples

Practice implementing HTML structure!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>HTML Basics - Your First Web Page</title>
  </head>
  <body>
    <!-- Implement HTML structure here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>HTML Basics - Your First Web Page</title>
  </head>
  <body>
    <h1>HTML Basics - Your First Web Page</h1>
    <p>Implementation of HTML structure</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-2',
    title: 'Headings and Paragraphs',
    description: 'Master h1-h6, paragraphs in HTML',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Headings and Paragraphs

Learn about h1-h6, paragraphs in HTML.

## Key Concepts:
- Understanding h1-h6, paragraphs
- Best practices
- Real-world examples

Practice implementing h1-h6, paragraphs!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Headings and Paragraphs</title>
  </head>
  <body>
    <!-- Implement h1-h6, paragraphs here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Headings and Paragraphs</title>
  </head>
  <body>
    <h1>Headings and Paragraphs</h1>
    <p>Implementation of h1-h6, paragraphs</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-3',
    title: 'Links and Navigation',
    description: 'Master anchor tags, href in HTML',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Links and Navigation

Learn about anchor tags, href in HTML.

## Key Concepts:
- Understanding anchor tags, href
- Best practices
- Real-world examples

Practice implementing anchor tags, href!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Links and Navigation</title>
  </head>
  <body>
    <!-- Implement anchor tags, href here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Links and Navigation</title>
  </head>
  <body>
    <h1>Links and Navigation</h1>
    <p>Implementation of anchor tags, href</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-4',
    title: 'Images and Media',
    description: 'Master img, alt, src in HTML',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Images and Media

Learn about img, alt, src in HTML.

## Key Concepts:
- Understanding img, alt, src
- Best practices
- Real-world examples

Practice implementing img, alt, src!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Images and Media</title>
  </head>
  <body>
    <!-- Implement img, alt, src here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Images and Media</title>
  </head>
  <body>
    <h1>Images and Media</h1>
    <p>Implementation of img, alt, src</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-5',
    title: 'Lists - Ordered and Unordered',
    description: 'Master ul, ol, li in HTML',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Lists - Ordered and Unordered

Learn about ul, ol, li in HTML.

## Key Concepts:
- Understanding ul, ol, li
- Best practices
- Real-world examples

Practice implementing ul, ol, li!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Lists - Ordered and Unordered</title>
  </head>
  <body>
    <!-- Implement ul, ol, li here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Lists - Ordered and Unordered</title>
  </head>
  <body>
    <h1>Lists - Ordered and Unordered</h1>
    <p>Implementation of ul, ol, li</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-6',
    title: 'Text Formatting',
    description: 'Master strong, em, mark in HTML',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Text Formatting

Learn about strong, em, mark in HTML.

## Key Concepts:
- Understanding strong, em, mark
- Best practices
- Real-world examples

Practice implementing strong, em, mark!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Text Formatting</title>
  </head>
  <body>
    <!-- Implement strong, em, mark here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Text Formatting</title>
  </head>
  <body>
    <h1>Text Formatting</h1>
    <p>Implementation of strong, em, mark</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-7',
    title: 'Div and Span Containers',
    description: 'Master div, span in HTML',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Div and Span Containers

Learn about div, span in HTML.

## Key Concepts:
- Understanding div, span
- Best practices
- Real-world examples

Practice implementing div, span!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Div and Span Containers</title>
  </head>
  <body>
    <!-- Implement div, span here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Div and Span Containers</title>
  </head>
  <body>
    <h1>Div and Span Containers</h1>
    <p>Implementation of div, span</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-8',
    title: 'Tables - Rows and Columns',
    description: 'Master table, tr, td in HTML',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Tables - Rows and Columns

Learn about table, tr, td in HTML.

## Key Concepts:
- Understanding table, tr, td
- Best practices
- Real-world examples

Practice implementing table, tr, td!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Tables - Rows and Columns</title>
  </head>
  <body>
    <!-- Implement table, tr, td here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Tables - Rows and Columns</title>
  </head>
  <body>
    <h1>Tables - Rows and Columns</h1>
    <p>Implementation of table, tr, td</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-9',
    title: 'Forms - Input Elements',
    description: 'Master form, input in HTML',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Forms - Input Elements

Learn about form, input in HTML.

## Key Concepts:
- Understanding form, input
- Best practices
- Real-world examples

Practice implementing form, input!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Forms - Input Elements</title>
  </head>
  <body>
    <!-- Implement form, input here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Forms - Input Elements</title>
  </head>
  <body>
    <h1>Forms - Input Elements</h1>
    <p>Implementation of form, input</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-10',
    title: 'Buttons and Input Types',
    description: 'Master button, input types in HTML',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Buttons and Input Types

Learn about button, input types in HTML.

## Key Concepts:
- Understanding button, input types
- Best practices
- Real-world examples

Practice implementing button, input types!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Buttons and Input Types</title>
  </head>
  <body>
    <!-- Implement button, input types here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Buttons and Input Types</title>
  </head>
  <body>
    <h1>Buttons and Input Types</h1>
    <p>Implementation of button, input types</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-11',
    title: 'Semantic HTML - Header and Nav',
    description: 'Master header, nav in HTML',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Semantic HTML - Header and Nav

Learn about header, nav in HTML.

## Key Concepts:
- Understanding header, nav
- Best practices
- Real-world examples

Practice implementing header, nav!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Semantic HTML - Header and Nav</title>
  </head>
  <body>
    <!-- Implement header, nav here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Semantic HTML - Header and Nav</title>
  </head>
  <body>
    <h1>Semantic HTML - Header and Nav</h1>
    <p>Implementation of header, nav</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-12',
    title: 'Semantic HTML - Main and Article',
    description: 'Master main, article in HTML',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Semantic HTML - Main and Article

Learn about main, article in HTML.

## Key Concepts:
- Understanding main, article
- Best practices
- Real-world examples

Practice implementing main, article!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Semantic HTML - Main and Article</title>
  </head>
  <body>
    <!-- Implement main, article here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Semantic HTML - Main and Article</title>
  </head>
  <body>
    <h1>Semantic HTML - Main and Article</h1>
    <p>Implementation of main, article</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-13',
    title: 'Semantic HTML - Footer and Aside',
    description: 'Master footer, aside in HTML',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Semantic HTML - Footer and Aside

Learn about footer, aside in HTML.

## Key Concepts:
- Understanding footer, aside
- Best practices
- Real-world examples

Practice implementing footer, aside!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Semantic HTML - Footer and Aside</title>
  </head>
  <body>
    <!-- Implement footer, aside here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Semantic HTML - Footer and Aside</title>
  </head>
  <body>
    <h1>Semantic HTML - Footer and Aside</h1>
    <p>Implementation of footer, aside</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-14',
    title: 'HTML5 Audio Element',
    description: 'Master audio in HTML',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# HTML5 Audio Element

Learn about audio in HTML.

## Key Concepts:
- Understanding audio
- Best practices
- Real-world examples

Practice implementing audio!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>HTML5 Audio Element</title>
  </head>
  <body>
    <!-- Implement audio here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>HTML5 Audio Element</title>
  </head>
  <body>
    <h1>HTML5 Audio Element</h1>
    <p>Implementation of audio</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-15',
    title: 'HTML5 Video Element',
    description: 'Master video in HTML',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# HTML5 Video Element

Learn about video in HTML.

## Key Concepts:
- Understanding video
- Best practices
- Real-world examples

Practice implementing video!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>HTML5 Video Element</title>
  </head>
  <body>
    <!-- Implement video here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>HTML5 Video Element</title>
  </head>
  <body>
    <h1>HTML5 Video Element</h1>
    <p>Implementation of video</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-16',
    title: 'HTML5 Canvas Basics',
    description: 'Master canvas in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# HTML5 Canvas Basics

Learn about canvas in HTML.

## Key Concepts:
- Understanding canvas
- Best practices
- Real-world examples

Practice implementing canvas!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>HTML5 Canvas Basics</title>
  </head>
  <body>
    <!-- Implement canvas here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>HTML5 Canvas Basics</title>
  </head>
  <body>
    <h1>HTML5 Canvas Basics</h1>
    <p>Implementation of canvas</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-17',
    title: 'SVG Graphics',
    description: 'Master SVG in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# SVG Graphics

Learn about SVG in HTML.

## Key Concepts:
- Understanding SVG
- Best practices
- Real-world examples

Practice implementing SVG!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>SVG Graphics</title>
  </head>
  <body>
    <!-- Implement SVG here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>SVG Graphics</title>
  </head>
  <body>
    <h1>SVG Graphics</h1>
    <p>Implementation of SVG</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-18',
    title: 'Meta Tags and SEO',
    description: 'Master meta in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Meta Tags and SEO

Learn about meta in HTML.

## Key Concepts:
- Understanding meta
- Best practices
- Real-world examples

Practice implementing meta!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Meta Tags and SEO</title>
  </head>
  <body>
    <!-- Implement meta here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Meta Tags and SEO</title>
  </head>
  <body>
    <h1>Meta Tags and SEO</h1>
    <p>Implementation of meta</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-19',
    title: 'Responsive Images',
    description: 'Master srcset in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Responsive Images

Learn about srcset in HTML.

## Key Concepts:
- Understanding srcset
- Best practices
- Real-world examples

Practice implementing srcset!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Responsive Images</title>
  </head>
  <body>
    <!-- Implement srcset here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Responsive Images</title>
  </head>
  <body>
    <h1>Responsive Images</h1>
    <p>Implementation of srcset</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-20',
    title: 'Figure and Figcaption',
    description: 'Master figure in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Figure and Figcaption

Learn about figure in HTML.

## Key Concepts:
- Understanding figure
- Best practices
- Real-world examples

Practice implementing figure!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Figure and Figcaption</title>
  </head>
  <body>
    <!-- Implement figure here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Figure and Figcaption</title>
  </head>
  <body>
    <h1>Figure and Figcaption</h1>
    <p>Implementation of figure</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-21',
    title: 'Details and Summary',
    description: 'Master details in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Details and Summary

Learn about details in HTML.

## Key Concepts:
- Understanding details
- Best practices
- Real-world examples

Practice implementing details!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Details and Summary</title>
  </head>
  <body>
    <!-- Implement details here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Details and Summary</title>
  </head>
  <body>
    <h1>Details and Summary</h1>
    <p>Implementation of details</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-22',
    title: 'Progress and Meter',
    description: 'Master progress in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Progress and Meter

Learn about progress in HTML.

## Key Concepts:
- Understanding progress
- Best practices
- Real-world examples

Practice implementing progress!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Progress and Meter</title>
  </head>
  <body>
    <!-- Implement progress here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Progress and Meter</title>
  </head>
  <body>
    <h1>Progress and Meter</h1>
    <p>Implementation of progress</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-23',
    title: 'Time Element',
    description: 'Master time in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Time Element

Learn about time in HTML.

## Key Concepts:
- Understanding time
- Best practices
- Real-world examples

Practice implementing time!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Time Element</title>
  </head>
  <body>
    <!-- Implement time here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Time Element</title>
  </head>
  <body>
    <h1>Time Element</h1>
    <p>Implementation of time</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-24',
    title: 'Mark and Highlight',
    description: 'Master mark in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Mark and Highlight

Learn about mark in HTML.

## Key Concepts:
- Understanding mark
- Best practices
- Real-world examples

Practice implementing mark!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Mark and Highlight</title>
  </head>
  <body>
    <!-- Implement mark here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Mark and Highlight</title>
  </head>
  <body>
    <h1>Mark and Highlight</h1>
    <p>Implementation of mark</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-25',
    title: 'Data Attributes',
    description: 'Master data-* in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Data Attributes

Learn about data-* in HTML.

## Key Concepts:
- Understanding data-*
- Best practices
- Real-world examples

Practice implementing data-*!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Data Attributes</title>
  </head>
  <body>
    <!-- Implement data-* here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Data Attributes</title>
  </head>
  <body>
    <h1>Data Attributes</h1>
    <p>Implementation of data-*</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-26',
    title: 'Form Validation',
    description: 'Master validation in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Form Validation

Learn about validation in HTML.

## Key Concepts:
- Understanding validation
- Best practices
- Real-world examples

Practice implementing validation!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Form Validation</title>
  </head>
  <body>
    <!-- Implement validation here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Form Validation</title>
  </head>
  <body>
    <h1>Form Validation</h1>
    <p>Implementation of validation</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-27',
    title: 'Input Attributes',
    description: 'Master attributes in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Input Attributes

Learn about attributes in HTML.

## Key Concepts:
- Understanding attributes
- Best practices
- Real-world examples

Practice implementing attributes!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Input Attributes</title>
  </head>
  <body>
    <!-- Implement attributes here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Input Attributes</title>
  </head>
  <body>
    <h1>Input Attributes</h1>
    <p>Implementation of attributes</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-28',
    title: 'Select and Dropdown',
    description: 'Master select in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Select and Dropdown

Learn about select in HTML.

## Key Concepts:
- Understanding select
- Best practices
- Real-world examples

Practice implementing select!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Select and Dropdown</title>
  </head>
  <body>
    <!-- Implement select here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Select and Dropdown</title>
  </head>
  <body>
    <h1>Select and Dropdown</h1>
    <p>Implementation of select</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-29',
    title: 'Textarea Element',
    description: 'Master textarea in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Textarea Element

Learn about textarea in HTML.

## Key Concepts:
- Understanding textarea
- Best practices
- Real-world examples

Practice implementing textarea!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Textarea Element</title>
  </head>
  <body>
    <!-- Implement textarea here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Textarea Element</title>
  </head>
  <body>
    <h1>Textarea Element</h1>
    <p>Implementation of textarea</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-30',
    title: 'Fieldset and Legend',
    description: 'Master fieldset in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Fieldset and Legend

Learn about fieldset in HTML.

## Key Concepts:
- Understanding fieldset
- Best practices
- Real-world examples

Practice implementing fieldset!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Fieldset and Legend</title>
  </head>
  <body>
    <!-- Implement fieldset here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Fieldset and Legend</title>
  </head>
  <body>
    <h1>Fieldset and Legend</h1>
    <p>Implementation of fieldset</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-31',
    title: 'IFrame Embedding',
    description: 'Master iframe in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# IFrame Embedding

Learn about iframe in HTML.

## Key Concepts:
- Understanding iframe
- Best practices
- Real-world examples

Practice implementing iframe!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>IFrame Embedding</title>
  </head>
  <body>
    <!-- Implement iframe here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>IFrame Embedding</title>
  </head>
  <body>
    <h1>IFrame Embedding</h1>
    <p>Implementation of iframe</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-32',
    title: 'Embed and Object',
    description: 'Master embed in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Embed and Object

Learn about embed in HTML.

## Key Concepts:
- Understanding embed
- Best practices
- Real-world examples

Practice implementing embed!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Embed and Object</title>
  </head>
  <body>
    <!-- Implement embed here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Embed and Object</title>
  </head>
  <body>
    <h1>Embed and Object</h1>
    <p>Implementation of embed</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-33',
    title: 'Accessibility - ARIA',
    description: 'Master ARIA in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Accessibility - ARIA

Learn about ARIA in HTML.

## Key Concepts:
- Understanding ARIA
- Best practices
- Real-world examples

Practice implementing ARIA!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Accessibility - ARIA</title>
  </head>
  <body>
    <!-- Implement ARIA here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Accessibility - ARIA</title>
  </head>
  <body>
    <h1>Accessibility - ARIA</h1>
    <p>Implementation of ARIA</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-34',
    title: 'Accessibility - Alt Text',
    description: 'Master alt in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Accessibility - Alt Text

Learn about alt in HTML.

## Key Concepts:
- Understanding alt
- Best practices
- Real-world examples

Practice implementing alt!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Accessibility - Alt Text</title>
  </head>
  <body>
    <!-- Implement alt here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Accessibility - Alt Text</title>
  </head>
  <body>
    <h1>Accessibility - Alt Text</h1>
    <p>Implementation of alt</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-35',
    title: 'Accessibility - Skip Links',
    description: 'Master navigation in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Accessibility - Skip Links

Learn about navigation in HTML.

## Key Concepts:
- Understanding navigation
- Best practices
- Real-world examples

Practice implementing navigation!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Accessibility - Skip Links</title>
  </head>
  <body>
    <!-- Implement navigation here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Accessibility - Skip Links</title>
  </head>
  <body>
    <h1>Accessibility - Skip Links</h1>
    <p>Implementation of navigation</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-36',
    title: 'HTML Entities',
    description: 'Master entities in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# HTML Entities

Learn about entities in HTML.

## Key Concepts:
- Understanding entities
- Best practices
- Real-world examples

Practice implementing entities!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>HTML Entities</title>
  </head>
  <body>
    <!-- Implement entities here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>HTML Entities</title>
  </head>
  <body>
    <h1>HTML Entities</h1>
    <p>Implementation of entities</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-37',
    title: 'Character Encoding',
    description: 'Master UTF-8 in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Character Encoding

Learn about UTF-8 in HTML.

## Key Concepts:
- Understanding UTF-8
- Best practices
- Real-world examples

Practice implementing UTF-8!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Character Encoding</title>
  </head>
  <body>
    <!-- Implement UTF-8 here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Character Encoding</title>
  </head>
  <body>
    <h1>Character Encoding</h1>
    <p>Implementation of UTF-8</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-38',
    title: 'Script Tags',
    description: 'Master script in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Script Tags

Learn about script in HTML.

## Key Concepts:
- Understanding script
- Best practices
- Real-world examples

Practice implementing script!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Script Tags</title>
  </head>
  <body>
    <!-- Implement script here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Script Tags</title>
  </head>
  <body>
    <h1>Script Tags</h1>
    <p>Implementation of script</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-39',
    title: 'Link Relations',
    description: 'Master rel in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Link Relations

Learn about rel in HTML.

## Key Concepts:
- Understanding rel
- Best practices
- Real-world examples

Practice implementing rel!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Link Relations</title>
  </head>
  <body>
    <!-- Implement rel here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Link Relations</title>
  </head>
  <body>
    <h1>Link Relations</h1>
    <p>Implementation of rel</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-40',
    title: 'Base URL',
    description: 'Master base in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Base URL

Learn about base in HTML.

## Key Concepts:
- Understanding base
- Best practices
- Real-world examples

Practice implementing base!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Base URL</title>
  </head>
  <body>
    <!-- Implement base here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Base URL</title>
  </head>
  <body>
    <h1>Base URL</h1>
    <p>Implementation of base</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-41',
    title: 'Template Element',
    description: 'Master template in HTML',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 35,
    content: `# Template Element

Learn about template in HTML.

## Key Concepts:
- Understanding template
- Best practices
- Real-world examples

Practice implementing template!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Template Element</title>
  </head>
  <body>
    <!-- Implement template here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Template Element</title>
  </head>
  <body>
    <h1>Template Element</h1>
    <p>Implementation of template</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-42',
    title: 'Dialog Element',
    description: 'Master dialog in HTML',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Dialog Element

Learn about dialog in HTML.

## Key Concepts:
- Understanding dialog
- Best practices
- Real-world examples

Practice implementing dialog!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Dialog Element</title>
  </head>
  <body>
    <!-- Implement dialog here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Dialog Element</title>
  </head>
  <body>
    <h1>Dialog Element</h1>
    <p>Implementation of dialog</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-43',
    title: 'Web Storage',
    description: 'Master localStorage in HTML',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Web Storage

Learn about localStorage in HTML.

## Key Concepts:
- Understanding localStorage
- Best practices
- Real-world examples

Practice implementing localStorage!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Web Storage</title>
  </head>
  <body>
    <!-- Implement localStorage here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Web Storage</title>
  </head>
  <body>
    <h1>Web Storage</h1>
    <p>Implementation of localStorage</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-44',
    title: 'Geolocation',
    description: 'Master geolocation in HTML',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 35,
    content: `# Geolocation

Learn about geolocation in HTML.

## Key Concepts:
- Understanding geolocation
- Best practices
- Real-world examples

Practice implementing geolocation!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Geolocation</title>
  </head>
  <body>
    <!-- Implement geolocation here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Geolocation</title>
  </head>
  <body>
    <h1>Geolocation</h1>
    <p>Implementation of geolocation</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-45',
    title: 'Drag and Drop',
    description: 'Master draggable in HTML',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Drag and Drop

Learn about draggable in HTML.

## Key Concepts:
- Understanding draggable
- Best practices
- Real-world examples

Practice implementing draggable!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Drag and Drop</title>
  </head>
  <body>
    <!-- Implement draggable here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Drag and Drop</title>
  </head>
  <body>
    <h1>Drag and Drop</h1>
    <p>Implementation of draggable</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-46',
    title: 'Web Workers',
    description: 'Master workers in HTML',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Web Workers

Learn about workers in HTML.

## Key Concepts:
- Understanding workers
- Best practices
- Real-world examples

Practice implementing workers!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Web Workers</title>
  </head>
  <body>
    <!-- Implement workers here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Web Workers</title>
  </head>
  <body>
    <h1>Web Workers</h1>
    <p>Implementation of workers</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-47',
    title: 'Service Workers',
    description: 'Master PWA in HTML',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 35,
    content: `# Service Workers

Learn about PWA in HTML.

## Key Concepts:
- Understanding PWA
- Best practices
- Real-world examples

Practice implementing PWA!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Service Workers</title>
  </head>
  <body>
    <!-- Implement PWA here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Service Workers</title>
  </head>
  <body>
    <h1>Service Workers</h1>
    <p>Implementation of PWA</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-48',
    title: 'Microdata',
    description: 'Master schema in HTML',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Microdata

Learn about schema in HTML.

## Key Concepts:
- Understanding schema
- Best practices
- Real-world examples

Practice implementing schema!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Microdata</title>
  </head>
  <body>
    <!-- Implement schema here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Microdata</title>
  </head>
  <body>
    <h1>Microdata</h1>
    <p>Implementation of schema</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-49',
    title: 'Custom Elements',
    description: 'Master web components in HTML',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Custom Elements

Learn about web components in HTML.

## Key Concepts:
- Understanding web components
- Best practices
- Real-world examples

Practice implementing web components!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Custom Elements</title>
  </head>
  <body>
    <!-- Implement web components here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Custom Elements</title>
  </head>
  <body>
    <h1>Custom Elements</h1>
    <p>Implementation of web components</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  },
  {
    id: 'html-50',
    title: 'Final Project - Complete Website',
    description: 'Master full website in HTML',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 120,
    isProject: true,
    content: `# Final Project - Complete Website

Learn about full website in HTML.

## Key Concepts:
- Understanding full website
- Best practices
- Real-world examples

Practice implementing full website!`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Final Project - Complete Website</title>
  </head>
  <body>
    <!-- Implement full website here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Final Project - Complete Website</title>
  </head>
  <body>
    <h1>Final Project - Complete Website</h1>
    <p>Implementation of full website</p>
  </body>
</html>`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  }
]
