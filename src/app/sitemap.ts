import type { MetadataRoute } from "next";
import { business } from "@/config/business";
import { services } from "@/config/services";
import { caseStudies } from "@/config/case-studies";
import { guides } from "@/config/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = business.url;
  return [
    { url: u, changeFrequency: "monthly", priority: 1 },
    { url: `${u}/services`, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((s) => ({ url: `${u}/services/${s.id}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${u}/case-studies`, changeFrequency: "monthly", priority: 0.7 },
    ...caseStudies.map((c) => ({ url: `${u}/case-studies/${c.slug}`, changeFrequency: "yearly" as const, priority: 0.6 })),
    { url: `${u}/guides`, changeFrequency: "weekly", priority: 0.8 },
    ...guides.map((g) => ({ url: `${u}/guides/${g.slug}`, lastModified: g.updated, changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${u}/about`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${u}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${u}/quote`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${u}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
