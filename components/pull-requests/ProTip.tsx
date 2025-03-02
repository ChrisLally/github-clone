import React from "react";
import { LightbulbIcon } from "lucide-react";

export default function ProTip() {
  return (
    <div className="flex items-center justify-center mt-6 text-sm text-[#8b949e]">
      <LightbulbIcon className="h-4 w-4 mr-2" />
      <span>ProTip! Type</span>
      <kbd className="mx-1 px-1.5 py-0.5 bg-[#21262d] border border-[#30363d] rounded text-xs">g</kbd>
      <span>on any issue or pull request to go back to the pull request listing page.</span>
    </div>
  );
} 