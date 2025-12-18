"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-white/40">
          © {new Date().getFullYear()} Y Naga Vamsi. Built with precision.
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/vamsiy78"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-all"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/y-naga-vamsi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-all"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:yadavallinagavamsi@gmail.com"
            className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-all"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
