import type { MetadataRoute } from "next";
import { productCollections } from "@/data/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aravalimarbles.in";
  const routes = ["", "/about", "/products", "/services", "/projects", "/contact"];
  const productRoutes = productCollections.map((collection) => `/products/${collection.slug}`);

  return [...routes, ...productRoutes].map((route): MetadataRoute.Sitemap[number] => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/products" ? 0.9 : 0.8,
  }));
}
