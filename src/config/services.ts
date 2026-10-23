/**
 * SERVICES — one landing page per service at /services/<id>.
 * Keep claims factual: no invented prices, timelines, results or client names.
 * Case-study links reference slugs from case-studies.ts.
 */

export type Service = {
  id: string;
  title: string;
  /** One-line card summary */
  short: string;
  /** Key from components/Icon.tsx */
  icon: string;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  intro: string;
  /** Who it is for */
  forWho: string;
  /** Problems this solves */
  problems: string[];
  deliverables: string[];
  caseStudies: string[];
  related: string[];
  faqs: { q: string; a: string }[];
};

const cost =
  "Cost depends on scope: the number of pages, features and integrations. Send a short description through the quote form and I'll reply with next steps and an estimate.";

export const services: Service[] = [
  {
    id: "wordpress-development",
    title: "WordPress Development",
    short: "Custom WordPress builds, theme work, plugins and PHP-level customization.",
    icon: "layout",
    seoTitle: "WordPress Developer for Businesses Worldwide",
    seoDescription:
      "Custom WordPress websites, theme customization, plugin development and PHP work for businesses in the US, UK, Australia and Canada.",
    headline: "WordPress development that fits how your business works",
    intro:
      "From custom page layouts and Elementor builds to custom plugins and PHP, I build WordPress sites that are flexible to grow and straightforward to maintain.",
    forWho: "Businesses that want full control over content and design, or that already run WordPress and need it extended, fixed or redesigned.",
    problems: [
      "A theme that almost fits, but can't do what you actually need",
      "A site that is slow, fragile or hard for your team to edit",
      "Functionality that off-the-shelf plugins don't provide",
    ],
    deliverables: [
      "Custom website build or redesign on WordPress",
      "Theme customization and Elementor Pro layouts, including loop grids and custom interactions",
      "Custom plugins, post types, taxonomies, meta boxes and shortcodes",
      "Plugin selection, configuration and integration",
      "Caching, backups and security set-up",
      "Responsive and form testing before launch",
    ],
    caseStudies: ["health-connect-group", "2pi-mind-math"],
    related: ["woocommerce-development", "website-maintenance", "technical-seo-and-schema"],
    faqs: [
      { q: "Can you work on my existing WordPress site?", a: "Yes. I can customize an existing theme, fix issues, add features or redesign sections without starting from scratch." },
      { q: "Do you build custom plugins?", a: "Yes, when a plugin doesn't exist or doesn't fit. I write custom WordPress plugins in PHP for things like API-driven sync, custom FAQ systems and admin tooling." },
      { q: "What does it cost?", a: cost },
    ],
  },
  {
    id: "woocommerce-development",
    title: "WooCommerce Development",
    short: "WooCommerce stores, large catalogs, API-driven product sync and custom order workflows.",
    icon: "cart",
    seoTitle: "WooCommerce Developer: Stores and Large Catalogs",
    seoDescription:
      "WooCommerce store builds, product catalog management, supplier API sync and custom order workflows by an experienced WordPress developer.",
    headline: "WooCommerce stores that stay accurate as the catalog grows",
    intro:
      "Selling on your own WordPress site gives you full ownership of the store. I set up and customize WooCommerce for everything from a small shop to a catalog with well over a hundred thousand products.",
    forWho: "Retailers and distributors who want their store on their own WordPress site, including B2B businesses with large catalogs.",
    problems: [
      "Prices and stock drifting out of date versus a supplier",
      "Thousands of products tagged or categorized wrongly",
      "A checkout or quote process that doesn't match how you sell",
    ],
    deliverables: [
      "Store set-up: products, categories, attributes and variations",
      "Cart, checkout and payment gateway configuration",
      "API-driven price and stock sync with cron jobs",
      "Safe bulk clean-up of product data using backup tables",
      "Custom taxonomies, order statuses and role-based access",
      "B2B quote-to-order workflow planning",
    ],
    caseStudies: ["dhe-parts"],
    related: ["wordpress-development", "shopify-development", "third-party-integrations"],
    faqs: [
      { q: "WooCommerce or Shopify?", a: "WooCommerce suits those who want maximum flexibility and ownership on WordPress. Shopify suits those who want a hosted, low-maintenance store. I work with both and can recommend based on your needs." },
      { q: "Can you handle a very large catalog?", a: "Yes. I've managed a catalog of roughly 150,000 products with automated sync, taxonomy-based classification and safe bulk updates." },
      { q: "What does it cost?", a: cost },
    ],
  },
  {
    id: "shopify-development",
    title: "Shopify Development",
    short: "Shopify and Shopify Plus themes, Liquid sections, custom checkout logic and portals.",
    icon: "shopping",
    seoTitle: "Shopify Developer: Themes, Liquid and Shopify Plus",
    seoDescription:
      "Shopify and Shopify Plus development: Liquid sections, theme customization, custom cart and checkout logic, and customer portals.",
    headline: "Shopify stores that are easy to manage and pleasant to buy from",
    intro:
      "I build and customize Shopify stores with attention to product pages, collections and the overall shopping experience, including custom logic on Shopify Plus.",
    forWho: "Brands and retailers launching a new Shopify store or improving an existing one.",
    problems: [
      "A theme that can't show your products the way you want",
      "Pricing, cart or checkout rules Shopify doesn't offer out of the box",
      "Customer or retailer access that needs to be gated",
    ],
    deliverables: [
      "Theme customization and custom Liquid sections",
      "Product, collection and navigation improvements",
      "Custom pricing, cart and checkout logic on Shopify Plus using the Draft Orders API and a serverless backend",
      "Gated customer and retailer portals using metafields and metaobjects",
      "Klaviyo, Yotpo and referral-tool integrations",
      "Responsive testing across devices",
    ],
    caseStudies: ["enwolt-bikes", "biomiq-skincare"],
    related: ["third-party-integrations", "technical-seo-and-schema", "landing-page-development"],
    faqs: [
      { q: "Can you customize my existing Shopify theme?", a: "Yes. I can adjust layouts, sections and styling on your current theme." },
      { q: "Do you work on Shopify Plus?", a: "Yes, including custom cart and checkout logic built with the Draft Orders API and a serverless backend." },
      { q: "What does it cost?", a: cost },
    ],
  },
  {
    id: "wix-development",
    title: "Wix Website Development",
    short: "Wix sites and Velo code: layouts, forms, bulk SEO fixes and CMS collections.",
    icon: "panel",
    seoTitle: "Wix Developer: Websites, Velo and SEO",
    seoDescription:
      "Wix website design and development, including Velo code, CMS collections and bulk SEO fixes across hundreds of pages.",
    headline: "Wix websites that look polished and are simple to manage",
    intro:
      "Wix is a good fit when you want a good-looking site quickly and prefer to manage it yourself. I design and customize Wix sites, and use Velo code when a page needs more than the editor can do.",
    forWho: "Small businesses, agencies and startups that want a fast, self-managed website, or a large Wix site that needs systematic SEO clean-up.",
    problems: [
      "A Wix site that looks dated or breaks on mobile",
      "Hundreds of pages with missing meta titles, descriptions or image alt text",
      "Needing behaviour the Wix editor alone can't provide",
    ],
    deliverables: [
      "Business website or landing page on Wix",
      "Responsive layout checks on mobile and desktop",
      "Velo code and CMS collections for data-driven pages",
      "Bulk SEO fixes: meta data, alt text, canonical and breadcrumb schema",
      "Forms and basic site settings configured",
    ],
    caseStudies: ["halcon-marketing"],
    related: ["website-redesign", "technical-seo-and-schema", "landing-page-development"],
    faqs: [
      { q: "When is Wix not the right choice?", a: "If you need very advanced custom functionality or a very large catalog, WordPress or a custom build may serve you better. I'll tell you honestly." },
      { q: "Can you fix SEO across a big Wix site?", a: "Yes. On one Wix site I used Velo code and CMS collections to fix meta data for 181 pages, about 324 image alt texts, and canonical and breadcrumb schema for 236 pages." },
      { q: "What does it cost?", a: cost },
    ],
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    short: "Modernize an outdated site with a clearer structure and better mobile experience.",
    icon: "refresh",
    seoTitle: "Website Redesign Services",
    seoDescription:
      "Website redesign on WordPress, Shopify or Wix: a modern look, clearer structure and better mobile experience without losing what works.",
    headline: "Redesign an outdated website without starting from zero",
    intro:
      "If your site looks dated, is hard to use on mobile or no longer reflects your business, a redesign can refresh it. I keep what works and improve structure, design and usability.",
    forWho: "Businesses whose current website looks outdated, performs poorly on mobile, or is hard to update.",
    problems: [
      "Visitors leaving because the site looks or feels out of date",
      "Navigation and page structure that no longer match your services",
      "A redesign that risks losing existing search visibility",
    ],
    deliverables: [
      "Review of the current site's structure and content",
      "Modern, responsive design implemented from Figma where provided",
      "Cleaner navigation and page structure",
      "SEO housekeeping: heading hierarchy, meta details, image alt text",
      "Careful launch with testing and an indexing check",
    ],
    caseStudies: ["2pi-mind-math"],
    related: ["wordpress-development", "wix-development", "technical-seo-and-schema"],
    faqs: [
      { q: "Will I lose my SEO when redesigning?", a: "Redesigns need care. I keep URLs and key content where possible and check indexing after launch." },
      { q: "Can you keep my current platform?", a: "Often yes. I can redesign on your current platform or recommend a better fit if needed." },
      { q: "What does it cost?", a: cost },
    ],
  },
  {
    id: "landing-page-development",
    title: "Landing Page Development",
    short: "Focused, fast pages with tested forms, built to turn visitors into enquiries.",
    icon: "rocket",
    seoTitle: "Landing Page Developer",
    seoDescription:
      "Fast, focused landing pages with tested lead forms and tracking-ready structure, built on WordPress, Shopify, Wix or Unbounce.",
    headline: "Landing pages built to turn visitors into enquiries",
    intro:
      "A landing page has one job. I build focused, fast pages with a clear message, one obvious call to action and forms that are tested to work, including referral and sign-up mechanics.",
    forWho: "Campaigns, product or service launches, and any offer that needs its own focused page.",
    problems: [
      "Ad traffic landing on a page that does not match the offer",
      "A sign-up or lead form that fails silently",
      "No way to see how many people signed up",
    ],
    deliverables: [
      "Single-purpose page structure built around one clear action",
      "Responsive design and fast loading",
      "Lead form with validation, tested end to end",
      "Referral or waitlist mechanics with Klaviyo flows where needed",
      "Google Tag Manager and GA4 set-up with your accounts",
      "Builds on WordPress, Shopify, Wix or Unbounce",
    ],
    caseStudies: ["dirtyboy"],
    related: ["third-party-integrations", "shopify-development", "wix-development"],
    faqs: [
      { q: "Can you add analytics and tracking?", a: "Yes. I set up Google Tag Manager, GA4 and Meta Pixel using your own accounts." },
      { q: "Which platform do you build landing pages on?", a: "WordPress, Shopify, Wix or Unbounce, depending on what you already use and what the page needs." },
      { q: "What does it cost?", a: cost },
    ],
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance and Support",
    short: "Updates, backups, troubleshooting and performance checks to keep your site healthy.",
    icon: "wrench",
    seoTitle: "Website Maintenance and Support",
    seoDescription:
      "Ongoing website maintenance, bug fixing, security checks and migrations for WordPress, Shopify and Wix sites.",
    headline: "Keep your website secure, fast and up to date",
    intro:
      "Websites need regular care. I handle updates, troubleshooting, migrations and technical improvements so small problems are fixed before they become big ones.",
    forWho: "Business owners who want a reliable developer to keep their site running smoothly.",
    problems: [
      "Plugin or theme updates you are afraid to run",
      "A site that has broken, slowed down or started showing errors",
      "A move to new hosting that needs DNS and migration handled safely",
    ],
    deliverables: [
      "Platform, theme and plugin updates",
      "Backup and security checks",
      "Bug fixing and troubleshooting",
      "Hosting and DNS changes and site migrations (cPanel, SSH, WP-CLI)",
      "Performance improvements",
      "Routine form and functionality testing",
    ],
    caseStudies: [],
    related: ["malware-cleanup-and-security", "wordpress-development", "website-redesign"],
    faqs: [
      { q: "Can you fix a broken site?", a: "Yes. Send me what is happening and I'll investigate, explain the cause and fix it." },
      { q: "Do you handle hosting moves?", a: "Yes. I handle site and DNS migrations between hosts and check everything works after the move." },
      { q: "What does it cost?", a: cost },
    ],
  },
  {
    id: "malware-cleanup-and-security",
    title: "Malware Cleanup and Security",
    short: "Investigate hacked WordPress sites, remove malicious plugins and tighten access.",
    icon: "shield",
    seoTitle: "WordPress Malware Cleanup and Security",
    seoDescription:
      "WordPress malware investigation and cleanup: trace the source, remove malicious plugins, audit third-party plugin code and harden access.",
    headline: "Find and remove WordPress malware at its source",
    intro:
      "When a WordPress site is hacked, deleting the visible damage is not enough. I trace malware back to how it got in, remove malicious plugins and audit plugin code for tampering.",
    forWho: "Site owners with a hacked or suspicious WordPress site, and businesses that want their plugins and access controls reviewed.",
    problems: [
      "Spam redirects, unknown admin users or injected code",
      "Malware that keeps coming back after a cleanup",
      "Uncertainty about whether a commercial plugin has been tampered with",
    ],
    deliverables: [
      "Investigation to trace malware to its source",
      "Removal of malicious plugins and files",
      "Audit of third-party plugin code for tampering",
      "Credential and access hardening",
      "A written summary of what was found and changed",
    ],
    caseStudies: [],
    related: ["website-maintenance", "wordpress-development", "accessibility-audits"],
    faqs: [
      { q: "Can you guarantee my site won't be hacked again?", a: "No one can guarantee that. I remove the cause I can find, harden access and explain what to keep updated." },
      { q: "Should I stop using my site meanwhile?", a: "Change your passwords and tell me what you have noticed. I'll advise on whether to take the site offline while I investigate." },
      { q: "What does it cost?", a: cost },
    ],
  },
  {
    id: "accessibility-audits",
    title: "Accessibility Audits (WCAG 2.1 AA)",
    short: "WCAG 2.1 AA audits and fixes on WordPress, Shopify, Squarespace and Unbounce.",
    icon: "accessibility",
    seoTitle: "WCAG 2.1 AA Website Accessibility Audit and Remediation",
    seoDescription:
      "WCAG 2.1 AA accessibility audits and remediation for WordPress, Shopify, Squarespace and Unbounce websites.",
    headline: "Make your website usable for everyone, and defensible under WCAG 2.1 AA",
    intro:
      "Accessibility issues cost you customers and can create legal risk. I audit websites against WCAG 2.1 AA and fix the problems in the code and content, not just report them.",
    forWho: "Businesses that need to improve accessibility, for example after a complaint or to meet client or legal expectations in markets such as the US.",
    problems: [
      "Missing alt text, poor colour contrast and unlabeled form fields",
      "Menus and forms that cannot be used with a keyboard or screen reader",
      "A report full of issues and nobody to fix them",
    ],
    deliverables: [
      "Audit against WCAG 2.1 AA",
      "Fixes to templates, theme code and content",
      "Accessible forms, menus and interactive elements",
      "Re-test of the fixed pages",
      "Works across WordPress, Shopify, Squarespace and Unbounce",
    ],
    caseStudies: ["london-tea-merchant", "health-connect-group"],
    related: ["technical-seo-and-schema", "website-redesign", "wordpress-development"],
    faqs: [
      { q: "Will this make us legally compliant?", a: "I can't give legal advice or certify compliance. I audit and fix against WCAG 2.1 AA, which is the standard most requirements refer to." },
      { q: "Which platforms do you cover?", a: "WordPress, Shopify, Squarespace and Unbounce." },
      { q: "What does it cost?", a: cost },
    ],
  },
  {
    id: "technical-seo-and-schema",
    title: "Technical SEO and Schema Markup",
    short: "JSON-LD schema, bulk on-page SEO fixes and site audits for large sites.",
    icon: "search",
    seoTitle: "Technical SEO and JSON-LD Schema Markup",
    seoDescription:
      "Technical SEO audits, JSON-LD schema markup (Product, FAQPage, HowTo, BreadcrumbList) and bulk on-page SEO fixes for Shopify, WordPress and Wix.",
    headline: "Technical SEO that is actually implemented, at the scale of your site",
    intro:
      "Search visibility depends on hundreds of small details being right. I audit your site, then fix them in code and content: meta data, headings, image alt text and structured data.",
    forWho: "Owners of larger sites and stores where manual SEO fixes are impractical, and anyone whose rich results or on-page basics need work.",
    problems: [
      "Hundreds of pages with missing or duplicate meta titles and descriptions",
      "No structured data, so no rich results",
      "An SEO report nobody has time to implement",
    ],
    deliverables: [
      "Site audit covering meta data, heading hierarchy, alt text and indexing",
      "JSON-LD schema sets: Product, FAQPage, HowTo, BreadcrumbList",
      "Bulk fixes through the CMS and code",
      "Canonical and breadcrumb schema",
      "Notes on what to monitor in Google Search Console",
    ],
    caseStudies: ["thankful-greetings", "enwolt-bikes", "halcon-marketing"],
    related: ["accessibility-audits", "shopify-development", "wix-development"],
    faqs: [
      { q: "Can you promise rankings?", a: "No. Nobody can honestly promise rankings. I make sure the technical foundations are right and measurable." },
      { q: "Can you handle a large site?", a: "Yes. I've worked across a 279-page Shopify store and fixed meta data for 181 pages on a Wix site using code." },
      { q: "What does it cost?", a: cost },
    ],
  },
  {
    id: "third-party-integrations",
    title: "Third-Party Integrations",
    short: "Connect your site to Klaviyo, SendGrid, Gravity Forms, analytics and supplier APIs.",
    icon: "plug",
    seoTitle: "Website Integrations: Klaviyo, SendGrid, GA4 and APIs",
    seoDescription:
      "Connect your website to Klaviyo, Twilio SendGrid, Yotpo, Gravity Forms, Google Analytics 4, Tag Manager and supplier APIs.",
    headline: "Connect your website to the tools your business already uses",
    intro:
      "Websites work best when they talk to the rest of your stack. I integrate marketing, review, analytics and supplier tools so leads, orders and data flow where they should.",
    forWho: "Businesses that want forms, email flows, reviews, tracking or supplier data connected to their website.",
    problems: [
      "Leads that don't reach your email or marketing tool",
      "Manual copying of data between systems",
      "Tracking that is missing or double-counted",
    ],
    deliverables: [
      "Klaviyo flows, lists and campaigns connected to your forms",
      "Twilio SendGrid forms, Viral Loops referrals and Yotpo reviews",
      "Gravity Forms notifications",
      "Google Analytics 4, Google Tag Manager and Meta Pixel",
      "Google Apps Script and serverless endpoints for automation",
      "Supplier and shipping APIs",
    ],
    caseStudies: ["biomiq-skincare", "dirtyboy"],
    related: ["shopify-development", "woocommerce-development", "landing-page-development"],
    faqs: [
      { q: "Which tools can you integrate?", a: "Any service with a documented API or a supported plugin. Tell me what you use and I'll confirm it's feasible." },
      { q: "Is my data handled securely?", a: "Secrets stay on the server and user input is validated. I'll explain the approach for your case." },
      { q: "What does it cost?", a: cost },
    ],
  },
];

export const getService = (id: string) => services.find((s) => s.id === id);
