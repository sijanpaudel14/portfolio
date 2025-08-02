'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Contact as ContactIcon,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Heart,
  Coffee,
  Zap,
} from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission (replace with actual EmailJS integration)
      console.log('Form data:', data)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'pas078bct037@wrc.edu.np',
      href: 'mailto:pas078bct037@wrc.edu.np',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+977-9846906893',
      href: 'tel:+977-9846906893',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Pokhara, Nepal',
      href: '#',
      gradient: 'from-blue-500 to-purple-500',
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/sijanpaudel14',
      gradient: 'from-gray-600 to-gray-800',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/sijanpaudel14',
      gradient: 'from-blue-600 to-blue-800',
    },
  ]

  return (
    <section
      id='contact'
      className='py-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10'
    >
      {/* Enhanced background with multiple animated elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Main gradient orbs */}
        <motion.div
          className='absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl'
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl'
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className='absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500/20 rounded-full'
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute top-3/4 right-1/4 w-3 h-3 bg-purple-500/30 rounded-full'
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Grid pattern overlay */}
        <div className='absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]' />
      </div>

      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className='inline-block mb-8 relative'
          >
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-70 animate-pulse'></div>
              <div className='relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-2xl'>
                <ContactIcon size={36} className='text-white' />
              </div>
              {/* Enhanced floating sparkles and circles around main contact icon */}
              <motion.div
                className='absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full'
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0,
                }}
              />
              <motion.div
                className='absolute -bottom-2 -left-2 w-2 h-2 bg-pink-400 rounded-full'
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
              {/* Additional floating circles around contact icon */}
              <motion.div
                className='absolute -top-3 -left-1 w-2.5 h-2.5 bg-blue-300 rounded-full'
                animate={{
                  scale: [0.6, 1.2, 0.6],
                  opacity: [0.4, 1, 0.4],
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
              <motion.div
                className='absolute -bottom-1 -right-3 w-2 h-2 bg-purple-300 rounded-full'
                animate={{
                  scale: [0.8, 1.4, 0.8],
                  opacity: [0.5, 1, 0.5],
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5,
                }}
              />
              <motion.div
                className='absolute top-0 -right-4 w-1.5 h-1.5 bg-emerald-300 rounded-full'
                animate={{
                  scale: [0.4, 1.3, 0.4],
                  opacity: [0.3, 0.9, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.8,
                }}
              />
              <motion.div
                className='absolute -top-4 right-1 w-2 h-2 bg-cyan-300 rounded-full'
                animate={{
                  scale: [1, 0.5, 1],
                  opacity: [0.6, 1, 0.6],
                  y: [0, -2, 0],
                  x: [0, 2, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
              />
              <motion.div
                className='absolute bottom-1 -left-4 w-1.5 h-1.5 bg-orange-300 rounded-full'
                animate={{
                  scale: [0.7, 1.1, 0.7],
                  opacity: [0.4, 0.8, 0.4],
                  x: [0, -3, 0],
                  y: [0, 1, 0],
                }}
                transition={{
                  duration: 2.7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.2,
                }}
              />
              <motion.div
                className='absolute top-2 -left-3 w-2.5 h-2.5 bg-rose-300 rounded-full'
                animate={{
                  scale: [0.5, 1.5, 0.5],
                  opacity: [0.2, 0.7, 0.2],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.3,
                }}
              />
            </div>
          </motion.div>

          <motion.h2
            className='text-4xl md:text-5xl font-bold mb-6 relative cursor-pointer group'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent bg-size-200 animate-gradient-x group-hover:from-pink-500 group-hover:via-orange-500 group-hover:to-red-500 transition-all duration-500'>
              Let&apos;s Build Something Amazing!
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className='max-w-3xl mx-auto'
          >
            <p className='text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6'>
              I&apos;m always open to new opportunities, collaborations, or just
              a friendly chat. Whether you have a project in mind or want to
              connect, feel free to reach out!
            </p>

            {/* Fun stats or call-to-action cards */}
            <div className='flex flex-wrap justify-center gap-4 mt-8'>
              <motion.div
                className='flex items-center space-x-2 px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50'
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Coffee size={18} className='text-amber-500' />
                <span className='text-gray-700 dark:text-gray-300 font-medium text-sm'>
                  Coffee chat ready
                </span>
              </motion.div>

              <motion.div
                className='flex items-center space-x-2 px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50'
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Zap size={18} className='text-yellow-500' />
                <span className='text-gray-700 dark:text-gray-300 font-medium text-sm'>
                  Quick response
                </span>
              </motion.div>

              <motion.div
                className='flex items-center space-x-2 px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50'
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Heart size={18} className='text-red-500' />
                <span className='text-gray-700 dark:text-gray-300 font-medium text-sm'>
                  Built with passion
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
          {/* Enhanced Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            <div className='relative'>
              <motion.h3
                className='text-2xl font-bold mb-4 text-gray-900 dark:text-white relative inline-block'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Get In Touch
                <motion.div
                  className='absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </motion.h3>
              <motion.p
                className='text-gray-600 dark:text-gray-300 mb-6 text-base leading-relaxed'
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Ready to start a conversation? Here&apos;s how you can reach me:
              </motion.p>
            </div>

            {/* Enhanced Contact Details */}
            <div className='space-y-4'>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='group relative overflow-hidden block'
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className='relative p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 group-hover:border-blue-300/50 dark:group-hover:border-blue-600/50'>
                    {/* Gradient background on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                    ></div>

                    <div className='relative flex items-center space-x-4'>
                      <div className='relative'>
                        <div
                          className={`p-3 bg-gradient-to-r ${info.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}
                        >
                          <info.icon
                            size={24}
                            className='text-white relative z-10'
                          />
                          {/* Shine effect */}
                          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700'></div>
                        </div>
                        {/* Floating indicator */}
                        <motion.div
                          className='absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-lg'
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      </div>
                      <div className='flex-1'>
                        <h4 className='text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1'>
                          {info.title}
                        </h4>
                        <p className='text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors text-base'>
                          {info.value}
                        </p>
                      </div>
                      <ArrowRight
                        size={20}
                        className='text-gray-400 group-hover:text-blue-500 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300'
                      />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Enhanced Social Links */}
            <div className='pt-8'>
              <motion.h4
                className='text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center space-x-2'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Sparkles size={24} className='text-yellow-500' />
                <span>Follow Me</span>
              </motion.h4>
              <div className='flex space-x-6'>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    className='group relative'
                    whileHover={{ scale: 1.1, y: -6, rotate: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className='relative p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 group-hover:border-blue-300/50 dark:group-hover:border-blue-600/50'>
                      <div
                        className={`relative p-3 bg-gradient-to-r ${social.gradient} rounded-xl shadow-lg overflow-hidden`}
                      >
                        <social.icon
                          size={24}
                          className='text-white relative z-10'
                        />
                        {/* Animated background */}
                        <div className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700'></div>
                      </div>
                    </div>

                    {/* Tooltip */}
                    <div className='absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>
                      {social.name}
                      <div className='absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-gray-900'></div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='relative'
          >
            {/* Enhanced floating elements around form */}
            <motion.div
              className='absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20'
              animate={{
                y: [0, -15, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className='absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30'
              animate={{
                y: [0, 15, 0],
                x: [0, 10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <div className='relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden'>
              {/* Animated background gradient */}
              <div className='absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-emerald-50/50 dark:from-blue-900/20 dark:via-purple-900/10 dark:to-emerald-900/20 opacity-50'></div>

              {/* Decorative elements */}
              <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500'></div>

              <div className='relative z-10'>
                <motion.div
                  className='flex items-center space-x-4 mb-8'
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className='relative p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg overflow-hidden'>
                    <MessageCircle
                      size={24}
                      className='text-white relative z-10'
                    />
                    <div className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] animate-shimmer'></div>

                    {/* Multiple floating circles around the message icon */}
                    <motion.div
                      className='absolute -top-2 -right-2 w-3 h-3 bg-white/80 rounded-full'
                      animate={{
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.7, 1, 0.7],
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0,
                      }}
                    />
                    <motion.div
                      className='absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-white/90 rounded-full'
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.8, 1, 0.8],
                        x: [0, -2, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.5,
                      }}
                    />
                    <motion.div
                      className='absolute -top-3 -left-1 w-2 h-2 bg-white/85 rounded-full'
                      animate={{
                        scale: [0.5, 1.2, 0.5],
                        opacity: [0.6, 1, 0.6],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                      }}
                    />
                    <motion.div
                      className='absolute -bottom-1 -right-3 w-2.5 h-2.5 bg-white/75 rounded-full'
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.6, 0.9, 0.6],
                        y: [0, 2, 0],
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1.5,
                      }}
                    />
                    <motion.div
                      className='absolute top-0 -right-4 w-2 h-2 bg-white/80 rounded-full'
                      animate={{
                        scale: [0.8, 1.5, 0.8],
                        opacity: [0.5, 1, 0.5],
                        x: [0, 3, 0],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.8,
                      }}
                    />
                    <motion.div
                      className='absolute -top-4 right-0 w-2.5 h-2.5 bg-white/70 rounded-full'
                      animate={{
                        scale: [1.2, 0.6, 1.2],
                        opacity: [0.4, 0.9, 0.4],
                        rotate: [0, -180, -360],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                      }}
                    />
                    <motion.div
                      className='absolute bottom-1 -left-4 w-2 h-2 bg-white/85 rounded-full'
                      animate={{
                        scale: [0.6, 1.3, 0.6],
                        opacity: [0.7, 1, 0.7],
                        x: [0, -2, 0],
                        y: [0, -1, 0],
                      }}
                      transition={{
                        duration: 2.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1.2,
                      }}
                    />
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
                      Send Me a Message
                    </h3>
                    <p className='text-gray-600 dark:text-gray-300 mt-1'>
                      I&apos;ll get back to you soon!
                    </p>
                  </div>
                </motion.div>

                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <motion.div
                      className='relative group'
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                        Name *
                      </label>
                      <div className='relative'>
                        <input
                          type='text'
                          {...register('name', {
                            required: 'Name is required',
                          })}
                          className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white transition-all duration-300 backdrop-blur-sm group-hover:shadow-lg group-hover:border-blue-300 dark:group-hover:border-blue-600 placeholder-gray-400 dark:placeholder-gray-500'
                          placeholder='Your name'
                        />
                        <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
                      </div>
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className='mt-1 text-sm text-red-600 flex items-center space-x-1'
                        >
                          <span className='w-1 h-1 bg-red-600 rounded-full'></span>
                          <span>{errors.name.message}</span>
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div
                      className='relative group'
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                        Email *
                      </label>
                      <div className='relative'>
                        <input
                          type='email'
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address',
                            },
                          })}
                          className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white transition-all duration-300 backdrop-blur-sm group-hover:shadow-lg group-hover:border-blue-300 dark:group-hover:border-blue-600 placeholder-gray-400 dark:placeholder-gray-500'
                          placeholder='your.email@example.com'
                        />
                        <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
                      </div>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className='mt-1 text-sm text-red-600 flex items-center space-x-1'
                        >
                          <span className='w-1 h-1 bg-red-600 rounded-full'></span>
                          <span>{errors.email.message}</span>
                        </motion.p>
                      )}
                    </motion.div>
                  </div>

                  <motion.div
                    className='relative group'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                      Subject *
                    </label>
                    <div className='relative'>
                      <input
                        type='text'
                        {...register('subject', {
                          required: 'Subject is required',
                        })}
                        className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white transition-all duration-300 backdrop-blur-sm group-hover:shadow-lg group-hover:border-blue-300 dark:group-hover:border-blue-600 placeholder-gray-400 dark:placeholder-gray-500'
                        placeholder="What's this about?"
                      />
                      <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
                    </div>
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className='mt-1 text-sm text-red-600 flex items-center space-x-1'
                      >
                        <span className='w-1 h-1 bg-red-600 rounded-full'></span>
                        <span>{errors.subject.message}</span>
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div
                    className='relative group'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                      Message *
                    </label>
                    <div className='relative'>
                      <textarea
                        {...register('message', {
                          required: 'Message is required',
                        })}
                        rows={5}
                        className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white resize-none transition-all duration-300 backdrop-blur-sm group-hover:shadow-lg group-hover:border-blue-300 dark:group-hover:border-blue-600 placeholder-gray-400 dark:placeholder-gray-500'
                        placeholder='Tell me about your project or just say hello!'
                      />
                      <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
                    </div>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className='mt-1 text-sm text-red-600 flex items-center space-x-1'
                      >
                        <span className='w-1 h-1 bg-red-600 rounded-full'></span>
                        <span>{errors.message.message}</span>
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Enhanced Submit Status */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className='p-6 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 text-emerald-800 dark:text-emerald-200 rounded-2xl border border-emerald-200 dark:border-emerald-700 shadow-lg'
                    >
                      <div className='flex items-center space-x-3'>
                        <div className='relative'>
                          <div className='w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg'>
                            <motion.div
                              className='w-3 h-3 bg-white rounded-full'
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2 }}
                            />
                          </div>
                          <motion.div
                            className='absolute inset-0 bg-emerald-400 rounded-full'
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.7, 0, 0.7],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                          />
                        </div>
                        <div>
                          <h4 className='font-semibold text-lg'>
                            Message Sent Successfully!
                          </h4>
                          <p className='text-sm'>
                            Thank you for reaching out. I&apos;ll get back to
                            you soon.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className='p-6 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30 text-red-800 dark:text-red-200 rounded-2xl border border-red-200 dark:border-red-700 shadow-lg'
                    >
                      <div className='flex items-center space-x-3'>
                        <div className='w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg'>
                          <div className='w-3 h-3 bg-white rounded-full'></div>
                        </div>
                        <div>
                          <h4 className='font-semibold text-lg'>
                            Oops! Something went wrong
                          </h4>
                          <p className='text-sm'>
                            Please try again or contact me directly via email.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Enhanced Submit Button */}
                  <motion.button
                    type='submit'
                    disabled={isSubmitting}
                    className='relative w-full px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white rounded-xl font-semibold text-base shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group'
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    {/* Button background effects */}
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    <div className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000'></div>

                    {/* Button content */}
                    <div className='relative z-10 flex items-center space-x-3'>
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className='w-6 h-6 border-2 border-white border-t-transparent rounded-full'
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                          />
                          <span>Sending your message...</span>
                        </>
                      ) : (
                        <>
                          <motion.div
                            whileHover={{ x: 2 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                          >
                            <Send size={24} />
                          </motion.div>
                          <span>Send Message</span>
                          <motion.div
                            className='ml-2'
                            animate={{ x: [0, 4, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                          >
                            ✨
                          </motion.div>
                        </>
                      )}
                    </div>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
