"use client"

import { Star } from "lucide-react"

export default function Achievements() {
  return (
    <div className="mt-6">
      <h2 className="font-medium mb-2">Achievements</h2>
      <div className="flex">
        <div className="p-1 bg-[#161b22] border border-[#30363d] rounded-md">
          <div className="w-10 h-10 bg-gradient-to-br from-[#388bfd] to-[#1f6feb] rounded-md flex items-center justify-center">
            <div className="w-8 h-8 bg-[#0d1117] rounded-md flex items-center justify-center">
              <Star className="h-4 w-4 text-[#58a6ff]" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <button className="text-xs py-1 px-2 bg-[#238636] text-white rounded-md">New</button>
        <button className="text-xs py-1 px-2 ml-2 border border-[#30363d] rounded-md">Send feedback</button>
      </div>
    </div>
  )
}
