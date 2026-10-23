import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { business } from "@/config/business";
import { caseStudies, getCaseStudy } from "@/config/case-studies";
import { services } from "@/config/services";
import { Breadcrumbs, CtaBand, JsonLd } from "@/components/blocks";
import { Reveal } from "@/components/ui";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return {};
  const description = c.summary.length > 155 ? c.summary.slice(0, 152).trimEnd() + "…" : c.summary;
  return {
    title: `${c.name}: ${c.platform} case study`,
    description,
    alternates: { canonical: `/case-studies/${c.slug}` },
    openGraph: { title: `${c.name}: ${c.platform} case study | ${business.name}`, description, url: `/case-studies/${c.slug}`, type: "article", images: c.image ? [{ url: c.image, alt: c.imageAlt ?? c.name }] : undefined },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();

  // Scope-of-work bullets are the summary's own sentences; nothing is added.
  const parts = c.summary.split(/(?<=\.)\s+(?=[A-Z])/).map((s) => s.trim()).filter(Boolean);
  const relatedServices = services.filter((s) => s.caseStudies.includes(c.slug));

  const ld = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: c.name,
    description: c.summary,
    creator: { "@type": "Organization", name: business.name, url: business.url },
    url: `${business.url}/case-studies/${c.slug}`,
    ...(c.image ? { image: `${business.url}${c.image}` } : {}),
  };

  return (
    <>
      <JsonLd data={ld} />
      <article className="mx-auto max-w-4xl px-5 pt-10 md:px-8 md:pt-14">
        <Breadcrumbs trail={[{ name: "Case Studies", href: "/case-studies" }, { name: c.name, href: `/case-studies/${c.slug}` }]} />
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">{c.platform} · Case study</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">{c.name}</h1>
          <dl className="mt-8 grid gap-4 rounded-2xl border border-line bg-surface p-6 sm:grid-cols-3">
            <div><dt className="text-xs font-semibold uppercase tracking-wider text-muted">Role</dt><dd className="mt-1 font-medium">{c.role}</dd></div>
            <div><dt className="text-xs font-semibold uppercase tracking-wider text-muted">Platform</dt><dd className="mt-1 font-medium">{c.platform}</dd></div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted">Live site</dt>
              <dd className="mt-1 font-medium">
                {c.url ? (
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-brand hover:underline">
                    {c.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")} <ArrowUpRight className="size-4" aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : "Not public"}
              </dd>
            </div>
          </dl>
        </Reveal>

        {c.image && (
          <Reveal delay={0.05} className="mt-8">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-surface shadow-lg">
              <Image src={c.image} alt={c.imageAlt ?? `${c.name} website`} fill priority sizes="(min-width:896px) 896px, 100vw" className="object-cover object-top" />
            </div>
          </Reveal>
        )}

        <div className="mt-12 grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
          <Reveal>
            <h2 className="font-display text-2xl font-bold">Overview</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">{parts[0]}</p>
            {parts.length > 1 && (
              <>
                <h2 className="mt-8 font-display text-2xl font-bold">Scope of work</h2>
                <ul className="mt-3 grid gap-3">
                  {parts.slice(1).map((p) => (
                    <li key={p} className="flex items-start gap-3"><Check className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" /> {p}</li>
                  ))}
                </ul>
              </>
            )}
            {c.results.length > 0 && (
              <>
                <h2 className="mt-8 font-display text-2xl font-bold">Results</h2>
                <ul className="mt-3 grid gap-2">
                  {c.results.map((r) => (
                    <li key={r} className="rounded-xl border border-line bg-white px-4 py-3 shadow-sm">{r}</li>
                  ))}
                </ul>
              </>
            )}
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-2xl font-bold">Technologies</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {c.stack.map((t) => (
                <li key={t} className="rounded-lg border border-line bg-white px-3 py-1.5 text-sm">{t}</li>
              ))}
            </ul>
            {relatedServices.length > 0 && (
              <>
                <h2 className="mt-8 font-display text-xl font-bold">Related services</h2>
                <ul className="mt-3 grid gap-2">
                  {relatedServices.map((s) => (
                    <li key={s.id}><Link href={`/services/${s.id}`} className="text-brand hover:underline">{s.title}</Link></li>
                  ))}
                </ul>
              </>
            )}
          </Reveal>
        </div>
      </article>
      <div className="mt-16"><CtaBand title="Have a similar project?" /></div>
    </>
  );
}
