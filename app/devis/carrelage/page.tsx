import type { Metadata } from "next";
import MultiStepForm from "@/components/multi-step-form/form-container";
import { Square } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Devis Carrelage | Carré Style - Haut-Rhin Alsace",
  description:
    "Demandez un devis personnalisé pour votre projet de carrelage dans le Haut-Rhin en Alsace. Salles de bain, cuisines, séjours et plus encore.",
  keywords:
    "devis carrelage, salle de bain, cuisine, séjour, Haut-Rhin, Alsace",
};

export default function DevisCarrelagePage() {
  return (
    <section className="py-12 md:py-20 bg-cs-dark">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h1 className="mb-4">
              <span className="logo-carre">CARRÉ</span>{" "}
              <span className="logo-style">Style</span> — Devis Carrelage
            </h1>
            <div className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-cs-orange/40"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
            Donnez du caractère à vos espaces intérieurs avec notre expertise en
            carrelage. Obtenez un devis personnalisé en quelques clics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <MultiStepForm initialProjectType="carrelage" />
          </div>

          <div className="space-y-8">
            <div className="bg-cs-dark-lighter rounded-lg border border-gray-800 shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-800">
                <h3 className="text-xl font-bold text-white mb-1">
                  Nos réalisations en carrelage
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-1">
                <div className="relative aspect-video">
                  <Image
                    src="/images/carrelage-sdb-moderne.png"
                    alt="Salle de bain moderne"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-video">
                  <Image
                    src="/images/carrelage-douche-italienne.png"
                    alt="Douche à l'italienne"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-video">
                  <Image
                    src="/images/carrelage-escalier-marbre.png"
                    alt="Escalier en carrelage effet marbre"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-video">
                  <Image
                    src="/images/carrelage-wc-design.png"
                    alt="WC design avec carrelage gris"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>

              <div className="p-4 text-center">
                <Link
                  href="/carrelage"
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
                    "Très satisfait de la rénovation de notre salle de bain.
                    Professionnalisme et qualité au rendez-vous."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-0.5 bg-cs-orange/40 mr-3"></div>
                    <div>
                      <p className="font-semibold text-white">Thomas D.</p>
                      <p className="text-sm text-gray-400">Colmar</p>
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
