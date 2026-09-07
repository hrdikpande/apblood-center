import type { MetadataRoute } from "next";
import { SITE, DOCTOR } from "@/content/site";
import { conditionSlugs } from "@/content/conditions";
import { treatmentSlugs } from "@/content/treatments";
import { blogSlugs } from "@/content/blog";

const STATIC_ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: `/${DOCTOR.slug}`, priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/conditions", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/treatments", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/bone-marrow-transplant", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/programs/pediatric-hematology", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/programs/adult-hematology", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/second-opinion", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/insurance", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/for-doctors", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/patient-resources", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/faqs", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/testimonials", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/gallery", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/book-appointment", priority: 0.8, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const conditionEntries: MetadataRoute.Sitemap = conditionSlugs.map((slug) => ({
    url: `${SITE.url}/conditions/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const treatmentEntries: MetadataRoute.Sitemap = treatmentSlugs
    .filter((slug) => slug !== "bone-marrow-transplant")
    .map((slug) => ({
      url: `${SITE.url}/treatments/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    }));

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${SITE.url}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...conditionEntries, ...treatmentEntries, ...blogEntries];
}
