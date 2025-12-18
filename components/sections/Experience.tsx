"use client"

import { motion } from "framer-motion"
import { Building2, MapPin, Calendar } from "lucide-react"

const experiences = [
  {
    company: "VaidhyaMegha Private Limited",
    location: "Hyderabad",
    role: "Software Engineer",
    period: "Jul 2025 – Present",
    achievements: [
      "Engineered BI pipelines for Power BI, Tableau, QuickSight — 35% efficiency gain",
      "Built full-stack architecture for HelixVM with NestJS, MySQL, AWS CloudWatch",
      "Reinforced microservices with async operations and caching",
      "Orchestrated sprint tasks via Jira across cross-functional teams"
    ],
    tech: ["NestJS", "MySQL", "AWS", "Power BI"]
  },
  {
    company: "Pluralsight India Private Limited",
    location: "Bengaluru",
    role: "Software Development Intern",
    period: "Jan 2025 – Jun 2025",
    achievements: [
      "Crafted modular React + Tailwind components with GraphQL — 40% reusability increase",
      "Implemented microservices with Node.js and FastAPI",
      "Instituted RBAC and SSO for multi-tenant systems",
      "Maintained 90%+ test coverage with Jest and Playwright"
    ],
    tech: ["React", "GraphQL", "Node.js", "FastAPI"]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hidden md:flex">
                  <Building2 className="h-4 w-4 text-white/50" />
                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold">{exp.role}</h3>
                      <p className="text-white/60">{exp.company}</p>
                      <div className="flex items-center gap-1 text-sm text-white/40 mt-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/50">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-white/60 flex gap-2">
                        <span className="text-white/30">→</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
