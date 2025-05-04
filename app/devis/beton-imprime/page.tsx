import type { Metadata } from "next";
import MultiStepForm from "@/components/multi-step-form/form-container";
import { Square } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Devis Béton Imprimé | Carré Style - Haut-Rhin Alsace",
  description:
    "Demandez un devis personnalisé pour votre projet de béton imprimé dans le Haut-Rhin en Alsace. Terrasses, allées, entrées de garage et plus encore.",
  keywords:
    "devis béton imprimé, terrasse, allée, entrée garage, Haut-Rhin, Alsace",
};

export default function DevisBetonImprimePage() {
  return (
    <section className="py-12 md:py-20 bg-cs-dark">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h1 className="mb-4">
              <span className="logo-carre">CARRÉ</span>{" "}
              <span className="logo-style">Style</span> — Devis Béton Imprimé
            </h1>
            <div className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-cs-orange/40"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
            Transformez votre espace extérieur avec notre béton imprimé de
            qualité. Obtenez un devis personnalisé en quelques clics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <MultiStepForm initialProjectType="beton-imprime" />
          </div>

          <div className="space-y-8">
            <div className="bg-cs-dark-lighter rounded-lg border border-gray-800 shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-800">
                <h3 className="text-xl font-bold text-white mb-1">
                  Nos réalisations en béton imprimé
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-1">
                <div className="relative aspect-video">
                  <Image
                    src="/images/beton-imprime-terrasse.png"
                    alt="Terrasse en béton imprimé"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-video">
                  <Image
                    src="/images/beton-imprime-allee.png"
                    alt="Allée en béton imprimé"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-video">
                  <Image
                    src="/images/beton-imprime-terrasse-ocre.png"
                    alt="Terrasse en béton imprimé ocre"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-video">
                  <Image
                    src="/images/beton-imprime-piscine.png"
                    alt="Contour de piscine en béton imprimé"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>

              <div className="p-4 text-center">
                <Link
                  href="/beton-imprime"
                  className="text-cs-orange hover:underline flex items-center justify-center"
                >
                  Voir toutes nos réalisations
                  <Square className="ml-2" size={12} />
                </Link>
              </div>
            </div>

            <div className="bg-cs-dark-lighter rounded-lg border border-gray-800 shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-800">
                <h3 className="text-xl font-bold text-white mb-1">
                  Témoignages clients
                </h3>
              </div>

              <div className="p-6 space-y-4">
                <div className="bg-cs-dark p-4 rounded-lg border border-gray-700">
                  <p className="italic text-gray-300 mb-2">
                    "Travail impeccable pour notre terrasse en béton imprimé. Le
                    résultat est magnifique et durable."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-0.5 bg-cs-orange/40 mr-3"></div>
                    <div>
                      <p className="font-semibold text-white">Marie L.</p>
                      <p className="text-sm text-gray-400">Mulhouse</p>
                    </div>
                  </div>
                </div>

                <div className="bg-cs-dark p-4 rounded-lg border border-gray-700">
                  <p className="italic text-gray-300 mb-2">
                    "Équipe à l'écoute et travail soigné. Je recommande vivement
                    pour tous vos projets."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-0.5 bg-cs-orange/40 mr-3"></div>
                    <div>
                      <p className="font-semibold text-white">Sophie M.</p>
                      <p className="text-sm text-gray-400">Strasbourg</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
