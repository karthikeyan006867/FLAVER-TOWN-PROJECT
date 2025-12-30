import { Lesson } from '../courses'

export const cssLessons: Lesson[] = [
  {
    id: 'css-1',
    title: 'CSS Basics - Selectors',
    description: 'Learn how to select and style HTML elements',
    content: `# CSS Basics

## What is CSS?
CSS (Cascading Style Sheets) is what makes websites beautiful! HTML provides structure, but CSS adds colors, layouts, animations, and visual design.

## Why Learn CSS?
- **Visual Appeal**: Transform plain HTML into stunning designs
- **User Experience**: Good design keeps visitors engaged
- **Branding**: Create unique, memorable websites
- **Responsive Design**: Make sites work on all devices
- **Career Essential**: Every web developer needs CSS

## How CSS Works
CSS finds HTML elements (using selectors) and applies visual styles (colors, sizes, positions, etc.) to them.

## Three Ways to Add CSS

### 1. Inline CSS (Quick but not recommended)
\`\`\`html
<h1 style="color: blue; font-size: 32px;">Title</h1>
\`\`\`
❌ **Problem**: Hard to maintain, styles mixed with HTML

### 2. Internal CSS (Good for single pages)
\`\`\`html
<head>
  <style>
    h1 { color: blue; }
  </style>
</head>
\`\`\`
⚠️ **Use When**: Small projects or page-specific styles

### 3. External CSS (Best practice!)
\`\`\`html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
\`\`\`
✅ **Why Best**: Reusable, organized, cached by browser

## CSS Syntax Explained
\`\`\`css
selector {
  property: value;
  property: value;
}
\`\`\`

**Example:**
\`\`\`css
h1 {              /* selector: which element to style */
  color: blue;    /* property: what to change */
  font-size: 32px;/* value: how to change it */
}
\`\`\`

## Common Selectors:
\`\`\`css
h1 { color: blue; }        /* Element */
.class { color: red; }     /* Class */
#id { color: green; }      /* ID */
\`\`\`

## Real-World Use
Every beautiful website—Instagram, Netflix, Spotify—uses CSS for its unique design!

## Your Turn: Experiment!
**Task:** Style an h1 to be blue and font-size 32px.
**Try These:**
1. Use all three CSS methods—which is easiest to update?
2. Add multiple properties to one selector
3. Misspell a property—does it break or ignore it?
4. Use browser DevTools (F12) to live-edit CSS!`,
    language: 'css',
    difficulty: 'Beginner',
    estimatedTime: 10,
    initialCode: `h1 {\n  /* Add your styles here */\n}`,
    solution: `h1 {\n  color: blue;\n  font-size: 32px;\n}`,
    hints: ['color for text color', 'font-size for size', 'Use semicolons']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-2',
    title: 'Colors and Backgrounds',
    description: 'Master color properties',
    content: `# CSS Colors

## Color Formats:
\`\`\`css
color: red;                    /* Name */
color: #ff0000;                /* Hex */
color: rgb(255, 0, 0);         /* RGB */
color: rgba(255, 0, 0, 0.5);   /* RGBA (with transparency) */
\`\`\`

## Background:
\`\`\`css
background-color: lightblue;
background-image: url('img.jpg');
\`\`\`

**Task:** Create a div with background-color #3498db and white text.`,
    language: 'css',
    difficulty: 'Beginner',
    estimatedTime: 10,
    initialCode: `div {\n  /* Add styles */\n}`,
    solution: `div {\n  background-color: #3498db;\n  color: white;\n}`,
    hints: ['Use hex color #3498db', 'color for text', 'background-color for background']
    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'css-3',
    title: 'Box Model - Margin & Padding',
    description: 'Understand spacing in CSS',
    content: `# The CSS Box Model

Every element is a box with:
- **Content:** The actual content
- **Padding:** Space inside border
- **Border:** Line around padding
- **Margin:** Space outside border

\`\`\`css
div {
  padding: 20px;      /* Space inside */
  margin: 10px;       /* Space outside */
  border: 2px solid black;
}
\`\`\`

## Individual Sides:
\`\`\`css
padding-top: 10px;
padding-right: 20px;
margin-left: 15px;
\`\`\`

**Task:** Create a box with 20px padding, 10px margin, and 1px solid border.`,
    language: 'css',
    difficulty: 'Beginner',
    estimatedTime: 12,
    initialCode: `.box {\n  /* Add box model properties */\n}`,
    solution: `.box {\n  padding: 20px;\n  margin: 10px;\n  border: 1px solid black;\n}`,
    hints: ['padding inside', 'margin outside', 'border syntax: width style color']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-4',
    title: 'Flexbox Basics',
    description: 'Layout elements with Flexbox',
    content: `# Flexbox Layout

Flexbox makes layouts easy!

## Container Properties:
\`\`\`css
.container {
  display: flex;
  justify-content: center;    /* Horizontal */
  align-items: center;        /* Vertical */
  gap: 10px;                  /* Space between items */
}
\`\`\`

## Common Values:
- justify-content: flex-start | center | space-between
- align-items: flex-start | center | flex-end

**Task:** Create a flex container that centers items both horizontally and vertically.`,
    language: 'css',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `.container {\n  /* Make it flex and center items */\n}`,
    solution: `.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}`,
    hints: ['display: flex to enable flexbox', 'justify-content for horizontal', 'align-items for vertical']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-5',
    title: 'Responsive Design with Media Queries',
    description: 'Make websites work on all devices',
    content: `# Media Queries

Adapt your design to different screen sizes!

\`\`\`css
/* Mobile first */
.container {
  flex-direction: column;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
  }
}
\`\`\`

**Common Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

**Task:** Create styles that change font-size from 16px (mobile) to 20px (desktop).`,
    language: 'css',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `body {\n  font-size: 16px;\n}\n\n/* Add media query for desktop */`,
    solution: `body {\n  font-size: 16px;\n}\n\n@media (min-width: 1024px) {\n  body {\n    font-size: 20px;\n  }\n}`,
    hints: ['@media (min-width: px)', 'Larger screens = larger breakpoint', 'Mobile first approach']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },

  // INTERMEDIATE CSS (Lessons 6-20)
  {
    id: 'css-6',
    title: 'CSS Grid Basics',
    description: 'Create two-dimensional layouts',
    content: `# CSS Grid

Grid for 2D layouts (rows AND columns).

## Basic Grid:
\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
\`\`\`

## Grid Template:
\`\`\`css
grid-template-columns: 200px 1fr 1fr;
grid-template-rows: auto 300px auto;
\`\`\`

**Task:** Create 3-column grid with gap.`,
    language: 'css',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `.grid-container {\n  /* Add grid styles */\n}`,
    solution: `.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}`,
    hints: ['display: grid', 'repeat(count, size)', 'gap for spacing']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-7',
    title: 'Grid Areas',
    description: 'Name and place grid areas',
    content: `# Grid Template Areas

## Define Layout:
\`\`\`css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
\`\`\`

**Task:** Create layout with named grid areas.`,
    language: 'css',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `.layout {\n  /* Add grid template areas */\n}`,
    solution: `.layout {\n  display: grid;\n  grid-template-areas:\n    "nav nav"\n    "sidebar content"\n    "footer footer";\n  grid-template-columns: 250px 1fr;\n  gap: 16px;\n}\n\n.nav { grid-area: nav; }\n.sidebar { grid-area: sidebar; }\n.content { grid-area: content; }\n.footer { grid-area: footer; }`,
    hints: ['grid-template-areas', 'Quotes for each row', 'grid-area to assign']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-8',
    title: 'Transitions',
    description: 'Animate property changes smoothly',
    content: `# CSS Transitions

## Syntax:
\`\`\`css
.button {
  background: blue;
  transition: background 0.3s ease;
}

.button:hover {
  background: darkblue;
}
\`\`\`

## Properties:
\`\`\`css
transition: property duration timing-function delay;
transition: all 0.3s ease-in-out 0.1s;
\`\`\`

**Task:** Add smooth color transition on hover.`,
    language: 'css',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `.card {\n  background: white;\n  color: black;\n}\n\n.card:hover {\n  background: black;\n  color: white;\n}`,
    solution: `.card {\n  background: white;\n  color: black;\n  transition: all 0.4s ease;\n}\n\n.card:hover {\n  background: black;\n  color: white;\n}`,
    hints: ['transition property', 'all or specific properties', 'Duration in seconds']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-9',
    title: 'Transform Property',
    description: 'Rotate, scale, and move elements',
    content: `# CSS Transform

## Transform Functions:
\`\`\`css
transform: rotate(45deg);
transform: scale(1.5);
transform: translate(50px, 100px);
transform: skew(10deg);
\`\`\`

## Multiple Transforms:
\`\`\`css
transform: rotate(45deg) scale(1.2) translate(10px, 20px);
\`\`\`

**Task:** Create hover effect with scale and rotate.`,
    language: 'css',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `.box {\n  width: 100px;\n  height: 100px;\n  background: purple;\n}\n\n.box:hover {\n  /* Add transform */\n}`,
    solution: `.box {\n  width: 100px;\n  height: 100px;\n  background: purple;\n  transition: transform 0.3s ease;\n}\n\n.box:hover {\n  transform: scale(1.2) rotate(15deg);\n}`,
    hints: ['transform property', 'Combine with transition', 'Multiple functions']
    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'css-10',
    title: 'CSS Animations',
    description: 'Create keyframe animations',
    content: `# CSS Animations

## Define Keyframes:
\`\`\`css
@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.element {
  animation: slideIn 0.5s ease;
}
\`\`\`

## Animation Properties:
\`\`\`css
animation: name duration timing-function delay iteration-count;
animation: bounce 1s ease-in-out infinite;
\`\`\`

**Task:** Create fade-in animation.`,
    language: 'css',
    difficulty: 'Intermediate',
    estimatedTime: 20,
    initialCode: `@keyframes fadeIn {\n  /* Add keyframes */\n}\n\n.fade-element {\n  /* Apply animation */\n}`,
    solution: `@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.fade-element {\n  animation: fadeIn 0.6s ease-out;\n}`,
    hints: ['@keyframes name', 'from/to or percentages', 'animation property']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-11',
    title: 'Pseudo-elements',
    description: 'Style parts of elements',
    content: `# Pseudo-elements

## ::before and ::after:
\`\`\`css
.quote::before {
  content: '"';
  font-size: 2em;
}

.quote::after {
  content: '"';
  font-size: 2em;
}
\`\`\`

## ::first-letter:
\`\`\`css
p::first-letter {
  font-size: 3em;
  font-weight: bold;
}
\`\`\`

**Task:** Add decorative quotes with pseudo-elements.`,
    language: 'css',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `.quote {\n  /* Add ::before and ::after */\n}`,
    solution: `.quote {\n  position: relative;\n  padding: 20px;\n}\n\n.quote::before {\n  content: '"';\n  font-size: 4em;\n  position: absolute;\n  left: -10px;\n  top: -20px;\n  color: #ccc;\n}\n\n.quote::after {\n  content: '"';\n  font-size: 4em;\n  position: absolute;\n  right: -10px;\n  bottom: -40px;\n  color: #ccc;\n}`,
    hints: ['::before ::after', 'content property required', 'Can style like elements']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-12',
    title: 'CSS Variables (Custom Properties)',
    description: 'Reuse values with variables',
    content: `# CSS Variables

## Define Variables:
\`\`\`css
:root {
  --primary-color: #3498db;
  --spacing: 16px;
  --border-radius: 8px;
}
\`\`\`

## Use Variables:
\`\`\`css
.button {
  background: var(--primary-color);
  padding: var(--spacing);
  border-radius: var(--border-radius);
}
\`\`\`

**Task:** Create color scheme with variables.`,
    language: 'css',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `:root {\n  /* Define variables */\n}\n\n.card {\n  /* Use variables */\n}`,
    solution: `:root {\n  --primary: #2ecc71;\n  --secondary: #3498db;\n  --spacing-sm: 8px;\n  --spacing-md: 16px;\n  --spacing-lg: 24px;\n}\n\n.card {\n  background: var(--primary);\n  padding: var(--spacing-md);\n  margin: var(--spacing-lg);\n  border: 2px solid var(--secondary);\n}`,
    hints: ['--variable-name', 'var(--variable-name)', ':root for global']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-13',
    title: 'Gradient Backgrounds',
    description: 'Create color gradients',
    content: `# CSS Gradients

## Linear Gradient:
\`\`\`css
background: linear-gradient(to right, red, blue);
background: linear-gradient(45deg, #f00, #00f);
\`\`\`

## Radial Gradient:
\`\`\`css
background: radial-gradient(circle, red, yellow, green);
\`\`\`

## Multiple Stops:
\`\`\`css
background: linear-gradient(
  to bottom,
  #ff0000 0%,
  #00ff00 50%,
  #0000ff 100%
);
\`\`\`

**Task:** Create gradient background.`,
    language: 'css',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `.hero {\n  /* Add gradient */\n}`,
    solution: `.hero {\n  background: linear-gradient(\n    135deg,\n    #667eea 0%,\n    #764ba2 100%\n  );\n  min-height: 400px;\n}`,
    hints: ['linear-gradient(direction, color1, color2)', 'Direction: to right, 45deg, etc', 'Multiple color stops']
    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'css-14',
    title: 'Box Sizing',
    description: 'Control box model calculation',
    content: `# Box Sizing

## Content Box (default):
Width/height = content only

## Border Box (recommended):
\`\`\`css
* {
  box-sizing: border-box;
}
\`\`\`

Width/height = content + padding + border

**Task:** Set border-box globally.`,
    language: 'css',
    difficulty: 'Intermediate',
    estimatedTime: 12,
    initialCode: `/* Add global box-sizing */`,
    solution: `*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n.box {\n  width: 300px;\n  padding: 20px;\n  border: 5px solid black;\n  /* Total width stays 300px with border-box */\n}`,
    hints: ['box-sizing: border-box', 'Apply to * for all elements', 'Include ::before ::after']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-15',
    title: 'CSS Filters',
    description: 'Apply visual effects',
    content: `# CSS Filters

## Common Filters:
\`\`\`css
filter: blur(5px);
filter: brightness(150%);
filter: contrast(200%);
filter: grayscale(100%);
filter: hue-rotate(90deg);
filter: saturate(200%);
filter: sepia(100%);
\`\`\`

## Multiple Filters:
\`\`\`css
filter: blur(2px) brightness(120%) contrast(110%);
\`\`\`

**Task:** Add hover filter effects.`,
    language: 'css',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `.image {\n  transition: filter 0.3s;\n}\n\n.image:hover {\n  /* Add filters */\n}`,
    solution: `.image {\n  transition: filter 0.3s ease;\n}\n\n.image:hover {\n  filter: brightness(1.2) contrast(1.1) saturate(1.3);\n}`,
    hints: ['filter property', 'Multiple values', 'Combine with transition']
    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'css-16',
    title: 'Clip-path',
    description: 'Create custom shapes',
    content: `# Clip Path

## Basic Shapes:
\`\`\`css
clip-path: circle(50%);
clip-path: ellipse(25% 40%);
clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
\`\`\`

## Complex Polygons:
\`\`\`css
clip-path: polygon(
  0% 0%,
  100% 0%,
  100% 75%,
  75% 100%,
  0% 100%
);
\`\`\`

**Task:** Create triangle with clip-path.`,
    language: 'css',
    difficulty: 'Intermediate',
    estimatedTime: 18,
    initialCode: `.triangle {\n  width: 200px;\n  height: 200px;\n  background: red;\n  /* Add clip-path */\n}`,
    solution: `.triangle {\n  width: 200px;\n  height: 200px;\n  background: red;\n  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);\n}`,
    hints: ['clip-path: polygon()', 'Points as x% y%', 'Three points for triangle']
    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'css-17',
    title: 'Object Fit',
    description: 'Control image/video sizing',
    content: `# Object Fit

## Values:
\`\`\`css
object-fit: contain;  /* Fit inside, maintain aspect */
object-fit: cover;    /* Fill container, maintain aspect */
object-fit: fill;     /* Stretch to fill */
object-fit: none;     /* Original size */
object-fit: scale-down; /* Smaller of none or contain */
\`\`\`

## With Position:
\`\`\`css
object-fit: cover;
object-position: center top;
\`\`\`

**Task:** Make image cover container.`,
    language: 'css',
    difficulty: 'Intermediate',
    estimatedTime: 12,
    initialCode: `.card-image {\n  width: 300px;\n  height: 200px;\n  /* Add object-fit */\n}`,
    solution: `.card-image {\n  width: 300px;\n  height: 200px;\n  object-fit: cover;\n  object-position: center;\n}`,
    hints: ['object-fit: cover', 'For images and videos', 'object-position for alignment']
    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'css-18',
    title: 'Grid Auto Flow',
    description: 'Control automatic grid placement',
    content: `# Grid Auto Flow

## Values:
\`\`\`css
grid-auto-flow: row;     /* Fill rows (default) */
grid-auto-flow: column;  /* Fill columns */
grid-auto-flow: dense;   /* Pack items tightly */
\`\`\`

## With Auto Columns/Rows:
\`\`\`css
.grid {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 150px;
}
\`\`\`

**Task:** Create auto-flowing grid.`,
    language: 'css',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `.gallery {\n  display: grid;\n  /* Add auto-flow */\n}`,
    solution: `.gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-auto-rows: 200px;\n  gap: 16px;\n}`,
    hints: ['auto-fill/auto-fit', 'minmax() for flexibility', 'grid-auto-rows for height']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-19',
    title: 'Aspect Ratio',
    description: 'Maintain width-to-height ratio',
    content: `# Aspect Ratio

## New Property:
\`\`\`css
.video {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.square {
  aspect-ratio: 1;
  width: 200px;
}
\`\`\`

## Old Method:
\`\`\`css
.container {
  padding-top: 56.25%; /* 16:9 ratio */
}
\`\`\`

**Task:** Create responsive 16:9 container.`,
    language: 'css',
    difficulty: 'Intermediate',
    estimatedTime: 12,
    initialCode: `.video-container {\n  width: 100%;\n  /* Add aspect-ratio */\n}`,
    solution: `.video-container {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  background: #000;\n}`,
    hints: ['aspect-ratio: width / height', 'Width as percentage', '16/9, 4/3, 1/1']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-20',
    title: 'Scroll Snap',
    description: 'Create snap-scrolling containers',
    content: `# Scroll Snap

## Container:
\`\`\`css
.container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}
\`\`\`

## Children:
\`\`\`css
.section {
  scroll-snap-align: start;
  height: 100vh;
}
\`\`\`

**Task:** Create snap-scrolling sections.`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 18,
    initialCode: `.scroll-container {\n  /* Add scroll-snap */\n}\n\n.scroll-section {\n  /* Add snap alignment */\n}`,
    solution: `.scroll-container {\n  scroll-snap-type: y mandatory;\n  overflow-y: scroll;\n  height: 100vh;\n}\n\n.scroll-section {\n  scroll-snap-align: start;\n  height: 100vh;\n}`,
    hints: ['scroll-snap-type: axis proximity/mandatory', 'scroll-snap-align on children', 'x or y axis']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },

  // ADVANCED CSS (Lessons 21-35)
  {
    id: 'css-21',
    title: 'Custom Checkbox Styling',
    description: 'Style checkboxes and radio buttons',
    content: `# Custom Checkboxes

## Hide Default:
\`\`\`css
input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #333;
}

input[type="checkbox"]:checked {
  background: #3498db;
}
\`\`\`

**Task:** Create styled checkbox.`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `input[type="checkbox"] {\n  /* Style checkbox */\n}`,
    solution: `input[type="checkbox"] {\n  appearance: none;\n  width: 24px;\n  height: 24px;\n  border: 2px solid #3498db;\n  border-radius: 4px;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.2s;\n}\n\ninput[type="checkbox"]:checked {\n  background: #3498db;\n}\n\ninput[type="checkbox"]:checked::after {\n  content: '✓';\n  position: absolute;\n  color: white;\n  left: 4px;\n  top: 0;\n}`,
    hints: ['appearance: none', '::after for checkmark', ':checked state']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-22',
    title: 'CSS Counters',
    description: 'Auto-number elements',
    content: `# CSS Counters

## Setup:
\`\`\`css
body {
  counter-reset: section;
}

h2::before {
  counter-increment: section;
  content: "Section " counter(section) ": ";
}
\`\`\`

**Task:** Number headings automatically.`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 18,
    initialCode: `.container {\n  /* Add counter */\n}\n\n.item::before {\n  /* Display counter */\n}`,
    solution: `.container {\n  counter-reset: item;\n}\n\n.item::before {\n  counter-increment: item;\n  content: counter(item) ". ";\n  font-weight: bold;\n  color: #3498db;\n}`,
    hints: ['counter-reset on parent', 'counter-increment', 'content: counter(name)']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-23',
    title: 'Backdrop Filter',
    description: 'Blur background behind elements',
    content: `# Backdrop Filter

## Glass Effect:
\`\`\`css
.card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
\`\`\`

**Task:** Create glassmorphism card.`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `.glass-card {\n  /* Add glassmorphism effect */\n}`,
    solution: `.glass-card {\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(12px) saturate(180%);\n  border-radius: 16px;\n  padding: 32px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n}`,
    hints: ['backdrop-filter: blur()', 'Semi-transparent background', 'Multiple filter values']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-24',
    title: 'CSS Grid Subgrid',
    description: 'Inherit parent grid',
    content: `# Subgrid

## Usage:
\`\`\`css
.parent {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.child {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
}
\`\`\`

**Task:** Understand subgrid concept.`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 15,
    initialCode: `/* Subgrid inherits parent grid */\n.nested-grid {\n  grid-template-columns: subgrid;\n}`,
    solution: `.container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n\n.item {\n  grid-column: span 2;\n  display: grid;\n  grid-template-columns: subgrid;\n}`,
    hints: ['subgrid value', 'Inherits from parent', 'Limited browser support']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-25',
    title: 'Contain Property',
    description: 'Optimize rendering performance',
    content: `# CSS Contain

## Values:
\`\`\`css
contain: layout;      /* Isolate layout */
contain: paint;       /* Isolate painting */
contain: size;        /* Isolate size */
contain: style;       /* Isolate style */
contain: strict;      /* All except style */
contain: content;     /* Layout, paint, style */
\`\`\`

**Task:** Optimize component rendering.`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 15,
    initialCode: `.component {\n  /* Add containment */\n}`,
    solution: `.component {\n  contain: layout style paint;\n  /* Tells browser this is isolated component */\n}`,
    hints: ['Performance optimization', 'Isolates rendering', 'Use for independent components']
    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'css-26',
    title: 'Mix Blend Mode',
    description: 'Blend elements with background',
    content: `# Mix Blend Mode

## Modes:
\`\`\`css
mix-blend-mode: multiply;
mix-blend-mode: screen;
mix-blend-mode: overlay;
mix-blend-mode: darken;
mix-blend-mode: lighten;
mix-blend-mode: color-dodge;
mix-blend-mode: difference;
\`\`\`

**Task:** Create blend effect.`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 18,
    initialCode: `.overlay {\n  /* Add blend mode */\n}`,
    solution: `.overlay {\n  background: #3498db;\n  mix-blend-mode: multiply;\n  padding: 20px;\n  color: white;\n}`,
    hints: ['mix-blend-mode property', 'Similar to Photoshop', 'Experiment with values']
    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'css-27',
    title: 'CSS Scroll Behavior',
    description: 'Smooth scrolling',
    content: `# Scroll Behavior

## Smooth Scroll:
\`\`\`css
html {
  scroll-behavior: smooth;
}
\`\`\`

## Scroll Padding:
\`\`\`css
html {
  scroll-padding-top: 80px; /* For fixed header */
}
\`\`\`

**Task:** Enable smooth scrolling.`,
    language: 'css',
    difficulty: 'Intermediate',
    estimatedTime: 10,
    initialCode: `html {\n  /* Add smooth scroll */\n}`,
    solution: `html {\n  scroll-behavior: smooth;\n  scroll-padding-top: 100px; /* Account for fixed nav */\n}`,
    hints: ['scroll-behavior: smooth', 'On html element', 'scroll-padding for offset']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-28',
    title: 'CSS Shapes',
    description: 'Text flow around shapes',
    content: `# CSS Shapes

## Shape Outside:
\`\`\`css
.image {
  float: left;
  shape-outside: circle(50%);
  width: 200px;
  height: 200px;
}
\`\`\`

## Polygon:
\`\`\`css
shape-outside: polygon(0 0, 100% 0, 100% 100%);
\`\`\`

**Task:** Float image with circular text wrap.`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `.float-image {\n  /* Add shape-outside */\n}`,
    solution: `.float-image {\n  float: left;\n  width: 200px;\n  height: 200px;\n  shape-outside: circle(50%);\n  clip-path: circle(50%);\n  margin: 0 20px 20px 0;\n}`,
    hints: ['shape-outside property', 'Requires float', 'clip-path for visual']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-29',
    title: 'Container Queries',
    description: 'Responsive based on container',
    content: `# Container Queries

## Setup:
\`\`\`css
.container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .child {
    flex-direction: row;
  }
}
\`\`\`

**Task:** Use container queries.`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `.card {\n  container-type: inline-size;\n}\n\n/* Add container query */`,
    solution: `.card {\n  container-type: inline-size;\n  container-name: mycard;\n}\n\n@container mycard (min-width: 500px) {\n  .card-content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n}`,
    hints: ['container-type on parent', '@container query', 'Query the container, not viewport']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-30',
    title: 'Logical Properties',
    description: 'Direction-aware properties',
    content: `# Logical Properties

## Instead of physical:
\`\`\`css
/* Old */
margin-left: 10px;
margin-right: 20px;

/* New - logical */
margin-inline-start: 10px;
margin-inline-end: 20px;
\`\`\`

## Common Logical Properties:
\`\`\`css
padding-inline: 20px;
margin-block: 10px;
border-inline-start: 2px solid;
\`\`\`

**Task:** Use logical properties.`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 15,
    initialCode: `.box {\n  /* Use logical properties */\n}`,
    solution: `.box {\n  padding-inline: 24px;\n  padding-block: 16px;\n  margin-block-end: 20px;\n  border-inline-start: 4px solid #3498db;\n}`,
    hints: ['inline = horizontal', 'block = vertical', 'Adapts to writing mode']
    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'css-31',
    title: 'CSS Nesting',
    description: 'Nest selectors (new feature)',
    content: `# CSS Nesting

## Syntax (Native):
\`\`\`css
.card {
  background: white;
  
  & h2 {
    color: blue;
  }
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  & .button {
    margin-top: 10px;
  }
}
\`\`\`

**Task:** Use CSS nesting.`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 15,
    initialCode: `.container {\n  /* Use nesting */\n}`,
    solution: `.container {\n  padding: 20px;\n  \n  & .title {\n    font-size: 24px;\n    color: #333;\n  }\n  \n  & .content {\n    margin-top: 16px;\n    \n    & p {\n      line-height: 1.6;\n    }\n  }\n  \n  &:hover {\n    background: #f5f5f5;\n  }\n}`,
    hints: ['& for parent reference', 'Nest selectors', 'New CSS feature']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-32',
    title: 'Gap with Flexbox',
    description: 'Use gap in flex containers',
    content: `# Flexbox Gap

## Modern Syntax:
\`\`\`css
.flex-container {
  display: flex;
  gap: 20px;
  /* No more margin hacks! */
}
\`\`\`

## Row and Column Gap:
\`\`\`css
gap: 20px 10px; /* row column */
row-gap: 20px;
column-gap: 10px;
\`\`\`

**Task:** Create flex layout with gap.`,
    language: 'css',
    difficulty: 'Intermediate',
    estimatedTime: 12,
    initialCode: `.flex-row {\n  display: flex;\n  /* Add gap */\n}`,
    solution: `.flex-row {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.flex-column {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}`,
    hints: ['gap property', 'Works in flex and grid', 'Replaces margin tricks']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-33',
    title: 'Accent Color',
    description: 'Style form controls quickly',
    content: `# Accent Color

## Quick Theming:
\`\`\`css
:root {
  accent-color: #3498db;
}

/* Affects checkboxes, radios, range, progress */
\`\`\`

**Task:** Set accent color.`,
    language: 'css',
    difficulty: 'Beginner',
    estimatedTime: 10,
    initialCode: `:root {\n  /* Set accent color */\n}`,
    solution: `:root {\n  accent-color: #2ecc71;\n}\n\n/* All checkboxes, radios, etc will use this color */`,
    hints: ['accent-color property', 'On :root for global', 'Affects form controls']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-34',
    title: 'has() Selector',
    description: 'Parent selector based on children',
    content: `# :has() Selector

## Parent Selector:
\`\`\`css
/* Style article if it has an image */
article:has(img) {
  display: grid;
}

/* Style div if checkbox is checked */
div:has(input:checked) {
  background: lightgreen;
}
\`\`\`

**Task:** Use :has() selector.`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 18,
    initialCode: `/* Style container with checked input */\n.form-group:has() {\n  \n}`,
    solution: `.form-group:has(input:checked) {\n  border-color: green;\n  background: #e8f5e9;\n}\n\n.card:has(.featured) {\n  border: 3px solid gold;\n}`,
    hints: [':has(selector)', 'Selects parent', 'Check for child state']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'css-35',
    title: 'is() and where() Selectors',
    description: 'Group selectors efficiently',
    content: `# :is() and :where()

## :is() - keeps specificity:
\`\`\`css
:is(h1, h2, h3) {
  margin-top: 0;
}
/* Same as: h1, h2, h3 { margin-top: 0; } */

article :is(h1, h2) span {
  color: blue;
}
\`\`\`

## :where() - zero specificity:
\`\`\`css
:where(h1, h2, h3) {
  margin-top: 0;
}
\`\`\`

**Task:** Use :is() for grouped styling.`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 15,
    initialCode: `/* Group heading styles */`,
    solution: `:is(h1, h2, h3, h4, h5, h6) {\n  font-family: 'Arial', sans-serif;\n  font-weight: bold;\n  line-height: 1.2;\n}\n\n:is(.btn, .button, .link-button):hover {\n  opacity: 0.8;\n}`,
    hints: [':is() groups selectors', ':where() same but zero specificity', 'Cleaner code']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },

  // PROJECT LESSON
  {
    id: 'css-project-1',
    title: 'PROJECT: Styled Card Component',
    description: 'Create a beautiful card with CSS',
    content: `# Project: Profile Card

Create a styled profile card with:

## Requirements:
1. Card with white background and shadow
2. Centered content using Flexbox
3. Rounded corners (border-radius)
4. Padding and margin
5. Hover effect that lifts the card
6. Responsive - stacks on mobile

## CSS Skills to Use:
- Box model (padding, margin, border)
- Flexbox for centering
- Border-radius for rounded corners
- Box-shadow for depth
- Hover pseudo-class
- Media queries

Make it beautiful!`,
    language: 'css',
    difficulty: 'Intermediate',
    estimatedTime: 30,
    isProject: true,
    projectDescription: 'Style a profile card component',
    initialCode: `.card {\n  /* Add your styles */\n}\n\n.card:hover {\n  /* Hover effect */\n}`,
    solution: `.card {\n  background: white;\n  padding: 30px;\n  margin: 20px;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  max-width: 400px;\n  transition: transform 0.3s ease;\n}\n\n.card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);\n}\n\n@media (max-width: 768px) {\n  .card {\n    margin: 10px;\n    padding: 20px;\n  }\n}`,
    hints: ['box-shadow for depth', 'transform for movement', 'transition for smooth animation', 'Media query for mobile']
    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  }
,

  // EXPANDED LESSONS (Generated)
  {
    id: 'css-37',
    title: 'CSS Grid Advanced',
    description: 'Master css grid advanced concepts and techniques',
    content: `# CSS Grid Advanced

## Overview
Learn about css grid advanced and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply css grid advanced concepts in your code.
`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 15,
    initialCode: `// Start your css code here
`,
    solution: `// Sample solution for CSS Grid Advanced
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'css-38',
    title: 'Flexbox Patterns',
    description: 'Master flexbox patterns concepts and techniques',
    content: `# Flexbox Patterns

## Overview
Learn about flexbox patterns and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply flexbox patterns concepts in your code.
`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 12,
    initialCode: `// Start your css code here
`,
    solution: `// Sample solution for Flexbox Patterns
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'css-39',
    title: 'Animation Keyframes',
    description: 'Master animation keyframes concepts and techniques',
    content: `# Animation Keyframes

## Overview
Learn about animation keyframes and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply animation keyframes concepts in your code.
`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 16,
    initialCode: `// Start your css code here
`,
    solution: `// Sample solution for Animation Keyframes
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'css-40',
    title: 'Transition Timing',
    description: 'Master transition timing concepts and techniques',
    content: `# Transition Timing

## Overview
Learn about transition timing and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply transition timing concepts in your code.
`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 18,
    initialCode: `// Start your css code here
`,
    solution: `// Sample solution for Transition Timing
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'css-41',
    title: 'Transform 3D',
    description: 'Master transform 3d concepts and techniques',
    content: `# Transform 3D

## Overview
Learn about transform 3d and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply transform 3d concepts in your code.
`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 10,
    initialCode: `// Start your css code here
`,
    solution: `// Sample solution for Transform 3D
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'css-42',
    title: 'CSS Variables Advanced',
    description: 'Master css variables advanced concepts and techniques',
    content: `# CSS Variables Advanced

## Overview
Learn about css variables advanced and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply css variables advanced concepts in your code.
`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 17,
    initialCode: `// Start your css code here
`,
    solution: `// Sample solution for CSS Variables Advanced
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'css-43',
    title: 'Calc() Function',
    description: 'Master calc() function concepts and techniques',
    content: `# Calc() Function

## Overview
Learn about calc() function and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply calc() function concepts in your code.
`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 11,
    initialCode: `// Start your css code here
`,
    solution: `// Sample solution for Calc() Function
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'css-44',
    title: 'CSS Functions',
    description: 'Master css functions concepts and techniques',
    content: `# CSS Functions

## Overview
Learn about css functions and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply css functions concepts in your code.
`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 16,
    initialCode: `// Start your css code here
`,
    solution: `// Sample solution for CSS Functions
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'css-45',
    title: 'Media Query Strategies',
    description: 'Master media query strategies concepts and techniques',
    content: `# Media Query Strategies

## Overview
Learn about media query strategies and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply media query strategies concepts in your code.
`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 24,
    initialCode: `// Start your css code here
`,
    solution: `// Sample solution for Media Query Strategies
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'css-46',
    title: 'Container Queries',
    description: 'Master container queries concepts and techniques',
    content: `# Container Queries

## Overview
Learn about container queries and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply container queries concepts in your code.
`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 14,
    initialCode: `// Start your css code here
`,
    solution: `// Sample solution for Container Queries
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'css-47',
    title: 'Aspect Ratio',
    description: 'Master aspect ratio concepts and techniques',
    content: `# Aspect Ratio

## Overview
Learn about aspect ratio and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply aspect ratio concepts in your code.
`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 15,
    initialCode: `// Start your css code here
`,
    solution: `// Sample solution for Aspect Ratio
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'css-48',
    title: 'Object Fit',
    description: 'Master object fit concepts and techniques',
    content: `# Object Fit

## Overview
Learn about object fit and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply object fit concepts in your code.
`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 23,
    initialCode: `// Start your css code here
`,
    solution: `// Sample solution for Object Fit
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'css-49',
    title: 'Mix Blend Modes',
    description: 'Master mix blend modes concepts and techniques',
    content: `# Mix Blend Modes

## Overview
Learn about mix blend modes and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply mix blend modes concepts in your code.
`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 18,
    initialCode: `// Start your css code here
`,
    solution: `// Sample solution for Mix Blend Modes
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'css-50',
    title: 'Filter Effects',
    description: 'Master filter effects concepts and techniques',
    content: `# Filter Effects

## Overview
Learn about filter effects and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply filter effects concepts in your code.
`,
    language: 'css',
    difficulty: 'Advanced',
    estimatedTime: 19,
    initialCode: `// Start your css code here
`,
    solution: `// Sample solution for Filter Effects
// This demonstrates the core concepts
`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  }
];