import React from "react";
import PullRequestItem from "./PullRequestItem";

// Sample data for pull requests
const pullRequests = [
  {
    id: 1,
    title: "chiragsingla17/Vector Staging",
    number: 2,
    author: "chiragsingla17",
    status: "merged"
  },
  {
    id: 2,
    title: "chiragsingla17/Vector Mongo",
    number: 1,
    author: "chiragsingla17",
    status: "merged"
  },
  {
    id: 3,
    title: "sachin235/AgroAI Added ml files",
    number: 11,
    author: "chiragsingla17",
    status: "merged",
    commentCount: 1
  }
];

export default function PullRequestList() {
  return (
    <div className="divide-y divide-[#30363d]">
      {pullRequests.map((pr) => (
        <PullRequestItem
          key={pr.id}
          title={pr.title}
          number={pr.number}
          author={pr.author}
          status={pr.status}
          commentCount={pr.commentCount}
        />
      ))}
    </div>
  );
} 