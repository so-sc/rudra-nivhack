import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { siteConfig } from "@/config/siteConfig"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import QueryProvider from "@/components/provider/query-provider"

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
        <QueryProvider>
          <ClerkProvider>
            <ThemeProvider attribute="class" defaultTheme="light">
              <Navbar />
              {children}
            </ThemeProvider>
          </ClerkProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
