import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://nelvaglobal.com/sitemap.xml",
    host: "https://nelvaglobal.com",
  };
}
