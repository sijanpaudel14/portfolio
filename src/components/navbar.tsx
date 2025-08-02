'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))

      // Update active section
      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100 // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Get in Touch', href: '#contact', id: 'contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  if (!mounted) return null

  return (
    <>
      {/* Reading Progress Bar - Above Navbar */}
      <motion.div
        className='fixed top-0 left-0 right-0 z-50 h-1'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Progress Bar Background */}
        <div className='absolute top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700' />

        {/* Progress Bar */}
        <motion.div
          className='absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-r-full shadow-sm'
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1, ease: 'easeOut' }}
        />
      </motion.div>

      <motion.nav
        className='fixed top-1 left-0 right-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/20'
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <motion.div
              className='text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent hover:from-pink-400 hover:via-purple-400 hover:to-indigo-400 transition-all duration-500 cursor-pointer'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              SIJAN
            </motion.div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-8 ml-auto'>
              {/* Navigation items aligned to the right */}
              {navItems.slice(0, 4).map((item) => (
                <motion.div
                  key={item.name}
                  className='relative group cursor-pointer'
                  whileHover='hover'
                  initial='initial'
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer ${
                      activeSection === item.id
                        ? 'text-blue-500 dark:text-blue-400'
                        : ''
                    }`}
                  >
                    {item.name}
                  </button>
                  {/* Active Section Gradient Border */}
                  {activeSection === item.id && (
                    <motion.div
                      className='absolute -inset-2 border-2 border-blue-500/50 dark:border-blue-400/50 rounded-lg'
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                        boxShadow: [
                          '0 0 8px rgba(59, 130, 246, 0.5)',
                          '0 0 20px rgba(236, 72, 153, 0.7)',
                          '0 0 8px rgba(59, 130, 246, 0.5)',
                        ],
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        boxShadow: {
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        },
                      }}
                    />
                  )}
                  {/* Animated Underline for hover - same size as active border */}
                  <motion.div
                    className='absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'
                    variants={{
                      initial: { width: 0 },
                      hover: { width: '100%' },
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                  {/* Floating effect on hover */}
                  <motion.div
                    className='absolute -bottom-3 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full'
                    variants={{
                      initial: { opacity: 0, y: 0 },
                      hover: { opacity: 1, y: -2 },
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                </motion.div>
              ))}

              {/* "Get in touch" button with gradient */}
              <motion.div
                className='relative group cursor-pointer'
                whileHover='hover'
                initial='initial'
              >
                <button
                  onClick={() => scrollToSection('#contact')}
                  className={`relative px-6 py-2 rounded-full font-semibold transition-all duration-300 overflow-hidden border-2 cursor-pointer ${
                    activeSection === 'contact'
                      ? 'text-white shadow-lg shadow-purple-500/30 border-transparent'
                      : 'text-white border-transparent hover:shadow-lg hover:shadow-blue-500/20'
                  }`}
                >
                  {/* Background gradient - always visible */}
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      activeSection === 'contact'
                        ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-100'
                        : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-90 group-hover:opacity-100'
                    }`}
                  ></div>

                  {/* Text - always white on gradient background */}
                  <span className='relative z-10 text-white font-medium'>
                    Get in touch
                  </span>

                  {/* Shine effect on hover */}
                  <motion.div
                    className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 rounded-full'
                    variants={{
                      initial: { x: '-200%' },
                      hover: { x: '200%' },
                    }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  />
                </button>
              </motion.div>
            </div>

            {/* Mobile Menu */}
            <div className='flex items-center space-x-4'>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer'
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              className='md:hidden'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className='px-2 pt-2 pb-3 space-y-1 border-t border-gray-200/20'>
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors cursor-pointer ${
                      activeSection === item.id
                        ? 'text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : ''
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Navigation Dots - Right Side Middle */}
      <motion.div
        className='fixed right-6 top-1/2 transform -translate-y-1/2 z-30 hidden md:flex flex-col space-y-4'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.href)}
            className={`relative w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-125 group cursor-pointer ${
              activeSection === item.id
                ? 'bg-blue-500 border-blue-500 shadow-lg shadow-blue-500/50'
                : 'bg-transparent border-gray-400 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-400'
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            title={item.name}
          >
            {/* Active indicator with pulsing animation */}
            {activeSection === item.id && (
              <motion.div
                className='absolute inset-0 rounded-full bg-blue-500'
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 0.3, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )}

            {/* Tooltip on hover */}
            <span className='absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-2 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap'>
              {item.name}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </>
  )
}
