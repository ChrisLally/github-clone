"use client"

import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card" 
import { ArrowRight, Star } from "lucide-react"

interface Repository {
  name: string
  description?: string
  stars: string
  language: string
  languageColor: string
}

const REPOSITORIES: Repository[] = [
  {
    name: "pymodbus-dev / pymodbus",
    description: "A full modbus protocol written in python",
    stars: "1.7k",
    language: "Python",
    languageColor: "#3572a5"
  },
  {
    name: "BuilderIO / demo-editor",
    description: "",
    stars: "2",
    language: "JavaScript",
    languageColor: "#f1e05a"
  },
  {
    name: "stared / liveloopkit",
    description: "Live training loss plot in Jupyter Notebook for Keras, PyTorch and others",
    stars: "1.5k",
    language: "Python",
    languageColor: "#3572a5"
  }
]

export function ExploreRepositories() {
  return (
    <div>
      <h3 className="text-sm font-medium mb-3">Explore repositories</h3>
      <div className="space-y-4">
        {REPOSITORIES.map((repo, index) => (
          <Card key={index} className="bg-[#0d1117] border border-[#30363d] rounded-md p-3">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1">
                <Avatar className="w-4 h-4 rounded-full" style={{ backgroundColor: repo.languageColor }}>
                  <span className="text-[10px]">{repo.name[0]}</span>
                </Avatar>
                <span className="text-xs">{repo.name}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-xs bg-transparent hover:bg-[#30363d] text-[#8b949e]"
              >
                <Star className="w-3.5 h-3.5" />
              </Button>
            </div>
            {repo.description && <p className="text-xs mb-1">{repo.description}</p>}
            <div className="flex items-center gap-3 text-xs text-[#8b949e]">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                <span>{repo.stars}</span>
              </div>
              <div className="flex items-center gap-1">
                <span 
                  className="w-2 h-2 rounded-full" 
                  style={{ backgroundColor: repo.languageColor }}
                ></span>
                <span>{repo.language}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex items-center gap-1 mt-3 text-xs text-[#58a6ff]">
        <span>Explore more</span>
        <ArrowRight className="w-3 h-3" />
      </div>
    </div>
  )
}
