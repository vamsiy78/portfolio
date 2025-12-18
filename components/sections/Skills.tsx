"use client"

import { motion } from "framer-motion"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { 
  Code, Database, Cloud, Shield, Cpu, Terminal,
  FileCode, Server, Globe, Lock, Zap, GitBranch
} from "lucide-react"

const skillsRow1 = [
  { name: "React", icon: <Code className="h-4 w-4 text-white/50" /> },
  { name: "Next.js", icon: <Globe className="h-4 w-4 text-white/50" /> },
  { name: "TypeScript", icon: <FileCode className="h-4 w-4 text-white/50" /> },
  { name: "Node.js", icon: <Server className="h-4 w-4 text-white/50" /> },
  { name: "NestJS", icon: <Code className="h-4 w-4 text-white/50" /> },
  { name: "Python", icon: <Terminal className="h-4 w-4 text-white/50" /> },
  { name: "GraphQL", icon: <Zap className="h-4 w-4 text-white/50" /> },
  { name: "REST APIs", icon: <Globe className="h-4 w-4 text-white/50" /> },
]

const skillsRow2 = [
  { name: "AWS", icon: <Cloud className="h-4 w-4 text-white/50" /> },
  { name: "Azure", icon: <Cloud className="h-4 w-4 text-white/50" /> },
  { name: "Docker", icon: <Server className="h-4 w-4 text-white/50" /> },
  { name: "PostgreSQL", icon: <Database className="h-4 w-4 text-white/50" /> },
  { name: "MongoDB", icon: <Database className="h-4 w-4 text-white/50" /> },
  { name: "Redis", icon: <Cpu className="h-4 w-4 text-white/50" /> },
  { name: "Git", icon: <GitBranch className="h-4 w-4 text-white/50" /> },
  { name: "CI/CD", icon: <Zap className="h-4 w-4 text-white/50" /> },
]

const skillsRow3 = [
  { name: "JWT", icon: <Lock className="h-4 w-4 text-white/50" /> },
  { name: "OAuth 2.0", icon: <Shield className="h-4 w-4 text-white/50" /> },
  { name: "Jest", icon: <Code className="h-4 w-4 text-white/50" /> },
  { name: "OpenAI API", icon: <Cpu className="h-4 w-4 text-white/50" /> },
  { name: "OpenCV", icon: <Cpu className="h-4 w-4 text-white/50" /> },
  { name: "Tailwind", icon: <Code className="h-4 w-4 text-white/50" /> },
  { name: "Figma", icon: <FileCode className="h-4 w-4 text-white/50" /> },
  { name: "Linux", icon: <Terminal className="h-4 w-4 text-white/50" /> },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
        </motion.div>
      </div>

      <div className="space-y-4">
        <InfiniteMovingCards items={skillsRow1} direction="left" speed="slow" />
        <InfiniteMovingCards items={skillsRow2} direction="right" speed="slow" />
        <InfiniteMovingCards items={skillsRow3} direction="left" speed="slow" />
      </div>
    </section>
  )
}
