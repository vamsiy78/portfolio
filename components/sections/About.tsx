"use client"

import { motion } from "framer-motion"
import { Code2, Cloud, Brain, Users } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "React, Next.js, Node.js, NestJS, PostgreSQL"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, Azure, Docker, CI/CD Pipelines"
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "OpenAI API, Prompt Engineering, Automation"
  },
  {
    icon: Users,
    title: "Research & Leadership",
    description: "Published Research, Hackathon Winner"
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About</h2>
          <p className="text-base text-white/50 max-w-3xl leading-relaxed">
            Innovative Software Engineer specializing in full-stack development. 
            Adept at designing scalable applications, integrating AI solutions, and streamlining workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent" />
              
              <div className="relative z-10">
                <div className="inline-flex p-3 rounded-xl bg-white/5 border border-white/10 mb-4 group-hover:border-white/20 transition-colors">
                  <item.icon className="h-5 w-5 text-white/70" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/50">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
