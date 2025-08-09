import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import BackButtonInjector from "@/components/back-button-injector"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GameHub - Play Amazing Web Games",
  description:
    "Discover and play the best web games across different categories including Action, Puzzle, Racing, and Arcade games.",
    generator: 'GameHub'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BackButtonInjector />
      </body>
    </html>
  )
}
