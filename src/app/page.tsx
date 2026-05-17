import { CTA } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { ServiceCard } from "@/components/sections/service-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Pólizas jurídicas de arrendamiento"
        title="Pólizas jurídicas para contratos de arrendamiento de inmuebles"
        description="Plataforma institucional para la venta y gestión de pólizas jurídicas en materia de arrendamiento inmobiliario, con operación proyectada en CDMX, Guanajuato y Puebla."
        primaryAction={{ href: "/contacto", label: "Contactar" }}
        secondaryAction={{ href: "/servicios", label: "Ver servicios" }}
      />

      <section className="border-y border-neutral-200 bg-neutral-soft py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <SectionHeading
            eyebrow="Sistema en crecimiento"
            title="Preparado para evolucionar de sitio institucional a plataforma operativa"
            description="El alcance documentado contempla un MVP orientado al registro de datos, generación automática de contratos, almacenamiento documental e integraciones con WhatsApp y DocuSign."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {siteConfig.platformHighlights.map((item) => (
              <div
                className="border border-neutral-200 bg-white p-5"
                key={item.title}
              >
                <h3 className="text-base font-semibold text-brand-blue">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-brand-gray">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Servicios"
            title="Cobertura jurídica durante el proceso de arrendamiento"
            description="El servicio acompaña etapas de contratación, vigencia e incumplimiento con seguimiento permanente."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {siteConfig.serviceGroups.map((service) => (
              <ServiceCard
                description={service.description}
                items={service.items}
                key={service.title}
                title={service.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-blue py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Ventajas"
            title="Atención jurídica, investigación profesional y trato personalizado"
            description="La propuesta institucional concentra acompañamiento desde el inicio del proceso de contratación hasta la atención judicial."
            inverted
          />
          <div className="mt-10 grid gap-3 md:grid-cols-4">
            {siteConfig.advantages.map((advantage) => (
              <div
                className="border border-white/20 bg-white/5 p-5 text-sm font-medium leading-6"
                key={advantage}
              >
                {advantage}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Hablemos sobre una póliza jurídica de arrendamiento"
        description="El equipo de Lex Garantía puede orientar el proceso de contratación, ejecución y controversia judicial relacionada con contratos de arrendamiento."
        action={{ href: "/contacto", label: "Ir a contacto" }}
      />
    </>
  );
}
