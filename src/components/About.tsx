'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  { category: 'Languages', items: ['Java', 'Golang', 'Python', 'JavaScript', 'TypeScript'] },
  { category: 'Frameworks / Libraries', items: ['React', 'Node.js', 'Express.js', 'Gin'] },
  { category: 'Databases & Systems', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka'] },
  { category: 'DevOps / Cloud', items: ['Docker', 'Git', 'GitHub Actions', 'Prometheus', 'Grafana'] },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-20 bg-neutral-950"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          {/* Section header */}
          <div className="space-y-4">
            <p className="text-primary text-sm font-mono tracking-wider uppercase">
              About
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Who I Am</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Bio */}
            <div className="space-y-6 text-neutral-400 leading-relaxed">
              <p>
                I am a full stack developer who enjoys building web applications
                from frontend to backend. I like working on projects that solve
                real problems and deliver good user experiences.
              </p>
              <p>
                My stack includes React, Node.js, Python, and TypeScript. I focus
                on writing clean, maintainable code and continuously learning new
                technologies.
              </p>
              <p>
                I have experience with data analysis, machine learning projects,
                and building production-ready applications with proper architecture.
              </p>
            </div>

            {/* Skills grid */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <h3 className="text-sm font-mono text-primary uppercase tracking-wider">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 bg-neutral-900 border border-white/10 rounded-md text-sm text-neutral-300 hover:border-primary/50 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats or highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10"
          >
            {[
              { label: 'Years Experience', value: '3+' },
              { label: 'Projects Built', value: '15+' },
              { label: 'Open Source', value: 'Active' },
              { label: 'Code Quality', value: 'High' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
