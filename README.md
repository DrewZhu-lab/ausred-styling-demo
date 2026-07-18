# AusRed Styling — marketing site

Property styling / home staging site for Ausred International Investment Group.
Single-page React app: hero carousel, AI Style Studio, portfolio, services, contact.

## Stack

Vite 7 · React 19 · TypeScript · Tailwind CSS v4 (`@tailwindcss/vite`) · lucide-react

## Commands

```bash
npm install
npm run dev      # http://localhost:3003
npm run build    # type-check + production build → dist/
```

## Structure

- `src/data.ts` — all content: hero slides, style previews, projects, services, contact copy
- `src/components/Hero.tsx` — full-screen crossfade carousel (Ken Burns zoom)
- `src/components/AIStudio.tsx` — "enter your address → preview styles" experience
- `src/components/Portfolio.tsx` + `BeforeAfter.tsx` — stats, drag comparison slider, project grid
- `src/components/Services.tsx`, `Contact.tsx`, `Footer.tsx`, `Nav.tsx`

## Current placeholders (to replace before launch)

- **All imagery** is Unsplash stock via hotlink — replace with real AusRed project photos.
  The before/after slider currently shows one photo with the Before half desaturated
  in CSS; swap in a real before/after pair (`BeforeAfter` can take two images again).
- **Stats** (280+ homes, 12%, 18 days) are invented — replace with real numbers.
- **Contact form** has no backend — hook up to email service / API before launch.
- **Phone number** intentionally omitted until AusRed confirms one.

## AI Style Studio — demo vs production

The current build is a **demo**: address autocomplete against a static list, a staged
"analysing" progress sequence, and six curated style cards. No external calls, no API keys.

**Free-preview limit:** each customer gets 3 generations, after which a
"book a free consultation" gate appears. Demo enforcement is `localStorage`
(per browser, trivially bypassable — fine for demo). Production must enforce
server-side: count by email/phone captured before generating, plus IP rate
limiting as a backstop.

Production path (all pieces are additive, UI stays as-is):

1. **Address input** → Google Places Autocomplete (or Geoscape for AU addresses).
2. **"Styled homes near you"** → AusRed project database with geocoded past
   projects; count + styles queried by radius.
3. **Preview generation** → image-generation API (e.g. Gemini image models or
   Stable Diffusion virtual-staging pipelines) seeded with the property's own
   photos (user upload or listing photos) restyled per style profile.
4. Serverless proxy (Lambda@Edge / API Gateway) so API keys never ship to the
   browser; static hosting can stay S3 + CloudFront.
