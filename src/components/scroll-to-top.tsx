'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const checkScrollPosition = () => {
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop
        const scrollPosition = window.scrollY
        const windowHeight = window.innerHeight

        // Show button when user scrolls to about section
        setIsVisible(scrollPosition >= aboutTop - windowHeight / 2)
      }
    }

    window.addEventListener('scroll', checkScrollPosition)
    checkScrollPosition() // Check initial position

    return () => window.removeEventListener('scroll', checkScrollPosition)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className='fixed bottom-8 cursor-pointer right-8 z-50 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group'
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0.3,
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
        >
          <ArrowUp
            size={24}
            className='group-hover:scale-110 transition-transform duration-200'
          />

          {/* Pulse effect */}
          <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-20' />

          {/* Hover glow effect */}
          <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md' />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
