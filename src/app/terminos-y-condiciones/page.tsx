import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Términos y condiciones",
  description:
    "Términos generales de uso del sitio web de Lex Garantía.",
  path: "/terminos-y-condiciones",
});

const sections = [
  {
    title: "1. Aceptación de términos",
    body: [
      "Al navegar este sitio web aceptas estos términos y condiciones de uso. Si no estás de acuerdo, debes abstenerte de utilizar el sitio.",
      "Lex Garantía podrá actualizar estos términos cuando sea necesario para reflejar cambios operativos, legales o tecnológicos.",
    ],
  },
  {
    title: "2. Información del sitio",
    body: [
      "El contenido publicado tiene finalidad informativa sobre pólizas jurídicas de arrendamiento, servicios institucionales y medios de contacto.",
      "La información del sitio no sustituye una revisión jurídica individual, una propuesta formal ni la contratación específica de un servicio.",
    ],
  },
  {
    title: "3. Uso permitido",
    body: [
      "El usuario debe utilizar el sitio de forma lícita, respetuosa y compatible con su finalidad informativa y de contacto.",
      "No está permitido intentar vulnerar la seguridad del sitio, enviar información falsa de manera deliberada, interferir con su operación o utilizarlo para fines ilícitos.",
    ],
  },
  {
    title: "4. Solicitudes de contacto",
    body: [
      "El formulario de contacto permite enviar una solicitud inicial a Lex Garantía. El envío del formulario no implica aceptación automática de un caso, prestación inmediata de servicios ni creación de una relación profesional por sí mismo.",
      "Lex Garantía podrá solicitar información adicional para analizar la solicitud y definir los pasos aplicables.",
    ],
  },
  {
    title: "5. Propiedad intelectual",
    body: [
      "Los textos, identidad visual, logotipos, estructura del sitio y materiales publicados pertenecen a Lex Garantía o se utilizan con autorización.",
      "Queda prohibida su reproducción, modificación o explotación comercial sin autorización previa y por escrito.",
    ],
  },
  {
    title: "6. Enlaces externos",
    body: [
      "El sitio puede incluir enlaces a servicios externos, como mapas, correo electrónico, teléfono o WhatsApp. Lex Garantía no controla esos servicios ni sus políticas de uso.",
      "El uso de servicios de terceros queda sujeto a sus propios términos y condiciones.",
    ],
  },
  {
    title: "7. Disponibilidad del sitio",
    body: [
      "Lex Garantía procura mantener el sitio disponible y actualizado, pero no garantiza disponibilidad ininterrumpida, ausencia total de errores o compatibilidad con todos los dispositivos.",
      "El sitio podrá suspenderse temporalmente por mantenimiento, mejoras, fallas técnicas o causas externas.",
    ],
  },
  {
    title: "8. Limitación de responsabilidad",
    body: [
      "Lex Garantía no será responsable por daños derivados del uso indebido del sitio, interpretación aislada de su contenido o fallas atribuibles a servicios de terceros.",
      "Cualquier servicio jurídico deberá formalizarse conforme a las condiciones específicas que se acuerden con el cliente.",
    ],
  },
  {
    title: "9. Legislación aplicable",
    body: [
      "Estos términos se interpretan conforme a las leyes aplicables en México. Cualquier controversia se atenderá ante las autoridades competentes, salvo acuerdo distinto por escrito.",
    ],
  },
];

export default function TerminosYCondicionesPage() {
  return (
    <section className="py-16 md:py-20">
      <FadeIn className="mx-auto max-w-4xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Legal"
          title="Términos y condiciones"
          description="Condiciones generales para el uso del sitio web institucional de Lex Garantía."
        />
        <p className="mt-6 text-sm leading-6 text-brand-gray">
          Última actualización: 17 de mayo de 2026.
        </p>
        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="text-xl font-semibold text-brand-blue">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3 text-base leading-8 text-brand-gray">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 border border-neutral-200 bg-neutral-soft p-5 text-sm leading-6 text-brand-gray">
          Para dudas sobre estos términos, escribe a{" "}
          <a
            className="font-semibold text-brand-blue hover:underline"
            href={siteConfig.contact.mailHref}
          >
            {siteConfig.contact.email}
          </a>{" "}
          o visita la página de{" "}
          <Link
            className="font-semibold text-brand-blue hover:underline"
            href="/contacto"
          >
            contacto
          </Link>
          .
        </div>
      </FadeIn>
    </section>
  );
}
