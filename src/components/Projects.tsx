'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'DocSense',
    description:
      'An AI-powered document assistant built using Retrieval-Augmented Generation (RAG). Supports secure document ingestion, semantic search, and grounded question answering with minimal hallucination.',
    tech: ['Golang', 'React', 'Vector Databases', 'LLMs', 'RAG'],
    github: 'https://github.com/kushalsai-01/DocSense',
  },
  {
    title: 'FinTrack',
    description:
      'An AI-driven personal finance platform that analyzes user spending patterns and provides budgeting insights using machine learning and time-series forecasting.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Machine Learning'],
    github: 'https://github.com/kushalsai-01',
  },
  {
    title: 'Observability Monitoring Platform',
    description:
      'A containerized observability stack showcasing metrics, centralized logging, and alerting using Prometheus, Grafana, and Alertmanager for a Node.js service.',
    tech: ['Node.js', 'Prometheus', 'Grafana', 'Docker'],
    github: 'https://github.com/kushalsai-01',
  },
  {
    title: 'Secret (Encrypted Vault)',
    description:
      'A zero-knowledge encrypted vault with client-side AES-256-GCM encryption. The backend never sees plaintext data or encryption keys.',
    tech: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Web Crypto API'],
    github: 'https://github.com/kushalsai-01',
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
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-20 bg-black"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          {/* Section header */}
          <div className="space-y-4">
            <p className="text-primary text-sm font-mono tracking-wider uppercase">
              Work
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Featured Projects
            </h2>
            <p className="text-neutral-500 max-w-2xl">
              A selection of projects I've worked on, from web apps to ML-powered tools.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={prefersReducedMotion ? {} : { y: -4 }}
                className="group relative bg-neutral-950 border border-white/10 rounded-lg p-6 hover:border-primary/50 transition-all duration-200"
              >
                {/* Card content */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>

                  <p className="text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-black border border-white/10 rounded-md text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View more */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center pt-8"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
            >
              <span>View more on GitHub</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
