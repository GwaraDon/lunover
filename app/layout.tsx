import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import  ThemeWrapper from "@/components/theme-wrapper"
import  { stockholmFont , verdanaFont }  from '@/lib/font';

export const metadata: Metadata = {
  title: "Kulturfestivalen 2025 | Stockholm",
  description: "Kulturfestivalen i Stockholm, 13-17 augusti 2025. Fri entré, 5 dagar, 6 områden.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${stockholmFont.className} ${verdanaFont.className}`} suppressHydrationWarning>
       <ThemeWrapper>
        {children}
      </ThemeWrapper>
      </body>
    </html>
  )
}
