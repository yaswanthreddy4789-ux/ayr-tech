import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { business } from "@/config/business";
import { MotionProvider } from "@/components/ui";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/blocks";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], weight: ["600", "700", "800"], display: "swap" });

const title = `${business.name}: WordPress, Shopify and Wix Developer`;

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: { default: title, template: `%s | ${business.name}` },
  description: business.description,
  applicationName: business.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: business.name,
    title,
    description: business.description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description: business.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0b1b33", colorScheme: "light" };

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: business.name,
  url: business.url,
  email: business.email,
  telephone: business.phone,
  description: business.description,
  founder: { "@type": "Person", name: business.owner },
  areaServed: business.areaServed.map((name) => ({ "@type": "Country", name })),
  sameAs: [business.portfolioUrl, business.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen">
        <a href="#main" className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white focus:translate-y-0">
          Skip to content
        </a>
        <JsonLd data={organization} />
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
