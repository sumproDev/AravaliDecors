import type { MetadataRoute } from "next";
import { productCollections } from "@/data/site-data";
import { allSeoRoutes } from "@/data/seo-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aravalimarbles.in";
  const routes = ["", "/about", "/products", "/services", "/projects", "/contact"];
  const productRoutes = productCollections.map((collection) => `/products/${collection.slug}`);

  return [...routes, ...productRoutes, ...allSeoRoutes].map((route): MetadataRoute.Sitemap[number] => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/products" || route === "/blog" ? 0.9 : route.startsWith("/blog/") ? 0.75 : 0.8,
  }));
}
