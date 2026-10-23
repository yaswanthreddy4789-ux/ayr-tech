# AYR Tech Services

Lead-generation website for web development services (WordPress, WooCommerce, Shopify, Wix, redesigns, landing pages, maintenance, accessibility, technical SEO, integrations). Next.js (App Router) · TypeScript · Tailwind CSS 4 · Motion · Lucide.

This is a **separate project** from the personal portfolio (`yaswanth-portpolio`). They link to each other but share no code or deployment.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
npm start
```

## Edit content (all in `src/config/`)

| File | What it controls |
| --- | --- |
| `business.ts` | Business name, owner, email/phone/WhatsApp, location and time zone, markets served, stats, budgets, navigation |
| `services.ts` | The 11 service pages (headline, who it's for, problems, deliverables, FAQs, related case studies) |
| `case-studies.ts` | Case studies and screenshots (`public/case-studies/`) |
| `guides.ts` | The SEO guides (`/guides/<slug>`): add an object to publish a new one. Sitemap, Article schema and internal links update automatically |

Things marked `ASSUMPTION` in the config need your confirmation: the business name spelling, budget ranges, and which case studies you may show publicly.

## Environment variables

Copy `.env.example` to `.env.local`. On your host set the same keys in its environment-variable settings.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Final public URL of this site (canonical links, sitemap, Open Graph) |
| `NEXT_PUBLIC_PORTFOLIO_URL` | Your portfolio, linked from header/About/footer |
| `CONTACT_TO_EMAIL` | Where quote requests are delivered |
| `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` | Optional. Better deliverability than the default relay |

## Quote form

`POST /api/contact` validates input on the server, rejects bots (hidden field, minimum fill time), rate-limits per IP (best effort), then sends the email:

1. **Resend** if `RESEND_API_KEY` is set.
2. Otherwise the **FormSubmit** relay. The first submission to an address triggers an activation email; click *Activate Form* once. Until then the form shows an honest "could not be delivered, please email me" message. It never claims success without confirmation.

The form fires a browser event `quote:submitted` on success. Listen for it to count conversions in your analytics tool.

## SEO

Topics for the guides were chosen by search intent (platform comparisons, cost, redesign, accessibility, schema, security, large catalogs, hiring remotely). No keyword-volume data was available when they were written; check Search Console after a few weeks and expand whatever starts getting impressions.

Per-page titles and descriptions, canonical URLs, sitemap, robots, Open Graph image, and JSON-LD (Organization, Service, BreadcrumbList, FAQPage, Article). One global English site; no hreflang until genuine regional variants exist.

After deploying: add the site to Google Search Console and submit `/sitemap.xml`.

**Country pages** (for example "WordPress developer for UK businesses") are deliberately not created yet. Add them only after keyword research shows real demand, with genuinely local content and no invented offices or clients.

## Hosting (important)

This is a commercial site (it advertises paid services). **Vercel's Hobby plan is for non-commercial use only**, so host it on Vercel Pro or another host whose free/paid terms allow commercial use (check the host's current terms). Using a second free Hobby account does not change the rule.

## Deploy

1. Create an empty GitHub repository and push this folder:
   ```bash
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. Import the repo in your host (framework: Next.js, default build settings).
3. Add the environment variables above, deploy, then set `NEXT_PUBLIC_SERVICES_URL` in the **portfolio** project to this site's URL so its "Hire me" button and old `/services` links point here.
