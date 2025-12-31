import { Lesson } from '../courses'

export const cssLessons: Lesson[] = [
  {
    id: 'css-1',
    title: 'CSS Basics - Styling Your First Page',
    description: 'Introduction to CSS and basic styling',
    language: 'css' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Welcome to CSS!

CSS (Cascading Style Sheets) makes websites beautiful.

## Ways to Add CSS:
\`\`\`html
<!-- Inline -->
<p style="color: blue;">Text</p>

<!-- Internal -->
<style>
  p { color: blue; }
</style>

<!-- External (Best Practice) -->
<link rel="stylesheet" href="styles.css">
\`\`\`

## Basic Syntax:
\`\`\`css
selector {
  property: value;
}

p {
  color: blue;
  font-size: 16px;
}
\`\`\`

Style a paragraph!`,
    initialCode: `/* Style the paragraph to be blue and 20px */
p {
  
}`,
    solution: `p {
  color: blue;
  font-size: 20px;
}`,
    hints: ['Use color property', 'Use font-size property', 'Add px unit to size'],
    testCases: [
      { name: 'Has p selector', test: (code) => /p\s*{/.test(code), errorMessage: 'Create a p selector' },
      { name: 'Sets color', test: (code) => /color\s*:/.test(code), errorMessage: 'Add a color property' },
      { name: 'Sets font-size', test: (code) => /font-size\s*:/.test(code), errorMessage: 'Add a font-size property' },
      { name: 'Has closing brace', test: (code) => code.includes('}'), errorMessage: 'Close the CSS rule with }' }
    ]
  },
  {
    id: 'css-2',
    title: 'CSS Selectors - Targeting Elements',
    description: 'Learn different ways to select HTML elements',
    language: 'css' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# CSS Selectors

## Types of Selectors:
\`\`\`css
/* Element */
p { color: blue; }

/* Class */
.highlight { background: yellow; }

/* ID */
#header { font-size: 24px; }

/* Multiple */
h1, h2, h3 { color: navy; }
\`\`\`

## Usage in HTML:
\`\`\`html
<p class="highlight">Yellow background</p>
<div id="header">Large text</div>
\`\`\`

Master selectors!`,
    initialCode: `/* Style all headings (h1) with color navy */


/* Style elements with class 'highlight' with yellow background */


/* Style element with id 'main' with font-size 18px */

`,
    solution: `h1 {
  color: navy;
}

.highlight {
  background-color: yellow;
}

#main {
  font-size: 18px;
}`,
    hints: ['Element selector: elementname { }', 'Class selector: .classname { }', 'ID selector: #idname { }'],
    testCases: [
      { name: 'Has element selector', test: (code) => /h1\s*{/.test(code), errorMessage: 'Create an h1 selector' },
      { name: 'Has class selector', test: (code) => /\.\w+\s*{/.test(code), errorMessage: 'Create a class selector with a dot (.)' },
      { name: 'Has ID selector', test: (code) => /#\w+\s*{/.test(code), errorMessage: 'Create an ID selector with a hash (#)' },
      { name: 'Has properties', test: (code) => /:\s*[^;]+;/.test(code), errorMessage: 'Add CSS properties with values' }
    ]
  },
  {
    id: 'css-3',
    title: 'Colors and Backgrounds',
    description: 'Work with colors and background properties',
    language: 'css' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# CSS Colors & Backgrounds

## Color Formats:
\`\`\`css
/* Named colors */
color: red;

/* Hex */
color: #FF0000;

/* RGB */
color: rgb(255, 0, 0);

/* RGBA (with transparency) */
color: rgba(255, 0, 0, 0.5);
\`\`\`

## Background Properties:
\`\`\`css
background-color: lightblue;
background-image: url('image.jpg');
background-size: cover;
background-position: center;
\`\`\`

Create a colorful design!`,
    initialCode: `/* Style the header */
.header {
  
}

/* Style the card */
.card {
  
}`,
    solution: `.header {
  background-color: #3498db;
  color: white;
  padding: 20px;
}

.card {
  background-color: #f8f9fa;
  color: #333;
  border: 1px solid #ddd;
}`,
    hints: ['Use background-color', 'Use color for text', 'Try hex colors like #3498db'],
    testCases: [
      { name: 'Has header selector', test: (code) => /\.header\s*{/.test(code), errorMessage: 'Create a .header class selector' },
      { name: 'Sets background color', test: (code) => /background(-color)?\s*:/.test(code), errorMessage: 'Add background-color property' },
      { name: 'Sets text color', test: (code) => /color\s*:/.test(code), errorMessage: 'Add color property for text' },
      { name: 'Has multiple rules', test: (code) => (code.match(/}/g) || []).length >= 2, errorMessage: 'Style both .header and .card' }
    ]
  },
  {
    id: 'css-4',
    title: 'Box Model - Margin, Padding, Border',
    description: 'Understand the CSS box model',
    language: 'css' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# CSS Box Model

Every element is a box!

## The Box Model:
\`\`\`
┌─────── margin ───────┐
│ ┌───── border ─────┐ │
│ │ ┌─── padding ──┐ │ │
│ │ │   Content    │ │ │
│ │ └──────────────┘ │ │
│ └──────────────────┘ │
└──────────────────────┘
\`\`\`

## Properties:
\`\`\`css
.box {
  margin: 20px;       /* Outside space */
  padding: 15px;      /* Inside space */
  border: 2px solid black;
  width: 300px;
}

/* Individual sides */
margin-top: 10px;
padding-left: 20px;
border-bottom: 1px solid red;
\`\`\`

Build a card!`,
    initialCode: `/* Create a card with proper spacing */
.card {
  
}`,
    solution: `.card {
  width: 300px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: white;
}`,
    hints: ['Add margin for outside space', 'Add padding for inside space', 'Add border'],
    testCases: [
      { name: 'Has card selector', test: (code) => /\.card\s*{/.test(code), errorMessage: 'Create a .card selector' },
      { name: 'Sets padding', test: (code) => /padding(-[a-z]+)?\s*:/.test(code), errorMessage: 'Add padding property' },
      { name: 'Sets margin', test: (code) => /margin(-[a-z]+)?\s*:/.test(code), errorMessage: 'Add margin property' },
      { name: 'Sets border', test: (code) => /border(-[a-z]+)?\s*:/.test(code), errorMessage: 'Add border property' }
    ]
  },
  {
    id: 'css-5',
    title: 'Typography - Fonts and Text Styling',
    description: 'Style text with fonts and text properties',
    language: 'css' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# CSS Typography

## Font Properties:
\`\`\`css
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
font-style: italic;
line-height: 1.5;
\`\`\`

## Text Properties:
\`\`\`css
text-align: center;
text-decoration: underline;
text-transform: uppercase;
letter-spacing: 2px;
\`\`\`

## Google Fonts:
\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=Roboto');
font-family: 'Roboto', sans-serif;
\`\`\`

Style beautiful text!`,
    initialCode: `/* Style the heading */
h1 {
  
}

/* Style the paragraph */
p {
  
}`,
    solution: `h1 {
  font-family: Arial, sans-serif;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #333;
}

p {
  font-size: 16px;
  line-height: 1.6;
  color: #666;
}`,
    hints: ['Set font-family', 'Set font-size in px', 'Use text-align for alignment'],
    testCases: [
      { name: 'Styles h1', test: (code) => /h1\s*{/.test(code), errorMessage: 'Create an h1 selector' },
      { name: 'Sets font-family', test: (code) => /font-family\s*:/.test(code), errorMessage: 'Add font-family property' },
      { name: 'Sets font-size', test: (code) => /font-size\s*:/.test(code), errorMessage: 'Add font-size property' },
      { name: 'Styles paragraph', test: (code) => /p\s*{/.test(code), errorMessage: 'Create a p selector for paragraphs' }
    ]
  }
]
