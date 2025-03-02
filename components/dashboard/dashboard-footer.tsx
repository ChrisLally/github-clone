"use client"

import { Github } from "lucide-react"

export function DashboardFooter() {
  return (
    <footer className="mt-8 pt-6 border-t border-[#21262d] text-xs text-[#8b949e]">
      <div className="flex items-center gap-2 mb-4">
        <Github className="w-4 h-4" />
        <span>© 2023 GitHub, Inc.</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <div>Blog</div>
          <div>About</div>
          <div>Shop</div>
          <div>Contact GitHub</div>
          <div>Pricing</div>
        </div>
        <div className="space-y-2">
          <div>API</div>
          <div>Training</div>
          <div>Status</div>
          <div>Security</div>
        </div>
        <div className="space-y-2">
          <div>Terms</div>
          <div>Privacy</div>
          <div>Docs</div>
        </div>
      </div>
    </footer>
  )
}
