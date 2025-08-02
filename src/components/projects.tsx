'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  Github,
  ExternalLink,
  Eye,
  FolderOpen,
  Star,
  Zap,
  Award,
  Calendar,
  Code,
  X,
  Clock,
  Users,
  CheckCircle,
  AlertTriangle,
  Sparkles,
} from 'lucide-react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  detailedDescription: string
  images: string[]
  category: string
  tech: string[]
  github: string
  live: string
  featured: boolean
  challenges: string[]
  achievements: string[]
  duration: string
  teamSize: string
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [showMobileProjects, setShowMobileProjects] = useState(false)

  const projects = [
    {
      id: 1,
      title: 'YouTube Video Summarizer',
      description:
        'AI-powered tool that extracts transcripts from YouTube videos and generates concise summaries using advanced NLP. Features keyword extraction and sentiment analysis.',
      detailedDescription:
        'An intelligent YouTube video summarization tool that automatically extracts video transcripts and generates comprehensive summaries using state-of-the-art natural language processing techniques. The system provides key insights, sentiment analysis, and important timestamps, making it easy to quickly understand video content without watching the entire video.',
      images: [
        '/portfolio/projects/youtube-summarizer/main.jpg',
        '/portfolio/projects/youtube-summarizer/interface.jpg',
        '/portfolio/projects/youtube-summarizer/results.jpg',
      ],
      category: 'genai',
      tech: ['Python', 'YouTube API', 'OpenAI', 'Streamlit', 'NLTK', 'Whisper'],
      github: 'https://github.com/sijanpaudel14/youtube-chatbot',
      live: 'https://youtube-chatbot-kappa.vercel.app/',
      featured: true,
      challenges: [
        'Audio processing accuracy',
        'API rate limiting',
        'Long video handling',
      ],
      achievements: [
        '90% summary accuracy',
        'Multi-language support',
        'Real-time processing',
      ],
      duration: '2 months',
      teamSize: '1 member',
    },
    {
      id: 2,
      title: 'AI Content Generator',
      description:
        'Multi-modal AI system using GPT-4 and DALL-E 3 for generating text, images, and code. Features custom prompt engineering and fine-tuning capabilities.',
      detailedDescription:
        'A comprehensive generative AI platform that combines multiple AI models to create various types of content. The system integrates GPT-4 for text generation, DALL-E 3 for image creation, and Codex for code generation. Features include custom prompt templates, fine-tuning capabilities, content optimization, and a user-friendly interface for seamless content creation workflows.',
      images: [
        '/portfolio/projects/ai-content-generator/main.jpg',
        '/portfolio/projects/ai-content-generator/interface.jpg',
        '/portfolio/projects/ai-content-generator/results.jpg',
      ],
      category: 'genai',
      tech: ['Python', 'OpenAI API', 'React', 'FastAPI', 'PostgreSQL', 'Redis'],
      github: '#',
      live: '#',
      featured: true,
      challenges: [
        'Multi-modal integration',
        'Prompt optimization',
        'Content quality control',
      ],
      achievements: [
        '90% user satisfaction',
        'Real-time generation',
        'Multi-format output support',
      ],
      duration: '6 months',
      teamSize: '4 members',
    },
    {
      id: 3,
      title: 'AI-Powered Chatbot',
      description:
        'Intelligent conversational AI built with LangChain and RAG architecture. Supports document processing, memory retention, and contextual responses.',
      detailedDescription:
        'An advanced chatbot system leveraging LangChain framework and Retrieval-Augmented Generation (RAG) architecture. The system can process various document formats, maintain conversation context, and provide accurate responses based on knowledge bases. Features include document ingestion, vector embeddings, semantic search, and persistent memory for enhanced user interactions.',
      images: [
        '/portfolio/projects/ai-chatbot/main.jpg',
        '/portfolio/projects/ai-chatbot/interface.jpg',
        '/portfolio/projects/ai-chatbot/features.jpg',
      ],
      category: 'genai',
      tech: [
        'Python',
        'LangChain',
        'OpenAI',
        'Pinecone',
        'Streamlit',
        'Docker',
      ],
      github: '#',
      live: '#',
      featured: true,
      challenges: [
        'Context preservation',
        'Document processing',
        'Response accuracy',
      ],
      achievements: [
        '95% response accuracy',
        'Multi-document support',
        'Scalable architecture',
      ],
      duration: '4 months',
      teamSize: '3 members',
    },
    {
      id: 4,
      title: 'Custom GPT Fine-tuning',
      description:
        'Domain-specific GPT model fine-tuned on specialized datasets. Achieved 40% improvement in task-specific performance over base models.',
      detailedDescription:
        'A specialized project focused on fine-tuning GPT models for domain-specific applications. The project involved data collection, preprocessing, model training, and evaluation. Successfully created custom models for technical documentation, customer support, and creative writing with significant performance improvements over general-purpose models.',
      images: [
        '/portfolio/projects/gpt-finetuning/main.jpg',
        '/portfolio/projects/gpt-finetuning/training.jpg',
        '/portfolio/projects/gpt-finetuning/results.jpg',
      ],
      category: 'genai',
      tech: [
        'Python',
        'Transformers',
        'PyTorch',
        'Weights & Biases',
        'CUDA',
        'HuggingFace',
      ],
      github: '#',
      live: '#',
      featured: false,
      challenges: [
        'Data quality control',
        'Training optimization',
        'Model evaluation',
      ],
      achievements: [
        '40% performance improvement',
        'Reduced inference time',
        'Custom tokenization',
      ],
      duration: '5 months',
      teamSize: '2 members',
    },
    {
      id: 5,
      title: 'AI Image Style Transfer',
      description:
        'Neural style transfer application using Stable Diffusion and ControlNet. Real-time style adaptation with custom artistic filters.',
      detailedDescription:
        'An innovative image processing application that combines Stable Diffusion with ControlNet to achieve real-time style transfer. The system allows users to apply various artistic styles to images while maintaining structural integrity. Features include custom style training, batch processing, and an intuitive web interface for seamless user experience.',
      images: [
        '/portfolio/projects/ai-style-transfer/main.jpg',
        '/portfolio/projects/ai-style-transfer/demo.jpg',
        '/portfolio/projects/ai-style-transfer/gallery.jpg',
      ],
      category: 'genai',
      tech: [
        'Python',
        'Stable Diffusion',
        'ControlNet',
        'Flask',
        'PIL',
        'OpenCV',
      ],
      github: '#',
      live: '#',
      featured: false,
      challenges: [
        'Real-time processing',
        'Style consistency',
        'GPU optimization',
      ],
      achievements: [
        'Sub-second processing',
        'High-quality outputs',
        'Custom style library',
      ],
      duration: '3 months',
      teamSize: '2 members',
    },
    {
      id: 6,
      title: 'Cauliflower Disease Detection',
      description:
        'YOLOv8 model trained on 1,200 labeled images. Solved class imbalance and low-res issues with augmentation. Integrated into a multilingual voice-supported mobile app.',
      detailedDescription:
        'This project involves developing a comprehensive agricultural solution using YOLOv8 object detection model. The system can identify various diseases in cauliflower crops with high accuracy. The model was trained on a carefully curated dataset of 1,200 labeled images, addressing challenges like class imbalance through data augmentation techniques. The final implementation includes a user-friendly mobile application with multilingual support and voice assistance to help farmers easily identify crop diseases.',
      images: [
        '/portfolio/projects/cauliflower-detection/main.jpg',
        '/portfolio/projects/cauliflower-detection/model.jpg',
        '/portfolio/projects/cauliflower-detection/app.jpg',
      ],
      category: 'ai',
      tech: ['Python', 'OpenCV', 'YOLOv8', 'React Native', 'TensorFlow'],
      github: '#',
      live: '#',
      featured: true,
      challenges: [
        'Class imbalance in dataset',
        'Low resolution images',
        'Real-time detection optimization',
      ],
      achievements: [
        '95% accuracy on test set',
        'Multi-language support',
        'Voice-guided interface',
      ],
      duration: '4 months',
      teamSize: '3 members',
    },
    {
      id: 7,
      title: 'Speech Emotion Recognition',
      description:
        'Used RAVDESS dataset with MFCC, CNN & SVM. Handled noise, emotion overlap with normalization & dropout. Accuracy: 60%, F1 Score: 65%',
      detailedDescription:
        'A sophisticated emotion recognition system that analyzes speech patterns to identify human emotions. The project utilized the RAVDESS dataset and implemented advanced feature extraction techniques including MFCC (Mel-Frequency Cepstral Coefficients). The system combines CNN and SVM models to achieve robust emotion classification, handling challenges like background noise and emotion overlap through careful preprocessing and regularization techniques.',
      images: [
        '/projects/speech-emotion/main.jpg',
        '/projects/speech-emotion/features.jpg',
        '/projects/speech-emotion/results.jpg',
      ],
      category: 'ai',
      tech: ['Python', 'TensorFlow', 'CNN', 'SVM', 'Librosa', 'NumPy'],
      github: '#',
      live: '#',
      featured: true,
      challenges: [
        'Background noise handling',
        'Emotion overlap detection',
        'Feature extraction optimization',
      ],
      achievements: [
        '60% accuracy rate',
        '65% F1 Score',
        'Real-time processing capability',
      ],
      duration: '3 months',
      teamSize: '2 members',
    },
    {
      id: 8,
      title: 'Movie Genre Classification',
      description:
        'Multi-label classification with TF-IDF + Logistic Regression → BERT. Resolved class imbalance and genre overlap issues. F1 Score (BERT): 60%',
      detailedDescription:
        'An advanced NLP project that classifies movies into multiple genres based on plot descriptions. The project evolved from traditional TF-IDF with Logistic Regression to state-of-the-art BERT models. Special attention was given to handling multi-label classification challenges, class imbalance, and genre overlap issues. The final BERT implementation shows significant improvement in classification accuracy.',
      images: [
        '/portfolio/projects/movie-genre/main.jpg',
        '/portfolio/projects/movie-genre/analysis.jpg',
        '/portfolio/projects/movie-genre/results.jpg',
      ],
      category: 'nlp',
      tech: [
        'Python',
        'HuggingFace',
        'PyTorch',
        'BERT',
        'Scikit-learn',
        'Pandas',
      ],
      github: '#',
      live: '#',
      featured: true,
      challenges: [
        'Multi-label classification',
        'Class imbalance',
        'Genre overlap handling',
      ],
      achievements: [
        '60% F1 Score with BERT',
        'Multi-genre prediction',
        'Scalable architecture',
      ],
      duration: '5 months',
      teamSize: '4 members',
    },
    {
      id: 9,
      title: 'Spam SMS Detection',
      description:
        'Preprocessed noisy messages using stemming and token filtering. Used Naive Bayes and SVM. Accuracy: 70%, Precision: 75%',
      detailedDescription:
        'A comprehensive SMS spam detection system that processes and classifies text messages. The project involved extensive text preprocessing including stemming, token filtering, and noise reduction. Multiple machine learning models were implemented and compared, with Naive Bayes and SVM showing the best performance for this specific use case.',
      images: [
        '/portfolio/projects/spam-detection/main.jpg',
        '/portfolio/projects/spam-detection/preprocessing.jpg',
        '/portfolio/projects/spam-detection/performance.jpg',
      ],
      category: 'nlp',
      tech: ['Python', 'NLTK', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      github: '#',
      live: '#',
      featured: false,
      challenges: [
        'Noisy text data',
        'Feature selection',
        'Model optimization',
      ],
      achievements: [
        '70% accuracy',
        '75% precision',
        'Real-time classification',
      ],
      duration: '2 months',
      teamSize: '1 member',
    },
    {
      id: 10,
      title: 'Customer Churn Prediction',
      description:
        'Used Telco dataset with imputation and SMOTE. Models: Logistic Regression, XGBoost. Accuracy: 68%, Recall: 66%',
      detailedDescription:
        'A machine learning solution for predicting customer churn in telecommunications. The project involved comprehensive data preprocessing including missing value imputation and handling class imbalance using SMOTE technique. Multiple models were evaluated with XGBoost showing superior performance in identifying potential churners.',
      images: [
        '/portfolio/projects/churn-prediction/main.jpg',
        '/portfolio/projects/churn-prediction/analysis.jpg',
        '/portfolio/projects/churn-prediction/model.jpg',
      ],
      category: 'ml',
      tech: ['Python', 'Pandas', 'XGBoost', 'Scikit-learn', 'SMOTE'],
      github: '#',
      live: '#',
      featured: false,
      challenges: [
        'Class imbalance',
        'Feature engineering',
        'Model interpretability',
      ],
      achievements: ['68% accuracy', '66% recall', 'Business impact analysis'],
      duration: '3 months',
      teamSize: '2 members',
    },
    {
      id: 11,
      title: 'Credit Card Fraud Detection',
      description:
        'Used Isolation Forest on extremely imbalanced Kaggle dataset. Achieved 73% AUC-ROC and 65% precision.',
      detailedDescription:
        'An anomaly detection system for identifying fraudulent credit card transactions. The project tackled the challenge of extremely imbalanced datasets using Isolation Forest algorithm. The solution focuses on identifying outliers and anomalous patterns in transaction data to prevent financial fraud.',
      images: [
        '/portfolio/projects/fraud-detection/main.jpg',
        '/portfolio/projects/fraud-detection/model.jpg',
        '/portfolio/projects/fraud-detection/results.jpg',
      ],
      category: 'ml',
      tech: ['Python', 'Scikit-learn', 'Matplotlib', 'Pandas', 'Seaborn'],
      github: '#',
      live: '#',
      featured: false,
      challenges: [
        'Extremely imbalanced data',
        'Anomaly detection',
        'False positive reduction',
      ],
      achievements: ['73% AUC-ROC', '65% precision', 'Real-time detection'],
      duration: '2 months',
      teamSize: '1 member',
    },
    {
      id: 12,
      title: 'English-to-Nepali Translator',
      description:
        'Rule-based system with self-curated bilingual corpus (500+ pairs). Handled syntax mismatches, BLEU score: 50%',
      detailedDescription:
        'A specialized translation system for English to Nepali language conversion. The project involved creating a comprehensive bilingual corpus and implementing rule-based translation algorithms. Special attention was given to handling syntactic differences between English and Nepali languages.',
      images: [
        '/portfolio/projects/english-nepali-translator/main.jpg',
        '/portfolio/projects/english-nepali-translator/interface.jpg',
        '/portfolio/projects/english-nepali-translator/corpus.jpg',
      ],
      category: 'nlp',
      tech: ['Python', 'NLTK', 'Regular Expressions', 'XML Processing'],
      github: '#',
      live: '#',
      featured: false,
      challenges: [
        'Syntax mismatch handling',
        'Corpus creation',
        'Rule optimization',
      ],
      achievements: [
        '50% BLEU score',
        '500+ translation pairs',
        'Cultural context preservation',
      ],
      duration: '4 months',
      teamSize: '2 members',
    },
    {
      id: 13,
      title: 'Named Entity Recognition (NER)',
      description:
        'Used CoNLL-2003 dataset. BiLSTM-CRF model for PER, LOC, ORG detection. F1 Score: 65%',
      detailedDescription:
        'An advanced NER system for identifying and classifying named entities in text. The project implemented BiLSTM-CRF architecture using the CoNLL-2003 dataset to detect persons, locations, and organizations. The model demonstrates strong performance in entity boundary detection and classification.',
      images: [
        '/portfolio/projects/ner/main.jpg',
        '/portfolio/projects/ner/model.jpg',
        '/portfolio/projects/ner/evaluation.jpg',
      ],
      category: 'nlp',
      tech: ['Python', 'SpaCy', 'Scikit-learn', 'TensorFlow', 'CRF'],
      github: '#',
      live: '#',
      featured: false,
      challenges: [
        'Entity boundary detection',
        'Multi-class classification',
        'Sequence labeling',
      ],
      achievements: [
        '65% F1 Score',
        'Multi-entity recognition',
        'Scalable architecture',
      ],
      duration: '3 months',
      teamSize: '1 member',
    },
  ]

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI & Computer Vision' },
    { id: 'nlp', name: 'Natural Language Processing' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'genai', name: 'Generative AI' },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section
      id='projects'
      className='py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/20 dark:from-gray-900 dark:via-blue-900/5 dark:to-purple-900/5'
    >
      {/* Enhanced Background */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Animated gradient orbs */}
        <motion.div
          className='absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl'
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl'
          animate={{
            x: [0, -40, 0],
            y: [0, 25, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
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
                <FolderOpen size={36} className='text-white' />
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
              {/* Floating bubbles around icon */}
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
            className='text-4xl md:text-5xl font-bold mb-4 cursor-pointer group relative'
            whileHover={{ scale: 1.05 }}
          >
            <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-500'>
              My Projects
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
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            A collection of my work showcasing expertise in AI, NLP, and machine
            learning.
          </p>
        </motion.div>

        {/* Enhanced Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='flex flex-wrap justify-center gap-4 mb-16'
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 overflow-hidden ${
                activeFilter === filter.id
                  ? 'text-white shadow-xl scale-105'
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              {activeFilter === filter.id && (
                <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500'></div>
              )}
              <div className='relative z-10 flex items-center space-x-2'>
                {filter.id === 'all' && <FolderOpen size={18} />}
                {filter.id === 'ai' && <Zap size={18} />}
                {filter.id === 'nlp' && <Code size={18} />}
                {filter.id === 'ml' && <Award size={18} />}
                {filter.id === 'genai' && <Sparkles size={18} />}
                <span>{filter.name}</span>
                {activeFilter === filter.id && (
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

        {/* Enhanced Projects Grid */}
        <div className='space-y-8'>
          {/* Mobile: Show first project */}
          <div className='md:hidden'>
            <motion.div
              className='grid grid-cols-1 gap-8'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {filteredProjects.slice(0, 1).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='group relative h-full'
                >
                  <motion.div
                    className='relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-gray-200/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-500 h-full flex flex-col'
                    whileHover={{
                      y: -15,
                      scale: 1.02,
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Enhanced gradient border on hover */}
                    <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                    {/* Project Image with enhanced effects */}
                    <div
                      className='relative overflow-hidden rounded-t-3xl h-48 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 cursor-pointer'
                      onClick={() => {
                        setSelectedProject(project)
                        setSelectedImageIndex(0)
                      }}
                    >
                      {/* Show actual image for YouTube Video Summarizer, fallback to icons for others */}
                      {project.id === 1 ? (
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          width={400}
                          height={192}
                          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                          onError={(e) => {
                            // Fallback to category icon if image fails to load
                            ;(e.target as HTMLImageElement).style.display =
                              'none'
                          }}
                        />
                      ) : (
                        <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center'>
                          <div className='text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500'>
                            {project.category === 'ai' && '🤖'}
                            {project.category === 'nlp' && '📝'}
                            {project.category === 'ml' && '📊'}
                            {project.category === 'genai' && '✨'}
                          </div>
                        </div>
                      )}

                      {/* Featured badge */}
                      {project.featured && (
                        <motion.div
                          className='absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg'
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          <div className='flex items-center space-x-1'>
                            <Star size={12} />
                            <span>Featured</span>
                          </div>
                        </motion.div>
                      )}

                      {/* Shine effect */}
                      <div className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000'></div>
                    </div>

                    {/* Enhanced Project Content */}
                    <div className='relative p-6 flex-grow flex flex-col'>
                      <div className='flex items-start justify-between mb-3'>
                        <h3 className='text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>
                          {project.title}
                        </h3>
                        <div className='flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400'>
                          <Calendar size={12} />
                          <span>2024</span>
                        </div>
                      </div>

                      <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow'>
                        {project.description}
                      </p>

                      {/* Enhanced Tech Stack */}
                      <div className='mb-6'>
                        <div className='flex flex-wrap gap-2'>
                          {project.tech.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              className='px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full border border-blue-200/30 dark:border-blue-700/30 group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-blue-800/50 dark:group-hover:to-purple-800/50 transition-all duration-300'
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.6 + techIndex * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Enhanced Project Links */}
                      <div className='flex items-center justify-between'>
                        <div className='flex space-x-3'>
                          <motion.a
                            href={project.github}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='group/link p-2 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer'
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github
                              size={18}
                              className='group-hover/link:scale-110 transition-transform'
                            />
                          </motion.a>

                          <motion.a
                            href={project.live}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='group/link p-2 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer'
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink
                              size={18}
                              className='group-hover/link:scale-110 transition-transform'
                            />
                          </motion.a>
                        </div>

                        <motion.button
                          className='group/view flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500 hover:to-purple-500 text-blue-600 dark:text-blue-400 hover:text-white rounded-xl transition-all duration-300 text-sm font-medium border border-blue-200/30 dark:border-blue-700/30 hover:border-transparent shadow-sm hover:shadow-lg cursor-pointer'
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            setSelectedProject(project)
                            setSelectedImageIndex(0)
                          }}
                        >
                          <Eye
                            size={16}
                            className='group-hover/view:scale-110 transition-transform'
                          />
                          <span>View Details</span>
                        </motion.button>
                      </div>
                    </div>

                    {/* Floating corner elements */}
                    <motion.div
                      className='absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300'
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.div
                      className='absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300'
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: [360, 180, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Explore Projects Button - Only show if there are more projects */}
            {filteredProjects.length > 1 && (
              <div className='text-center mt-8'>
                <motion.button
                  onClick={() => setShowMobileProjects(!showMobileProjects)}
                  className='inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300'
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>
                    {showMobileProjects ? 'Show Less' : 'Explore More Projects'}
                  </span>
                  <motion.div
                    animate={{ rotate: showMobileProjects ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {showMobileProjects ? '▲' : '▼'}
                  </motion.div>
                </motion.button>

                {/* Show project count */}
                <p className='text-sm text-gray-600 dark:text-gray-400 mt-2'>
                  {showMobileProjects
                    ? `Showing all ${filteredProjects.length} projects`
                    : `${filteredProjects.length - 1} more projects available`}
                </p>
              </div>
            )}

            {/* Additional Mobile Projects - Show when expanded */}
            {showMobileProjects && filteredProjects.length > 1 && (
              <motion.div
                className='grid grid-cols-1 gap-8 mt-8'
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {filteredProjects.slice(1).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className='group relative h-full'
                  >
                    <motion.div
                      className='relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-gray-200/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-500 h-full flex flex-col'
                      whileHover={{
                        y: -15,
                        scale: 1.02,
                      }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Enhanced gradient border on hover */}
                      <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                      {/* Project Image with enhanced effects */}
                      <div
                        className='relative overflow-hidden rounded-t-3xl h-48 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 cursor-pointer'
                        onClick={() => {
                          setSelectedProject(project)
                          setSelectedImageIndex(0)
                        }}
                      >
                        {/* Show actual image for YouTube Video Summarizer, fallback to icons for others */}
                        {project.id === 1 ? (
                          <Image
                            src={project.images[0]}
                            alt={project.title}
                            width={400}
                            height={192}
                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                            onError={(e) => {
                              // Fallback to category icon if image fails to load
                              ;(e.target as HTMLImageElement).style.display =
                                'none'
                            }}
                          />
                        ) : (
                          <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center'>
                            <div className='text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500'>
                              {project.category === 'ai' && '🤖'}
                              {project.category === 'nlp' && '📝'}
                              {project.category === 'ml' && '📊'}
                              {project.category === 'genai' && '✨'}
                            </div>
                          </div>
                        )}

                        {/* Featured badge */}
                        {project.featured && (
                          <motion.div
                            className='absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg'
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                          >
                            <div className='flex items-center space-x-1'>
                              <Star size={12} />
                              <span>Featured</span>
                            </div>
                          </motion.div>
                        )}

                        {/* Shine effect */}
                        <div className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000'></div>
                      </div>

                      {/* Enhanced Project Content */}
                      <div className='relative p-6 flex-grow flex flex-col'>
                        <div className='flex items-start justify-between mb-3'>
                          <h3 className='text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>
                            {project.title}
                          </h3>
                          <div className='flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400'>
                            <Calendar size={12} />
                            <span>2024</span>
                          </div>
                        </div>

                        <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow'>
                          {project.description}
                        </p>

                        {/* Enhanced Tech Stack */}
                        <div className='mb-6'>
                          <div className='flex flex-wrap gap-2'>
                            {project.tech.map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                className='px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full border border-blue-200/30 dark:border-blue-700/30 group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-blue-800/50 dark:group-hover:to-purple-800/50 transition-all duration-300'
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 + techIndex * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Enhanced Project Links */}
                        <div className='flex items-center justify-between'>
                          <div className='flex space-x-3'>
                            <motion.a
                              href={project.github}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='group/link p-2 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer'
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Github
                                size={18}
                                className='group-hover/link:scale-110 transition-transform'
                              />
                            </motion.a>

                            <motion.a
                              href={project.live}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='group/link p-2 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer'
                              whileHover={{ scale: 1.1, rotate: -5 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ExternalLink
                                size={18}
                                className='group-hover/link:scale-110 transition-transform'
                              />
                            </motion.a>
                          </div>

                          <motion.button
                            className='group/view flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500 hover:to-purple-500 text-blue-600 dark:text-blue-400 hover:text-white rounded-xl transition-all duration-300 text-sm font-medium border border-blue-200/30 dark:border-blue-700/30 hover:border-transparent shadow-sm hover:shadow-lg cursor-pointer'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                              setSelectedProject(project)
                              setSelectedImageIndex(0)
                            }}
                          >
                            <Eye
                              size={16}
                              className='group-hover/view:scale-110 transition-transform'
                            />
                            <span>View Details</span>
                          </motion.button>
                        </div>
                      </div>

                      {/* Floating corner elements */}
                      <motion.div
                        className='absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300'
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                      <motion.div
                        className='absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300'
                        animate={{
                          scale: [1, 1.3, 1],
                          rotate: [360, 180, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Desktop Projects Grid - Always visible on md+ screens */}
          <motion.div
            className='hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group relative h-full'
              >
                <motion.div
                  className='relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-gray-200/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-500 h-full flex flex-col'
                  whileHover={{
                    y: -15,
                    scale: 1.02,
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Enhanced gradient border on hover */}
                  <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                  {/* Project Image with enhanced effects */}
                  <div
                    className='relative overflow-hidden rounded-t-3xl h-48 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 cursor-pointer'
                    onClick={() => {
                      setSelectedProject(project)
                      setSelectedImageIndex(0)
                    }}
                  >
                    {/* Show actual image for YouTube Video Summarizer, fallback to icons for others */}
                    {project.id === 1 ? (
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        width={400}
                        height={192}
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                        onError={(e) => {
                          // Fallback to category icon if image fails to load
                          ;(e.target as HTMLImageElement).style.display = 'none'
                        }}
                      />
                    ) : (
                      <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center'>
                        <div className='text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500'>
                          {project.category === 'ai' && '🤖'}
                          {project.category === 'nlp' && '📝'}
                          {project.category === 'ml' && '📊'}
                          {project.category === 'genai' && '✨'}
                        </div>
                      </div>
                    )}

                    {/* Featured badge */}
                    {project.featured && (
                      <motion.div
                        className='absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg'
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <div className='flex items-center space-x-1'>
                          <Star size={12} />
                          <span>Featured</span>
                        </div>
                      </motion.div>
                    )}

                    {/* Shine effect */}
                    <div className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000'></div>
                  </div>

                  {/* Enhanced Project Content */}
                  <div className='relative p-6 flex-grow flex flex-col'>
                    <div className='flex items-start justify-between mb-3'>
                      <h3 className='text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>
                        {project.title}
                      </h3>
                      <div className='flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400'>
                        <Calendar size={12} />
                        <span>2024</span>
                      </div>
                    </div>

                    <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow'>
                      {project.description}
                    </p>

                    {/* Enhanced Tech Stack */}
                    <div className='mb-6'>
                      <div className='flex flex-wrap gap-2'>
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className='px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full border border-blue-200/30 dark:border-blue-700/30 group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-blue-800/50 dark:group-hover:to-purple-800/50 transition-all duration-300'
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + techIndex * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Project Links */}
                    <div className='flex items-center justify-between'>
                      <div className='flex space-x-3'>
                        <motion.a
                          href={project.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='group/link p-2 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer'
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github
                            size={18}
                            className='group-hover/link:scale-110 transition-transform'
                          />
                        </motion.a>

                        <motion.a
                          href={project.live}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='group/link p-2 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer'
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink
                            size={18}
                            className='group-hover/link:scale-110 transition-transform'
                          />
                        </motion.a>
                      </div>

                      <motion.button
                        className='group/view flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500 hover:to-purple-500 text-blue-600 dark:text-blue-400 hover:text-white rounded-xl transition-all duration-300 text-sm font-medium border border-blue-200/30 dark:border-blue-700/30 hover:border-transparent shadow-sm hover:shadow-lg cursor-pointer'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setSelectedProject(project)
                          setSelectedImageIndex(0)
                        }}
                      >
                        <Eye
                          size={16}
                          className='group-hover/view:scale-110 transition-transform'
                        />
                        <span>View Details</span>
                      </motion.button>
                    </div>
                  </div>

                  {/* Floating corner elements */}
                  <motion.div
                    className='absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300'
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  <motion.div
                    className='absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300'
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [360, 180, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mt-12'
        >
          <motion.a
            href='https://github.com/sijanpaudel14'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 pt-20'
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='bg-white dark:bg-gray-900 rounded-3xl max-w-6xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-gray-200/20 dark:border-gray-700/20'
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className='flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700'>
                <div className='flex items-center space-x-4'>
                  <div className='p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl'>
                    {selectedProject.category === 'ai' && (
                      <Zap size={24} className='text-white' />
                    )}
                    {selectedProject.category === 'nlp' && (
                      <Code size={24} className='text-white' />
                    )}
                    {selectedProject.category === 'ml' && (
                      <Award size={24} className='text-white' />
                    )}
                    {selectedProject.category === 'genai' && (
                      <Sparkles size={24} className='text-white' />
                    )}
                  </div>
                  <div>
                    <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
                      {selectedProject.title}
                    </h2>
                    <div className='flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-1'>
                      <div className='flex items-center space-x-1'>
                        <Clock size={14} />
                        <span>{selectedProject.duration}</span>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <Users size={14} />
                        <span>{selectedProject.teamSize}</span>
                      </div>
                      {selectedProject.featured && (
                        <div className='flex items-center space-x-1 px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs rounded-full'>
                          <Star size={12} />
                          <span>Featured</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <motion.button
                  className='p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors cursor-pointer'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={24} className='text-gray-500 dark:text-gray-400' />
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className='flex flex-col lg:flex-row h-full max-h-[calc(85vh-100px)] overflow-hidden'>
                {/* Left Side - Image Gallery */}
                <div className='lg:w-1/2 p-6 space-y-4'>
                  {/* Main Image */}
                  <div className='relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 h-80'>
                    {/* Show actual image for YouTube Video Summarizer, fallback to icons for others */}
                    {selectedProject.id === 1 ? (
                      <Image
                        src={selectedProject.images[selectedImageIndex]}
                        alt={`${selectedProject.title} - Image ${
                          selectedImageIndex + 1
                        }`}
                        width={600}
                        height={320}
                        className='w-full h-full object-cover'
                        onError={(e) => {
                          // Fallback to category icon if image fails to load
                          ;(e.target as HTMLImageElement).style.display = 'none'
                        }}
                      />
                    ) : (
                      <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center'>
                        <div className='text-8xl opacity-30'>
                          {selectedProject.category === 'ai' && '🤖'}
                          {selectedProject.category === 'nlp' && '📝'}
                          {selectedProject.category === 'ml' && '📊'}
                          {selectedProject.category === 'genai' && '✨'}
                        </div>
                      </div>
                    )}
                    <div className='absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full'>
                      {selectedImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </div>

                  {/* Image Thumbnails */}
                  <div className='flex space-x-3'>
                    {selectedProject.images.map(
                      (image: string, index: number) => (
                        <motion.button
                          key={index}
                          className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                            selectedImageIndex === index
                              ? 'border-blue-500 shadow-lg'
                              : 'border-gray-200 dark:border-gray-600 hover:border-blue-300'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedImageIndex(index)}
                        >
                          {/* Show actual thumbnail for YouTube Video Summarizer, fallback to icons for others */}
                          {selectedProject.id === 1 ? (
                            <Image
                              src={image}
                              alt={`${selectedProject.title} - Thumbnail ${
                                index + 1
                              }`}
                              width={80}
                              height={80}
                              className='w-full h-full object-cover'
                              onError={(e) => {
                                // Fallback to category icon if image fails to load
                                ;(e.target as HTMLImageElement).style.display =
                                  'none'
                              }}
                            />
                          ) : (
                            <div className='absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center'>
                              <div className='text-2xl opacity-60'>
                                {selectedProject.category === 'ai' && '🤖'}
                                {selectedProject.category === 'nlp' && '📝'}
                                {selectedProject.category === 'ml' && '📊'}
                                {selectedProject.category === 'genai' && '✨'}
                              </div>
                            </div>
                          )}
                          {selectedImageIndex === index && (
                            <div className='absolute inset-0 bg-blue-500/20 border-2 border-blue-500 rounded-xl'></div>
                          )}
                        </motion.button>
                      )
                    )}
                  </div>
                </div>

                {/* Right Side - Project Details */}
                <div className='lg:w-1/2 p-6 overflow-y-auto'>
                  <div className='space-y-6'>
                    {/* Description */}
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2'>
                        <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                        <span>Project Overview</span>
                      </h3>
                      <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                        {selectedProject.detailedDescription}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2'>
                        <div className='w-2 h-2 bg-purple-500 rounded-full'></div>
                        <span>Technologies Used</span>
                      </h3>
                      <div className='flex flex-wrap gap-2'>
                        {selectedProject.tech.map(
                          (tech: string, index: number) => (
                            <motion.span
                              key={tech}
                              className='px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-xl border border-blue-200/30 dark:border-blue-700/30'
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {tech}
                            </motion.span>
                          )
                        )}
                      </div>
                    </div>

                    {/* Challenges */}
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2'>
                        <div className='w-2 h-2 bg-orange-500 rounded-full'></div>
                        <span>Key Challenges</span>
                      </h3>
                      <div className='space-y-2'>
                        {selectedProject.challenges.map(
                          (challenge: string, index: number) => (
                            <div
                              key={index}
                              className='flex items-start space-x-3'
                            >
                              <AlertTriangle
                                size={16}
                                className='text-orange-500 mt-1 flex-shrink-0'
                              />
                              <span className='text-gray-600 dark:text-gray-300 text-sm'>
                                {challenge}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2'>
                        <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                        <span>Key Achievements</span>
                      </h3>
                      <div className='space-y-2'>
                        {selectedProject.achievements.map(
                          (achievement: string, index: number) => (
                            <div
                              key={index}
                              className='flex items-start space-x-3'
                            >
                              <CheckCircle
                                size={16}
                                className='text-green-500 mt-1 flex-shrink-0'
                              />
                              <span className='text-gray-600 dark:text-gray-300 text-sm'>
                                {achievement}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className='flex space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700'>
                      <motion.a
                        href={selectedProject.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer'
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={20} />
                        <span>View Code</span>
                      </motion.a>
                      <motion.a
                        href={selectedProject.live}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer'
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
