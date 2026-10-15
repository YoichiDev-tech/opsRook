import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === "production";
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `https://${site.domain}`);

  return {
    rules: {
      userAgent: "*",
      allow: isProduction ? "/" : [],
      disallow: isProduction ? ["/api/"] : ["/"],
    },
    sitemap: new URL("/sitemap.xml", baseUrl).toString(),
  };
}
