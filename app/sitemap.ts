import type { MetadataRoute } from "next";
import { productCollections } from "@/data/site-data";
import { allSeoRoutes, blogPosts, seoLandingPages } from "@/data/seo-content";

const baseUrl = "https://www.aravalimarbles.co.in";
const lastModified = new Date("2026-07-30");

const routeImageEntries: Array<[string, string[]]> = [
  ["", ["/og.png", "/images/hero/stone-gallery-hero-v2.png"]],
  ["/about", ["/images/about/showroom.jpg", "/images/hero/stone-gallery-hero-v2.png"]],
  ["/products", ["/images/products/marble-tile-collection-v2.png"]],
  ["/services", ["/images/products/premium-living.jpg", "/images/services/modular-kitchen.jpg"]],
  ["/projects", ["/images/hero/stone-gallery-hero-v2.png", "/images/products/granite-wall-floor-v2.png"]],
  ["/contact", ["/images/about/showroom.jpg"]],
  ["/blog", ["/images/hero/stone-gallery-hero-v2.png"]],
  ...productCollections.map((collection): [string, string[]] => [
    `/products/${collection.slug}`,
    [collection.image, ...collection.items.map((item) => item.image)],
  ]),
  ...seoLandingPages.map((page): [string, string[]] => [`/${page.slug}`, [page.image]]),
  ...blogPosts.map((post): [string, string[]] => [`/blog/${post.slug}`, [post.image]]),
];

const routeImages = new Map<string, string[]>(routeImageEntries);

function absoluteImages(route: string) {
  return [...new Set(routeImages.get(route) || [])].map((image) => `${baseUrl}${image}`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/products", "/services", "/projects", "/contact"];
  const productRoutes = productCollections.map((collection) => `/products/${collection.slug}`);

  return [...routes, ...productRoutes, ...allSeoRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/products" || route === "/blog" ? 0.9 : route.startsWith("/blog/") ? 0.75 : 0.8,
    images: absoluteImages(route),
  })) as MetadataRoute.Sitemap;
}
