import type { MetadataRoute } from "next";
import { allSeoRoutes, blogPosts, seoLandingPages } from "@/data/seo-content";
import { getPublishedCollections, getPublishedProjects } from "@/lib/cms/public";

const baseUrl = "https://www.aravalimarbles.co.in";
const lastModified = new Date("2026-07-30");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [collections, projects] = await Promise.all([getPublishedCollections(), getPublishedProjects()]);
  const routes = ["", "/about", "/products", "/services", "/projects", "/contact"];
  const productRoutes = collections
    .filter((collection) => collection.slug !== "interior-designing")
    .map((collection) => `/products/${collection.slug}`);

  const routeImageEntries: Array<[string, string[]]> = [
    ["", ["/og.png", "/images/hero/stone-gallery-hero-v2.png", ...collections.map((collection) => collection.image)]],
    ["/about", ["/images/about/showroom.jpg", "/images/hero/stone-gallery-hero-v2.png"]],
    ["/products", collections.map((collection) => collection.image)],
    ["/services", collections.find((collection) => collection.slug === "interior-designing")?.products.map((product) => product.image) || ["/images/products/premium-living.jpg"]],
    ["/projects", ["/images/hero/stone-gallery-hero-v2.png", ...projects.map((project) => project.image)]],
    ["/contact", ["/images/about/showroom.jpg"]],
    ["/blog", ["/images/hero/stone-gallery-hero-v2.png"]],
    ...collections
      .filter((collection) => collection.slug !== "interior-designing")
      .map((collection): [string, string[]] => [
        `/products/${collection.slug}`,
        [collection.image, ...collection.products.map((item) => item.image)],
      ]),
    ...seoLandingPages.map((page): [string, string[]] => [`/${page.slug}`, [page.image]]),
    ...blogPosts.map((post): [string, string[]] => [`/blog/${post.slug}`, [post.image]]),
  ];
  const routeImages = new Map<string, string[]>(routeImageEntries);

  function absoluteImages(route: string) {
    return [...new Set(routeImages.get(route) || [])].map((image) => `${baseUrl}${image}`);
  }

  return [...routes, ...productRoutes, ...allSeoRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/products" || route === "/blog" ? 0.9 : route.startsWith("/blog/") ? 0.75 : 0.8,
    images: absoluteImages(route),
  })) as MetadataRoute.Sitemap;
}
