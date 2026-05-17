import { siteConfig } from "@/config/site";

export function ContactDetails() {
  return (
    <div className="grid gap-6">
      <div className="border border-neutral-200 bg-neutral-soft p-6">
        <h2 className="text-lg font-semibold text-brand-blue">
          Datos generales
        </h2>
        <dl className="mt-5 grid gap-4 text-sm leading-6 text-brand-gray sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-foreground">Correo</dt>
            <dd>{siteConfig.contact.email}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">Sitio</dt>
            <dd>{siteConfig.contact.website}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">Teléfono</dt>
            <dd>{siteConfig.contact.phone}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">WhatsApp</dt>
            <dd>{siteConfig.contact.whatsapp}</dd>
          </div>
        </dl>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {siteConfig.offices.map((office) => (
          <article className="border border-neutral-200 bg-white p-5" key={office.city}>
            <h3 className="text-base font-semibold text-brand-blue">
              {office.city}
            </h3>
            <p className="mt-3 text-sm leading-6 text-brand-gray">
              {office.address}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
