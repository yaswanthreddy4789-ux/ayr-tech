import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { business } from "@/config/business";
import { getService, services } from "@/config/services";
import { getCaseStudy } from "@/config/case-studies";
import { Breadcrumbs, CaseStudyCard, CtaBand, Faq, JsonLd, ProcessSteps, SectionHeading } from "@/components/blocks";
import { Icon, Reveal, Stagger, StaggerItem } from "@/components/ui";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.seoTitle,
    description: s.seoDescription,
    alternates: { canonical: `/services/${s.id}` },
    openGraph: { title: `${s.seoTitle} | ${business.name}`, description: s.seoDescription, url: `/services/${s.id}`, type: "website" },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const cases = s.caseStudies.map(getCaseStudy).filter((c) => !!c);
  const related = s.related.map(getService).filter((x) => !!x);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: s.title,
    description: s.seoDescription,
    url: `${business.url}/services/${s.id}`,
    provider: { "@type": "Organization", name: business.name, url: business.url },
    areaServed: business.areaServed.map((name) => ({ "@type": "Country", name })),
  };

  return (
    <>
      <JsonLd data={serviceLd} />
      <section className="mx-auto max-w-6xl px-5 pt-10 md:px-8 md:pt-14">
        <Breadcrumbs trail={[{ name: "Services", href: "/services" }, { name: s.title, href: `/services/${s.id}` }]} />
        <Reveal>
          <span className="grid size-12 place-items-center rounded-xl bg-brand-soft text-brand"><Icon name={s.icon} className="size-6" /></span>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">{s.headline}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">{s.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/quote?service=${encodeURIComponent(s.title)}`} className="inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-dark">
              Request a Quote <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="inline-flex items-center rounded-lg border border-line px-7 py-4 text-sm font-semibold transition-colors hover:border-brand hover:text-brand">
              Discuss Your Project
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-14 grid max-w-6xl gap-6 px-5 md:px-8 lg:grid-cols-2">
        <Reveal className="rounded-2xl border border-line bg-surface p-7">
          <h2 className="font-display text-xl font-bold">Who this is for</h2>
          <p className="mt-3 leading-relaxed text-muted">{s.forWho}</p>
          <h2 className="mt-8 font-display text-xl font-bold">Problems it solves</h2>
          <ul className="mt-3 grid gap-2.5">
            {s.problems.map((p) => (
              <li key={p} className="flex items-start gap-3 text-muted">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" /> {p}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.08} className="rounded-2xl border border-line bg-white p-7 shadow-sm">
          <h2 className="font-display text-xl font-bold">What you get</h2>
          <ul className="mt-4 grid gap-3">
            {s.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" /> {d}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <SectionHeading eyebrow="Process" title="How the work runs" />
        <ProcessSteps />
      </section>

      {cases.length > 0 && (
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <SectionHeading eyebrow="Examples" title={`${s.title} in practice`} intro="Real projects related to this service." />
            <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cases.map((c) => (
                <StaggerItem key={c.slug}><CaseStudyCard c={c} /></StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        <SectionHeading eyebrow="FAQ" title={`${s.title}: common questions`} center />
        <Faq items={s.faqs} />
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
          <h2 className="font-display text-2xl font-bold">Related services</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {related.map((r) => (
              <li key={r.id}>
                <Link href={`/services/${r.id}`} className="inline-block rounded-lg border border-line px-4 py-2.5 text-sm font-medium transition-colors hover:border-brand hover:text-brand">
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <CtaBand service={s.title} title={`Need ${s.title.toLowerCase()}?`} />
    </>
  );
}
