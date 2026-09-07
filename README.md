# AP Blood & Blood Cancer Centre — Website

Production Next.js (App Router) website for AP Blood & Blood Cancer Centre, a hematology and
blood cancer specialty centre in Vijayawada, Andhra Pradesh, led by Dr. Amarnadh Polisetty.

## Stack

Next.js 16 (App Router, Turbopack) · TypeScript (strict) · Tailwind CSS v4 · shadcn/ui (Base UI) ·
Framer Motion · React Hook Form + Zod · Resend (email) · `next/font` · `next/image` · `next/og`

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes (before launch) | Canonical site URL used in metadata, sitemap, robots.txt and JSON-LD. Defaults to a placeholder domain if unset. |
| `RESEND_API_KEY` | Yes (for forms to send email) | Powers the appointment / second-opinion / referral form email relay via [Resend](https://resend.com). Without it, form submissions are validated and logged to the server console but no email is sent — see `lib/email.ts`. |

An SMTP/Nodemailer fallback is scaffolded and commented out in `lib/email.ts` if you'd rather relay
through an existing mailbox instead of Resend — see the comment block at the bottom of that file
for the `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` variables it expects.

**No database. No PHI persistence.** Forms validate client + server side (Zod), apply honeypot +
minimum-submit-time spam checks, and relay a plain-text email. Nothing is written to disk or a
database at any point.

## Content architecture

Long-form page copy lives in typed data modules under `content/`, not hand-duplicated page files:

- `content/site.ts` — NAP, doctor bio/credentials, stats, catchment cities, nav — single source of truth for entity phrasing sitewide.
- `content/conditions.ts` (10 entries), `content/treatments.ts` (7 entries), `content/blog.ts` (10 entries) — full original copy per the `ConditionEntry` / `TreatmentEntry` / `BlogPostEntry` types in `content/types.ts`.
- `content/faqs.ts`, `content/testimonials.ts`.

Each dynamic route (`app/conditions/[slug]`, `app/treatments/[slug]`, `app/blog/[slug]`) renders a
shared template component (`components/templates/*`) driven by that data — this keeps every page's
structure consistent (direct-answer intro → understanding → symptoms/process → diagnosis/candidacy
→ treatment/what-to-expect → why-here → FAQs with schema → medically-reviewed badge → CTA) without
copy-pasting the same JSX 27 times. To add or edit a condition/treatment/article, edit the relevant
content file — no route file changes needed.

The Bone Marrow Transplant entry in `content/treatments.ts` also powers the flagship
`/bone-marrow-transplant` page (its own top-level route, outside `/treatments/[slug]`).

## Compliance guardrails (do not remove)

- **No self-declared superlatives** ("best", "top", "no.1", "leading") in titles, H1s or body copy. Enforced by convention while writing content — re-check with:
  `grep -rniE "\b(best|no\.?1|number one|leading|top-rated)\b" content/ app/`
- **No fabricated reviews or ratings.** `content/testimonials.ts` ships as an empty array with a
  `CLIENT-VERIFIED DATA REQUIRED` comment. `TestimonialsSection` renders an honest empty state and
  never emits `Review`/`aggregateRating` schema. Do not populate it without written patient consent.
- **`MedicallyReviewedBadge`** is a required prop-driven element on every condition/treatment/blog
  template — it cannot be omitted without editing the template itself.
- **Insurance/empanelment** (`content/site.ts` → `INSURANCE_SCHEMES`) ships empty for the same
  reason — only add schemes the client has explicitly confirmed.
- **No PHI persistence** — see Environment variables above.

## Required client inputs before launch

The site is fully built and content-complete; the following are the only remaining inputs,
all clearly marked `CLIENT-VERIFIED DATA REQUIRED` in code where relevant:

1. **Final domain** → set `NEXT_PUBLIC_SITE_URL`.
2. **Real photography** — see Asset manifest below. Placeholder graphics are in place so the site
   is fully navigable, but real photography is required before launch (YMYL trust signal).
3. **Insurance/empanelment list** — Dr. NTR Vaidya Seva (Aarogyasri), EHS, CGHS, private
   insurers/TPAs actually empanelled. Add confirmed entries to `INSURANCE_SCHEMES` in
   `content/site.ts`. Nothing renders on `/insurance` until this is populated.
4. **Real patient testimonials** (written consent) → `content/testimonials.ts`.
5. **Google Business Profile URL** → `SAME_AS` array in `content/site.ts` (feeds the
   `MedicalClinic` JSON-LD `sameAs` field).
6. **Conference name** for the Best Speaker Award → `DOCTOR.achievements` in `content/site.ts`
   (currently reads "at a national hematology conference").
7. **Resend API key** (or SMTP credentials) → see Environment variables above.
8. **Exact clinic geo-coordinates** — `NAP.geo` in `content/site.ts` currently holds an
   approximate Vijayawada lat/long placeholder; replace with the centre's precise coordinates for
   the `MedicalClinic` schema and map accuracy.

## Asset manifest

All slots below already exist as on-brand, abstract, patient-sensitive placeholder graphics in
`public/images/` (generated programmatically — soft rose/crimson gradients and line-art icons,
never literal blood/needle imagery), sized and named to match. **Drop in real photography at the
same filename and the site requires no code changes.**

| File | Used on | Recommended size |
|---|---|---|
| `doctor-portrait.jpg` | Home, `/dr-amarnadh-polisetty` | 768×960 (4:5) |
| `doctor-consult.jpg` | (available for future use — consultation-in-progress shot) | 1200×800 |
| `centre-exterior.jpg` | `/about` | 1200×900 |
| `centre-reception.jpg` | `/gallery` | 1200×900 |
| `daycare-ward.jpg` | `/gallery` | 1200×900 |
| `lab.jpg` | `/gallery` | 1200×900 |
| `og-default.jpg` | Manual fallback OG asset (the site generates OG images dynamically via `next/og` on every route by default — see `app/opengraph-image.tsx` and the per-route `opengraph-image.tsx` files) | 1200×630 |
| `logo.svg` | Brand mark source (header/footer currently render an inline SVG version of the same mark) | vector |
| `gallery-01.jpg` … `gallery-08.jpg` | `/gallery` | 1200×900 |

## SEO / structured data / GEO

- `generateMetadata` on every route: unique title/description, canonical, OG/Twitter tags.
- JSON-LD via `lib/schema.ts`: `Physician` + `MedicalClinic`/`MedicalOrganization` (root layout,
  sitewide), `MedicalCondition` (condition pages), `MedicalProcedure` (treatment pages), `FAQPage`
  (any FAQ block), `BreadcrumbList` (via the shared `Breadcrumbs` component), `Article` (blog
  posts). No `aggregateRating`/`Review` schema anywhere.
- `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts` — route-handler based, generated from the
  content data modules.
- `public/llms.txt` — plain-text entity description for AI assistants (GEO layer). `robots.ts`
  explicitly allows `GPTBot`, `ClaudeBot`, `PerplexityBot` and `Google-Extended`.
- Every condition/treatment/blog page opens with a 2–3 sentence extractable direct-answer block.
- Telugu-language FAQ pairs live in `content/faqs.ts` (`teluguFaqs`) and appear on the home page
  and `/faqs`.

## Design tokens

All color/typography/radius tokens are defined once in `app/globals.css` (Tailwind v4 `@theme`
block) — no raw hex values in components. Color usage discipline is documented as a comment at the
top of that block; see the brief for the full rationale (red ≤ ~10% of any viewport, `--color-ruby`
restricted to ≥24px text/icons, `--color-rose` never used for text, etc.).

Fonts: **Fraunces** (display/serif headlines) + **Plus Jakarta Sans** (body/UI), self-hosted via
`next/font/google` in `app/layout.tsx`.
