'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-10">
      <motion.div
        className="relative rounded-2xl p-12 md:p-16 text-center gold-gradient-bg overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-navy font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Pronta para auxiliar no seu caso com dedicação e estratégia.
        </motion.h2>
        <motion.a
          href="#contato"
          className="inline-block px-8 py-4 bg-[#031127] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-smooth"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.1, ease: 'easeOut', delay: 0.2 }}
        >
          Entre em Contato
        </motion.a>
        <motion.span
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent)',
            mixBlendMode: 'overlay',
            borderRadius: '1rem',
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
      </motion.div>
    </section>
  )
}

