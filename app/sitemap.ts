import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default async function sitemap() {
  const baseUrl = "https://carrestyle.fr";

  // Fonction pour obtenir la date de dernière modification d'un fichier
  const getLastModified = (filePath: string): Date => {
    try {
      const stats = fs.statSync(filePath);
      return stats.mtime;
    } catch (error) {
      return new Date();
    }
  };

  // Chemin de base pour les fichiers de pages
  const pagesDir = path.join(process.cwd(), "app");

  const staticPages = [
    {
      url: baseUrl,
      lastModified: getLastModified(path.join(pagesDir, "page.tsx")),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/beton-imprime`,
      lastModified: getLastModified(
        path.join(pagesDir, "beton-imprime", "page.tsx")
      ),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/carrelage`,
      lastModified: getLastModified(
        path.join(pagesDir, "carrelage", "page.tsx")
      ),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: getLastModified(path.join(pagesDir, "contact", "page.tsx")),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/devis`,
      lastModified: getLastModified(path.join(pagesDir, "devis", "page.tsx")),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/devis/beton-imprime`,
      lastModified: getLastModified(
        path.join(pagesDir, "devis", "beton-imprime", "page.tsx")
      ),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/devis/carrelage`,
      lastModified: getLastModified(
        path.join(pagesDir, "devis", "carrelage", "page.tsx")
      ),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: getLastModified(
        path.join(pagesDir, "mentions-legales", "page.tsx")
      ),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  return [
    {
      url: baseUrl,
      lastModified: getLastModified(path.join(pagesDir, "page.tsx")),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...staticPages,
  ]

}