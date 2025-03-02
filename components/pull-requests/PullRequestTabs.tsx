import React from "react";

export default function PullRequestTabs() {
  return (
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
  );
} 