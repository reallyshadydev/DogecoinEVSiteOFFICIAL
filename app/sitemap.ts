import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()

  // Add more static routes here
  const staticRoutes = ["", "/about", "/contact", "/node-map", "/resources", "/widgets"]

  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route === "" ? "/" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly", // Adjust as needed
    priority: route === "" ? 1 : 0.8, // Adjust as needed
  }))

  return [...sitemapEntries]
}
