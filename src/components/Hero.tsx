'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Typewriter hook
function useTypewriter(words: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false)
        setIsDeleting(true)
        return
      }

      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1))
        if (displayText.length === 0) {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1))
        if (displayText.length === currentWord.length) {
          setIsPaused(true)
        }
      }
    }, isPaused ? pauseTime : isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, isPaused, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return displayText
}

// Animated counter hook
function useCounter(end: number, duration = 2000, delay = 0) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0
      const increment = end / (duration / 16)
      const counter = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(counter)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(counter)
    }, delay)
    return () => clearTimeout(timer)
  }, [end, duration, delay])

  return count
}

export default function Hero() {
  const roles = [
    'Full Stack Developer',
    'ML Engineer', 
    'AI Builder',
    'Problem Solver',
  ]
  
  const typedText = useTypewriter(roles, 80, 40, 2500)
  const projectCount = useCounter(10, 1500, 800)
  const techCount = useCounter(15, 1500, 1000)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" 
      />
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '3s' }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-mid/10 rounded-full blur-[100px]" 
      />
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1.5s' }}
        className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-gradient-end/5 rounded-full blur-[80px]" 
      />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />

      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Animated Status badge */}
          <motion.div variants={itemVariants}>
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-2 bg-success-muted border border-success/20 rounded-full text-success text-sm font-medium backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              Open to Opportunities
            </motion.span>
          </motion.div>

          {/* Name with gradient and letter animation */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-display font-bold tracking-tight">
              <span className="text-text-primary">Hi, I'm </span>
              <motion.span 
                className="gradient-text inline-block"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Kushal Sai
              </motion.span>
            </h1>
          </motion.div>

          {/* Typewriter Title */}
          <motion.div variants={itemVariants} className="h-8 md:h-10">
            <p className="font-mono text-lg md:text-xl text-text-secondary tracking-wide">
              <span className="text-accent">{'<'}</span>
              <span className="text-text-primary">{typedText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                className="text-accent ml-0.5"
              >
                |
              </motion.span>
              <span className="text-accent">{' />'}</span>
            </p>
          </motion.div>

          {/* Value Proposition with highlight animation */}
          <motion.p
            variants={itemVariants}
            className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            I build{' '}
            <motion.span 
              className="text-text-primary font-medium relative"
              whileHover={{ color: '#3B82F6' }}
            >
              AI-powered applications
              <motion.span
                className="absolute bottom-0 left-0 w-full h-px bg-accent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </motion.span>{' '}
            and{' '}
            <motion.span 
              className="text-text-primary font-medium relative"
              whileHover={{ color: '#8B5CF6' }}
            >
              production-ready systems
              <motion.span
                className="absolute bottom-0 left-0 w-full h-px bg-gradient-mid"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </motion.span>.
            <br className="hidden sm:block" />
            CS undergrad with research experience in Machine Learning.
          </motion.p>

          {/* Animated Stats */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-8 md:gap-12 py-4"
          >
            <div className="text-center">
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-text-primary"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.8 }}
              >
                {projectCount}+
              </motion.div>
              <p className="text-text-muted text-sm mt-1">Projects Built</p>
            </div>
            <div className="w-px bg-surface-border" />
            <div className="text-center">
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-text-primary"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 1 }}
              >
                {techCount}+
              </motion.div>
              <p className="text-text-muted text-sm mt-1">Technologies</p>
            </div>
            <div className="w-px bg-surface-border" />
            <div className="text-center">
              <motion.div 
                className="text-3xl md:text-4xl font-bold gradient-text"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 1.2 }}
              >
                9.2
              </motion.div>
              <p className="text-text-muted text-sm mt-1">CGPA</p>
            </div>
          </motion.div>

          {/* CTA Buttons with enhanced animations */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 pt-4">
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-accent text-white font-semibold rounded-xl 
                       transition-all duration-300 ease-out overflow-hidden
                       hover:shadow-glow
                       flex items-center gap-3"
            >
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <svg className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="relative z-10">Download Resume</span>
            </motion.a>
            
            <motion.a
              href="https://github.com/kushalsai-01"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-surface border border-surface-border text-text-primary font-semibold rounded-xl 
                       transition-all duration-300 ease-out
                       hover:bg-surface-hover hover:border-text-muted
                       flex items-center gap-3"
            >
              <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View GitHub
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 text-text-secondary font-semibold rounded-xl 
                       transition-all duration-300 ease-out
                       hover:text-text-primary hover:bg-surface/50
                       flex items-center gap-2"
            >
              Let's Talk
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>
          </motion.div>

          {/* Tech stack with stagger animation */}
          <motion.div 
            variants={itemVariants}
            className="pt-12 flex flex-col items-center gap-4"
          >
            <p className="text-text-muted text-sm font-medium uppercase tracking-wider">Building with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['React', 'Node.js', 'Python', 'TypeScript', 'Go', 'LLMs'].map((tech, index) => (
                <motion.span 
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    borderColor: 'rgba(59, 130, 246, 0.5)',
                    color: '#FAFAFA'
                  }}
                  className="px-4 py-2 bg-surface/50 border border-surface-border rounded-lg text-sm text-text-secondary
                           cursor-default transition-colors duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Scroll indicator with bounce */}
          <motion.div
            variants={itemVariants}
            className="pt-8"
          >
            <motion.a 
              href="#about"
              className="inline-flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-xs font-medium uppercase tracking-wider">Explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
