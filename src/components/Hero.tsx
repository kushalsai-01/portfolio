'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16 relative overflow-hidden bg-black"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left side - Text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Open to Opportunities
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Kushal Sai
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Full Stack Developer & ML Engineer
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-neutral-400 text-xl leading-relaxed max-w-xl"
          >
            Building AI-powered applications and full-stack systems. 
            Currently a <span className="text-white font-medium">CS undergrad</span> with 
            research experience in <span className="text-white font-medium">Machine Learning</span>.
          </motion.p>

          {/* Quick highlights */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {['React', 'Node.js', 'Python', 'Machine Learning', 'RAG Systems'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-neutral-300"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="group px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-100 transition-all duration-200 flex items-center gap-2"
            >
              View Projects
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-white/40 transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
            <a
              href="https://github.com/kushalsai-01"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-white/40 transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* Right side - Code-inspired motion element */}
        <div className="hidden lg:flex items-center justify-center relative h-[500px]">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Layered wireframe grid paths - technical and visible */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer orbital ring */}
              <motion.circle
                cx="250"
                cy="250"
                r="200"
                stroke="rgba(255, 255, 255, 0.15)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  prefersReducedMotion
                    ? { pathLength: 1, opacity: 0.15 }
                    : {
                        pathLength: 1,
                        opacity: 0.15,
                        rotate: 360,
                      }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 1.5 }
                    : {
                        pathLength: { duration: 2, ease: 'easeOut' },
                        rotate: {
                          duration: 40,
                          repeat: Infinity,
                          ease: 'linear',
                        },
                      }
                }
                style={{ originX: '50%', originY: '50%' }}
              />

              {/* Middle orbital ring */}
              <motion.circle
                cx="250"
                cy="250"
                r="150"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="4 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  prefersReducedMotion
                    ? { pathLength: 1, opacity: 0.2 }
                    : {
                        pathLength: 1,
                        opacity: 0.2,
                        rotate: -360,
                      }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 1.5, delay: 0.3 }
                    : {
                        pathLength: { duration: 2, delay: 0.3, ease: 'easeOut' },
                        rotate: {
                          duration: 30,
                          repeat: Infinity,
                          ease: 'linear',
                        },
                      }
                }
                style={{ originX: '50%', originY: '50%' }}
              />

              {/* Inner circle */}
              <motion.circle
                cx="250"
                cy="250"
                r="100"
                stroke="rgba(100, 116, 139, 0.4)"
                strokeWidth="1.5"
                fill="none"
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  prefersReducedMotion
                    ? { scale: 1, opacity: 0.4 }
                    : {
                        scale: [1, 1.05, 1],
                        opacity: [0.4, 0.5, 0.4],
                      }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 1.5, delay: 0.6 }
                    : {
                        scale: {
                          duration: 6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        },
                        opacity: {
                          duration: 6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        },
                      }
                }
                style={{ originX: '50%', originY: '50%' }}
              />

              {/* Technical arcs */}
              <motion.path
                d="M 150 250 A 100 100 0 0 1 250 150"
                stroke="rgba(255, 255, 255, 0.25)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: prefersReducedMotion ? 1 : [0, 1, 0] }}
                transition={
                  prefersReducedMotion
                    ? { duration: 1.5, delay: 0.8 }
                    : {
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }
                }
              />
              <motion.path
                d="M 350 250 A 100 100 0 0 1 250 350"
                stroke="rgba(255, 255, 255, 0.25)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: prefersReducedMotion ? 1 : [0, 1, 0] }}
                transition={
                  prefersReducedMotion
                    ? { duration: 1.5, delay: 1 }
                    : {
                        duration: 8,
                        delay: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }
                }
              />
            </svg>

            {/* Center code braces - clearly visible */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 text-center space-y-3"
            >
              <motion.div
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        scale: [1, 1.03, 1],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-8xl font-mono font-bold text-white/80 leading-none"
              >
                {'{ }'}
              </motion.div>
              <p className="text-sm text-neutral-500 font-mono uppercase tracking-widest">
                Code. Build. Scale.
              </p>
            </motion.div>

            {/* Orbiting dots */}
            {!prefersReducedMotion && (
              <>
                <motion.div
                  className="absolute w-2 h-2 bg-primary rounded-full"
                  style={{ left: '50%', top: '50%' }}
                  animate={{
                    x: [0, 200, 0, -200, 0],
                    y: [0, 0, 200, 0, 0],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                <motion.div
                  className="absolute w-2 h-2 bg-white/60 rounded-full"
                  style={{ left: '50%', top: '50%' }}
                  animate={{
                    x: [0, -150, 0, 150, 0],
                    y: [0, 150, 0, -150, 0],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: [0, 8, 0],
                }
          }
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
