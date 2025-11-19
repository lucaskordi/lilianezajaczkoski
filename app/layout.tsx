import type { Metadata } from 'next'
import './globals.css'
import CursorWrapper from '@/components/cursor-wrapper'

export const metadata: Metadata = {
  title: 'Liliane Zajaczkoski - Advocacia',
  description: 'Advocacia especializada em múltiplas áreas do direito com atuação ética, precisa e focada em resultados',
  icons: {
    icon: '/favico.svg',
    shortcut: '/favico.svg',
    apple: '/favico.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <CursorWrapper>
          {children}
        </CursorWrapper>
      </body>
    </html>
  )
}

