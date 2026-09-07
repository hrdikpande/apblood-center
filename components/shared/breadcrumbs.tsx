import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbListSchema } from "@/lib/schema";
import { JsonLd } from "@/components/schema/json-ld";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const full = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbListSchema(full.map((i) => ({ name: i.name, url: i.href })))} />
      <nav aria-label="Breadcrumb" className="text-sm text-text-light">
        <ol className="flex flex-wrap items-center gap-1.5">
          {full.map((item, i) => {
            const isLast = i === full.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="size-3.5 text-border" aria-hidden="true" />}
                {isLast ? (
                  <span aria-current="page" className="font-medium text-text-dark">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-brand hover:underline">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
