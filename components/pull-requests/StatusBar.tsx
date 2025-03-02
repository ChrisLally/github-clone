import React from "react";
import { ChevronDown, GitPullRequest } from "lucide-react";

export default function StatusBar() {
  return (
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
  );
} 