'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface AuthContextType {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
  pendingChanges: Record<string, string>
  setPendingChanges: (changes: Record<string, string>) => void
  saveChanges: () => void
  discardChanges: () => void
  hasPendingChanges: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [pendingChanges, setPendingChangesState] = useState<Record<string, string>>({})
  const router = useRouter()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const checkAuth = () => {
      const auth = localStorage.getItem('admin_authenticated')
      setIsAuthenticated(auth === 'true')
    }

    checkAuth()

    const loadContent = async () => {
      try {
        const response = await fetch('/api/admin/content')
        if (response.ok) {
          const content = await response.json()
          if (Object.keys(content).length > 0) {
            const saved = localStorage.getItem('admin_pending_changes')
            const pending = saved ? JSON.parse(saved) : {}
            const merged = { ...content }
            Object.keys(pending).forEach((key) => {
              if (!merged[key]) {
                merged[key] = pending[key]
              }
            })
            setPendingChangesState(merged)
          }
        }
      } catch (e) {
        console.error('Error loading content from server:', e)
        const saved = localStorage.getItem('admin_saved_content')
        if (saved) {
          try {
            const content = JSON.parse(saved)
            setPendingChangesState(content)
          } catch (err) {
            console.error('Error loading from localStorage:', err)
          }
        }
      }
    }

    loadContent()

    const saved = localStorage.getItem('admin_pending_changes')
    if (saved) {
      try {
        const pending = JSON.parse(saved)
        setPendingChangesState((prev) => ({ ...prev, ...pending }))
      } catch (e) {
        console.error('Error loading pending changes:', e)
      }
    }

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'admin_authenticated') {
        checkAuth()
      }
    }

    const handleCustomStorageChange = () => {
      checkAuth()
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('adminAuthChange', handleCustomStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('adminAuthChange', handleCustomStorageChange)
    }
  }, [])

  const login = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('admin_authenticated', 'true')
      window.dispatchEvent(new Event('adminAuthChange'))
    }
    setIsAuthenticated(true)
  }

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('admin_authenticated')
      localStorage.removeItem('admin_pending_changes')
      window.dispatchEvent(new Event('adminAuthChange'))
    }
    setIsAuthenticated(false)
    setPendingChangesState({})
    router.push('/adm')
  }

  const setPendingChanges = (changes: Record<string, string>) => {
    const updated = { ...pendingChanges, ...changes }
    setPendingChangesState(updated)
    if (typeof window !== 'undefined') {
      localStorage.setItem('admin_pending_changes', JSON.stringify(updated))
    }
  }

  const saveChanges = async () => {
    if (typeof window === 'undefined') return

    try {
      const response = await fetch('/api/admin/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: pendingChanges }),
      })

      if (response.ok) {
        const result = await response.json()
        if (result.success) {
          if (typeof window !== 'undefined') {
            localStorage.setItem('admin_saved_content', JSON.stringify(result.content))
            localStorage.removeItem('admin_pending_changes')
          }
          setPendingChangesState({})
          alert('Alterações salvas com sucesso!')
        } else {
          throw new Error('Failed to save')
        }
      } else {
        throw new Error('Failed to save')
      }
    } catch (error) {
      console.error('Error saving content:', error)
      const savedContent = localStorage.getItem('admin_saved_content')
      let existingContent: Record<string, string> = {}
      
      if (savedContent) {
        try {
          existingContent = JSON.parse(savedContent)
        } catch (e) {
          console.error('Error loading saved content:', e)
        }
      }

      const newContent = { ...existingContent, ...pendingChanges }
      localStorage.setItem('admin_saved_content', JSON.stringify(newContent))
      localStorage.removeItem('admin_pending_changes')
      setPendingChangesState({})
      alert('Alterações salvas localmente (erro ao salvar no servidor)')
    }
  }

  const discardChanges = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('admin_pending_changes')
    }
    setPendingChangesState({})
  }

  const hasPendingChanges = Object.keys(pendingChanges).length > 0

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        pendingChanges,
        setPendingChanges,
        saveChanges,
        discardChanges,
        hasPendingChanges,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

