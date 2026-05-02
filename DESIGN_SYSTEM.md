# Team M Musical — Design System

> Design system for **Team M: A New Musical by Dr. Philip A. Woodmore** — a marketing website for the world premiere of an original musical at COCA (Center of Creative Arts), St. Louis, MO, May 2026.

**Source Repository:** `twinnytwin22/team-m` (GitHub — Next.js 15 + Tailwind CSS + Sanity CMS)  
**Live Site:** https://teammthemusical.com  
**GitHub:** https://github.com/twinnytwin22/team-m

---

## Product Overview

Team M is a **single-product marketing website** for a live theatrical production. It is a Next.js app (App Router) using Tailwind CSS v4, shadcn/ui components, Framer Motion animations, and a Sanity CMS backend. The site has the following core pages:

| Page | Route | Purpose |
|---|---|---|
| Home | `/` | Hero, tickets info, synopsis, newsletter |
| About | `/about` | Show description, stats, gallery, testimonials |
| Creative Team | `/about/creative-team` | Bios of creative + production team members |
| Phil Woodmore | `/phil-woodmore` | Bio of the playwright/composer |
| Blog | `/blog` | Sanity-powered blog posts |
| Contact | `/contact` | Contact form |
| Join the Team | `/join-the-team` | Casting/crew interest (currently hidden) |

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Dramatic, emotional, and community-focused.** The writing mirrors the show's themes: healing, vulnerability, connection, redemption.
- **We, not I.** Copy speaks from the production as a collective — "Join us," "Be part of the story."
- **Audience-first empathy.** Copy acknowledges what audiences feel: curiosity, hesitation, desire for connection.
- **Uppercase for impact.** CTAs, section headers, and nav labels are consistently ALL-CAPS, conveying theatrical poster energy.
- **No emoji.** The brand is serious and theatrical — no emoji anywhere in the UI.

### Specific Examples
- Hero tagline: *"A new musical / by Phil Woodmore"* — simple, authorial, no hype
- Synopsis opener: *"In a quiet church basement in the fictional town of Macey, Indiana…"* — literary, scene-setting
- CTA label: **RESERVE TICKETS** — imperative, uppercase, no softening
- Stats: "4+ Years in Development", "15+ Workshops & Readings" — concrete proof points, no fluff
- Newsletter: "Stay Updated" / "Join our mailing list for exclusive updates, behind-the-scenes content, and early access to tickets."
- Testimonial attribution: "— De-Andrea Blaylock-Solar" — em-dash, full name, no title/credential

### Casing & Punctuation
- Section headings: uppercase via CSS (`text-transform: uppercase`)
- Body copy: sentence case
- Navigation: uppercase (`font-oswald uppercase tracking-wide`)
- Event details: standard sentence case with proper time/date formatting (e.g. "Fri, May 15 – 7:00PM")
- Em-dash (—) used for testimonial attribution

### What Is and Isn't Said
- The show's themes are named directly: grief, identity, mental health, healing, race, inclusion
- Mature content is disclosed up front ("Mature language, depictions of violence, and mental health topics. Recommended for ages 11+")
- The production's development history is cited as credibility ("4+ years," "15+ workshops")

---

## VISUAL FOUNDATIONS

### Color System
Three-color brand palette: **Forest Green · Amber Gold · Black**

| Token | Hex | Usage |
|---|---|---|
| `--color-green` | `#00913f` | Primary brand — header bg, synopsis section bg, newsletter card, CTA sections |
| `--color-green-mid` | `#106e39` | Mid-gradient stop |
| `--color-green-dark` | `#0d4024` | Dark gradient stop, deepest green |
| `--color-gold` | `#f7941d` | Accent — all CTAs, highlight text, icon tints, stat values, role labels |
| `--color-gold-light` | `#f7ae1d` | Lighter gold border variant |
| `--color-black` | `#000000` | Ticket section bg, footer bg, button text on gold |
| `--color-white` | `#ffffff` | Page bg, newsletter section bg, text on dark |

**Green gradient** is a signature motif: `from-[#0d4024] via-[#106e39] to-[#00913f]` — used in both the LandingPageHeader (top-to-bottom) and Synopsis section (top-left to bottom-right). Black sections (Tickets, Footer) use flat `#000` with no gradient.

