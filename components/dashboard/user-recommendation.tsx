"use client"

import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface UserRecommendationProps {
  username: string
  fullName?: string
  description?: string
  avatarColor?: string
}

export function UserRecommendation({ 
  username, 
  fullName, 
  description = "", 
  avatarColor = "#238636" 
}: UserRecommendationProps) {
  return (
    <Card className="bg-[#0d1117] border border-[#30363d] rounded-md p-4">
      <div className="flex items-center gap-3 mb-3">
        <Avatar className="w-10 h-10 rounded-full" style={{ backgroundColor: avatarColor }}>
          <span className="text-sm">{username[0].toUpperCase()}</span>
        </Avatar>
        <div>
          <div className="text-sm font-medium">{username}</div>
          {fullName && <div className="text-xs text-[#8b949e]">{fullName}</div>}
        </div>
        <Button
          variant="outline"
          size="sm"
          className="h-7 ml-auto px-2 py-0 text-xs bg-[#21262d] hover:bg-[#30363d] text-white border-[#30363d]"
        >
          Follow
        </Button>
      </div>
      {description && <div className="text-xs text-[#8b949e]">{description}</div>}
    </Card>
  )
}
