import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Y Naga Vamsi | Software Engineer",
  description: "Innovative Software Engineer specializing in full-stack development with React, Next.js, Node.js, NestJS, PostgreSQL, AWS, and Azure. Building scalable applications and AI-powered solutions.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "NestJS", "AWS", "Azure", "AI Integration"],
  authors: [{ name: "Y Naga Vamsi" }],
  openGraph: {
    title: "Y Naga Vamsi | Software Engineer",
    description: "Innovative Software Engineer specializing in full-stack development with React, Next.js, Node.js, NestJS, PostgreSQL, AWS, and Azure.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
