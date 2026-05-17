import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Nosotros",
  description:
    "Conoce el enfoque institucional de Lex Garantía, despacho especializado en pólizas jurídicas para contratos de arrendamiento de inmuebles.",
  path: "/nosotros",
});

export default function NosotrosPage() {
  return (
    <div className="py-16 md:py-20">
      <section className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.95fr_1.05fr] md:px-8">
        <FadeIn className="flex items-start justify-center p-4 md:p-8">
          <Image
            src="/brand/lex-garantia-logo-positive-transparent.png"
            alt="Logotipo de Lex Garantía Arrendamiento"
            width={420}
            height={420}
            priority
            className="h-auto w-full max-w-sm"
          />
        </FadeIn>
        <FadeIn delay={0.08}>
          <SectionHeading
            eyebrow="¿Quiénes somos?"
            title="Despacho especializado en pólizas jurídicas para arrendamiento"
            description="Somos un despacho de abogados respaldado por una amplia experiencia en los sectores público y privado."
          />
          <div className="mt-8 space-y-5 text-base leading-8 text-brand-gray">
            <p>
              Expedimos pólizas jurídicas para los contratos de arrendamiento de
              inmuebles, bajo un enfoque de especialización y trato
              personalizado a nuestros clientes.
            </p>
            <p>
              Brindamos asesoría y acompañamiento en los aspectos legales
              durante el proceso de contratación, ejecución y controversia
              judicial a contratos de arrendamiento, bajo la combinación exacta
              de experiencia y profesionalismo.
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
