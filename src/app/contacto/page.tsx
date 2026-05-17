import type { Metadata } from "next";
import { ContactDetails } from "@/components/sections/contact-details";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Datos de contacto y ubicaciones de Lex Garantía en Ciudad de México, Puebla y San Miguel de Allende.",
};

export default function ContactoPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.85fr_1.15fr] md:px-8">
        <SectionHeading
          eyebrow="Contacto"
          title="Comunícate con Lex Garantía"
          description="Estos datos provienen del manual corporativo y la presentación institucional. La validación final de teléfonos queda documentada como pendiente."
        />
        <ContactDetails />
      </div>
    </section>
  );
}
