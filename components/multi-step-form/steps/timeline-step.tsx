"use client"

import type { FormData } from "../form-container"
import { Square, Calendar, Clock, CalendarClock } from "lucide-react"

interface TimelineStepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
}

export default function TimelineStep({ formData, updateFormData }: TimelineStepProps) {
  const handleTimelineChange = (timeline: "asap" | "2months" | "flexible") => {
    updateFormData({ timeline })
  }

  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-medium text-white mb-4">Quel est votre délai pour la réalisation des travaux ?</h4>

        <div className="space-y-4">
          <div
            className={`p-4 rounded-lg border cursor-pointer transition-all ${
              formData.timeline === "asap"
                ? "border-cs-orange bg-cs-dark shadow-md"
                : "border-gray-700 bg-cs-dark-darker hover:border-gray-500"
            }`}
            onClick={() => handleTimelineChange("asap")}
          >
            <div className="flex items-center">
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                  formData.timeline === "asap" ? "border-cs-orange" : "border-gray-500"
                }`}
              >
                {formData.timeline === "asap" && <Square className="w-2 h-2 text-cs-orange" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center">
                  <Clock className="text-cs-orange mr-2" size={18} />
                  <span className="text-white">Dès que possible</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Je souhaite démarrer les travaux rapidement</p>
              </div>
            </div>
          </div>

          <div
            className={`p-4 rounded-lg border cursor-pointer transition-all ${
              formData.timeline === "2months"
                ? "border-cs-orange bg-cs-dark shadow-md"
                : "border-gray-700 bg-cs-dark-darker hover:border-gray-500"
            }`}
            onClick={() => handleTimelineChange("2months")}
          >
            <div className="flex items-center">
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                  formData.timeline === "2months" ? "border-cs-orange" : "border-gray-500"
                }`}
              >
                {formData.timeline === "2months" && <Square className="w-2 h-2 text-cs-orange" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center">
                  <Calendar className="text-cs-orange mr-2" size={18} />
                  <span className="text-white">Dans les 2 mois</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Je prévois de réaliser ce projet prochainement</p>
              </div>
            </div>
          </div>

          <div
            className={`p-4 rounded-lg border cursor-pointer transition-all ${
              formData.timeline === "flexible"
                ? "border-cs-orange bg-cs-dark shadow-md"
                : "border-gray-700 bg-cs-dark-darker hover:border-gray-500"
            }`}
            onClick={() => handleTimelineChange("flexible")}
          >
            <div className="flex items-center">
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                  formData.timeline === "flexible" ? "border-cs-orange" : "border-gray-500"
                }`}
              >
                {formData.timeline === "flexible" && <Square className="w-2 h-2 text-cs-orange" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center">
                  <CalendarClock className="text-cs-orange mr-2" size={18} />
                  <span className="text-white">Flexible / Plus tard</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Je suis en phase de réflexion ou de planification</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-cs-dark rounded-lg border border-gray-700">
        <h5 className="text-white font-medium mb-2 flex items-center">
          <Square className="w-3 h-3 text-cs-orange mr-2" />
          Planning des travaux
        </h5>
        <p className="text-gray-300 text-sm">
          {formData.projectCategory === "beton-imprime"
            ? "Pour un projet de béton imprimé, comptez généralement 3 à 7 jours de travaux selon la superficie et la complexité du projet. La période idéale pour la réalisation est entre avril et octobre."
            : "Pour un projet de carrelage, la durée des travaux varie de 2 à 10 jours selon la surface et la complexité. Nous pouvons intervenir toute l'année pour les travaux intérieurs."}
        </p>
      </div>
    </div>
  )
}
