'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experience = [
  {
    period: 'Jan 2025 – Apr 2025',
    role: 'Research Assistant',
    company: 'Data Science Department',
    location: 'Bangalore, India',
    highlights: [
      'Analyzed multi-source academic, behavioral, and demographic datasets (10K+ records) to predict student performance and career outcomes',
      'Built end-to-end ML pipelines (data cleaning, feature engineering, modeling) using Logistic Regression, Random Forest, and Gradient Boosting',
      'Improved baseline accuracy by 18–25% through systematic model evaluation and hyperparameter tuning',
      'Used cross-validation and metrics (ROC-AUC, F1-score) to ensure robust and reproducible research results',
    ],
  },
]

const education = [
  {
    period: '2023 - 2027',
    degree: 'B.E. in Computer Science & Engineering (Data Science)',
    institution: 'Dayananda Sagar College of Engineering',
    location: 'Bangalore, India',
    highlights: ['CGPA: 9.2 / 10', 'Specialization in Data Science'],
  },
]

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="resume"
      ref={ref}
      className="min-h-screen px-6 lg:px-8 py-24 bg-black"
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          {/* Section header */}
          <div className="text-center space-y-4">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">
              Background
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Experience & Education</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              My academic journey and professional experience in tech.
            </p>
          </div>

          {/* Download button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-neutral-100 transition-all duration-200 shadow-lg shadow-white/10"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Full Resume
            </a>
          </motion.div>

          {/* Experience Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 rounded-2xl p-6 lg:p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                      <p className="text-neutral-500 text-sm">{exp.location}</p>
                    </div>
                    <span className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-neutral-300">
                        <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 rounded-2xl p-6 lg:p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      <p className="text-purple-400 font-medium">{edu.institution}</p>
                      <p className="text-neutral-500 text-sm">{edu.location}</p>
                    </div>
                    <span className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {edu.highlights.map((highlight, i) => (
                      <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-neutral-300 text-sm font-medium">
                        {highlight}
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
