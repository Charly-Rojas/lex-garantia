import { MapPinned } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactDetails() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {siteConfig.offices.map((office) => (
        <article className="border border-neutral-200 bg-white p-5" key={office.city}>
          <h3 className="text-base font-semibold text-brand-blue">
            {office.city}
          </h3>
          <p className="mt-3 text-sm leading-6 text-brand-gray">
            {office.address}
          </p>
          <a
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition-colors hover:text-[#142635]"
            href={office.mapsHref}
            rel="noreferrer"
            target="_blank"
          >
            <MapPinned aria-hidden="true" className="h-4 w-4" />
            Visitar
          </a>
        </article>
      ))}
    </div>
  );
}
