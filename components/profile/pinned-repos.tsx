"use client"

import Link from "next/link"
import { FileCode2, MoreHorizontal, Star } from "lucide-react"

type PinnedRepoProps = {
  name: string
  description?: string
  language: string
  languageColor: string
  stars: number
}

function PinnedRepo({ name, description, language, languageColor, stars }: PinnedRepoProps) {
  return (
    <div className="border border-[#30363d] rounded-md p-4">
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <FileCode2 className="h-4 w-4 text-[#8b949e] mr-2" />
          <Link href="#" className="text-[#58a6ff] font-semibold hover:underline">
            {name}
          </Link>
          <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full border border-[#30363d] text-[#8b949e]">
            Public
          </span>
        </div>
        <button>
          <MoreHorizontal className="h-4 w-4 text-[#8b949e]" />
        </button>
      </div>
      {description && <p className="text-sm mt-2 text-[#8b949e]">{description}</p>}
      <div className="mt-4 flex items-center text-xs text-[#8b949e]">
        <div className="flex items-center mr-3">
          <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: languageColor }}></div>
          <span>{language}</span>
        </div>
        {stars > 0 && (
          <div className="flex items-center">
            <Star className="h-3 w-3 mr-1" />
            <span>{stars}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function PinnedRepos() {
  const pinnedRepos = [
    {
      name: "DL-Python",
      description: "Deep Learning Deep Python",
      language: "Jupyter Notebook",
      languageColor: "#3fb950",
      stars: 1,
    },
    {
      name: "Machine-Learning",
      description: "",
      language: "Jupyter Notebook",
      languageColor: "#3fb950",
      stars: 2,
    },
    {
      name: "NLP-and-Speech",
      description: "Code for various NLP and Speech Task",
      language: "Jupyter Notebook",
      languageColor: "#3fb950",
      stars: 1,
    },
    {
      name: "Reinforcement-Learning",
      description: "",
      language: "Jupyter Notebook",
      languageColor: "#3fb950",
      stars: 1,
    },
    {
      name: "determine-algorithms-for-Rep_count",
      description: "",
      language: "Python",
      languageColor: "#3572a5",
      stars: 0,
    },
  ]

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-medium text-[#8b949e]">Pinned</h2>
        <button className="text-xs text-[#58a6ff]">Customize your pins</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pinnedRepos.map((repo, index) => (
          <PinnedRepo
            key={index}
            name={repo.name}
            description={repo.description}
            language={repo.language}
            languageColor={repo.languageColor}
            stars={repo.stars}
          />
        ))}
      </div>
    </div>
  )
}
