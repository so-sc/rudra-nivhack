import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { siteConfig } from "@/config/siteConfig"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"

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
        <ClerkProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Navbar />
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
