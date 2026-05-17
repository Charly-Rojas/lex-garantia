import { getAbsoluteUrl, getSiteUrl } from "@/config/seo";
import { siteConfig } from "@/config/site";

const addresses = [
  {
    "@type": "PostalAddress",
    streetAddress:
      "Calle Providencia 1415, Colonia Tlacoquemecatl del Valle",
    addressLocality: "Benito Juárez",
    addressRegion: "Ciudad de México",
    postalCode: "03200",
    addressCountry: "MX",
  },
  {
    "@type": "PostalAddress",
    streetAddress:
      "Centro Mayor, Torre Alfa, Calzada Zavaleta 1108, oficina 301",
    addressLocality: "Puebla",
    addressRegion: "Puebla",
    postalCode: "72150",
    addressCountry: "MX",
  },
  {
    "@type": "PostalAddress",
    streetAddress: "Zacateros 73, Planta Alta, Centro",
    addressLocality: "San Miguel de Allende",
    addressRegion: "Guanajuato",
    postalCode: "37700",
    addressCountry: "MX",
  },
];

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": `${getSiteUrl()}#organization`,
        name: siteConfig.name,
        url: getSiteUrl(),
        logo: getAbsoluteUrl("/brand/lex-garantia-logo-positive-transparent.png"),
        image: getAbsoluteUrl("/brand/lex-garantia-og.png"),
        email: siteConfig.contact.email,
        telephone: `+52 ${siteConfig.contact.phone}`,
        address: addresses,
        areaServed: [
          "Ciudad de México",
          "Guanajuato",
          "Puebla",
        ],
        serviceType: "Pólizas jurídicas de arrendamiento inmobiliario",
      },
      {
        "@type": "WebSite",
        "@id": `${getSiteUrl()}#website`,
        name: siteConfig.name,
        url: getSiteUrl(),
        publisher: {
          "@id": `${getSiteUrl()}#organization`,
        },
      },
    ],
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      type="application/ld+json"
    />
  );
}
