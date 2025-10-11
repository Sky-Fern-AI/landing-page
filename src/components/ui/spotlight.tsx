"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function Spotlight({ className }: { className?: string }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        const rect = spotlightRef.current.getBoundingClientRect()
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={spotlightRef} className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <motion.div
        className="absolute h-[600px] w-[600px] rounded-full bg-primary/20 blur-[100px]"
        animate={{
          x: position.x - 300,
          y: position.y - 300,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />
    </div>
  )
}
