import type { Metadata } from "next";
import { guides } from "@/config/guides";
import { Breadcrumbs, CtaBand, GuideCard } from "@/components/blocks";
import { Stagger, StaggerItem } from "@/components/ui";

export const metadata: Metadata = {
  title: "Guides: WordPress, Shopify, Wix, SEO and Accessibility",
  description:
    "Practical guides on choosing a platform, website costs, redesigns without losing SEO, WCAG accessibility, schema markup, WordPress security and large WooCommerce catalogs.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-10 md:px-8 md:pt-14">
        <Breadcrumbs trail={[{ name: "Guides", href: "/guides" }]} />
        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">Guides for business owners</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Plain-English answers to the questions I hear most from clients choosing a platform, planning a site, or fixing one.
        </p>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <StaggerItem key={g.slug}><GuideCard g={g} /></StaggerItem>
          ))}
        </Stagger>
      </section>
      <CtaBand />
    </>
  );
}
