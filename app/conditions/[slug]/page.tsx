import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { conditionSlugs, getCondition } from "@/content/conditions";
import { ConditionTemplate } from "@/components/templates/condition-template";

export function generateStaticParams() {
  return conditionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getCondition(slug);
  if (!entry) return {};

  return {
    title: entry.metaTitle,
    description: entry.metaDescription,
    alternates: { canonical: `/conditions/${entry.slug}` },
    openGraph: { title: entry.metaTitle, description: entry.metaDescription },
  };
}

export default async function ConditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getCondition(slug);
  if (!entry) notFound();

  return <ConditionTemplate entry={entry} />;
}
