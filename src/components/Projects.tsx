'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'DocSense',
    tagline: 'AI-Powered Document Intelligence',
    problem: 'Traditional document search fails with semantic queries and produces unreliable AI responses.',
    description:
      'Built a RAG-based document assistant that ingests documents, creates vector embeddings, and enables semantic Q&A with grounded, hallucination-free responses.',
    impact: ['Semantic search across 1000+ documents', 'Grounded answers with source citations', 'Zero-knowledge architecture'],
    tech: ['Golang', 'React', 'Vector Databases', 'LLMs', 'RAG'],
    github: 'https://github.com/kushalsai-01/DocSense',
    featured: true,
  },
  {
    title: 'FinTrack',
    tagline: 'ML-Powered Personal Finance',
    problem: 'Users struggle to understand spending patterns and predict future expenses.',
    description:
      'Developed an AI-driven finance platform that analyzes spending patterns and provides personalized budgeting insights using time-series forecasting.',
    impact: ['Spending pattern analysis', 'ML-based budget predictions', 'Personalized recommendations'],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Machine Learning'],
    github: 'https://github.com/kushalsai-01',
    featured: true,
  },
  {
    title: 'Observability Platform',
    tagline: 'Production-Grade Monitoring Stack',
    problem: 'Modern applications need comprehensive monitoring, logging, and alerting for reliability.',
    description:
      'Containerized observability solution with metrics collection, centralized logging, and intelligent alerting for Node.js microservices.',
    impact: ['Real-time metrics dashboards', 'Automated alerting system', 'Production-ready architecture'],
    tech: ['Node.js', 'Prometheus', 'Grafana', 'Docker', 'Alertmanager'],
    github: 'https://github.com/kushalsai-01',
    featured: false,
  },
  {
    title: 'Secret Vault',
    tagline: 'Zero-Knowledge Encrypted Storage',
    problem: 'Cloud storage services have access to user data, creating privacy and security risks.',
    description:
      'A zero-knowledge encrypted vault using client-side AES-256-GCM encryption. The backend never sees plaintext data or encryption keys.',
    impact: ['End-to-end encryption', 'Zero-knowledge architecture', 'Client-side key management'],
    tech: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Web Crypto API'],
    github: 'https://github.com/kushalsai-01',
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen px-6 lg:px-8 py-24 bg-black"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          {/* Section header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
              Featured Work
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Projects That Solve Real Problems
            </h2>
            <p className="text-neutral-400 text-lg">
              From AI-powered tools to production-grade systems — here's what I've built.
            </p>
          </div>

          {/* Featured Projects - Full width cards */}
          <div className="space-y-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 rounded-2xl p-8 lg:p-10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Left - Project Info */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2.5 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-md uppercase tracking-wider">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-lg text-blue-400 font-medium">{project.tagline}</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">The Problem</h4>
                        <p className="text-neutral-400">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">The Solution</h4>
                        <p className="text-neutral-300">{project.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right - Impact & Tech */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.impact.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-neutral-300">
                            <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-sm font-medium bg-white/5 border border-white/10 rounded-lg text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      View on GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects - Grid */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">More Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.filter(p => !p.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={prefersReducedMotion ? {} : { y: -4 }}
                  className="group relative bg-neutral-950 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-200"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-neutral-500 text-sm mt-1">{project.tagline}</p>
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 hover:text-white transition-colors p-2"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>

                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-md text-neutral-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View more */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <a
              href="https://github.com/kushalsai-01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/40 transition-all duration-200 group"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>View All Projects on GitHub</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
