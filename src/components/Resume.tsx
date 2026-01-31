'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experience = [
  {
    title: 'Research Assistant',
    company: 'Data Science Department',
    location: 'Bangalore, India',
    duration: 'Jan 2025 – Apr 2025',
    description: [
      'Conducted research on machine learning algorithms and data analysis techniques',
      'Collaborated with faculty on academic research projects and publications',
      'Developed and tested ML models for various research applications',
      'Assisted in data collection, preprocessing, and feature engineering tasks',
    ],
  },
]

const education = [
  {
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Computer Science (Data Science)',
    school: 'Dayananda Sagar College of Engineering',
    duration: '2023 – 2027',
    details: 'CGPA: 9.2',
  },
]

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="resume"
      ref={ref}
      className="relative px-6 lg:px-8 py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center space-y-6">
            <p className="text-accent font-mono text-sm tracking-wider">// RESUME</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              Experience & Education
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              My professional journey and academic background.
            </p>
            
            {/* Download Resume Button */}
            <div className="pt-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-semibold rounded-xl 
                         transition-all duration-300 ease-out
                         hover:bg-accent-light hover:shadow-glow
                         active:scale-[0.98] group"
              >
                <svg className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Full Resume
              </a>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-accent-muted rounded-xl">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary">Experience</h3>
              </div>

              {experience.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative bg-surface border border-surface-border rounded-2xl p-6 
                           hover:border-text-muted transition-all duration-200"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-8 w-4 h-4 bg-accent rounded-full border-4 border-background hidden lg:block" />
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-bold text-text-primary">{exp.title}</h4>
                      <p className="text-accent font-medium">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-text-muted">
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {exp.location}
                        </span>
                        <span className="text-surface-border">•</span>
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-text-secondary text-sm">
                          <svg className="w-4 h-4 text-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gradient-mid/20 rounded-xl">
                  <svg className="w-5 h-5 text-gradient-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary">Education</h3>
              </div>

              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-surface border border-surface-border rounded-2xl p-6 
                           hover:border-text-muted transition-all duration-200"
                >
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-bold text-text-primary">{edu.degree}</h4>
                      <p className="text-gradient-mid font-medium">{edu.field}</p>
                      <p className="text-text-secondary mt-1">{edu.school}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-sm text-text-muted">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {edu.duration}
                      </span>
                      
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-success-muted text-success text-sm font-semibold rounded-lg">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        {edu.details}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Currently Learning */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="gradient-border p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent-muted rounded-lg">
                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-text-primary">Currently Exploring</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['AWS Solutions Architect', 'Advanced ML/AI', 'System Design', 'Distributed Systems'].map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-background border border-surface-border rounded-lg text-sm text-text-secondary">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
