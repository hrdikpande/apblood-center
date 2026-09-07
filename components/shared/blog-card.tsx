import Link from "next/link";
import { Clock, Tag } from "lucide-react";
import type { BlogPostEntry } from "@/content/types";

export function BlogCard({ post }: { post: BlogPostEntry }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
    >
      <span className="inline-flex w-fit items-center gap-1 rounded-full bg-rose px-2.5 py-1 text-xs font-semibold text-brand">
        <Tag className="size-3" aria-hidden="true" />
        {post.category}
      </span>
      <h3 className="mt-3 font-display text-lg font-semibold text-text-dark group-hover:text-brand">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm text-text-light">{post.excerpt}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-text-light">
        <Clock className="size-3.5" aria-hidden="true" />
        {post.readingTimeMinutes} min read
      </span>
    </Link>
  );
}
