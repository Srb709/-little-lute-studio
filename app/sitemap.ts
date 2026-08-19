import type { MetadataRoute } from "next";

const siteUrl = "https://www.littlelutestudio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/embroidery",
    "/spray-tanning",
    "/about",
    "/contact",
    "/privacy",
    "/order-policy",
  ];

  return routes.map<MetadataRoute.Sitemap[number]>((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
