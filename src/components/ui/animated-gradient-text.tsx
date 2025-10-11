"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function AnimatedGradientText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.span
      className={cn(
        "inline-block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent",
        "bg-[length:200%_auto]",
        className,
      )}
      animate={{
        backgroundPosition: ["0% center", "200% center"],
      }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  )
}
