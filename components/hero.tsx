'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-5%'])

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#031127]"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0 opacity-75 overflow-hidden"
        style={{ y, scale }}
      >
        <Image
          src="/herobg.webp"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: 'center top' }}
          priority
          quality={90}
        />
      </motion.div>
      {/* Animated Wavy Gold Background */}
      <div className="absolute inset-0 opacity-30 z-[1]">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldWave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b28947" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#e6c980" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#b28947" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z"
            fill="url(#goldWave)"
            initial={{ d: "M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z" }}
            animate={{
              d: [
                "M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z",
                "M0,400 Q300,350 600,400 T1200,400 L1200,800 L0,800 Z",
                "M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M0,500 Q400,400 800,500 T1200,500 L1200,800 L0,800 Z"
            fill="url(#goldWave)"
            initial={{ d: "M0,500 Q400,400 800,500 T1200,500 L1200,800 L0,800 Z" }}
            animate={{
              d: [
                "M0,500 Q400,400 800,500 T1200,500 L1200,800 L0,800 Z",
                "M0,500 Q400,450 800,500 T1200,500 L1200,800 L0,800 Z",
                "M0,500 Q400,400 800,500 T1200,500 L1200,800 L0,800 Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </svg>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#031127]/95 via-[#031127]/90 to-[#020B19]/95 z-[2]" />

      {/* Subtle floating particles */}
      <div className="absolute inset-0 z-[3]">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#b28947]/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-[4] max-w-7xl mx-auto px-6 md:px-10 w-full py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-white font-light leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              Defesa Estratégica com{' '}
              <span className="gold-gradient-text font-normal">Excelência Jurídica</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            >
              Advocacia especializada em múltiplas áreas do direito com atuação ética, precisa e focada em resultados
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            >
              <motion.a
                href="#contato"
                className="relative px-8 py-4 bg-gradient-to-r from-[#b28947] to-[#e6c980] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-smooth"
                whileHover={{ y: -2 }}
                style={{
                  borderRadius: '9999px',
                  WebkitBorderRadius: '9999px',
                  overflow: 'hidden',
                  isolation: 'isolate',
                  WebkitMaskImage: '-webkit-radial-gradient(white, white)',
                  maskImage: 'radial-gradient(white, white)',
                  transform: 'translateZ(0)',
                  WebkitTransform: 'translateZ(0)',
                }}
              >
                <span className="relative z-20">Agende uma Consulta</span>
                <motion.span
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)',
                    mixBlendMode: 'overlay',
                    borderRadius: '9999px',
                    WebkitBorderRadius: '9999px',
                    width: '100%',
                    height: '100%',
                    transform: 'translateZ(0)',
                    WebkitTransform: 'translateZ(0)',
                    willChange: 'transform',
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
              </motion.a>
              <motion.a
                href="#sobre"
                className="px-8 py-4 border border-white/20 text-white font-medium rounded-full backdrop-blur-sm hover:border-white/40 hover:bg-white/5 transition-all duration-300 hover-smooth"
                whileHover={{ y: -2 }}
              >
                Conheça Mais
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs font-light tracking-widest uppercase">role para baixo</span>
          <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
