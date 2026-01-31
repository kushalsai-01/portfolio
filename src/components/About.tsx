'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Golang'],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'Gin', 'REST APIs'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Vector DBs'],
  },
  {
    title: 'AI / ML',
    icon: '🤖',
    skills: ['Scikit-learn', 'RAG Systems', 'LLMs', 'Data Analysis'],
  },
  {
    title: 'DevOps & Tools',
    icon: '🛠️',
    skills: ['Docker', 'Git', 'GitHub Actions', 'Prometheus', 'Grafana'],
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen px-6 lg:px-8 py-24 bg-neutral-950"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          {/* Section header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
              About Me
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Building at the Intersection of AI & Web
            </h2>
          </div>

          {/* Bio Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-2xl p-6"
            >
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-lg font-semibold text-white mb-2">Education</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                B.E. in Computer Science (Data Science) at Dayananda Sagar College of Engineering with <span className="text-white font-medium">9.2 CGPA</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-2xl p-6"
            >
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="text-lg font-semibold text-white mb-2">Research Experience</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Built ML pipelines for predicting student outcomes, improving accuracy by <span className="text-white font-medium">18–25%</span> using advanced modeling techniques.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-2xl p-6"
            >
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-2">What I Build</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Full-stack web apps, AI-powered tools using RAG and LLMs, and production-grade systems with proper monitoring.
              </p>
            </motion.div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
              <p className="text-neutral-500 mt-2">Technologies I work with</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-neutral-900/50 border border-white/5 rounded-xl p-5 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{category.icon}</span>
                    <h4 className="font-semibold text-white">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-white/5 rounded-md text-sm text-neutral-300"
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
