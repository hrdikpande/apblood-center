import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { NAP, telLink, whatsappLink } from "@/content/site";
import { cn } from "@/lib/utils";

export function CtaBand({
  heading,
  body,
  whatsappMessage,
  className,
}: {
  heading: string;
  body: string;
  whatsappMessage?: string;
  className?: string;
}) {
  const waMessage =
    whatsappMessage ??
    "Hello, I would like to book an appointment at AP Blood & Blood Cancer Centre.";

  return (
    <section className={cn("bg-brand", className)}>
      <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">{body}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/book-appointment"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 gap-2 rounded-full bg-white px-6 text-base text-brand hover:bg-white/90"
              )}
            >
              <CalendarCheck className="size-5" aria-hidden="true" />
              Book an Appointment
            </Link>
            <a
              href={telLink()}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 gap-2 rounded-full border-white/40 bg-transparent px-6 text-base text-white hover:bg-white/10"
              )}
            >
              <Phone className="size-5" aria-hidden="true" />
              Call {NAP.phoneDisplay}
            </a>
            <a
              href={whatsappLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 gap-2 rounded-full border-white/40 bg-transparent px-6 text-base text-white hover:bg-white/10"
              )}
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
