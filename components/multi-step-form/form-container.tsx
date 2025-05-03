"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react"
import ProgressBar from "./progress-bar"
import ProjectTypeStep from "./steps/project-type-step"
import SurfaceStep from "./steps/surface-step"
import MaterialsStep from "./steps/materials-step"
import TimelineStep from "./steps/timeline-step"
import ContactStep from "./steps/contact-step"
import ConfirmationStep from "./steps/confirmation-step"

export type ProjectType = "beton-imprime" | "carrelage"

export type FormData = {
  projectCategory: ProjectType
  projectType: string
  customProjectType?: string
  surface: number
  materials: "yes" | "no" | "unsure"
  timeline: "asap" | "2months" | "flexible"
  name: string
  email: string
  phone: string
  postalCode?: string
  message?: string
  photos?: File[]
}

interface MultiStepFormProps {
  initialProjectType: ProjectType
}

export default function MultiStepForm({ initialProjectType }: MultiStepFormProps) {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    projectCategory: initialProjectType,
    projectType: "",
    surface: 0,
    materials: "unsure",
    timeline: "flexible",
    name: "",
    email: "",
    phone: "",
  })

  const steps = ["Type de projet", "Superficie", "Matériaux", "Délai", "Coordonnées", "Confirmation"]

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      // Préparer les données pour l'envoi
      const formDataToSend = new FormData()

      // Ajouter toutes les données du formulaire sauf les photos
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== "photos" && value !== undefined) {
          formDataToSend.append(key, value.toString())
        }
      })

      // Ajouter les photos si elles existent
      if (formData.photos && formData.photos.length > 0) {
        formData.photos.forEach((photo, index) => {
          formDataToSend.append(`photo_${index}`, photo)
        })
      }

      // Envoyer les données au webhook N8n
      const response = await fetch(
        "https://primary-production-a978.up.railway.app/webhook-test/30b47dba-8af4-4d39-8a01-507dfab33afb",
        {
          method: "POST",
          body: formDataToSend,
        },
      )

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire")
      }

      // Passer à l'étape de confirmation
      nextStep()
    } catch (error) {
      console.error("Erreur:", error)
      alert("Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <ProjectTypeStep formData={formData} updateFormData={updateFormData} />
      case 1:
        return <SurfaceStep formData={formData} updateFormData={updateFormData} />
      case 2:
        return <MaterialsStep formData={formData} updateFormData={updateFormData} />
      case 3:
        return <TimelineStep formData={formData} updateFormData={updateFormData} />
      case 4:
        return <ContactStep formData={formData} updateFormData={updateFormData} />
      case 5:
        return <ConfirmationStep formData={formData} />
      default:
        return null
    }
  }

  const isNextDisabled = () => {
    switch (currentStep) {
      case 0:
        return !formData.projectType
      case 1:
        return formData.surface <= 0
      case 4:
        return !formData.name || !formData.email || !formData.phone
      default:
        return false
    }
  }

  const isLastStep = currentStep === steps.length - 2 // L'étape avant la confirmation

  return (
    <div className="bg-cs-dark-lighter rounded-lg border border-gray-800 shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-800">
        <h3 className="text-xl font-bold text-white mb-1">Demande de devis personnalisé</h3>
        <p className="text-gray-300">
          {formData.projectCategory === "beton-imprime"
            ? "Transformez votre espace extérieur avec notre béton imprimé"
            : "Donnez du caractère à votre intérieur avec notre expertise en carrelage"}
        </p>
      </div>

      <div className="p-6">
        {currentStep < steps.length - 1 && <ProgressBar steps={steps} currentStep={currentStep} />}

        <div className="mt-8 min-h-[300px]">{renderStep()}</div>

        {currentStep < steps.length - 1 && (
          <div className="mt-8 flex justify-between">
            <button
              onClick={prevStep}
              className={`flex items-center px-4 py-2 rounded-md transition-all ${
                currentStep === 0 ? "opacity-0 pointer-events-none" : "bg-cs-dark text-white hover:bg-cs-dark-darker"
              }`}
            >
              <ArrowLeft size={16} className="mr-2" />
              Précédent
            </button>

            {isLastStep ? (
              <button
                onClick={handleSubmit}
                disabled={isNextDisabled() || isSubmitting}
                className="flex items-center bg-cs-orange text-white px-6 py-2 rounded-md hover:bg-cs-orange-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer ma demande
                    <Check size={16} className="ml-2" />
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={nextStep}
                disabled={isNextDisabled()}
                className="flex items-center bg-cs-orange text-white px-6 py-2 rounded-md hover:bg-cs-orange-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Suivant
                <ArrowRight size={16} className="ml-2" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
