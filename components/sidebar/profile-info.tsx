"use client"

import Link from "next/link"
import { LinkIcon, MapPin } from "lucide-react"

export default function ProfileInfo() {
  return (
    <div>
      <div className="mt-4">
        <h1 className="text-2xl font-bold text-[#f0f6fc]">chirag singla</h1>
        <p className="text-[#8b949e]">chiragsingla177</p>
      </div>

      <div className="mt-4">
        <button className="w-full py-1 px-3 text-sm font-medium bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] text-[#c9d1d9]">
          Edit profile
        </button>
      </div>

      <div className="mt-4 text-sm">
        <p className="mb-3">Currently working in KAN LABS, NYC USA as an ML Engineer(Remote)</p>

        <div className="flex items-center mt-2 text-[#8b949e]">
          <div className="flex items-center mr-3">
            <span className="mr-1">12</span> followers
          </div>
          <div className="flex items-center">
            <span className="mr-1">3</span> following
          </div>
        </div>

        <div className="mt-3 flex flex-col space-y-1">
          <div className="flex items-center text-[#8b949e]">
            <MapPin className="h-4 w-4 mr-2" />
            Delhi
          </div>
          <div className="flex items-center text-[#8b949e]">
            <LinkIcon className="h-4 w-4 mr-2" />
            <Link href="#" className="text-[#58a6ff] hover:underline">
              https://neuralsol.co/
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
