import { Quote } from "lucide-react"

interface TestimonialProps {
  quote: string
  author: string
  location: string
}

export default function Testimonial({ quote, author, location }: TestimonialProps) {
  return (
    <div className="bg-cs-dark-lighter p-8 rounded-lg shadow-md border border-gray-800 h-full relative">
      <Quote className="absolute top-4 left-4 text-cs-orange/20" size={40} />

      <div className="relative z-10">
        <p className="italic text-gray-300 mb-6 relative z-10">{quote}</p>

        <div className="flex items-center">
          <div className="w-10 h-0.5 bg-cs-orange/40 mr-3"></div>
          <div>
            <p className="font-semibold text-white">{author}</p>
            <p className="text-sm text-gray-400">{location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
