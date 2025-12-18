"use client"

import { FloatingDock } from "@/components/ui/floating-dock"
import { Home, User, Briefcase, FolderOpen, Award, Mail, Code2 } from "lucide-react"

const navItems = [
  { title: "Home", icon: <Home className="h-full w-full text-white/60" />, href: "#" },
  { title: "About", icon: <User className="h-full w-full text-white/60" />, href: "#about" },
  { title: "Skills", icon: <Code2 className="h-full w-full text-white/60" />, href: "#skills" },
  { title: "Experience", icon: <Briefcase className="h-full w-full text-white/60" />, href: "#experience" },
  { title: "Projects", icon: <FolderOpen className="h-full w-full text-white/60" />, href: "#projects" },
  { title: "Achievements", icon: <Award className="h-full w-full text-white/60" />, href: "#certifications" },
  { title: "Contact", icon: <Mail className="h-full w-full text-white/60" />, href: "#contact" },
]

export default function FloatingNav() {
  return <FloatingDock items={navItems} />
}
