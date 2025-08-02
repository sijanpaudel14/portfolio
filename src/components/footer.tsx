'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/sijanpaudel14',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/sijanpaudel14',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:pas078bct037@wrc.edu.np',
      label: 'Email',
    },
  ]

  return (
    <footer className='bg-gray-900 text-white relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='text-center md:text-left'
          >
            <h3 className='text-2xl font-bold gradient-text-animate mb-4'>
              Sijan Paudel
            </h3>
            <p className='text-gray-400 mb-4'>
              Computer Engineer | Developer | Creative Coder
            </p>
            <p className='text-gray-400 text-sm'>
              Passionate about AI, NLP, and solving real-world problems through
              code.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className='text-center'
          >
            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className='text-gray-400 hover:text-blue-400 transition-colors duration-300 magnetic'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(link.href)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className='text-center md:text-right'
          >
            <h4 className='text-lg font-semibold mb-4'>Connect</h4>
            <div className='flex justify-center md:justify-end space-x-4 mb-4'>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition-colors duration-300 magnetic'
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <div className='text-gray-400 text-sm space-y-1'>
              <p>pas078bct037@wrc.edu.np</p>
              <p>+977-9846906893</p>
              <p>Pokhara, Nepal</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className='border-t border-gray-800 mt-8 pt-8 text-center'
        >
          <p className='text-gray-400 text-sm'>
            © {new Date().getFullYear()} Sijan Paudel. All rights reserved.
          </p>
          
        </motion.div>
      </div>
    </footer>
  )
}
