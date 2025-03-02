"use client"

import ProfileImage from "./profile-image"
import ProfileInfo from "./profile-info"
import Achievements from "./achievements"
import Organizations from "./organizations"

export default function ProfileSidebar() {
  return (
    <div className="md:w-1/4">
      <ProfileImage />
      <ProfileInfo />
      <Achievements />
      <Organizations />
    </div>
  )
}
