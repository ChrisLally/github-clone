"use client"

import { MoreHorizontal } from "lucide-react"

export default function ProfileImage() {
  return (
    <div className="relative">
      <div className="w-full max-w-[296px] aspect-square bg-[#161b22] rounded-full overflow-hidden border-4 border-[#0d1117]">
        <div className="w-full h-full bg-[#6366f1] flex items-center justify-center">
          <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
            <div className="bg-white"></div>
            <div className="bg-[#6366f1]"></div>
            <div className="bg-white"></div>
            <div className="bg-[#6366f1]"></div>
            <div className="bg-white"></div>
            <div className="bg-[#6366f1]"></div>
            <div className="bg-white"></div>
            <div className="bg-[#6366f1]"></div>
            <div className="bg-white"></div>
          </div>
        </div>
      </div>
      <button className="absolute bottom-4 right-4 p-1 rounded-full bg-[#0d1117] border border-[#30363d] text-[#8b949e]">
        <MoreHorizontal className="h-5 w-5" />
      </button>
    </div>
  )
}
