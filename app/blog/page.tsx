'use client'

import { articles } from '@/data/articles'
import { getArticleIcon } from '@/utils/article-icons'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#031127] mb-4">
              Blog Jurídico
            </h1>
            <p className="text-[#031127]/70 text-lg max-w-2xl mx-auto">
              Artigos, notícias e análises sobre as principais áreas do direito
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#b28947] to-[#e6c980] mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-100 group hover-smooth"
              >
                <Link href={`/blog/${article.slug}`}>
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
                    
                    <h2 className="text-xl font-serif font-bold text-[#031127] mb-3 group-hover:gold-gradient-text transition-all duration-100">
                      {article.title}
                    </h2>
                    
                    <p className="text-[#031127]/70 text-sm leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#031127]/50">
                        Por {article.author}
                      </span>
                      <span className="inline-flex items-center text-[#031127] font-semibold text-sm group-hover:text-[#b28947] transition-colors duration-100">
                        Ler mais
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

