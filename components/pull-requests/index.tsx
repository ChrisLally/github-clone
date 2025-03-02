import React from "react";
import PullRequestTabs from "./PullRequestTabs";
import SearchBar from "./SearchBar";
import StatusBar from "./StatusBar";
import PullRequestList from "./PullRequestList";
import ProTip from "./ProTip";

export default function GitHubPullRequests() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col">
      {/* Main content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-6">
        {/* Tabs and search */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <PullRequestTabs />
          <SearchBar />
        </div>

        {/* Status bar */}
        <StatusBar />

        {/* Pull request list */}
        <PullRequestList />

        {/* Tip section */}
        <ProTip />
      </main>
    </div>
  );
}

