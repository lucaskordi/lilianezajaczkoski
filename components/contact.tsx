'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { IconPhone, IconEmail } from './icons'
import GoldSweep from './gold-sweep'

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      Icon: IconPhone,
      label: 'Telefone',
      value: '(41) 99954-6283',
      link: 'tel:+5541999546283',
    },
    {
      Icon: IconEmail,
      label: 'E-mail',
      value: 'adv.zajali@gmail.com',
      link: 'mailto:adv.zajali@gmail.com',
    },
  ]

  return (
    <section
      id="contato"
      className="py-32 bg-[#031127] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#957152]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e0ba9b]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Estamos prontos para ajudar você. Entre em contato e agende sua consulta.
          </p>
          <GoldSweep isLine className="w-24 h-1 mx-auto mt-4">
            <div className="w-full h-full bg-gradient-to-r from-[#957152] to-[#e0ba9b]" />
          </GoldSweep>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="flex items-center gap-4 p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#957152]/50 transition-all duration-100 group hover-smooth flex-1"
                whileHover={{ x: 10, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.1, ease: 'easeOut' }}
              >
                <div className="text-white flex-shrink-0">
                  <info.Icon className="w-10 h-10" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-2">{info.label}</p>
                  <p className="text-white font-semibold text-lg group-hover:text-[#957152] transition-colors duration-100">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex flex-col"
          >
            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col flex-1">
              <div>
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome completo"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#957152] focus:bg-white/10 transition-all duration-100"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#957152] focus:bg-white/10 transition-all duration-100"
                  required
                />
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#957152] focus:bg-white/10 transition-all duration-100"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="assunto"
                  placeholder="Assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#957152] focus:bg-white/10 transition-all duration-100"
                  required
                />
              </div>

              <div className="flex-1 flex flex-col min-h-[120px]">
                <textarea
                  name="mensagem"
                  placeholder="Mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#957152] focus:bg-white/10 transition-all resize-none flex-1 min-h-[120px]"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="relative w-full px-8 py-4 bg-gradient-to-r from-[#957152] to-[#e0ba9b] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-smooth"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
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
                <span className="relative z-20">Enviar Mensagem</span>
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
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
