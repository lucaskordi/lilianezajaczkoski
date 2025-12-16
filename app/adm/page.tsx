'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (username === 'lilizaja' && password === 'sitelilizaja2026') {
      localStorage.setItem('admin_authenticated', 'true')
      router.push('/')
    } else {
      setError('Usuário ou senha incorretos')
    }
  }

  return (
    <main className="min-h-screen bg-[#EFE8D9] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-[#031127] mb-2">
              Área Administrativa
            </h1>
            <p className="text-[#031127]/60">
              Faça login para editar o conteúdo do site
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-[#031127] mb-2">
                Usuário
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-[#EFE8D9]/50 border border-gray-200 rounded-lg text-[#031127] focus:outline-none focus:border-[#957152] focus:ring-2 focus:ring-[#957152]/20 transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#031127] mb-2">
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#EFE8D9]/50 border border-gray-200 rounded-lg text-[#031127] focus:outline-none focus:border-[#957152] focus:ring-2 focus:ring-[#957152]/20 transition-all"
                required
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm"
              >
                {error}
              </motion.div>
            )}

            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-[#957152] to-[#e0ba9b] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Entrar
            </motion.button>
          </form>
        </div>
      </motion.div>
    </main>
  )
}

