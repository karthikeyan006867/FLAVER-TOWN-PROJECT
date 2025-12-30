import { Lesson, TestCase } from '../courses'

export const htmlLessons: Lesson[] = [
  // SECTION 1: BASICS (Lessons 1-5)
  {
    id: 'html-1',
    title: 'Your First HTML Page',
    description: 'Learn the basic structure of an HTML document',
    content: `# Your First HTML Page

## What is HTML?
HTML (HyperText Markup Language) is the backbone of every website. It's not a programming language—it's a markup language that tells browsers how to structure content.

## Why Learn HTML?
- **Foundation of Web Development**: Every website uses HTML
- **Universal**: Works on any device with a browser
- **Career Essential**: Required for web development, design, and digital marketing
- **Easy to Start**: See results immediately in your browser

## How HTML Works
HTML uses "tags" (written in angle brackets) to define elements. Most tags come in pairs: an opening tag and a closing tag.

## Basic Structure Explained
\`\`\`html
<!DOCTYPE html>      <!-- Tells browser this is HTML5 -->
<html>               <!-- Root element, contains everything -->
  <head>             <!-- Invisible info: title, settings -->
    <title>My Page</title>  <!-- Shows in browser tab -->
  </head>
  <body>             <!-- Visible content goes here -->
    <h1>Hello World!</h1>   <!-- Heading level 1 (largest) -->
  </body>
</html>
\`\`\`

## Real-World Use
Every page you visit—Google, Facebook, YouTube—uses this exact structure!

## Your Turn: Experiment!
**Task:** Create a page with title "My First Page" and heading "Welcome to CodeMaster!"
**Try Changing:**
- The title text (watch the browser tab change!)
- Add more text inside the body
- Try multiple h1 tags—what happens?`,
    language: 'html',
    difficulty: 'Beginner',
    estimatedTime: 10,
    initialCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <!-- Add title here -->\n  </head>\n  <body>\n    <!-- Add h1 here -->\n  </body>\n</html>`,
    solution: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>My First Page</title>\n  </head>\n  <body>\n    <h1>Welcome to CodeMaster!</h1>\n  </body>\n</html>`,
    expectedOutput: 'Welcome to CodeMaster!',
    hints: ['Title goes in head', 'h1 is the largest heading', 'Close all tags'],
    testCases: [
      {
        name: 'Has DOCTYPE declaration',
        test: (code) => code.toLowerCase().includes('<!doctype html>'),
        errorMessage: 'Your HTML must start with <!DOCTYPE html>'
      },
      {
        name: 'Has title tag in head',
        test: (code) => /<head>[\s\S]*<title>[\s\S]*<\/title>[\s\S]*<\/head>/i.test(code),
        errorMessage: 'Add a <title> tag inside the <head> section'
      },
      {
        name: 'Title contains "My First Page"',
        test: (code) => /<title>My First Page<\/title>/i.test(code),
        errorMessage: 'Title should say "My First Page"'
      },
      {
        name: 'Has h1 tag in body',
        test: (code) => /<body>[\s\S]*<h1>[\s\S]*<\/h1>[\s\S]*<\/body>/i.test(code),
        errorMessage: 'Add an <h1> tag inside the <body> section'
      },
      {
        name: 'H1 contains "Welcome to CodeMaster!"',
        test: (code) => /<h1>Welcome to CodeMaster!<\/h1>/i.test(code),
        errorMessage: 'H1 should say "Welcome to CodeMaster!"'
      }
    ]
  },
  {
    id: 'html-2',
    title: 'Headings and Paragraphs',
    description: 'Structure text content properly',
    content: `# Headings (h1-h6) and Paragraphs

\`\`\`html
<h1>Main Title</h1>
<h2>Subtitle</h2>
<p>This is a paragraph.</p>
\`\`\`

**Task:** Create h1 "Learning HTML", h2 "Why It Matters", and a paragraph.`,
    language: 'html',
    difficulty: 'Beginner',
    estimatedTime: 8,
    initialCode: `<!DOCTYPE html>\n<html>\n<body>\n  <!-- Add headings and paragraph -->\n</body>\n</html>`,
    solution: `<!DOCTYPE html>\n<html>\n<body>\n  <h1>Learning HTML</h1>\n  <h2>Why It Matters</h2>\n  <p>HTML is the foundation of web development.</p>\n</body>\n</html>`,
    hints: ['Use h1, then h2, then p', 'Write any text in paragraph'],
    testCases: [
      {
        name: 'Has h1 tag',
        test: (code) => /<h1>[\s\S]*<\/h1>/i.test(code),
        errorMessage: 'Add an <h1> heading tag'
      },
      {
        name: 'H1 contains "Learning HTML"',
        test: (code) => /<h1>Learning HTML<\/h1>/i.test(code),
        errorMessage: 'H1 should say "Learning HTML"'
      },
      {
        name: 'Has h2 tag',
        test: (code) => /<h2>[\s\S]*<\/h2>/i.test(code),
        errorMessage: 'Add an <h2> heading tag'
      },
      {
        name: 'H2 contains "Why It Matters"',
        test: (code) => /<h2>Why It Matters<\/h2>/i.test(code),
        errorMessage: 'H2 should say "Why It Matters"'
      },
      {
        name: 'Has paragraph tag',
        test: (code) => /<p>[\s\S]+<\/p>/i.test(code),
        errorMessage: 'Add a <p> paragraph tag with some text'
      }
    ]
  },
  {
    id: 'html-3',
    title: 'Text Formatting',
    description: 'Make text bold, italic, and highlighted',
    content: `# Text Formatting Tags

\`\`\`html
<strong>Bold</strong>
<em>Italic</em>
<mark>Highlighted</mark>
\`\`\`

**Task:** Create paragraph with your name in bold, favorite language in italic, and "start today" highlighted.`,
    language: 'html',
    difficulty: 'Beginner',
    estimatedTime: 10,
    initialCode: `<p>\n  <!-- Format your text here -->\n</p>`,
    solution: `<p>\n  My name is <strong>Alex</strong> and I love <em>JavaScript</em>. <mark>Start today!</mark>\n</p>`,
    hints: ['strong = bold', 'em = italic', 'mark = highlight'],
    testCases: [
      {
        name: 'Has paragraph tag',
        test: (code) => /<p>[\s\S]*<\/p>/i.test(code),
        errorMessage: 'Wrap your content in <p> tags'
      },
      {
        name: 'Has strong tag for bold text',
        test: (code) => /<strong>[\s\S]+<\/strong>/i.test(code),
        errorMessage: 'Use <strong> tag to make text bold'
      },
      {
        name: 'Has em tag for italic text',
        test: (code) => /<em>[\s\S]+<\/em>/i.test(code),
        errorMessage: 'Use <em> tag to make text italic'
      },
      {
        name: 'Has mark tag for highlighted text',
        test: (code) => /<mark>[\s\S]+<\/mark>/i.test(code),
        errorMessage: 'Use <mark> tag to highlight text'
      },
      {
        name: 'Mark tag contains "start today" or "Start today"',
        test: (code) => /<mark>Start today!?<\/mark>/i.test(code),
        errorMessage: 'Highlight "Start today!" using the <mark> tag'
      }
    ]
  },
  {
    id: 'html-4',
    title: 'Lists',
    description: 'Create bullet points and numbered lists',
    content: `# Unordered (ul) and Ordered (ol) Lists

\`\`\`html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol>
  <li>Step 1</li>
  <li>Step 2</li>
</ol>
\`\`\`

**Task:** Create unordered list of 3 languages and ordered list of 3 steps to learn.`,
    language: 'html',
    difficulty: 'Beginner',
    estimatedTime: 12,
    initialCode: `<h2>Languages</h2>\n<!-- unordered list -->\n\n<h2>Steps</h2>\n<!-- ordered list -->`,
    solution: `<h2>Languages</h2>\n<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>\n\n<h2>Steps</h2>\n<ol>\n  <li>Learn basics</li>\n  <li>Build projects</li>\n  <li>Practice daily</li>\n</ol>`,
    hints: ['ul for bullets', 'ol for numbers', 'li for each item'],
    testCases: [
      {
        name: 'Has unordered list (ul)',
        test: (code) => /<ul>[\s\S]*<\/ul>/i.test(code),
        errorMessage: 'Create an unordered list using <ul> tags'
      },
      {
        name: 'Has ordered list (ol)',
        test: (code) => /<ol>[\s\S]*<\/ol>/i.test(code),
        errorMessage: 'Create an ordered list using <ol> tags'
      },
      {
        name: 'Unordered list has at least 3 items',
        test: (code) => {
          const ulMatch = code.match(/<ul>([\s\S]*?)<\/ul>/i)
          if (!ulMatch) return false
          const liCount = (ulMatch[1].match(/<li>/gi) || []).length
          return liCount >= 3
        },
        errorMessage: 'Add at least 3 <li> items in the unordered list'
      },
      {
        name: 'Ordered list has at least 3 items',
        test: (code) => {
          const olMatch = code.match(/<ol>([\s\S]*?)<\/ol>/i)
          if (!olMatch) return false
          const liCount = (olMatch[1].match(/<li>/gi) || []).length
          return liCount >= 3
        },
        errorMessage: 'Add at least 3 <li> items in the ordered list'
      }
    ]
  },
  {
    id: 'html-5',
    title: 'Links',
    description: 'Connect pages with hyperlinks',
    content: `# Links (Anchor Tags)

## What Are Links?
Links (anchor tags) are the foundation of the web—they connect pages together! The "a" stands for "anchor."

## Why Links Matter
- **Navigation**: Move users between pages
- **SEO**: Search engines follow links to index your site
- **User Experience**: Guide visitors through your content
- **External Resources**: Connect to other websites, emails, files

## How Links Work
When you click a link, the browser sends a request to the URL in the \`href\` attribute and loads that page.

## Types of Links
\`\`\`html
<!-- External link (different website) -->
<a href="https://google.com">Visit Google</a>

<!-- Internal link (same website) -->
<a href="about.html">About Page</a>

<!-- Anchor link (same page, jump to section) -->
<a href="#section">Jump to Section</a>

<!-- Email link (opens email client) -->
<a href="mailto:hi@email.com">Email Me</a>

<!-- Open in new tab -->
<a href="https://example.com" target="_blank">New Tab</a>
\`\`\`

## Real-World Use
Every navigation menu on websites like YouTube, Amazon, Netflix uses anchor tags!

## Your Turn: Experiment!
**Task:** Create a link to your favorite website that opens in a new tab.
**Try These:**
1. Remove \`target="_blank"\`—what changes?
2. Change the link text but keep the same href
3. Create an email link
4. Make a link with \`href="#"\`—useful for JavaScript later!`,
    language: 'html',
    difficulty: 'Beginner',
    estimatedTime: 10,
    initialCode: `<nav>\n  <!-- Add 3 links here -->\n</nav>`,
    solution: `<nav>\n  <a href="https://google.com" target="_blank">Google</a>\n  <a href="about.html">About</a>\n  <a href="mailto:contact@codemaster.com">Contact</a>\n</nav>`,
    expectedOutput: 'Google',
    hints: ['href for URL', 'target="_blank" for new tab', 'mailto: for email'],
    testCases: [
      {
        name: 'Has nav tag',
        test: (code) => /<nav>[\s\S]*<\/nav>/i.test(code),
        errorMessage: 'Wrap your links in a <nav> tag'
      },
      {
        name: 'Has at least 3 anchor tags',
        test: (code) => (code.match(/<a /gi) || []).length >= 3,
        errorMessage: 'Add at least 3 <a> anchor tags'
      },
      {
        name: 'Has external link with target="_blank"',
        test: (code) => /<a\s+[^>]*target="_blank"[^>]*>/i.test(code) || /<a\s+[^>]*target='_blank'[^>]*>/i.test(code),
        errorMessage: 'Add target="_blank" to make a link open in a new tab'
      },
      {
        name: 'All anchor tags have href attribute',
        test: (code) => {
          const aTagCount = (code.match(/<a /gi) || []).length
          const hrefCount = (code.match(/<a\s+[^>]*href=/gi) || []).length
          return aTagCount === hrefCount
        },
        errorMessage: 'All <a> tags must have an href attribute'
      }
    ]
  },

  // SECTION 2: INTERMEDIATE (Lessons 6-15)
  {
    id: 'html-6',
    title: 'Images',
    description: 'Add images to your pages',
    content: `# Images with <img> tag

\`\`\`html
<img src="photo.jpg" alt="Description" width="300">
\`\`\`

**Important:** Always include alt text for accessibility!

**Task:** Add image from "https://via.placeholder.com/400" with alt text.`,
    language: 'html',
    difficulty: 'Beginner',
    estimatedTime: 8,
    initialCode: `<h1>My Image</h1>\n<!-- Add image here -->`,
    solution: `<h1>My Image</h1>\n<img src="https://via.placeholder.com/400" alt="Placeholder image" width="400">`,
    hints: ['img is self-closing', 'Always add alt', 'src is the image URL'],
    testCases: [
      {
        name: 'Has img tag',
        test: (code) => /<img\s+[^>]*>/i.test(code),
        errorMessage: 'Add an <img> tag'
      },
      {
        name: 'Has src attribute',
        test: (code) => /<img\s+[^>]*src=/i.test(code),
        errorMessage: 'Image must have a src attribute'
      },
      {
        name: 'Has alt attribute',
        test: (code) => /<img\s+[^>]*alt=/i.test(code),
        errorMessage: 'Image must have an alt attribute for accessibility'
      },
      {
        name: 'Uses placeholder URL',
        test: (code) => /https:\/\/via\.placeholder\.com\/400/i.test(code),
        errorMessage: 'Use the placeholder URL: https://via.placeholder.com/400'
      }
    ]
  },
  {
    id: 'html-7',
    title: 'Forms - Input Fields',
    description: 'Collect user input with forms',
    content: `# HTML Forms

\`\`\`html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  
  <button type="submit">Submit</button>
</form>
\`\`\`

**Task:** Create a form with name and email inputs.`,
    language: 'html',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `<form>\n  <!-- Add labels and inputs -->\n  \n</form>`,
    solution: `<form>\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name">\n  \n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email">\n  \n  <button type="submit">Submit</button>\n</form>`,
    hints: ['label "for" matches input "id"', 'Use type="email" for email', 'button inside form'],
    testCases: [
      {
        name: 'Has form tag',
        test: (code) => /<form>/i.test(code),
        errorMessage: 'Wrap inputs in a <form> tag'
      },
      {
        name: 'Has text input for name',
        test: (code) => /<input\s+[^>]*type="text"[^>]*>/i.test(code),
        errorMessage: 'Add an input with type="text" for name'
      },
      {
        name: 'Has email input',
        test: (code) => /<input\s+[^>]*type="email"[^>]*>/i.test(code),
        errorMessage: 'Add an input with type="email"'
      },
      {
        name: 'Has submit button',
        test: (code) => /<button[^>]*type="submit"[^>]*>/i.test(code),
        errorMessage: 'Add a button with type="submit"'
      },
      {
        name: 'Has labels',
        test: (code) => (code.match(/<label/gi) || []).length >= 2,
        errorMessage: 'Add labels for both inputs'
      }
    ]
  },
  {
    id: 'html-8',
    title: 'Forms - Radio and Checkbox',
    description: 'Create selection inputs',
    content: `# Radio Buttons and Checkboxes

\`\`\`html
<!-- Radio (choose one) -->
<input type="radio" name="level" value="beginner" id="beg">
<label for="beg">Beginner</label>

<!-- Checkbox (choose multiple) -->
<input type="checkbox" name="lang" value="html" id="html">
<label for="html">HTML</label>
\`\`\`

**Task:** Create radio buttons for skill level and checkboxes for languages.`,
    language: 'html',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `<form>\n  <p>Skill Level:</p>\n  <!-- Add radio buttons -->\n  \n  <p>Languages:</p>\n  <!-- Add checkboxes -->\n</form>`,
    solution: `<form>\n  <p>Skill Level:</p>\n  <input type="radio" name="level" value="beginner" id="beg">\n  <label for="beg">Beginner</label>\n  <input type="radio" name="level" value="advanced" id="adv">\n  <label for="adv">Advanced</label>\n  \n  <p>Languages:</p>\n  <input type="checkbox" name="lang" value="html" id="html">\n  <label for="html">HTML</label>\n  <input type="checkbox" name="lang" value="css" id="css">\n  <label for="css">CSS</label>\n</form>`,
    hints: ['Same name for radio group', 'Different names for checkboxes', 'id for label connection'],
    testCases: [
      {
        name: 'Has radio buttons',
        test: (code) => (code.match(/<input\s+[^>]*type="radio"/gi) || []).length >= 2,
        errorMessage: 'Add at least 2 radio buttons'
      },
      {
        name: 'Radio buttons have same name',
        test: (code) => {
          const radioMatches = code.match(/<input\s+[^>]*type="radio"[^>]*>/gi) || []
          if (radioMatches.length < 2) return false
          const names = radioMatches.map(r => {
            const match = r.match(/name="([^"]+)"/i)
            return match ? match[1] : ''
          })
          return names[0] === names[1]
        },
        errorMessage: 'Radio buttons should have the same name attribute'
      },
      {
        name: 'Has checkboxes',
        test: (code) => (code.match(/<input\s+[^>]*type="checkbox"/gi) || []).length >= 2,
        errorMessage: 'Add at least 2 checkboxes'
      }
    ]
  },
  {
    id: 'html-9',
    title: 'Tables',
    description: 'Display data in tables',
    content: `# HTML Tables

\`\`\`html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>25</td>
  </tr>
</table>
\`\`\`

**Task:** Create a table with 2 columns (Language, Difficulty) and 3 rows of data.`,
    language: 'html',
    difficulty: 'Intermediate',
    estimatedTime: 12,
    initialCode: `<table>\n  <!-- Add table header and rows -->\n</table>`,
    solution: `<table>\n  <tr>\n    <th>Language</th>\n    <th>Difficulty</th>\n  </tr>\n  <tr>\n    <td>HTML</td>\n    <td>Easy</td>\n  </tr>\n  <tr>\n    <td>JavaScript</td>\n    <td>Medium</td>\n  </tr>\n</table>`,
    hints: ['tr = table row', 'th = header cell', 'td = data cell'],
    testCases: [
      {
        name: 'Has table tag',
        test: (code) => /<table>/i.test(code),
        errorMessage: 'Wrap content in a <table> tag'
      },
      {
        name: 'Has table rows',
        test: (code) => (code.match(/<tr>/gi) || []).length >= 3,
        errorMessage: 'Add at least 3 table rows (1 header + 2 data)'
      },
      {
        name: 'Has header cells',
        test: (code) => (code.match(/<th>/gi) || []).length >= 2,
        errorMessage: 'Add header cells with <th> tags'
      },
      {
        name: 'Has data cells',
        test: (code) => (code.match(/<td>/gi) || []).length >= 2,
        errorMessage: 'Add data cells with <td> tags'
      }
    ]
  },
  {
    id: 'html-10',
    title: 'Semantic HTML',
    description: 'Use meaningful tags for better structure',
    content: `# Semantic HTML5 Tags

Instead of generic <div>, use meaningful tags:

\`\`\`html
<header>Top of page</header>
<nav>Navigation</nav>
<main>Main content</main>
<article>Article content</article>
<section>Section of content</section>
<aside>Sidebar</aside>
<footer>Bottom of page</footer>
\`\`\`

**Benefits:** Better SEO, accessibility, code readability

**Task:** Create a page structure with header, nav, main, and footer.`,
    language: 'html',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `<!DOCTYPE html>\n<html>\n<body>\n  <!-- Add semantic structure -->\n</body>\n</html>`,
    solution: `<!DOCTYPE html>\n<html>\n<body>\n  <header>\n    <h1>My Website</h1>\n  </header>\n  <nav>\n    <a href="#home">Home</a>\n    <a href="#about">About</a>\n  </nav>\n  <main>\n    <h2>Welcome</h2>\n    <p>This is the main content.</p>\n  </main>\n  <footer>\n    <p>&copy; 2025 My Site</p>\n  </footer>\n</body>\n</html>`,
    hints: ['header at top', 'nav for links', 'main for content', 'footer at bottom'],
    testCases: [
      {
        name: 'Has header tag',
        test: (code) => /<header>/i.test(code),
        errorMessage: 'Add a <header> tag'
      },
      {
        name: 'Has nav tag',
        test: (code) => /<nav>/i.test(code),
        errorMessage: 'Add a <nav> tag for navigation'
      },
      {
        name: 'Has main tag',
        test: (code) => /<main>/i.test(code),
        errorMessage: 'Add a <main> tag for main content'
      },
      {
        name: 'Has footer tag',
        test: (code) => /<footer>/i.test(code),
        errorMessage: 'Add a <footer> tag'
      }
    ]
  },

  // SECTION 2: INTERMEDIATE HTML (Lessons 11-25)
  {
    id: 'html-11',
    title: 'HTML Entities and Special Characters',
    description: 'Display special characters and symbols',
    content: `# HTML Entities

Special characters need HTML entities to display properly.

## Common Entities:
\`\`\`html
&lt; = <
&gt; = >
&amp; = &
&copy; = ©
&nbsp; = non-breaking space
&quot; = "
\`\`\`

**Task:** Display "HTML & CSS" with copyright symbol.`,
    language: 'html',
    difficulty: 'Beginner',
    estimatedTime: 10,
    initialCode: `<p><!-- Add HTML & CSS with copyright --></p>`,
    solution: `<p>HTML &amp; CSS &copy; 2025</p>`,
    hints: ['&amp; for &', '&copy; for ©', 'Use entities inside tags'],
    testCases: [
      {
        name: 'Has paragraph tag',
        test: (code) => /<p>/i.test(code),
        errorMessage: 'Use a <p> tag'
      },
      {
        name: 'Uses &amp; entity',
        test: (code) => /&amp;/i.test(code),
        errorMessage: 'Use &amp; HTML entity for the & symbol'
      },
      {
        name: 'Uses &copy; entity',
        test: (code) => /&copy;/i.test(code),
        errorMessage: 'Use &copy; HTML entity for the © symbol'
      }
    ]
  },
  {
    id: 'html-12',
    title: 'Divs and Spans',
    description: 'Structure content with containers',
    content: `# Div and Span Elements

## Div (Block Element):
\`\`\`html
<div class="container">
  <h2>Section Title</h2>
  <p>Content here</p>
</div>
\`\`\`

## Span (Inline Element):
\`\`\`html
<p>This is <span class="highlight">important</span> text.</p>
\`\`\`

**Task:** Create div with class "card" containing heading and paragraph with highlighted word.`,
    language: 'html',
    difficulty: 'Beginner',
    estimatedTime: 12,
    initialCode: `<!-- Create your div structure -->`,
    solution: `<div class="card">\n  <h2>Welcome</h2>\n  <p>This is <span class="highlight">amazing</span> content!</p>\n</div>`,
    hints: ['div for blocks', 'span for inline', 'Use class attribute'],
    testCases: [
      {
        name: 'Has div tag',
        test: (code) => /<div/i.test(code),
        errorMessage: 'Add a <div> tag'
      },
      {
        name: 'Div has class attribute',
        test: (code) => /<div\s+[^>]*class=/i.test(code),
        errorMessage: 'Add a class attribute to the div'
      },
      {
        name: 'Has span tag',
        test: (code) => /<span/i.test(code),
        errorMessage: 'Add a <span> tag'
      },
      {
        name: 'Has heading',
        test: (code) => /<h[1-6]>/i.test(code),
        errorMessage: 'Add a heading tag'
      }
    ]
  },
  {
    id: 'html-13',
    title: 'HTML Comments',
    description: 'Add notes to your code',
    content: `# HTML Comments

Comments help document your code.

## Syntax:
\`\`\`html
<!-- This is a comment -->

<!-- 
  Multi-line
  comment
-->
\`\`\`

Comments are not displayed in the browser.

**Task:** Add comments to describe sections.`,
    language: 'html',
    difficulty: 'Beginner',
    estimatedTime: 8,
    initialCode: `<header>\n  <h1>My Site</h1>\n</header>\n\n<main>\n  <p>Content</p>\n</main>`,
    solution: `<!-- Site Header -->\n<header>\n  <h1>My Site</h1>\n</header>\n\n<!-- Main Content Area -->\n<main>\n  <p>Content</p>\n</main>`,
    hints: ['<!-- comment -->', 'Describe sections', 'Help other developers'],
    testCases: [
      {
        name: 'Has HTML comments',
        test: (code) => /<!--[\s\S]*-->/i.test(code),
        errorMessage: 'Add HTML comments using <!-- and -->'
      },
      {
        name: 'Has at least 2 comments',
        test: (code) => (code.match(/<!--/g) || []).length >= 2,
        errorMessage: 'Add at least 2 comments'
      },
      {
        name: 'Has header tag',
        test: (code) => /<header>/i.test(code),
        errorMessage: 'Keep the <header> tag'
      },
      {
        name: 'Has main tag',
        test: (code) => /<main>/i.test(code),
        errorMessage: 'Keep the <main> tag'
      }
    ]
  },
  {
    id: 'html-14',
    title: 'HTML Attributes',
    description: 'Add properties to HTML elements',
    content: `# HTML Attributes

Attributes provide additional information about elements.

## Common Attributes:
\`\`\`html
<a href="https://example.com" target="_blank">Link</a>
<img src="image.jpg" alt="Description">
<div id="unique" class="box large">Content</div>
<input type="text" placeholder="Enter name" required>
\`\`\`

**Task:** Create link with href, target, and title attributes.`,
    language: 'html',
    difficulty: 'Beginner',
    estimatedTime: 12,
    initialCode: `<!-- Create a link to google.com, opens in new tab, with title -->`,
    solution: `<a href="https://google.com" target="_blank" title="Visit Google">Google</a>`,
    hints: ['href for URL', 'target="_blank" for new tab', 'title shows on hover'],
    testCases: [
      {
        name: 'Has anchor tag',
        test: (code) => /<a\s+[^>]*>/i.test(code),
        errorMessage: 'Add an <a> tag'
      },
      {
        name: 'Has href attribute',
        test: (code) => /<a\s+[^>]*href=/i.test(code),
        errorMessage: 'Add href attribute to the link'
      },
      {
        name: 'Has target="_blank"',
        test: (code) => /target="_blank"/i.test(code),
        errorMessage: 'Add target="_blank" to open link in new tab'
      },
      {
        name: 'Has title attribute',
        test: (code) => /<a\s+[^>]*title=/i.test(code),
        errorMessage: 'Add title attribute for tooltip'
      }
    ]
  },
  {
    id: 'html-15',
    title: 'Nested Lists',
    description: 'Create multi-level lists',
    content: `# Nested Lists

Lists can contain other lists.

## Example:
\`\`\`html
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Python</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
\`\`\`

**Task:** Create nested list of programming topics.`,
    language: 'html',
    difficulty: 'Beginner',
    estimatedTime: 15,
    initialCode: `<ul>\n  <!-- Add Web Development with nested list of HTML, CSS, JS -->\n</ul>`,
    solution: `<ul>\n  <li>Web Development\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n      <li>JavaScript</li>\n      <li>TypeScript</li>\n    </ul>\n  </li>\n  <li>Backend\n    <ul>\n      <li>Python</li>\n      <li>Node.js</li>\n    </ul>\n  </li>\n</ul>`,
    hints: ['Put ul inside li', 'Indent for readability', 'Can nest multiple levels'],
    testCases: [
      {
        name: 'Has outer ul tag',
        test: (code) => /<ul>/i.test(code),
        errorMessage: 'Add a <ul> tag'
      },
      {
        name: 'Has nested ul tag',
        test: (code) => (code.match(/<ul>/gi) || []).length >= 2,
        errorMessage: 'Add a nested <ul> inside an <li>'
      },
      {
        name: 'Has list items',
        test: (code) => (code.match(/<li>/gi) || []).length >= 4,
        errorMessage: 'Add at least 4 list items total'
      }
    ]
  },
  {
    id: 'html-16',
    title: 'Description Lists',
    description: 'Create term-definition pairs',
    content: `# Description Lists

Use for terms and definitions.

## Syntax:
\`\`\`html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
\`\`\`

**Task:** Create description list for 3 programming terms.`,
    language: 'html',
    difficulty: 'Beginner',
    estimatedTime: 12,
    initialCode: `<dl>\n  <!-- Add terms and definitions -->\n</dl>`,
    solution: `<dl>\n  <dt>Variable</dt>\n  <dd>A container for storing data values</dd>\n  \n  <dt>Function</dt>\n  <dd>A reusable block of code</dd>\n  \n  <dt>Array</dt>\n  <dd>A collection of items</dd>\n</dl>`,
    hints: ['dl = description list', 'dt = term', 'dd = definition']
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
    id: 'html-17',
    title: 'Blockquote and Cite',
    description: 'Quote text from other sources',
    content: `# Quotes and Citations

## Blockquote:
\`\`\`html
<blockquote cite="https://source.com">
  "The only way to do great work is to love what you do."
  <cite>- Steve Jobs</cite>
</blockquote>
\`\`\`

## Inline Quote:
\`\`\`html
<p>As Einstein said, <q>Imagination is more important than knowledge.</q></p>
\`\`\`

**Task:** Create blockquote with citation.`,
    language: 'html',
    difficulty: 'Beginner',
    estimatedTime: 10,
    initialCode: `<!-- Add a famous quote with blockquote and cite -->`,
    solution: `<blockquote>\n  "Code is like humor. When you have to explain it, it's bad."\n  <cite>- Cory House</cite>\n</blockquote>`,
    hints: ['blockquote for long quotes', 'cite for attribution', 'q for inline quotes']
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
    id: 'html-18',
    title: 'Preformatted Text and Code',
    description: 'Display code and preserve formatting',
    content: `# Preformatted Text

## Pre Tag:
\`\`\`html
<pre>
  Line 1
    Indented line 2
      More indent
</pre>
\`\`\`

## Code Tag:
\`\`\`html
<p>Use <code>console.log()</code> to print output.</p>

<pre><code>
function greet() {
  console.log("Hello!");
}
</code></pre>
\`\`\`

**Task:** Display code snippet with proper formatting.`,
    language: 'html',
    difficulty: 'Beginner',
    estimatedTime: 12,
    initialCode: `<!-- Display a code block -->`,
    solution: `<p>To declare a variable, use <code>let name = "value";</code></p>\n\n<pre><code>function add(a, b) {\n  return a + b;\n}</code></pre>`,
    hints: ['pre preserves spacing', 'code for code snippets', 'Combine for code blocks']    ,
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
    id: 'html-19',
    title: 'Abbreviations and Definitions',
    description: 'Mark up abbreviations and key terms',
    content: `# Abbreviations

## Abbr Tag:
\`\`\`html
<p>I love <abbr title="HyperText Markup Language">HTML</abbr>!</p>
\`\`\`

## Dfn Tag:
\`\`\`html
<p><dfn>Responsive Design</dfn> means adapting to screen sizes.</p>
\`\`\`

**Task:** Add abbreviations for HTML, CSS, and JS.`,
    language: 'html',
    difficulty: 'Beginner',
    estimatedTime: 10,
    initialCode: `<p><!-- Add sentence with HTML, CSS, JS abbreviations --></p>`,
    solution: `<p>Web development uses <abbr title="HyperText Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr>, <abbr title="JavaScript">JS</abbr>, and <abbr title="TypeScript">TS</abbr>.</p>`,
    hints: ['abbr with title attribute', 'title shows on hover', 'dfn for definitions']
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
    id: 'html-20',
    title: 'HTML5 Semantic Elements',
    description: 'Use modern semantic tags',
    content: `# HTML5 Semantic Elements

## New Elements:
\`\`\`html
<article>  - Self-contained content
<aside>    - Sidebar content
<figure>   - Images with captions
<figcaption> - Caption for figure
<time>     - Dates and times
<mark>     - Highlighted text
\`\`\`

**Task:** Create article with figure and figcaption.`,
    language: 'html',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `<article>\n  <!-- Add title, image with caption, and content -->\n</article>`,
    solution: `<article>\n  <h2>Learning HTML</h2>\n  <figure>\n    <img src="html-logo.png" alt="HTML5 Logo">\n    <figcaption>HTML5 brings semantic meaning</figcaption>\n  </figure>\n  <p>HTML5 introduced many new semantic elements.</p>\n  <time datetime="2025-12-24">December 24, 2025</time>\n</article>`,
    hints: ['article for content', 'figure wraps img', 'figcaption for caption', 'time for dates']
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
    id: 'html-21',
    title: 'Data Attributes',
    description: 'Store custom data in HTML',
    content: `# Data Attributes

Store custom data on elements.

## Syntax:
\`\`\`html
<div data-user-id="123" data-role="admin">User Info</div>
<button data-action="delete" data-id="456">Delete</button>
\`\`\`

## Access with JavaScript:
\`\`\`javascript
const div = document.querySelector('div');
console.log(div.dataset.userId); // "123"
console.log(div.dataset.role);   // "admin"
\`\`\`

**Task:** Create product div with data attributes.`,
    language: 'html',
    difficulty: 'Intermediate',
    estimatedTime: 12,
    initialCode: `<!-- Create product div with data-id, data-name, data-price -->`,
    solution: `<div class="product" data-id="101" data-name="Laptop" data-price="999">\n  <h3>Premium Laptop</h3>\n  <p>$999</p>\n</div>`,
    hints: ['data-* format', 'Use kebab-case', 'Access via dataset in JS']
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
    id: 'html-22',
    title: 'Meta Tags',
    description: 'Add metadata to your pages',
    content: `# Meta Tags

Provide metadata about the page.

## Common Meta Tags:
\`\`\`html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn web development">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="John Doe">
</head>
\`\`\`

**Task:** Add essential meta tags to head.`,
    language: 'html',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `<!DOCTYPE html>\n<html>\n<head>\n  <title>My Site</title>\n  <!-- Add meta tags -->\n</head>\n<body></body>\n</html>`,
    solution: `<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="Learn web development with interactive tutorials">\n  <meta name="keywords" content="HTML, CSS, JavaScript, TypeScript, Python">\n  <title>My Site</title>\n</head>\n<body></body>\n</html>`,
    hints: ['charset for encoding', 'viewport for responsive', 'description for SEO']
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
    id: 'html-23',
    title: 'HTML Audio',
    description: 'Embed audio in your pages',
    content: `# Audio Element

## Basic Audio:
\`\`\`html
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  <source src="song.ogg" type="audio/ogg">
  Your browser doesn't support audio.
</audio>
\`\`\`

## Attributes:
- **controls**: Show play/pause buttons
- **autoplay**: Start automatically
- **loop**: Repeat
- **muted**: Start muted

**Task:** Add audio with controls.`,
    language: 'html',
    difficulty: 'Intermediate',
    estimatedTime: 12,
    initialCode: `<!-- Add audio element with controls -->`,
    solution: `<audio controls>\n  <source src="music.mp3" type="audio/mpeg">\n  <source src="music.ogg" type="audio/ogg">\n  Your browser does not support the audio element.\n</audio>`,
    hints: ['audio tag with controls', 'Multiple sources for compatibility', 'Fallback text']
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
    id: 'html-24',
    title: 'HTML Video',
    description: 'Embed videos in your pages',
    content: `# Video Element

## Basic Video:
\`\`\`html
<video width="640" height="360" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  Your browser doesn't support video.
</video>
\`\`\`

## Attributes:
- **controls**: Show controls
- **autoplay**: Auto-start
- **loop**: Repeat
- **poster**: Thumbnail image

**Task:** Add video with poster and controls.`,
    language: 'html',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `<!-- Add video element -->`,
    solution: `<video width="640" height="360" controls poster="thumbnail.jpg">\n  <source src="tutorial.mp4" type="video/mp4">\n  <source src="tutorial.webm" type="video/webm">\n  Your browser does not support the video tag.\n</video>`,
    hints: ['video tag with dimensions', 'poster for thumbnail', 'Multiple formats']
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
    id: 'html-25',
    title: 'iFrame - Embedding Content',
    description: 'Embed external content',
    content: `# iFrame Element

Embed another webpage or content.

## Syntax:
\`\`\`html
<iframe 
  src="https://www.example.com"
  width="800"
  height="600"
  title="Description">
</iframe>
\`\`\`

## Common Uses:
- Embed YouTube videos
- Google Maps
- External widgets

**Task:** Embed a YouTube video.`,
    language: 'html',
    difficulty: 'Intermediate',
    estimatedTime: 12,
    initialCode: `<!-- Embed YouTube video using iframe -->`,
    solution: `<iframe \n  width="560" \n  height="315" \n  src="https://www.youtube.com/embed/dQw4w9WgXcQ" \n  title="YouTube video player" \n  frameborder="0" \n  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" \n  allowfullscreen>\n</iframe>`,
    hints: ['iframe src for URL', 'width and height', 'title for accessibility']
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

  // ADVANCED SECTION (Lessons 26-40)
  {
    id: 'html-26',
    title: 'HTML Canvas Basics',
    description: 'Draw graphics with canvas',
    content: `# Canvas Element

Draw graphics using JavaScript.

## HTML:
\`\`\`html
<canvas id="myCanvas" width="400" height="300"></canvas>
\`\`\`

## JavaScript:
\`\`\`javascript
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 200, 100);
\`\`\`

**Task:** Create canvas element.`,
    language: 'html',
    difficulty: 'Advanced',
    estimatedTime: 15,
    initialCode: `<!-- Add canvas with id and dimensions -->`,
    solution: `<canvas id="drawingCanvas" width="500" height="400" style="border: 1px solid black;">\n  Your browser does not support the canvas element.\n</canvas>`,
    hints: ['canvas tag with id', 'Set width and height', 'Fallback text']
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
    id: 'html-27',
    title: 'SVG Basics',
    description: 'Create scalable vector graphics',
    content: `# SVG - Scalable Vector Graphics

## Inline SVG:
\`\`\`html
<svg width="200" height="200">
  <circle cx="100" cy="100" r="80" fill="blue" />
  <rect x="50" y="50" width="100" height="100" fill="red" />
</svg>
\`\`\`

## Advantages:
- Scalable without quality loss
- Animatable with CSS/JS
- Accessible

**Task:** Create SVG with circle and rectangle.`,
    language: 'html',
    difficulty: 'Advanced',
    estimatedTime: 18,
    initialCode: `<!-- Create SVG with shapes -->`,
    solution: `<svg width="300" height="200">\n  <circle cx="150" cy="100" r="60" fill="purple" />\n  <rect x="100" y="50" width="100" height="100" fill="orange" opacity="0.7" />\n</svg>`,
    hints: ['svg container', 'circle with cx, cy, r', 'rect with x, y, width, height']
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
    id: 'html-28',
    title: 'Details and Summary',
    description: 'Create collapsible content',
    content: `# Details/Summary Elements

Create expandable/collapsible sections.

## Syntax:
\`\`\`html
<details>
  <summary>Click to expand</summary>
  <p>Hidden content goes here.</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</details>
\`\`\`

## Attributes:
- **open**: Expanded by default

**Task:** Create FAQ with details/summary.`,
    language: 'html',
    difficulty: 'Intermediate',
    estimatedTime: 12,
    initialCode: `<!-- Create FAQ item with details -->`,
    solution: `<details>\n  <summary>What is HTML?</summary>\n  <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. It structures content on the web.</p>\n</details>\n\n<details open>\n  <summary>What is TypeScript?</summary>\n  <p>TypeScript is a superset of JavaScript that adds static typing, making code more reliable and maintainable.</p>\n</details>`,
    hints: ['details wraps content', 'summary is the heading', 'open attribute']
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
    id: 'html-29',
    title: 'Progress and Meter',
    description: 'Show progress and measurements',
    content: `# Progress and Meter

## Progress Bar:
\`\`\`html
<progress value="70" max="100">70%</progress>
\`\`\`

## Meter (Gauge):
\`\`\`html
<meter value="0.6" min="0" max="1">60%</meter>
<meter value="75" min="0" max="100" low="33" high="66" optimum="80">75</meter>
\`\`\`

**Task:** Create progress bar and meter.`,
    language: 'html',
    difficulty: 'Intermediate',
    estimatedTime: 12,
    initialCode: `<!-- Add progress and meter elements -->`,
    solution: `<label for="file">Download progress:</label>\n<progress id="file" value="45" max="100">45%</progress>\n\n<label for="disk">Disk usage:</label>\n<meter id="disk" value="80" min="0" max="100" low="30" high="70" optimum="50">80GB</meter>`,
    hints: ['progress for ongoing tasks', 'meter for measurements', 'low/high/optimum thresholds']
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
    id: 'html-30',
    title: 'Dialog Element',
    description: 'Create modal dialogs',
    content: `# Dialog Element

Create modal/non-modal dialogs.

## HTML:
\`\`\`html
<dialog id="myDialog">
  <h2>Dialog Title</h2>
  <p>Content goes here.</p>
  <button id="closeBtn">Close</button>
</dialog>

<button id="openBtn">Open Dialog</button>
\`\`\`

## JavaScript:
\`\`\`javascript
const dialog = document.getElementById('myDialog');
openBtn.onclick = () => dialog.showModal();
closeBtn.onclick = () => dialog.close();
\`\`\`

**Task:** Create dialog element.`,
    language: 'html',
    difficulty: 'Advanced',
    estimatedTime: 15,
    initialCode: `<!-- Create dialog structure -->`,
    solution: `<dialog id="infoDialog">\n  <h2>Welcome!</h2>\n  <p>This is a modal dialog box.</p>\n  <button onclick="document.getElementById('infoDialog').close()">Close</button>\n</dialog>\n\n<button onclick="document.getElementById('infoDialog').showModal()">Show Info</button>`,
    hints: ['dialog tag', 'showModal() opens as modal', 'close() dismisses']
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
    id: 'html-31',
    title: 'Template Element',
    description: 'Create reusable HTML templates',
    content: `# Template Element

Store HTML that won't render until cloned.

## HTML:
\`\`\`html
<template id="card-template">
  <div class="card">
    <h3></h3>
    <p></p>
  </div>
</template>
\`\`\`

## JavaScript:
\`\`\`javascript
const template = document.getElementById('card-template');
const clone = template.content.cloneNode(true);
clone.querySelector('h3').textContent = 'Title';
document.body.appendChild(clone);
\`\`\`

**Task:** Create template for list item.`,
    language: 'html',
    difficulty: 'Advanced',
    estimatedTime: 18,
    initialCode: `<!-- Create template for product card -->`,
    solution: `<template id="product-template">\n  <div class="product-card">\n    <img src="" alt="">\n    <h3 class="product-name"></h3>\n    <p class="product-price"></p>\n    <button>Add to Cart</button>\n  </div>\n</template>`,
    hints: ['template tag', 'Content not rendered', 'Clone with JavaScript']
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
    id: 'html-32',
    title: 'Web Components - Custom Elements',
    description: 'Create custom HTML elements',
    content: `# Custom Elements

Create your own HTML tags!

## JavaScript:
\`\`\`javascript
class MyButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<button>Custom Button</button>';
  }
}

customElements.define('my-button', MyButton);
\`\`\`

## HTML:
\`\`\`html
<my-button></my-button>
\`\`\`

**Task:** Understand custom elements structure.`,
    language: 'html',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `<!-- Use custom element (understanding concept) -->\n<user-card name="John" role="Developer"></user-card>`,
    solution: `<!-- Custom elements extend HTML functionality -->\n<user-card name="Alice" role="Designer"></user-card>\n<user-card name="Bob" role="Developer"></user-card>`,
    hints: ['Custom tag names need hyphen', 'Defined via JavaScript', 'Reusable components']    ,
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
    id: 'html-33',
    title: 'Picture Element - Responsive Images',
    description: 'Serve different images based on conditions',
    content: `# Picture Element

Serve different images for different screens.

## Syntax:
\`\`\`html
<picture>
  <source media="(min-width: 1024px)" srcset="large.jpg">
  <source media="(min-width: 768px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Responsive image">
</picture>
\`\`\`

## Use Cases:
- Art direction
- Different formats (WebP, JPEG)
- Performance optimization

**Task:** Create picture with multiple sources.`,
    language: 'html',
    difficulty: 'Advanced',
    estimatedTime: 18,
    initialCode: `<!-- Create picture element for responsive image -->`,
    solution: `<picture>\n  <source media="(min-width: 1200px)" srcset="hero-large.jpg">\n  <source media="(min-width: 768px)" srcset="hero-medium.jpg">\n  <source media="(min-width: 480px)" srcset="hero-small.jpg">\n  <img src="hero-mobile.jpg" alt="Hero image" loading="lazy">\n</picture>`,
    hints: ['picture container', 'source with media queries', 'img as fallback']
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
    id: 'html-34',
    title: 'Datalist Element',
    description: 'Create autocomplete inputs',
    content: `# Datalist Element

Provide autocomplete options for inputs.

## Syntax:
\`\`\`html
<label for="browser">Choose a browser:</label>
<input list="browsers" id="browser" name="browser">

<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
  <option value="Edge">
</datalist>
\`\`\`

**Task:** Create input with datalist for programming languages.`,
    language: 'html',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `<!-- Create input with datalist -->`,
    solution: `<label for="language">Choose a language:</label>\n<input list="languages" id="language" name="language" placeholder="Select or type...">\n\n<datalist id="languages">\n  <option value="HTML">\n  <option value="CSS">\n  <option value="JavaScript">\n  <option value="TypeScript">\n  <option value="Python">\n</datalist>`,
    hints: ['input with list attribute', 'datalist with matching id', 'option values']
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
    id: 'html-35',
    title: 'Output Element',
    description: 'Display calculation results',
    content: `# Output Element

Display results of calculations.

## Example:
\`\`\`html
<form oninput="result.value = parseInt(a.value) + parseInt(b.value)">
  <input type="number" id="a" value="0"> +
  <input type="number" id="b" value="0"> =
  <output name="result" for="a b">0</output>
</form>
\`\`\`

**Task:** Create calculator with output.`,
    language: 'html',
    difficulty: 'Intermediate',
    estimatedTime: 15,
    initialCode: `<!-- Create form with inputs and output -->`,
    solution: `<form oninput="total.value = parseInt(price.value) * parseInt(quantity.value)">\n  <label for="price">Price: $</label>\n  <input type="number" id="price" name="price" value="10">\n  \n  <label for="quantity">Quantity:</label>\n  <input type="number" id="quantity" name="quantity" value="1">\n  \n  <output name="total" for="price quantity">10</output> dollars\n</form>`,
    hints: ['output tag', 'for attribute references inputs', 'oninput for live updates']
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
    id: 'html-36',
    title: 'Mark Element',
    description: 'Highlight important text',
    content: `# Mark Element

Highlight or mark text.

## Usage:
\`\`\`html
<p>Search results for "TypeScript":</p>
<p>Learn <mark>TypeScript</mark> with our comprehensive guide. <mark>TypeScript</mark> adds types to JavaScript.</p>
\`\`\`

## Styling:
Default is yellow background, customizable with CSS.

**Task:** Create search result with highlighted terms.`,
    language: 'html',
    difficulty: 'Beginner',
    estimatedTime: 10,
    initialCode: `<!-- Create paragraph with marked text -->`,
    solution: `<h2>Search results for "HTML"</h2>\n<article>\n  <h3>Introduction to Web Development</h3>\n  <p>Learn <mark>HTML</mark>, CSS, and JavaScript. <mark>HTML</mark> is the foundation of web pages. Master <mark>HTML</mark> first!</p>\n</article>`,
    hints: ['mark tag highlights', 'Default yellow background', 'Useful for search results']
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
    id: 'html-37',
    title: 'Ruby Annotations',
    description: 'Add pronunciation guides',
    content: `# Ruby Annotations

Add pronunciation or explanations above text (common in Asian languages).

## Syntax:
\`\`\`html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp>
  字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
\`\`\`

**Task:** Create ruby annotation.`,
    language: 'html',
    difficulty: 'Intermediate',
    estimatedTime: 12,
    initialCode: `<!-- Create ruby annotation -->`,
    solution: `<p>The word \n<ruby>\n  明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp>\n</ruby>\nmeans "tomorrow" in Japanese.</p>`,
    hints: ['ruby wraps text', 'rt is annotation', 'rp for fallback parentheses']
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
    id: 'html-38',
    title: 'BDO - Text Direction',
    description: 'Override text direction',
    content: `# BDO Element

Override bidirectional text.

## Syntax:
\`\`\`html
<p>Normal text</p>
<p><bdo dir="rtl">This text goes right-to-left</bdo></p>
<p><bdo dir="ltr">This text goes left-to-right</bdo></p>
\`\`\`

## Use Cases:
- Arabic/Hebrew text
- Special formatting needs

**Task:** Create text with different directions.`,
    language: 'html',
    difficulty: 'Intermediate',
    estimatedTime: 10,
    initialCode: `<!-- Add text with RTL direction -->`,
    solution: `<p>English: Hello World</p>\n<p><bdo dir="rtl">dlroW olleH :esreveR</bdo></p>\n<p>Mixed: <bdo dir="rtl">مرحبا</bdo> means hello in Arabic</p>`,
    hints: ['bdo tag', 'dir="rtl" or "ltr"', 'Overrides normal flow']
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
    id: 'html-39',
    title: 'Base URL',
    description: 'Set default URL for relative links',
    content: `# Base Element

Set base URL for all relative URLs on page.

## Syntax:
\`\`\`html
<head>
  <base href="https://example.com/" target="_blank">
</head>
<body>
  <a href="page.html">Link</a>
  <!-- Resolves to https://example.com/page.html -->
</body>
\`\`\`

**Task:** Add base element to head.`,
    language: 'html',
    difficulty: 'Intermediate',
    estimatedTime: 12,
    initialCode: `<!DOCTYPE html>\n<html>\n<head>\n  <!-- Add base URL -->\n  <title>My Site</title>\n</head>\n<body>\n  <a href="about.html">About</a>\n</body>\n</html>`,
    solution: `<!DOCTYPE html>\n<html>\n<head>\n  <base href="https://mywebsite.com/" target="_blank">\n  <title>My Site</title>\n</head>\n<body>\n  <a href="about.html">About</a>\n  <a href="contact.html">Contact</a>\n</body>\n</html>`,
    hints: ['base in head', 'href for base URL', 'target for default']
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
    id: 'html-40',
    title: 'Microdata and Schema.org',
    description: 'Add structured data for SEO',
    content: `# Microdata

Add machine-readable data for search engines.

## Example:
\`\`\`html
<div itemscope itemtype="https://schema.org/Person">
  <span itemprop="name">John Doe</span>
  <span itemprop="jobTitle">Web Developer</span>
  <a itemprop="url" href="https://johndoe.com">Website</a>
</div>
\`\`\`

## Benefits:
- Better SEO
- Rich snippets in search
- Structured data

**Task:** Add microdata for a product.`,
    language: 'html',
    difficulty: 'Advanced',
    estimatedTime: 20,
    initialCode: `<!-- Add product microdata -->`,
    solution: `<div itemscope itemtype="https://schema.org/Product">\n  <h2 itemprop="name">TypeScript Course</h2>\n  <img itemprop="image" src="course.jpg" alt="Course">\n  <p itemprop="description">Learn TypeScript from basics to advanced.</p>\n  <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">\n    <span itemprop="price">49.99</span>\n    <span itemprop="priceCurrency">USD</span>\n  </div>\n</div>`,
    hints: ['itemscope starts scope', 'itemtype defines type', 'itemprop for properties']
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

  // PROJECT LESSON
  {
    id: 'html-project-1',
    title: 'PROJECT: Personal Portfolio Page',
    description: 'Build a complete HTML portfolio using everything learned',
    content: `# Project: Personal Portfolio

Create a complete personal portfolio page that includes:

## Requirements:
1. **Header** with your name as h1
2. **Navigation** with links to About, Skills, Contact
3. **About Section** with paragraph about yourself
4. **Skills Section** with unordered list of 5 skills
5. **Contact Section** with a form (name, email, message textarea)
6. **Footer** with copyright info

## Skills to Practice:
- Semantic HTML (header, nav, main, section, footer)
- Headings and paragraphs
- Lists
- Forms with inputs
- Text formatting

This is your first complete webpage!`,
    language: 'html',
    difficulty: 'Intermediate',
    estimatedTime: 30,
    isProject: true,
    projectDescription: 'Build a complete personal portfolio page',
    initialCode: `<!DOCTYPE html>\n<html>\n<head>\n  <title>My Portfolio</title>\n</head>\n<body>\n  <!-- Build your portfolio here -->\n  \n</body>\n</html>`,
    solution: `<!DOCTYPE html>\n<html>\n<head>\n  <title>My Portfolio</title>\n</head>\n<body>\n  <header>\n    <h1>John Doe</h1>\n    <p>Web Developer</p>\n  </header>\n  \n  <nav>\n    <a href="#about">About</a>\n    <a href="#skills">Skills</a>\n    <a href="#contact">Contact</a>\n  </nav>\n  \n  <main>\n    <section id="about">\n      <h2>About Me</h2>\n      <p>I'm a passionate web developer learning to code. I love creating websites and solving problems with technology.</p>\n    </section>\n    \n    <section id="skills">\n      <h2>My Skills</h2>\n      <ul>\n        <li>HTML5</li>\n        <li>CSS3</li>\n        <li>JavaScript</li>\n        <li>TypeScript</li>\n        <li>Python</li>\n        <li>Problem Solving</li>\n        <li>Team Collaboration</li>\n      </ul>\n    </section>\n    \n    <section id="contact">\n      <h2>Contact Me</h2>\n      <form>\n        <label for="name">Name:</label>\n        <input type="text" id="name" name="name" required>\n        \n        <label for="email">Email:</label>\n        <input type="email" id="email" name="email" required>\n        \n        <label for="message">Message:</label>\n        <textarea id="message" name="message" rows="4"></textarea>\n        \n        <button type="submit">Send</button>\n      </form>\n    </section>\n  </main>\n  \n  <footer>\n    <p>&copy; 2025 John Doe. All rights reserved.</p>\n  </footer>\n</body>\n</html>`,
    hints: [
      'Start with semantic structure',
      'Use sections for each part',
      'Remember form labels and inputs',
      'Don\'t forget the footer'
    ]
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
    id: 'html-42',
    title: 'Accessibility Best Practices',
    description: 'Master accessibility best practices concepts and techniques',
    content: `# Accessibility Best Practices

## Overview
Learn about accessibility best practices and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply accessibility best practices concepts in your code.
`,
    language: 'html',
    difficulty: 'Advanced',
    estimatedTime: 23,
    initialCode: `// Start your html code here
`,
    solution: `// Sample solution for Accessibility Best Practices
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
    id: 'html-43',
    title: 'ARIA Roles',
    description: 'Master aria roles concepts and techniques',
    content: `# ARIA Roles

## Overview
Learn about aria roles and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply aria roles concepts in your code.
`,
    language: 'html',
    difficulty: 'Advanced',
    estimatedTime: 18,
    initialCode: `// Start your html code here
`,
    solution: `// Sample solution for ARIA Roles
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
    id: 'html-44',
    title: 'Landmark Regions',
    description: 'Master landmark regions concepts and techniques',
    content: `# Landmark Regions

## Overview
Learn about landmark regions and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply landmark regions concepts in your code.
`,
    language: 'html',
    difficulty: 'Advanced',
    estimatedTime: 19,
    initialCode: `// Start your html code here
`,
    solution: `// Sample solution for Landmark Regions
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
    id: 'html-45',
    title: 'Skip Navigation',
    description: 'Master skip navigation concepts and techniques',
    content: `# Skip Navigation

## Overview
Learn about skip navigation and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply skip navigation concepts in your code.
`,
    language: 'html',
    difficulty: 'Advanced',
    estimatedTime: 24,
    initialCode: `// Start your html code here
`,
    solution: `// Sample solution for Skip Navigation
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
    id: 'html-46',
    title: 'Focus Management',
    description: 'Master focus management concepts and techniques',
    content: `# Focus Management

## Overview
Learn about focus management and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply focus management concepts in your code.
`,
    language: 'html',
    difficulty: 'Advanced',
    estimatedTime: 11,
    initialCode: `// Start your html code here
`,
    solution: `// Sample solution for Focus Management
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
    id: 'html-47',
    title: 'Form Validation HTML5',
    description: 'Master form validation html5 concepts and techniques',
    content: `# Form Validation HTML5

## Overview
Learn about form validation html5 and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply form validation html5 concepts in your code.
`,
    language: 'html',
    difficulty: 'Advanced',
    estimatedTime: 10,
    initialCode: `// Start your html code here
`,
    solution: `// Sample solution for Form Validation HTML5
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
    id: 'html-48',
    title: 'Input Types Advanced',
    description: 'Master input types advanced concepts and techniques',
    content: `# Input Types Advanced

## Overview
Learn about input types advanced and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply input types advanced concepts in your code.
`,
    language: 'html',
    difficulty: 'Advanced',
    estimatedTime: 23,
    initialCode: `// Start your html code here
`,
    solution: `// Sample solution for Input Types Advanced
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
    id: 'html-49',
    title: 'Custom Validation Messages',
    description: 'Master custom validation messages concepts and techniques',
    content: `# Custom Validation Messages

## Overview
Learn about custom validation messages and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply custom validation messages concepts in your code.
`,
    language: 'html',
    difficulty: 'Advanced',
    estimatedTime: 22,
    initialCode: `// Start your html code here
`,
    solution: `// Sample solution for Custom Validation Messages
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
    id: 'html-50',
    title: 'Fieldset and Legend',
    description: 'Master fieldset and legend concepts and techniques',
    content: `# Fieldset and Legend

## Overview
Learn about fieldset and legend and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply fieldset and legend concepts in your code.
`,
    language: 'html',
    difficulty: 'Advanced',
    estimatedTime: 18,
    initialCode: `// Start your html code here
`,
    solution: `// Sample solution for Fieldset and Legend
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