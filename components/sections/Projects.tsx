"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MacbookScroll } from "@/components/ui/macbook-scroll"
import {
  X,
  Github,
  ExternalLink,
  Car,
  Lock,
  Plane,
  Database,
  ArrowUpRight,
  Sparkles,
  Shield,
  Zap,
  Globe,
} from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Decentralized File Storage",
    tagline: "90% improved reliability via blockchain",
    tech: ["IPFS", "Solidity", "Smart Contracts", "Web3.js", "Ethereum"],
    description:
      "A decentralized file storage system leveraging IPFS for distributed storage and Ethereum smart contracts for access control. Features include content-addressed storage, cryptographic file verification, peer-to-peer distribution, and immutable audit trails.",
    icon: Database,
    featured: true,
    image: "/projects/blockchain.jpeg",
    stats: [
      { value: "90%", label: "Reliability", sublabel: "vs centralized", color: "green" },
      { value: "0", label: "Single Points of Failure", sublabel: "Fully distributed", color: "purple" },
    ],
    features: [
      { icon: Shield, label: "Cryptographic Security", sublabel: "SHA-256 hashing" },
      { icon: Globe, label: "P2P Distribution", sublabel: "Global network" },
      { icon: Zap, label: "Fast Retrieval", sublabel: "Content-addressed" },
    ],
  },
  {
    id: 2,
    title: "Real-Time Vehicle Plate Detection",
    tagline: "92% accuracy with OpenCV & Tesseract",
    tech: ["Python", "OpenCV", "Tesseract OCR"],
    description:
      "Live vehicle plate detection using custom Haar cascades and preprocessing techniques for enhanced recognition accuracy.",
    icon: Car,
    image: "/projects/numberplatedetection.jpeg",
    github: "https://github.com/vamsiy78/Real-time-vehicle-plate-detection",
  },
  {
    id: 3,
    title: "Secure Chat (RSA Encryption)",
    tagline: "End-to-end encrypted messaging",
    tech: ["Python", "Sockets", "RSA"],
    description:
      "Encrypted chat platform with cryptographic key validation and secure session management for complete message privacy.",
    icon: Lock,
    image: "/projects/securechat.jpeg",
    github: "https://github.com/vamsiy78/RSA_Chat_Implementation",
  },
  {
    id: 4,
    title: "Travel Itinerary Planner",
    tagline: "40% faster queries with AI suggestions",
    tech: ["Django", "MySQL", "AI Integration"],
    description:
      "Responsive trip planning app with AI-based suggestions, email notifications, and optimized SQL performance.",
    icon: Plane,
    image: "/projects/iternary.jpeg",
  },
]

const colorMap: Record<string, string> = {
  green: "text-emerald-400",
  purple: "text-violet-400",
  cyan: "text-cyan-400",
  amber: "text-amber-400",
}

const bgColorMap: Record<string, string> = {
  green: "from-emerald-500/10",
  purple: "from-violet-500/10",
  cyan: "from-cyan-500/10",
  amber: "from-amber-500/10",
}

