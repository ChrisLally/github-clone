import { Search, ChevronDown, GitPullRequest, LightbulbIcon } from "lucide-react"
import Link from "next/link"

export default function GitHubPullRequests() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col">
      {/* Main content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-6">
        {/* Tabs and search */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <div className="flex space-x-1 mb-3 sm:mb-0">
            <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-[#1f6feb] text-white">Created</button>
            <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d]">
              Assigned
            </button>
            <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d]">
              Mentioned
            </button>
            <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d]">
              Review requests
            </button>
          </div>
          <div className="relative w-full sm:w-auto flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8b949e]" />
            <input
              type="text"
              placeholder="is:pr author:chiragsingla17 archived:false is:closed"
              className="w-full pl-9 pr-3 py-1.5 bg-[#010409] border border-[#30363d] rounded-md text-sm text-[#c9d1d9] placeholder-[#8b949e] focus:outline-none focus:ring-1 focus:ring-[#58a6ff] focus:border-[#58a6ff]"
            />
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between border-b border-[#30363d] pb-3">
          <div className="flex items-center space-x-3">
            <div className="flex items-center text-sm text-[#8b949e]">
              <GitPullRequest className="h-4 w-4 mr-1.5" />
              <span>0 Open</span>
            </div>
            <div className="flex items-center text-sm">
              <GitPullRequest className="h-4 w-4 mr-1.5 text-[#a371f7]" />
              <span>3 Closed</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="flex items-center px-2 py-1 text-sm bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d]">
              <span>Visibility</span>
              <ChevronDown className="ml-1 h-3.5 w-3.5" />
            </button>
            <button className="flex items-center px-2 py-1 text-sm bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d]">
              <span>Organization</span>
              <ChevronDown className="ml-1 h-3.5 w-3.5" />
            </button>
            <button className="flex items-center px-2 py-1 text-sm bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d]">
              <span>Sort</span>
              <ChevronDown className="ml-1 h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Pull request list */}
        <div className="divide-y divide-[#30363d]">
          {/* PR Item 1 */}
          <div className="py-3 px-2 hover:bg-[#161b22]">
            <div className="flex items-start">
              <div className="mr-2 mt-1">
                <GitPullRequest className="h-4 w-4 text-[#a371f7]" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline">
                  <Link href="#" className="font-medium text-[#58a6ff] hover:underline">
                    chiragsingla17/Vector Staging
                  </Link>
                </div>
                <div className="text-xs text-[#8b949e] mt-1">#2 by chiragsingla17 was merged</div>
              </div>
            </div>
          </div>

          {/* PR Item 2 */}
          <div className="py-3 px-2 hover:bg-[#161b22]">
            <div className="flex items-start">
              <div className="mr-2 mt-1">
                <GitPullRequest className="h-4 w-4 text-[#a371f7]" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline">
                  <Link href="#" className="font-medium text-[#58a6ff] hover:underline">
                    chiragsingla17/Vector Mongo
                  </Link>
                </div>
                <div className="text-xs text-[#8b949e] mt-1">#1 by chiragsingla17 was merged</div>
              </div>
            </div>
          </div>

          {/* PR Item 3 */}
          <div className="py-3 px-2 hover:bg-[#161b22]">
            <div className="flex items-start">
              <div className="mr-2 mt-1">
                <GitPullRequest className="h-4 w-4 text-[#a371f7]" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline">
                  <Link href="#" className="font-medium text-[#58a6ff] hover:underline">
                    sachin235/AgroAI Added ml files
                  </Link>
                </div>
                <div className="text-xs text-[#8b949e] mt-1">#11 by chiragsingla17 was merged</div>
              </div>
              <div className="text-xs text-[#8b949e] flex items-center">
                <span className="mr-1">1</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                  <path d="M1.5 2.75a.25.25 0 0 1 .25-.25h12.5a.25.25 0 0 1 .25.25v8.5a.25.25 0 0 1-.25.25h-6.5a.75.75 0 0 0-.53.22L4.5 14.44v-2.19a.75.75 0 0 0-.75-.75h-2a.25.25 0 0 1-.25-.25v-8.5zM1.75 1A1.75 1.75 0 0 0 0 2.75v8.5C0 12.216.784 13 1.75 13H3v1.543a1.457 1.457 0 0 0 2.487 1.03L8.061 13h6.189A1.75 1.75 0 0 0 16 11.25v-8.5A1.75 1.75 0 0 0 14.25 1H1.75z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Tip section */}
        <div className="flex items-center justify-center mt-6 text-sm text-[#8b949e]">
          <LightbulbIcon className="h-4 w-4 mr-2" />
          <span>ProTip! Type</span>
          <kbd className="mx-1 px-1.5 py-0.5 bg-[#21262d] border border-[#30363d] rounded text-xs">g</kbd>
          <span>on any issue or pull request to go back to the pull request listing page.</span>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-6 mt-12">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <svg
              height="24"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="24"
              fill="currentColor"
              className="text-[#8b949e]"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
            <span className="ml-2 text-xs text-[#8b949e]">© 2023 GitHub, Inc.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
            <Link href="#" className="text-[#58a6ff] hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-[#58a6ff] hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-[#58a6ff] hover:underline">
              Security
            </Link>
            <Link href="#" className="text-[#58a6ff] hover:underline">
              Status
            </Link>
            <Link href="#" className="text-[#58a6ff] hover:underline">
              Docs
            </Link>
            <Link href="#" className="text-[#58a6ff] hover:underline">
              Contact GitHub
            </Link>
            <Link href="#" className="text-[#58a6ff] hover:underline">
              Pricing
            </Link>
            <Link href="#" className="text-[#58a6ff] hover:underline">
              API
            </Link>
            <Link href="#" className="text-[#58a6ff] hover:underline">
              Training
            </Link>
            <Link href="#" className="text-[#58a6ff] hover:underline">
              Blog
            </Link>
            <Link href="#" className="text-[#58a6ff] hover:underline">
              About
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

