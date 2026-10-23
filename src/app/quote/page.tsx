import type { Metadata } from "next";
import { business } from "@/config/business";
import { services } from "@/config/services";
import { Breadcrumbs } from "@/components/blocks";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: `Request a quote from ${business.name} for WordPress, WooCommerce, Shopify, Wix, redesign, accessibility, SEO or maintenance work.`,
  alternates: { canonical: "/quote" },
};

const next = [
  { t: "I read your request", d: "I review what you've described and the service you chose." },
  { t: "I reply by email", d: "You get clarifying questions if needed, then a suggested approach and an estimate based on scope." },
  { t: "You decide", d: "No obligation. If it's a fit, we agree scope and next steps." },
];

export default async function QuotePage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;
  // Only accept a service title we actually offer.
  const preset = services.find((s) => s.title === service || s.id === service)?.title ?? "";

  return (
    <section className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
      <Breadcrumbs trail={[{ name: "Request a Quote", href: "/quote" }]} />
      <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">Request a quote</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        Tell me about your project. The more detail you give, the more useful my reply will be.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
        <QuoteForm defaultService={preset} />
        <aside className="self-start rounded-2xl border border-line bg-surface p-6">
          <h2 className="font-display text-xl font-bold">What happens next</h2>
          <ol className="mt-4 grid gap-5">
            {next.map((n, i) => (
              <li key={n.t} className="flex gap-4">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand text-sm font-bold text-white">{i + 1}</span>
                <div>
                  <p className="font-semibold">{n.t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{n.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 border-t border-line pt-5 text-sm text-muted">
            Based in {business.location} ({business.timezone}). Prefer email? <a href={`mailto:${business.email}`} className="font-semibold text-brand hover:underline">{business.email}</a>
          </p>
        </aside>
      </div>
    </section>
  );
}
