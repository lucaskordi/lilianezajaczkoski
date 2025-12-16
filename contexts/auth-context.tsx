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
    const auth = localStorage.getItem('admin_authenticated')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }

    const saved = localStorage.getItem('admin_pending_changes')
    if (saved) {
      try {
        setPendingChangesState(JSON.parse(saved))
      } catch (e) {
        console.error('Error loading pending changes:', e)
      }
    }

    const savedContent = localStorage.getItem('admin_saved_content')
    if (savedContent) {
      try {
        const content = JSON.parse(savedContent)
        Object.keys(content).forEach((key) => {
          if (!pendingChanges[key]) {
            setPendingChangesState((prev) => ({ ...prev, [key]: content[key] }))
          }
        })
      } catch (e) {
        console.error('Error loading saved content:', e)
      }
    }
  }, [])

  const login = () => {
    localStorage.setItem('admin_authenticated', 'true')
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem('admin_authenticated')
    localStorage.removeItem('admin_pending_changes')
    setIsAuthenticated(false)
    setPendingChangesState({})
    router.push('/adm')
  }

  const setPendingChanges = (changes: Record<string, string>) => {
    const updated = { ...pendingChanges, ...changes }
    setPendingChangesState(updated)
    localStorage.setItem('admin_pending_changes', JSON.stringify(updated))
  }

  const saveChanges = () => {
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
  }

  const discardChanges = () => {
    localStorage.removeItem('admin_pending_changes')
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

