"use client"

import type React from "react"

import type { FormData } from "../form-container"
import { Square } from "lucide-react"

interface ProjectTypeStepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
}

export default function ProjectTypeStep({ formData, updateFormData }: ProjectTypeStepProps) {
  const projectTypes =
    formData.projectCategory === "beton-imprime"
      ? [
          { id: "terrasse", label: "Terrasse extérieure" },
          { id: "allee", label: "Allée / Chemin" },
          { id: "entree", label: "Entrée de garage" },
          { id: "piscine", label: "Contour de piscine" },
          { id: "autre", label: "Autre projet" },
        ]
      : [
          { id: "salle-de-bain", label: "Salle de bain" },
          { id: "cuisine", label: "Cuisine" },
          { id: "sejour", label: "Séjour / Pièce à vivre" },
          { id: "escalier", label: "Escalier" },
          { id: "autre", label: "Autre projet" },
        ]

  const handleProjectTypeChange = (projectType: string) => {
    updateFormData({ projectType })
  }

  const handleCustomProjectTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ customProjectType: e.target.value })
  }

  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-medium text-white mb-4">Quel type de projet souhaitez-vous réaliser ?</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectTypes.map((type) => (
            <div
              key={type.id}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                formData.projectType === type.id
                  ? "border-cs-orange bg-cs-dark shadow-md"
                  : "border-gray-700 bg-cs-dark-darker hover:border-gray-500"
              }`}
              onClick={() => handleProjectTypeChange(type.id)}
            >
              <div className="flex items-center">
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                    formData.projectType === type.id ? "border-cs-orange" : "border-gray-500"
                  }`}
                >
                  {formData.projectType === type.id && <Square className="w-2 h-2 text-cs-orange" />}
                </div>
                <span className="text-white">{type.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {formData.projectType === "autre" && (
        <div>
          <label htmlFor="customProjectType" className="block text-sm font-medium text-white mb-2">
            Précisez votre projet
          </label>
          <input
            type="text"
            id="customProjectType"
            value={formData.customProjectType || ""}
            onChange={handleCustomProjectTypeChange}
            placeholder="Décrivez brièvement votre projet"
            className="w-full px-4 py-2 bg-cs-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cs-orange text-white"
          />
        </div>
      )}

      <div className="p-4 bg-cs-dark rounded-lg border border-gray-700">
        <h5 className="text-white font-medium mb-2 flex items-center">
          <Square className="w-3 h-3 text-cs-orange mr-2" />
          Conseil Carré Style
        </h5>
        <p className="text-gray-300 text-sm">
          {formData.projectCategory === "beton-imprime"
            ? "Le béton imprimé est idéal pour les espaces extérieurs et offre une grande durabilité face aux intempéries."
            : "Pour les pièces humides comme les salles de bain, nous recommandons un carrelage antidérapant pour plus de sécurité."}
        </p>
      </div>
    </div>
  )
}
