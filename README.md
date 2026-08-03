# Mr Chef Hospitality — Website

Complete corporate website for Mr Chef Hospitality, a full-spectrum
hospitality consultancy — hotels, restaurants, resorts, cloud kitchens, and
commercial kitchens, from concept to launch.

## Stack
React 19 + Vite, Bootstrap 5 (grid/utilities only), Bootstrap Icons,
React Router DOM, Framer Motion, Lenis (smooth scroll), React Hook Form.
All visual styling is custom CSS — no Tailwind/MUI/Chakra.

## Getting started
```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> /dist
npm run preview   # preview the production build
```

## Pages
- **Home** — full flagship experience: self-drawing blueprint hero, trusted
  clients marquee, about preview, 8-step journey rail, interactive services,
  filterable project grid, industries, why-choose-us, testimonial slider,
  7-stage process timeline, closing CTA
- **About** — founding story, mission/vision/values, company timeline,
  leadership, achievements
- **Services** — all 15 services grouped into 3 disciplines with benefits
- **Projects** — filterable portfolio (12 projects) with case-study modal
- **Industries** — all 10 served industries as alternating showcase rows
- **Career** — culture, open positions, in-page application form
- **Testimonials** — 6 written client reviews
- **Contact** — validated form (react-hook-form) + business info + map slot
- **Privacy Policy** / **Terms & Conditions** — concise legal pages
- **404** — custom not-found page

Deliberately kept lean from Services onward — interior pages use a single
shared `PageHero` banner and 2–3 content sections rather than stacking every
possible block, so the site reads as complete rather than padded.

## Design tokens
Colors, type scale, spacing, and easing curves are centralized in
`src/styles/tokens.css` — change the palette or type scale there and it
cascades everywhere.

Brand system: white background, near-black for dark sections and text,
brand red (`--color-accent`, #B3122E) for all CTAs/links/accents, and a
brighter red (`--color-accent-light`) for pop-accents on dark backgrounds.
Headings use Fraunces (bold, warm serif); body text uses Work Sans.

## Motion details
Kept deliberately restrained: the self-drawing blueprint hero, purposeful
scroll-reveals, and two crafted touches — a mouse-tracked ambient glow on
the closing CTA, and click-drag-to-scroll on the horizontal process rail.
Removed a first pass at "more animation" (scroll-progress bar, click-ripple,
magnetic buttons, page-fade transitions) — on reflection those read as
stock add-ons rather than considered choices, so they're gone.

## Signature feature: Project Brief wizard (Contact page)
Replaced the plain contact form with a 3-step wizard — venue type → needs
→ details — that generates a tailored one-line brief as you go, and on
submit offers to continue the conversation on WhatsApp with that brief
pre-filled. This is the "stand out" piece: real state logic and a genuine
lead-qualification tool suited to a consultancy's actual sales process,
not decorative motion.

## Notes
- All imagery is Unsplash placeholder photography — swap for real
  photography/logo before launch.
- Contact details, phone number, and social links are realistic
  placeholders — update with real business info.
- Respects `prefers-reduced-motion`.
