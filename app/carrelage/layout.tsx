import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carrelage | Carré Style - Haut-Rhin Alsace",
  description:
    "Spécialiste de la pose de carrelage pour salles de bain clé en main, cuisines et sols intérieurs dans le Haut-Rhin en Alsace. Finitions soignées et conseils personnalisés.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://carrestyle.fr/carrelage",
    siteName: "Carré Style",
    title: "Carrelage | Carré Style - Haut-Rhin Alsace",
    description:
      "Donnez du caractère à vos espaces intérieurs avec notre expertise en carrelage. Salles de bain, cuisines, séjours réalisés par un artisan qualifié en Alsace.",
    images: [
      {
        url: "/images/carrelage-og.png",
        width: 1200,
        height: 630,
        alt: "Carrelage posé par Carré Style en Alsace",
      },
    ],
  },
  alternates: {
    canonical: "https://carrestyle.fr/carrelage",
  },
  keywords: [
    "carrelage",
    "pose carrelage",
    "salle de bain",
    "cuisine",
    "sol intérieur",
    "Haut-Rhin",
    "Alsace",
    "douche à l'italienne",
    "carreleur professionnel",
    "rénovation carrelage",
  ],
  other: {
    "instagram:creator": "@carrestyle_carrelage",
    "instagram:site": "@carrestyle_carrelage",
    "og:image:alt": "Carrelage posé par Carré Style en Alsace",
    "og:locale": "fr_FR",
  },
};

export default function CarrelageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
