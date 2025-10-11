"use client"

import type React from "react"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export const EvervaultCard = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const [randomString, setRandomString] = useState("")

  useEffect(() => {
    const str = generateRandomString(1500)
    setRandomString(str)
  }, [])

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)

    const str = generateRandomString(1500)
    setRandomString(str)
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-full h-full overflow-hidden rounded-lg bg-card border border-border",
        className,
      )}
      onMouseMove={onMouseMove}
    >
      <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
      <div className="relative z-10 flex items-center justify-center w-full h-full">{children}</div>
    </div>
  )
}

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  const maskImage = useMotionValue("")
  const springConfig = { stiffness: 500, damping: 50 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const updateMask = () => {
      maskImage.set(`radial-gradient(250px circle at ${x.get()}px ${y.get()}px, white, transparent)`)
    }

    const unsubscribeX = x.on("change", updateMask)
    const unsubscribeY = y.on("change", updateMask)

    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [x, y, maskImage])

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-teal-500/20 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
      />
      <div className="absolute inset-0 opacity-0 mix-blend-overlay group-hover/card:opacity-100">
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </div>
    </div>
  )
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
export const generateRandomString = (length: number) => {
  let result = ""
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}
