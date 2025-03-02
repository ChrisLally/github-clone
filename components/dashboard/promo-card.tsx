"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X } from "lucide-react"

interface PromoCardProps {
  title: string
  description: React.ReactNode
  ctaText: string
  icon?: React.ReactNode
  onClose: () => void
  gradient?: boolean
}

export function PromoCard({ 
  title, 
  description, 
  ctaText, 
  icon, 
  onClose, 
  gradient = false 
}: PromoCardProps) {
  return (
    <Card className="bg-[#0d1117] border border-[#30363d] rounded-md p-4 mb-4 relative">
      <button
        className="absolute top-2 right-2 text-[#8b949e] hover:text-[#c9d1d9]"
        onClick={onClose}
      >
        <X className="w-4 h-4" />
      </button>
      {icon && (
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <span className="text-lg font-medium">{title}</span>
        </div>
      )}
      {!icon && <h3 className="text-base font-medium mb-1">{title}</h3>}
      <div className="mb-4">{description}</div>
      <Button 
        className={`w-full ${gradient 
          ? "bg-gradient-to-r from-[#58a6ff] to-[#3fb950] hover:from-[#58a6ff] hover:to-[#3fb950] text-white border-none" 
          : "bg-[#21262d] hover:bg-[#30363d] text-white border-[#30363d]"}`}
      >
        {ctaText}
      </Button>
    </Card>
  )
}