### Typography
Four font families in play:

| Role | Family | Usage |
|---|---|---|
| Display / Accent | **Protest Riot** (Google Fonts) | Section header banners ("About Team M.", "The Creative Team"), key emotional words in synopsis ("healing", "connection", "redemption") |
| Heading / UI | **Oswald** | Nav links, CTAs, card headings, ticket section labels — always uppercase with tracking |
| Body / UI | **Montserrat** | General body text, form inputs, info rows (venue, price, time) |
| Prose | **Crimson Text** | Newsletter subtext, longer-form descriptive copy |
| Mono | **Geist Mono** | No prominent usage; inherited from Next.js starter |

- Body text on green backgrounds uses `text-white/80` (80% white opacity) for visual hierarchy
- Gold (`#f7941d`) is used for display text on green backgrounds — high contrast, high drama
- Text shadow applied to Protest Riot headings: `text-shadow-black text-shadow-lg` for legibility over imagery

### Backgrounds
- **Hero:** Full-bleed fixed-attachment background image (`reamm-bg-full_1@4x.png`) with a `from-black/40 via-transparent to-black/50` gradient overlay for text legibility
- **Synopsis / LandingPageHeader:** Flat green-to-dark-green gradient — no imagery, just color
- **Tickets / Footer:** Flat `#000000` — stark, theatrical
- **About / Creative Team:** `bg-gray-100` (#f3f4f6) — neutral, editorial
- **Newsletter:** White outer (`bg-white`), green card inner (`bg-teamm-green`) — intentional contrast

### Cards
- White background, `border border-gray-200`, `rounded-md`, `shadow-md`
- Hover: `hover:shadow-lg` — subtle depth increase, no color change
- Padding: `p-8` (32px)
- Team member bios: float-right circular avatar (`rounded-full`, `w-28 h-28`, `object-cover object-top`)

### Buttons
Single dominant CTA style: **gold fill, black text, uppercase, Oswald font**
```
bg-teamm-gold hover:bg-teamm-gold/90 text-black font-oswald uppercase tracking-wider font-bold
```
- Hero CTA: `py-4 px-10 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105` — most prominent
- Standard: `h-10 px-4 py-2 rounded-md` — default shadcn size
- Large: `py-6 px-8 text-lg` — ticket section
- No ghost/outline button used in production UI; shadcn variants exist but are unused

### Hover & Press States
- Buttons: `hover:bg-teamm-gold/90` + `hover:scale-105` + shadow elevation
- Cards: `hover:shadow-lg` (no scale, no color shift)
- Nav links: `hover:underline underline-offset-5 decoration-3`
- Images in gallery: `group-hover:scale-105` (inside overflow-hidden container)
- Logo: CSS `drop-shadow` filter on hover (legacy from Next.js starter, minimally used)

### Animation
Framer Motion is the animation library. Consistent patterns:
- **Entrance reveals:** `opacity: 0 → 1`, `y: 30 → 0`, `duration: 0.8–1s`, `ease: easeOut`
- **Logo on hero:** `opacity 0 → 1` + `scale 0.8 → 1` + `rotate -15deg → 0`, `duration: 1.2s`
- **Stagger on team cards:** `delay: i * 0.2` per card
- **whileInView with `once: true`** — triggers on scroll, plays once
- No bounce, no spring, no loop animations. All easing is `easeOut` — theatrical fades and lifts.

### Spacing
- Section vertical padding: `py-20` (80px) or `py-28` (112px)
- Max content width: `max-w-5xl` or `max-w-7xl` with `mx-auto`
- Header height: `h-20` (80px), fixed positioned

### Border Radius
- Default elements: `rounded-md` (6px)
- Hero CTA: `rounded-lg` (8px)
- Avatars / icon circles: `rounded-full`
- No sharp 0px corners used

### Shadows
- Cards: `shadow-md` (resting), `shadow-lg` (hover)
- Hero CTA: `shadow-xl` → `shadow-2xl` on hover
- Image drop-shadow: `drop-shadow-2xl` on hero logo

### Iconography → see ICONOGRAPHY section below

### Overlay & Transparency
- Hero background: `bg-black/40` (40% black) + `bg-black/50` (50% black) gradient overlay
- Synopsis section subtle texture: `before:bg-linear-to-tr before:from-black/10 before:to-transparent`
- Muted body text on green: `text-white/80` or `text-white/95`
- No blur (`backdrop-blur`) used anywhere

### Imagery
- **Photography style:** Warm, theatrical, professional headshots; show photography with dramatic lighting
- **Hero image:** Full-bleed atmospheric background (`reamm-bg-full_1@4x.png`) — dark, dramatic
- **No illustrations or hand-drawn graphics** — all imagery is photographic
- Presented by COCA logo (`coca.jpg`) shown as partner branding

---

## ICONOGRAPHY

### Approach
The site uses **react-icons** (specifically `react-icons/fa` — Font Awesome 5) for social icons and **Lucide React** for UI utility icons. No custom SVG icons, no icon fonts, no emoji.

### Social Icons (react-icons/fa)
- `FaFacebook` — Facebook social link
- `FaInstagram` — Instagram social link
Used in: Footer and SocialRow component. Color is passed as prop (`iconColor`), defaults to `"green"`.

Social profiles:
- Facebook: https://www.facebook.com/profile.php?id=61576144800633
- Instagram: https://www.instagram.com/teammthemusical/

### UI Icons (Lucide React)
Used in the Tickets section for event detail rows:
- `MapPin` — Venue location
- `CalendarDays` — Show dates
- `Clock` — Run time
- `Ticket` — Price info

Used in Newsletter section:
- `MessageSquare` — Email/updates icon (displayed in white circle on green bg)

All Lucide icons are: `w-5 h-5` (20px), colored `text-teamm-gold` when on dark/black backgrounds.

### Navigation Chevron
Inline SVG chevron-down used in the About dropdown menu in the header. `stroke="currentColor"`, `strokeWidth={2}`, rotates 180° on hover via `group-hover:rotate-180 transition-transform`.

### Key Visual Assets (in `assets/`)
| File | Usage |
|---|---|
| `teamm-logo-full.png` | Full horizontal logo — used in Footer |
| `teamm-logo-m.png` | "M" logomark — used in Header, Synopsis section |
| `teamm-bg.png` | Background image (standard res) |
| `reamm-bg-full_1@4x.png` | Hero full-bleed background (high-res) |
| `og-image.jpg` | Social/OG image (1200×630) |
| `coca.jpg` | COCA presenter logo |
| `assets/headshots/` | Creative team & production team headshots |

---

## FILE INDEX

```
/
├── README.md                   ← This file
├── SKILL.md                    ← Agent skill definition
├── colors_and_type.css         ← All CSS custom properties (colors + type)
├── assets/
│   ├── teamm-logo-full.png     ← Full wordmark logo
│   ├── teamm-logo-m.png        ← M logomark
│   ├── teamm-bg.png            ← Hero background image
│   ├── reamm-bg-full_1@4x.png  ← High-res hero bg
│   ├── og-image.jpg            ← OG/social share image
│   ├── coca.jpg                ← COCA presenter logo
│   └── headshots/              ← Team member headshots (9 photos)
├── preview/
│   ├── colors-brand.html       ← Brand color swatches
│   ├── colors-semantic.html    ← Semantic color tokens
│   ├── type-display.html       ← Display & heading specimens
│   ├── type-body.html          ← Body & prose specimens
│   ├── spacing-tokens.html     ← Spacing scale
│   ├── components-buttons.html ← Button variants
│   ├── components-cards.html   ← Card patterns
│   ├── components-nav.html     ← Navigation header
│   ├── components-footer.html  ← Footer
│   ├── brand-logos.html        ← Logo lockups
│   └── brand-iconography.html  ← Icon system overview
└── ui_kits/
    └── website/
        ├── README.md
        ├── index.html          ← Interactive click-thru prototype
        ├── Header.jsx
        ├── Footer.jsx
        ├── Hero.jsx
        ├── Tickets.jsx
        ├── Synopsis.jsx
        ├── Newsletter.jsx
        └── CreativeTeam.jsx
```

---

## UI KITS

### Website (`ui_kits/website/`)
Hi-fi recreation of the Team M marketing website. Includes interactive click-through of the main pages: Home, About, and Creative Team. Built as React + Babel inline components.

Design width: **1440px** (responsive down to mobile)
