"use client"

import Navigation from "./navigation"
import Alert from "./alert"
import ProfileSidebar from "../sidebar/profile-sidebar"
import ProfileContent from "./profile-content"

export default function GitHubProfile() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      <Navigation />
      <Alert />

      <div className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        <ProfileSidebar />
        <ProfileContent />
      </div>
    </div>
  )
}
