import type { FormData } from "../form-container"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

interface ConfirmationStepProps {
  formData: FormData
}

export default function ConfirmationStep({ formData }: ConfirmationStepProps) {
  // Fonction pour obtenir le libellé du type de projet
  const getProjectTypeLabel = () => {
    if (formData.projectCategory === "beton-imprime") {
      switch (formData.projectType) {
        case "terrasse":
          return "Terrasse extérieure"
        case "allee":
          return "Allée / Chemin"
        case "entree":
          return "Entrée de garage"
        case "piscine":
          return "Contour de piscine"
        case "autre":
          return formData.customProjectType || "Autre projet"
        default:
          return formData.projectType
      }
    } else {
      switch (formData.projectType) {
        case "salle-de-bain":
          return "Salle de bain"
        case "cuisine":
          return "Cuisine"
        case "sejour":
          return "Séjour / Pièce à vivre"
        case "escalier":
          return "Escalier"
        case "autre":
          return formData.customProjectType || "Autre projet"
        default:
          return formData.projectType
      }
    }
  }

  // Fonction pour obtenir le libellé des matériaux
  const getMaterialsLabel = () => {
    switch (formData.materials) {
      case "yes":
        return "J'ai déjà les matériaux"
      case "no":
        return "Je souhaite un accompagnement complet"
      case "unsure":
        return "Je ne sais pas encore"
      default:
        return ""
    }
  }

  // Fonction pour obtenir le libellé du délai
  const getTimelineLabel = () => {
    switch (formData.timeline) {
      case "asap":
        return "Dès que possible"
      case "2months":
        return "Dans les 2 mois"
      case "flexible":
        return "Flexible / Plus tard"
      default:
        return ""
    }
  }

  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <div className="w-20 h-20 rounded-full bg-cs-orange/20 flex items-center justify-center">
          <CheckCircle className="h-12 w-12 text-cs-orange" />
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white">Demande envoyée avec succès !</h3>
        <p className="text-gray-300 mt-2">
          Merci pour votre demande de devis. Notre équipe vous contactera dans les 24h pour affiner votre projet.
        </p>
      </div>

      <div className="bg-cs-dark p-6 rounded-lg border border-gray-800 text-left">
        <h4 className="text-lg font-medium text-white mb-4">Récapitulatif de votre demande</h4>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-400">Type de projet :</span>
            <span className="text-white font-medium">{getProjectTypeLabel()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Surface :</span>
            <span className="text-white font-medium">{formData.surface} m²</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Matériaux :</span>
            <span className="text-white font-medium">{getMaterialsLabel()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Délai souhaité :</span>
            <span className="text-white font-medium">{getTimelineLabel()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Nom :</span>
            <span className="text-white font-medium">{formData.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Email :</span>
            <span className="text-white font-medium">{formData.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Téléphone :</span>
            <span className="text-white font-medium">{formData.phone}</span>
          </div>
          {formData.postalCode && (
            <div className="flex justify-between">
              <span className="text-gray-400">Code postal :</span>
              <span className="text-white font-medium">{formData.postalCode}</span>
            </div>
          )}
          {formData.photos && formData.photos.length > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-400">Photos jointes :</span>
              <span className="text-white font-medium">{formData.photos.length} photo(s)</span>
            </div>
          )}
        </div>
      </div>

      <div className="pt-4">
        <p className="text-gray-300 mb-4">
          Un email de confirmation a été envoyé à {formData.email}.
          <br />
          Vous avez des questions ? N'hésitez pas à nous contacter.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn btn-outline flex items-center justify-center">
            Retour à l'accueil
          </Link>
          <Link href="/contact" className="btn btn-primary flex items-center justify-center">
            Nous contacter
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}
