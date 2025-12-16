'use client'

import { useState, useEffect, useRef } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { motion, AnimatePresence } from 'framer-motion'

interface EditableMultilineTextProps {
  id: string
  paragraphs: string[]
  className?: string
  paragraphClassName?: string
}

export default function EditableMultilineText({
  id,
  paragraphs,
  className = '',
  paragraphClassName = '',
}: EditableMultilineTextProps) {
  const { isAuthenticated, pendingChanges, setPendingChanges } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(paragraphs.join('\n\n'))
  const [displayValue, setDisplayValue] = useState(paragraphs.join('\n\n'))
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    let finalValue = paragraphs.join('\n\n')

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
    setValue(finalValue)
  }, [paragraphs, id, pendingChanges])

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus()
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
    if (e.key === 'Escape') {
      handleCancel()
    }
  }

  const displayParagraphs = displayValue.split('\n\n').filter(p => p.trim())

  if (!isAuthenticated) {
    return (
      <div className={className}>
        {displayParagraphs.map((paragraph, index) => (
          <p key={index} className={paragraphClassName}>
            {paragraph}
          </p>
        ))}
      </div>
    )
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
          className={`${className} w-full p-4 border-2 border-[#957152] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#957152]/20 bg-white/95 z-10 min-h-[200px]`}
          rows={Math.max(5, value.split('\n\n').length * 2)}
        />
        <div className="absolute -top-10 right-0 flex gap-2 z-20">
          <motion.button
            onClick={handleSave}
            className="px-3 py-1.5 bg-green-500 text-white text-sm rounded shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Salvar
          </motion.button>
          <motion.button
            onClick={handleCancel}
            className="px-3 py-1.5 bg-red-500 text-white text-sm rounded shadow-lg"
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
    <div className={`relative group ${className}`}>
      {displayParagraphs.map((paragraph, index) => (
        <p key={index} className={paragraphClassName}>
          {paragraph}
        </p>
      ))}
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

