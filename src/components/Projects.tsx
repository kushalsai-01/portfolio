'use client'

import { motion } from 'framer-motion'
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

  return (
    <section
      id="projects"
      ref={ref}
      className="px-6 lg:px-8 py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Section header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Featured Projects
            </h2>
            <p className="text-gray-600 text-lg">
              From AI-powered tools to production-grade systems — here's what I've built.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Left - Project Info */}
                  <div className="space-y-5">
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
                        Featured Project
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-primary font-medium">{project.tagline}</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Problem</h4>
                        <p className="text-gray-600">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Solution</h4>
                        <p className="text-gray-700">{project.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right - Impact & Tech */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.impact.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-700">
                            <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-sm font-medium bg-gray-100 rounded-lg text-gray-700"
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
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

          {/* Other Projects */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">More Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.filter(p => !p.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-200"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {project.title}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">{project.tagline}</p>
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-900 transition-colors p-2"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium bg-gray-100 rounded-md text-gray-600"
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

          {/* View more link */}
          <div className="text-center">
            <a
              href="https://github.com/kushalsai-01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              View all projects on GitHub
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
