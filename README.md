# Profile 

A clean, minimalist personal profile page built with **Next.js 15 (App Router)**, **Tailwind CSS v4**, and **Framer Motion**.

## Features

- **Minimalist Design** — Clean white space, light tones, modern typography
- **Fully Responsive** — Optimized for mobile, tablet, and desktop
- **Smooth Animations** — Subtle fade-in on scroll, hover scale effects
- **Static Export** — Pre-rendered HTML/CSS for fast load and GitHub Pages deployment
- **Zero Icon Libraries** — No lucide, heroicons, or react-icons; inline SVGs only
- **Accessible** — Semantic HTML, keyboard navigation, WCAG-friendly contrast

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- Framer Motion 11
- TypeScript

## Project Structure

```
profile/
├── .github/workflows/deploy.yml   ← GitHub Actions for GitHub Pages
├── app/
│   ├── globals.css               ← CSS variables, base styles
│   ├── layout.tsx                ← Root layout with Inter font
│   └── page.tsx                  ← Single-page composition
├── components/
│   ├── Navbar.tsx                ← Sticky nav + mobile hamburger
│   ├── Hero.tsx                  ← Hero section with name & CTA
│   ├── About.tsx                 ← About / bio section
│   ├── Skills.tsx                ← Skill tags grid
│   ├── Projects.tsx              ← Project cards
│   └── Contact.tsx               ← Contact info + form
├── lib/utils.ts                  ← cn() utility (clsx + tailwind-merge)
├── next.config.mjs               ← Static export config
├── tailwind.config.ts            ← Tailwind theme extensions
├── postcss.config.mjs            ← PostCSS for Tailwind v4
├── package.json
└── tsconfig.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production (static export)
npm run build

# Preview production build
npm run start
```

## Deployment to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source**
3. Select **GitHub Actions** as the source
4. Push a commit to `main` — the workflow runs automatically

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
- Install Node.js and dependencies
- Run `next build` (with `output: 'export'` in `next.config.mjs`)
- Deploy the `out/` folder to GitHub Pages

## Customizing

- **Name/Bio**: Edit `components/Hero.tsx`, `components/About.tsx`
- **Skills**: Edit the `skills` array in `components/Skills.tsx`
- **Projects**: Edit the `projects` array in `components/Projects.tsx`
- **Contact**: Edit `components/Contact.tsx` — replace the form submission logic with your preferred service (e.g. Formspree, Resend)
- **Colors**: Update CSS variables in `app/globals.css`

## License

MIT
