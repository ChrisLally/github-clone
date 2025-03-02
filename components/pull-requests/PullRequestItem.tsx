import React from "react";
import { GitPullRequest } from "lucide-react";
import Link from "next/link";

interface PullRequestItemProps {
  title: string;
  number: number;
  author: string;
  status: string;
  commentCount?: number;
}

export default function PullRequestItem({ title, number, author, status, commentCount }: PullRequestItemProps) {
  return (
    <div className="py-3 px-2 hover:bg-[#161b22]">
      <div className="flex items-start">
        <div className="mr-2 mt-1">
          <GitPullRequest className="h-4 w-4 text-[#a371f7]" />
        </div>
        <div className="flex-1">
          <div className="flex items-baseline">
            <Link href="#" className="font-medium text-[#58a6ff] hover:underline">
              {title}
            </Link>
          </div>
          <div className="text-xs text-[#8b949e] mt-1">#{number} by {author} was {status}</div>
        </div>
        {commentCount && (
          <div className="text-xs text-[#8b949e] flex items-center">
            <span className="mr-1">{commentCount}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path d="M1.5 2.75a.25.25 0 0 1 .25-.25h12.5a.25.25 0 0 1 .25.25v8.5a.25.25 0 0 1-.25.25h-6.5a.75.75 0 0 0-.53.22L4.5 14.44v-2.19a.75.75 0 0 0-.75-.75h-2a.25.25 0 0 1-.25-.25v-8.5zM1.75 1A1.75 1.75 0 0 0 0 2.75v8.5C0 12.216.784 13 1.75 13H3v1.543a1.457 1.457 0 0 0 2.487 1.03L8.061 13h6.189A1.75 1.75 0 0 0 16 11.25v-8.5A1.75 1.75 0 0 0 14.25 1H1.75z"></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
} 