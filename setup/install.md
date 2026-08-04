# Installation Guide

Follow these steps to install and run the portfolio project locally.

## Prerequisites

Ensure you have the following installed:

- **Node.js** 18.17.0 or later ([Download](https://nodejs.org/))
- **npm** 9.0.0 or later
- **Git** (optional, for cloning)

Verify installations:

```bash
node --version
npm --version
```

---

## Step 1: Navigate to Project Directory

```bash
cd portfolio
```

---

## Step 2: Install Dependencies

```bash
npm install
```

---

## Step 3: Create Local Environment Variables

Create a `.env.local` file:

```env
# Site URL for local development
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Contact form delivery
CONTACT_EMAIL_TO=yashsinha2809@gmail.com
GMAIL_USER=yashsinha2809@gmail.com
GMAIL_APP_PASSWORD=your-16-character-gmail-app-password
CONTACT_EMAIL_FROM=yashsinha2809@gmail.com

# Optional analytics
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## Step 4: Run Development Server

```bash
npm run dev
```

This starts the development server at `http://localhost:3000`.

---

## Step 5: Build for Production

```bash
npm run build
```

This creates an optimized production build in `.next`.

---

## Step 6: Preview Production Build

```bash
npm run start
```

This runs the production build locally for testing.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint checks |

---

## Customizing Content

1. **Personal info and projects:** Edit `data/portfolio.ts`
2. **Theme colors:** Modify CSS variables in `app/globals.css`
3. **SEO metadata:** Update `app/layout.tsx`
4. **Resume:** Replace `public/resume.pdf`
5. **Avatar:** Replace `public/images/profile/avatar.png`

---

## Troubleshooting

### Port 3000 Already in Use

```bash
npm run dev -- -p 3001
```

### Clear Next.js Cache

```bash
rm -rf .next
npm run dev
```

### Dependency Issues

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
npx tsc --noEmit
```
