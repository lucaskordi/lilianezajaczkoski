'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link 
              href="/"
              className="inline-flex items-center text-[#031127]/70 hover:text-[#957152] transition-colors duration-100 mb-6"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar ao Início
            </Link>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#031127] mb-6 leading-tight">
              Política de Privacidade
            </h1>
            <p className="text-[#031127]/60 text-sm mb-8">
              Última atualização: {new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-[#031127] mb-4">
                1. Informações Coletadas
              </h2>
              <p className="text-[#031127]/80 leading-relaxed mb-4">
                Coletamos informações que você nos fornece diretamente, incluindo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#031127]/80 ml-4">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone</li>
                <li>Informações sobre seu caso ou consulta</li>
                <li>Qualquer outra informação que você opte por compartilhar conosco</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-[#031127] mb-4">
                2. Uso das Informações
              </h2>
              <p className="text-[#031127]/80 leading-relaxed mb-4">
                Utilizamos as informações coletadas para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#031127]/80 ml-4">
                <li>Responder às suas solicitações e fornecer serviços jurídicos</li>
                <li>Entrar em contato com você sobre consultas e serviços</li>
                <li>Melhorar nossos serviços e experiência do usuário</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Enviar comunicações relacionadas aos nossos serviços, quando autorizado</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-[#031127] mb-4">
                3. Compartilhamento de Informações
              </h2>
              <p className="text-[#031127]/80 leading-relaxed">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto nas seguintes situações:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#031127]/80 ml-4 mt-4">
                <li>Quando necessário para cumprir obrigações legais ou processos judiciais</li>
                <li>Com seu consentimento explícito</li>
                <li>Para proteger nossos direitos, propriedade ou segurança</li>
                <li>Com prestadores de serviços que nos auxiliam na operação do site, sujeitos a acordos de confidencialidade</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-[#031127] mb-4">
                4. Segurança dos Dados
              </h2>
              <p className="text-[#031127]/80 leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-[#031127] mb-4">
                5. Seus Direitos
              </h2>
              <p className="text-[#031127]/80 leading-relaxed mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#031127]/80 ml-4">
                <li>Acesso aos seus dados pessoais</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
                <li>Portabilidade dos dados</li>
                <li>Eliminação dos dados pessoais</li>
                <li>Revogação do consentimento</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-[#031127] mb-4">
                6. Cookies e Tecnologias Similares
              </h2>
              <p className="text-[#031127]/80 leading-relaxed">
                Nosso site pode utilizar cookies e tecnologias similares para melhorar sua experiência. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-[#031127] mb-4">
                7. Alterações nesta Política
              </h2>
              <p className="text-[#031127]/80 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre alterações significativas publicando a nova política nesta página e atualizando a data de "Última atualização".
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-[#031127] mb-4">
                8. Contato
              </h2>
              <p className="text-[#031127]/80 leading-relaxed mb-4">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato conosco:
              </p>
              <div className="space-y-2 text-[#031127]/80">
                <p><strong>E-mail:</strong> contato@lilianezajaczkoski.com.br</p>
                <p><strong>Telefone:</strong> (41) 99203-1908</p>
                <p><strong>Endereço:</strong> Curitiba, PR</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

