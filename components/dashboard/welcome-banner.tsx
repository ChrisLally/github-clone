"use client"

import { X } from "lucide-react"

interface WelcomeBannerProps {
  onClose: () => void
}

export function WelcomeBanner({ onClose }: WelcomeBannerProps) {
  return (
    <div className="bg-[#0d1117] border border-[#30363d] rounded-md p-4 mb-6 relative">
      <button
        className="absolute top-4 right-4 text-[#8b949e] hover:text-[#c9d1d9]"
        onClick={onClose}
      >
        <X className="w-4 h-4" />
      </button>
      <h3 className="text-sm font-medium mb-2">Welcome to the new feed!</h3>
      <p className="text-sm text-[#8b949e] mb-2">
        We're updating the cards and ranking all the time, so check back regularly. At first, you might need to
        follow some people or star some repositories to get started ✨
      </p>
      <button className="text-sm text-[#58a6ff]">Send feedback</button>
    </div>
  )
}
