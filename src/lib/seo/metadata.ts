import type { Metadata } from "next";
import { getAbsoluteUrl, getSiteUrl, seoConfig } from "@/config/seo";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: getAbsoluteUrl(path),
      siteName: "Lex Garantía",
      locale: "es_MX",
      type: "website",
      images: [
        {
          url: getAbsoluteUrl(seoConfig.ogImage),
          width: 1200,
          height: 630,
          alt: "Lex Garantía pólizas jurídicas de arrendamiento",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [getAbsoluteUrl(seoConfig.ogImage)],
    },
    metadataBase: new URL(getSiteUrl()),
  };
}
