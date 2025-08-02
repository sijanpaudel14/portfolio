'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoaderProps {
  onComplete: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 1000)
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black'
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className='text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient'
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        SIJANPAUDEL
      </motion.h1>
    </motion.div>
  )
}
