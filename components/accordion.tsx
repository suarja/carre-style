"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  isOpen?: boolean
  toggleOpen: () => void
}

export function AccordionItem({ title, children, isOpen, toggleOpen }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 px-2 text-left font-medium focus:outline-none text-white"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`}>
        <div className="px-2 text-gray-300">{children}</div>
      </div>
    </div>
  )
}

interface AccordionProps {
  items: {
    title: string
    content: React.ReactNode
  }[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="border border-gray-700 rounded-lg bg-cs-dark-lighter px-4 py-2">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} isOpen={openIndex === index} toggleOpen={() => toggleItem(index)}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}
