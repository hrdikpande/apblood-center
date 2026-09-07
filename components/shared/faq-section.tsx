import type { FaqItem } from "@/content/types";
import { Reveal } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/schema/json-ld";
import { faqPageSchema } from "@/lib/schema";

export function FaqSection({ faqs, idPrefix = "faq" }: { faqs: FaqItem[]; idPrefix?: string }) {
  return (
    <>
      <JsonLd data={faqPageSchema(faqs)} />
      <Reveal>
        <Accordion>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`${idPrefix}-${i}`}>
              <AccordionTrigger className="font-display text-base">{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-text-light">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </>
  );
}
