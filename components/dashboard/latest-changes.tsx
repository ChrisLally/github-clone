"use client"

import { ArrowRight } from "lucide-react"

const CHANGES = [
  "Secret scanning changes to how you opt in to notifications",
  "Code scanning shows more accurate and relevant alerts on pull requests",
  "SSH Certificate requirement update",
  "Fixed bug that allowed removed users to retain access to the organization"
]

export function LatestChanges() {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-medium mb-3">Latest changes</h3>
      <div className="space-y-4">
        {CHANGES.map((change, index) => (
          <div key={index} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-[#58a6ff]"></div>
              <div className="w-0.5 h-full bg-[#30363d]"></div>
            </div>
            <div>
              <p className="text-sm">{change}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1 mt-2 text-xs text-[#8b949e]">
        <span>View changelog</span>
        <ArrowRight className="w-3 h-3" />
      </div>
    </div>
  )
}
