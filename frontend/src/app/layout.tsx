import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import "./globals.css"
import { siteConfig } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-inter">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
