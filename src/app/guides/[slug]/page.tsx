import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { business } from "@/config/business";
import { getGuide, guides } from "@/config/guides";
import { getService } from "@/config/services";
import { Breadcrumbs, CtaBand, Faq, GuideCard, JsonLd } from "@/components/blocks";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const fmt = (iso: string) => new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return {
    title: g.seoTitle,
    description: g.description,
    alternates: { canonical: `/guides/${g.slug}` },
    authors: [{ name: business.owner }],
    openGraph: {
      title: `${g.seoTitle} | ${business.name}`,
      description: g.description,
      url: `/guides/${g.slug}`,
      type: "article",
      publishedTime: g.published,
      modifiedTime: g.updated,
      authors: [business.owner],
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  const services = g.services.map(getService).filter((s) => !!s);
  const related = g.related.map(getGuide).filter((x) => !!x);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: g.description,
    datePublished: g.published,
    dateModified: g.updated,
    mainEntityOfPage: `${business.url}/guides/${g.slug}`,
    author: { "@type": "Person", name: business.owner, url: `${business.url}/about` },
    publisher: { "@type": "Organization", name: business.name, url: business.url, logo: { "@type": "ImageObject", url: `${business.url}/logo-mark.svg` } },
  };

  return (
    <>
      <JsonLd data={articleLd} />
      <article className="mx-auto max-w-3xl px-5 pt-10 md:px-8 md:pt-14">
        <Breadcrumbs trail={[{ name: "Guides", href: "/guides" }, { name: g.title, href: `/guides/${g.slug}` }]} />
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">{g.category}</p>
        <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">{g.title}</h1>
        <p className="mt-4 text-sm text-muted">
          By {business.owner} · Published {fmt(g.published)}
          {g.updated !== g.published ? ` · Updated ${fmt(g.updated)}` : ""} · {g.readMinutes} min read
        </p>
        <p className="mt-6 text-xl leading-relaxed text-ink/90">{g.intro}</p>

        <nav aria-label="In this guide" className="mt-8 rounded-2xl border border-line bg-surface p-5">
          <p className="text-sm font-semibold">In this guide</p>
          <ol className="mt-3 grid gap-1.5 text-sm">
            {g.sections.map((s) => (
              <li key={s.h}><a href={`#${slugify(s.h)}`} className="text-brand hover:underline">{s.h}</a></li>
            ))}
          </ol>
        </nav>

        <div className="mt-6">
          {g.sections.map((s) => (
            <section key={s.h} id={slugify(s.h)} className="scroll-mt-24">
              <h2 className="mt-10 font-display text-2xl font-bold">{s.h}</h2>
              {s.p?.map((para) => (
                <p key={para} className="mt-3 text-lg leading-relaxed text-muted">{para}</p>
              ))}
              {s.list && (
                <ul className="mt-3 grid gap-2.5">
                  {s.list.map((li) => (
                    <li key={li} className="flex items-start gap-3 text-lg leading-relaxed text-muted">
                      <span aria-hidden="true" className="mt-3 size-1.5 shrink-0 rounded-full bg-brand" /> {li}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-bold">Frequently asked questions</h2>
          <div className="mt-5"><Faq items={g.faqs} /></div>
        </section>

        {services.length > 0 && (
          <section className="mt-14 rounded-2xl border border-line bg-surface p-6">
            <h2 className="font-display text-xl font-bold">Need help with this?</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.id}`} className="inline-block rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-semibold text-brand transition-colors hover:border-brand">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      {related.length > 0 && (
        <section className="mx-auto mt-16 max-w-6xl px-5 md:px-8">
          <h2 className="font-display text-2xl font-bold">Keep reading</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {related.map((r) => (
              <GuideCard key={r.slug} g={r} />
            ))}
          </div>
        </section>
      )}

      <div className="mt-16"><CtaBand service={services[0]?.title} /></div>
    </>
  );
}
