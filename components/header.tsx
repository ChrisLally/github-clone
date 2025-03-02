"use client"

import Link from "next/link"
import Image from "next/image"
import { Bell, ChevronDown, Github, Plus } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b border-[#30363d] px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex items-center">
          <Github className="h-8 w-8 text-white hover:text-gray-300 transition-colors" />
        </Link>
        <div className="relative">
          <input
            type="text"
            placeholder="Search or jump to..."
            className="bg-[#161b22] border border-[#30363d] rounded-md py-1 px-3 text-sm w-64 focus:outline-none focus:ring-1 focus:ring-[#388bfd] focus:border-[#388bfd]"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 border border-[#30363d] rounded px-1 text-xs text-[#8b949e]">
            /
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
          <Link href="/pull-requests" className="text-[#c9d1d9] hover:text-[#f0f6fc]">
            Pull requests
          </Link>
          <Link href="#" className="text-[#c9d1d9] hover:text-[#f0f6fc]">
            Issues
          </Link>
          <Link href="#" className="text-[#c9d1d9] hover:text-[#f0f6fc]">
            Codespaces
          </Link>
          <Link href="#" className="text-[#c9d1d9] hover:text-[#f0f6fc]">
            Marketplace
          </Link>
          <Link href="#" className="text-[#c9d1d9] hover:text-[#f0f6fc]">
            Explore
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="h-5 w-5 text-[#c9d1d9]" />
        <div className="flex items-center">
          <Plus className="h-5 w-5 text-[#c9d1d9]" />
          <ChevronDown className="h-3 w-3 text-[#8b949e]" />
        </div>
        <Link href="/profile" className="flex items-center">
          <div className="w-5 h-5 rounded-full bg-[#1f6feb] flex items-center justify-center text-white text-xs">
            <Image
              src="/placeholder.svg?height=20&width=20"
              width={20}
              height={20}
              alt="User avatar"
              className="rounded-full"
            />
          </div>
          <ChevronDown className="h-3 w-3 text-[#8b949e] ml-1" />
        </Link>
      </div>
    </header>
  )
}
