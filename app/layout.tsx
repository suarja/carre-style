import type React from "react";
import type { Metadata, Viewport } from "next";
import {
  Inter,
  Montserrat,
  Dancing_Script,
  Chakra_Petch,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});
const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-chakra-petch",
});

export const metadata: Metadata = {
  title: "Carré Style | Carrelage & Béton Imprimé à Haut-Rhin Alsace",
  description:
    "Entreprise spécialisée en pose de carrelage et béton imprimé pour vos projets d'intérieur et d'extérieur dans le Haut-Rhin en Alsace. Devis gratuit et sans engagement.",
  metadataBase: new URL("https://carrestyle.fr"),
  authors: [{ name: "Carré Style" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://carrestyle.fr/",
    siteName: "Carré Style",
    title: "Carré Style | Carrelage & Béton Imprimé à Haut-Rhin Alsace",
    description:
      "Transformez vos espaces intérieurs et extérieurs avec notre expertise en carrelage et béton imprimé. Artisan qualifié dans le Haut-Rhin en Alsace.",
    images: [
      {
        url: "/images/carre-style-og.png",
        width: 1200,
        height: 630,
        alt: "Carré Style - Spécialiste du carrelage et béton imprimé en Alsace",
      },
    ],
  },
  alternates: {
    canonical: "https://carrestyle.fr",
  },
  keywords: [
    "carrelage",
    "béton imprimé",
    "Haut-Rhin",
    "Alsace",
    "pose carrelage",
    "terrasse béton",
    "rénovation salle de bain",
    "artisan carreleur",
    "devis gratuit",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  category: "Construction & Rénovation",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "facebook-domain-verification": "votre-code-de-verification",
    "instagram:creator": "@carrestyle_carrelage",
    "instagram:site": "@carrestyle_carrelage",
    "og:image:alt":
      "Carré Style - Spécialiste du carrelage et béton imprimé en Alsace",
    "og:locale": "fr_FR",
    "format-detection": "telephone=no",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1E1E1E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${montserrat.variable} ${dancingScript.variable} ${chakraPetch.variable} font-sans`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
