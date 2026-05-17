import type { Metadata } from "next";
import { CTA } from "@/components/sections/cta";
import { ServiceCard } from "@/components/sections/service-card";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Servicios",
  description:
    "Servicios de póliza jurídica de arrendamiento: investigación, contrato, firma, cobranza administrativa, alternativas de solución, demanda y seguimiento judicial.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-neutral-soft py-16 md:py-20">
        <FadeIn className="mx-auto max-w-6xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Servicios"
            title="Cobertura jurídica durante el arrendamiento"
            description="La presentación institucional organiza el servicio en proceso de contratación, vigencia de contrato, atención administrativa y atención judicial."
          />
        </FadeIn>
      </section>

      <section className="py-16 md:py-20">
        <FadeIn className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-3 md:px-8">
          {siteConfig.serviceGroups.map((service) => (
            <ServiceCard
              description={service.description}
              items={service.items}
              key={service.title}
              title={service.title}
            />
          ))}
        </FadeIn>
      </section>

      <section className="border-y border-neutral-200 bg-white py-16 md:py-20">
        <FadeIn className="mx-auto max-w-6xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Seguimiento permanente"
            title="Atención desde el inicio del proceso hasta la atención judicial"
            description="La cobertura documentada contempla investigación, elaboración del proyecto de contrato, firma, cobranza administrativa, alternativas de solución, demanda, seguimiento del juicio y ejecución de sentencia."
          />
        </FadeIn>
      </section>

      <CTA
        title="Solicita información sobre la póliza jurídica"
        description="Comparte los datos de contacto para que el despacho oriente el proceso correspondiente."
        action={{ href: "/contacto", label: "Contactar" }}
      />
    </>
  );
}
