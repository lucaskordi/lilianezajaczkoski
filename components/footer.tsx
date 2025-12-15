'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#020B19] border-t border-[#957152]/20 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="mb-4 flex justify-center md:justify-start">
              <Image
                src="/lzajalogo.svg"
                alt="Liliane Zajaczkoski - Advocacia & Consultoria"
                width={200}
                height={56}
                className="h-10 md:h-12 w-auto max-w-[200px]"
                style={{ objectFit: 'contain', maxWidth: '100%' }}
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Advocacia especializada com excelência e dedicação em cada caso.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Sobre', 'Áreas de Atuação', 'Processos', 'Depoimentos'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-[#957152] text-sm transition-colors duration-100">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Áreas</h4>
            <ul className="space-y-2">
              {['Criminal', 'Tributário', 'Previdenciário', 'Trabalhista', 'Cível'].map((area) => (
                <li key={area}>
                  <a href="#areas" className="text-white/60 hover:text-[#957152] text-sm transition-colors duration-100">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>(41) 99954-6283</li>
              <li>adv.zajali@gmail.com</li>
              <li>Curitiba, PR</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Liliane Zajaczkoski. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-white/60 text-sm">OAB/PR 132.747</p>
            <a href="/politica-de-privacidade" className="text-white/60 hover:text-[#957152] text-sm transition-colors duration-100">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
