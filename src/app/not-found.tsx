import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center md:px-8">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand">404</p>
      <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">Page not found</h1>
      <p className="mt-4 text-lg text-muted">That page doesn&apos;t exist or has moved.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark">Go to the homepage</Link>
        <Link href="/services" className="rounded-lg border border-line px-6 py-3 text-sm font-semibold hover:border-brand hover:text-brand">View services</Link>
      </div>
    </section>
  );
}
