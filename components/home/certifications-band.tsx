"use client"

import { Shield, Award, CheckCircle2, FileCheck } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"

const certifications = [
  {
    icon: Shield,
    title: "CE Certified",
    description: "European Conformity",
  },
  {
    icon: Award,
    title: "ISO 13485",
    description: "Medical Devices QMS",
  },
  {
    icon: CheckCircle2,
    title: "FDA Registered",
    description: "US Compliance",
  },
  {
    icon: FileCheck,
    title: "GMP Certified",
    description: "Good Manufacturing",
  },
]

export function CertificationsBand() {
  return (
    <section className="py-16 bg-muted/30 border-y">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-2">Certified Excellence</h2>
            <p className="text-muted-foreground">Meeting the highest international standards for medical equipment</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.title} animation="zoom-in" delay={index * 0.1} duration={0.5}>
              <motion.div
                className="flex flex-col items-center text-center space-y-3 group"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(var(--primary), 0)",
                      "0 0 0 10px rgba(var(--primary), 0.1)",
                      "0 0 0 0 rgba(var(--primary), 0)",
                    ],
                  }}
                  // @ts-ignore
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <cert.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={32} />
                </motion.div>
                <div>
                  <div className="font-semibold text-foreground">{cert.title}</div>
                  <div className="text-sm text-muted-foreground">{cert.description}</div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
