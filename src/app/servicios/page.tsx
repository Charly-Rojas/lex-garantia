import type { Metadata } from "next";
import { CTA } from "@/components/sections/cta";
import { ServiceCard } from "@/components/sections/service-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de Lex Garantía para contratación, vigencia e incumplimiento en arrendamientos.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-neutral-soft py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Servicios"
            title="Cobertura jurídica durante el arrendamiento"
            description="La presentación institucional organiza el servicio en proceso de contratación, vigencia de contrato, atención administrativa y atención judicial."
          />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-3 md:px-8">
          {siteConfig.serviceGroups.map((service) => (
            <ServiceCard
              description={service.description}
              items={service.items}
              key={service.title}
              title={service.title}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Seguimiento permanente"
            title="Atención desde el inicio del proceso hasta la atención judicial"
            description="La cobertura documentada contempla investigación, elaboración del proyecto de contrato, firma, cobranza administrativa, alternativas de solución, demanda, seguimiento del juicio y ejecución de sentencia."
          />
        </div>
      </section>

      <CTA
        title="Solicita información sobre la póliza jurídica"
        description="Comparte los datos de contacto para que el despacho oriente el proceso correspondiente."
        action={{ href: "/contacto", label: "Contactar" }}
      />
    </>
  );
}
