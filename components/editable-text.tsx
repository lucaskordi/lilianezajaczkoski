'use client'

import { useState, useEffect, useRef } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { motion, AnimatePresence } from 'framer-motion'

interface EditableTextProps {
  id: string
  children: string
  className?: string
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'div'
  multiline?: boolean
}

export default function EditableText({
  id,
  children,
  className = '',
  tag = 'p',
  multiline = false,
}: EditableTextProps) {
  const { isAuthenticated, pendingChanges, setPendingChanges } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(children)
  const [displayValue, setDisplayValue] = useState(children)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    let finalValue = children

    if (typeof window !== 'undefined') {
      const savedContent = localStorage.getItem('admin_saved_content')
      if (savedContent) {
        try {
          const content = JSON.parse(savedContent)
          if (content[id]) {
            finalValue = content[id]
          }
        } catch (e) {
          console.error('Error loading saved content:', e)
        }
      }
    }

    if (pendingChanges[id]) {
      finalValue = pendingChanges[id]
    }

    setDisplayValue(finalValue)
    if (!isEditing) {
      setValue(finalValue)
    }
  }, [children, id, pendingChanges, isEditing])

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus()
      textareaRef.current.select()
    }
  }, [isEditing])

  const handleSave = () => {
    setPendingChanges({ [id]: value })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setValue(displayValue)
    setIsEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline && !e.shiftKey) {
      e.preventDefault()
      handleSave()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  const Tag = tag as keyof JSX.IntrinsicElements

  if (!isAuthenticated) {
    return <Tag className={className}>{displayValue}</Tag>
  }

  if (isEditing) {
    return (
      <div className="relative group">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
          className={`${className} w-full p-2 border-2 border-[#957152] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#957152]/20 bg-white/95 z-10`}
          rows={multiline ? Math.max(3, value.split('\n').length) : 1}
          style={{ minHeight: multiline ? '80px' : 'auto' }}
        />
        <div className="absolute -top-8 right-0 flex gap-2 z-20">
          <motion.button
            onClick={handleSave}
            className="px-2 py-1 bg-green-500 text-white text-xs rounded shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Salvar
          </motion.button>
          <motion.button
            onClick={handleCancel}
            className="px-2 py-1 bg-red-500 text-white text-xs rounded shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Cancelar
          </motion.button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative group inline-block w-full">
      <Tag className={className}>{displayValue}</Tag>
      <AnimatePresence>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => setIsEditing(true)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-[#957152] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#e0ba9b] transition-colors z-10"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </motion.button>
      </AnimatePresence>
    </div>
  )
}

