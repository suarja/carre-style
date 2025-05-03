import Image from "next/image"
import { Square } from "lucide-react"

interface ProjectShowcaseProps {
  images: {
    src: string
    alt: string
  }[]
  title: string
  description: string
}

export default function ProjectShowcase({ images, title, description }: ProjectShowcaseProps) {
  return (
    <div className="bg-cs-dark-lighter rounded-lg overflow-hidden border border-gray-800 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-video">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <div className="w-8 h-0.5 bg-cs-orange/40 mr-3"></div>
          <Square className="text-cs-orange mr-2" size={8} />
          <h3 className="mb-0">{title}</h3>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
}
