"use client"

import PinnedRepos from "./pinned-repos"
import ContributionGraph from "./contribution-graph"
import ContributionActivity from "./contribution-activity"

export default function ProfileContent() {
  return (
    <div className="md:w-3/4">
      <PinnedRepos />
      <ContributionGraph />
      <ContributionActivity />
    </div>
  )
}
