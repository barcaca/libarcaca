'use client'
import { type MotionProps, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type React from 'react'

interface CustomMotionProps<Tag extends keyof JSX.IntrinsicElements>
  extends MotionProps {
  type?: Tag
  children: React.ReactNode
  className?: string | undefined | null
}

export const Motion = <Tag extends keyof JSX.IntrinsicElements>({
  type,
  children,
  className,
  ...props
}: CustomMotionProps<Tag>) => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const Component = type ? (motion as any)[type] : motion.div
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  )
}

export const MotionLink = motion(Link)
export const MotionImagem = motion(Image)
