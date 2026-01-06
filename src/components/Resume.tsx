'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experience = [
  {
    period: '2023 - Present',
    role: 'Senior Backend Engineer',
    company: 'Tech Company',
    description:
      'Lead backend development for distributed systems handling 10M+ requests/day. Architected microservices infrastructure with Golang and Kubernetes.',
  },
  {
    period: '2021 - 2023',
    role: 'Backend Engineer',
    company: 'Startup Inc',
    description:
      'Built scalable REST APIs and event-driven architectures. Reduced database query times by 60% through optimization and caching strategies.',
  },
  {
    period: '2020 - 2021',
    role: 'Software Engineer',
    company: 'Dev Solutions',
    description:
      'Developed backend services and CLI tools for internal developer workflows. Implemented CI/CD pipelines and infrastructure automation.',
  },
]

const education = [
  {
    period: '2023 - 2027',
    degree: 'B.E in Computer Science & Engineering (Data Science)',
    institution: 'Dayananda Sagar College of Engineering',
    description: 'CGPA: 9.2',
  },
]

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="resume"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-20 bg-black"
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          {/* Section header */}
          <div className="space-y-4">
            <p className="text-primary text-sm font-mono tracking-wider uppercase">
              Resume
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Experience & Education</h2>
          </div>

          {/* Download button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-neutral-200 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Download Resume
            </a>
          </motion.div>

          {/* Experience timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-8 border-l-2 border-primary/30"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-primary border-4 border-black" />

                  <div className="space-y-2">
                    <div className="text-sm text-primary font-mono">{exp.period}</div>
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <div className="text-neutral-400">{exp.company}</div>
                    <p className="text-neutral-500 leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education timeline */}
          <div className="space-y-8 pt-8">
            <h3 className="text-2xl font-bold text-white">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-8 border-l-2 border-primary/30"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-primary border-4 border-black" />

                  <div className="space-y-2">
                    <div className="text-sm text-primary font-mono">{edu.period}</div>
                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                    <div className="text-neutral-400">{edu.institution}</div>
                    <p className="text-neutral-500 leading-relaxed">{edu.description}</p>
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
