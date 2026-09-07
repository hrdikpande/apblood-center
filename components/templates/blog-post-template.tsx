import { Clock, Tag } from "lucide-react";
import type { BlogPostEntry } from "@/content/types";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { MedicallyReviewedBadge } from "@/components/shared/medically-reviewed-badge";
import { CtaBand } from "@/components/shared/cta-band";
import { Reveal } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/schema/json-ld";
import { articleSchema, faqPageSchema } from "@/lib/schema";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
}

export function BlogPostTemplate({ post }: { post: BlogPostEntry }) {
  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd data={faqPageSchema(post.faqs)} />

      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }]} />

        <Reveal className="mt-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-text-light">
            <span className="inline-flex items-center gap-1 rounded-full bg-rose px-2.5 py-1 text-brand">
              <Tag className="size-3" aria-hidden="true" />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3.5" aria-hidden="true" />
              {post.readingTimeMinutes} min read
            </span>
            <span>{formatDate(post.publishDate)}</span>
          </div>

          <h1 className="mt-4 text-balance font-display text-3xl font-bold text-text-dark sm:text-4xl">
            {post.title}
          </h1>
          <p className="prose-medical mt-5 text-lg text-text-light">{post.directAnswer}</p>
        </Reveal>

        <div className="prose-medical mt-10 space-y-8">
          {post.sections.map((section, i) => (
            <Reveal key={i} delay={Math.min(i * 0.04, 0.2)}>
              {section.heading && (
                <h2 className="font-display text-2xl font-semibold text-text-dark">{section.heading}</h2>
              )}
              <div className="mt-3 space-y-4 text-text-dark">
                {section.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {post.faqs.length > 0 && (
          <section className="mt-14">
            <h2 className="font-display text-2xl font-semibold text-text-dark">Frequently asked questions</h2>
            <Reveal className="mt-6">
              <Accordion>
                {post.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="font-display text-base">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-text-light">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </section>
        )}

        <div className="mt-12">
          <MedicallyReviewedBadge reviewDate={post.reviewDate} />
        </div>
      </article>

      <CtaBand
        heading="Have concerns about a blood condition?"
        body="Consult a clinical haematologist for a personalized evaluation and treatment plan."
        whatsappMessage={`Hello, I read your article "${post.title}" and would like to consult a haematologist.`}
      />
    </>
  );
}
