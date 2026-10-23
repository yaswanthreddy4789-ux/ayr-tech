import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { business } from "@/config/business";
import { services } from "@/config/services";
import { caseStudies } from "@/config/case-studies";
import { CaseStudyCard, CtaBand, Faq, ProcessSteps, SectionHeading, ServiceCard } from "@/components/blocks";
import { Reveal, Stagger, StaggerItem } from "@/components/ui";

const featured = ["wordpress-development", "shopify-development", "wix-development"];

const problems = [
  { t: "Your site looks dated or breaks on phones", d: "A redesign or targeted fixes that make it clear, modern and easy to use on every screen." },
  { t: "Your store is slow, inaccurate or hard to manage", d: "WooCommerce and Shopify work that keeps catalogs, prices and checkout reliable." },
  { t: "Leads and orders don't reach the right tools", d: "Forms, email flows and analytics connected so nothing gets lost." },
  { t: "You can't tell if your site is accessible or searchable", d: "WCAG 2.1 AA audits and technical SEO, implemented in code rather than just reported." },
  { t: "Something broke, or you suspect a hack", d: "Troubleshooting, migrations and malware investigation, with the cause traced and explained." },
  { t: "You need it built properly, not just quickly", d: "Maintainable work on the platform that fits your goals, tested before launch." },
];

const why = [
  "Hands-on across WordPress, WooCommerce, Shopify, Wix, Squarespace and Unbounce, so the platform fits you",
  "Custom plugins and PHP when off-the-shelf options fall short",
  "Experience with large catalogs, including a store of roughly 150,000 products",
  "Accessibility (WCAG 2.1 AA) and technical SEO handled in code",
  "Direct communication by email: requirements, status updates and clear answers",
  "Careful testing of responsive layouts, forms and key functionality before launch",
];

const faqs = [
  { q: "Which platform should I choose: WordPress, Shopify or Wix?", a: "It depends on what you need. WordPress gives the most flexibility, Shopify is built for stores that want less maintenance, and Wix suits simple, self-managed sites. I work with all three and will recommend honestly." },
  { q: "I'm outside India. Can we work together?", a: "Yes. I work with clients in the US, UK, Australia, Canada and elsewhere. I'm based in India Standard Time (UTC+5:30) and communicate by email, so time zones are handled asynchronously." },
  { q: "How much does a website cost?", a: "Cost depends on scope: pages, features and integrations. Describe your project in the quote form and I'll reply with next steps and an estimate." },
  { q: "Can you improve a website that already exists?", a: "Yes. Many projects are fixes, redesigns, accessibility work or SEO clean-ups on an existing WordPress, Shopify or Wix site." },
  { q: "Do you offer ongoing support after launch?", a: "Yes. I can handle updates, troubleshooting, performance work and small improvements after the site goes live." },
  { q: "How do I get started?", a: "Send a short description through the quote form. I'll reply by email, usually with a few clarifying questions, and then outline the approach." },
];

export default function Home() {
  const rest = services.filter((s) => !featured.includes(s.id));
  return (
    <>
      {/* 2. hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-dots absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium text-muted shadow-sm">
              <span className="size-2 rounded-full bg-green-500" aria-hidden="true" /> Serving {business.areaServed.slice(0, 3).join(", ")} and more
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,6vw,4.6rem)] font-extrabold leading-[1.04] tracking-tight">
              Websites that win customers, built on the platform that <span className="text-brand">fits your business.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              I build, redesign and fix WordPress, WooCommerce, Shopify and Wix websites, with accessibility and technical SEO done properly. Based in India, working with clients worldwide.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/quote" className="inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark">
                Request a Quote <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
              <Link href="/services" className="inline-flex items-center rounded-lg border border-line bg-white px-7 py-4 text-sm font-semibold transition-colors hover:border-brand hover:text-brand">
                View Services
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <dl className="mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
              {business.stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-line bg-white/80 p-5 backdrop-blur">
                  <dd className="font-display text-3xl font-extrabold text-brand">{s.value}</dd>
                  <dt className="mt-1 text-sm leading-snug text-muted">{s.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* 3. service overview */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <SectionHeading eyebrow="Services" title="WordPress, Shopify, Wix and everything around them" intro="Pick the platform that fits, then add the specialist work that makes the site perform." />
        <Stagger className="grid gap-5 md:grid-cols-3">
          {services.filter((s) => featured.includes(s.id)).map((s) => (
            <StaggerItem key={s.id}><ServiceCard s={s} featured /></StaggerItem>
          ))}
        </Stagger>
        <Stagger className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((s) => (
            <StaggerItem key={s.id}><ServiceCard s={s} /></StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* 4. problems */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading eyebrow="Problems I solve" title="Common situations I'm brought in for" />
          <Stagger as="ul" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p) => (
              <StaggerItem as="li" key={p.t} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-display text-lg font-bold">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 5. case studies */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <SectionHeading eyebrow="Selected work" title="Case studies" intro="A selection of real projects. Each case study states only what was actually done." />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((c) => (
            <StaggerItem key={c.slug}><CaseStudyCard c={c} /></StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-8">
          <Link href="/case-studies" className="inline-flex items-center gap-2 rounded-lg border border-line px-6 py-3 text-sm font-semibold transition-colors hover:border-brand hover:text-brand">
            All case studies <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      {/* 6. why work with me */}
      <section className="bg-surface py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="Why work with me" title="Real capabilities, plainly stated" intro="No awards or inflated claims, just what I do and how I work." />
          <Stagger as="ul" className="grid gap-3 self-start">
            {why.map((w) => (
              <StaggerItem as="li" key={w} className="flex items-start gap-3 rounded-xl border border-line bg-white p-4">
                <Check className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
                <span>{w}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 7. process */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <SectionHeading eyebrow="How it works" title="From first message to launch and beyond" />
        <ProcessSteps />
      </section>

      {/* 10. FAQ */}
      <section className="mx-auto max-w-3xl px-5 pb-16 md:px-8">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" center />
        <Faq items={faqs} />
      </section>

      {/* 11. quote CTA */}
      <CtaBand />
    </>
  );
}
