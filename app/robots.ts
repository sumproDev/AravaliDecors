import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://www.aravalimarbles.co.in/sitemap.xml",
    host: "https://www.aravalimarbles.co.in",
  };
}
