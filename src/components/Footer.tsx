import Link from "next/link";
import { business, emailHref } from "@/config/business";
import { services } from "@/config/services";
import { Year } from "./Year";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1.2fr_1fr]">
          <div>
            <Logo onDark />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">{business.tagline}</p>
            <ul className="mt-6 grid gap-2 text-sm">
              <li><a href={emailHref} className="text-white/90 hover:text-white hover:underline">{business.email}</a></li>
              <li><a href={business.phoneHref} className="text-white/90 hover:text-white hover:underline">{business.phone}</a></li>
              <li className="text-white/70">Based in {business.location}</li>
              <li className="text-white/70">{business.timezone}</li>
            </ul>
          </div>

          <nav aria-label="Services">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">Services</p>
            <ul className="grid gap-2 text-sm sm:grid-cols-1">
              {services.slice(0, 8).map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.id}`} className="text-white/80 hover:text-white hover:underline">{s.title}</Link>
                </li>
              ))}
              <li><Link href="/services" className="font-semibold text-white hover:underline">All services →</Link></li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">Company</p>
            <ul className="grid gap-2 text-sm">
              <li><Link href="/case-studies" className="text-white/80 hover:text-white hover:underline">Case studies</Link></li>
              <li><Link href="/guides" className="text-white/80 hover:text-white hover:underline">Guides</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-white hover:underline">About</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white hover:underline">Contact</Link></li>
              <li><Link href="/quote" className="text-white/80 hover:text-white hover:underline">Request a quote</Link></li>
              <li><Link href="/privacy" className="text-white/80 hover:text-white hover:underline">Privacy policy</Link></li>
              <li>
                <a href={business.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white hover:underline">
                  LinkedIn<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a href={business.portfolioUrl} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white hover:underline">
                  Personal portfolio<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/60">
          <p>© <Year /> {business.name}. All rights reserved.</p>
          <p>Serving clients in {business.areaServed.join(", ")} and worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
