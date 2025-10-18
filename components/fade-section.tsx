"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface FadeSectionProps {
  children: ReactNode
}

export function FadeSection({ children }: FadeSectionProps) {
  return (
    <div>
      {children}
    </div>
  )
}
