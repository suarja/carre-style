"use client"

import type React from "react"

import { useState, useEffect } from "react"
import type { FormData } from "../form-container"
import { Square } from "lucide-react"

interface SurfaceStepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
}

export default function SurfaceStep({ formData, updateFormData }: SurfaceStepProps) {
  const [inputValue, setInputValue] = useState(formData.surface > 0 ? formData.surface.toString() : "")
  const [sliderValue, setSliderValue] = useState(formData.surface)

  useEffect(() => {
    // Synchroniser le slider avec l'input lorsque l'input change
    if (inputValue) {
      setSliderValue(Number.parseInt(inputValue))
    }
  }, [inputValue])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Accepter uniquement les nombres
    if (/^\d*$/.test(value)) {
      setInputValue(value)
      updateFormData({ surface: value ? Number.parseInt(value) : 0 })
    }
  }

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    setSliderValue(value)
    setInputValue(value.toString())
    updateFormData({ surface: value })
  }

  // Déterminer le prix estimatif (très approximatif, juste pour l'exemple)
  const getEstimatedPriceRange = () => {
    const surface = Number.parseInt(inputValue) || 0
    if (surface <= 0) return "N/A"

    const minPrice = formData.projectCategory === "beton-imprime" ? surface * 80 : surface * 60

    const maxPrice = formData.projectCategory === "beton-imprime" ? surface * 120 : surface * 100

    return `${minPrice.toLocaleString()} € - ${maxPrice.toLocaleString()} €`
  }

  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-medium text-white mb-4">
          Quelle est la superficie approximative de votre projet ?
        </h4>

        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <label htmlFor="surface" className="block text-sm font-medium text-gray-300 mb-2">
              Surface en m²
            </label>
            <input
              type="text"
              id="surface"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Ex: 25"
              className="w-full px-4 py-2 bg-cs-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cs-orange text-white"
            />
          </div>
          <div className="w-16 h-16 rounded-full bg-cs-orange flex items-center justify-center text-white font-bold">
            m²
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="surfaceSlider" className="block text-sm font-medium text-gray-300 mb-2">
          Ajustez avec le curseur
        </label>
        <input
          type="range"
          id="surfaceSlider"
          min="1"
          max="200"
          value={sliderValue || 0}
          onChange={handleSliderChange}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cs-orange"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>1 m²</span>
          <span>50 m²</span>
          <span>100 m²</span>
          <span>150 m²</span>
          <span>200 m²</span>
        </div>
      </div>

      <div className="p-4 bg-cs-dark rounded-lg border border-gray-700">
        <div className="flex justify-between items-center mb-2">
          <h5 className="text-white font-medium flex items-center">
            <Square className="w-3 h-3 text-cs-orange mr-2" />
            Estimation indicative
          </h5>
          <span className="text-cs-orange font-bold">{getEstimatedPriceRange()}</span>
        </div>
        <p className="text-gray-300 text-sm">
          Cette estimation est donnée à titre indicatif et peut varier selon les spécificités de votre projet. Un devis
          précis vous sera fourni après étude de votre demande.
        </p>
      </div>
    </div>
  )
}
