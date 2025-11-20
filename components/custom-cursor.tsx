'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  
  const velocityX = useMotionValue(0)
  const velocityY = useMotionValue(0)
  
  const lastMouseX = useRef(0)
  const lastMouseY = useRef(0)
  const lastTime = useRef(Date.now())
  
  const pointerOffsetX = useMotionValue(0)
  const pointerOffsetY = useMotionValue(0)
  
  const maxDistance = 12
  
  const pointerXFinal = useMotionValue(0)
  const pointerYFinal = useMotionValue(0)

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      const deltaTime = (now - lastTime.current) / 1000
      lastTime.current = now
      
      const deltaX = e.clientX - lastMouseX.current
      const deltaY = e.clientY - lastMouseY.current
      
      if (deltaTime > 0) {
        velocityX.set(deltaX / deltaTime * 0.3)
        velocityY.set(deltaY / deltaTime * 0.3)
      }
      
      lastMouseX.current = e.clientX
      lastMouseY.current = e.clientY
      
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      
      const currentPointerX = pointerX.get()
      const currentPointerY = pointerY.get()
      
      const newPointerX = currentPointerX + velocityX.get() * 0.2
      const newPointerY = currentPointerY + velocityY.get() * 0.2
      
      const offsetX = newPointerX - e.clientX
      const offsetY = newPointerY - e.clientY
      const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2)
      
      if (distance > maxDistance) {
        const angle = Math.atan2(offsetY, offsetX)
        pointerX.set(e.clientX + Math.cos(angle) * maxDistance)
        pointerY.set(e.clientY + Math.sin(angle) * maxDistance)
      } else {
        pointerX.set(newPointerX)
        pointerY.set(newPointerY)
      }
      
      pointerOffsetX.set(pointerX.get() - e.clientX)
      pointerOffsetY.set(pointerY.get() - e.clientY)
      
      pointerXFinal.set(e.clientX + pointerOffsetX.get())
      pointerYFinal.set(e.clientY + pointerOffsetY.get())
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    
    setIsVisible(true)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isDesktop, cursorX, cursorY, pointerX, pointerY, velocityX, velocityY])

  useEffect(() => {
    if (!isDesktop || !isVisible) return

    let animationFrame: number
    
    const update = () => {
      const currentPointerX = pointerX.get()
      const currentPointerY = pointerY.get()
      const currentCursorX = cursorX.get()
      const currentCursorY = cursorY.get()
      
      const distanceX = currentPointerX - currentCursorX
      const distanceY = currentPointerY - currentCursorY
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)
      
      if (distance < 0.1) {
        pointerX.set(currentCursorX)
        pointerY.set(currentCursorY)
        velocityX.set(0)
        velocityY.set(0)
        pointerOffsetX.set(0)
        pointerOffsetY.set(0)
        pointerXFinal.set(currentCursorX)
        pointerYFinal.set(currentCursorY)
      } else {
        const returnForce = 0.15
        const newX = currentPointerX - distanceX * returnForce
        const newY = currentPointerY - distanceY * returnForce
        
        pointerX.set(newX)
        pointerY.set(newY)
        
        const offsetX = newX - currentCursorX
        const offsetY = newY - currentCursorY
        const offsetDistance = Math.sqrt(offsetX ** 2 + offsetY ** 2)
        
        if (offsetDistance > maxDistance) {
          const angle = Math.atan2(offsetY, offsetX)
          pointerOffsetX.set(Math.cos(angle) * maxDistance)
          pointerOffsetY.set(Math.sin(angle) * maxDistance)
        } else {
          pointerOffsetX.set(offsetX)
          pointerOffsetY.set(offsetY)
        }
        
        pointerXFinal.set(currentCursorX + pointerOffsetX.get())
        pointerYFinal.set(currentCursorY + pointerOffsetY.get())
        
        velocityX.set(velocityX.get() * 0.9)
        velocityY.set(velocityY.get() * 0.9)
      }
      
      animationFrame = requestAnimationFrame(update)
    }
    
    update()

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isDesktop, isVisible, cursorX, cursorY, pointerX, pointerY, velocityX, velocityY, pointerOffsetX, pointerOffsetY, maxDistance])

  if (typeof window === 'undefined' || !isDesktop) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[99999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          className="w-full h-full rounded-full border-2"
          style={{
            borderColor: '#957152',
            background: 'transparent',
          }}
        />
      </motion.div>
      
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[99999]"
        style={{
          x: pointerXFinal,
          y: pointerYFinal,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'linear-gradient(135deg, #957152 0%, #e0ba9b 100%)',
          }}
        />
      </motion.div>
    </>
  )
}

