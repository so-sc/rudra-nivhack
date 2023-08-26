"use client"

import { ThemeToggle } from "@/components/ui/theme-toggle"
import { siteConfig } from "@/config/siteConfig"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const pathName = usePathname()

  return (
    // If path is landing page then text color should be black because the bg in landing is dark
    <nav
      className={`${
        pathName === "/" ? "text-background" : ""
      } flex fixed w-full backdrop-blur-sm items-center px-4 py-4 justify-between z-50`}
    >
      <div className="flex gap-8 items-center">
        <div>
          <p className="scroll-m-20 text-xl font-semibold uppercase">
            <Link href="/">{siteConfig.name}</Link>
          </p>
        </div>
        <ul className="flex gap-4">
          <li className="cursor-pointer hover:underline">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      {/* <ThemeToggle /> */}
    </nav>
  )
}
