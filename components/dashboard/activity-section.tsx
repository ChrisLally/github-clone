"use client"

import { AlertCircle } from "lucide-react"

export function ActivitySection() {
  return (
    <div className="mb-6">
      <h3 className="text-xs font-medium mb-2">Recent activity</h3>
      <div className="flex items-start gap-2 py-1">
        <AlertCircle className="w-3.5 h-3.5 text-[#3fb950] mt-0.5" />
        <div className="text-xs">
          <div>BuilderIO/figma-html</div>
          <div className="text-[#8b949e]">When importing JSON Files, Layers not structured</div>
        </div>
      </div>
    </div>
  )
}
