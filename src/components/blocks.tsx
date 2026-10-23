import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { business } from "@/config/business";
import type { Service } from "@/config/services";
import type { CaseStudy } from "@/config/case-studies";
import type { Guide } from "@/config/guides";
import { Icon, Reveal } from "./ui";

export function SectionHeading({ eyebrow, title, intro, center }: { eyebrow?: string; title: string; intro?: string; center?: boolean }) {
  return (
    <Reveal className={`mb-10 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">{eyebrow}</p>}
      <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  );
}

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function Breadcrumbs({ trail }: { trail: { name: string; href: string }[] }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", href: "/" }, ...trail].map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${business.url}${t.href === "/" ? "" : t.href}`,
    })),
  };
  return (
    <>
      <JsonLd data={ld} />
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-brand hover:underline">Home</Link></li>
          {trail.map((t, i) => (
            <li key={t.href} className="flex items-center gap-2">
              <span aria-hidden="true">/</span>
              {i === trail.length - 1 ? <span aria-current="page" className="text-ink">{t.name}</span> : <Link href={t.href} className="hover:text-brand hover:underline">{t.name}</Link>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

export function Faq({ items, withSchema = true }: { items: { q: string; a: string }[]; withSchema?: boolean }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      {withSchema && <JsonLd data={ld} />}
      <div className="grid gap-3">
        {items.map((f) => (
          <details key={f.q} className="group rounded-xl border border-line bg-white open:border-brand/40 open:shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-semibold">
              {f.q}
              <ChevronDown className="faq-chevron size-5 shrink-0 text-muted transition-transform" aria-hidden="true" />
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}

export function ServiceCard({ s, featured }: { s: Service; featured?: boolean }) {
  return (
    <Link
      href={`/services/${s.id}`}
      className={`group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg ${featured ? "md:p-8" : ""}`}
    >
      <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand">
        <Icon name={s.icon} />
      </span>
      <h3 className={`mt-5 font-display font-bold ${featured ? "text-2xl" : "text-lg"}`}>{s.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.short}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}

export function CaseStudyCard({ c }: { c: CaseStudy }) {
  return (
    <Link href={`/case-studies/${c.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        {c.image && <Image src={c.image} alt={c.imageAlt ?? `${c.name} website`} fill sizes="(min-width:1024px) 380px, (min-width:640px) 45vw, 100vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">{c.platform}</p>
        <h3 className="mt-2 font-display text-xl font-bold">{c.name}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{c.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          Read case study <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

export function GuideCard({ g }: { g: Guide }) {
  return (
    <Link href={`/guides/${g.slug}`} className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg">
      <p className="text-xs font-semibold uppercase tracking-wider text-brand">{g.category} · {g.readMinutes} min read</p>
      <h3 className="mt-3 font-display text-lg font-bold leading-snug">{g.title}</h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{g.description}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        Read the guide <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}

const steps = [
  { n: "01", t: "Discover", d: "Understand your business, audience, goals and requirements." },
  { n: "02", t: "Plan", d: "Define structure, user journey, functionality and technical approach." },
  { n: "03", t: "Design", d: "Visual direction, layouts and responsive structure, from your Figma if you have one." },
  { n: "04", t: "Develop", d: "Build on the right platform, whether WordPress, Shopify, Wix or custom code." },
  { n: "05", t: "Test", d: "Navigation, responsive behaviour, forms, browsers, performance and key functionality." },
  { n: "06", t: "Launch & support", d: "Deploy, verify, hand over, then maintain and improve as you grow." },
];

export function ProcessSteps() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((s) => (
        <li key={s.n} className="rounded-2xl border border-line bg-white p-6">
          <span className="font-display text-sm font-extrabold text-brand">{s.n}</span>
          <h3 className="mt-2 font-display text-lg font-bold">{s.t}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
        </li>
      ))}
    </ol>
  );
}

export function CtaBand({ title = "Ready to talk about your project?", text = "Tell me what you need and I'll reply with next steps and an estimate based on scope.", service }: { title?: string; text?: string; service?: string }) {
  const href = service ? `/quote?service=${encodeURIComponent(service)}` : "/quote";
  return (
    <section className="mx-auto max-w-6xl px-5 md:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-12 text-white md:px-12 md:py-14">
        <div aria-hidden="true" className="absolute -right-20 -top-20 size-72 rounded-full bg-brand/40 blur-[90px]" />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">{title}</h2>
          <p className="mt-3 text-lg text-white/75">{text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={href} className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-brand-soft">
              Request a Quote <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="inline-flex items-center rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white/10">
              Other ways to reach me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
