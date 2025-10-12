"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxSeparator() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  return (
    <div
      ref={ref}
      className="relative h-32 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background"
    >
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent/20 rounded-full blur-2xl"
      />
    </div>
  )
}
