# 🎓 CodeMaster Academy

An advanced, full-stack language learning platform built with **Next.js 14**, **Clerk Authentication**, **Monaco Editor**, and **Tailwind CSS**. Learn HTML, CSS, JavaScript, and Python from scratch to professional level with interactive lessons, real-time code execution, and progress tracking.

![CodeMaster Academy](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Clerk Auth](https://img.shields.io/badge/Clerk-Auth-purple?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🔐 **Authentication**
- Google OAuth login via Clerk
- Secure user sessions
- Protected routes
- User profile management

### 📚 **Course System**
- **HTML Fundamentals** - 25+ lessons
- **CSS Mastery** - 35+ lessons  
- **JavaScript Pro** - 50+ lessons
- **Python Full Stack** - 60+ lessons

### 💻 **Interactive Code Editor**
- Monaco Editor (VS Code engine)
- Syntax highlighting for all languages
- Real-time code execution
- Instant feedback on challenges
- Test-driven learning

### 📊 **Progress Tracking**
- Personal dashboard
- Lesson completion tracking
- Daily streak counter
- Points and achievements system
- Time tracking
- Visual progress bars

### 🎨 **Modern UI/UX**
- Responsive design (mobile, tablet, desktop)
- Dark theme with gradient accents
- Smooth animations
- Interactive components
- Collapsible sidebar navigation

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ installed
- **npm** or **yarn** package manager
- **Clerk account** (free at [clerk.com](https://clerk.com))
- **Git** for version control

### 1. Clone & Install

```bash
cd "c:\Users\kaart\.vscode\projects\FLAVER TOWN PROJECT"
npm install
```

### 2. Set Up Clerk Authentication

1. Go to [dashboard.clerk.com](https://dashboard.clerk.com)
2. Create a new application
3. Enable **Google OAuth** in the application settings:
   - Navigate to **Social Connections**
   - Enable **Google**
   - Configure OAuth settings

4. Copy your API keys:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Clerk keys:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxx

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: GitHub Integration

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import in Vercel:**
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click **"Add New Project"**
   - Import your GitHub repository
   - Add environment variables from `.env.local`
   - Click **Deploy**

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/codemaster-academy)

**Important:** Don't forget to add your Clerk environment variables in Vercel project settings!

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Clerk** | Authentication & user management |
| **Monaco Editor** | Code editor (VS Code engine) |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animations |
| **Zustand** | State management |
| **React Icons** | Icon library |
| **Lucide React** | Additional icons |

## 📁 Project Structure

```
FLAVER TOWN PROJECT/
├── app/
│   ├── courses/
│   │   ├── [courseId]/
│   │   │   ├── [lessonId]/
│   │   │   │   └── page.tsx       # Individual lesson page
│   │   │   └── page.tsx           # Course overview page
│   │   └── page.tsx               # All courses page
│   ├── dashboard/
│   │   └── page.tsx               # User dashboard
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout with Clerk
│   └── page.tsx                   # Homepage
├── components/
│   ├── CodeEditor.tsx             # Monaco editor component
│   ├── Navbar.tsx                 # Top navigation
│   └── Sidebar.tsx                # Side navigation
├── data/
│   └── courses.ts                 # Course & lesson data
├── middleware.ts                  # Clerk auth middleware
├── package.json                   # Dependencies
├── tailwind.config.js             # Tailwind configuration
├── tsconfig.json                  # TypeScript config
├── vercel.json                    # Vercel deployment config
└── README.md                      # This file
```

## 🎯 Key Features Explained

### Code Editor Component

The Monaco Editor provides:
- Real-time syntax highlighting
- Code completion suggestions
- Error detection
- Multi-language support
- Customizable themes

### Authentication Flow

1. User clicks "Sign In with Google"
2. Clerk handles OAuth flow
3. User is redirected to dashboard
4. Session persists across pages
5. Protected routes require authentication

### Progress Tracking

Track your learning with:
- **Lessons Completed** - Total lessons finished
- **Daily Streak** - Consecutive days learning
- **Points System** - Earn points for completions
- **Time Tracking** - Monitor study time
- **Achievements** - Unlock badges and rewards

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding New Lessons

Edit `data/courses.ts`:

```typescript
{
  id: 'new-lesson',
  title: 'Your Lesson Title',
  description: 'Lesson description',
  content: `# Markdown content here`,
  language: 'javascript',
  difficulty: 'Beginner',
  estimatedTime: 15,
  initialCode: '// starter code',
  solution: '// solution code',
  expectedOutput: 'expected result',
  hints: ['Hint 1', 'Hint 2']
}
```

### Customization

**Colors:** Edit `tailwind.config.js`
```javascript
colors: {
  primary: { /* your colors */ },
  accent: { /* your colors */ }
}
```

**Fonts:** Edit `app/layout.tsx`
```typescript
import { YourFont } from 'next/font/google'
```

## 🐛 Troubleshooting

### Clerk Authentication Issues

- Verify environment variables are set correctly
- Check Clerk dashboard for application status
- Ensure Google OAuth is enabled in Clerk

### Monaco Editor Not Loading

- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `npm install`
- Check browser console for errors

### Build Errors

```bash
# Clean build
rm -rf .next node_modules
npm install
npm run build
```

## 📝 License

MIT License - feel free to use this project for learning or commercial purposes.

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

- **Documentation:** [Next.js Docs](https://nextjs.org/docs)
- **Clerk Docs:** [clerk.com/docs](https://clerk.com/docs)
- **Issues:** Open an issue on GitHub

## 🎉 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Authentication by [Clerk](https://clerk.com)
- Editor powered by [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- Styled with [Tailwind CSS](https://tailwindcss.com)

---

**Made with ❤️ for developers learning to code**

Happy Learning! 🚀
