'use client'

import { practiceAreas, getPracticeAreaBySlug } from '@/data/practice-areas'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Contact from '@/components/contact'
import Link from 'next/link'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import EditableText from '@/components/editable-text'
import EditableMultilineText from '@/components/editable-multiline-text'
import { 
  IoCalculator, 
  IoShieldCheckmark, 
  IoBriefcase, 
  IoDocumentText,
  IoHome,
  IoBusiness,
  IoGlobe,
  IoCar,
  IoPeople,
  IoLeaf,
  IoHammer,
  IoContract,
  IoLockClosed,
  IoCart
} from 'react-icons/io5'
import { IconScale, IconConsult } from '@/components/icons'

const iconMap: Record<string, any> = {
  scale: IconScale,
  shield: IoShieldCheckmark,
  briefcase: IoBriefcase,
  document: IoDocumentText,
  home: IoHome,
  business: IoBusiness,
  globe: IoGlobe,
  car: IoCar,
  family: IoPeople,
  leaf: IoLeaf,
  hammer: IoHammer,
  contract: IoContract,
  lock: IoLockClosed,
  cart: IoCart,
  consult: IconConsult,
  chart: IoCalculator,
}

export default function PracticeAreaPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const router = useRouter()
  const area = getPracticeAreaBySlug(slug)

  useEffect(() => {
    if (!area) {
      router.push('/#areas')
    }
  }, [area, router])

  if (!area) {
    return null
  }

  const Icon = iconMap[area.iconType] || IoDocumentText

  return (
    <main className="min-h-screen bg-[#EFE8D9]">
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
              href="/#areas"
              className="inline-flex items-center text-[#031127]/70 hover:text-[#957152] transition-colors duration-100 mb-6"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar às Áreas de Atuação
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center text-[#957152] border border-[#957152]/20 bg-[#957152]/5">
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <span className="text-sm font-semibold text-[#957152] uppercase tracking-wide block">
                  Área de Atuação
                </span>
              </div>
            </div>

            <EditableText
              id={`area-${area.slug}-title`}
              tag="h1"
              className="text-4xl md:text-5xl font-serif font-bold text-[#031127] mb-6 leading-tight"
            >
              {area.title}
            </EditableText>

            <EditableText
              id={`area-${area.slug}-description`}
              tag="p"
              className="text-xl text-[#031127]/70 mb-8 leading-relaxed"
            >
              {area.description}
            </EditableText>
          </motion.div>

          {area.coverImage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="relative w-full h-64 md:h-96 bg-gray-100">
                <Image
                  src={area.coverImage}
                  alt={area.title}
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  unoptimized
                />
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <EditableMultilineText
              id={`area-${area.slug}-content`}
              paragraphs={area.content}
              className="prose prose-lg max-w-none"
              paragraphClassName="text-[#031127]/80 leading-relaxed mb-6 text-lg text-justify"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="bg-gradient-to-br from-[#957152]/10 to-[#e0ba9b]/5 rounded-xl p-8 border border-[#957152]/20">
              <EditableText
                id={`area-${area.slug}-cta-title`}
                tag="h3"
                className="text-2xl font-serif font-bold text-[#031127] mb-4"
              >
                Precisa de orientação jurídica nesta área?
              </EditableText>
              <EditableText
                id={`area-${area.slug}-cta-text`}
                tag="p"
                className="text-[#031127]/70 mb-6 text-lg"
              >
                Entre em contato para uma consulta especializada sobre {area.title.toLowerCase()}. Estamos prontos para ajudar você.
              </EditableText>
            </div>
          </motion.div>
        </div>
      </article>

      <Contact />

      <Footer />
    </main>
  )
}

