import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { StructuredData } from "@/components/seo/structured-data";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { getAbsoluteUrl, getSiteUrl, isIndexableEnvironment, seoConfig } from "@/config/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: seoConfig.defaultTitle,
    template: seoConfig.titleTemplate,
  },
  description: seoConfig.defaultDescription,
  applicationName: "Lex Garantía",
  authors: [{ name: "Lex Garantía" }],
  creator: "Lex Garantía",
  publisher: "Lex Garantía",
  keywords: [...seoConfig.keywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    url: getSiteUrl(),
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
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    images: [getAbsoluteUrl(seoConfig.ogImage)],
  },
  robots: {
    index: isIndexableEnvironment(),
    follow: isIndexableEnvironment(),
    googleBot: {
      index: isIndexableEnvironment(),
      follow: isIndexableEnvironment(),
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "legal services",
  icons: {
    icon: "/favicon.ico",
    apple: "/brand/lex-garantia-logo-positive-transparent.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <StructuredData />
        <Navbar />
        <main className="flex-1">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
