"use client"

import Link from "next/link"

export default function Organizations() {
  return (
    <div className="mt-6">
      <h2 className="font-medium mb-2">Organizations</h2>
      <div className="flex flex-wrap gap-2">
        <Link href="#" className="block w-9 h-9 bg-[#161b22] rounded-md border border-[#30363d]">
          <div className="w-full h-full flex items-center justify-center text-[#58a6ff] font-bold">G</div>
        </Link>
        <Link href="#" className="block w-9 h-9 bg-[#161b22] rounded-md border border-[#30363d]">
          <div className="w-full h-full flex items-center justify-center text-yellow-400 font-bold">P</div>
        </Link>
        <Link href="#" className="block w-9 h-9 bg-[#161b22] rounded-md border border-[#30363d]">
          <div className="w-full h-full flex items-center justify-center text-green-400 font-bold">N</div>
        </Link>
        <Link href="#" className="block w-9 h-9 bg-[#161b22] rounded-md border border-[#30363d]">
          <div className="w-full h-full flex items-center justify-center text-purple-400">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  )
}
