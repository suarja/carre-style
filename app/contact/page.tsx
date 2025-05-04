import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Carré Style - Haut-Rhin Alsace",
  description:
    "Contactez Carré Style pour vos projets de carrelage et béton imprimé dans le Haut-Rhin en Alsace. Devis gratuit et sans engagement.",
  keywords: "contact, devis, carrelage, béton imprimé, Haut-Rhin, Alsace",
};

export default function Contact() {
  return (
    <>
      <section className="bg-cs-dark py-12 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="mb-4">Contactez-nous</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nous sommes à votre disposition pour répondre à toutes vos
              questions et vous accompagner dans vos projets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">
                Nos coordonnées
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cs-orange p-3 rounded-full text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Téléphone</h3>
                    <p className="text-gray-300">06 61 02 48 14</p>
                    <p className="text-sm text-gray-400">
                      Du lundi au vendredi, 8h-19h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cs-orange p-3 rounded-full text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a
                      href="mailto:tschannnicolas@gmail.com"
                      className="text-gray-300 hover:text-cs-orange"
                    >
                      tschannnicolas@gmail.com
                    </a>
                    <p className="text-sm text-gray-400 mt-1">
                      Nous vous répondons sous 24h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cs-orange p-3 rounded-full text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Adresse</h3>
                    <p className="text-gray-300">Haut-Rhin, Alsace</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Zone d'intervention : Haut-Rhin et environs
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cs-orange p-3 rounded-full text-white">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Instagram</h3>
                    <a
                      href="https://www.instagram.com/carrestyle_carrelage/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cs-orange"
                    >
                      @carrestyle_carrelage
                    </a>
                    <p className="text-sm text-gray-400 mt-1">
                      Suivez nos dernières réalisations
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">
                  Notre zone d'intervention
                </h3>
                <div className="aspect-video relative rounded-lg overflow-hidden border border-gray-700">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d343115.2551263406!2d7.1369147!3d47.8590256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47919bd2c4eb6077%3A0x409ce34b31458d0!2sHaut-Rhin!5e0!3m2!1sfr!2sfr!4v1651234567890!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Carte du Haut-Rhin"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>
            </div>

            <div id="devis">
              <div className="bg-cs-dark-lighter p-8 rounded-lg shadow-md border border-gray-800">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Demande de devis gratuit
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
