import { Lesson } from '../courses'

export const htmlLessons: Lesson[] = [
  {
    id: 'html-1',
    title: 'HTML Basics - Your First Web Page',
    description: 'Learn HTML structure and create your first webpage',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Welcome to HTML!

HTML (HyperText Markup Language) is the foundation of every website.

## Basic Structure:
\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
\`\`\`

## Key Elements:
- \`<!DOCTYPE html>\`: Declares HTML5
- \`<html>\`: Root element
- \`<head>\`: Metadata
- \`<body>\`: Visible content

Create a complete HTML page!`,
    initialCode: `<!-- Create a complete HTML page -->
<!DOCTYPE html>
<html>
  <head>
    
  </head>
  <body>
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>This is my first HTML page!</p>
  </body>
</html>`,
    hints: ['Add a title in <head>', 'Add heading in <body>', 'Add a paragraph'],
    testCases: [
      { name: 'Has HTML structure', test: (code) => code.includes('<!DOCTYPE html>') && code.includes('<html>'), errorMessage: 'Include <!DOCTYPE html> and <html> tags' },
      { name: 'Has head section', test: (code) => code.includes('<head>') && code.includes('<title>'), errorMessage: 'Add <head> with <title>' },
      { name: 'Has body with content', test: (code) => code.includes('<body>') && /<h[1-6]>/.test(code), errorMessage: 'Add <body> with a heading' },
      { name: 'Includes paragraph', test: (code) => code.includes('<p>'), errorMessage: 'Add at least one paragraph' }
    ]
  },
  {
    id: 'html-2',
    title: 'Headings and Text Formatting',
    description: 'Master HTML headings and text elements',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# HTML Headings & Text

## Heading Hierarchy:
\`\`\`html
<h1>Main Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>
<h4>Minor Heading</h4>
\`\`\`

## Text Elements:
\`\`\`html
<p>Paragraph text</p>
<strong>Bold text</strong>
<em>Italic text</em>
<br> Line break
\`\`\`

Create a blog post with proper hierarchy!`,
    initialCode: `<!DOCTYPE html>
<html>
  <body>
    <!-- Create a blog post about technology -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <body>
    <h1>The Future of Technology</h1>
    <h2>Introduction</h2>
    <p>Technology is <strong>rapidly evolving</strong> every day.</p>
    <h2>Key Trends</h2>
    <h3>Artificial Intelligence</h3>
    <p><em>AI</em> is transforming industries.</p>
  </body>
</html>`,
    hints: ['Use h1 for main title', 'Use h2 for sections', 'Use <strong> and <em> for emphasis'],
    testCases: [
      { name: 'Has main heading', test: (code) => code.includes('<h1>'), errorMessage: 'Include an <h1> heading' },
      { name: 'Has subheadings', test: (code) => code.includes('<h2>') || code.includes('<h3>'), errorMessage: 'Add <h2> or <h3> subheadings' },
      { name: 'Has paragraphs', test: (code) => (code.match(/<p>/g) || []).length >= 2, errorMessage: 'Include at least 2 paragraphs' },
      { name: 'Uses text formatting', test: (code) => code.includes('<strong>') || code.includes('<em>'), errorMessage: 'Use <strong> or <em> for emphasis' }
    ]
  },
  {
    id: 'html-3',
    title: 'Links and Navigation',
    description: 'Create hyperlinks and navigation menus',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# HTML Links

## Creating Links:
\`\`\`html
<a href="https://example.com">Link Text</a>
<a href="about.html">About Page</a>
<a href="#section">Jump to Section</a>
<a href="https://google.com" target="_blank">New Tab</a>
\`\`\`

## Navigation Menu:
\`\`\`html
<nav>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
</nav>
\`\`\`

Build a navigation system!`,
    initialCode: `<!DOCTYPE html>
<html>
  <body>
    <h1>My Website</h1>
    <!-- Create a navigation menu with 4 links -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <body>
    <h1>My Website</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="services.html">Services</a>
      <a href="contact.html">Contact</a>
    </nav>
  </body>
</html>`,
    hints: ['Use <nav> for navigation', 'Each link needs href attribute', 'Use <a> tag for links'],
    testCases: [
      { name: 'Has navigation', test: (code) => code.includes('<nav>'), errorMessage: 'Use <nav> element for navigation' },
      { name: 'Has multiple links', test: (code) => (code.match(/<a href="/g) || []).length >= 3, errorMessage: 'Create at least 3 links with href attributes' },
      { name: 'Links have text', test: (code) => /<a[^>]*>[^<]+<\/a>/.test(code), errorMessage: 'Links should have descriptive text' },
      { name: 'Proper structure', test: (code) => code.includes('</nav>'), errorMessage: 'Close the </nav> tag' }
    ]
  },
  {
    id: 'html-4',
    title: 'Images and Media',
    description: 'Add images to your webpages',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# HTML Images

## Image Syntax:
\`\`\`html
<img src="photo.jpg" alt="Description">
<img src="logo.png" alt="Company Logo" width="200">
\`\`\`

## Important Attributes:
- **src**: Image file path
- **alt**: Description (required for accessibility!)
- **width/height**: Dimensions

Always include alt text!`,
    initialCode: `<!DOCTYPE html>
<html>
  <body>
    <h1>Photo Gallery</h1>
    <!-- Add 3 images with alt text -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <body>
    <h1>Photo Gallery</h1>
    <img src="sunset.jpg" alt="Beautiful sunset over mountains" width="400">
    <img src="city.jpg" alt="Night city skyline" width="400">
    <img src="nature.jpg" alt="Forest landscape" width="400">
  </body>
</html>`,
    hints: ['Use <img> tag', 'Always add alt attribute', 'Add src with filename'],
    testCases: [
      { name: 'Has images', test: (code) => (code.match(/<img/g) || []).length >= 2, errorMessage: 'Add at least 2 images' },
      { name: 'Images have src', test: (code) => (code.match(/src="/g) || []).length >= 2, errorMessage: 'All images need src attribute' },
      { name: 'Images have alt', test: (code) => (code.match(/alt="/g) || []).length >= 2, errorMessage: 'All images must have alt text for accessibility' },
      { name: 'Alt is descriptive', test: (code) => /alt="[^"]{5,}"/.test(code), errorMessage: 'Alt text should be descriptive (5+ chars)' }
    ]
  },
  {
    id: 'html-5',
    title: 'Lists - Ordered and Unordered',
    description: 'Create bullet and numbered lists',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# HTML Lists

## Unordered Lists:
\`\`\`html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
\`\`\`

## Ordered Lists:
\`\`\`html
<ol>
  <li>First</li>
  <li>Second</li>
</ol>
\`\`\`

Create shopping and todo lists!`,
    initialCode: `<!DOCTYPE html>
<html>
  <body>
    <h2>Shopping List</h2>
    <!-- Unordered list -->
    
    <h2>Steps to Success</h2>
    <!-- Ordered list -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <body>
    <h2>Shopping List</h2>
    <ul>
      <li>Milk</li>
      <li>Bread</li>
      <li>Eggs</li>
    </ul>
    
    <h2>Steps to Success</h2>
    <ol>
      <li>Set goals</li>
      <li>Make a plan</li>
      <li>Take action</li>
    </ol>
  </body>
</html>`,
    hints: ['<ul> for unordered', '<ol> for ordered', '<li> for each item'],
    testCases: [
      { name: 'Has unordered list', test: (code) => code.includes('<ul>') && code.includes('</ul>'), errorMessage: 'Create an unordered list with <ul>' },
      { name: 'Has ordered list', test: (code) => code.includes('<ol>') && code.includes('</ol>'), errorMessage: 'Create an ordered list with <ol>' },
      { name: 'Has list items', test: (code) => (code.match(/<li>/g) || []).length >= 5, errorMessage: 'Add at least 5 list items total' },
      { name: 'Proper nesting', test: (code) => /<ul>[sS]*<li>/.test(code) && /<ol>[sS]*<li>/.test(code), errorMessage: '<li> items must be inside <ul> or <ol>' }
    ]
  }
]
