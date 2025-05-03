import type { Metadata } from "next"
import MultiStepForm from "@/components/multi-step-form/form-container"
import { Square } from "lucide-react"

export const metadata: Metadata = {
  title: "Demande de Devis | Carré Style - Haut-Rhin Alsace",
  description:
    "Demandez un devis personnalisé pour vos projets de carrelage ou béton imprimé dans le Haut-Rhin en Alsace. Estimation gratuite et sans engagement.",
  keywords: "devis, carrelage, béton imprimé, estimation, Haut-Rhin, Alsace",
}

export default function DevisPage() {
  return (
    <section className="py-12 md:py-20 bg-cs-dark">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h1 className="mb-4">Demande de Devis Personnalisé</h1>
            <div className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-cs-orange/40"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
            Obtenez une estimation précise pour votre projet en quelques étapes simples. Notre équipe vous contactera
            sous 24h pour finaliser votre devis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <MultiStepForm initialProjectType="beton-imprime" />
          </div>

          <div className="bg-cs-dark-lighter rounded-lg border border-gray-800 shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-xl font-bold text-white mb-1">Pourquoi choisir Carré Style ?</h3>
              <p className="text-gray-300">
                Une expertise reconnue dans le Haut-Rhin pour vos projets de carrelage et béton imprimé
              </p>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex">
                <div className="w-12 h-12 bg-cs-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Square className="h-5 w-5 text-cs-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Expertise et savoir-faire</h4>
                  <p className="text-gray-300">
                    Plus de 10 ans d'expérience dans la pose de carrelage et la réalisation de béton imprimé.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="w-12 h-12 bg-cs-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Square className="h-5 w-5 text-cs-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Devis détaillé et transparent</h4>
                  <p className="text-gray-300">
                    Nous vous fournissons un devis clair et précis, sans surprise ni coûts cachés.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="w-12 h-12 bg-cs-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Square className="h-5 w-5 text-cs-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Accompagnement personnalisé</h4>
                  <p className="text-gray-300">
                    Nous vous conseillons sur les matériaux, les finitions et les solutions les plus adaptées à votre
                    projet.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="w-12 h-12 bg-cs-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Square className="h-5 w-5 text-cs-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Réalisations durables</h4>
                  <p className="text-gray-300">
                    Des travaux soignés et des finitions impeccables pour un résultat qui traverse le temps.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-cs-dark border-t border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Vous préférez nous appeler ?</p>
                  <p className="text-lg font-bold text-white">06 61 02 48 14</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Ou nous écrire ?</p>
                  <p className="text-lg font-bold text-cs-orange">tschannnicolas@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
