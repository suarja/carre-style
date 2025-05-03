"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface BeforeAfterProps {
  beforeImage: string
  beforeAlt: string
  afterImage: string
  afterAlt: string
  title: string
  description: string
}

export default function BeforeAfter({
  beforeImage,
  beforeAlt,
  afterImage,
  afterAlt,
  title,
  description,
}: BeforeAfterProps) {
  const [showAfter, setShowAfter] = useState(true)

  return (
    <div className="bg-cs-dark-lighter rounded-lg overflow-hidden border border-gray-800 shadow-lg">
      <div className="relative aspect-video">
        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            showAfter ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={beforeImage || "/placeholder.svg"}
            alt={beforeAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute bottom-4 left-4 bg-cs-dark/80 text-white px-3 py-1 rounded-md text-sm backdrop-blur-sm">
            Avant
          </div>
        </div>
        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            showAfter ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={afterImage || "/placeholder.svg"}
            alt={afterAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute bottom-4 left-4 bg-cs-orange/80 text-white px-3 py-1 rounded-md text-sm backdrop-blur-sm">
            Après
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setShowAfter(false)}
            className={`flex items-center px-4 py-2 rounded-md transition-all ${
              !showAfter
                ? "bg-cs-dark text-white border border-gray-700"
                : "bg-cs-dark-darker text-gray-400 hover:text-white"
            }`}
          >
            <ArrowLeft size={16} className="mr-2" />
            Avant
          </button>
          <button
            onClick={() => setShowAfter(true)}
            className={`flex items-center px-4 py-2 rounded-md transition-all ${
              showAfter ? "bg-cs-orange text-white" : "bg-cs-dark-darker text-gray-400 hover:text-white"
            }`}
          >
            Après
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}
