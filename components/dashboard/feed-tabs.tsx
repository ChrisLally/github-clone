"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function FeedTabs() {
  return (
    <Tabs defaultValue="for-you" className="mb-4">
      <TabsList className="bg-transparent border-b border-[#21262d] w-full justify-start h-auto p-0 rounded-none">
        <TabsTrigger
          value="following"
          className="px-4 py-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-transparent text-sm"
        >
          Following
        </TabsTrigger>
        <TabsTrigger
          value="for-you"
          className="px-4 py-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#f78166] text-sm"
        >
          For you
          <Badge className="ml-1.5 bg-[#238636] text-[#f0f6fc] text-[10px] rounded-full px-1.5 py-0">Beta</Badge>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
