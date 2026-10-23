"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { business } from "@/config/business";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prev;
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-lg transition-shadow ${scrolled || open ? "border-line shadow-sm" : "border-transparent"}`}>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight" onClick={() => setOpen(false)}>
          <span aria-hidden="true" className="grid size-9 place-items-center rounded-lg bg-navy text-sm font-extrabold text-white">AYR</span>
          <span>
            {business.name.replace(" Services", "")}
            <span className="text-brand"> Services</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {business.nav.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                aria-current={isActive(n.href) ? "page" : undefined}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${isActive(n.href) ? "bg-brand-soft text-brand" : "text-muted hover:bg-surface hover:text-ink"}`}
              >
                {n.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={business.portfolioUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-ink">
              Portfolio<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <Link href="/quote" className="hidden rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:inline-block">
            Request a Quote
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-lg border border-line md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] overflow-y-auto bg-white px-5 pb-10 pt-4 md:hidden">
          <ul className="flex flex-col">
            {business.nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="block border-b border-line py-4 font-display text-2xl font-bold">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={business.portfolioUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="block border-b border-line py-4 font-display text-2xl font-bold">
                Portfolio<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
          <Link href="/quote" onClick={() => setOpen(false)} className="mt-8 block rounded-lg bg-brand py-4 text-center font-semibold text-white">
            Request a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
