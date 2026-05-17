const productionUrl = "https://lexgarantia.com";

export const seoConfig = {
  defaultTitle: "Lex Garantía | Pólizas jurídicas de arrendamiento",
  titleTemplate: "%s | Lex Garantía",
  defaultDescription:
    "Pólizas jurídicas para contratos de arrendamiento de inmuebles con atención en contratación, vigencia, cobranza y procesos judiciales.",
  keywords: [
    "pólizas jurídicas de arrendamiento",
    "contratos de arrendamiento",
    "arrendamiento inmobiliario",
    "Lex Garantía",
    "póliza jurídica CDMX",
    "póliza jurídica Puebla",
    "póliza jurídica Guanajuato",
  ],
  ogImage: "/brand/lex-garantia-og.png",
  routes: [
    {
      path: "/",
      priority: 1,
      changeFrequency: "weekly",
    },
    {
      path: "/nosotros",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/servicios",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/contacto",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/terminos-y-condiciones",
      priority: 0.3,
      changeFrequency: "yearly",
    },
    {
      path: "/politica-de-privacidad",
      priority: 0.3,
      changeFrequency: "yearly",
    },
  ],
} as const;

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || productionUrl;
}

export function isIndexableEnvironment() {
  return process.env.NEXT_PUBLIC_INDEXABLE === "true";
}

export function getAbsoluteUrl(path = "/") {
  return new URL(path, getSiteUrl()).toString();
}
