import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import Accordion from "@/components/accordion"
import Gallery from "@/components/gallery"
import Timeline from "@/components/timeline"
import BeforeAfter from "@/components/before-after"
import ProjectShowcase from "@/components/project-showcase"
import { Square } from "lucide-react"

export const metadata: Metadata = {
  title: "Carrelage | Carré Style - Haut-Rhin Alsace",
  description:
    "Spécialiste de la pose de carrelage pour salles de bain, cuisines et sols intérieurs dans le Haut-Rhin en Alsace. Finitions soignées et conseils personnalisés.",
  keywords: "carrelage, pose carrelage, salle de bain, cuisine, sol intérieur, Haut-Rhin, Alsace",
}

export default function Carrelage() {
  const timelineItems = [
    {
      step: 1,
      title: "Consultation et devis",
      description: "Nous discutons de votre projet, prenons les mesures et vous proposons un devis détaillé gratuit.",
    },
    {
      step: 2,
      title: "Choix des matériaux",
      description:
        "Nous vous aidons à sélectionner le carrelage idéal pour votre projet en fonction de vos goûts et besoins.",
    },
    {
      step: 3,
      title: "Préparation du support",
      description: "Nous préparons soigneusement la surface pour assurer une pose parfaite et durable.",
    },
    {
      step: 4,
      title: "Pose du carrelage",
      description: "Notre équipe pose votre carrelage avec précision et attention aux détails.",
    },
    {
      step: 5,
      title: "Finition et nettoyage",
      description: "Nous réalisons les joints et le nettoyage final pour un résultat impeccable.",
    },
  ]

  const accordionItems = [
    {
      title: "Quels types de carrelage proposez-vous ?",
      content: (
        <div>
          <p>Nous proposons une large gamme de carrelages pour tous vos projets :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Grès cérame</li>
            <li>Faïence</li>
            <li>Mosaïque</li>
            <li>Carreaux de ciment</li>
            <li>Pierre naturelle</li>
            <li>Grands formats</li>
            <li>Carrelage imitation bois</li>
          </ul>
          <p className="mt-2">Nous pouvons vous conseiller sur le type de carrelage le plus adapté à votre projet.</p>
        </div>
      ),
    },
    {
      title: "Quelles pièces pouvez-vous carreler ?",
      content: (
        <div>
          <p>Nous intervenons dans toutes les pièces de votre habitation :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Salles de bain et douches à l'italienne</li>
            <li>Cuisines et crédences</li>
            <li>Séjours et pièces à vivre</li>
            <li>Chambres</li>
            <li>Entrées et couloirs</li>
            <li>Terrasses (carrelage extérieur)</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Quelle est la durée des travaux ?",
      content: (
        <p>
          La durée des travaux dépend de la surface à carreler et de la complexité du projet. En général, une salle de
          bain standard peut être carrelée en 3 à 5 jours, tandis qu'une pièce à vivre peut prendre 5 à 7 jours. Nous
          vous fournirons un calendrier précis lors de l'établissement du devis.
        </p>
      ),
    },
    {
      title: "Comment entretenir mon carrelage ?",
      content: (
        <div>
          <p>L'entretien du carrelage est simple :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nettoyage régulier à l'eau et au savon doux</li>
            <li>Éviter les produits acides ou abrasifs qui peuvent endommager les joints</li>
            <li>Pour les carrelages poreux, application d'un produit de protection tous les 1-2 ans</li>
            <li>Nettoyage des joints avec une brosse souple et un produit spécifique si nécessaire</li>
          </ul>
          <p className="mt-2">Nous vous fournirons des conseils d'entretien adaptés à votre type de carrelage.</p>
        </div>
      ),
    },
  ]

  const galleryImages = [
    { src: "/images/carrelage-salle-de-bain.png", alt: "Carrelage de salle de bain" },
    { src: "/images/carrelage-cuisine.png", alt: "Carrelage de cuisine" },
    { src: "/images/carrelage-sdb-moderne.png", alt: "Salle de bain moderne avec douche à l'italienne" },
    { src: "/images/carrelage-douche-italienne.png", alt: "Douche à l'italienne avec carrelage texturé" },
    { src: "/images/carrelage-douche-grise.png", alt: "Douche avec carrelage gris et niches" },
    { src: "/images/carrelage-escalier-marbre.png", alt: "Escalier avec carrelage effet marbre" },
    { src: "/images/carrelage-mur-xxl.png", alt: "Mur avec carrelage grand format" },
    { src: "/images/carrelage-wc-design.png", alt: "WC suspendus avec carrelage gris foncé" },
  ]

  return (
    <>
      <HeroSection
        title={
          <>
            <span className="logo-carre">CARRÉ</span> <span className="logo-style">Style</span> — Carrelage
          </>
        }
        subtitle="Des solutions élégantes et durables pour vos espaces intérieurs"
        imagePath="/images/carrelage-sdb-moderne.png"
        buttonText="Demander un devis"
        buttonLink="/contact#devis"
      />

      <section className="section bg-cs-dark relative overflow-hidden">
        {/* Élément décoratif */}
        <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-r from-transparent to-cs-orange"></div>

        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block relative mb-6">
                <h2 className="mb-0">Notre expertise en carrelage</h2>
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-cs-orange"></div>
              </div>
              <p className="mb-4 text-gray-300">
                Chez Carré Style, nous sommes spécialisés dans la pose de carrelage pour tous vos espaces intérieurs.
                Que ce soit pour votre salle de bain, votre cuisine ou vos pièces à vivre, nous vous garantissons un
                travail soigné et des finitions impeccables.
              </p>
              <p className="mb-4 text-gray-300">
                Notre équipe d'artisans qualifiés maîtrise toutes les techniques de pose, des plus classiques aux plus
                complexes, pour donner vie à vos projets avec précision et esthétisme.
              </p>
              <p className="text-gray-300">
                Nous vous accompagnons dans le choix des matériaux et des designs qui correspondent à vos goûts et à vos
                besoins, pour un résultat qui vous ressemble.
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden order-1 md:order-2 border border-gray-800 shadow-lg transform transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/images/carrelage-salle-de-bain.png"
                alt="Carrelage de salle de bain"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nouvelle section Avant/Après */}
      <section className="section bg-cs-dark-lighter relative overflow-hidden">
        {/* Motif géométrique subtil */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="grid grid-cols-10 h-full">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="border-r border-t border-white/10"></div>
            ))}
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <h2 className="mb-4">Du projet à la réalisation</h2>
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-cs-orange/40"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              Découvrez la transformation de vos espaces intérieurs grâce à notre expertise en carrelage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BeforeAfter
              beforeImage="/images/carrelage-sdb-avant.png"
              beforeAlt="Salle de bain en cours de préparation"
              afterImage="/images/carrelage-sdb-apres.png"
              afterAlt="Salle de bain terminée avec douche à l'italienne"
              title="Rénovation complète de salle de bain"
              description="De la préparation des murs à la pose finale du carrelage, nous transformons votre salle de bain en un espace moderne et fonctionnel."
            />

            <BeforeAfter
              beforeImage="/images/carrelage-escalier-avant.png"
              beforeAlt="Escalier en béton brut"
              afterImage="/images/carrelage-escalier-marbre.png"
              afterAlt="Escalier avec carrelage effet marbre"
              title="Habillage d'escalier en carrelage"
              description="Un escalier en béton brut transformé en élément décoratif grâce à un carrelage effet marbre posé avec précision."
            />
          </div>

          <div className="mt-12">
            <ProjectShowcase
              images={[
                { src: "/images/carrelage-mur-xxl.png", alt: "Mur avec carrelage grand format" },
                { src: "/images/carrelage-wc-design.png", alt: "WC suspendus avec carrelage gris foncé" },
              ]}
              title="Nos réalisations spéciales"
              description="Des projets sur-mesure qui démontrent notre savoir-faire technique et notre capacité à relever tous les défis, des grands formats aux espaces réduits."
            />
          </div>
        </div>
      </section>

      <section className="section bg-cs-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <h2 className="mb-4">Nos réalisations en carrelage</h2>
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-cs-orange/40"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              Découvrez quelques exemples de nos projets récents qui illustrent notre savoir-faire.
            </p>
          </div>

          <Gallery images={galleryImages} />
        </div>
      </section>

      <section className="section bg-cs-dark-lighter relative overflow-hidden">
        {/* Élément décoratif */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-cs-orange to-transparent"></div>

        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <h2 className="mb-4">Nos services de carrelage</h2>
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-cs-orange/40"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              Des solutions complètes pour tous vos projets de carrelage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6 transform transition-all duration-300 hover:border-cs-orange/50">
              <div className="w-12 h-12 bg-cs-orange rounded-full flex items-center justify-center mb-4 shadow-lg shadow-cs-orange/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="mb-2">Salles de bain</h3>
              <p className="text-gray-300">
                Création de salles de bain élégantes et fonctionnelles, avec une attention particulière aux zones
                humides et aux douches à l'italienne.
              </p>
            </div>
            <div className="card p-6 transform transition-all duration-300 hover:border-cs-orange/50 md:translate-y-4">
              <div className="w-12 h-12 bg-cs-orange rounded-full flex items-center justify-center mb-4 shadow-lg shadow-cs-orange/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="mb-2">Cuisines</h3>
              <p className="text-gray-300">
                Pose de carrelage au sol et en crédence pour des cuisines pratiques et esthétiques, résistantes aux
                taches et à l'humidité.
              </p>
            </div>
            <div className="card p-6 transform transition-all duration-300 hover:border-cs-orange/50">
              <div className="w-12 h-12 bg-cs-orange rounded-full flex items-center justify-center mb-4 shadow-lg shadow-cs-orange/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="mb-2">Pièces à vivre</h3>
              <p className="text-gray-300">
                Carrelage pour séjours, entrées et couloirs, alliant esthétique et résistance pour un usage quotidien
                intensif.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cs-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <h2 className="mb-4">Déroulement d'un projet</h2>
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-cs-orange/40"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              Voici les étapes clés de la réalisation de votre projet de carrelage.
            </p>
          </div>

          <Timeline items={timelineItems} />
        </div>
      </section>

      <section className="section bg-cs-dark-lighter">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <h2 className="mb-4">Questions fréquentes</h2>
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-cs-orange/40"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              Tout ce que vous devez savoir sur nos services de carrelage.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cs-orange to-cs-orange-dark"></div>

        {/* Motif géométrique */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="border-r border-t border-white"></div>
            ))}
          </div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-1 bg-white/30"></div>
            <Square className="text-white mx-4" size={12} />
            <div className="w-12 h-1 bg-white/30"></div>
          </div>

          <h2 className="text-white mb-6 text-3xl md:text-4xl">Prêt à transformer votre intérieur ?</h2>

          <div className="flex items-center justify-center mt-6">
            <div className="w-12 h-1 bg-white/30"></div>
            <Square className="text-white mx-4" size={12} />
            <div className="w-12 h-1 bg-white/30"></div>
          </div>

          <div className="mt-8">
            <Link
              href="/contact#devis"
              className="btn bg-white text-cs-orange hover:bg-gray-100 hover:shadow-lg transition-all duration-300 shadow-md"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
