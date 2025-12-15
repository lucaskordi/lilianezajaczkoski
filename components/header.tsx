'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas de Atuação', href: '#areas' },
  { label: 'Processos', href: '#processos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const isNotHomePage = !isHomePage

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    let lastScrollY = window.scrollY
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const heroHeight = window.innerHeight
      const scrollDelta = currentScrollY - lastScrollY
      
      setScrolled(currentScrollY > 50)
      
      if (isHomePage) {
        if (currentScrollY <= heroHeight) {
          setIsVisible(true)
        } else if (scrollDelta < -2) {
          setIsVisible(true)
        } else if (scrollDelta > 2) {
          setIsVisible(false)
        }
      } else {
        if (currentScrollY < 50) {
          setIsVisible(true)
        } else if (scrollDelta < -2) {
          setIsVisible(true)
        } else if (scrollDelta > 2) {
          setIsVisible(false)
        }
      }
      
      lastScrollY = currentScrollY
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        transform: isVisible ? 'translateY(0px)' : 'translateY(-100%)',
      }}
    >
      <header
        className={`h-20 relative ${
          scrolled 
            ? 'bg-[#031127] shadow-lg' 
            : 'bg-[#031127]'
        }`}
      >
      <div className="absolute bottom-0 left-0 right-0 h-[2px] pointer-events-none overflow-hidden">
        <div 
          className="absolute bottom-0 left-[10%] right-[10%] h-full"
          style={{
            background: 'linear-gradient(to right, transparent 0%, rgba(149, 113, 82, 0.5) 20%, rgba(149, 113, 82, 0.9) 50%, rgba(149, 113, 82, 0.5) 80%, transparent 100%)',
            boxShadow: '0 0 12px rgba(149, 113, 82, 0.8), 0 0 6px rgba(224, 186, 155, 0.6), 0 0 3px rgba(149, 113, 82, 0.4)',
          }}
        />
        <div 
          className="absolute bottom-0 left-[10%] right-[10%] h-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.5) 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.5) 80%, transparent 100%)',
          }}
        >
          <motion.div
            className="absolute bottom-0 h-full w-[400px]"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(224, 186, 155, 1), rgba(149, 113, 82, 0.9), transparent)',
              boxShadow: '0 0 30px rgba(224, 186, 155, 1), 0 0 15px rgba(149, 113, 82, 0.8)',
            }}
            animate={{
              x: ['-400px', '2000px'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
              repeatDelay: 0.5,
            }}
          />
        </div>
      </div>
      <nav className="max-w-7xl mx-auto h-full px-6 md:px-10 flex items-center justify-between relative z-10">
        {isNotHomePage ? (
          <Link href="/">
            <motion.div
              className="hover-smooth cursor-pointer flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.1, ease: 'easeOut' }}
            >
              <Image
                src="/lzatff.svg"
                alt="Liliane Zajaczkoski - Advocacia & Consultoria"
                width={260}
                height={74}
                className="h-[52px] md:h-[60px] w-auto max-w-[260px]"
                priority
                style={{ objectFit: 'contain', maxWidth: '100%' }}
              />
            </motion.div>
          </Link>
        ) : (
          <motion.a
            href="#inicio"
            className="hover-smooth flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
          >
            <Image
              src="/lzatff.svg"
              alt="Liliane Zajaczkoski - Advocacia & Consultoria"
              width={260}
              height={74}
              className="h-[52px] md:h-[60px] w-auto max-w-[260px]"
              priority
              style={{ objectFit: 'contain', maxWidth: '100%' }}
            />
          </motion.a>
        )}

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => {
            const href = isNotHomePage ? `/${item.href}` : item.href
            
            return (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {isNotHomePage ? (
                  <motion.div
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.1, ease: 'easeOut' }}
                  >
                    <Link href={href} className="block">
                      <span className="relative inline-block text-white/70 group-hover:text-white transition-colors duration-100 text-sm font-medium hover-smooth cursor-pointer pb-1">
                        {item.label}
                        <span 
                          className="absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-[#957152] to-[#e0ba9b] w-0 group-hover:w-full transition-all duration-200 ease-out"
                          style={{ transform: 'translateX(-50%)' }}
                        />
                      </span>
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    href={href}
                    className="relative inline-block text-white/70 hover:text-white transition-colors duration-100 text-sm font-medium hover-smooth pb-1 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.1, ease: 'easeOut' }}
                  >
                    {item.label}
                    <span
                      className="absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-[#957152] to-[#e0ba9b] w-0 group-hover:w-full transition-all duration-200 ease-out"
                      style={{ transform: 'translateX(-50%)' }}
                    />
                  </motion.a>
                )}
              </motion.li>
            )
          })}
        </ul>

        <button
          className={`md:hidden relative w-6 h-6 flex items-center justify-center ${
            mobileMenuOpen ? 'z-[10000]' : 'z-10'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-5 h-5 relative">
            <motion.span
              className="absolute top-0 left-0 w-5 h-[1.5px] block origin-center rounded-full"
              style={{
                background: 'linear-gradient(135deg, #957152 0%, #e0ba9b 100%)',
              }}
              animate={mobileMenuOpen ? { y: 9.5, rotate: 45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
            <motion.span
              className="absolute top-2 left-0 w-5 h-[1.5px] block rounded-full"
              style={{
                background: 'linear-gradient(135deg, #957152 0%, #e0ba9b 100%)',
              }}
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
            <motion.span
              className="absolute top-4 left-0 w-5 h-[1.5px] block origin-center rounded-full"
              style={{
                background: 'linear-gradient(135deg, #957152 0%, #e0ba9b 100%)',
              }}
              animate={mobileMenuOpen ? { y: -9.5, rotate: -45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </div>
        </button>
      </nav>

      </header>

      {mounted && createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden fixed top-6 right-6 z-[10000] w-6 h-6 flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="w-5 h-5 relative flex items-center justify-center">
                  <motion.span
                    className="absolute left-0 w-5 h-[1.5px] block origin-center rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #957152 0%, #e0ba9b 100%)',
                      top: '50%',
                      transform: 'translateY(-50%)',
                    }}
                    animate={{ rotate: 45 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                  <motion.span
                    className="absolute left-0 w-5 h-[1.5px] block rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #957152 0%, #e0ba9b 100%)',
                      top: '50%',
                      transform: 'translateY(-50%)',
                    }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                  <motion.span
                    className="absolute left-0 w-5 h-[1.5px] block origin-center rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #957152 0%, #e0ba9b 100%)',
                      top: '50%',
                      transform: 'translateY(-50%)',
                    }}
                    animate={{ rotate: -45 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                </div>
              </motion.button>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden fixed inset-0 w-screen h-screen bg-[#031127]/95 backdrop-blur-md z-[9998] flex flex-col items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
                style={{ top: 0, left: 0, right: 0, bottom: 0 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex flex-col items-center justify-center space-y-6 px-6"
                  onClick={(e) => e.stopPropagation()}
                >
                {navItems.map((item, index) => {
                  const href = isNotHomePage ? `/${item.href}` : item.href
                  
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    >
                      {isNotHomePage ? (
                        <Link
                          href={href}
                          className="block text-white/70 hover:text-white font-medium text-lg transition-colors duration-100 text-center"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={href}
                          className="block text-white/70 hover:text-white font-medium text-lg transition-colors duration-100 text-center"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      )}
                    </motion.div>
                  )
                })}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.1 + navItems.length * 0.05 }}
                  className="mt-12"
                >
                  <Image
                    src="/lzatff.svg"
                    alt="Liliane Zajaczkoski - Advocacia & Consultoria"
                    width={360}
                    height={100}
                    className="h-20 w-auto max-w-[360px]"
                    style={{ objectFit: 'contain', maxWidth: '100%' }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  )
}
