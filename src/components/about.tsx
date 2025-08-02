'use client'

import { motion } from 'framer-motion'
import {
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Github,
  Linkedin,
  Twitter,
  Target,
  Users,
  BookOpen,
  Cpu,
  Brain,
} from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const experiences = [
    {
      icon: Code,
      title: 'Computer Science Tutor (Grade 8–12)',
      company: 'Part-time • Pokhara, Nepal',
      period: 'Oct 2020 – April 2023',
      description:
        'Designed and delivered courses focusing on programming, algorithms, and problem-solving. Fostered student interest through real-world and project-based learning.',
    },
    {
      icon: Briefcase,
      title: 'Computer Operator',
      company: 'Pokhara, Nepal',
      period: 'Oct 2022 – Jan 2024',
      description:
        'Managed data entry, file systems, print services. Resolved technical issues to maintain workflow and uptime. Introduced automation tools to enhance efficiency.',
    },
    {
      icon: Award,
      title: 'Microsoft Learn Student Ambassador – Beta Tier',
      company: 'Remote',
      period: 'Jan 2024 – Present',
      description:
        'Organized workshops and webinars on AI, cloud, and web development. Mentored students in Microsoft tools like Azure, GitHub, and VS Code.',
    },
  ]

  const education = {
    degree: 'Bachelor of Computer Engineering',
    institution: 'Paschimanchal Campus, IOE, Tribhuvan University',
    location: 'Pokhara, Nepal',
    period: 'May 2022 – Present',
    gpa: 'Current Aggregate: 82%',
    courses: [
      'OOP',
      'DSA',
      'TOC',
      'Digital Logic',
      'AI',
      'OS',
      'DBMS',
      'Discrete Structures',
      'Microcontroller & Microprocessor',
      'Computer Networks & Security',
      'Distributed Systems',
      'Data Mining',
    ],
  }

  return (
    <section
      id='about'
      className='py-20 relative overflow-hidden bg-white dark:bg-gray-900'
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
            duration: 20,
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
            duration: 25,
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
            duration: 30,
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='text-center mb-16'
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
                <GraduationCap size={36} className='text-white' />
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
              <motion.div
                className='absolute -bottom-6 right-1/3 w-2 h-2 bg-emerald-400/60 rounded-full backdrop-blur-sm'
                animate={{
                  y: [0, 18],
                  x: [0, -8],
                  scale: [1, 1.4],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: 1.5,
                }}
              />
              <motion.div
                className='absolute top-1/6 -left-8 w-1 h-1 bg-rose-400/80 rounded-full backdrop-blur-sm'
                animate={{
                  y: [0, -8],
                  x: [0, 15],
                  opacity: [0.2, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: 0.8,
                }}
              />
              <motion.div
                className='absolute bottom-1/6 -right-8 w-2 h-2 bg-indigo-400/50 rounded-full backdrop-blur-sm'
                animate={{
                  y: [0, 14],
                  x: [0, -12],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: 2,
                }}
              />
            </div>
          </motion.div>

          <motion.h2
            className='text-4xl md:text-5xl font-bold mb-4 cursor-pointer group relative'
            whileHover={{ scale: 1.05 }}
          >
            <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-500'>
              About Me
            </span>
            {/* Floating particles on hover */}
            <motion.div
              className='absolute -top-2 -right-2 w-2 h-2 bg-blue-400/0 rounded-full group-hover:bg-blue-400/70 transition-all duration-300'
              animate={{
                scale: [1, 1.2],
                opacity: [0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className='absolute -bottom-2 -left-2 w-1 h-1 bg-purple-400/0 rounded-full group-hover:bg-purple-400/80 transition-all duration-300 delay-100'
              animate={{
                scale: [1, 1.5],
                opacity: [0.6, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className='absolute top-1/2 -right-4 w-1 h-1 bg-emerald-400/0 rounded-full group-hover:bg-emerald-400/70 transition-all duration-300 delay-200'
              animate={{
                scale: [1, 1.3],
                opacity: [0.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          </motion.h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            <span className='font-semibold text-blue-600 dark:text-blue-400'>
              Innovative Computer Engineering student
            </span>{' '}
            passionate about crafting intelligent solutions through
            <span className='font-medium text-purple-600 dark:text-purple-400'>
              {' '}
              AI & NLP technologies
            </span>
            . I thrive on transforming complex challenges into elegant,
            <span className='font-medium text-emerald-600 dark:text-emerald-400'>
              cutting-edge applications
            </span>{' '}
            that make a real impact.
            <br />✨{' '}
            <em>
              Always exploring the intersection of creativity and technology!
            </em>
          </p>
        </motion.div>

        {/* Enhanced Main About Content */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20'>
          {/* Left Side - Personal Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
            {/* Enhanced Stats Bar */}
            <motion.div
              className='grid grid-cols-3 gap-4 mb-8'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className='text-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/20 dark:border-gray-700/20'>
                <div className='text-2xl font-bold text-blue-600 dark:text-blue-400'>
                  4+
                </div>
                <div className='text-sm text-gray-600 dark:text-gray-400'>
                  Years Learning
                </div>
              </div>
              <div className='text-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/20 dark:border-gray-700/20'>
                <div className='text-2xl font-bold text-purple-600 dark:text-purple-400'>
                  15+
                </div>
                <div className='text-sm text-gray-600 dark:text-gray-400'>
                  Projects Built
                </div>
              </div>
              <div className='text-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/20 dark:border-gray-700/20'>
                <div className='text-2xl font-bold text-emerald-600 dark:text-emerald-400'>
                  82%
                </div>
                <div className='text-sm text-gray-600 dark:text-gray-400'>
                  Academic Grade
                </div>
              </div>
            </motion.div>

            <motion.div
              className='space-y-6'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className='space-y-4'>
                <h3 className='text-3xl font-bold text-gray-900 dark:text-white flex items-center space-x-3'>
                  <div className='w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full'></div>
                  <span>Who I Am</span>
                </h3>
                <div className='space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
                  <p className='relative pl-6'>
                    <span className='absolute left-0 top-2 w-2 h-2 bg-blue-500 rounded-full'></span>
                    I am a{' '}
                    <span className='relative px-2 py-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 dark:text-blue-400 font-semibold rounded-lg border border-blue-200/30 dark:border-blue-700/30'>
                      Machine Learning enthusiast
                    </span>{' '}
                    with a deep passion for artificial intelligence and natural
                    language processing. My journey in tech began with curiosity
                    and has evolved into a commitment to solving real-world
                    problems through innovative AI solutions.
                  </p>
                  <p className='relative pl-6'>
                    <span className='absolute left-0 top-2 w-2 h-2 bg-purple-500 rounded-full'></span>
                    As a Computer Engineering student at Tribhuvan University,
                    I&apos;ve developed expertise in{' '}
                    <span className='relative px-2 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 font-semibold rounded-lg border border-purple-200/30 dark:border-purple-700/30'>
                      deep learning, computer vision, and NLP
                    </span>
                    . I love working with cutting-edge technologies like
                    PyTorch, TensorFlow, and HuggingFace to create intelligent
                    systems that make a difference.
                  </p>
                  <p className='relative pl-6'>
                    <span className='absolute left-0 top-2 w-2 h-2 bg-emerald-500 rounded-full'></span>
                    Beyond coding, I&apos;m passionate about{' '}
                    <span className='relative px-2 py-1 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400 font-semibold rounded-lg border border-emerald-200/30 dark:border-emerald-700/30'>
                      mentoring and teaching
                    </span>
                    . I&apos;ve helped students understand complex programming
                    concepts and guided them through their tech journey. I
                    believe in the power of knowledge sharing and collaborative
                    learning.
                  </p>
                  <p className='relative pl-6'>
                    <span className='absolute left-0 top-2 w-2 h-2 bg-orange-500 rounded-full'></span>
                    When I&apos;m not building AI models or coding, you&apos;ll
                    find me exploring new technologies, contributing to
                    open-source projects, or sharing my knowledge through
                    workshops and webinars as a Microsoft Learn Student
                    Ambassador.
                  </p>
                </div>
              </div>

              {/* Enhanced Key Highlights */}
              <motion.div
                className='grid grid-cols-2 gap-4'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className='group p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl border border-blue-200/30 dark:border-blue-700/30 hover:shadow-lg transition-all duration-300'>
                  <div className='flex items-center space-x-3 mb-2'>
                    <div className='p-2 bg-blue-500 rounded-lg group-hover:scale-110 transition-transform duration-300'>
                      <Code size={20} className='text-white' />
                    </div>
                    <span className='font-semibold text-blue-700 dark:text-blue-300'>
                      AI/ML Expert
                    </span>
                  </div>
                  <p className='text-sm text-blue-600 dark:text-blue-400'>
                    Specialized in deep learning and computer vision
                  </p>
                </div>

                <div className='group p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-200/30 dark:border-purple-700/30 hover:shadow-lg transition-all duration-300'>
                  <div className='flex items-center space-x-3 mb-2'>
                    <div className='p-2 bg-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-300'>
                      <Users size={20} className='text-white' />
                    </div>
                    <span className='font-semibold text-purple-700 dark:text-purple-300'>
                      Mentor
                    </span>
                  </div>
                  <p className='text-sm text-purple-600 dark:text-purple-400'>
                    Passionate about teaching and knowledge sharing
                  </p>
                </div>

                <div className='group p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-200/30 dark:border-emerald-700/30 hover:shadow-lg transition-all duration-300'>
                  <div className='flex items-center space-x-3 mb-2'>
                    <div className='p-2 bg-emerald-500 rounded-lg group-hover:scale-110 transition-transform duration-300'>
                      <BookOpen size={20} className='text-white' />
                    </div>
                    <span className='font-semibold text-emerald-700 dark:text-emerald-300'>
                      Student
                    </span>
                  </div>
                  <p className='text-sm text-emerald-600 dark:text-emerald-400'>
                    Computer Engineering at TU
                  </p>
                </div>

                <div className='group p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl border border-orange-200/30 dark:border-orange-700/30 hover:shadow-lg transition-all duration-300'>
                  <div className='flex items-center space-x-3 mb-2'>
                    <div className='p-2 bg-orange-500 rounded-lg group-hover:scale-110 transition-transform duration-300'>
                      <Target size={20} className='text-white' />
                    </div>
                    <span className='font-semibold text-orange-700 dark:text-orange-300'>
                      Innovator
                    </span>
                  </div>
                  <p className='text-sm text-orange-600 dark:text-orange-400'>
                    Building solutions for real-world problems
                  </p>
                </div>
              </motion.div>

              {/* Key Highlights */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-6'>
                {[
                  { number: '8+', label: 'AI Projects' },
                  { number: '82%', label: 'Academic Score' },
                  { number: '3+', label: 'Years Experience' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='text-center p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/30 dark:border-gray-700/30 hover:shadow-xl hover:scale-105 transition-all duration-300'
                  >
                    <div className='text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                      {stat.number}
                    </div>
                    <div className='text-sm text-gray-600 dark:text-gray-300 font-medium'>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Enhanced Photo with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='flex justify-center lg:justify-end relative -mt-3 lg:-mt-80'
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
                className='relative w-96 h-96 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20 dark:border-gray-700/30'
                whileHover={{ scale: 1.03, rotateY: 5, rotateX: 2 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Subtle beautiful gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-br from-amber-500/5 via-rose-500/3 to-violet-600/8 group-hover:from-amber-500/8 group-hover:via-rose-500/5 group-hover:to-violet-600/12 transition-all duration-700 z-10' />

                <Image
                  src='/portfolio/sijan.png'
                  alt='Sijan Paudel'
                  width={500}
                  height={500}
                  className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700'
                  priority
                />

                {/* Elegant corner accent */}
                <div className='absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-transparent to-blue-500/5 group-hover:to-blue-500/10 transition-all duration-500' />

                {/* Social links overlay with enhanced design */}
                <div className='absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-20px] group-hover:translate-x-0 z-20'>
                  <div className='flex flex-col space-y-3 p-4 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-lg'>
                    <motion.a
                      href='https://github.com/sijanpaudel14'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-3 bg-white/20 dark:bg-black/30 rounded-xl hover:bg-white/30 dark:hover:bg-black/40 transition-all duration-300 group/link'
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github
                        size={20}
                        className='text-gray-800 dark:text-white group-hover/link:text-blue-500 transition-colors duration-300'
                      />
                    </motion.a>
                    <motion.a
                      href='https://www.linkedin.com/in/sijanpaudel14/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-3 bg-white/20 dark:bg-black/30 rounded-xl hover:bg-white/30 dark:hover:bg-black/40 transition-all duration-300 group/link'
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin
                        size={20}
                        className='text-gray-800 dark:text-white group-hover/link:text-blue-500 transition-colors duration-300'
                      />
                    </motion.a>
                    <motion.a
                      href='https://x.com/sijanpaudel14'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-3 bg-white/20 dark:bg-black/30 rounded-xl hover:bg-white/30 dark:hover:bg-black/40 transition-all duration-300 group/link'
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Twitter
                        size={20}
                        className='text-gray-800 dark:text-white group-hover/link:text-blue-500 transition-colors duration-300'
                      />
                    </motion.a>
                  </div>
                </div>

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
                  opacity: { duration: 0.8, delay: 0.8, type: 'spring' },
                  scale: { duration: 0.8, delay: 0.8, type: 'spring' },
                  rotate: { duration: 0.8, delay: 0.8, type: 'spring' },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  },
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15, rotate: 10, y: -5 }}
                animate={{
                  y: [-5, 0],
                }}
              >
                <Code className='w-7 h-7 text-blue-500' />
              </motion.div>

              <motion.div
                className='absolute -bottom-6 -right-6 p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/30'
                initial={{ opacity: 0, scale: 0, rotate: 180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  opacity: { duration: 0.8, delay: 1, type: 'spring' },
                  scale: { duration: 0.8, delay: 1, type: 'spring' },
                  rotate: { duration: 0.8, delay: 1, type: 'spring' },
                  y: {
                    duration: 3.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  },
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15, rotate: -10, y: -5 }}
                animate={{
                  y: [0, 5],
                }}
              >
                <Cpu className='w-7 h-7 text-purple-500' />
              </motion.div>

              <motion.div
                className='absolute top-1/2 -left-10 p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/30'
                initial={{ opacity: 0, scale: 0, rotate: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  opacity: { duration: 0.8, delay: 1.2, type: 'spring' },
                  scale: { duration: 0.8, delay: 1.2, type: 'spring' },
                  rotate: { duration: 0.8, delay: 1.2, type: 'spring' },
                  x: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  },
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15, rotate: 5, x: 5 }}
                animate={{
                  x: [0, -3],
                }}
              >
                <Brain className='w-7 h-7 text-green-500' />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Education and Experience Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            <motion.div
              className='flex items-center space-x-4 mb-6'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className='relative'>
                <div className='p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg'>
                  <GraduationCap className='w-8 h-8 text-white' />
                </div>
                {/* Floating bubbles around icon */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className='absolute w-2 h-2 bg-blue-400 rounded-full opacity-40'
                    animate={{
                      x: [0, Math.cos(i * 2) * 15],
                      y: [0, Math.sin(i * 2) * 15],
                      scale: [1, 1.2],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      delay: i * 0.5,
                    }}
                    style={{
                      top: `${20 + i * 10}%`,
                      left: `${30 + i * 15}%`,
                    }}
                  />
                ))}
              </div>
              <motion.h3
                className='text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
                whileHover={{ scale: 1.05 }}
              >
                Education
              </motion.h3>
            </motion.div>

            <motion.div
              className='bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]'
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h4
                className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-3'
                whileHover={{ scale: 1.02 }}
              >
                {education.degree}
              </motion.h4>
              <p className='text-gray-700 dark:text-gray-200 mb-2 font-semibold text-lg'>
                {education.institution}
              </p>
              <p className='text-gray-500 dark:text-gray-400 mb-3 flex items-center space-x-2'>
                <span>{education.location}</span>
                <span className='w-1 h-1 bg-gray-400 rounded-full'></span>
                <span>{education.period}</span>
              </p>
              <motion.p
                className='text-green-600 dark:text-green-400 font-bold mb-6 text-lg'
                whileHover={{ scale: 1.05 }}
              >
                {education.gpa}
              </motion.p>

              <div>
                <h5 className='font-bold mb-4 text-gray-800 dark:text-gray-100'>
                  Relevant Coursework:
                </h5>
                <div className='flex flex-wrap gap-3'>
                  {education.courses.map((course, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className='px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 text-blue-800 dark:text-blue-200 rounded-xl text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 border border-blue-200 dark:border-blue-700'
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            <motion.div
              className='flex items-center space-x-4 mb-6'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className='relative'>
                <div className='p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl shadow-lg'>
                  <Briefcase className='w-8 h-8 text-white' />
                </div>
                {/* Floating bubbles around icon */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className='absolute w-2 h-2 bg-purple-400 rounded-full opacity-40'
                    animate={{
                      x: [0, Math.cos(i * 2 + Math.PI) * 15],
                      y: [0, Math.sin(i * 2 + Math.PI) * 15],
                      scale: [1, 1.2],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      delay: i * 0.7,
                    }}
                    style={{
                      top: `${20 + i * 10}%`,
                      left: `${30 + i * 15}%`,
                    }}
                  />
                ))}
              </div>
              <motion.h3
                className='text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'
                whileHover={{ scale: 1.05 }}
              >
                Experience
              </motion.h3>
            </motion.div>

            <div className='space-y-6'>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className='bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30 hover:shadow-2xl transition-all duration-500 group'
                >
                  <div className='flex items-start space-x-4'>
                    <motion.div
                      className='p-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-2xl group-hover:scale-110 transition-transform duration-300'
                      whileHover={{ rotate: 5 }}
                    >
                      <exp.icon className='w-6 h-6 text-purple-600 dark:text-purple-400' />
                    </motion.div>
                    <div className='flex-1'>
                      <motion.h4
                        className='text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300'
                        whileHover={{ scale: 1.02 }}
                      >
                        {exp.title}
                      </motion.h4>
                      <p className='text-purple-600 dark:text-purple-400 font-semibold mb-1'>
                        {exp.company}
                      </p>
                      <p className='text-gray-500 dark:text-gray-400 text-sm mb-3 flex items-center space-x-2'>
                        <span>{exp.period}</span>
                      </p>
                      <p className='text-gray-700 dark:text-gray-200 leading-relaxed'>
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative corner element */}
                  <div className='absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mt-20 text-center relative'
        >
          {/* Background decorative elements */}
          <div className='absolute inset-0 overflow-hidden rounded-3xl'>
            <motion.div
              className='absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl'
              animate={{ scale: [1, 1.2], rotate: [0, 360] }}
              transition={{
                scale: {
                  duration: 10,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                },
                rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              }}
            />
            <motion.div
              className='absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-2xl'
              animate={{ scale: [1.2, 1], rotate: [360, 0] }}
              transition={{
                scale: {
                  duration: 8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                },
                rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
              }}
            />
          </div>

          <motion.h3
            className='text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'
            whileHover={{ scale: 1.05 }}
          >
            What I Do
          </motion.h3>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10'>
            {[
              {
                title: 'AI & Machine Learning',
                description:
                  'Deep Learning, NLP, Computer Vision, and Data Science projects',
                gradient: 'from-blue-500 to-cyan-500',
                bgGradient:
                  'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
                borderColor: 'border-blue-200/30 dark:border-blue-700/30',
                icon: '🤖',
              },
              {
                title: 'Web Development',
                description:
                  'Modern full-stack applications with React, Next.js, and Node.js',
                gradient: 'from-purple-500 to-pink-500',
                bgGradient:
                  'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
                borderColor: 'border-purple-200/30 dark:border-purple-700/30',
                icon: '💻',
              },
              {
                title: 'Problem Solving',
                description:
                  'Data Structures, Algorithms, and competitive programming',
                gradient: 'from-green-500 to-emerald-500',
                bgGradient:
                  'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
                borderColor: 'border-green-200/30 dark:border-green-700/30',
                icon: '🎯',
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`group relative bg-gradient-to-br ${skill.bgGradient} backdrop-blur-sm rounded-3xl p-8 shadow-xl border ${skill.borderColor} hover:shadow-2xl transition-all duration-500 overflow-hidden`}
              >
                {/* Icon with enhanced effect */}
                <motion.div
                  className='text-6xl mb-6 filter drop-shadow-lg'
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.icon}
                </motion.div>

                <motion.h4
                  className={`text-2xl font-bold mb-4 bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
                >
                  {skill.title}
                </motion.h4>

                <p className='text-gray-700 dark:text-gray-200 leading-relaxed'>
                  {skill.description}
                </p>

                {/* Floating corner elements */}
                <motion.div
                  className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${skill.gradient} rounded-full opacity-60`}
                  animate={{ scale: [1, 1.2] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: index * 0.5,
                  }}
                />
                <motion.div
                  className={`absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r ${skill.gradient} rounded-full opacity-40`}
                  animate={{ scale: [1.2, 1] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: index * 0.7,
                  }}
                />

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.bgGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
