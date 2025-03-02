"use client"

import { Avatar } from "@/components/ui/avatar"
import { RepositoryCard } from "./repository-card"

interface FeedItemProps {
  type: "fork" | "trending" | "topic" | "recommended"
  title: string
  children: React.ReactNode
}

export function FeedItem({ type, title, children }: FeedItemProps) {
  return (
    <>
      <div className="flex items-center gap-2 mb-2">
        <Avatar className="w-5 h-5 rounded-full">
          {type === "trending" ? (
            <span className="text-xs">T</span>
          ) : type === "topic" ? (
            <span className="text-xs">B</span>
          ) : type === "recommended" ? (
            <span className="text-xs">R</span>
          ) : (
            <img src="/placeholder.svg?height=20&width=20" alt="User avatar" />
          )}
        </Avatar>
        <span className="text-sm">{title}</span>
        <span className="text-[#8b949e]">•</span>
        {type === "trending" && <button className="text-xs text-[#58a6ff]">Show more</button>}
      </div>
      {children}
    </>
  )
}
