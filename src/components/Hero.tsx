'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
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
          className="space-y-6"
        >
          <motion.div variants={itemVariants} className="space-y-3">
            <p className="text-primary text-sm font-mono tracking-wider uppercase">
              Welcome
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Hi, I'm <span className="text-white">Kushal Sai</span>
            </h1>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl lg:text-3xl text-neutral-400 font-light"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-neutral-500 text-lg leading-relaxed max-w-xl"
          >
            I build web applications and scalable systems with a focus on clean code and good user experience.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-neutral-200 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="px-6 py-3 border border-white/20 text-white font-medium rounded-md hover:bg-white/5 transition-colors"
            >
              About Me
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
