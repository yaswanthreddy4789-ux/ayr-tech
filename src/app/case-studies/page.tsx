import type { Metadata } from "next";
import { caseStudies } from "@/config/case-studies";
import { Breadcrumbs, CaseStudyCard, CtaBand } from "@/components/blocks";
import { Stagger, StaggerItem } from "@/components/ui";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real WordPress, WooCommerce, Shopify and Wix projects: large-catalog sync, accessibility remediation, schema rollouts and bulk SEO fixes.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-10 md:px-8 md:pt-14">
        <Breadcrumbs trail={[{ name: "Case Studies", href: "/case-studies" }]} />
        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">Case studies</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Real projects and what was done on each. Numbers shown are only those I can stand behind.
        </p>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <StaggerItem key={c.slug}><CaseStudyCard c={c} /></StaggerItem>
          ))}
        </Stagger>
      </section>
      <CtaBand />
    </>
  );
}
