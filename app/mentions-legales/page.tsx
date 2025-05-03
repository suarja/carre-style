import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions Légales | Carré Style - Haut-Rhin Alsace",
  description: "Mentions légales de Carré Style, entreprise de carrelage et béton imprimé dans le Haut-Rhin en Alsace.",
  keywords: "mentions légales, carrelage, béton imprimé, Haut-Rhin, Alsace",
}

export default function MentionsLegales() {
  return (
    <section className="py-12 md:py-20 bg-cs-dark">
      <div className="container-custom">
        <h1 className="mb-8">Mentions Légales</h1>

        <div className="prose prose-invert max-w-none text-gray-300">
          <h2 className="text-white">Éditeur du site</h2>
          <p>
            Le site Carré Style est édité par l'entreprise Carré Style, entreprise individuelle.
            <br />
            Siège social : Haut-Rhin, Alsace
            <br />
            Téléphone : 06 61 02 48 14
            <br />
            Email : tschannnicolas@gmail.com
            <br />
            SIRET : XXX XXX XXX XXXXX
          </p>

          <h2 className="text-white">Directeur de la publication</h2>
          <p>Le directeur de la publication est M. Nicolas Tschann, gérant de l'entreprise Carré Style.</p>

          <h2 className="text-white">Hébergement</h2>
          <p>
            Le site est hébergé par la société Vercel Inc.
            <br />
            Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA
          </p>

          <h2 className="text-white">Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est la propriété exclusive de Carré Style ou
            de ses partenaires. Toute reproduction, représentation, modification, publication, adaptation de tout ou
            partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation
            écrite préalable de Carré Style.
          </p>

          <h2 className="text-white">Données personnelles</h2>
          <p>
            Les informations recueillies sur le formulaire de contact sont enregistrées dans un fichier informatisé par
            Carré Style pour la gestion de sa clientèle et de ses prospects. Elles sont conservées pendant 3 ans et sont
            destinées au service commercial et au service communication établis en France.
          </p>
          <p>
            Conformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous
            concernant et les faire rectifier en contactant : tschannnicolas@gmail.com.
          </p>

          <h2 className="text-white">Cookies</h2>
          <p>
            Le site Carré Style peut utiliser des cookies pour améliorer l'expérience utilisateur. Vous pouvez
            désactiver l'utilisation de cookies en sélectionnant les paramètres appropriés de votre navigateur.
          </p>

          <h2 className="text-white">Limitation de responsabilité</h2>
          <p>
            Carré Style ne pourra être tenue responsable des dommages directs et indirects causés au matériel de
            l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas
            aux spécifications techniques requises, soit de l'apparition d'un bug ou d'une incompatibilité.
          </p>

          <h2 className="text-white">Droit applicable et juridiction compétente</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français
            seront compétents.
          </p>
        </div>
      </div>
    </section>
  )
}
