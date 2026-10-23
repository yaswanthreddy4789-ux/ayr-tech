import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { business } from "@/config/business";
import { Breadcrumbs, CtaBand } from "@/components/blocks";
import { Reveal } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: `About ${business.owner} and ${business.name}: a WordPress, Shopify and Wix developer based in India, working with clients worldwide.`,
  alternates: { canonical: "/about" },
};

const platforms = ["WordPress", "WooCommerce", "Shopify and Shopify Plus", "Wix (Velo)", "Squarespace", "Webflow", "Unbounce", "Laravel (backend)"];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-10 md:px-8 md:pt-14">
        <Breadcrumbs trail={[{ name: "About", href: "/about" }]} />
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.7fr]">
          <Reveal>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">About {business.name}</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              I&apos;m {business.owner}, a WordPress and web developer with 3.6+ years of experience building, customizing and maintaining client websites across WordPress, Shopify, Wix, Squarespace and Unbounce. I&apos;ve built and delivered 300+ projects end to end, owning client communication from requirements to delivery and ongoing support.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              My work covers custom plugin and theme development, large WooCommerce catalogs, Shopify and Shopify Plus engineering, integrations, WCAG 2.1 AA accessibility and technical SEO, plus malware investigation and cleanup.
            </p>
            <p className="mt-4 flex items-center gap-2 text-muted">
              <MapPin className="size-5 text-brand" aria-hidden="true" /> Based in {business.location} · {business.timezone}. No local offices elsewhere are claimed; I work remotely with clients in the {business.areaServed.join(", ")} and beyond.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-line bg-surface shadow-lg">
              <Image src="/yaswanth.jpg" alt={`Portrait of ${business.owner}`} fill priority sizes="(min-width:1024px) 380px, 80vw" className="object-cover object-[50%_20%]" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-6xl gap-5 px-5 md:px-8 sm:grid-cols-3">
        {business.stats.map((s) => (
          <Reveal key={s.label} className="rounded-2xl border border-line bg-surface p-6">
            <p className="font-display text-4xl font-extrabold text-brand">{s.value}</p>
            <p className="mt-1 text-sm text-muted">{s.label}</p>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-5 md:px-8">
        <Reveal>
          <h2 className="font-display text-2xl font-bold">Platforms and technologies</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {platforms.map((p) => (
              <li key={p} className="rounded-lg border border-line bg-white px-4 py-2 text-sm font-medium shadow-sm">{p}</li>
            ))}
          </ul>
          <p className="mt-8 text-muted">
            Want to see more of my work and background?{" "}
            <a href={business.portfolioUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-brand hover:underline">
              Visit my personal portfolio <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>{" "}
            or read the <Link href="/case-studies" className="font-semibold text-brand hover:underline">case studies</Link>.
          </p>
        </Reveal>
      </section>

      <div className="mt-16"><CtaBand /></div>
    </>
  );
}
