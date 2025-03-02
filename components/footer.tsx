"use client"

import Link from "next/link"
import { Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#30363d] py-10 text-xs text-[#8b949e]">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Github className="h-6 w-6 mr-2" />
            <span>© 2023 GitHub, Inc.</span>
          </div>
          <div className="flex space-x-4">
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
        <div className="text-center">
          <p>
            Seeing something unexpected? Take a look at the{" "}
            <Link href="#" className="text-[#58a6ff] hover:underline">
              GitHub profile guide
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
