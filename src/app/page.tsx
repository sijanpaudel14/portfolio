'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Loader from '@/components/loader'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll-to-top'
import CustomCursor from '@/components/custom-cursor'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoaderComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <Loader key='loader' onComplete={handleLoaderComplete} />
        ) : (
          <motion.div
            key='content'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </main>
            <Footer />
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
