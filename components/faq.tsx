'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import GoldSweep from './gold-sweep'
import EditableText from './editable-text'

const faqs = [
  {
    question: 'Como agendar uma consulta?',
    answer: 'Você pode agendar uma consulta através do formulário de contato em nosso site, por telefone ou e-mail. Responderemos em até 24 horas para confirmar o melhor horário disponível.',
  },
  {
    question: 'Quais são os honorários?',
    answer: 'Os honorários são definidos de acordo com a complexidade do caso e a área de atuação. Oferecemos transparência total e podemos discutir as opções de pagamento na consulta inicial.',
  },
  {
    question: 'Quanto tempo leva para resolver um caso?',
    answer: 'O tempo varia conforme a natureza do processo. Casos mais simples podem ser resolvidos em semanas, enquanto processos mais complexos podem levar meses ou anos. Sempre mantemos você informado sobre o andamento.',
  },
  {
    question: 'Atendem casos em todo o Brasil?',
    answer: 'Sim, atendemos clientes em todo o território nacional. Utilizamos tecnologia para consultas remotas quando necessário, mantendo a mesma qualidade de atendimento.',
  },
  {
    question: 'Oferecem consultoria preventiva?',
    answer: 'Sim, oferecemos consultoria jurídica preventiva para empresas e pessoas físicas, ajudando a evitar problemas legais futuros através de planejamento estratégico.',
  },
  {
    question: 'Como funciona o acompanhamento do caso?',
    answer: 'Mantemos comunicação constante com nossos clientes através de relatórios periódicos, reuniões de acompanhamento e disponibilidade para esclarecimentos. Você sempre saberá o status do seu processo.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-32 bg-[#031127]">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <EditableText
            id="faq-title"
            tag="h2"
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            Perguntas Frequentes
          </EditableText>
          <EditableText
            id="faq-subtitle"
            tag="p"
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Tire suas dúvidas sobre nossos serviços e processos
          </EditableText>
          <GoldSweep isLine className="w-24 h-1 mx-auto mt-4">
            <div className="w-full h-full bg-gradient-to-r from-[#957152] to-[#e0ba9b]" />
          </GoldSweep>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <EditableText
                  id={`faq-${index}-question`}
                  tag="span"
                  className="text-white font-semibold pr-4 group-hover:text-[#957152] transition-colors duration-100"
                >
                  {faq.question}
                </EditableText>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-5 h-5 text-[#957152] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-white/70 leading-relaxed">
                      <EditableText
                        id={`faq-${index}-answer`}
                        tag="p"
                        className="text-white/70 leading-relaxed"
                      >
                        {faq.answer}
                      </EditableText>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

