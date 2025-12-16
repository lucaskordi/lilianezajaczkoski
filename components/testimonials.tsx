'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import GoldSweep from './gold-sweep'
import EditableText from './editable-text'

const testimonials = [
  {
    name: 'Lucas Kordiaka',
    role: 'Empresário',
    company: 'NestLab',
    text: 'Excelente profissional, muito atenciosa e competente. Resolveu meu caso com agilidade e eficiência. Recomendo sem hesitação.',
    rating: 5,
    photo: '👤',
  },
  {
    name: 'João Zaja',
    role: 'Empresário',
    company: 'Multi Eventos',
    text: 'Recomendo a Dra. Liliane para todos. Profissionalismo e dedicação em cada atendimento. Resultados excepcionais.',
    rating: 5,
    photo: '👤',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      id="depoimentos"
      className="py-32 bg-gradient-to-br from-[#EFE8D9] to-[#EFE8D9] relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: 'url(/SHADOWUPLEFT.webp)',
          transform: 'rotate(180deg)',
          opacity: 0.15
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <EditableText
            id="testimonials-title"
            tag="h2"
            className="text-4xl md:text-5xl font-serif font-bold text-[#031127] mb-4"
          >
            Depoimentos
          </EditableText>
          <EditableText
            id="testimonials-subtitle"
            tag="p"
            className="text-[#031127]/70 text-lg max-w-2xl mx-auto"
          >
            O que nossos clientes dizem sobre nosso trabalho
          </EditableText>
          <GoldSweep isLine className="w-24 h-1 mx-auto mt-4">
            <div className="w-full h-full bg-gradient-to-r from-[#957152] to-[#e0ba9b]" />
          </GoldSweep>
        </motion.div>

        <div className="relative max-w-4xl mx-auto flex items-center gap-2 md:gap-4">
          <motion.button
            onClick={prevSlide}
            className="w-10 h-10 md:w-12 md:h-12 bg-[#EFE8D9] rounded-full shadow-lg flex items-center justify-center hover:bg-[#E5DCC5] transition-all duration-100 group hover-smooth flex-shrink-0 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-[#031127] group-hover:text-[#957152] transition-colors duration-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <div className="relative flex-1 min-h-[350px] md:min-h-[400px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white rounded-2xl p-6 md:p-12 shadow-2xl border border-gray-100 flex flex-col overflow-y-auto"
                style={{ minHeight: '350px' }}
              >
                <div className="flex flex-col items-center justify-center min-h-full text-center space-y-4 md:space-y-6 py-2">
                  <div className="text-4xl md:text-6xl text-[#957152] mb-1 md:mb-4 flex-shrink-0">"</div>
                  
                  <EditableText
                    id={`testimonial-${currentIndex}-text`}
                    tag="p"
                    className="text-sm md:text-xl lg:text-2xl text-[#031127]/80 leading-relaxed font-light max-w-3xl flex-grow flex items-center px-2"
                  >
                    {testimonials[currentIndex].text}
                  </EditableText>

                  <div className="flex gap-1 mb-2 md:mb-4 flex-shrink-0">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 md:w-6 md:h-6 text-[#957152]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ))}
                  </div>

                  <div className="flex-shrink-0">
                    <EditableText
                      id={`testimonial-${currentIndex}-name`}
                      tag="p"
                      className="font-bold text-[#031127] text-sm md:text-lg"
                    >
                      {testimonials[currentIndex].name}
                    </EditableText>
                    <EditableText
                      id={`testimonial-${currentIndex}-role`}
                      tag="p"
                      className="text-[#031127]/60 text-xs md:text-sm mt-1"
                    >
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                    </EditableText>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            onClick={nextSlide}
            className="w-10 h-10 md:w-12 md:h-12 bg-[#EFE8D9] rounded-full shadow-lg flex items-center justify-center hover:bg-[#E5DCC5] transition-all duration-100 group hover-smooth flex-shrink-0 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-[#031127] group-hover:text-[#957152] transition-colors duration-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`h-2 rounded-full transition-all duration-100 ${
                currentIndex === index 
                  ? 'w-8 bg-gradient-to-r from-[#957152] to-[#e0ba9b]' 
                  : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
