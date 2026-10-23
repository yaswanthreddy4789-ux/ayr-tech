"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { business, emailHref } from "@/config/business";
import { services } from "@/config/services";
import { validateContact, type ContactInput, type FieldErrors } from "@/lib/contact";

const serviceOptions = [...services.map((s) => s.title), "Something else"];
const contactMethods = ["Email", "WhatsApp", "Phone call"];

type Status = "idle" | "sending" | "success" | "error";

/** Quote-request form. `defaultService` preselects a service (from a service page link). */
export function QuoteForm({ defaultService = "" }: { defaultService?: string }) {
  const empty: ContactInput = { name: "", email: "", businessName: "", service: defaultService, budget: "", contactMethod: "", message: "" };
  const [values, setValues] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [honey, setHoney] = useState("");
  // The server rejects instant (bot) submissions, so remember when the form appeared.
  const openedAt = useRef(0);
  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  const set = (k: keyof ContactInput) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const errs = validateContact(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = (Object.keys(errs) as (keyof ContactInput)[])[0];
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honey, elapsed: Date.now() - openedAt.current }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        setValues(empty);
        // Hook for analytics: listen for this event to count quote requests as conversions.
        window.dispatchEvent(new CustomEvent("quote:submitted", { detail: { service: values.service } }));
        return;
      }
      if (res.status === 422 && data.fields) setErrors(data.fields);
      setErrorMsg(
        data.error === "rate_limited"
          ? "Too many attempts. Please wait a few minutes or email me directly."
          : "Your request could not be delivered right now. Please email me directly instead.",
      );
      setStatus("error");
    } catch {
      setErrorMsg("Network error. Please check your connection or email me directly.");
      setStatus("error");
    }
  }

  const field = "w-full rounded-lg border bg-white px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-brand focus:ring-2 focus:ring-brand/20";
  const cls = (k: keyof ContactInput) => `${field} ${errors[k] ? "border-red-500" : "border-line"}`;
  const err = (k: keyof ContactInput) =>
    errors[k] ? (
      <p id={`e-${k}`} role="alert" className="mt-1.5 text-sm text-red-600">
        {errors[k]}
      </p>
    ) : null;
  const aria = (k: keyof ContactInput) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `e-${k}` : undefined });
  const star = <span className="text-red-600" aria-hidden="true"> *</span>;
  const opt = <span className="font-normal text-muted"> (optional)</span>;
  const label = "mb-1.5 block text-sm font-semibold";

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-center shadow-sm" role="status">
        <CheckCircle2 className="mx-auto size-12 text-green-600" aria-hidden="true" />
        <h2 className="mt-4 font-display text-2xl font-bold">Request sent</h2>
        <p className="mx-auto mt-2 max-w-md text-muted">Thank you. I&apos;ll reply by email with next steps.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 rounded-lg border border-line px-5 py-2.5 text-sm font-semibold hover:bg-surface">
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative grid gap-5 rounded-2xl border border-line bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="f-name" className={label}>Name{star}</label>
          <input id="f-name" name="name" autoComplete="name" required value={values.name} onChange={set("name")} className={cls("name")} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="f-email" className={label}>Email address{star}</label>
          <input id="f-email" name="email" type="email" autoComplete="email" required value={values.email} onChange={set("email")} className={cls("email")} {...aria("email")} />
          {err("email")}
        </div>
      </div>

      <div>
        <label htmlFor="f-businessName" className={label}>Business name{opt}</label>
        <input id="f-businessName" name="businessName" autoComplete="organization" value={values.businessName} onChange={set("businessName")} className={cls("businessName")} {...aria("businessName")} />
        {err("businessName")}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="f-service" className={label}>Service needed{star}</label>
          <select id="f-service" name="service" required value={values.service} onChange={set("service")} className={cls("service")} {...aria("service")}>
            <option value="">Select…</option>
            {serviceOptions.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {err("service")}
        </div>
        {business.budgets.length > 0 && (
          <div>
            <label htmlFor="f-budget" className={label}>Budget range{opt}</label>
            <select id="f-budget" name="budget" value={values.budget} onChange={set("budget")} className={cls("budget")}>
              <option value="">Select…</option>
              {business.budgets.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div>
        <label htmlFor="f-contactMethod" className={label}>Preferred contact method{opt}</label>
        <select id="f-contactMethod" name="contactMethod" value={values.contactMethod} onChange={set("contactMethod")} className={cls("contactMethod")}>
          <option value="">No preference</option>
          {contactMethods.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="f-message" className={label}>Project description{star}</label>
        <textarea id="f-message" name="message" rows={5} required value={values.message} onChange={set("message")} className={`${cls("message")} resize-y`} {...aria("message")} />
        {err("message")}
      </div>

      {/* honeypot: hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" value={honey} onChange={(e) => setHoney(e.target.value)} />
        </label>
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
          {errorMsg} <a href={emailHref} className="font-semibold underline">{business.email}</a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            Request a quote <ArrowUpRight className="size-4" aria-hidden="true" />
          </>
        )}
      </button>
      <p className="text-xs leading-relaxed text-muted">
        By sending this form you agree that your details are used to reply to your enquiry. They are emailed to {business.owner} and not added to any mailing list. See the{" "}
        <Link href="/privacy" className="underline hover:text-brand">privacy policy</Link>.
      </p>
    </form>
  );
}
