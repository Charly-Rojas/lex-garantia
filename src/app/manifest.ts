import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lex Garantía",
    short_name: "Lex Garantía",
    description:
      "Pólizas jurídicas para contratos de arrendamiento de inmuebles.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1d3242",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16 32x32 48x48",
        type: "image/x-icon",
      },
      {
        src: "/brand/lex-garantia-logo-positive-transparent.png",
        sizes: "900x900",
        type: "image/png",
      },
    ],
  };
}
