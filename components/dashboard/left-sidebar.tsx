"use client"

import { UserProfile } from "./user-profile"
import { RepositoriesSection } from "./repositories-section"
import { ActivitySection } from "./activity-section"
import { TeamsSection } from "./teams-section"

export function LeftSidebar() {
  return (
    <div className="w-60 border-r border-[#21262d] p-4 flex flex-col">
      <UserProfile />
      <RepositoriesSection />
      <ActivitySection />
      <TeamsSection />
    </div>
  )
}
