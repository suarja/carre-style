import Image from "next/image";
import type { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import Accordion from "@/components/accordion";
import Gallery from "@/components/gallery";
import Timeline from "@/components/timeline";
import BeforeAfter from "@/components/before-after";
import ProjectShowcase from "@/components/project-showcase";
import DemanderDevisSection from "@/components/demander-devis-section";


export const metadata: Metadata = {
  title: "Béton Imprimé | Carré Style - Haut-Rhin Alsace",
  description:
    "Spécialiste du béton imprimé pour vos terrasses, allées et sols extérieurs dans le Haut-Rhin en Alsace. Motifs variés et finitions de qualité.",
  keywords:
    "béton imprimé, terrasse, allée, sol extérieur, motif décoratif, Haut-Rhin, Alsace",
};

export default function BetonImprime() {
  const timelineItems = [
    {
      step: 1,
      title: "Consultation et devis",
      description:
        "Nous discutons de votre projet, prenons les mesures et vous proposons un devis détaillé gratuit.",
    },
    {
      step: 2,
      title: "Préparation du terrain",
      description:
        "Nous préparons soigneusement le terrain pour assurer une base solide et durable.",
    },
    {
      step: 3,
      title: "Coulage du béton",
      description:
        "Le béton est coulé avec précision selon les spécifications du projet.",
    },
    {
      step: 4,
      title: "Impression et coloration",
      description:
        "Nous appliquons les motifs choisis et les colorants pour obtenir l'aspect désiré.",
    },
    {
      step: 5,
      title: "Finition et protection",
      description:
        "Application des produits de finition pour protéger et préserver votre béton imprimé.",
    },
  ];

  const accordionItems = [
    {
      title: "Quels sont les avantages du béton imprimé ?",
      content: (
        <div>
          <p>Le béton imprimé offre de nombreux avantages :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Durabilité exceptionnelle (jusqu'à 30 ans)</li>
            <li>Résistance aux intempéries et au gel</li>
            <li>Entretien minimal</li>
            <li>Grande variété de motifs et de couleurs</li>
            <li>Surface antidérapante pour plus de sécurité</li>
            <li>Résistance aux taches et aux UV</li>
            <li>Installation rapide par rapport à d'autres revêtements</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Quels motifs sont disponibles ?",
      content: (
        <div>
          <p>
            Nous proposons une large gamme de motifs pour votre béton imprimé :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pavés et pierres naturelles</li>
            <li>Ardoise et pierre de taille</li>
            <li>Bois et planches</li>
            <li>Motifs géométriques</li>
            <li>Designs personnalisés</li>
          </ul>
          <p className="mt-2">
            Nous pouvons également créer des motifs sur mesure selon vos
            préférences.
          </p>
        </div>
      ),
    },
    {
      title: "Quelle est la durée des travaux ?",
      content: (
        <p>
          La durée des travaux dépend de la taille et de la complexité du
          projet. En général, un projet standard de béton imprimé peut prendre
          entre 3 et 7 jours, incluant la préparation du terrain, le coulage du
          béton, l'impression et le temps de séchage. Nous vous fournirons un
          calendrier précis lors de l'établissement du devis.
        </p>
      ),
    },
    {
      title: "Comment entretenir le béton imprimé ?",
      content: (
        <div>
          <p>L'entretien du béton imprimé est simple :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nettoyage régulier à l'eau et au savon doux</li>
            <li>Rinçage au jet d'eau pour éliminer les saletés</li>
            <li>Application d'un produit de protection tous les 2-3 ans</li>
            <li>Éviter les produits chimiques agressifs</li>
          </ul>
          <p className="mt-2">
            Nous vous fournirons des conseils d'entretien détaillés à la fin des
            travaux.
          </p>
        </div>
      ),
    },
  ];

  const galleryImages = [
    {
      src: "/images/beton-imprime-terrasse.png",
      alt: "Terrasse en béton imprimé",
    },
    { src: "/images/beton-imprime-allee.png", alt: "Allée en béton imprimé" },
    {
      src: "/images/beton-imprime-motif.png",
      alt: "Motif décoratif en béton imprimé",
    },
    { src: "/images/beton-imprime-entree.png", alt: "Entrée en béton imprimé" },
    {
      src: "/images/beton-imprime-jardin.png",
      alt: "Béton imprimé dans un jardin",
    },
    {
      src: "/images/beton-imprime-texture.png",
      alt: "Texture de béton imprimé",
    },
    {
      src: "/images/beton-imprime-piscine.png",
      alt: "Contour de piscine en béton imprimé",
    },
    {
      src: "/images/beton-imprime-terrasse-grise.png",
      alt: "Terrasse en béton imprimé gris",
    },
    {
      src: "/images/beton-imprime-terrasse-ocre.png",
      alt: "Terrasse en béton imprimé ocre",
    },
  ];

  return (
    <>
      <HeroSection
        title={
          <>
            <span className="logo-carre">CARRÉ</span>{" "}
            <span className="logo-style">Style</span> — Béton Imprimé
          </>
        }
        subtitle="Transformez vos espaces extérieurs avec élégance et durabilité"
        imagePath="/images/beton-imprime-allee.png"
        buttonText="Demander un devis"
        buttonLink="/contact#devis"
      />

      <section className="section bg-cs-dark relative overflow-hidden">
        {/* Élément décoratif */}
        <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-r from-transparent to-cs-orange"></div>

        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block relative mb-6">
                <h2 className="mb-0">
                  Le béton imprimé, qu'est-ce que c'est ?
                </h2>
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-cs-orange"></div>
              </div>
              <p className="mb-4 text-gray-300">
                Le béton imprimé est une technique innovante qui permet de
                reproduire l'aspect de matériaux naturels comme la pierre,
                l'ardoise ou le bois, tout en offrant la durabilité et la
                résistance du béton.
              </p>
              <p className="mb-4 text-gray-300">
                Cette solution est idéale pour les terrasses, allées, plages de
                piscine et autres surfaces extérieures, combinant esthétique et
                fonctionnalité à un coût maîtrisé.
              </p>
              <p className="text-gray-300">
                Chez Carré Style, nous sommes spécialisés dans la création de
                surfaces en béton imprimé personnalisées qui s'intègrent
                parfaitement à votre environnement extérieur.
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden border border-gray-800 shadow-lg transform transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/images/beton-imprime-texture.png"
                alt="Texture de béton imprimé"
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
              Découvrez la transformation de vos espaces extérieurs grâce au
              béton imprimé.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BeforeAfter
              beforeImage="/images/beton-imprime-chantier.png"
              beforeAlt="Chantier de béton imprimé en préparation"
              afterImage="/images/beton-imprime-terrasse-ocre.png"
              afterAlt="Terrasse en béton imprimé finalisée"
              title="Transformation complète d'une terrasse"
              description="De la préparation du terrain à la finition, découvrez comment nous transformons un espace brut en une élégante terrasse en béton imprimé motif pierre naturelle."
            />

            <ProjectShowcase
              images={[
                {
                  src: "/images/beton-imprime-piscine.png",
                  alt: "Contour de piscine en béton imprimé",
                },
                {
                  src: "/images/beton-imprime-terrasse-grise.png",
                  alt: "Terrasse en béton imprimé gris",
                },
              ]}
              title="Nos réalisations récentes"
              description="Contours de piscine, terrasses et allées - nous adaptons le béton imprimé à tous vos espaces extérieurs avec différentes finitions et coloris."
            />
          </div>
        </div>
      </section>

      <section className="section bg-cs-dark-lighter">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <h2 className="mb-4">Nos réalisations en béton imprimé</h2>
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-cs-orange/40"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              Découvrez quelques exemples de nos projets récents qui illustrent
              notre savoir-faire.
            </p>
          </div>

          <Gallery images={galleryImages} />
        </div>
      </section>

      <section className="section bg-cs-dark relative overflow-hidden">
        {/* Élément décoratif */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-cs-orange to-transparent"></div>

        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <h2 className="mb-4">Les avantages du béton imprimé</h2>
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-cs-orange/40"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              Une solution durable et esthétique pour vos espaces extérieurs.
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2">Durabilité</h3>
              <p className="text-gray-300">
                Résistant aux intempéries, au gel et aux UV, le béton imprimé
                conserve son aspect esthétique pendant de nombreuses années.
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
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="mb-2">Personnalisation</h3>
              <p className="text-gray-300">
                Une multitude de motifs, textures et couleurs pour créer un
                espace unique qui reflète votre style personnel.
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2">Rapport qualité-prix</h3>
              <p className="text-gray-300">
                Une alternative économique aux matériaux naturels comme la
                pierre, tout en offrant un rendu esthétique similaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cs-dark-lighter">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <h2 className="mb-4">Déroulement d'un projet</h2>
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-cs-orange/40"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              Voici les étapes clés de la réalisation de votre projet en béton
              imprimé.
            </p>
          </div>

          <Timeline items={timelineItems} />
        </div>
      </section>

      <section className="section bg-cs-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <h2 className="mb-4">Questions fréquentes</h2>
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-cs-orange/40"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              Tout ce que vous devez savoir sur le béton imprimé.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </section>

    <DemanderDevisSection />
    </>
  );
}
