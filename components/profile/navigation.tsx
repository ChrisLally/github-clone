"use client"

import Link from "next/link"
import { Book, FileCode2, GitBranch, Package, Star } from "lucide-react"

export default function Navigation() {
  return (
    <nav className="border-b border-[#30363d] px-4 py-3 flex items-center space-x-4 text-sm">
      <Link href="#" className="flex items-center px-2 py-1 text-[#c9d1d9] hover:text-[#f0f6fc]">
        <Book className="h-4 w-4 mr-2" />
        Overview
      </Link>
      <Link href="#" className="flex items-center px-2 py-1 text-[#c9d1d9] hover:text-[#f0f6fc]">
        <FileCode2 className="h-4 w-4 mr-2" />
        Repositories
        <span className="ml-2 px-2 py-0.5 rounded-full bg-[#21262d] text-xs">27</span>
      </Link>
      <Link href="#" className="flex items-center px-2 py-1 text-[#c9d1d9] hover:text-[#f0f6fc]">
        <GitBranch className="h-4 w-4 mr-2" />
        Projects
      </Link>
      <Link href="#" className="flex items-center px-2 py-1 text-[#c9d1d9] hover:text-[#f0f6fc]">
        <Package className="h-4 w-4 mr-2" />
        Packages
      </Link>
      <Link href="#" className="flex items-center px-2 py-1 text-[#c9d1d9] hover:text-[#f0f6fc]">
        <Star className="h-4 w-4 mr-2" />
        Stars
      </Link>
    </nav>
  )
}
