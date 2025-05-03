"use client"

import type { FormData } from "../form-container"
import { Square, Info } from "lucide-react"

interface MaterialsStepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
}

export default function MaterialsStep({ formData, updateFormData }: MaterialsStepProps) {
  const handleMaterialsChange = (materials: "yes" | "no" | "unsure") => {
    updateFormData({ materials })
  }

  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-medium text-white mb-4">Concernant les matériaux...</h4>

        <div className="space-y-4">
          <div
            className={`p-4 rounded-lg border cursor-pointer transition-all ${
              formData.materials === "yes"
                ? "border-cs-orange bg-cs-dark shadow-md"
                : "border-gray-700 bg-cs-dark-darker hover:border-gray-500"
            }`}
            onClick={() => handleMaterialsChange("yes")}
          >
            <div className="flex items-center">
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                  formData.materials === "yes" ? "border-cs-orange" : "border-gray-500"
                }`}
              >
                {formData.materials === "yes" && <Square className="w-2 h-2 text-cs-orange" />}
              </div>
              <div>
                <span className="text-white">J'ai déjà les matériaux</span>
                <p className="text-sm text-gray-400 mt-1">Je souhaite uniquement la prestation de pose</p>
              </div>
            </div>
          </div>

          <div
            className={`p-4 rounded-lg border cursor-pointer transition-all ${
              formData.materials === "no"
                ? "border-cs-orange bg-cs-dark shadow-md"
                : "border-gray-700 bg-cs-dark-darker hover:border-gray-500"
            }`}
            onClick={() => handleMaterialsChange("no")}
          >
            <div className="flex items-center">
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                  formData.materials === "no" ? "border-cs-orange" : "border-gray-500"
                }`}
              >
                {formData.materials === "no" && <Square className="w-2 h-2 text-cs-orange" />}
              </div>
              <div>
                <span className="text-white">Je souhaite un accompagnement complet</span>
                <p className="text-sm text-gray-400 mt-1">Fourniture des matériaux et pose</p>
              </div>
            </div>
          </div>

          <div
            className={`p-4 rounded-lg border cursor-pointer transition-all ${
              formData.materials === "unsure"
                ? "border-cs-orange bg-cs-dark shadow-md"
                : "border-gray-700 bg-cs-dark-darker hover:border-gray-500"
            }`}
            onClick={() => handleMaterialsChange("unsure")}
          >
            <div className="flex items-center">
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                  formData.materials === "unsure" ? "border-cs-orange" : "border-gray-500"
                }`}
              >
                {formData.materials === "unsure" && <Square className="w-2 h-2 text-cs-orange" />}
              </div>
              <div>
                <span className="text-white">Je ne sais pas encore</span>
                <p className="text-sm text-gray-400 mt-1">J'aimerais discuter des options possibles</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-cs-dark rounded-lg border border-gray-700 flex">
        <Info className="text-cs-orange flex-shrink-0 mr-3 mt-1" size={18} />
        <div>
          <h5 className="text-white font-medium mb-1">Bon à savoir</h5>
          <p className="text-gray-300 text-sm">
            {formData.projectCategory === "beton-imprime"
              ? "Pour le béton imprimé, nous utilisons des matériaux de haute qualité qui garantissent durabilité et résistance aux intempéries. Nous pouvons vous conseiller sur les coloris et motifs les mieux adaptés à votre projet."
              : "Nous travaillons avec des fournisseurs de carrelage de qualité et pouvons vous faire bénéficier de tarifs préférentiels. Notre expertise vous aidera à choisir le carrelage idéal pour votre projet."}
          </p>
        </div>
      </div>
    </div>
  )
}
