/**
 * GUIDES — long-form articles written to answer specific questions business owners search for.
 * Rules: no invented statistics, prices or guarantees. Legal topics are explained in general terms only.
 * Add a guide by appending an object; the index, sitemap, schema and internal links update automatically.
 */

export type GuideSection = { h: string; p?: string[]; list?: string[] };

export type Guide = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  readMinutes: number;
  published: string; // ISO date
  updated: string; // ISO date
  intro: string;
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  /** service ids (see services.ts) this guide links to */
  services: string[];
  /** other guide slugs */
  related: string[];
};

const D = "2026-10-23";

export const guides: Guide[] = [
  {
    slug: "woocommerce-vs-shopify",
    title: "WooCommerce vs Shopify: which should you choose for your store?",
    seoTitle: "WooCommerce vs Shopify: How to Choose the Right Store Platform",
    description:
      "A plain comparison of WooCommerce and Shopify covering ownership, ongoing costs, flexibility, maintenance and when each one is the better fit.",
    category: "Ecommerce",
    readMinutes: 6,
    published: D,
    updated: D,
    intro:
      "Both platforms can run a serious online store. The better choice depends on how much control you want, who will look after the technical side, and how unusual your selling process is. Here is how I compare them for clients.",
    sections: [
      {
        h: "The short answer",
        p: [
          "Choose Shopify if you want a hosted store where the platform handles hosting, security patches and checkout reliability, and you are happy to work within its structure. Choose WooCommerce if you want full ownership on your own WordPress site, need unusual logic or very large catalogs, and have a developer or maintenance plan in place.",
        ],
      },
      {
        h: "Ownership and control",
        p: [
          "WooCommerce is a free plugin for WordPress. You choose the hosting, own the database and can change almost anything with plugins or custom PHP. Shopify is a hosted service: you rent the platform, the templates are written in Liquid, and the core system is managed for you.",
        ],
      },
      {
        h: "Costs to compare (beyond the headline price)",
        p: ["Neither is simply cheap or expensive. Compare the full picture over a year:"],
        list: [
          "WooCommerce: hosting, a theme, paid extensions you need, payment processing fees, and developer or maintenance time",
          "Shopify: the plan itself, paid apps, transaction fees if you do not use Shopify Payments, payment processing fees, and developer time",
          "For both: design, content, photography and any integrations such as email marketing or reviews",
        ],
      },
      {
        h: "Flexibility and custom logic",
        p: [
          "WooCommerce is hard to outgrow because you can write custom plugins, custom post types and custom order statuses. Shopify covers most stores through themes and apps. For custom cart and checkout rules, the deepest options are on Shopify Plus, typically combined with its APIs and a small serverless backend.",
        ],
      },
      {
        h: "Maintenance and security",
        p: [
          "On Shopify the platform is maintained for you; you manage apps and theme code. On WooCommerce someone must keep WordPress, the theme and plugins updated, run backups and watch security. That is perfectly manageable with a maintenance routine, but it should be planned, not assumed.",
        ],
      },
      {
        h: "Large catalogs and B2B selling",
        p: [
          "WooCommerce handles very large catalogs well when it is set up carefully. I have worked on a WooCommerce store with roughly 150,000 products, using a custom plugin and scheduled sync to keep prices and product data aligned with a supplier. Quote-to-order flows, custom order statuses and role-based access are also natural fits for WooCommerce.",
        ],
      },
      {
        h: "Which one fits you",
        list: [
          "Pick Shopify for a straightforward store, a small team and the least technical upkeep",
          "Pick WooCommerce if your site already runs on WordPress, you need custom behaviour, or you want to own everything",
          "If you are unsure, describe your products and how you sell, and a short conversation usually settles it",
        ],
      },
    ],
    faqs: [
      { q: "Is WooCommerce cheaper than Shopify?", a: "Not automatically. WooCommerce itself is free, but hosting, extensions and maintenance cost money. Compare the whole yearly cost, not just the software." },
      { q: "Can I move from one platform to the other later?", a: "Yes. Products, customers and orders can be migrated, though it is a project in its own right and URLs need careful redirects to protect search visibility." },
      { q: "Which is better for SEO?", a: "Both can rank well. Results depend far more on site structure, content, speed and technical details than on the platform." },
    ],
    services: ["woocommerce-development", "shopify-development"],
    related: ["large-woocommerce-catalog", "website-cost-factors"],
  },
  {
    slug: "wordpress-vs-wix",
    title: "WordPress vs Wix: which is right for your business website?",
    seoTitle: "WordPress vs Wix for a Business Website: An Honest Comparison",
    description:
      "How WordPress and Wix differ on control, flexibility, SEO, ownership and upkeep, and which kinds of business each platform suits best.",
    category: "Websites",
    readMinutes: 5,
    published: D,
    updated: D,
    intro:
      "Wix is quick and self-contained. WordPress is flexible and open. Neither is better in every case, so here is how to decide which one fits your business.",
    sections: [
      {
        h: "How they differ at a glance",
        p: [
          "Wix is an all-in-one hosted builder: design, hosting and tools come as a package, and you edit visually. WordPress is open-source software you install on hosting of your choice, with a very large ecosystem of themes and plugins and the option to write custom code.",
        ],
      },
      {
        h: "Speed to launch and ease of editing",
        p: [
          "Wix is excellent when you want a good-looking, simple site up quickly and plan to manage it yourself. WordPress can also be edited by non-developers, particularly with a page builder, but the initial set-up usually takes more planning.",
        ],
      },
      {
        h: "Flexibility and custom features",
        p: [
          "WordPress is far more extensible: custom post types, membership features, complex integrations and custom plugins in PHP. Wix offers Velo, its own development platform, which allows custom code and data collections, and is useful for specific needs, but you work inside Wix's limits.",
        ],
      },
      {
        h: "SEO considerations",
        p: [
          "Both support the basics: editable titles and descriptions, headings, alt text, clean URLs and structured data. Wix sites can also be improved at scale with code; on one Wix project I fixed meta data for 181 pages and schema for 236 pages using Velo. WordPress gives you finer technical control when you need it.",
        ],
      },
      {
        h: "Ownership, portability and upkeep",
        list: [
          "WordPress: you own the files and database and can move hosts freely, but you must keep it updated and backed up",
          "Wix: hosting and platform updates are handled for you, but moving a site to another platform means rebuilding it",
        ],
      },
      {
        h: "Who each one suits",
        list: [
          "Wix: small businesses, freelancers and landing pages that value speed and simplicity",
          "WordPress: businesses that expect to grow, need custom functionality, content-heavy sites, or plan to add an online store with WooCommerce",
        ],
      },
    ],
    faqs: [
      { q: "Can I switch from Wix to WordPress later?", a: "Yes, but it is a rebuild rather than a one-click export. Plan redirects so you keep your search visibility." },
      { q: "Is Wix bad for SEO?", a: "No. It supports the fundamentals well. The limits show up with very large or highly customized sites." },
      { q: "Which is cheaper?", a: "It depends on features, hosting and who maintains it. Compare total yearly cost, including your own time." },
    ],
    services: ["wix-development", "wordpress-development"],
    related: ["website-redesign-checklist", "website-cost-factors"],
  },
  {
    slug: "website-cost-factors",
    title: "How much does a business website cost? What actually drives the price",
    seoTitle: "How Much Does a Business Website Cost? The Factors That Set the Price",
    description:
      "Why website quotes vary so much: the factors that drive the price, what to prepare before asking for quotes, and how to compare proposals fairly.",
    category: "Planning",
    readMinutes: 5,
    published: D,
    updated: D,
    intro:
      "There is no single price for a website, and quotes can differ widely for good reasons. Understanding what drives the cost lets you compare proposals properly and avoid paying for things you do not need.",
    sections: [
      {
        h: "Why one number is misleading",
        p: ["A five-page brochure site and an online store with thousands of products are different projects, even if both are called a website. The price follows the work, so the useful question is what the work involves."],
      },
      {
        h: "The main cost drivers",
        list: [
          "Number and type of pages, and whether content is ready",
          "Custom design versus customizing an existing theme",
          "Features: forms, bookings, memberships, search, multi-language",
          "Ecommerce: catalog size, payments, shipping, tax, custom order logic",
          "Integrations: email marketing, CRM, reviews, analytics, supplier APIs",
          "Accessibility and technical SEO requirements",
          "Migration from an old site, including redirects",
          "Timeline and the amount of revision rounds",
        ],
      },
      {
        h: "What to prepare before asking for quotes",
        list: [
          "Your goal: enquiries, sales, bookings or information",
          "A list of the pages or sections you expect",
          "Examples of sites you like and dislike",
          "Whether you have a logo, brand colours, photos and written content",
          "Any systems the site must connect to",
        ],
      },
      {
        h: "Comparing quotes fairly",
        p: ["Check that each proposal covers the same scope: number of pages, design rounds, responsive testing, forms testing, basic SEO set-up, training or handover, and what happens after launch. A lower quote that leaves things out is not actually lower."],
      },
      {
        h: "Ongoing costs people forget",
        list: ["Hosting and domain renewals", "Plugin, theme or app subscriptions", "Maintenance, updates and backups", "Content updates and improvements"],
      },
    ],
    faqs: [
      { q: "Can you give me a price without a call?", a: "I can give a useful estimate from a written description of your project. The quote form is designed for exactly that." },
      { q: "Is a cheaper platform always cheaper overall?", a: "No. Total cost includes your time, maintenance and any later migration. Choose for the next few years, not just the first month." },
      { q: "Do I need to supply content?", a: "Usually yes. Having text and images ready is one of the biggest factors in keeping a project fast and affordable." },
    ],
    services: ["wordpress-development", "website-redesign"],
    related: ["woocommerce-vs-shopify", "wordpress-vs-wix"],
  },
  {
    slug: "website-redesign-checklist",
    title: "Website redesign checklist: protect your SEO while you improve the design",
    seoTitle: "Website Redesign Checklist: Redesign Without Losing Search Traffic",
    description:
      "A practical checklist for redesigning a website without losing search visibility: audit, URL mapping, redirects, content, testing and post-launch checks.",
    category: "SEO",
    readMinutes: 6,
    published: D,
    updated: D,
    intro:
      "A redesign can improve how a site looks and converts, but a careless one can wipe out years of search visibility. This checklist covers what to do before, during and after launch.",
    sections: [
      {
        h: "1. Know what you are fixing",
        list: ["Write down the goals: more enquiries, better mobile experience, clearer structure", "Record current performance so you can compare later: traffic, enquiries, top pages", "List what already works and must be kept"],
      },
      {
        h: "2. Inventory your current URLs",
        p: ["Export every live URL and note which ones get traffic or links. These are the pages most at risk during a redesign."],
      },
      {
        h: "3. Map old URLs to new ones",
        p: ["Where a URL changes, plan a permanent (301) redirect to the closest equivalent page. Where possible, keep the same URLs so nothing needs redirecting at all."],
      },
      {
        h: "4. Keep the SEO fundamentals",
        list: ["One clear H1 per page and a logical heading hierarchy", "Unique title tags and meta descriptions", "Descriptive image alt text", "Internal links between related pages", "Structured data where it is accurate"],
      },
      {
        h: "5. Build and test on a staging copy",
        list: ["Check layouts on phones, tablets and desktops", "Test every form end to end, including the email that arrives", "Review keyboard use and colour contrast", "Check page speed on the heaviest pages"],
      },
      {
        h: "6. Launch carefully",
        list: ["Launch at a quiet time and have backups ready", "Make sure the site is not accidentally blocked from search engines", "Submit the updated sitemap in Google Search Console"],
      },
      {
        h: "7. After launch",
        list: ["Watch Search Console for crawl errors and unexpected 404s", "Fix broken links and missed redirects quickly", "Compare traffic and enquiries with your before numbers over the following weeks"],
      },
    ],
    faqs: [
      { q: "Will my rankings drop after a redesign?", a: "Some movement is normal, but careful redirects and preserved content keep it small. Large drops usually trace back to missed redirects or removed content." },
      { q: "Should I change my URLs?", a: "Only if there is a good reason. Unchanged URLs are the safest way to protect existing visibility." },
      { q: "How long should I watch results?", a: "Review weekly for the first month, then monthly. Search engines take time to reprocess a site." },
    ],
    services: ["website-redesign", "technical-seo-and-schema"],
    related: ["wordpress-vs-wix", "wcag-2-1-aa-for-business-owners"],
  },
  {
    slug: "wcag-2-1-aa-for-business-owners",
    title: "WCAG 2.1 AA explained for business owners",
    seoTitle: "WCAG 2.1 AA Explained: A Plain-English Guide for Business Owners",
    description:
      "What WCAG 2.1 AA means, the most common accessibility problems on business websites, and how an accessibility audit and remediation work.",
    category: "Accessibility",
    readMinutes: 6,
    published: D,
    updated: D,
    intro:
      "Web accessibility means people with disabilities can use your site. WCAG 2.1 AA is the standard most requirements and client expectations refer to. This guide explains it without jargon. It is general information, not legal advice.",
    sections: [
      {
        h: "What WCAG is",
        p: ["WCAG stands for Web Content Accessibility Guidelines, published by the W3C. Version 2.1 has three conformance levels: A, AA and AAA. Level AA is the one most organizations aim for, because it covers the most important barriers while remaining practical."],
      },
      {
        h: "The four ideas behind it",
        list: ["Perceivable: people can see or hear the content", "Operable: people can use the controls, including by keyboard", "Understandable: content and behaviour are clear and predictable", "Robust: it works with assistive technology such as screen readers"],
      },
      {
        h: "Problems I find most often",
        list: [
          "Images with missing or unhelpful alt text",
          "Text that does not have enough colour contrast against its background",
          "Form fields without proper labels or helpful error messages",
          "Menus, sliders or pop-ups that cannot be used with a keyboard",
          "A heading structure that skips levels or is used only for styling",
          "Links with vague text such as 'click here'",
        ],
      },
      {
        h: "How an audit works",
        p: ["Automated tools are useful for catching some problems quickly, but they detect only a portion of issues. A proper audit also tests manually: keyboard navigation, screen reader behaviour, zoom and responsive layouts, and the logic of forms and interactive elements."],
      },
      {
        h: "Fixing, not just reporting",
        p: ["A report on its own does not make a site accessible. The fixes live in templates, theme code and content, and they need re-testing afterwards. That is why I work on the code and content directly across WordPress, Shopify, Squarespace and Unbounce sites."],
      },
      {
        h: "Is it a legal requirement?",
        p: ["Accessibility expectations are referenced in laws and regulations in several countries, and inaccessible sites have led to legal complaints in the United States and elsewhere. I am not a lawyer and cannot certify legal compliance, so check requirements for your situation. Auditing and fixing against WCAG 2.1 AA is a sound, widely recognised starting point."],
      },
    ],
    faqs: [
      { q: "Will an accessibility overlay or plugin fix everything?", a: "A widget alone cannot fix underlying code problems. Real accessibility comes from fixing templates, content and interactions." },
      { q: "Does accessibility help SEO?", a: "Many accessibility practices, such as headings, alt text and clear links, overlap with good SEO, but accessibility is worth doing in its own right." },
      { q: "How long does an audit take?", a: "It depends on the number of unique templates and pages. A short description of your site lets me give a realistic estimate." },
    ],
    services: ["accessibility-audits", "website-redesign"],
    related: ["website-redesign-checklist", "json-ld-schema-shopify-wordpress"],
  },
  {
    slug: "json-ld-schema-shopify-wordpress",
    title: "JSON-LD schema markup for Shopify and WordPress: what to add and what to expect",
    seoTitle: "JSON-LD Schema for Shopify and WordPress: What to Add and What to Expect",
    description:
      "A practical guide to JSON-LD structured data: Product, BreadcrumbList, FAQPage and HowTo markup, how to add it, and honest expectations about rich results.",
    category: "SEO",
    readMinutes: 6,
    published: D,
    updated: D,
    intro:
      "Structured data helps search engines understand your pages and can make them eligible for rich results. It is useful, but it is not magic. Here is what is worth adding and how to keep expectations realistic.",
    sections: [
      {
        h: "What JSON-LD is",
        p: ["JSON-LD is a block of data in a page's code, usually in a script tag, that describes the page in the vocabulary from schema.org. Visitors never see it, but search engines can read it."],
      },
      {
        h: "The types that matter for most sites",
        list: [
          "Product: name, image, description and offer details for each product page",
          "BreadcrumbList: the path to a page, such as Home > Shoes > Trainers",
          "Organization: who you are, with your logo and official profiles",
          "Article: for blog posts and guides, with author and dates",
          "FAQPage and HowTo: for pages that genuinely contain questions and answers or step-by-step instructions",
        ],
      },
      {
        h: "Rules that keep markup safe",
        list: [
          "Mark up only what is visible on the page",
          "Do not add review ratings unless they are real reviews shown on the page",
          "Keep prices and availability consistent with the page",
          "Validate the markup with a testing tool after every change",
        ],
      },
      {
        h: "Shopify and WordPress in practice",
        p: ["Many Shopify themes and WordPress SEO plugins output some structured data by default, which can be incomplete or conflicting. The usual job is to review what is already there, remove duplicates, fill gaps, and roll out a consistent set across the catalog. For large stores this is done in code and templates rather than page by page."],
      },
      {
        h: "Honest expectations",
        p: ["Structured data does not guarantee rich results or higher rankings. Search engines decide what to show, and Google has reduced which sites display FAQ and How-to rich results. Treat these types as helpful supporting markup, and put your effort first into content quality, page speed and a sound site structure."],
      },
    ],
    faqs: [
      { q: "Do I need schema to rank?", a: "No. It is not a ranking requirement. It helps search engines understand pages and can enable richer listings." },
      { q: "Can wrong schema hurt me?", a: "Misleading markup can lead to manual actions or lost eligibility for rich results, which is why accuracy matters." },
      { q: "How do I check my markup?", a: "Use Google's Rich Results Test and the Schema Markup Validator, then watch the enhancement reports in Search Console." },
    ],
    services: ["technical-seo-and-schema", "shopify-development"],
    related: ["website-redesign-checklist", "wcag-2-1-aa-for-business-owners"],
  },
  {
    slug: "wordpress-hacked-what-to-do",
    title: "My WordPress site was hacked: what to do first",
    seoTitle: "WordPress Site Hacked? What to Do First, Step by Step",
    description:
      "A calm, step-by-step response to a hacked WordPress site: contain it, back it up, change credentials, find the cause, clean it properly and harden access.",
    category: "Security",
    readMinutes: 6,
    published: D,
    updated: D,
    intro:
      "Spam redirects, strange admin users, or a warning in search results all point to a compromise. The goal is not just to remove what you can see, but to find how the attacker got in so it does not happen again.",
    sections: [
      {
        h: "1. Stay calm and avoid deleting everything",
        p: ["Panic cleanups often destroy the evidence you need to find the entry point. Take notes on what you have seen and when it started."],
      },
      {
        h: "2. Take a backup of the current state",
        p: ["Even a compromised copy is valuable. It lets an investigator trace the malware to its source. Keep it separate from your clean backups."],
      },
      {
        h: "3. Change every credential",
        list: ["WordPress admin and all user accounts", "Hosting control panel, FTP and SSH", "The database password in the site configuration", "Any API keys stored on the site"],
      },
      {
        h: "4. Look for obvious signs",
        list: ["Unknown administrator accounts", "Plugins or themes you did not install", "Recently modified files you did not change", "Odd rules in the .htaccess file or the site configuration"],
      },
      {
        h: "5. Find the entry point",
        p: ["Common causes are outdated plugins, abandoned or pirated plugins and themes, and weak or reused passwords. A multi-site infection often traces back to a single malicious plugin. Auditing third-party plugin code for tampering is part of a thorough cleanup."],
      },
      {
        h: "6. Clean and restore properly",
        list: ["Remove malicious plugins and files, not only the symptoms", "Reinstall WordPress core, themes and plugins from trusted sources", "Restore from a clean backup if the damage is deep", "Update everything"],
      },
      {
        h: "7. Harden access afterwards",
        list: ["Enable two-factor authentication for administrators", "Give each user only the access they need", "Limit login attempts", "Keep an update and backup routine", "Remove plugins and themes you do not use"],
      },
      {
        h: "8. Check how search engines see your site",
        p: ["Review Google Search Console for security issues and, once clean, request a review if your site was flagged."],
      },
    ],
    faqs: [
      { q: "Can you guarantee it will not happen again?", a: "No one can. A proper cleanup finds the cause, removes it and hardens access, which greatly reduces the risk." },
      { q: "Should I take the site offline?", a: "Often yes while it is being investigated, especially if it is redirecting visitors or serving malware." },
      { q: "Will my host fix it?", a: "Some hosts offer cleanup, but they may only remove visible malware. Make sure the cause is also found." },
    ],
    services: ["malware-cleanup-and-security", "website-maintenance"],
    related: ["website-redesign-checklist", "large-woocommerce-catalog"],
  },
  {
    slug: "large-woocommerce-catalog",
    title: "How to manage a large WooCommerce catalog without it slowing down",
    seoTitle: "Managing a Large WooCommerce Catalog: Sync, Data Quality and Speed",
    description:
      "Practical lessons for running WooCommerce with tens or hundreds of thousands of products: taxonomy design, safe bulk updates, API-driven sync and performance.",
    category: "Ecommerce",
    readMinutes: 6,
    published: D,
    updated: D,
    intro:
      "A catalog with a handful of products and one with well over a hundred thousand are different engineering problems. These are the lessons that matter most, drawn from work on a store with roughly 150,000 products.",
    sections: [
      {
        h: "Design your taxonomy first",
        p: ["Categories, tags and attributes decide how products are found and filtered. Decide them deliberately, and use custom taxonomies where the built-in ones are not enough. Fixing a messy structure later is far harder than planning it."],
      },
      {
        h: "Keep prices and stock in sync automatically",
        p: ["Where a supplier owns the data, a custom plugin with scheduled jobs can keep prices and product details aligned. If the supplier's API has daily call limits, the sync needs to work within them, spreading updates over time instead of trying to do everything at once."],
      },
      {
        h: "Add a verify step",
        p: ["A verify mode that re-checks products against the source and corrects mismatches catches drift that a one-way sync misses. It also makes data quality something you can measure rather than hope for."],
      },
      {
        h: "Make bulk changes safely",
        list: [
          "Work in batches so one failure does not touch everything",
          "Write backup tables before changing data, so any change can be reversed",
          "Test on a copy first and check a sample by hand",
          "Log what changed",
        ],
      },
      {
        h: "Clean up mis-classified products",
        p: ["Large catalogs accumulate wrongly tagged products. In one clean-up I corrected about 22,000 mis-tagged products using backup tables, so the work could be verified and, if needed, undone."],
      },
      {
        h: "Protect speed",
        list: ["Use good hosting and server-level caching", "Keep plugins to what you really need", "Serve properly sized, compressed images", "Make search and filters efficient, since they matter more as the catalog grows"],
      },
      {
        h: "Plan the business workflows too",
        p: ["B2B stores often need quote requests, custom order statuses, shipment tracking and PDF invoices. Planning these early avoids awkward workarounds."],
      },
    ],
    faqs: [
      { q: "How many products can WooCommerce handle?", a: "Very large catalogs work when the database, hosting and plugins are set up properly. I have worked on a store with roughly 150,000 products." },
      { q: "Do I need a custom plugin?", a: "Only when off-the-shelf tools cannot do what you need, such as syncing with a specific supplier API." },
      { q: "Can you clean up my existing catalog?", a: "Yes, safely and in batches, with backups so changes can be reviewed and reversed." },
    ],
    services: ["woocommerce-development", "third-party-integrations"],
    related: ["woocommerce-vs-shopify", "wordpress-hacked-what-to-do"],
  },
  {
    slug: "hiring-a-web-developer-in-another-country",
    title: "Hiring a web developer in another country: time zones, communication and what to check",
    seoTitle: "Hiring a Web Developer Overseas: Time Zones, Communication and Checks",
    description:
      "How to work well with a web developer based in a different country: time zone overlap, communication habits, contracts and questions to ask first.",
    category: "Planning",
    readMinutes: 5,
    published: D,
    updated: D,
    intro:
      "Many successful websites are built by people in a different country from the client. It works well when expectations are clear. This is how I handle time zones and communication with clients in the US, UK and Australia, and what to check with any remote developer.",
    sections: [
      {
        h: "Time zones are mostly a scheduling question",
        p: ["I am based in India Standard Time (UTC+5:30). That is roughly ten hours ahead of US Eastern time (about nine and a half during US daylight saving), about five and a half hours ahead of the UK (four and a half in British summer time), and four and a half to five and a half hours behind Sydney, depending on daylight saving. Real-time overlap is shorter with the US than with the UK and Australia, so work is organised to rely on clear written updates, with calls booked at agreed times."],
      },
      {
        h: "How communication works",
        list: ["Written requirements at the start, so nothing depends on memory", "Email updates at agreed points, with what is done and what is next", "Questions grouped together so you are not interrupted daily", "Calls when something is easier to explain live"],
      },
      {
        h: "Questions to ask any remote developer",
        list: [
          "Can I see real, live projects similar to mine?",
          "Who will actually do the work?",
          "How will we communicate, and how quickly will you reply?",
          "What exactly is included in the quote, and what is not?",
          "Who owns the code, content and accounts at the end?",
          "What happens after launch if something breaks?",
        ],
      },
      {
        h: "Protect yourself with simple basics",
        list: ["Keep ownership of your domain, hosting and accounts, and give access rather than handing them over", "Agree scope, milestones and payment terms in writing", "Use a staging copy so changes can be reviewed before going live", "Keep backups"],
      },
      {
        h: "Local spelling, standards and expectations",
        p: ["Content can be written in US, UK or Australian spelling to match your market. For accessibility and privacy, requirements differ between countries, and I cannot give legal advice, so check obligations for your own situation."],
      },
    ],
    faqs: [
      { q: "Do time zones slow projects down?", a: "Rarely, when requirements are written down and updates are regular. Overnight progress can even speed things up." },
      { q: "Can we have a video call?", a: "Yes. We can agree a time that suits both sides, usually a short window that overlaps both of our days." },
      { q: "How do payments work across countries?", a: "Terms are agreed in writing before work starts. Ask about accepted payment methods when you request a quote." },
    ],
    services: ["wordpress-development", "website-maintenance"],
    related: ["website-cost-factors", "woocommerce-vs-shopify"],
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
export const guidesForService = (serviceId: string) => guides.filter((g) => g.services.includes(serviceId));
