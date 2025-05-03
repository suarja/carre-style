"use client"

import type React from "react"

import { useState } from "react"
import type { FormData } from "../form-container"
import { Upload, X } from "lucide-react"

interface ContactStepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
}

export default function ContactStep({ formData, updateFormData }: ContactStepProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      setSelectedFiles((prev) => [...prev, ...filesArray])
      updateFormData({ photos: [...(formData.photos || []), ...filesArray] })
    }
  }

  const removeFile = (index: number) => {
    const newFiles = [...selectedFiles]
    newFiles.splice(index, 1)
    setSelectedFiles(newFiles)
    updateFormData({ photos: newFiles })
  }

  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-medium text-white mb-4">Vos coordonnées</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
              Nom complet *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-cs-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cs-orange text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-cs-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cs-orange text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
              Téléphone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-cs-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cs-orange text-white"
            />
          </div>
          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-white mb-1">
              Code postal (optionnel)
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode || ""}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-cs-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cs-orange text-white"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
            Message complémentaire (optionnel)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message || ""}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-4 py-2 bg-cs-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cs-orange text-white"
            placeholder="Précisions sur votre projet, questions, contraintes particulières..."
          ></textarea>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">Photos du projet (optionnel)</label>

        <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
          <input type="file" id="photos" multiple accept="image/*" onChange={handleFileChange} className="hidden" />
          <label htmlFor="photos" className="cursor-pointer flex flex-col items-center justify-center">
            <Upload className="h-10 w-10 text-gray-400 mb-2" />
            <p className="text-sm text-gray-300">
              Cliquez pour ajouter des photos
              <span className="text-gray-500 block mt-1">ou glissez-déposez vos fichiers ici</span>
            </p>
          </label>
        </div>

        {selectedFiles.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-gray-300 mb-2">{selectedFiles.length} fichier(s) sélectionné(s)</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {selectedFiles.map((file, index) => (
                <div key={index} className="relative group">
                  <div className="h-20 bg-cs-dark-darker border border-gray-700 rounded-md p-2 flex items-center justify-between overflow-hidden">
                    <span className="text-xs text-gray-300 truncate">{file.name}</span>
                    <button type="button" onClick={() => removeFile(index)} className="text-gray-400 hover:text-white">
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-cs-dark rounded-lg border border-gray-700">
        <p className="text-gray-300 text-sm">
          En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe pour finaliser votre devis. Vos
          données personnelles sont utilisées uniquement dans le cadre de votre demande et ne seront pas partagées avec
          des tiers.
        </p>
      </div>
    </div>
  )
}
