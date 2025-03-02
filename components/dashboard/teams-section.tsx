"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function TeamsSection() {
  return (
    <div>
      <h3 className="text-xs font-medium mb-2">Your teams</h3>
      <div className="relative mb-2">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-[#6e7681]" />
        <Input placeholder="Find a team..." className="h-7 pl-8 text-xs bg-[#010409] border-[#30363d] rounded-md" />
      </div>
      <div className="flex items-center gap-2 py-1">
        <div className="w-3.5 h-3.5 bg-[#30363d] rounded-sm"></div>
        <span className="text-xs">deterministic-algorithms-lab/auto-dub</span>
      </div>
    </div>
  )
}
