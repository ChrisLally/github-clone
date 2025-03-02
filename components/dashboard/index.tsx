"use client"

import { LeftSidebar } from "./left-sidebar"
import { MainContent } from "./main-content"
import { RightSidebar } from "./right-sidebar"

export default function GitHubDashboard() {
  return (
    <div className="flex bg-[#0d1117] text-[#c9d1d9]">
      <LeftSidebar />
      <MainContent />
      <RightSidebar />
    </div>
  )
}
