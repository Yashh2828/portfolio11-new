# Dependencies Documentation

This document lists all npm packages used in the portfolio project and explains their purpose.

## Core Dependencies

### Framework & Runtime

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 14.2.0 | React framework with App Router, SSR, SSG, and optimized performance |
| `react` | ^18.2.0 | Core UI library for building component-based interfaces |
| `react-dom` | ^18.2.0 | React DOM bindings for web applications |

### Styling & UI

| Package | Version | Purpose |
|---------|---------|---------|
| `tailwindcss` | ^3.4.1 | Utility-first CSS framework for rapid UI development |
| `class-variance-authority` | ^0.7.0 | Creates variant-based component styles (used by ShadCN) |
| `clsx` | ^2.1.0 | Conditional class name utility |
| `tailwind-merge` | ^2.2.1 | Intelligently merges Tailwind CSS classes without conflicts |

### Animation

| Package | Version | Purpose |
|---------|---------|---------|
| `framer-motion` | ^11.0.0 | Production-ready motion library for smooth animations, scroll reveals, and page transitions |

### Theme Management

| Package | Version | Purpose |
|---------|---------|---------|
| `next-themes` | ^0.3.0 | Dark/light mode toggle with system preference support |

### Icons

| Package | Version | Purpose |
|---------|---------|---------|
| `lucide-react` | ^0.344.0 | Modern, consistent icon library with React components |

### UI Primitives (Radix UI)

| Package | Version | Purpose |
|---------|---------|---------|
| `@radix-ui/react-slot` | ^1.0.2 | Primitive for building polymorphic components (used by Button) |
| `@radix-ui/react-toast` | ^1.1.5 | Accessible toast notification primitive |

---

## Dev Dependencies

### TypeScript

| Package | Version | Purpose |
|---------|---------|---------|
| `typescript` | ^5.3.0 | Static type checking for JavaScript |
| `@types/node` | ^20.11.0 | TypeScript definitions for Node.js |
| `@types/react` | ^18.2.0 | TypeScript definitions for React |
| `@types/react-dom` | ^18.2.0 | TypeScript definitions for React DOM |

### CSS Processing

| Package | Version | Purpose |
|---------|---------|---------|
| `postcss` | ^8.4.35 | CSS transformation tool (required by Tailwind) |
| `autoprefixer` | ^10.4.17 | Adds vendor prefixes to CSS for browser compatibility |

### Linting

| Package | Version | Purpose |
|---------|---------|---------|
| `eslint` | ^8.56.0 | JavaScript/TypeScript linter |
| `eslint-config-next` | 14.2.0 | Next.js-specific ESLint configuration |

---

## Package Selection Rationale

### Why Next.js 14?
- App Router provides excellent developer experience
- Server Components reduce client-side JavaScript
- Built-in image optimization
- Automatic code splitting
- SEO-friendly with metadata API

### Why Framer Motion?
- Declarative animation API
- Excellent performance with hardware acceleration
- Scroll-triggered animations out of the box
- Great TypeScript support

### Why ShadCN UI Approach?
- Components are copied into project (not installed as dependency)
- Full customization control
- No version conflicts
- Built on accessible Radix UI primitives

### Why Tailwind CSS?
- Rapid prototyping with utility classes
- Consistent design system with CSS variables
- Excellent dark mode support
- Small production bundle (PurgeCSS built-in)
