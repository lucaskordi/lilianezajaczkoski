'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef, useCallback } from 'react'
import { IconScale, IconConsult } from './icons'
import { 
  IoCalculator, 
  IoShieldCheckmark, 
  IoBriefcase, 
  IoDocumentText,
  IoHome,
  IoBusiness,
  IoGlobe,
  IoCar,
  IoPeople,
  IoLeaf,
  IoHammer,
  IoContract,
  IoLockClosed,
  IoCart
} from 'react-icons/io5'
import GoldSweep from './gold-sweep'

const areas = [
  {
    title: 'Direito Criminal',
    description: 'Defesa em processos criminais, inquéritos policiais e medidas cautelares.',
    Icon: IconScale,
  },
  {
    title: 'Direito de Família e Sucessões',
    description: 'Divórcios, guarda e visita de filhos, pensão alimentícia, inventários e testamentos.',
    Icon: IoPeople,
  },
  {
    title: 'Direito Previdenciário',
    description: 'Aposentadorias, benefícios, revisões e contestações junto ao INSS.',
    Icon: IoShieldCheckmark,
  },
  {
    title: 'Direito Cível',
    description: 'Ações de indenização, contratos, responsabilidade civil e direito do consumidor.',
    Icon: IoDocumentText,
  },
  {
    title: 'Direito Tributário',
    description: 'Consultoria, planejamento tributário, defesas administrativas e judiciais.',
    Icon: IoCalculator,
  },
  {
    title: 'Direito Trabalhista',
    description: 'Ações trabalhistas, rescisões, acordos e defesa de empregados ou empregadores.',
    Icon: IoBriefcase,
  },
  {
    title: 'Consultas & Pareceres Jurídicos',
    description: 'Análise de contratos, elaboração de pareceres e orientação estratégica.',
    Icon: IconConsult,
  },
  {
    title: 'Mediação e Arbitragem',
    description: 'Resolução de conflitos de forma extrajudicial, rápida e eficaz.',
    Icon: IoContract,
  },
  {
    title: 'Direito Imobiliário',
    description: 'Compra, venda, locação de imóveis, contratos e disputas condominiais.',
    Icon: IoHome,
  },
  {
    title: 'Direito Empresarial',
    description: 'Abertura de empresas, contratos empresariais, recuperação judicial e societário.',
    Icon: IoBusiness,
  },
  {
    title: 'Direito Digital',
    description: 'Proteção de dados, crimes cibernéticos, contratos e regulamentações online.',
    Icon: IoLockClosed,
  },
  {
    title: 'Direito do Consumidor',
    description: 'Cobranças indevidas, defeitos de produtos e serviços, ações de reparação.',
    Icon: IoCart,
  },
  {
    title: 'Direito Ambiental',
    description: 'Licenciamento, responsabilidades e ações relacionadas ao meio ambiente.',
    Icon: IoLeaf,
  },
  {
    title: 'Direito Administrativo',
    description: 'Questões com órgãos públicos, concursos, licitações e contratos administrativos.',
    Icon: IoHammer,
  },
  {
    title: 'Direito de Trânsito',
    description: 'Recursos de multas, defesa em infrações e acidentes.',
    Icon: IoCar,
  },
  {
    title: 'Direito Internacional',
    description: 'Imigração, contratos internacionais e comércio exterior.',
    Icon: IoGlobe,
  },
]

export default function PracticeAreas() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [cardsPerView, setCardsPerView] = useState(5)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1)
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2)
      } else {
        setCardsPerView(5)
      }
    }
    
    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  useEffect(() => {
    const totalSlides = Math.ceil(areas.length / cardsPerView)
    if (totalSlides > 0 && currentIndex >= totalSlides) {
      setCurrentIndex(0)
    }
  }, [cardsPerView])

  const totalSlides = Math.ceil(areas.length / cardsPerView)

  const resetAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    
    const totalSlides = Math.ceil(areas.length / cardsPerView)
    if (totalSlides <= 1) return
    
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev + 1 >= totalSlides) {
          return 0
        }
        return prev + 1
      })
    }, 5000)
  }, [cardsPerView])

  useEffect(() => {
    resetAutoPlay()
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [resetAutoPlay])

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev + 1 >= totalSlides) {
        return 0
      }
      return prev + 1
    })
    resetAutoPlay()
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev - 1 < 0) {
        return totalSlides - 1
      }
      return prev - 1
    })
    resetAutoPlay()
  }

  const getVisibleCards = () => {
    const start = currentIndex * cardsPerView
    const end = start + cardsPerView
    
    if (end <= areas.length) {
      return areas.slice(start, end)
    }
    
    const firstPart = areas.slice(start)
    const remaining = cardsPerView - firstPart.length
    const secondPart = areas.slice(0, remaining)
    return [...firstPart, ...secondPart]
  }

  return (
    <section
      id="areas"
      className="py-32 bg-[#031127]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Expertise em múltiplas áreas do direito para atender todas as suas necessidades jurídicas
          </p>
            <GoldSweep isLine className="w-24 h-1 mx-auto mt-4">
              <div className="w-full h-full bg-gradient-to-r from-[#957152] to-[#e0ba9b]" />
            </GoldSweep>
        </motion.div>

        <div className="relative px-12 md:px-16" style={{ height: '400px' }}>
          <div className="h-full py-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className={`grid gap-8 h-full ${
                  cardsPerView === 1 
                    ? 'grid-cols-1' 
                    : cardsPerView === 2 
                    ? 'grid-cols-1 md:grid-cols-2' 
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5'
                }`}
              >
                {getVisibleCards().map((area, index) => {
                  const globalIndex = (currentIndex * cardsPerView + index) % areas.length
                  return (
                    <div
                      key={`${currentIndex}-${area.title}-${index}`}
                      className="relative group h-full"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        onHoverStart={() => setHoveredIndex(globalIndex)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 w-full h-full flex flex-col transition-all duration-100 hover-smooth ${
                          hoveredIndex === globalIndex ? 'border-[#957152]/50 bg-white/10 shadow-lg shadow-[#957152]/10' : ''
                        }`}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.1, ease: 'easeOut' }}
                      >
                        <motion.div
                          className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-[#957152] border border-[#957152]/20 bg-[#957152]/5 flex-shrink-0"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.1, ease: 'easeOut' }}
                        >
                          <area.Icon className="w-6 h-6" />
                        </motion.div>
                        
                        <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-[#957152] transition-colors duration-100 flex-shrink-0">
                          {area.title}
                        </h3>
                        
                        <p className="text-white/70 leading-relaxed text-sm flex-grow">
                          {area.description}
                        </p>
                      </motion.div>
                    </div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-100 group hover-smooth z-10"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-[#957152] transition-colors duration-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-100 group hover-smooth z-10"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-[#957152] transition-colors duration-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-100 ${
                currentIndex === index 
                  ? 'w-8 bg-gradient-to-r from-[#957152] to-[#e0ba9b]' 
                  : 'w-2 bg-white/30'
              }`}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a
            href="#contato"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#957152] to-[#e0ba9b] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-smooth"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Saiba mais
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
