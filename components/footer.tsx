import Link from "next/link";
import { Instagram, Mail, Phone, MapPin, Square } from "lucide-react";
import { INFO } from "@/lib/constants/info";

export default function Footer() {
  return (
    <footer className="bg-cs-dark-darker text-white relative overflow-hidden">
      {/* Motif géométrique subtil */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="border-r border-t border-white/10"></div>
          ))}
        </div>
      </div>

      {/* Accent décoratif */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cs-orange via-cs-orange-light to-transparent"></div>

      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-baseline mb-6 group">
              <span className="logo-carre text-xl">CARRÉ</span>
              <span className="logo-style text-2xl ml-1">Style</span>
            </div>
            <p className="text-gray-300 mb-6">
              Le style de toutes vos envies. Spécialiste du carrelage et du
              béton imprimé dans le Haut-Rhin en Alsace.
            </p>
            <div className="flex items-center">
              <div className="w-12 h-0.5 bg-cs-orange/40 mr-3"></div>
              <Square className="text-cs-orange" size={8} />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Nos Services
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-cs-orange/40"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/beton-imprime"
                  className="text-gray-300 hover:text-cs-orange flex items-center group"
                >
                  <div className="w-0 h-0.5 bg-cs-orange mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></div>
                  Béton Imprimé
                </Link>
              </li>
              <li>
                <Link
                  href="/carrelage"
                  className="text-gray-300 hover:text-cs-orange flex items-center group"
                >
                  <div className="w-0 h-0.5 bg-cs-orange mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></div>
                  Carrelage
                </Link>
              </li>
              <li>
                <Link
                  href="/contact#devis"
                  className="text-gray-300 hover:text-cs-orange flex items-center group"
                >
                  <div className="w-0 h-0.5 bg-cs-orange mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></div>
                  Demande de Devis
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Contact
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-cs-orange/40"></div>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cs-dark-lighter flex items-center justify-center border border-gray-800">
                  <Phone size={14} className="text-cs-orange" />
                </div>
                <span className="text-gray-300">
                  {INFO.PHONE}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cs-dark-lighter flex items-center justify-center border border-gray-800">
                  <Mail size={14} className="text-cs-orange" />
                </div>
                <a
                  href={`mailto:${INFO.EMAIL}`}
                  className="text-gray-300 hover:text-cs-orange"
                >
                  {INFO.EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cs-dark-lighter flex items-center justify-center border border-gray-800">
                  <MapPin size={14} className="text-cs-orange" />
                </div>
                <span className="text-gray-300">
                  {INFO.ADDRESS}, {INFO.POSTAL_CODE}
                </span>
              </li>
              <li className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-cs-dark-lighter flex items-center justify-center border border-gray-800">
                  <Instagram size={14} className="text-cs-orange" />
                </div>
                <a
                  href="https://www.instagram.com/carrestyle_carrelage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cs-orange"
                  aria-label="Instagram"
                >
                  {INFO.INSTAGRAM}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Carré Style. Tous droits réservés.
          </p>
          <div className="mt-4 flex items-center justify-center">
            <div className="w-8 h-0.5 bg-gray-800"></div>
            <Link
              href="/mentions-legales"
              className="mx-4 hover:text-cs-orange"
            >
              Mentions Légales
            </Link>
            <div className="w-8 h-0.5 bg-gray-800"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
