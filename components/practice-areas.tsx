'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { IconScale, IconConsult } from './icons'
import { IoCalculator, IoShieldCheckmark, IoBriefcase, IoDocumentText } from 'react-icons/io5'
import GoldSweep from './gold-sweep'

const areas = [
  {
    title: 'Direito Criminal',
    description: 'Defesa estratégica em processos criminais com expertise em todas as fases processuais. Atuação em crimes contra a pessoa, patrimônio e ordem pública.',
    Icon: IconScale,
  },
  {
    title: 'Direito Tributário',
    description: 'Consultoria e defesa em questões tributárias, planejamento fiscal, recuperação de créditos e negociação com o fisco.',
    Icon: IoCalculator,
  },
  {
    title: 'Direito Previdenciário',
    description: 'Atuação em benefícios previdenciários, revisões de aposentadoria, auxílios e ações junto ao INSS.',
    Icon: IoShieldCheckmark,
  },
  {
    title: 'Direito Trabalhista',
    description: 'Defesa dos direitos trabalhistas, ações rescisórias, consultoria em relações de trabalho e negociações coletivas.',
    Icon: IoBriefcase,
  },
  {
    title: 'Direito Cível',
    description: 'Atuação em questões cíveis, contratos, responsabilidade civil, direito de família e sucessões.',
    Icon: IoDocumentText,
  },
  {
    title: 'Consultas & Pareceres',
    description: 'Análise jurídica especializada e pareceres técnicos para tomada de decisões estratégicas empresariais.',
    Icon: IconConsult,
  },
]

export default function PracticeAreas() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              <motion.div
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 h-full transition-all duration-100 hover-smooth ${
                  hoveredIndex === index ? 'border-[#957152]/50 bg-white/10 shadow-lg shadow-[#957152]/10' : ''
                }`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
              >
                <motion.div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-[#957152] border border-[#957152]/20 bg-[#957152]/5"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.1, ease: 'easeOut' }}
                >
                  <area.Icon className="w-6 h-6" />
                </motion.div>
                
                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-[#957152] transition-colors duration-100">
                  {area.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed mb-6 text-sm">
                  {area.description}
                </p>

                <motion.a
                  href="#contato"
                  className="inline-flex items-center text-[#957152] font-medium text-sm group-hover:gap-2 transition-all duration-100 hover-smooth"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.1, ease: 'easeOut' }}
                >
                  Saiba mais
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
