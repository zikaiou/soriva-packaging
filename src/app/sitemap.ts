import type { MetadataRoute } from "next";

const BASE_URL = "https://sorivapackaging.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const productPages = [
    "magnetic-rigid-boxes",
    "foldable-magnetic-rigid-boxes",
    "drawer-boxes",
    "two-piece-rigid-boxes",
    "paper-bags",
  ] as const;
  const productEntries: MetadataRoute.Sitemap = productPages.map((slug) => ({
    url: `${BASE_URL}/products/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/products/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/industries/cosmetic-packaging/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...productEntries,
    {
      url: `${BASE_URL}/contact/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
