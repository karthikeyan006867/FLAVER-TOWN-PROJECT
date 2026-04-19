# Project Guidelines

## Scope
- This repository contains two separate apps:
  - Main product: Next.js app in the repository root.
  - Secondary sandbox: Vue + Vite app in CODEMASTER.
- Do not mix dependencies, scripts, or conventions between root and CODEMASTER unless explicitly requested.

## Build And Validate
- Root app setup: npm install
- Root app dev server: npm run dev
- Root app validation before finishing changes: npm run lint and npm run build
- Root app production run: npm start
- Desktop/Tauri flows (root): npm run tauri:dev, npm run tauri:build, npm run tauri:build:windows, npm run tauri:android

- CODEMASTER setup: cd CODEMASTER && npm install
- CODEMASTER dev/build: npm run dev, npm run build (inside CODEMASTER)
- CODEMASTER preview/desktop tooling: npm run preview, npm run taurify (inside CODEMASTER)

## Architecture
- App Router pages and routes live in app.
- Shared UI components live in components.
- Course and lesson source-of-truth data lives in data, especially data/courses.ts and data/lessons/*.ts.
- Client state is managed with Zustand stores in store and persisted in localStorage.
- Progress sync relies on Clerk-backed API routes under app/api/sync-progress.
- Security utilities and middleware wrappers are in lib.

## Conventions
- Use TypeScript path alias imports with @/ (configured in tsconfig.json).
- Preserve existing client/server boundaries:
  - Keep 'use client' on components/pages that use hooks, browser APIs, or client-side stores.
  - Prefer server route logic in app/api with existing wrappers.
- Follow existing Tailwind utility style patterns in app and components.

## Security And Safety Gotchas
- Auth is enforced via Clerk and middleware; preserve protected route behavior when editing middleware or auth-sensitive pages.
- Admin authorization is handled at the page/API route layer (not middleware Edge checks); preserve that boundary when refactoring auth.
- For API routes, prefer existing security helpers from lib/apiSecurity and input sanitization from lib/security.
- Do not introduce or commit secrets.
- Treat scripts under scripts as potentially destructive operational tooling; do not run or modify them unless explicitly requested.
- data/lessons is heavily script-generated; avoid broad manual edits there unless the task explicitly targets lesson generation/fix flows.
- Current lint/build blocker snapshot is in build-log.txt (known unescaped apostrophes in app/dashboard/page.tsx and app/page.tsx).

## Docs (Link, Do Not Duplicate)
- Product overview and scripts: README.md
- Curriculum and platform coverage: EDUCATIONAL_PLAN.md
- Detailed lesson topic guides: DETAILED_COURSE_GUIDES.md
- Secondary app notes: CODEMASTER/README.md
- Build status snapshot: build-log.txt
