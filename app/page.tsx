import Header from '@/components/header'
import Hero from '@/components/hero'
import Stats from '@/components/stats'
import About from '@/components/about'
import Process from '@/components/process'
import PracticeAreas from '@/components/practice-areas'
import Testimonials from '@/components/testimonials'
import FAQ from '@/components/faq'
import Blog from '@/components/blog'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Process />
      <PracticeAreas />
      <Testimonials />
      <FAQ />
      <Blog />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
