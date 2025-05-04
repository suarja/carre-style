import Link from "next/link";
import HeroSection from "@/components/hero-section";
import ServiceCard from "@/components/service-card";
import Testimonial from "@/components/testimonial";
import { Square } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Éléments décoratifs en arrière-plan */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] right-[5%] w-32 h-32 border border-cs-orange/20 rotate-12"></div>
        <div className="absolute top-[25%] right-[10%] w-16 h-16 border border-cs-orange/10 rotate-45"></div>
        <div className="absolute bottom-[30%] left-[5%] w-48 h-48 border border-cs-orange/10 -rotate-12"></div>
        <div className="absolute bottom-[20%] left-[10%] w-24 h-24 border border-cs-orange/20 rotate-45"></div>
      </div>

      <HeroSection
        title={
          <>
            <span className="logo-carre">CARRÉ</span>{" "}
            <span className="logo-style">Style</span> — Le style de toutes vos
            envies
          </>
        }
        subtitle="Spécialiste du carrelage et du béton imprimé dans le Haut-Rhin en Alsace"
        imagePath="/images/beton-imprime-allee.png"
        buttonText="Demander un devis gratuit"
        buttonLink="/contact#devis"
      />

      <section className="section bg-cs-dark relative overflow-hidden">
        {/* Élément décoratif */}
        <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-r from-transparent to-cs-orange"></div>

        <div className="container-custom">
          <div className="text-center mb-12 relative">
            <div className="inline-block relative">
              <h2 className="mb-4">Bienvenue chez Carré Style</h2>
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-cs-orange/40"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              Artisan spécialisé dans la pose de carrelage et la réalisation de
              béton imprimé, nous mettons notre expertise à votre service pour
              tous vos projets d'intérieur et d'extérieur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="transform hover:-translate-y-1 transition-transform duration-300">
              <ServiceCard
                title="Béton Imprimé"
                description="Transformez vos espaces extérieurs avec notre béton imprimé durable et esthétique. Idéal pour les terrasses, allées et sols extérieurs."
                imagePath="/images/beton-imprime-piscine.png"
                link="/beton-imprime"
              />
            </div>
            <div className="transform hover:-translate-y-1 transition-transform duration-300">
              <ServiceCard
                title="Carrelage"
                description="Donnez du caractère à vos espaces intérieurs avec notre service de pose de carrelage professionnel pour salles de bain, cuisines et sols."
                imagePath="/images/carrelage-sdb-moderne.png"
                link="/carrelage"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cs-dark-lighter relative">
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
              <h2 className="mb-4">Pourquoi nous choisir ?</h2>
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-cs-orange/40"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              Notre engagement envers la qualité et la satisfaction client fait
              de nous le partenaire idéal pour vos projets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-cs-dark rounded-lg border border-gray-800 transform transition-all duration-300 hover:border-cs-orange/50">
              <div className="w-16 h-16 bg-cs-orange rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cs-orange/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mb-2">Expertise</h3>
              <p className="text-gray-300">
                Plus de 10 ans d'expérience dans le domaine du carrelage et du
                béton imprimé.
              </p>
            </div>
            <div className="text-center p-6 bg-cs-dark rounded-lg border border-gray-800 transform transition-all duration-300 hover:border-cs-orange/50 md:translate-y-4">
              <div className="w-16 h-16 bg-cs-orange rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cs-orange/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
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
              <h3 className="mb-2">Ponctualité</h3>
              <p className="text-gray-300">
                Respect des délais et des engagements pour une tranquillité
                d'esprit totale.
              </p>
            </div>
            <div className="text-center p-6 bg-cs-dark rounded-lg border border-gray-800 transform transition-all duration-300 hover:border-cs-orange/50">
              <div className="w-16 h-16 bg-cs-orange rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cs-orange/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-2">Qualité</h3>
              <p className="text-gray-300">
                Matériaux premium et finitions soignées pour des résultats qui
                durent dans le temps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cs-dark relative overflow-hidden">
        {/* Élément décoratif */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-cs-orange to-transparent"></div>

        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <h2 className="mb-4">Ce que disent nos clients</h2>
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-cs-orange/40"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              La satisfaction de nos clients est notre priorité absolue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="transform transition-all duration-300 hover:-translate-y-1">
              <Testimonial
                quote="Travail impeccable pour notre terrasse en béton imprimé. Le résultat est magnifique et durable."
                author="Marie L."
                location="Mulhouse"
              />
            </div>
            <div className="transform transition-all duration-300 hover:-translate-y-1 md:translate-y-4">
              <Testimonial
                quote="Très satisfait de la rénovation de notre salle de bain. Professionnalisme et qualité au rendez-vous."
                author="Thomas D."
                location="Colmar"
              />
            </div>
            <div className="transform transition-all duration-300 hover:-translate-y-1">
              <Testimonial
                quote="Équipe à l'écoute et travail soigné. Je recommande vivement pour tous vos projets."
                author="Sophie M."
                location="Strasbourg"
              />
            </div>
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

          <h2 className="text-white mb-6 text-3xl md:text-4xl">
            Prêt à concrétiser votre projet ?
          </h2>

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
  );
}
