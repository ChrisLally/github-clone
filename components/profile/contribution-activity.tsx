"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { GitBranch, GitCommit, GitFork, GitMerge, GitPullRequest } from "lucide-react"
import ActivityItem from "./activity-item"

export default function ContributionActivity() {
  const [year, setYear] = useState("2023")

  const yearButtons = ["2023", "2022", "2021", "2020", "2019", "2018"]

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-medium">Contribution activity</h2>
        <div className="flex">
          {yearButtons.map((yearValue, index) => (
            <button
              key={yearValue}
              className={`px-3 py-1 text-sm 
                ${index === 0 ? "rounded-l-md" : ""} 
                ${index === yearButtons.length - 1 ? "rounded-r-md" : ""} 
                ${year === yearValue ? "bg-[#1f6feb] text-white" : "bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d]"}`}
              onClick={() => setYear(yearValue)}
            >
              {yearValue}
            </button>
          ))}
        </div>
      </div>

      <div className="text-sm text-[#8b949e] mb-4">March 2023</div>

      {/* Activity Item 1 */}
      <ActivityItem 
        icon={<GitCommit className="h-3 w-3 text-[#8b949e]" />} 
        title="Created 21 commits in 2 repositories"
        showMenu
      >
        <div className="pl-4 border-l border-[#30363d]">
          <div className="mb-2">
            <Link href="#" className="text-[#58a6ff] hover:underline">
              chiragsingla177/Vector
            </Link>
            <span className="ml-1 text-[#8b949e]">20 commits</span>
          </div>
          <div>
            <Link href="#" className="text-[#58a6ff] hover:underline">
              chiragsingla177/MorphoUI
            </Link>
            <span className="ml-1 text-[#8b949e]">1 commit</span>
          </div>
        </div>
      </ActivityItem>

      {/* Activity Item 2 */}
      <ActivityItem 
        icon={<GitBranch className="h-3 w-3 text-[#8b949e]" />} 
        title="Created 1 repository"
        date="Mar 13"
      >
        <div className="flex items-center">
          <div className="w-4 h-4 mr-2 text-[#8b949e]">🔒</div>
          <Link href="#" className="text-[#58a6ff] hover:underline">
            chiragsingla177/MorphoUI
          </Link>
        </div>
        <div className="mt-1 flex items-center text-xs">
          <span className="px-1 py-0.5 rounded-full bg-[#ffdf5d] text-[#24292e] mr-1">●</span>
          <span className="text-[#8b949e]">Language: </span>
          <span className="ml-1">Rust</span>
        </div>
      </ActivityItem>

      {/* Activity Item 3 */}
      <ActivityItem 
        icon={<GitPullRequest className="h-3 w-3 text-[#8b949e]" />} 
        title="Opened 2 pull requests in 1 repository"
        showMenu
      >
        <div>
          <div className="mb-2">
            <Link href="#" className="text-[#58a6ff] hover:underline">
              chiragsingla177/Vector
            </Link>
          </div>
          <div className="pl-4 border-l border-[#30363d]">
            <div className="mb-2 flex items-center">
              <div className="w-3 h-3 mr-2 text-[#8b949e]">
                <GitMerge className="h-3 w-3 text-purple-500" />
              </div>
              <span className="text-[#8b949e]">Staging</span>
              <span className="ml-auto text-xs text-[#8b949e]">Mar 17</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 mr-2 text-[#8b949e]">
                <GitMerge className="h-3 w-3 text-purple-500" />
              </div>
              <span className="text-[#8b949e]">Mongo</span>
              <span className="ml-auto text-xs text-[#8b949e]">Mar 17</span>
            </div>
          </div>
        </div>
      </ActivityItem>

      {/* Activity Item 4 */}
      <ActivityItem 
        icon={<GitFork className="h-3 w-3 text-[#8b949e]" />} 
        title="Opened their first issue on GitHub in BuilderIO/figma-html"
        date="Mar 15"
      >
        <div className="mt-2 border border-[#30363d] rounded-md overflow-hidden">
          <div className="p-4 bg-[#0d1117]">
            <Image
              src="/placeholder.svg?height=200&width=400"
              width={400}
              height={200}
              alt="Issue screenshot"
              className="w-full h-auto"
            />
          </div>
          <div className="p-4 bg-[#161b22]">
            <div className="text-xs text-[#3fb950] font-medium mb-1">First Issue</div>
            <div className="text-sm mb-2">When importing JSON Files, Layers not structured in Frames</div>
          </div>
        </div>
      </ActivityItem>

      <div className="flex justify-center mt-8">
        <button className="py-1.5 px-4 bg-[#21262d] border border-[#30363d] rounded-md text-sm hover:bg-[#30363d]">
          Show more activity
        </button>
      </div>
    </div>
  )
}
