# Personal Portfolio

A modern portfolio built with Next.js 14, Tailwind CSS, ShadCN UI, and Framer Motion.

## Start Here

If the project feels scattered, start with these files:

| What you want to change | Edit this file |
|---|---|
| Name, bio, social links, projects, skills, certifications | [data/portfolio.ts](data/portfolio.ts) |
| Page order and which sections render on the homepage | [app/page.tsx](app/page.tsx) |
| Header navigation links | [data/portfolio.ts](data/portfolio.ts) |
| Global colors, gradients, and scroll behavior | [app/globals.css](app/globals.css) |
| SEO metadata and root layout | [app/layout.tsx](app/layout.tsx) |
| Individual sections such as Hero, Projects, Skills, Certifications, Contact | [components/sections/](components/sections) |
| Shared layout pieces such as Navbar, Footer, Section wrapper | [components/layout/](components/layout) |
| Reusable UI primitives | [components/ui/](components/ui) |
| Types and shared helpers | [types/index.ts](types/index.ts) and [lib/utils.ts](lib/utils.ts) |

## Navigation Map

The homepage follows this order:

1. Hero
2. Experience
3. Projects
4. Skills
5. Certifications
6. Contact

The top navigation links map to the same sections, so you can use the header to jump directly to the part you want to edit or review.

## File Guide

### Content

- [data/portfolio.ts](data/portfolio.ts) holds the portfolio copy and structured data.
- Update this file first when you want to change personal details, project cards, skill groups, certifications, or social links.

### Layout

- [app/layout.tsx](app/layout.tsx) sets metadata, theme support, the navbar, and the footer.
- [app/page.tsx](app/page.tsx) defines the homepage composition and section order.
- [components/layout/navbar.tsx](components/layout/navbar.tsx) controls the sticky nav and mobile menu.
- [components/layout/footer.tsx](components/layout/footer.tsx) renders social links and copyright.
- [components/layout/section.tsx](components/layout/section.tsx) is the shared wrapper for section spacing, titles, and entrance animation.

### Sections

- [components/sections/hero.tsx](components/sections/hero.tsx) is the landing hero and resume CTA.
- [components/sections/experience.tsx](components/sections/experience.tsx) is the animated timeline for work and internship history.
- [components/sections/projects.tsx](components/sections/projects.tsx) renders project cards.
- [components/sections/skills.tsx](components/sections/skills.tsx) renders skill groups and progress bars.
- [components/sections/certifications.tsx](components/sections/certifications.tsx) renders credentials.
- [components/sections/contact.tsx](components/sections/contact.tsx) renders the contact form.

### Styling and Utilities

- [app/globals.css](app/globals.css) contains theme variables, background treatment, and global browser styles.
- [lib/utils.ts](lib/utils.ts) contains shared helpers such as `cn`, `delay`, and email validation.
- [components/ui/](components/ui) contains the local UI primitives used by the sections.

## If You Need To Change Something

- Change your personal story or portfolio data in [data/portfolio.ts](data/portfolio.ts).
- Reorder the homepage in [app/page.tsx](app/page.tsx).
- Add or remove a visible navigation target in [data/portfolio.ts](data/portfolio.ts).
- Change the visual style in [app/globals.css](app/globals.css) and the section/component files.
- Update the metadata in [app/layout.tsx](app/layout.tsx).

## Quick Start

```bash
npm install
npm run dev
```

## Useful Scripts

```bash
npm run build
npm run start
npm run lint
```

## Customization Notes

- The site content is centralized in [data/portfolio.ts](data/portfolio.ts), so most edits should start there.
- The homepage sections already use stable `id` anchors, which makes the header links work as in-page navigation.
- The Experience section is also data-driven, so updating job titles, companies, or bullet points only requires editing [data/portfolio.ts](data/portfolio.ts).
- The company badges in Experience are placeholder monograms for now, so you can swap in real logo assets later without changing the layout.

## Deployment

See [setup/deployment.md](setup/deployment.md) for deployment steps.

## License

MIT License - feel free to use this for your own portfolio.
