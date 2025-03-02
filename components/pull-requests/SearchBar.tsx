import React from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full sm:w-auto flex-1">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8b949e]" />
      <input
        type="text"
        placeholder="is:pr author:chiragsingla17 archived:false is:closed"
        className="w-full pl-9 pr-3 py-1.5 bg-[#010409] border border-[#30363d] rounded-md text-sm text-[#c9d1d9] placeholder-[#8b949e] focus:outline-none focus:ring-1 focus:ring-[#58a6ff] focus:border-[#58a6ff]"
      />
    </div>
  );
} 