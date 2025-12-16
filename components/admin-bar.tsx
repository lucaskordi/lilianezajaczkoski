'use client'

import { motion } from 'framer-motion'
import { useAuth } from '@/contexts/auth-context'

export default function AdminBar() {
  const { isAuthenticated, logout, saveChanges, discardChanges, hasPendingChanges } = useAuth()

  if (!isAuthenticated) return null

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-[9999] bg-[#031127] border-b border-[#957152]/30 shadow-lg"
      >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-white text-sm font-medium">Modo de Edição Ativo</span>
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            onClick={saveChanges}
            disabled={!hasPendingChanges}
            className="px-4 py-2 bg-gradient-to-r from-[#957152] to-[#e0ba9b] text-white text-sm font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
            whileHover={hasPendingChanges ? { scale: 1.05 } : {}}
            whileTap={hasPendingChanges ? { scale: 0.95 } : {}}
          >
            Salvar Alterações
          </motion.button>

          <motion.button
            onClick={discardChanges}
            disabled={!hasPendingChanges}
            className="px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-lg border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-all"
            whileHover={hasPendingChanges ? { scale: 1.05 } : {}}
            whileTap={hasPendingChanges ? { scale: 0.95 } : {}}
          >
            Descartar Alterações
          </motion.button>

          <motion.button
            onClick={logout}
            className="px-4 py-2 bg-red-500/20 text-red-300 text-sm font-medium rounded-lg border border-red-500/30 hover:bg-red-500/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Logout
          </motion.button>
        </div>
      </div>
      </motion.div>
      <div className="h-[60px]" />
    </>
  )
}

