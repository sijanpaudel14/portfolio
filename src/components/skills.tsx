'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useState, useRef } from 'react'
import {
  Code,
  Brain,
  Globe,
  Wrench,
  TrendingUp,
  Zap,
  Award,
  Target,
  Sparkles,
  ArrowRight,
  Check,
  Trophy,
  Rocket,
  Cpu,
} from 'lucide-react'

interface Skill {
  name: string
  icon: string
  level: number
  color: string
  description: string
  yearsExp?: number
  projects?: number
}

interface SkillCategory {
  title: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  skills: Skill[]
  gradient: string
  description: string
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>(
    'Programming Languages'
  )
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Core programming languages I use to build solutions',
      skills: [
        {
          name: 'Python',
          icon: '🐍',
          level: 90,
          color: 'from-yellow-400 to-orange-500',
          description: 'Advanced Python development with AI/ML focus',
          yearsExp: 4,
          projects: 15,
        },
        {
          name: 'JavaScript',
          icon: '⚡',
          level: 85,
          color: 'from-yellow-400 to-orange-500',
          description: 'Modern ES6+ and React ecosystem',
          yearsExp: 3,
          projects: 12,
        },
        {
          name: 'TypeScript',
          icon: '📘',
          level: 80,
          color: 'from-blue-500 to-blue-600',
          description: 'Type-safe JavaScript development',
          yearsExp: 2,
          projects: 8,
        },
        {
          name: 'C/C++',
          icon: '⚙️',
          level: 75,
          color: 'from-gray-600 to-gray-800',
          description: 'System programming and algorithms',
          yearsExp: 3,
          projects: 6,
        },
        {
          name: 'SQL',
          icon: '🗄️',
          level: 85,
          color: 'from-purple-500 to-pink-500',
          description: 'Database design and optimization',
          yearsExp: 3,
          projects: 10,
        },
      ],
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      description: 'Cutting-edge AI and ML technologies',
      skills: [
        {
          name: 'PyTorch',
          icon: '🔥',
          level: 85,
          color: 'from-orange-500 to-red-500',
          description: 'Deep learning and neural networks',
          yearsExp: 2,
          projects: 8,
        },
        {
          name: 'TensorFlow',
          icon: '🧠',
          level: 80,
          color: 'from-orange-500 to-red-500',
          description: 'ML model development and deployment',
          yearsExp: 2,
          projects: 6,
        },
        {
          name: 'Scikit-learn',
          icon: '🔬',
          level: 90,
          color: 'from-orange-500 to-red-500',
          description: 'Machine learning algorithms',
          yearsExp: 3,
          projects: 12,
        },
        {
          name: 'Hugging Face',
          icon: '🤗',
          level: 85,
          color: 'from-yellow-500 to-orange-500',
          description: 'Transformer models and NLP',
          yearsExp: 1,
          projects: 5,
        },
        {
          name: 'OpenAI API',
          icon: '🤖',
          level: 80,
          color: 'from-green-500 to-blue-500',
          description: 'Large language model integration',
          yearsExp: 1,
          projects: 4,
        },
      ],
    },
    {
      title: 'Generative AI & Workflows',
      icon: Sparkles,
      gradient: 'from-violet-500 to-purple-600',
      description: 'Advanced AI workflows and automation tools',
      skills: [
        {
          name: 'LangChain',
          icon: '🦜',
          level: 85,
          color: 'from-emerald-500 to-teal-500',
          description: 'Building applications with LLMs',
          yearsExp: 1,
          projects: 6,
        },
        {
          name: 'LangGraph',
          icon: '🔗',
          level: 80,
          color: 'from-purple-500 to-violet-500',
          description: 'Complex AI agent workflows',
          yearsExp: 1,
          projects: 4,
        },
        {
          name: 'N8n',
          icon: '🔄',
          level: 75,
          color: 'from-pink-500 to-rose-500',
          description: 'Workflow automation platform',
          yearsExp: 1,
          projects: 5,
        },
        {
          name: 'LLM Integration',
          icon: '🧠',
          level: 85,
          color: 'from-blue-500 to-indigo-500',
          description: 'Custom AI model implementation',
          yearsExp: 1,
          projects: 8,
        },
        {
          name: 'RAG Systems',
          icon: '📚',
          level: 80,
          color: 'from-orange-500 to-amber-500',
          description: 'Retrieval-Augmented Generation',
          yearsExp: 1,
          projects: 5,
        },
      ],
    },
    {
      title: 'Web Development',
      icon: Globe,
      gradient: 'from-green-500 to-teal-500',
      description: 'Modern web technologies and frameworks',
      skills: [
        {
          name: 'React',
          icon: '⚛️',
          level: 90,
          color: 'from-blue-500 to-cyan-500',
          description: 'Modern React with hooks and context',
          yearsExp: 3,
          projects: 15,
        },
        {
          name: 'Next.js',
          icon: '▲',
          level: 85,
          color: 'from-black to-gray-800',
          description: 'Full-stack React framework',
          yearsExp: 2,
          projects: 10,
        },
        {
          name: 'Node.js',
          icon: '🟢',
          level: 80,
          color: 'from-green-500 to-green-600',
          description: 'Server-side JavaScript',
          yearsExp: 2,
          projects: 8,
        },
        {
          name: 'Tailwind CSS',
          icon: '🎨',
          level: 90,
          color: 'from-cyan-500 to-blue-500',
          description: 'Utility-first CSS framework',
          yearsExp: 2,
          projects: 12,
        },
        {
          name: 'TypeScript',
          icon: '📘',
          level: 85,
          color: 'from-blue-500 to-blue-600',
          description: 'Type-safe development',
          yearsExp: 2,
          projects: 8,
        },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      gradient: 'from-orange-500 to-red-500',
      description: 'Development tools and cloud platforms',
      skills: [
        {
          name: 'Git',
          icon: '📝',
          level: 90,
          color: 'from-orange-500 to-red-500',
          description: 'Version control and collaboration',
          yearsExp: 4,
          projects: 20,
        },
        {
          name: 'Docker',
          icon: '🐳',
          level: 75,
          color: 'from-blue-500 to-cyan-500',
          description: 'Containerization and deployment',
          yearsExp: 1,
          projects: 5,
        },
        {
          name: 'AWS',
          icon: '☁️',
          level: 70,
          color: 'from-orange-500 to-yellow-500',
          description: 'Cloud infrastructure and services',
          yearsExp: 1,
          projects: 3,
        },
        {
          name: 'Firebase',
          icon: '🔥',
          level: 75,
          color: 'from-orange-500 to-yellow-500',
          description: 'Backend-as-a-Service platform',
          yearsExp: 2,
          projects: 6,
        },
        {
          name: 'Vercel',
          icon: '▲',
          level: 85,
          color: 'from-black to-gray-800',
          description: 'Cloud deployment and hosting',
          yearsExp: 2,
          projects: 8,
        },
      ],
    },
  ]

  const expertiseAreas = [
    {
      title: 'Deep Learning',
      description: 'CNN, Transfer Learning, Computer Vision, Neural Networks',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'Convolutional Neural Networks',
        'Transfer Learning',
        'Computer Vision',
        'Neural Architecture Design',
      ],
      achievements: ['10+ AI models deployed', '95% accuracy achieved'],
    },
    {
      title: 'Natural Language Processing',
      description: 'BERT, Transformers, Topic Modeling, Text Classification',
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        'Transformer Models',
        'BERT & GPT',
        'Topic Modeling',
        'Text Classification',
      ],
      achievements: ['5+ NLP projects', '85% sentiment accuracy'],
    },
    {
      title: 'Data Science',
      description:
        'Data Analysis, Visualization, Statistical Modeling, ML Pipelines',
      icon: TrendingUp,
      gradient: 'from-green-500 to-teal-500',
      features: [
        'Data Analysis',
        'Statistical Modeling',
        'ML Pipelines',
        'Data Visualization',
      ],
      achievements: ['15+ datasets analyzed', '100M+ data points processed'],
    },
    {
      title: 'Generative AI & Workflow Automation',
      description: 'LangChain, LangGraph, N8n, RAG Systems, LLM Integration',
      icon: Cpu,
      gradient: 'from-red-500 to-orange-500',
      features: [
        'LangChain Development',
        'LangGraph Workflows',
        'N8n Automation',
        'RAG System Design',
        'LLM Integration',
      ],
      achievements: ['5+ AI workflows built', 'Complex automation systems'],
    },
    {
      title: 'Full Stack Web Development',
      description: 'React, Next.js, Node.js, TypeScript, Modern Web Stack',
      icon: Globe,
      gradient: 'from-emerald-500 to-cyan-500',
      features: [
        'React & Next.js Development',
        'TypeScript Integration',
        'RESTful API Development',
        'Database Design & Integration',
        'Responsive UI/UX Design',
        'State Management (Redux/Zustand)',
      ],
      achievements: ['15+ Full Stack projects', 'Modern responsive web apps'],
    },
  ]

  const currentCategory = skillCategories.find(
    (cat) => cat.title === activeCategory
  )

  return (
    <section
      id='skills'
      ref={ref}
      className='py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10'
    >
      {/* Enhanced Background with multiple animated elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Animated gradient orbs */}
        <motion.div
          className='absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl'
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 19,
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
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute top-1/2 right-10 w-64 h-64 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 rounded-full blur-3xl'
          animate={{
            x: [0, -60, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 29,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Multiple floating bubbles of various sizes */}
        <motion.div
          className='absolute top-1/4 left-1/4 w-6 h-6 bg-blue-500/20 rounded-full backdrop-blur-sm'
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute top-3/4 right-1/4 w-4 h-4 bg-purple-500/25 rounded-full backdrop-blur-sm'
          animate={{
            y: [0, 25, 0],
            x: [0, -25, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute top-10 left-1/3 w-8 h-8 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full backdrop-blur-sm'
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute bottom-1/4 left-10 w-5 h-5 bg-emerald-500/20 rounded-full backdrop-blur-sm'
          animate={{
            y: [0, 35, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute top-1/2 left-1/6 w-3 h-3 bg-pink-500/30 rounded-full backdrop-blur-sm'
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute top-2/3 right-1/6 w-7 h-7 bg-gradient-to-r from-indigo-400/12 to-purple-400/12 rounded-full backdrop-blur-sm'
          animate={{
            y: [0, 30, 0],
            x: [0, -35, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute bottom-10 right-1/3 w-4 h-4 bg-yellow-500/25 rounded-full backdrop-blur-sm'
          animate={{
            y: [0, -25, 0],
            x: [0, 25, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute top-1/6 right-2/3 w-6 h-6 bg-gradient-to-r from-rose-400/15 to-pink-400/15 rounded-full backdrop-blur-sm'
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute bottom-1/3 left-2/3 w-5 h-5 bg-teal-500/20 rounded-full backdrop-blur-sm'
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute top-5 left-1/2 w-3 h-3 bg-orange-500/25 rounded-full backdrop-blur-sm'
          animate={{
            y: [0, 45, 0],
            x: [0, -15, 0],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Grid pattern overlay */}
        <div className='absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]' />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Enhanced Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className='inline-block mb-8 relative'
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-70 animate-pulse'></div>
              <div className='relative p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-2xl'>
                <Award size={36} className='text-white' />
              </div>
              {/* Floating sparkles around icon */}
              <motion.div
                className='absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full'
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
                className='absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full'
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
              {/* Floating bubbles around Award icon */}
              <motion.div
                className='absolute -top-4 left-1/2 w-2 h-2 bg-blue-400/60 rounded-full backdrop-blur-sm'
                animate={{
                  y: [0, -15, 0],
                  x: [0, 8, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className='absolute -right-6 top-1/4 w-3 h-3 bg-purple-400/50 rounded-full backdrop-blur-sm'
                animate={{
                  y: [0, 12, 0],
                  x: [0, -10, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              />
              <motion.div
                className='absolute -left-6 bottom-1/4 w-2 h-2 bg-cyan-400/70 rounded-full backdrop-blur-sm'
                animate={{
                  y: [0, -10, 0],
                  x: [0, 12, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
              <motion.div
                className='absolute -bottom-6 right-1/3 w-2 h-2 bg-emerald-400/60 rounded-full backdrop-blur-sm'
                animate={{
                  y: [0, 18, 0],
                  x: [0, -8, 0],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5,
                }}
              />
              <motion.div
                className='absolute top-1/6 -left-8 w-1 h-1 bg-rose-400/80 rounded-full backdrop-blur-sm'
                animate={{
                  y: [0, -8, 0],
                  x: [0, 15, 0],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.8,
                }}
              />
              <motion.div
                className='absolute bottom-1/6 -right-8 w-2 h-2 bg-indigo-400/50 rounded-full backdrop-blur-sm'
                animate={{
                  y: [0, 14, 0],
                  x: [0, -12, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
              />
            </div>
          </motion.div>

          <motion.h2
            className='text-4xl md:text-6xl font-bold mb-6 relative cursor-pointer group'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent bg-size-200 animate-gradient-x group-hover:from-emerald-500 group-hover:via-blue-500 group-hover:to-purple-500 transition-all duration-500'>
              Skills & Technologies
            </span>
            {/* Floating particles on hover */}
            <motion.div
              className='absolute -top-2 -right-2 w-2 h-2 bg-blue-400/0 rounded-full group-hover:bg-blue-400/70 transition-all duration-300'
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
            <motion.div
              className='absolute -bottom-2 -left-2 w-1 h-1 bg-purple-400/0 rounded-full group-hover:bg-purple-400/80 transition-all duration-300 delay-100'
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className='absolute top-1/2 -right-4 w-1 h-1 bg-emerald-400/0 rounded-full group-hover:bg-emerald-400/70 transition-all duration-300 delay-200'
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.h2>

          <motion.p
            className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            My technical toolkit for building innovative solutions and solving
            complex problems with cutting-edge technologies.
          </motion.p>

          {/* Stats bar */}
          <motion.div
            className='flex flex-wrap justify-center gap-8 mt-8'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className='text-center'>
              <div className='text-3xl font-bold text-blue-600 dark:text-blue-400'>
                20+
              </div>
              <div className='text-sm text-gray-600 dark:text-gray-400'>
                Technologies
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-purple-600 dark:text-purple-400'>
                50+
              </div>
              <div className='text-sm text-gray-600 dark:text-gray-400'>
                Projects
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-emerald-600 dark:text-emerald-400'>
                4+
              </div>
              <div className='text-sm text-gray-600 dark:text-gray-400'>
                Years Experience
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Category Navigation */}
        <motion.div
          className='flex flex-wrap justify-center gap-4 mb-12'
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.title}
              onClick={() => setActiveCategory(category.title)}
              className={`group relative flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-300 overflow-hidden ${
                activeCategory === category.title
                  ? 'text-white shadow-2xl scale-105'
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-105'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            >
              {activeCategory === category.title && (
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.gradient}`}
                ></div>
              )}
              <div className='relative z-10 flex items-center space-x-3'>
                <category.icon size={20} />
                <span className='font-semibold'>{category.title}</span>
                {activeCategory === category.title && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className='w-2 h-2 bg-white rounded-full'
                  />
                )}
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Skills Grid */}
        <div className='space-y-12'>
          {currentCategory && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Category Description */}
              <div className='text-center mb-8'>
                <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
                  {currentCategory.description}
                </p>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6'>
                {currentCategory.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className='group relative h-full'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.08, y: -15 }}
                  >
                    {/* Glowing background effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 transform group-hover:scale-110`}
                    ></div>

                    <div className='relative bg-gradient-to-br from-white/95 via-white/90 to-white/80 dark:from-gray-800/95 dark:via-gray-800/90 dark:to-gray-900/80 backdrop-blur-xl rounded-3xl p-6 text-center shadow-2xl border border-white/20 dark:border-gray-700/30 hover:shadow-3xl transition-all duration-500 h-full flex flex-col overflow-hidden'>
                      {/* Animated border gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                      ></div>
                      <div className='absolute inset-[1px] bg-gradient-to-br from-white/90 via-white/85 to-white/75 dark:from-gray-800/90 dark:via-gray-800/85 dark:to-gray-900/75 rounded-3xl'></div>

                      {/* Content wrapper */}
                      <div className='relative z-10 flex flex-col h-full'>
                        {/* Floating particles around icon */}
                        <div className='absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce'></div>
                        <div className='absolute -top-3 left-1/4 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse'></div>
                        <div className='absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-600 group-hover:animate-ping'></div>

                        {/* Enhanced Skill Icon */}
                        <motion.div
                          className={`relative w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${skill.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 overflow-hidden border-2 border-white/30 dark:border-gray-600/30`}
                          whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          {/* Icon glow effect */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${skill.color} blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
                          ></div>

                          <span className='text-4xl relative z-10 drop-shadow-lg filter group-hover:scale-110 transition-transform duration-300'>
                            {skill.icon}
                          </span>

                          {/* Multi-layer shine effects */}
                          <div className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000'></div>
                          <div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50'></div>

                          {/* Rotating ring */}
                          <motion.div
                            className='absolute inset-[-2px] border-2 border-white/30 rounded-3xl'
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                          />
                        </motion.div>

                        <h4 className='font-bold text-gray-900 dark:text-white text-xl mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300'>
                          {skill.name}
                        </h4>

                        {/* Beautiful Progress Bar */}
                        <div className='relative mb-6 flex-grow'>
                          <div className='w-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full h-6 overflow-hidden shadow-inner border border-gray-300/50 dark:border-gray-600/50'>
                            <motion.div
                              className={`bg-gradient-to-r ${skill.color} h-6 rounded-full relative overflow-hidden shadow-lg`}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{
                                duration: 1.5,
                                delay: skillIndex * 0.1,
                                ease: 'easeOut',
                              }}
                            >
                              {/* Multi-layer gradient overlay */}
                              <div className='absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent'></div>
                              <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent'></div>

                              {/* Animated shine effect */}
                              <motion.div
                                className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/60 to-white/0 -skew-x-12'
                                animate={{ x: ['-200%', '200%'] }}
                                transition={{
                                  duration: 2.5,
                                  repeat: Infinity,
                                  ease: 'easeInOut',
                                  delay: skillIndex * 0.2,
                                }}
                              />

                              {/* Pulsing glow */}
                              <motion.div
                                className={`absolute inset-0 bg-gradient-to-r ${skill.color} blur-sm opacity-50`}
                                animate={{ opacity: [0.3, 0.7, 0.3] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: 'easeInOut',
                                }}
                              />
                            </motion.div>
                          </div>

                          {/* Progress stats */}
                          <div className='flex justify-between items-center mt-3'>
                            <motion.div
                              className={`text-lg font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                              whileHover={{ scale: 1.1 }}
                            >
                              {skill.level}%
                            </motion.div>
                            <div className='text-sm text-gray-600 dark:text-gray-300 font-medium'>
                              {skill.yearsExp} years exp
                            </div>
                          </div>
                        </div>

                        {/* Enhanced metrics with beautiful styling */}
                        <div className='grid grid-cols-2 gap-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50'>
                          <motion.div
                            className='text-center group/metric cursor-pointer'
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className='flex items-center justify-center space-x-1 mb-1'>
                              <Trophy
                                size={14}
                                className='text-yellow-500 group-hover/metric:text-yellow-600 transition-colors'
                              />
                              <span className='text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover/metric:text-yellow-600 dark:group-hover/metric:text-yellow-400 transition-colors'>
                                Projects
                              </span>
                            </div>
                            <div className='text-xl font-bold text-gray-900 dark:text-white'>
                              {skill.projects}
                            </div>
                          </motion.div>

                          <motion.div
                            className='text-center group/metric cursor-pointer'
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className='flex items-center justify-center space-x-1 mb-1'>
                              <Target
                                size={14}
                                className='text-blue-500 group-hover/metric:text-blue-600 transition-colors'
                              />
                              <span className='text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover/metric:text-blue-600 dark:group-hover/metric:text-blue-400 transition-colors'>
                                Level
                              </span>
                            </div>
                            <div
                              className={`text-lg font-bold ${
                                skill.level >= 85
                                  ? 'text-emerald-600 dark:text-emerald-400'
                                  : skill.level >= 70
                                  ? 'text-blue-600 dark:text-blue-400'
                                  : 'text-orange-600 dark:text-orange-400'
                              }`}
                            >
                              {skill.level >= 85
                                ? 'Expert'
                                : skill.level >= 70
                                ? 'Advanced'
                                : 'Intermediate'}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Enhanced Expertise Areas */}
        <motion.div
          className='mt-24'
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className='text-center mb-16'>
            <motion.div
              className='inline-flex items-center space-x-2 mb-6'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Sparkles className='text-yellow-500' size={24} />
              <h3 className='text-3xl font-bold text-gray-900 dark:text-white'>
                Areas of Expertise
              </h3>
              <Sparkles className='text-yellow-500' size={24} />
            </motion.div>
            <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
              Specialized knowledge and deep understanding in these key domains
            </p>
          </div>

          {/* Expertise Areas Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
            {expertiseAreas.map((expertise, index) => (
              <motion.div
                key={index}
                className='group relative w-full'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.08, y: -15 }}
              >
                {/* Enhanced glowing background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${expertise.gradient} rounded-3xl opacity-0 group-hover:opacity-25 blur-2xl transition-all duration-700 transform group-hover:scale-110`}
                ></div>

                <div className='relative bg-gradient-to-br from-white/95 via-white/90 to-white/80 dark:from-gray-800/95 dark:via-gray-800/90 dark:to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/30 hover:shadow-3xl transition-all duration-700 h-full flex flex-col overflow-hidden'>
                  {/* Animated border gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${expertise.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>
                  <div className='absolute inset-[1px] bg-gradient-to-br from-white/90 via-white/85 to-white/75 dark:from-gray-800/90 dark:via-gray-800/85 dark:to-gray-900/75 rounded-3xl'></div>

                  {/* Content wrapper */}
                  <div className='relative z-10 flex flex-col h-full'>
                    {/* Floating particles */}
                    <div className='absolute -top-3 -right-3 w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce'></div>
                    <div className='absolute -top-4 left-1/3 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse'></div>
                    <div className='absolute -bottom-3 -left-3 w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-600 group-hover:animate-ping'></div>

                    {/* Enhanced Icon with multiple effects */}
                    <motion.div
                      className={`relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${expertise.gradient} rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 overflow-hidden border-2 border-white/30 dark:border-gray-600/30`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                      transition={{ duration: 0.8 }}
                    >
                      {/* Multiple glow layers */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${expertise.gradient} blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                      ></div>
                      <div
                        className={`absolute inset-[-4px] bg-gradient-to-br ${expertise.gradient} blur-xl opacity-30 group-hover:opacity-70 transition-opacity duration-300`}
                      ></div>

                      {React.createElement(expertise.icon, {
                        size: 32,
                        className:
                          'text-white relative z-10 drop-shadow-2xl filter group-hover:scale-110 transition-transform duration-300',
                      })}

                      {/* Enhanced shine effects */}
                      <div className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1200'></div>
                      <div className='absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-60'></div>

                      {/* Rotating rings */}
                      <motion.div
                        className='absolute inset-[-3px] border-2 border-white/40 rounded-3xl'
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                      <motion.div
                        className='absolute inset-[-6px] border border-white/20 rounded-3xl'
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                    </motion.div>

                    <h4 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300'>
                      {expertise.title}
                    </h4>

                    <p className='text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed flex-grow text-base'>
                      {expertise.description}
                    </p>

                    {/* Enhanced Features with beautiful styling */}
                    <div className='space-y-3 mb-6'>
                      {expertise.features
                        .slice(0, 4)
                        .map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className='flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300 group/feature hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer'
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + featureIndex * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <div className='relative'>
                              <Check
                                size={16}
                                className='text-emerald-500 group-hover/feature:text-emerald-600 transition-colors flex-shrink-0'
                              />
                              <div className='absolute inset-0 bg-emerald-400 blur-sm opacity-0 group-hover/feature:opacity-50 transition-opacity rounded-full'></div>
                            </div>
                            <span className='font-medium group-hover/feature:font-semibold transition-all'>
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      {expertise.features.length > 4 && (
                        <motion.div
                          className='text-sm text-gray-500 dark:text-gray-400 text-center font-medium bg-gray-100/50 dark:bg-gray-700/50 rounded-lg py-2 px-3'
                          whileHover={{ scale: 1.02 }}
                        >
                          +{expertise.features.length - 4} more advanced
                          features
                        </motion.div>
                      )}
                    </div>

                    {/* Enhanced Achievements with beautiful cards */}
                    <div className='pt-6 border-t border-gray-200/50 dark:border-gray-700/50'>
                      <div className='flex items-center justify-center space-x-2 mb-4'>
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Trophy size={20} className='text-yellow-500' />
                        </motion.div>
                        <span className='text-base font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent'>
                          Key Achievements
                        </span>
                      </div>
                      <div className='grid gap-3'>
                        {expertise.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            className='bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-600/50 rounded-xl p-3 text-center border border-gray-200/30 dark:border-gray-600/30 hover:shadow-lg transition-all duration-300 cursor-pointer group/achievement'
                            whileHover={{ scale: 1.02, y: -2 }}
                          >
                            <div className='text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover/achievement:text-gray-900 dark:group-hover/achievement:text-white transition-colors'>
                              {achievement}
                            </div>
                            {/* Subtle glow effect */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-r ${expertise.gradient} rounded-xl opacity-0 group-hover/achievement:opacity-5 transition-opacity duration-300`}
                            ></div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className='text-center mt-16'
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <motion.div
            className='inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group'
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Rocket size={20} />
            <span className='font-semibold'>
              Let&apos;s Build Something Amazing Together
            </span>
            <ArrowRight
              size={20}
              className='group-hover:translate-x-1 transition-transform duration-300'
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
