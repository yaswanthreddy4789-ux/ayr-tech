/**
 * CASE STUDIES — real projects taken from the portfolio. Facts and numbers come from the resume only.
 * CONFIRM you may show each client publicly (check any NDA / employer rules). To hide one, delete its entry.
 * Add a screenshot in /public/case-studies/ and set `image`.
 */
export type CaseStudy = {
  slug: string;
  name: string;
  platform: string;
  stack: string[];
  summary: string;
  role: string;
  url?: string;
  results: string[];
  image?: string;
  imageAlt?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    "slug": "dhe-parts",
    "name": "DHE Parts",
    "platform": "WooCommerce",
    "stack": [
      "WordPress",
      "WooCommerce",
      "Custom plugin",
      "Yoast SEO Premium",
      "LiteSpeed Cache",
      "Elementor"
    ],
    "summary": "B2B tractor and heavy-equipment parts store with roughly 150,000 products. Built a custom plugin and cron-based sync that keeps prices and product data in step with a supplier API within daily call limits, with a verify mode that re-checks product classification. Also scoped a B2B quote-to-order workflow.",
    "role": "Developer",
    "url": "https://dheparts.com/",
    "results": [
      "Roughly 150,000 products managed with automated sync",
      "About 22,000 mis-tagged products cleaned using backup tables"
    ],
    "image": "/case-studies/dhe-parts.jpg",
    "imageAlt": "Homepage of the DHE Parts WooCommerce store"
  },
  {
    "slug": "health-connect-group",
    "name": "Health Connect Group",
    "platform": "WordPress",
    "stack": [
      "WordPress",
      "Elementor Pro",
      "Gravity Forms",
      "WebP media",
      "WCAG 2.1 AA"
    ],
    "summary": "Australian call-centre services website. Built loop grids, trust bars and hero sections, a custom FAQ system (PHP meta box, shortcode and accessible details/summary output), Gravity Forms notifications and optimized WebP media with full alt text, targeting WCAG 2.1 AA with minimal third-party plugins.",
    "role": "Developer",
    "url": "https://www.healthconnectgroup.com.au/",
    "results": [],
    "image": "/case-studies/health-connect.jpg",
    "imageAlt": "Homepage of the Health Connect Group website"
  },
  {
    "slug": "biomiq-skincare",
    "name": "Biomiq Skincare",
    "platform": "Shopify",
    "stack": [
      "Shopify",
      "Klaviyo",
      "Metaobjects",
      "Yotpo"
    ],
    "summary": "Gated Inner Circle and Retailer portals on Shopify driven by Klaviyo customer data and metaobjects, with Yotpo reviews.",
    "role": "Developer",
    "url": "https://biomiqskincare.com/",
    "results": [],
    "image": "/case-studies/biomiq.jpg",
    "imageAlt": "Homepage of the Biomiq Skincare Shopify store"
  },
  {
    "slug": "enwolt-bikes",
    "name": "Enwolt Bikes",
    "platform": "Shopify",
    "stack": [
      "Shopify",
      "Liquid",
      "JSON-LD schema"
    ],
    "summary": "EU electric-bike and moped store (ENGWE and VARUN brands). Shopify theme development plus JSON-LD structured data (Product, FAQPage, HowTo, BreadcrumbList) rolled out across the catalog for rich results.",
    "role": "Developer",
    "url": "https://enwoltbikes.com/",
    "results": [],
    "image": "/case-studies/enwolt-bikes.jpg",
    "imageAlt": "Homepage of the Enwolt Bikes Shopify store"
  },
  {
    "slug": "halcon-marketing",
    "name": "HALCON Marketing",
    "platform": "Wix",
    "stack": [
      "Wix",
      "Velo",
      "CMS collections",
      "Schema"
    ],
    "summary": "Wix website for a St. Louis brand strategy and marketing agency. Ran bulk SEO fixes across hundreds of pages using Velo code and CMS collections.",
    "role": "Developer (team project)",
    "url": "https://halconmarketing.com/",
    "results": [
      "Meta titles and descriptions for 181 pages",
      "About 324 image alt texts",
      "Canonical and breadcrumb schema for 236 pages"
    ],
    "image": "/case-studies/halcon-marketing.jpg",
    "imageAlt": "Homepage of the HALCON Marketing website"
  },
  {
    "slug": "thankful-greetings",
    "name": "Thankful Greetings",
    "platform": "Shopify",
    "stack": [
      "Shopify",
      "SEO",
      "AEO / GEO",
      "Schema"
    ],
    "summary": "SEO, AEO and GEO optimization across a 279-page Shopify store: meta data, image alt text, schema and a full site audit.",
    "role": "Developer",
    "url": "https://thankfulgreetings.com/",
    "results": [],
    "image": "/case-studies/thankful-greetings.jpg",
    "imageAlt": "Homepage of the Thankful Greetings Shopify store"
  },
  {
    "slug": "dirtyboy",
    "name": "DirtyBoy",
    "platform": "Shopify",
    "stack": [
      "Shopify",
      "Liquid",
      "Viral Loops",
      "Klaviyo",
      "Google Apps Script"
    ],
    "summary": "Shopify pre-launch teaser with a custom Liquid section, a Viral Loops referral system, Klaviyo welcome and referral flows, and a Google Apps Script backend serving a live signup counter.",
    "role": "Developer",
    "url": "https://whosadirtyboy.com/",
    "results": [],
    "image": "/case-studies/dirtyboy.jpg",
    "imageAlt": "Homepage of the DirtyBoy Shopify teaser site"
  },
  {
    "slug": "london-tea-merchant",
    "name": "The London Tea Merchant",
    "platform": "Shopify",
    "stack": [
      "Shopify",
      "WCAG 2.1 AA",
      "Accessibility audit"
    ],
    "summary": "WCAG 2.1 AA accessibility audit and remediation of the Shopify storefront.",
    "role": "Developer",
    "url": "https://londonteamerchant.com/",
    "results": [],
    "image": "/case-studies/london-tea-merchant.jpg",
    "imageAlt": "Homepage of The London Tea Merchant Shopify store"
  },
  {
    "slug": "2pi-mind-math",
    "name": "2PI Mind Math",
    "platform": "WordPress",
    "stack": [
      "WordPress",
      "The7 theme",
      "SEO setup",
      "Responsive"
    ],
    "summary": "Redesign of the website for a math tutoring center in McKinney, TX, built on WordPress with on-page SEO checks (heading hierarchy, meta details, alt text, schema) and responsive and form testing.",
    "role": "Developer (team project)",
    "url": "https://2pimindmath.com/",
    "results": [],
    "image": "/case-studies/2pi-mind-math.jpg",
    "imageAlt": "Homepage of the 2PI Mind Math website"
  }
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
