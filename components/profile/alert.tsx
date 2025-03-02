"use client"

import Link from "next/link"
import { X } from "lucide-react"

export default function Alert() {
  return (
    <div className="mx-4 mt-4 p-4 bg-[#161b22] border border-[#30363d] rounded-md flex items-start">
      <div className="flex-1 text-sm">
        You unlocked new Achievements with private contributions! Show them off by including private contributions in
        your Profile in{" "}
        <Link href="#" className="text-[#58a6ff]">
          settings
        </Link>
        .
      </div>
      <button className="text-[#8b949e]">
        <X className="h-5 w-5" />
      </button>
    </div>
  )
}
