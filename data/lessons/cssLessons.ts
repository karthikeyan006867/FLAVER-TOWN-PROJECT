import { Lesson } from '../courses'

export const cssLessons: Lesson[] = [
  {
    id: 'css-1',
    title: 'CSS Basics - Styling Your First Page',
    description: 'Master CSS syntax in CSS',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# CSS Basics - Styling Your First Page

Learn about CSS syntax in CSS.

## Key Concepts:
- Understanding CSS syntax
- Best practices
- Real-world examples

Practice implementing CSS syntax!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for CSS syntax */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of CSS syntax */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-2',
    title: 'Colors in CSS',
    description: 'Master color values in CSS',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Colors in CSS

Learn about color values in CSS.

## Key Concepts:
- Understanding color values
- Best practices
- Real-world examples

Practice implementing color values!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for color values */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of color values */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-3',
    title: 'Text Styling',
    description: 'Master font properties in CSS',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Text Styling

Learn about font properties in CSS.

## Key Concepts:
- Understanding font properties
- Best practices
- Real-world examples

Practice implementing font properties!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for font properties */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of font properties */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-4',
    title: 'Box Model',
    description: 'Master margin, padding in CSS',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Box Model

Learn about margin, padding in CSS.

## Key Concepts:
- Understanding margin, padding
- Best practices
- Real-world examples

Practice implementing margin, padding!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for margin, padding */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of margin, padding */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-5',
    title: 'Width and Height',
    description: 'Master sizing in CSS',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Width and Height

Learn about sizing in CSS.

## Key Concepts:
- Understanding sizing
- Best practices
- Real-world examples

Practice implementing sizing!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for sizing */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of sizing */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-6',
    title: 'Borders',
    description: 'Master border styles in CSS',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Borders

Learn about border styles in CSS.

## Key Concepts:
- Understanding border styles
- Best practices
- Real-world examples

Practice implementing border styles!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for border styles */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of border styles */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-7',
    title: 'Backgrounds',
    description: 'Master background in CSS',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Backgrounds

Learn about background in CSS.

## Key Concepts:
- Understanding background
- Best practices
- Real-world examples

Practice implementing background!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for background */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of background */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-8',
    title: 'Classes and IDs',
    description: 'Master selectors in CSS',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Classes and IDs

Learn about selectors in CSS.

## Key Concepts:
- Understanding selectors
- Best practices
- Real-world examples

Practice implementing selectors!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for selectors */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of selectors */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-9',
    title: 'Combinators',
    description: 'Master selectors in CSS',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Combinators

Learn about selectors in CSS.

## Key Concepts:
- Understanding selectors
- Best practices
- Real-world examples

Practice implementing selectors!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for selectors */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of selectors */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-10',
    title: 'Pseudo-classes',
    description: 'Master hover, active in CSS',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Pseudo-classes

Learn about hover, active in CSS.

## Key Concepts:
- Understanding hover, active
- Best practices
- Real-world examples

Practice implementing hover, active!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for hover, active */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of hover, active */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-11',
    title: 'Display Property',
    description: 'Master display in CSS',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Display Property

Learn about display in CSS.

## Key Concepts:
- Understanding display
- Best practices
- Real-world examples

Practice implementing display!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for display */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of display */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-12',
    title: 'Position',
    description: 'Master positioning in CSS',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Position

Learn about positioning in CSS.

## Key Concepts:
- Understanding positioning
- Best practices
- Real-world examples

Practice implementing positioning!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for positioning */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of positioning */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-13',
    title: 'Z-Index',
    description: 'Master stacking in CSS',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Z-Index

Learn about stacking in CSS.

## Key Concepts:
- Understanding stacking
- Best practices
- Real-world examples

Practice implementing stacking!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for stacking */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of stacking */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-14',
    title: 'Float and Clear',
    description: 'Master layout in CSS',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Float and Clear

Learn about layout in CSS.

## Key Concepts:
- Understanding layout
- Best practices
- Real-world examples

Practice implementing layout!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for layout */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of layout */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-15',
    title: 'Flexbox Basics',
    description: 'Master flexbox in CSS',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Flexbox Basics

Learn about flexbox in CSS.

## Key Concepts:
- Understanding flexbox
- Best practices
- Real-world examples

Practice implementing flexbox!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for flexbox */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of flexbox */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-16',
    title: 'Flexbox Direction',
    description: 'Master flex-direction in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Flexbox Direction

Learn about flex-direction in CSS.

## Key Concepts:
- Understanding flex-direction
- Best practices
- Real-world examples

Practice implementing flex-direction!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for flex-direction */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of flex-direction */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-17',
    title: 'Flexbox Alignment',
    description: 'Master alignment in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Flexbox Alignment

Learn about alignment in CSS.

## Key Concepts:
- Understanding alignment
- Best practices
- Real-world examples

Practice implementing alignment!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for alignment */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of alignment */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-18',
    title: 'Grid Basics',
    description: 'Master grid in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Grid Basics

Learn about grid in CSS.

## Key Concepts:
- Understanding grid
- Best practices
- Real-world examples

Practice implementing grid!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for grid */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of grid */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-19',
    title: 'Grid Template',
    description: 'Master grid template in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Grid Template

Learn about grid template in CSS.

## Key Concepts:
- Understanding grid template
- Best practices
- Real-world examples

Practice implementing grid template!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for grid template */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of grid template */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-20',
    title: 'Grid Alignment',
    description: 'Master grid alignment in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Grid Alignment

Learn about grid alignment in CSS.

## Key Concepts:
- Understanding grid alignment
- Best practices
- Real-world examples

Practice implementing grid alignment!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for grid alignment */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of grid alignment */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-21',
    title: 'Transitions',
    description: 'Master transitions in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Transitions

Learn about transitions in CSS.

## Key Concepts:
- Understanding transitions
- Best practices
- Real-world examples

Practice implementing transitions!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for transitions */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of transitions */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-22',
    title: '2D Transforms',
    description: 'Master transform in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# 2D Transforms

Learn about transform in CSS.

## Key Concepts:
- Understanding transform
- Best practices
- Real-world examples

Practice implementing transform!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for transform */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of transform */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-23',
    title: '3D Transforms',
    description: 'Master 3D transform in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# 3D Transforms

Learn about 3D transform in CSS.

## Key Concepts:
- Understanding 3D transform
- Best practices
- Real-world examples

Practice implementing 3D transform!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for 3D transform */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of 3D transform */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-24',
    title: 'Animations',
    description: 'Master animations in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Animations

Learn about animations in CSS.

## Key Concepts:
- Understanding animations
- Best practices
- Real-world examples

Practice implementing animations!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for animations */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of animations */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-25',
    title: 'Shadows',
    description: 'Master shadows in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Shadows

Learn about shadows in CSS.

## Key Concepts:
- Understanding shadows
- Best practices
- Real-world examples

Practice implementing shadows!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for shadows */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of shadows */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-26',
    title: 'Gradients',
    description: 'Master gradients in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Gradients

Learn about gradients in CSS.

## Key Concepts:
- Understanding gradients
- Best practices
- Real-world examples

Practice implementing gradients!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for gradients */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of gradients */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-27',
    title: 'Border Radius',
    description: 'Master rounded corners in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Border Radius

Learn about rounded corners in CSS.

## Key Concepts:
- Understanding rounded corners
- Best practices
- Real-world examples

Practice implementing rounded corners!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for rounded corners */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of rounded corners */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-28',
    title: 'Opacity',
    description: 'Master transparency in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Opacity

Learn about transparency in CSS.

## Key Concepts:
- Understanding transparency
- Best practices
- Real-world examples

Practice implementing transparency!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for transparency */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of transparency */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-29',
    title: 'Overflow',
    description: 'Master overflow in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Overflow

Learn about overflow in CSS.

## Key Concepts:
- Understanding overflow
- Best practices
- Real-world examples

Practice implementing overflow!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for overflow */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of overflow */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-30',
    title: 'Visibility',
    description: 'Master visibility in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Visibility

Learn about visibility in CSS.

## Key Concepts:
- Understanding visibility
- Best practices
- Real-world examples

Practice implementing visibility!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for visibility */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of visibility */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-31',
    title: 'Cursor Styles',
    description: 'Master cursor in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Cursor Styles

Learn about cursor in CSS.

## Key Concepts:
- Understanding cursor
- Best practices
- Real-world examples

Practice implementing cursor!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for cursor */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of cursor */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-32',
    title: 'List Styling',
    description: 'Master lists in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# List Styling

Learn about lists in CSS.

## Key Concepts:
- Understanding lists
- Best practices
- Real-world examples

Practice implementing lists!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for lists */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of lists */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-33',
    title: 'Table Styling',
    description: 'Master tables in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Table Styling

Learn about tables in CSS.

## Key Concepts:
- Understanding tables
- Best practices
- Real-world examples

Practice implementing tables!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for tables */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of tables */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-34',
    title: 'Form Styling',
    description: 'Master forms in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Form Styling

Learn about forms in CSS.

## Key Concepts:
- Understanding forms
- Best practices
- Real-world examples

Practice implementing forms!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for forms */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of forms */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-35',
    title: 'Media Queries',
    description: 'Master responsive in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Media Queries

Learn about responsive in CSS.

## Key Concepts:
- Understanding responsive
- Best practices
- Real-world examples

Practice implementing responsive!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for responsive */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of responsive */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-36',
    title: 'Mobile First',
    description: 'Master mobile-first in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Mobile First

Learn about mobile-first in CSS.

## Key Concepts:
- Understanding mobile-first
- Best practices
- Real-world examples

Practice implementing mobile-first!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for mobile-first */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of mobile-first */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-37',
    title: 'Responsive Units',
    description: 'Master units in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Responsive Units

Learn about units in CSS.

## Key Concepts:
- Understanding units
- Best practices
- Real-world examples

Practice implementing units!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for units */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of units */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-38',
    title: 'CSS Variables',
    description: 'Master variables in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# CSS Variables

Learn about variables in CSS.

## Key Concepts:
- Understanding variables
- Best practices
- Real-world examples

Practice implementing variables!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for variables */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of variables */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-39',
    title: 'Calc Function',
    description: 'Master calculations in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Calc Function

Learn about calculations in CSS.

## Key Concepts:
- Understanding calculations
- Best practices
- Real-world examples

Practice implementing calculations!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for calculations */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of calculations */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-40',
    title: 'Filter Effects',
    description: 'Master filters in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Filter Effects

Learn about filters in CSS.

## Key Concepts:
- Understanding filters
- Best practices
- Real-world examples

Practice implementing filters!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for filters */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of filters */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-41',
    title: 'Blend Modes',
    description: 'Master blending in CSS',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 35,
    content: `# Blend Modes

Learn about blending in CSS.

## Key Concepts:
- Understanding blending
- Best practices
- Real-world examples

Practice implementing blending!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for blending */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of blending */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-42',
    title: 'Clip Path',
    description: 'Master clipping in CSS',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Clip Path

Learn about clipping in CSS.

## Key Concepts:
- Understanding clipping
- Best practices
- Real-world examples

Practice implementing clipping!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for clipping */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of clipping */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-43',
    title: 'Object Fit',
    description: 'Master image sizing in CSS',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Object Fit

Learn about image sizing in CSS.

## Key Concepts:
- Understanding image sizing
- Best practices
- Real-world examples

Practice implementing image sizing!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for image sizing */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of image sizing */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-44',
    title: 'Scroll Behavior',
    description: 'Master scrolling in CSS',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 35,
    content: `# Scroll Behavior

Learn about scrolling in CSS.

## Key Concepts:
- Understanding scrolling
- Best practices
- Real-world examples

Practice implementing scrolling!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for scrolling */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of scrolling */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-45',
    title: 'Grid Advanced',
    description: 'Master advanced grid in CSS',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Grid Advanced

Learn about advanced grid in CSS.

## Key Concepts:
- Understanding advanced grid
- Best practices
- Real-world examples

Practice implementing advanced grid!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for advanced grid */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of advanced grid */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-46',
    title: 'Flexbox Advanced',
    description: 'Master advanced flex in CSS',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Flexbox Advanced

Learn about advanced flex in CSS.

## Key Concepts:
- Understanding advanced flex
- Best practices
- Real-world examples

Practice implementing advanced flex!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for advanced flex */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of advanced flex */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-47',
    title: 'CSS Architecture',
    description: 'Master architecture in CSS',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 35,
    content: `# CSS Architecture

Learn about architecture in CSS.

## Key Concepts:
- Understanding architecture
- Best practices
- Real-world examples

Practice implementing architecture!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for architecture */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of architecture */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-48',
    title: 'Performance',
    description: 'Master optimization in CSS',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Performance

Learn about optimization in CSS.

## Key Concepts:
- Understanding optimization
- Best practices
- Real-world examples

Practice implementing optimization!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for optimization */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of optimization */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-49',
    title: 'Browser Compatibility',
    description: 'Master compatibility in CSS',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Browser Compatibility

Learn about compatibility in CSS.

## Key Concepts:
- Understanding compatibility
- Best practices
- Real-world examples

Practice implementing compatibility!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for compatibility */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of compatibility */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  },
  {
    id: 'css-50',
    title: 'Final Project - Styled Website',
    description: 'Master complete project in CSS',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 120,
    isProject: true,
    content: `# Final Project - Styled Website

Learn about complete project in CSS.

## Key Concepts:
- Understanding complete project
- Best practices
- Real-world examples

Practice implementing complete project!`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for complete project */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of complete project */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  }
]
