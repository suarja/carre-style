import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Béton Imprimé | Carré Style - Haut-Rhin Alsace",
  description:
    "Spécialiste du béton imprimé pour vos terrasses, allées et sols extérieurs dans le Haut-Rhin en Alsace. Motifs variés, finitions de qualité et devis gratuit.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://carrestyle.fr/beton-imprime",
    siteName: "Carré Style",
    title: "Béton Imprimé | Carré Style - Haut-Rhin Alsace",
    description:
      "Transformez vos espaces extérieurs avec notre béton imprimé durable et esthétique. Terrasses, allées, contours de piscine réalisés par un artisan qualifié en Alsace.",
    images: [
      {
        url: "/images/beton-imprime-og.png",
        width: 1200,
        height: 630,
        alt: "Béton imprimé réalisé par Carré Style en Alsace",
      },
    ],
  },
  alternates: {
    canonical: "https://carrestyle.fr/beton-imprime",
  },
  keywords: [
    "béton imprimé",
    "terrasse béton",
    "allée béton",
    "sol extérieur",
    "motif décoratif",
    "Haut-Rhin",
    "Alsace",
    "contour piscine",
    "béton coloré",
    "béton estampé",
  ],
  other: {
    "instagram:creator": "@carrestyle_carrelage",
    "instagram:site": "@carrestyle_carrelage",
    "og:image:alt": "Béton imprimé réalisé par Carré Style en Alsace",
    "og:locale": "fr_FR",
  },
};

export default function BetonImprimeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
