'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Gradient orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-mid/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />

      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-success-muted border border-success/20 rounded-full text-success text-sm font-medium backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              Open to Opportunities
            </span>
          </motion.div>

          {/* Name with gradient */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-display font-bold tracking-tight">
              <span className="text-text-primary">Hi, I'm </span>
              <span className="gradient-text">Kushal Sai</span>
            </h1>
          </motion.div>

          {/* Title - Monospace style like Linear/Vercel */}
          <motion.div variants={itemVariants}>
            <p className="font-mono text-lg md:text-xl text-text-secondary tracking-wide">
              <span className="text-accent">{'<'}</span>
              Full Stack Developer
              <span className="text-text-muted"> & </span>
              ML Engineer
              <span className="text-accent">{' />'}</span>
            </p>
          </motion.div>

          {/* Value Proposition */}
          <motion.p
            variants={itemVariants}
            className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            I build <span className="text-text-primary font-medium">AI-powered applications</span> and{' '}
            <span className="text-text-primary font-medium">production-ready systems</span>.
            <br className="hidden sm:block" />
            CS undergrad with research experience in Machine Learning.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 pt-6">
            <a
              href="/resume.pdf"
              download
              className="group relative px-8 py-4 bg-accent text-white font-semibold rounded-xl 
                       transition-all duration-300 ease-out
                       hover:bg-accent-light hover:shadow-glow
                       active:scale-[0.98]
                       flex items-center gap-3"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
            
            <a
              href="https://github.com/kushalsai-01"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-surface border border-surface-border text-text-primary font-semibold rounded-xl 
                       transition-all duration-300 ease-out
                       hover:bg-surface-hover hover:border-text-muted
                       active:scale-[0.98]
                       flex items-center gap-3"
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View GitHub
            </a>
            
            <a
              href="#contact"
              className="group px-8 py-4 text-text-secondary font-semibold rounded-xl 
                       transition-all duration-300 ease-out
                       hover:text-text-primary hover:bg-surface/50
                       active:scale-[0.98]
                       flex items-center gap-2"
            >
              Let's Talk
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Tech stack preview */}
          <motion.div 
            variants={itemVariants}
            className="pt-16 flex flex-col items-center gap-4"
          >
            <p className="text-text-muted text-sm font-medium uppercase tracking-wider">Building with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['React', 'Node.js', 'Python', 'TypeScript', 'Go', 'LLMs'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-surface/50 border border-surface-border rounded-lg text-sm text-text-secondary
                           hover:border-text-muted hover:text-text-primary transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="pt-12"
          >
            <a 
              href="#about"
              className="inline-flex flex-col items-center gap-2 text-text-muted hover:text-text-secondary transition-colors"
            >
              <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
