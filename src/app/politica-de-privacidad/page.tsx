import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Política de privacidad",
  description:
    "Política de privacidad para el tratamiento de datos personales en el sitio de Lex Garantía.",
  path: "/politica-de-privacidad",
});

const sections = [
  {
    title: "1. Responsable",
    body: [
      "Lex Garantía es responsable del tratamiento de los datos personales recibidos a través de este sitio web y sus canales de contacto.",
      `Para dudas o solicitudes relacionadas con privacidad puedes escribir a ${siteConfig.contact.email}.`,
    ],
  },
  {
    title: "2. Datos personales que pueden recabarse",
    body: [
      "A través del formulario de contacto podemos recabar nombre, correo electrónico, teléfono y el contenido del mensaje enviado por el usuario.",
      "También pueden recibirse datos enviados voluntariamente por correo electrónico, llamada telefónica o WhatsApp cuando el usuario decide utilizar esos canales.",
    ],
  },
  {
    title: "3. Finalidades del tratamiento",
    body: [
      "Los datos se utilizan para recibir, responder y dar seguimiento a solicitudes de información sobre pólizas jurídicas de arrendamiento y servicios relacionados.",
      "También pueden utilizarse para confirmar la recepción del mensaje, mantener comunicación con el solicitante y documentar el seguimiento de la atención.",
    ],
  },
  {
    title: "4. Base de tratamiento y consentimiento",
    body: [
      "Al enviar información mediante el formulario o canales de contacto, el usuario autoriza el uso de sus datos para las finalidades descritas en esta política.",
      "El usuario debe procurar no enviar datos personales sensibles o información de terceros si no cuenta con autorización para hacerlo.",
    ],
  },
  {
    title: "5. Conservación",
    body: [
      "Los datos se conservarán durante el tiempo necesario para atender la solicitud, dar seguimiento a la comunicación y cumplir obligaciones legales o administrativas aplicables.",
      "Cuando la información deje de ser necesaria, se eliminará o resguardará conforme a criterios razonables de seguridad y archivo.",
    ],
  },
  {
    title: "6. Transferencias",
    body: [
      "Lex Garantía no venderá datos personales. Los datos podrán compartirse con proveedores tecnológicos necesarios para operar correo, alojamiento, mensajería o herramientas de comunicación.",
      "También podrán compartirse cuando exista obligación legal, requerimiento de autoridad competente o necesidad operativa relacionada con la prestación de servicios solicitados.",
    ],
  },
  {
    title: "7. Seguridad",
    body: [
      "Lex Garantía aplicará medidas administrativas y técnicas razonables para proteger los datos contra pérdida, acceso no autorizado, alteración o divulgación indebida.",
      "Ningún sistema conectado a internet puede garantizar seguridad absoluta, por lo que se recomienda no enviar información innecesaria o excesiva por formularios públicos.",
    ],
  },
  {
    title: "8. Derechos ARCO",
    body: [
      "El titular puede solicitar acceso, rectificación, cancelación u oposición respecto de sus datos personales, así como revocar su consentimiento cuando proceda.",
      `Para ejercer estos derechos, debe enviar una solicitud a ${siteConfig.contact.email} indicando nombre, medio de contacto, derecho que desea ejercer y datos sobre los que versa la solicitud.`,
    ],
  },
  {
    title: "9. Servicios de terceros",
    body: [
      "El sitio puede enlazar a Google Maps, WhatsApp, correo electrónico o telefonía. Cada proveedor opera bajo sus propios avisos de privacidad y condiciones.",
      "Lex Garantía no controla el tratamiento de datos realizado directamente por plataformas de terceros cuando el usuario interactúa con ellas.",
    ],
  },
  {
    title: "10. Cambios a la política",
    body: [
      "Esta política podrá modificarse por cambios legales, operativos o tecnológicos. Las actualizaciones se publicarán en esta misma página.",
    ],
  },
];

export default function PoliticaDePrivacidadPage() {
  return (
    <section className="py-16 md:py-20">
      <FadeIn className="mx-auto max-w-4xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Privacidad"
          title="Política de privacidad"
          description="Tratamiento de datos personales recibidos por el sitio web y canales de contacto de Lex Garantía."
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
          Para solicitudes de privacidad, escribe a{" "}
          <a
            className="font-semibold text-brand-blue hover:underline"
            href={siteConfig.contact.mailHref}
          >
            {siteConfig.contact.email}
          </a>{" "}
          o revisa los medios disponibles en{" "}
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
