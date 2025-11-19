'use client'

import { articles, getArticleBySlug } from '@/data/articles'
import { getArticleIcon } from '@/utils/article-icons'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const router = useRouter()
  const article = getArticleBySlug(slug)

  useEffect(() => {
    if (!article) {
      router.push('/blog')
    }
  }, [article, router])

  if (!article) {
    return null
  }

  const relatedArticles = articles
    .filter(a => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link 
              href="/blog"
              className="inline-flex items-center text-[#031127]/70 hover:text-[#b28947] transition-colors duration-100 mb-6"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar ao Blog
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-semibold text-[#b28947] uppercase tracking-wide">
                {article.category}
              </span>
              <span className="text-sm text-[#031127]/50">•</span>
              <span className="text-sm text-[#031127]/50">{article.readTime} de leitura</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#031127] mb-6 leading-tight">
              {article.title}
            </h1>

            {article.coverImage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="relative w-full h-64 md:h-96">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                  />
                </div>
              </motion.div>
            )}

            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-[#b28947]/20 to-[#031127]/10 rounded-full flex items-center justify-center">
                {(() => {
                  const Icon = getArticleIcon(article.iconType)
                  return <Icon className="w-6 h-6 text-[#b28947]" />
                })()}
              </div>
              <div>
                <p className="font-semibold text-[#031127]">{article.author}</p>
                <p className="text-sm text-[#031127]/60">Advogada Especialista</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {article.content.map((paragraph, index) => (
              <p 
                key={index}
                className="text-[#031127]/80 leading-relaxed mb-6 text-lg"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gray-100 text-[#031127]/70 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#b28947]/10 to-[#e6c980]/5 rounded-xl p-6 border border-[#b28947]/20">
              <h3 className="text-xl font-serif font-bold text-[#031127] mb-3">
                Precisa de orientação jurídica?
              </h3>
              <p className="text-[#031127]/70 mb-4">
                Entre em contato para uma consulta especializada sobre este assunto.
              </p>
              <motion.a
                href="/#contato"
                className="relative inline-block px-8 py-4 bg-gradient-to-r from-[#b28947] to-[#e6c980] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-smooth"
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
                <span className="relative z-20">Agendar Consulta</span>
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
              </motion.a>
            </div>
          </motion.div>
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl font-serif font-bold text-[#031127] mb-8">
              Artigos Relacionados
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.slug}
                  href={`/blog/${relatedArticle.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-100 group hover-smooth"
                >
                  {relatedArticle.coverImage ? (
                    <div className="relative h-40 w-full">
                      <Image
                        src={relatedArticle.coverImage}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover"
                        quality={85}
                      />
                    </div>
                  ) : (
                    <div className="h-40 bg-gradient-to-br from-[#b28947]/20 to-[#031127]/10 flex items-center justify-center">
                      {(() => {
                        const Icon = getArticleIcon(relatedArticle.iconType)
                        return <Icon className="w-16 h-16 text-[#b28947]" />
                      })()}
                    </div>
                  )}
                  <div className="p-6">
                    <span className="text-xs font-semibold text-[#b28947] uppercase tracking-wide">
                      {relatedArticle.category}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-[#031127] mt-2 mb-2 group-hover:gold-gradient-text transition-all duration-100">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-[#031127]/70 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}

