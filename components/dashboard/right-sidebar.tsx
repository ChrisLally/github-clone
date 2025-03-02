"use client"

import { useState } from "react"
import { ChevronDown, Code, FileCode, Github, X } from "lucide-react"
import { PromoCard } from "./promo-card"
import { LatestChanges } from "./latest-changes"
import { ExploreRepositories } from "./explore-repositories"

export function RightSidebar() {
  const [showGalaxyPromo, setShowGalaxyPromo] = useState(true)
  const [showCodespacesPromo, setShowCodespacesPromo] = useState(true)

  return (
    <div className="w-72 p-4">
      <div className="flex justify-between mb-4">
        <button className="text-sm text-[#58a6ff]">Send feedback</button>
        <div className="flex items-center gap-2">
          <span className="text-sm">Filter</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </div>
      </div>

      {showGalaxyPromo && (
        <PromoCard
          title="Galaxy 2023"
          description={
            <>
              <p className="text-sm font-medium">Empower developers.</p>
              <p className="text-sm font-medium">Supercharge productivity.</p>
              <p className="text-sm">Register now for our virtual enterprise event on March 28-31.</p>
            </>
          }
          ctaText="Register now"
          icon={<Github className="w-5 h-5" />}
          onClose={() => setShowGalaxyPromo(false)}
          gradient={true}
        />
      )}

      {showCodespacesPromo && (
        <PromoCard
          title="Start coding instantly with GitHub Codespaces"
          description={
            <p className="text-xs text-[#8b949e]">
              Spin up fully configured dev environments designed for the project you're working on that start in
              seconds. Get up to 60 hours a month of free time.
            </p>
          }
          ctaText="Get started"
          onClose={() => setShowCodespacesPromo(false)}
          icon={
            <div className="flex gap-2 mb-3">
              <div className="w-5 h-5 bg-[#30363d] rounded-md flex items-center justify-center">
                <Code className="w-3 h-3" />
              </div>
              <div className="w-5 h-5 bg-[#30363d] rounded-md flex items-center justify-center">
                <FileCode className="w-3 h-3" />
              </div>
            </div>
          }
        />
      )}

      <LatestChanges />
      <ExploreRepositories />
    </div>
  )
}
