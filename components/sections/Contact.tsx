"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, MapPin, Phone, ArrowUpRight } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "yadavallinagavamsi@gmail.com",
    href: "mailto:yadavallinagavamsi@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8660104313",
    href: "tel:+918660104313"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "y-naga-vamsi",
    href: "https://linkedin.com/in/y-naga-vamsi"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India • Remote-friendly",
    href: null
  }
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-white/50">Open to impactful engineering opportunities.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {contactLinks.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                    <item.icon className="h-5 w-5 text-white/50 group-hover:text-white/80 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-white/40 uppercase tracking-wider">{item.label}</p>
                    <p className="text-white/80 group-hover:text-white transition-colors">{item.value}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/20 group-hover:text-white/60 transition-colors" />
                </a>
              ) : (
                <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <item.icon className="h-5 w-5 text-white/50" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider">{item.label}</p>
                    <p className="text-white/80">{item.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
