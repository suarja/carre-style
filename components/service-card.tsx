import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  imagePath: string
  link: string
}

export default function ServiceCard({ title, description, imagePath, link }: ServiceCardProps) {
  return (
    <div className="card group h-full relative overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imagePath || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cs-dark to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h3 className="mb-0 text-white drop-shadow-md">{title}</h3>
        </div>
      </div>
      <div className="p-6 border-t border-gray-800">
        <p className="text-gray-300 mb-4">{description}</p>
        <Link
          href={link}
          className="text-cs-orange font-medium hover:text-cs-orange-light flex items-center group-hover:underline transition-all duration-300"
        >
          En savoir plus
          <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Accent décoratif */}
      <div className="absolute top-0 left-0 w-1 h-full bg-cs-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  )
}
