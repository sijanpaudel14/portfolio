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
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
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
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                  >
                    <div className='relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg border border-gray-200/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-500 h-full flex flex-col'>
                      {/* Gradient border on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      ></div>

                      {/* Skill Icon with enhanced animation */}
                      <motion.div
                        className={`relative w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${skill.color} rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                        whileHover={{ rotate: 5 }}
                      >
                        <span className='text-3xl relative z-10'>
                          {skill.icon}
                        </span>
                        {/* Shine effect */}
                        <div className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000'></div>
                      </motion.div>

                      <h4 className='font-bold text-gray-900 dark:text-white text-lg mb-2'>
                        {skill.name}
                      </h4>

                      {/* Enhanced Progress Bar */}
                      <div className='relative mb-4 flex-grow'>
                        <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner'>
                          <motion.div
                            className={`bg-gradient-to-r ${skill.color} h-4 rounded-full relative overflow-hidden`}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: skillIndex * 0.1,
                              ease: 'easeOut',
                            }}
                          >
                            <div className='absolute inset-0 bg-gradient-to-r from-white/30 to-transparent'></div>
                            <motion.div
                              className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0 -skew-x-12'
                              animate={{ x: ['-200%', '200%'] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                              }}
                            />
                          </motion.div>
                        </div>
                        <div className='flex justify-between items-center mt-2'>
                          <div className='text-sm font-bold text-gray-600 dark:text-gray-300'>
                            {skill.level}%
                          </div>
                          <div className='text-xs text-gray-500 dark:text-gray-400'>
                            {skill.yearsExp}y exp
                          </div>
                        </div>
                      </div>

                      {/* Additional metrics */}
                      <div className='flex justify-between text-xs text-gray-500 dark:text-gray-400'>
                        <span className='flex items-center space-x-1'>
                          <Trophy size={12} />
                          <span>{skill.projects} projects</span>
                        </span>
                        <span className='flex items-center space-x-1'>
                          <Target size={12} />
                          <span>
                            {skill.level >= 85
                              ? 'Expert'
                              : skill.level >= 70
                              ? 'Advanced'
                              : 'Intermediate'}
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Enhanced Tooltip */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        className='absolute -top-32 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-6 py-4 rounded-2xl whitespace-nowrap z-30 shadow-2xl border border-gray-700 max-w-xs'
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      >
                        <div className='font-semibold mb-2 text-center'>
                          {skill.name}
                        </div>
                        <div className='text-xs text-gray-300 text-center mb-2'>
                          {skill.description}
                        </div>
                        <div className='flex justify-between text-xs text-gray-400'>
                          <span>{skill.yearsExp} years</span>
                          <span>{skill.projects} projects</span>
                        </div>
                        <div className='absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900'></div>
                      </motion.div>
                    )}
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
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className='relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-gray-200/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-500 h-full flex flex-col overflow-hidden'>
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${expertise.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  {/* Enhanced Icon */}
                  <motion.div
                    className={`relative w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${expertise.gradient} rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    {React.createElement(expertise.icon, {
                      size: 28,
                      className: 'text-white relative z-10',
                    })}
                    {/* Animated shine effect */}
                    <motion.div
                      className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12'
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>

                  <h4 className='text-xl font-bold mb-3 text-gray-900 dark:text-white text-center'>
                    {expertise.title}
                  </h4>

                  <p className='text-gray-600 dark:text-gray-300 text-center mb-4 leading-relaxed flex-grow text-sm'>
                    {expertise.description}
                  </p>

                  {/* Enhanced Features with icons */}
                  <div className='space-y-2 mb-4'>
                    {expertise.features
                      .slice(0, 4)
                      .map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className='flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300'
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + featureIndex * 0.1 }}
                        >
                          <Check
                            size={14}
                            className='text-green-500 flex-shrink-0'
                          />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    {expertise.features.length > 4 && (
                      <div className='text-xs text-gray-500 dark:text-gray-400 text-center'>
                        +{expertise.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  {/* Enhanced Achievements */}
                  <div className='pt-3 border-t border-gray-200/30 dark:border-gray-700/30'>
                    <div className='flex items-center justify-center space-x-2 mb-2'>
                      <Trophy size={16} className='text-yellow-500' />
                      <span className='text-xs font-semibold text-gray-700 dark:text-gray-300'>
                        Key Achievements
                      </span>
                    </div>
                    <div className='space-y-1'>
                      {expertise.achievements.map((achievement, achIndex) => (
                        <div
                          key={achIndex}
                          className='text-xs text-gray-600 dark:text-gray-400 text-center'
                        >
                          {achievement}
                        </div>
                      ))}
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
