import type { Metadata } from "next";
import { business } from "@/config/business";
import { services } from "@/config/services";
import { Breadcrumbs, CtaBand, ProcessSteps, SectionHeading, ServiceCard } from "@/components/blocks";
import { Stagger, StaggerItem } from "@/components/ui";

export const metadata: Metadata = {
  title: "Web Development Services",
  description:
    "WordPress, WooCommerce, Shopify and Wix development, redesigns, landing pages, maintenance, accessibility audits, technical SEO and integrations for international clients.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-10 md:px-8 md:pt-14">
        <Breadcrumbs trail={[{ name: "Services", href: "/services" }]} />
        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">Web development services from {business.name}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Choose a service to see what&apos;s included, who it&apos;s for and answers to common questions. Not sure which fits? Request a quote and I&apos;ll recommend an approach.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.id}>
              <ServiceCard s={s} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <SectionHeading eyebrow="Process" title="How every project runs" />
        <ProcessSteps />
      </section>

      <CtaBand />
    </>
  );
}
