# SocialBug Media — Website

A premium, experimental, animated agency website for SocialBug Media, built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, GSAP, Three.js / React Three Fiber, Lenis, and Resend.

## Stack

- **Next.js 16** (App Router, Turbopack, React 19)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveals, page/section animations
- **GSAP** — available for advanced scroll-timeline work
- **Three.js / React Three Fiber / drei** — the rotating network globe in the hero (desktop only, lightweight SVG fallback on mobile)
- **Lenis** — smooth scrolling (respects `prefers-reduced-motion`)
- **React Hook Form + Zod** — contact form validation
- **Resend** — contact form emails (lead notification + auto-confirmation)
- **lucide-react** — icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

```bash
cp .env.example .env.local
```

| Variable | Required | Notes |
|---|---|---|
| `RESEND_API_KEY` | Yes, for the contact form to send real emails | Get one at [resend.com](https://resend.com). Without it, `/api/contact` returns a 500 and logs a warning — the rest of the site works fine. |
| `CONTACT_TEAM_EMAIL` | No (defaults to `team@socialbugmedia.com`) | Inbox that receives new-lead notifications. |

**Before going live:**
1. Verify a sending domain in your Resend dashboard.
2. Update `FROM_ADDRESS` in `app/api/contact/route.ts` to an address on that verified domain.
3. Update `LOGO_URL` in `lib/email-templates.ts` to your production logo URL (it currently points at `https://socialbugmedia.com/logo/socialbug-icon.png`).

## Project structure

```
app/
  page.tsx                  Home
  about/                    About
  services/                 Services list + /services/[slug] detail
  case-studies/             Case studies list + /case-studies/[slug] detail
  testimonials/             Testimonials wall
  network/                  Interactive network map
  insights/                 Insights list + /insights/[slug] detail
  contact/                  Contact / Book a Demo
  api/contact/route.ts      Resend email handler
  not-found.tsx             Custom 404 ("Signal lost")
  globals.css               Design tokens, gradients, keyframes

components/
  layout/                   Navbar, Footer, MobileMenu, SplashScreen, SmoothScroll
  sections/                 Homepage sections (Hero, HowItWorks, NetworkSection, ...)
  ui/                       Reusable primitives (Button, Badge, cards, PageHero, ...)
  three/                    NetworkOrb (React Three Fiber)
  forms/                    ContactForm

lib/
  data.ts                   All site content (services, case studies, testimonials, insights, nav)
  schema.ts                 Zod schema for the contact form
  email-templates.ts        HTML email templates for Resend
  utils.ts                  `cn()` helper
```

## Editing content

Almost everything on the site (services, case studies, testimonials, insights, nav links, network categories) is data-driven from **`lib/data.ts`** — edit that file rather than hunting through components.

## Design notes

- Colors, fonts, and animation utilities live in `app/globals.css` under `:root` and `@theme inline` (`--sb-black`, `--sb-pink`, `--sb-lime`, etc.).
- `font-display` = Anton (bold headlines), `font-heading` = Space Grotesk (UI/labels), body = Inter.
- The splash screen only shows once per browser session (`sessionStorage`).
- All non-essential motion respects `prefers-reduced-motion: reduce`.

## Build

```bash
npm run build
npm run start
```

## Deploying

This is a standard Next.js app — deploys as-is to Vercel or any Node hosting. Set the environment variables above in your hosting provider's dashboard before going live.