type Project = {
  id: number
  title: string
  tagline: string
  tech: string[]
  description: string
  icon: typeof Database
  image: string
  featured?: boolean
  github?: string
  demo?: string
  stats?: { value: string; label: string; sublabel: string; color: string }[]
  features?: { icon: typeof Shield; label: string; sublabel: string }[]
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative">
      {/* MacBook Scroll Section - Desktop Only */}
      <div className="relative bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden hidden md:block">
        <MacbookScroll
          src={featuredProject?.image}
          title={
            <div className="flex flex-col items-center gap-4">
              <span className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                Featured Work
              </span>
              <p className="text-white/40 text-base md:text-lg font-normal max-w-md text-center">
                {featuredProject?.title}
              </p>
            </div>
          }
          badge={
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-400">
              <Sparkles className="h-4 w-4" />
              Featured Project
            </span>
          }
          showGradient={true}
        />
      </div>

      {/* Mobile Featured Hero - Shows only on mobile */}
      {featuredProject && (
        <div className="md:hidden relative py-16 px-4 bg-gradient-to-b from-black to-[#050505] overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs text-cyan-400 mb-4">
                <Sparkles className="h-3 w-3" />
                Featured Project
              </span>
              <h2 className="text-2xl font-bold mb-2">Featured Work</h2>
              <p className="text-white/50 text-sm">{featuredProject.title}</p>
            </motion.div>

            {/* Featured Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-white/10 mb-6"
            >
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-cyan-400 text-sm font-medium">{featuredProject.tagline}</p>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Featured Project - Bento Grid */}
      {featuredProject && (
        <div className="relative py-12 md:py-24 px-4 md:px-6 bg-black overflow-hidden">
          {/* Background Effects - Hidden on mobile for performance */}
          <div className="absolute inset-0 hidden md:block">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-violet-500/10 to-transparent" />
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[1000px] h-[300px] md:h-[600px] bg-cyan-500/5 rounded-full blur-[100px] md:blur-[150px]" />

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-16"
            >
              <p className="text-cyan-400 text-xs md:text-sm font-medium tracking-wider uppercase mb-2 md:mb-3">
                Project Spotlight
              </p>
              <h2 className="text-2xl md:text-4xl font-bold">{featuredProject.title}</h2>
            </motion.div>

            {/* Bento Grid - Responsive */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {/* Main Description Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="col-span-2 md:col-span-2 md:row-span-2 group relative p-5 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-[10px] md:text-xs text-cyan-400 w-fit mb-3 md:mb-4">
                    <Database className="h-3 w-3" />
                    Blockchain
                  </div>
                  <p className="text-base md:text-2xl font-semibold text-white/90 mb-2 md:mb-3">
                    {featuredProject.tagline}
                  </p>
                  <p className="text-white/50 text-xs md:text-base leading-relaxed flex-1 line-clamp-4 md:line-clamp-none">
                    {featuredProject.description}
                  </p>
                  <div className="flex gap-2 md:gap-3 mt-4 md:mt-6">
                    <Button size="sm" className="bg-white text-black hover:bg-white/90 text-xs md:text-sm h-8 md:h-9 px-3 md:px-4">
                      <Github className="mr-1.5 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                      Source
                    </Button>
                    <Button size="sm" variant="outline" className="border-white/20 hover:bg-white/5 text-xs md:text-sm h-8 md:h-9 px-3 md:px-4">
                      <ExternalLink className="mr-1.5 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Stat Cards */}
              {featuredProject.stats?.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="col-span-1 group relative p-4 md:p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${bgColorMap[stat.color]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative z-10">
                    <div className={`text-2xl md:text-4xl font-bold ${colorMap[stat.color]} mb-0.5 md:mb-1`}>
                      {stat.value}
                    </div>
                    <p className="text-white/70 text-xs md:text-sm font-medium line-clamp-1">{stat.label}</p>
                    <p className="text-white/40 text-[10px] md:text-xs mt-0.5 hidden md:block">{stat.sublabel}</p>
                  </div>
                </motion.div>
              ))}

              {/* Tech Stack Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="col-span-2 group relative p-4 md:p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-wider mb-2 md:mb-3">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {featuredProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-[10px] md:text-sm hover:border-cyan-500/30 hover:text-white transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Feature Cards - Hidden on very small screens, show 2 cols on mobile */}
              {featuredProject.features?.map((feature, i) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="col-span-1 group relative p-3 md:p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-amber-400/80 mb-1.5 md:mb-2" />
                    <p className="text-white/80 text-xs md:text-sm font-medium line-clamp-1">{feature.label}</p>
                    <p className="text-white/40 text-[10px] md:text-xs hidden md:block">{feature.sublabel}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}


      {/* Other Projects */}
      <div className="relative py-12 md:py-24 px-4 md:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12"
          >
            <p className="text-white/40 text-xs md:text-sm font-medium tracking-wider uppercase mb-2 md:mb-3">
              Portfolio
            </p>
            <h2 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">More Projects</h2>
            <p className="text-white/50 text-sm md:text-base">Other notable work</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelected(project)}
                className="group cursor-pointer rounded-xl md:rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 overflow-hidden active:scale-[0.98]"
              >
                {/* Image */}
                {project.image && (
                  <div className="relative h-36 md:h-44 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 md:p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                          <project.icon className="h-3.5 w-3.5 md:h-4 md:w-4 text-white/80" />
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-white/80 transition-colors ml-auto" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-4 md:p-5">
                  <h3 className="font-semibold text-sm md:text-base text-white/90 mb-1 group-hover:text-white transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/50 mb-3 md:mb-4 line-clamp-1">{project.tagline}</p>
                  <div className="flex flex-wrap gap-1 md:gap-1.5">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 md:px-2.5 py-0.5 md:py-1 text-[10px] md:text-xs rounded-full bg-white/5 border border-white/10 text-white/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal - Mobile Optimized */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/90 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full md:max-w-lg md:mx-4 rounded-t-2xl md:rounded-2xl border border-white/10 border-b-0 md:border-b bg-[#0a0a0a] overflow-hidden shadow-2xl max-h-[90vh] md:max-h-[85vh] overflow-y-auto"
            >
              {/* Drag Handle - Mobile */}
              <div className="md:hidden flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 rounded-full bg-white/20" />
              </div>

              {/* Modal Image */}
              {selected.image && (
                <div className="relative h-40 md:h-52 overflow-hidden">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-3 md:top-4 right-3 md:right-4 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 transition-colors"
                  >
                    <X className="h-4 w-4 text-white/70" />
                  </button>
                </div>
              )}

              <div className="p-4 md:p-6">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="p-2 md:p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <selected.icon className="h-4 w-4 md:h-5 md:w-5 text-white/70" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-bold truncate">{selected.title}</h3>
                    <p className="text-xs md:text-sm text-white/50 truncate">{selected.tagline}</p>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-white/60 leading-relaxed mb-4 md:mb-6">
                  {selected.description}
                </p>

                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                  {selected.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 md:px-3 py-1 md:py-1.5 text-xs md:text-sm rounded-full bg-white/5 border border-white/10 text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 md:gap-3 pb-4 md:pb-0">
                  {selected.github ? (
                    <Button
                      asChild
                      className="flex-1 bg-white text-black hover:bg-white/90 h-10 md:h-11 text-sm"
                    >
                      <a href={selected.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  ) : (
                    <Button
                      className="flex-1 bg-white/50 text-black h-10 md:h-11 text-sm cursor-not-allowed"
                      disabled
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    className="flex-1 border-white/20 hover:bg-white/5 h-10 md:h-11 text-sm"
                    disabled
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
