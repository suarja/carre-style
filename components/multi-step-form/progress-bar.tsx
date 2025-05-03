import { Square } from "lucide-react"

interface ProgressBarProps {
  steps: string[]
  currentStep: number
}

export default function ProgressBar({ steps, currentStep }: ProgressBarProps) {
  return (
    <div className="relative">
      {/* Barre de progression */}
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-700">
        <div
          className="h-full bg-cs-orange transition-all duration-500 ease-in-out"
          style={{ width: `${(currentStep / (steps.length - 2)) * 100}%` }}
        ></div>
      </div>

      {/* Étapes */}
      <div className="flex justify-between relative">
        {steps.slice(0, -1).map((step, index) => (
          <div key={index} className={`flex flex-col items-center relative ${index > currentStep ? "opacity-50" : ""}`}>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${
                index < currentStep
                  ? "bg-cs-orange text-white"
                  : index === currentStep
                    ? "bg-cs-orange text-white ring-4 ring-cs-orange/20"
                    : "bg-gray-700 text-gray-400"
              }`}
            >
              {index < currentStep ? (
                <Square className="w-3 h-3 fill-current" />
              ) : (
                <span className="text-sm font-medium">{index + 1}</span>
              )}
            </div>
            <span className="text-xs mt-2 text-center max-w-[80px] text-gray-300">{step}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
