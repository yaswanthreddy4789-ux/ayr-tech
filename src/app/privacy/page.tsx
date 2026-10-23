import type { Metadata } from "next";
import { business, emailHref } from "@/config/business";
import { Breadcrumbs } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${business.name} handles the information you send through the quote and contact forms.`,
  alternates: { canonical: "/privacy" },
};

const h2 = "mt-10 font-display text-2xl font-bold";
const p = "mt-3 leading-relaxed text-muted";

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-10 md:px-8 md:py-14">
      <Breadcrumbs trail={[{ name: "Privacy Policy", href: "/privacy" }]} />
      <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">Privacy policy</h1>
      <p className="mt-3 text-sm text-muted">Last updated: 23 October 2026</p>

      <h2 className={h2}>Who I am</h2>
      <p className={p}>
        This website is run by {business.owner}, trading as {business.name}, based in {business.location}. You can contact me at{" "}
        <a href={emailHref} className="font-semibold text-brand hover:underline">{business.email}</a>.
      </p>

      <h2 className={h2}>What I collect</h2>
      <p className={p}>
        When you send the quote form, I receive what you type: your name, email address, optional business name, the service you want, optional budget range and preferred contact method, and your project description. If you email, call or message me directly, I receive the details you share when doing so.
      </p>

      <h2 className={h2}>How it is used</h2>
      <p className={p}>
        I use these details only to reply to your enquiry, discuss and quote your project, and keep ordinary business records. I do not sell your information, and I do not add you to a mailing list unless you ask.
      </p>

      <h2 className={h2}>How it is sent and stored</h2>
      <p className={p}>
        Form submissions are sent by email to me through an email delivery service (Resend, or the FormSubmit relay). That service processes your submission in order to deliver it, so it may handle your data outside your country. Messages are then kept in my email account for as long as needed to handle your enquiry and for business records.
      </p>

      <h2 className={h2}>Cookies and analytics</h2>
      <p className={p}>
        This website does not currently use advertising cookies or analytics. If that changes, this policy will be updated and, where required, you will be asked for consent.
      </p>

      <h2 className={h2}>Your choices</h2>
      <p className={p}>
        You can ask me at any time to tell you what information I hold about you, correct it, or delete it. Email me and I will respond. If you believe your data has been mishandled, you may also contact your local data protection authority.
      </p>

      <h2 className={h2}>Changes</h2>
      <p className={p}>I may update this policy. The date at the top shows when it last changed.</p>
    </section>
  );
}
