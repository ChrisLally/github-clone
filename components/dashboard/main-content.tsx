"use client"

import { useState } from "react"
import { FeedTabs } from "./feed-tabs"
import { WelcomeBanner } from "./welcome-banner"
import { FeedItem } from "./feed-item"
import { RepositoryCard } from "./repository-card"
import { UserRecommendation } from "./user-recommendation"
import { DashboardFooter } from "./dashboard-footer"

export function MainContent() {
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(true)

  return (
    <div className="flex-1 px-8 py-4">
      <FeedTabs />

      {showWelcomeBanner && (
        <WelcomeBanner onClose={() => setShowWelcomeBanner(false)} />
      )}

      <div className="space-y-4">
        <FeedItem type="fork" title="akshaykahadur21 forked a repository">
          <RepositoryCard 
            repoName="naver / splade"
            description="SPLADE: sparse neural search (SIGIR21, SIGIR22)"
            stars="256"
            language="Python"
            languageColor="#3572a5"
          />
        </FeedItem>

        <FeedItem type="trending" title="Trending repositories">
          <RepositoryCard 
            repoName="tloen / alpaca-lora"
            description="Instruct-tune LLaMA on consumer hardware"
            stars="2.4k"
            language="Jupyter Notebook"
            languageColor="#da5b0b"
          />
        </FeedItem>

        <RepositoryCard 
          repoName="microsoft / semantic-kernel"
          description="Integrate cutting-edge LLM technology quickly and easily into your apps"
          stars="810"
          language="C#"
          languageColor="#178600"
          showStarButton={false}
        />

        <FeedItem type="topic" title="Based on your topics">
          <RepositoryCard 
            repoName="Lightning-AI / lightning"
            description="Deep learning framework to train, deploy, and ship AI products Lightning fast."
            stars="22k"
            language="Python"
            languageColor="#3572a5"
          />
        </FeedItem>

        <FeedItem type="recommended" title="Recommended based on people you follow">
          <div className="grid grid-cols-2 gap-4">
            <UserRecommendation 
              username="saurabhmiittal16"
              fullName="Saurabh Mittal"
              description="Software Engineer | DTU"
              avatarColor="#238636"
            />

            <UserRecommendation 
              username="shivam7374"
              avatarColor="#da5b0b"
            />
          </div>
        </FeedItem>
      </div>

      <DashboardFooter />
    </div>
  )
}
