# Deployment Guide

This guide covers deploying your portfolio to Vercel, the recommended platform for Next.js applications.

---

## Option 1: Deploy via Vercel CLI (Recommended)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

From the project root directory:

```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** Yes
- **Which scope?** Select your account
- **Link to existing project?** No (first deployment)
- **Project name:** portfolio (or your preferred name)
- **Directory with source code?** `./` (current directory)
- **Build settings:** Auto-detected (Next.js)

### Step 4: Production Deployment

```bash
vercel --prod
```

This deploys to your production URL, for example `portfolio.vercel.app`.

---

## Option 2: Deploy via GitHub Integration

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Add New Project**
3. Import your GitHub repository
4. Let Vercel auto-detect the Next.js settings
5. Click **Deploy**

### Step 3: Automatic Deployments

- **Production:** Every push to `main`
- **Preview:** Every push to other branches or pull requests

---

## Custom Domain Setup

### Step 1: Add Domain in Vercel

1. Open your project in the Vercel dashboard
2. Go to **Settings > Domains**
3. Add your domain, for example `johndoe.dev`

### Step 2: Configure DNS

Add these records at your domain registrar:

**For apex domain (`johndoe.dev`):**

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |

**For `www` subdomain:**

| Type | Name | Value |
|------|------|-------|
| CNAME | www | cname.vercel-dns.com |

### Step 3: SSL Certificate

Vercel automatically provisions and renews SSL certificates.

---

## Environment Variables

Go to **Settings > Environment Variables** in Vercel and add:

- `NEXT_PUBLIC_SITE_URL` = `https://yourdomain.com`
- `CONTACT_EMAIL_TO` = `yashsinha2809@gmail.com`
- `GMAIL_USER` = `yashsinha2809@gmail.com`
- `GMAIL_APP_PASSWORD` = `your-16-character-gmail-app-password`
- `CONTACT_EMAIL_FROM` = `yashsinha2809@gmail.com`

Redeploy after adding or changing any of these values.

---

## Optimizations Applied by Vercel

- **Edge Network:** Global CDN for faster load times
- **Automatic Image Optimization:** Resizing and modern formats where applicable
- **Static Generation:** Pre-rendered pages where possible
- **Serverless Functions:** Supports the contact API route out of the box
- **Preview Deployments:** Safe testing before production

---

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify images load correctly
- [ ] Test dark/light mode toggle
- [ ] Submit the contact form and verify the email arrives
- [ ] Check responsive design on mobile
- [ ] Run Lighthouse and review performance/accessibility
- [ ] Verify social share previews
- [ ] Add the site to Google Search Console

---

## Useful Commands

```bash
# Check production build locally before deploy
npm run build
npm run start

# Create a preview deployment
vercel

# Deploy directly to production
vercel --prod

# View deployment logs
vercel logs [deployment-url]
```
