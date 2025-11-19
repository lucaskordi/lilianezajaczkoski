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
      value: '(41) 99203-1908',
      link: 'tel:+5541992031908',
    },
    {
      Icon: IconEmail,
      label: 'E-mail',
      value: 'contato@lilianezajaczkoski.com.br',
      link: 'mailto:contato@lilianezajaczkoski.com.br',
    },
  ]

  return (
    <section
      id="contato"
      className="py-32 bg-[#031127] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#b28947]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e6c980]/5 rounded-full blur-3xl" />
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
            <div className="w-full h-full bg-gradient-to-r from-[#b28947] to-[#e6c980]" />
          </GoldSweep>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#b28947]/50 transition-all duration-100 group hover-smooth"
                whileHover={{ x: 10, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.1, ease: 'easeOut' }}
              >
                <div className="text-white">
                  <info.Icon className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">{info.label}</p>
                  <p className="text-white font-semibold group-hover:text-[#b28947] transition-colors duration-100">
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
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome completo"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#b28947] focus:bg-white/10 transition-all duration-100"
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
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#b28947] focus:bg-white/10 transition-all duration-100"
                  required
                />
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#b28947] focus:bg-white/10 transition-all duration-100"
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
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#b28947] focus:bg-white/10 transition-all duration-100"
                  required
                />
              </div>

              <div>
                <textarea
                  name="mensagem"
                  placeholder="Mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#b28947] focus:bg-white/10 transition-all resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="relative w-full px-8 py-4 bg-gradient-to-r from-[#b28947] to-[#e6c980] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-smooth overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-20">Enviar Mensagem</span>
                <motion.span
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)',
                    mixBlendMode: 'overlay',
                    borderRadius: '9999px',
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
