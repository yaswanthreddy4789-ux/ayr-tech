import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Globe, Mail, MessageCircle, Phone } from "lucide-react";
import { business, emailHref } from "@/config/business";
import { Breadcrumbs } from "@/components/blocks";
import { Reveal } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${business.name} by email, phone or WhatsApp, or request a quote for your WordPress, Shopify or Wix project.`,
  alternates: { canonical: "/contact" },
};

const card = "group rounded-2xl border border-line bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
      <Breadcrumbs trail={[{ name: "Contact", href: "/contact" }]} />
      <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">Let&apos;s talk about your project</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        The quickest way to a useful answer is the quote form. You can also reach me directly using any of the options below.
      </p>

      <Reveal className="mt-10 grid gap-5 md:grid-cols-3">
        <a href={emailHref} className={card}>
          <Mail className="size-6 text-brand" aria-hidden="true" />
          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted">Email</p>
          <p className="mt-1 break-all font-semibold group-hover:text-brand">{business.email}</p>
        </a>
        <a href={business.phoneHref} className={card}>
          <Phone className="size-6 text-brand" aria-hidden="true" />
          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted">Phone</p>
          <p className="mt-1 font-semibold group-hover:text-brand">{business.phone}</p>
        </a>
        <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className={card}>
          <MessageCircle className="size-6 text-brand" aria-hidden="true" />
          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted">WhatsApp</p>
          <p className="mt-1 font-semibold group-hover:text-brand">Message me<span className="sr-only"> (opens in a new tab)</span></p>
        </a>
      </Reveal>

      <Reveal className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-line bg-surface p-6">
          <Globe className="size-6 text-brand" aria-hidden="true" />
          <h2 className="mt-4 font-display text-lg font-bold">Where I work from</h2>
          <p className="mt-2 text-muted">
            Based in {business.location}, working remotely with clients worldwide. My time zone is {business.timezone}, and most communication happens by email, so differences in time zones rarely get in the way.
          </p>
        </div>
        <div className="rounded-2xl bg-navy p-6 text-white">
          <h2 className="font-display text-lg font-bold">Prefer to write it all down?</h2>
          <p className="mt-2 text-white/75">Describe the project, pick the service and budget range, and I&apos;ll reply with next steps.</p>
          <Link href="/quote" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-navy hover:bg-brand-soft">
            Request a Quote <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
