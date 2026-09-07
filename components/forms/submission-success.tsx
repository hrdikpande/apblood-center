import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { NAP, telLink, whatsappLink } from "@/content/site";
import { cn } from "@/lib/utils";

export function SubmissionSuccess({
  heading = "Thank you — we've received your request",
  body = "Our team will call you shortly to confirm the details. For a faster response, continue the conversation on WhatsApp.",
  whatsappMessage,
}: {
  heading?: string;
  body?: string;
  whatsappMessage: string;
}) {
  return (
    <div className="rounded-2xl border border-success/30 bg-success/5 p-6 text-center sm:p-8">
      <CheckCircle2 className="mx-auto size-10 text-success" aria-hidden="true" />
      <h3 className="mt-4 font-display text-xl font-semibold text-text-dark">{heading}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-text-light">{body}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <a
          href={whatsappLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "lg" }), "h-11 gap-2 rounded-full bg-success px-5 hover:bg-success/90")}
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Continue on WhatsApp
        </a>
        <a
          href={telLink()}
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 gap-2 rounded-full px-5")}
        >
          <Phone className="size-4" aria-hidden="true" />
          Call {NAP.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
