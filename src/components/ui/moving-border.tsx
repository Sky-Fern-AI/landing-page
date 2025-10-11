"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function MovingBorder({
  children,
  className,
  containerClassName,
  borderClassName,
  duration = 3,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  borderClassName?: string
  duration?: number
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl p-[1px]", containerClassName)}>
      <motion.div
        className={cn(
          "absolute inset-0 rounded-xl",
          "bg-[conic-gradient(from_var(--angle),transparent_0%,var(--primary)_10%,transparent_20%)]",
          borderClassName,
        )}
        style={
          {
            "--angle": "0deg",
          } as React.CSSProperties
        }
        animate={{
          "--angle": "360deg",
        }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <div className={cn("relative h-full w-full rounded-xl bg-card", className)}>{children}</div>
    </div>
  )
}
