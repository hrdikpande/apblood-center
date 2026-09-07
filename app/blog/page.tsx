import type { Metadata } from "next";
import { blogPosts } from "@/content/blog";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { BlogCard } from "@/components/shared/blog-card";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Blood Health Blog & Patient Guides",
  description:
    "Educational articles on blood cancer, blood disorders and treatments, written and medically reviewed by Dr. Amarnadh Polisetty, Clinical Haematologist.",
  alternates: { canonical: "/blog" },
};

export default function BlogHubPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
      <Reveal className="mt-6 max-w-2xl">
        <h1 className="font-display text-4xl font-bold text-text-dark sm:text-5xl">
          Blood Health Blog &amp; Patient Guides
        </h1>
        <p className="mt-4 text-lg text-text-light">
          Plain-language guides on blood cancer, blood disorders and treatments — written and
          medically reviewed by {" "}
          <span className="font-medium text-text-dark">Dr. Amarnadh Polisetty</span>.
        </p>
      </Reveal>

      <StaggerGrid className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <StaggerItem key={post.slug}>
            <BlogCard post={post} />
          </StaggerItem>
        ))}
      </StaggerGrid>
    </div>
  );
}
