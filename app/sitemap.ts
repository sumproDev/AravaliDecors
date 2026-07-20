import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aravalimarbles.in";
  const routes = ["", "/about", "/products", "/applications", "/projects", "/contact"];

  return routes.map((route): MetadataRoute.Sitemap[number] => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/products" ? 0.9 : 0.8,
  }));
}
