"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: "fade-up" | "fade-in" | "scale-in" | "slide-left" | "slide-right" | "zoom-in" | "blur-in"
  duration?: number
}

const animations = {
  "fade-up": {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "scale-in": {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  },
  "blur-in": {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
  duration = 0.6,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  // Simplify animations on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768
  const mobileAnimation = animation === "fade-up" ? "fade-in" : animation
  const finalAnimation = isMobile ? mobileAnimation : animation

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animations[finalAnimation]}
      transition={{
        duration: isMobile ? 0.3 : duration,
        delay: isMobile ? 0 : delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
