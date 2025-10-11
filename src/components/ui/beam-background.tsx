"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function BeamBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          style={{
            top: `${20 + i * 20}%`,
          }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + i,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
