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
    gradient: 'from-accent via-gradient-mid to-gradient-end',
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
    gradient: 'from-success via-accent to-gradient-mid',
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
      className="relative px-6 lg:px-8 py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-secondary via-background to-background-secondary" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Section header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-accent font-mono text-sm tracking-wider">// PROJECTS</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              Featured Work
            </h2>
            <p className="text-text-secondary text-lg">
              From AI-powered tools to production-grade systems — here's what I've shipped.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Gradient border effect */}
                <div className={`absolute -inset-px bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                
                <div className="relative bg-surface border border-surface-border rounded-2xl p-8 lg:p-10 
                              hover:border-transparent transition-colors duration-300">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left - Project Info */}
                    <div className="space-y-6">
                      <div>
                        <span className="inline-block px-3 py-1 bg-accent-muted text-accent text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                          Featured Project
                        </span>
                        <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-2">
                          {project.title}
                        </h3>
                        <p className="text-accent font-medium">{project.tagline}</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Problem</h4>
                          <p className="text-text-secondary">{project.problem}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Solution</h4>
                          <p className="text-text-primary">{project.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right - Impact & Tech */}
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Key Results</h4>
                        <ul className="space-y-3">
                          {project.impact.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-text-secondary">
                              <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 text-sm font-medium bg-background border border-surface-border rounded-lg text-text-secondary"
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
                        className="inline-flex items-center gap-2 px-6 py-3 bg-surface-hover border border-surface-border text-text-primary font-semibold rounded-xl 
                                 hover:bg-text-primary hover:text-background transition-all duration-200 group/btn"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        View on GitHub
                        <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-text-primary">More Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.filter(p => !p.featured).map((project, index) => (
                <motion.a
                  key={project.title}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-surface/50 border border-surface-border rounded-xl p-6 
                           hover:bg-surface hover:border-text-muted transition-all duration-200"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-text-muted text-sm mt-1">{project.tagline}</p>
                      </div>
                      <svg className="w-5 h-5 text-text-muted group-hover:text-text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium bg-background rounded-md text-text-muted border border-surface-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* View all link */}
          <div className="text-center pt-8">
            <a
              href="https://github.com/kushalsai-01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-accent font-medium transition-colors group"
            >
              View all projects on GitHub
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
