'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GoldSweepProps {
  children: ReactNode
  className?: string
  isText?: boolean
  isButton?: boolean
  isLine?: boolean
}

export default function GoldSweep({ children, className = '', isText = false, isButton = false, isLine = false }: GoldSweepProps) {
  if (isText) {
    return (
      <span className={`relative inline-block ${className}`}>
        {children}
        <motion.span
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.4), transparent)',
            mixBlendMode: 'overlay',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black, transparent)',
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 1,
          }}
        />
      </span>
    )
  }

  if (isButton) {
    return (
      <span className={`relative inline-block ${className}`}>
        {children}
        <motion.span
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)',
            mixBlendMode: 'overlay',
            borderRadius: 'inherit',
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 0.8,
          }}
        />
      </span>
    )
  }

  if (isLine) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        {children}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(230, 201, 128, 0.8), rgba(178, 137, 71, 0.6), transparent)',
            boxShadow: '0 0 15px rgba(230, 201, 128, 0.6)',
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 1,
          }}
        />
      </div>
    )
  }

  return <>{children}</>
}

