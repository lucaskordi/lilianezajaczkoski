'use client'

import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { IconScale } from './icons'
import { IoTime, IoCheckmarkCircle, IoBarChart } from 'react-icons/io5'

const stats = [
  { number: '6+', label: 'Áreas de Atuação', Icon: IconScale, numericValue: 6 },
  { number: '24/7', label: 'Disponibilidade', Icon: IoTime, numericValue: 24 },
  { number: '100%', label: 'Compromisso Ético', Icon: IoCheckmarkCircle, numericValue: 100 },
  { number: '100%', label: 'Foco em Resultados', Icon: IoBarChart, numericValue: 100 },
]

function AnimatedNumber({ value, suffix = '', isInView }: { value: number, suffix?: string, isInView: boolean }) {
  const spring = useSpring(0, { stiffness: 50, damping: 30 })
  const display = useTransform(spring, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    } else {
      spring.set(0)
    }
  }, [spring, value, isInView])

  useEffect(() => {
    const unsubscribe = display.on('change', (latest) => {
      setDisplayValue(latest)
    })
    return unsubscribe
  }, [display])

  return (
    <span
      style={{
        background: 'linear-gradient(135deg, #b28947 0%, #e6c980 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}
    >
      {displayValue}{suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group flex flex-col items-center"
            >
              <motion.div
                className="mb-4 hover-smooth text-[#031127] flex items-center justify-center"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
              >
                <stat.Icon className="w-12 h-12" />
              </motion.div>
              <motion.h3
                className="text-4xl md:text-5xl font-serif font-bold mb-2"
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.2, ease: 'easeOut' }}
                style={{
                  background: 'linear-gradient(135deg, #b28947 0%, #e6c980 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {stat.number.includes('/') ? (
                  stat.number
                ) : stat.number.includes('+') ? (
                  <>
                    <AnimatedNumber value={stat.numericValue} suffix="+" isInView={isInView} />
                  </>
                ) : (
                  <>
                    <AnimatedNumber value={stat.numericValue} suffix="%" isInView={isInView} />
                  </>
                )}
              </motion.h3>
              <p className="text-[#031127]/70 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

