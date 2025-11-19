'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import GoldSweep from './gold-sweep'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 50])

  return (
    <section
      id="sobre"
      className="py-32 bg-white relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: 'url(/SHADOWUPLEFT.webp)',
          transform: 'rotate(180deg)',
          opacity: 0.15
        }}
      />
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#031127] mb-4">
            Sobre Mim
          </h2>
          <GoldSweep isLine className="w-24 h-1 mx-auto">
            <div className="w-full h-full bg-gradient-to-r from-[#b28947] to-[#e6c980]" />
          </GoldSweep>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:items-center">
          <motion.div
            className="relative md:-mt-12"
            style={{ y }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#b28947]/20 to-[#031127]/20 z-10" />
              <div className="w-full h-[600px] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-sm">Foto Liliane</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#b28947] to-[#e6c980] rounded-2xl opacity-20 blur-2xl pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-serif font-bold text-[#031127]">
              Liliane Zajaczkoski
            </h3>
            
            <div className="space-y-4 text-[#031127]/80 leading-relaxed">
              <p>
                Advogada especializada em múltiplas áreas do direito, atuando com dedicação e comprometimento em cada caso. 
                Com sólida formação acadêmica e foco em oferecer soluções jurídicas estratégicas e personalizadas.
              </p>
              <p>
                Com abordagem ética, transparente e focada em resultados, oferece atendimento especializado nas principais 
                áreas do direito. Sua dedicação e conhecimento técnico garantem a melhor defesa dos interesses de seus clientes.
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <motion.div
                className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-100 hover-smooth"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              >
                <p className="text-sm text-[#031127]/60 mb-1">OAB/PR</p>
                <p className="font-semibold text-[#031127]">123.456</p>
              </motion.div>

              <motion.div
                className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-100 hover-smooth"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              >
                <p className="text-sm text-[#031127]/60 mb-3">Áreas de Atuação</p>
                <div className="grid grid-cols-2 gap-2">
                  {['Direito Criminal', 'Direito Tributário', 'Direito Previdenciário', 'Direito Trabalhista', 'Direito Cível', 'Consultas & Pareceres'].map((area, index) => (
                    <p key={area} className="font-semibold text-[#031127] text-sm">
                      {area}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
