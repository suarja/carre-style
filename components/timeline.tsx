interface TimelineItemProps {
  step: number
  title: string
  description: string
}

export function TimelineItem({ step, title, description }: TimelineItemProps) {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cs-orange text-white font-bold">
          {step}
        </div>
        <div className="w-px h-full bg-gray-700"></div>
      </div>
      <div className="pb-8">
        <h4 className="mb-2">{title}</h4>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
}

interface TimelineProps {
  items: {
    step: number
    title: string
    description: string
  }[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="py-6">
      {items.map((item, index) => (
        <TimelineItem key={index} step={item.step} title={item.title} description={item.description} />
      ))}
    </div>
  )
}
