"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, ExternalLink } from "lucide-react"

const certifications = [
  { title: "Frontend Developer (React)", issuer: "HackerRank", date: "Jun 2025" },
  { title: "SQL (Advanced)", issuer: "HackerRank", date: "Jun 2025" },
  { title: "Microsoft Azure: Zero to Hero", issuer: "Udemy", date: "Jul 2024" },
  { title: "AWS Certified 2022", issuer: "Infosys Springboard", date: "Dec 2024" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco", date: "Dec 2024" },
  { title: "Networking Basics", issuer: "Cisco", date: "Feb 2024" },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 p-6 rounded-2xl border border-white/10 bg-white/[0.02] relative overflow-hidden"
        >
          {/* Subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />
          
          <div className="relative z-10 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <GraduationCap className="h-6 w-6 text-white/70" />
            </div>
            <div>
              <h3 className="text-lg font-bold">B.E. in Information Science & Engineering</h3>
              <p className="text-white/60">RV Institute of Technology and Management, Bengaluru</p>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-sm text-white/40">2021 – 2025</span>
                <span className="text-sm font-semibold text-white/80">CGPA: 8.63 / 10</span>
              </div>
              <p className="text-sm text-white/50 mt-2">Published research on real-time vehicle monitoring. Led hackathon-winning teams.</p>
            </div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all"
            >
              <Award className="h-4 w-4 text-white/30 group-hover:text-white/60 transition-colors flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{cert.title}</p>
                <p className="text-xs text-white/40">{cert.issuer} • {cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
