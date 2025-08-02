'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Code2,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText =
    "Hi, I'm SIJAN PAUDEL\nComputer Engineer,\nAI Enthusiast,\nDeveloper"

  useEffect(() => {
    let currentIndex = 0
    let timeoutId: NodeJS.Timeout

    const animateText = () => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
        timeoutId = setTimeout(animateText, 80)
      }
      // Stop when full text is displayed - no looping
    }

    animateText()

    return () => clearTimeout(timeoutId)
  }, [fullText])

  const socialLinks = [
    { icon: Github, href: 'https://github.com/sijanpaudel14', label: 'GitHub' },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/sijanpaudel14',
      label: 'LinkedIn',
    },
  ]

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16 bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/20 dark:from-gray-900 dark:via-blue-900/5 dark:to-purple-900/5'
    >
      {/* Enhanced Background */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Animated gradient orbs */}
        <motion.div
          className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl'
          animate={{
            x: [0, 80],
            y: [0, -40],
            scale: [1, 1.2],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl'
          animate={{
            x: [0, -60],
            y: [0, 30],
            scale: [1, 0.9],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute top-1/2 right-1/6 w-64 h-64 bg-gradient-to-r from-emerald-500/6 to-teal-500/6 rounded-full blur-3xl'
          animate={{
            x: [0, -40],
            y: [0, -25],
            scale: [1, 1.1],
          }}
          transition={{
            duration: 29,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />

        {/* Multiple floating bubbles */}
        <motion.div
          className='absolute top-1/3 left-1/6 w-4 h-4 bg-blue-500/20 rounded-full backdrop-blur-sm'
          animate={{
            y: [0, -30],
            x: [0, 20],
            scale: [1, 1.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute bottom-1/3 right-1/6 w-3 h-3 bg-purple-500/25 rounded-full backdrop-blur-sm'
          animate={{
            y: [0, 25],
            x: [0, -20],
            opacity: [0.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />

        {/* Grid pattern overlay */}
        <div className='absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px]' />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-16'>
          {/* Enhanced Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='flex-1 space-y-8'
          >
            {/* Enhanced Icon with floating bubbles */}
            <motion.div
              className='inline-block mb-8 relative'
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-70 animate-pulse'></div>
                <div className='relative p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-2xl'>
                  <Code2 size={36} className='text-white' />
                </div>
                {/* Floating sparkles around icon */}
                <motion.div
                  className='absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full'
                  animate={{
                    scale: [0, 1],
                    opacity: [0, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: 0,
                  }}
                />
                <motion.div
                  className='absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full'
                  animate={{
                    scale: [0, 1],
                    opacity: [0, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: 0.5,
                  }}
                />
                {/* Floating bubbles around icon */}
                <motion.div
                  className='absolute -top-4 left-1/2 w-2 h-2 bg-blue-400/60 rounded-full backdrop-blur-sm'
                  animate={{
                    y: [0, -15],
                    x: [0, 8],
                    opacity: [0.3, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className='absolute -right-6 top-1/4 w-3 h-3 bg-purple-400/50 rounded-full backdrop-blur-sm'
                  animate={{
                    y: [0, 12],
                    x: [0, -10],
                    scale: [1, 1.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className='absolute -left-6 bottom-1/4 w-2 h-2 bg-cyan-400/70 rounded-full backdrop-blur-sm'
                  animate={{
                    y: [0, -10],
                    x: [0, 12],
                    opacity: [0.4, 1],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                />
              </div>
            </motion.div>

            <div className='space-y-6'>
              {/* Animated text with coming/going effect */}
              <motion.h1
                className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight min-h-[180px] sm:min-h-[200px] md:min-h-[250px]'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent whitespace-pre-line'>
                  {displayText}
                </span>
                <motion.span
                  className='inline-block w-1 h-12 sm:h-14 md:h-16 lg:h-20 bg-gradient-to-b from-blue-500 to-purple-500 ml-2'
                  animate={{ opacity: [0, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
              </motion.h1>

              <motion.p
                className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                Passionate about{' '}
                <span className='relative px-2 py-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 dark:text-blue-400 font-semibold rounded-lg border border-blue-200/30 dark:border-blue-700/30'>
                  AI & Machine Learning
                </span>
                , solving real-world problems through code, and building
                innovative solutions. Open to collaborations and research
                opportunities.
              </motion.p>
            </div>

            {/* Enhanced Social Links */}
            <motion.div
              className='flex items-center space-x-6'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 group shadow-lg hover:shadow-xl'
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <social.icon
                    size={24}
                    className='group-hover:scale-110 transition-transform duration-300'
                  />

                  {/* Floating sparkle on hover */}
                  <motion.div
                    className='absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100'
                    animate={{
                      scale: [0, 1],
                      rotate: [0, 180],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      delay: index * 0.2,
                    }}
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className='flex flex-col sm:flex-row gap-4'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <motion.a
                href='#contact'
                className='relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2 group overflow-hidden'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated background effect */}
                <div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <span className='relative z-10'>Contact Me</span>
                <Mail
                  size={20}
                  className='relative z-10 group-hover:translate-x-1 transition-transform duration-300'
                />

                {/* Sparkle effects */}
                <motion.div
                  className='absolute top-2 right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100'
                  animate={{
                    scale: [0, 1],
                    x: [0, 5],
                    y: [0, -5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: 0,
                  }}
                />
              </motion.a>

              <motion.a
                href='/Sijan_Paudel_Resume.pdf'
                download
                className='relative px-8 py-4 border-2 border-blue-500 text-blue-500 dark:text-blue-400 rounded-2xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View CV</span>
                <Download
                  size={20}
                  className='group-hover:translate-y-1 transition-transform duration-300'
                />

                {/* Hover glow effect */}
                <div className='absolute inset-0 bg-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Enhanced Profile Image with 3D Effects - Aligned with text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className='flex-shrink-0 relative self-center lg:self-start lg:mt-23'
          >
            <div className='relative group'>
              {/* Floating decorative orbs */}
              <motion.div
                className='absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-sm'
                animate={{ rotate: 360, scale: [1, 1.2] }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                  scale: {
                    duration: 10,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  },
                }}
              />
              <motion.div
                className='absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-30 blur-sm'
                animate={{ rotate: -360, scale: [1, 1.1] }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                  scale: {
                    duration: 8,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  },
                }}
              />

              {/* Main photo container with glass morphism */}
              <motion.div
                className='relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl backdrop-blur-sm border-4 border-white/20 dark:border-gray-700/30'
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: 2 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Image
                  src='/portfolio/sijan.png'
                  alt='Sijan Paudel'
                  width={400}
                  height={400}
                  className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700'
                  priority
                />

                {/* Status indicator */}
                <div className='absolute top-4 right-4 flex items-center space-x-2 z-20'>
                  <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg' />
                  <span className='text-xs font-medium text-white bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm'>
                    Available
                  </span>
                </div>
              </motion.div>

              {/* Floating tech icons with enhanced effects */}
              <motion.div
                className='absolute -top-6 -left-6 p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/30'
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  type: 'spring',
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15, rotate: 10, y: -5 }}
                animate={{
                  y: [0, -5],
                }}
                style={{
                  animationDuration: '3s',
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'ease-in-out',
                  animationDirection: 'alternate',
                }}
              >
                <Code2 className='w-7 h-7 text-blue-500' />
              </motion.div>

              <motion.div
                className='absolute -bottom-6 -right-6 p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/30'
                initial={{ opacity: 0, scale: 0, rotate: 180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                  type: 'spring',
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15, rotate: -10, y: -5 }}
                animate={{
                  y: [0, 5],
                }}
                style={{
                  animationDuration: '3.5s',
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'ease-in-out',
                  animationDirection: 'alternate',
                }}
              >
                <Sparkles className='w-7 h-7 text-purple-500' />
              </motion.div>

              <motion.div
                className='absolute top-1/2 -left-10 p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/30'
                initial={{ opacity: 0, scale: 0, rotate: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.2,
                  type: 'spring',
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15, rotate: 5, x: 5 }}
                animate={{
                  x: [0, -3],
                }}
                style={{
                  animationDuration: '4s',
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'ease-in-out',
                  animationDirection: 'alternate',
                }}
              >
                <Star className='w-7 h-7 text-green-500' />
              </motion.div>

              <motion.div
                className='absolute top-1/6 -right-12 p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/30'
                initial={{ opacity: 0, scale: 0, rotate: 90 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.4,
                  type: 'spring',
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15, rotate: -5, x: -5 }}
                animate={{
                  x: [0, 3],
                  rotate: [0, 5],
                }}
                style={{
                  animationDuration: '2.5s',
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'ease-in-out',
                  animationDirection: 'alternate',
                }}
              >
                <Zap className='w-7 h-7 text-yellow-500' />
              </motion.div>

              {/* Floating particles around image */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className='absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-40'
                  animate={{
                    x: [0, Math.cos(i * 0.785) * 30],
                    y: [0, Math.sin(i * 0.785) * 30],
                    scale: [0, 1],
                    opacity: [0, 0.6],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: i * 0.5,
                    ease: 'easeInOut',
                  }}
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
