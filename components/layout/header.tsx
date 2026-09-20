"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS, NAP, SITE, telLink } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b bg-white/85 backdrop-blur-md transition-[padding,box-shadow] duration-300",
        scrolled ? "border-border shadow-sm" : "border-transparent"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-4 transition-[height] duration-300 sm:px-6 lg:px-8",
          scrolled ? "h-16" : "h-20"
        )}
      >
        <Link href="/" aria-label={`${SITE.shortName} — home`} className="flex shrink-0 items-center">
          {/* Mark alone on phones: the full lockup's wordmark is unreadable below ~140px. */}
          <Image
            src="/logo-mark.png"
            alt=""
            width={96}
            height={96}
            priority
            className={cn("w-auto transition-[height] duration-300 sm:hidden", scrolled ? "h-9" : "h-11")}
          />
          <Image
            src="/logo.jpeg"
            alt={SITE.name}
            width={330}
            height={120}
            priority
            className={cn("hidden w-auto transition-[height] duration-300 sm:block", scrolled ? "h-10" : "h-12")}
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 2xl:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-text-dark/80 transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 2xl:flex">
          <a
            href={telLink()}
            className="flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-text-dark hover:text-brand"
          >
            <Phone className="size-4" aria-hidden="true" />
            {NAP.phoneDisplay}
          </a>
          <Link
            href="/book-appointment"
            className={cn(buttonVariants({ size: "lg" }), "h-10 shrink-0 whitespace-nowrap rounded-full px-5")}
          >
            Book an Appointment
          </Link>
        </div>

        <div className="flex items-center 2xl:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <button
                  type="button"
                  aria-label="Open menu"
                  className="flex size-10 items-center justify-center rounded-lg text-text-dark hover:bg-muted"
                />
              }
            >
              <Menu className="size-6" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] p-0">
              <SheetHeader className="border-b border-border">
                <SheetTitle>{SITE.shortName}</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col gap-1 p-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-text-dark hover:bg-rose hover:text-brand"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2 border-t border-border p-4">
                <a href={telLink()} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 w-full")}>
                  Call {NAP.phoneDisplay}
                </a>
                <Link
                  href="/book-appointment"
                  onClick={() => setOpen(false)}
                  className={cn(buttonVariants({ size: "lg" }), "h-11 w-full")}
                >
                  Book an Appointment
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
