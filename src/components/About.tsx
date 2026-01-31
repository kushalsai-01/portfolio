'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Languages',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Golang'],
  },
  {
    title: 'Frontend',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    skills: ['Node.js', 'Express.js', 'Gin', 'REST APIs'],
  },
  {
    title: 'Databases',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Vector DBs'],
  },
  {
    title: 'AI / ML',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    skills: ['Scikit-learn', 'RAG Systems', 'LLMs', 'Data Analysis'],
  },
  {
    title: 'DevOps',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    skills: ['Docker', 'Git', 'GitHub Actions', 'Prometheus', 'Grafana'],
  },
]

const highlights = [
  {
    label: 'Education',
    value: 'B.E. Computer Science',
    subtext: 'DSCE — 9.2 CGPA',
    gradient: 'from-accent to-accent-light',
  },
  {
    label: 'Research',
    value: 'ML Pipelines',
    subtext: '18-25% accuracy improvement',
    gradient: 'from-gradient-mid to-gradient-end',
  },
  {
    label: 'Focus',
    value: 'AI + Full Stack',
    subtext: 'Production-grade systems',
    gradient: 'from-success to-accent',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative px-6 lg:px-8 py-32 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-20"
        >
          {/* Section header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="text-accent font-mono text-sm tracking-wider"
            >
              // ABOUT ME
            </motion.p>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              Building at the intersection of{' '}
              <span className="gradient-text">AI and web development</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              I'm a CS undergrad passionate about building intelligent systems that solve real problems.
              From RAG applications to production-grade web platforms.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-surface border border-surface-border rounded-2xl p-6 
                         hover:border-text-muted transition-all duration-300 cursor-default"
              >
                {/* Gradient accent line */}
                <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${item.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />
                
                <div className="space-y-3">
                  <p className="text-text-muted text-sm font-medium uppercase tracking-wider">{item.label}</p>
                  <p className="text-2xl font-bold text-text-primary">{item.value}</p>
                  <p className="text-text-secondary text-sm">{item.subtext}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="space-y-10">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-text-primary">Technical Stack</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  whileHover={{ y: -3, borderColor: 'rgba(161, 161, 170, 0.5)' }}
                  className="group bg-surface/50 border border-surface-border rounded-xl p-5 
                           hover:bg-surface transition-all duration-200 cursor-default"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-accent-muted rounded-lg text-accent">
                      {category.icon}
                    </div>
                    <h4 className="font-semibold text-text-primary text-sm">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-background rounded-md text-xs text-text-secondary
                                 border border-surface-border group-hover:border-transparent transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
