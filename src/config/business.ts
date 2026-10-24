/**
 * BUSINESS CONFIG — the one place for the business name, contact details and links.
 * Items marked ASSUMPTION are placeholders you should confirm or change.
 */

const rawUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const business = {
  /** ASSUMPTION: confirm spelling/capitalisation of the business name. */
  name: "AYR Tech Services",
  shortName: "AYR",
  /** The person behind the business (neutral wording: first person, no agency claims). */
  owner: "Yaswanth Amasa",
  tagline: "WordPress, Shopify and Wix websites built to bring in customers.",
  description:
    "AYR Tech Services builds and fixes WordPress, WooCommerce, Shopify and Wix websites for businesses in the US, UK, Australia, Canada and beyond, including redesigns, landing pages, accessibility audits and technical SEO.",

  url: rawUrl.replace(/\/$/, ""),
  /** Your personal portfolio (live work and background). */
  portfolioUrl: (process.env.NEXT_PUBLIC_PORTFOLIO_URL || "https://yaswanth-portpolio.vercel.app").replace(/\/$/, ""),

  /** Real location. No local offices or addresses are claimed anywhere on the site. */
  location: "Ahmedabad, India",
  timezone: "India Standard Time (UTC+5:30)",
  /** Markets named in the service pages and structured data. */
  areaServed: ["United States", "United Kingdom", "Australia", "Canada"],

  email: "yaswanthreddy4789@gmail.com",
  phone: "+91 89196 74214",
  phoneHref: "tel:+918919674214",
  whatsapp: "https://wa.me/918919674214",
  linkedin: "https://www.linkedin.com/in/yaswanth-amasa-6894ab434",

  /** Budget choices in the quote form. ASSUMPTION: edit freely; empty array hides the field. */
  budgets: ["Under $1,000", "$1,000 – $3,000", "$3,000 – $7,500", "$7,500+", "Not sure yet"],

  /** Real figures from the resume. Delete any you can't stand behind. */
  stats: [
    { value: "3.6+", label: "years building client websites" },
    { value: "300+", label: "projects delivered" },
    { value: "5", label: "platforms: WordPress, Shopify, Wix, Squarespace, Unbounce" },
  ],

  nav: [
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Guides", href: "/guides" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const emailHref = `mailto:${business.email}`;
