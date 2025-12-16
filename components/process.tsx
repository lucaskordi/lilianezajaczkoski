'use client'

import { motion } from 'framer-motion'
import { IconDocument } from './icons'
import { IoCall, IoAnalytics, IoStatsChart, IoCheckmarkCircle } from 'react-icons/io5'
import GoldSweep from './gold-sweep'
import EditableText from './editable-text'

const steps = [
  {
    number: '01',
    title: 'Consulta Inicial',
    description: 'Agendamento e análise preliminar do seu caso. Entendemos suas necessidades e objetivos.',
    Icon: IoCall,
  },
  {
    number: '02',
    title: 'Análise Jurídica',
    description: 'Estudo detalhado da documentação e definição da estratégia de atuação mais adequada.',
    Icon: IconDocument,
  },
  {
    number: '03',
    title: 'Apresentação da Estratégia',
    description: 'Apresentamos o plano de ação, prazos e possíveis resultados do seu caso.',
    Icon: IoAnalytics,
  },
  {
    number: '04',
    title: 'Execução e Acompanhamento',
    description: 'Atuação efetiva com acompanhamento constante e comunicação transparente.',
    Icon: IoStatsChart,
  },
  {
    number: '05',
    title: 'Resolução',
    description: 'Conclusão do processo com resultados satisfatórios e proteção dos seus direitos.',
    Icon: IoCheckmarkCircle,
  },
]

export default function Process() {
  return (
    <section
      id="processos"
      className="py-32 bg-gradient-to-br from-[#EFE8D9] to-[#EFE8D9] relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: 'url(/SHADOWUPLEFT.webp)',
          transform: 'rotate(0deg)',
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
            id="process-title"
            tag="h2"
            className="text-4xl md:text-5xl font-serif font-bold text-[#031127] mb-4"
          >
            Como Funciona
          </EditableText>
          <EditableText
            id="process-subtitle"
            tag="p"
            className="text-[#031127]/70 text-lg max-w-2xl mx-auto"
          >
            Processo transparente e eficiente para garantir os melhores resultados
          </EditableText>
          <GoldSweep isLine className="w-24 h-1 mx-auto mt-4">
            <div className="w-full h-full bg-gradient-to-r from-[#957152] to-[#e0ba9b]" />
          </GoldSweep>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#957152]/20 via-[#e0ba9b]/20 to-[#957152]/20 transform -translate-y-1/2" />
          
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-100 group hover-smooth h-full flex flex-col"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.1, ease: 'easeOut' }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="text-6xl font-serif font-bold inline-block"
                      style={{
                        background: 'linear-gradient(135deg, #957152 0%, #e0ba9b 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent',
                        opacity: 0.3
                      }}
                    >
                      {step.number}
                    </span>
                    <motion.div
                      className="hover-smooth text-[#031127]"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <step.Icon className="w-8 h-8" />
                    </motion.div>
                  </div>
                  <EditableText
                    id={`process-step-${step.number}-title`}
                    tag="h3"
                    className="text-xl font-serif font-bold text-[#031127] mb-3 group-hover:gold-gradient-text transition-all duration-100"
                  >
                    {step.title}
                  </EditableText>
                  <EditableText
                    id={`process-step-${step.number}-description`}
                    tag="p"
                    className="text-[#031127]/70 text-sm leading-relaxed flex-grow"
                  >
                    {step.description}
                  </EditableText>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

