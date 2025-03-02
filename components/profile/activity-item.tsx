"use client"

import Link from "next/link"
import Image from "next/image"
import { LucideIcon, MoreHorizontal } from "lucide-react"
import { ReactNode } from "react"

type ActivityItemProps = {
  icon: ReactNode
  title: string
  date?: string
  showMenu?: boolean
  children: ReactNode
}

export default function ActivityItem({ icon, title, date, showMenu = false, children }: ActivityItemProps) {
  return (
    <div className="mb-6 border-l border-[#30363d] pl-4 ml-3 relative">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#161b22] border border-[#30363d] flex items-center justify-center">
        {icon}
      </div>
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-medium">{title}</h3>
        {showMenu ? (
          <button>
            <MoreHorizontal className="h-4 w-4 text-[#8b949e]" />
          </button>
        ) : date ? (
          <div className="text-xs text-[#8b949e]">{date}</div>
        ) : null}
      </div>
      <div className="mt-2">{children}</div>
    </div>
  )
}
