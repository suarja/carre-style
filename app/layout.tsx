import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat, Dancing_Script } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing-script" })

export const metadata: Metadata = {
  title: "Carré Style | Carrelage & Béton Imprimé à Haut-Rhin Alsace",
  description:
    "Entreprise spécialisée en pose de carrelage et béton imprimé pour vos projets d'intérieur et d'extérieur dans le Haut-Rhin en Alsace. Devis gratuit.",
  keywords:
    "carrelage, béton imprimé, Haut-Rhin, Alsace, terrasse, salle de bain, cuisine, sol extérieur, motifs décoratifs",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${montserrat.variable} ${dancingScript.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
