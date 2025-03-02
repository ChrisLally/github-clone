"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Book, Plus, Search } from "lucide-react"

const REPOSITORIES = [
  "chiragsingla17/Vector",
  "chiragsingla17/MorphsUI",
  "chiragsingla17/airpop3",
  "BuilderIO/figma-html",
  "UpVoAt/mygita-client",
  "UpVoAt/upvoa-client",
  "chiragsingla17/alib",
]

export function RepositoriesSection() {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xs font-medium">Top Repositories</h3>
        <Button
          variant="outline"
          size="sm"
          className="h-6 px-2 py-0 text-xs bg-[#238636] hover:bg-[#2ea043] text-white border-[#238636]"
        >
          <Plus className="w-3 h-3 mr-1" />
          New
        </Button>
      </div>
      <div className="relative mb-2">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-[#6e7681]" />
        <Input
          placeholder="Find a repository..."
          className="h-7 pl-8 text-xs bg-[#010409] border-[#30363d] rounded-md"
        />
      </div>
      <ul className="space-y-1">
        {REPOSITORIES.map((repo, index) => (
          <li key={index} className="flex items-center gap-2 py-1">
            <Book className="w-3.5 h-3.5 text-[#8b949e]" />
            <span className="text-xs">{repo}</span>
          </li>
        ))}
      </ul>
      <button className="text-xs text-[#8b949e] mt-2">Show more</button>
    </div>
  )
}
