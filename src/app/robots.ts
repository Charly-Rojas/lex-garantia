import type { MetadataRoute } from "next";
import { getAbsoluteUrl, getSiteUrl, isIndexableEnvironment } from "@/config/seo";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexableEnvironment()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      sitemap: getAbsoluteUrl("/sitemap.xml"),
      host: getSiteUrl(),
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: getAbsoluteUrl("/sitemap.xml"),
    host: getSiteUrl(),
  };
}
