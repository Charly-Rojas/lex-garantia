import type { Metadata } from "next";
import { ContactDetails } from "@/components/sections/contact-details";
import { ContactForm } from "@/components/sections/contact-form";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Datos de contacto y ubicaciones de Lex Garantía en Ciudad de México, Puebla y San Miguel de Allende.",
};

export const runtime = "nodejs";

export default function ContactoPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <FadeIn className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Contacto"
              title="Comunícate con Lex Garantía"
              description="Envíanos un mensaje o usa los enlaces directos de correo, teléfono y WhatsApp."
            />
            <div className="mt-8 space-y-3 text-sm leading-6 text-brand-gray">
              <p>
                Correo:{" "}
                <a
                  className="font-semibold text-brand-blue hover:underline"
                  href={siteConfig.contact.mailHref}
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                Teléfono:{" "}
                <a
                  className="font-semibold text-brand-blue hover:underline"
                  href={siteConfig.contact.phoneHref}
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  className="font-semibold text-brand-blue hover:underline"
                  href={siteConfig.contact.whatsappHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  {siteConfig.contact.whatsapp}
                </a>
              </p>
            </div>
          </div>
          <ContactForm />
        </FadeIn>
        <FadeIn className="mt-12" delay={0.08}>
          <SectionHeading
            eyebrow="Ubicaciones"
            title="Oficinas"
            description="Direcciones extraídas del manual corporativo."
          />
          <div className="mt-8">
            <ContactDetails />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
