import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { NAP, telLink, whatsappLink } from "@/content/site";

const WA_MESSAGE =
  "Hello, I would like to book an appointment at AP Blood & Blood Cancer Centre.";

/**
 * Thumb-zone bottom action bar for mobile — replaces separate floating
 * buttons on small screens so a new patient can reach booking in one tap.
 */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-white/95 backdrop-blur-md lg:hidden [padding-bottom:env(safe-area-inset-bottom)]">
      <a
        href={telLink()}
        className="flex flex-col items-center justify-center gap-1 py-2.5 text-info active:bg-muted"
        aria-label={`Call ${NAP.phoneDisplay}`}
      >
        <Phone className="size-5" aria-hidden="true" />
        <span className="text-xs font-medium">Call</span>
      </a>
      <a
        href={whatsappLink(WA_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 py-2.5 text-success active:bg-muted"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="size-5" />
        <span className="text-xs font-medium">WhatsApp</span>
      </a>
      <Link
        href="/book-appointment"
        className="flex flex-col items-center justify-center gap-1 bg-brand py-2.5 text-white active:bg-brand/90"
      >
        <CalendarCheck className="size-5" aria-hidden="true" />
        <span className="text-xs font-medium">Book</span>
      </Link>
    </div>
  );
}
