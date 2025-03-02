"use client"

import { Avatar } from "@/components/ui/avatar"
import { ChevronDown } from "lucide-react"

export function UserProfile() {
  return (
    <div className="flex items-center gap-2 mb-6">
      <Avatar className="w-5 h-5 rounded-full">
        <img src="/placeholder.svg?height=20&width=20" alt="User avatar" />
      </Avatar>
      <span className="text-sm font-medium">chiragsingla177</span>
      <ChevronDown className="w-3 h-3 ml-auto" />
    </div>
  )
}
