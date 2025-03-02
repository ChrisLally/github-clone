"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, Star } from "lucide-react"

interface RepositoryCardProps {
  repoName: string
  description?: string
  stars?: string
  language?: string
  languageColor?: string
  showStarButton?: boolean
}

export function RepositoryCard({
  repoName,
  description,
  stars = "0",
  language,
  languageColor = "#3572a5",
  showStarButton = true
}: RepositoryCardProps) {
  return (
    <Card className="bg-[#0d1117] border border-[#30363d] rounded-md p-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-4 h-4 bg-[#238636] rounded-sm"></div>
        <span className="text-sm">{repoName}</span>
      </div>
      {description && <p className="text-sm font-medium mb-2">{description}</p>}
      <div className="flex items-center gap-4 text-xs text-[#8b949e]">
        <div className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5" />
          <span>{stars}</span>
        </div>
        {language && (
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: languageColor }}></span>
            <span>{language}</span>
          </div>
        )}
      </div>
      {showStarButton && (
        <div className="flex justify-between mt-2">
          <div></div>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 py-0 text-xs bg-[#21262d] hover:bg-[#30363d] text-white border-[#30363d]"
            >
              <Star className="w-3.5 h-3.5 mr-1" />
              Star
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 w-7 p-0 text-xs bg-[#21262d] hover:bg-[#30363d] text-white border-[#30363d]"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      )}
    </Card>
  )
}
