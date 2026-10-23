import { business } from "@/config/business";

/**
 * AYR mark: a geometric "A" whose right stroke rises in brand blue, with a bright apex point.
 * Solid colours (no gradient ids) so the mark can appear several times on one page.
 * The same artwork is used for the favicon (src/app/icon.svg), social image and public/logo*.svg.
 */
export function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="16" fill="#0b1b33" />
      <path d="M16.5 48 L30 17" stroke="#ffffff" strokeWidth="6.5" strokeLinecap="round" fill="none" />
      <path d="M30 17 L47.5 48" stroke="#60a5fa" strokeWidth="6.5" strokeLinecap="round" fill="none" />
      <path d="M23.5 37 H39" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" fill="none" />
      <circle cx="30" cy="17" r="3.6" fill="#bfdbfe" />
    </svg>
  );
}

/** Mark + wordmark. `onDark` switches the text to white for the navy footer. */
export function Logo({ onDark = false, className = "" }: { onDark?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className={`size-10 shrink-0 ${onDark ? "rounded-[11px] ring-1 ring-white/30" : ""}`} />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.35rem] font-extrabold tracking-tight ${onDark ? "text-white" : "text-navy"}`}>AYR</span>
        <span className={`mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] ${onDark ? "text-white/60" : "text-brand"}`}>
          {business.name.replace(/^AYR\s*/i, "")}
        </span>
      </span>
    </span>
  );
}
