'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { articles } from '@/data/articles'
import { getArticleIcon } from '@/utils/article-icons'
import GoldSweep from './gold-sweep'

const featuredArticles = articles.slice(0, 3)

export default function Blog() {
  return (
    <section
      id="blog"
      className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
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
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#031127] mb-4">
            Artigos e Notícias
          </h2>
          <p className="text-[#031127]/70 text-lg max-w-2xl mx-auto">
            Mantenha-se informado sobre as últimas novidades do mundo jurídico
          </p>
          <GoldSweep isLine className="w-24 h-1 mx-auto mt-4">
            <div className="w-full h-full bg-gradient-to-r from-[#b28947] to-[#e6c980]" />
          </GoldSweep>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <Link href={`/blog/${article.slug}`} className="block">
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-100 group hover-smooth"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {article.coverImage ? (
                  <div className="relative h-48 w-full">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover"
                      quality={85}
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-[#b28947]/20 to-[#031127]/10 flex items-center justify-center">
                    {(() => {
                      const Icon = getArticleIcon(article.iconType)
                      return <Icon className="w-20 h-20 text-[#b28947]" />
                    })()}
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#b28947] uppercase tracking-wide">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-[#031127]/50">
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                    <h3 className="text-xl font-serif font-bold text-[#031127] mb-3 group-hover:gold-gradient-text transition-all duration-100">
                      {article.title}
                    </h3>
                  
                  <p className="text-[#031127]/70 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  
                  <span className="inline-flex items-center text-[#031127] font-semibold text-sm group-hover:text-[#b28947] transition-colors duration-100">
                    Ler mais
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/blog"
            className="inline-block px-8 py-4 border border-[#031127]/20 text-[#031127] font-medium rounded-full hover:border-[#031127]/40 hover:bg-[#031127]/5 transition-all duration-300 hover-smooth"
          >
            Ver Todos os Artigos
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

