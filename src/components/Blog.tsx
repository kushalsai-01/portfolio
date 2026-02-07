'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const blogPosts = [
  {
    title: 'Building Distributed Systems: Lessons from Production',
    date: 'Jan 2026',
    excerpt:
      'Key insights from building and scaling distributed systems in production. From consensus algorithms to dealing with network partitions.',
    readTime: '8 min read',
    tags: ['Distributed Systems', 'Backend'],
  },
  {
    title: 'Why Golang is Perfect for Backend Infrastructure',
    date: 'Dec 2025',
    excerpt:
      'Exploring Go\'s concurrency model, performance characteristics, and why it excels at building robust backend services and tools.',
    readTime: '6 min read',
    tags: ['Golang', 'Performance'],
  },
  {
    title: 'PostgreSQL Performance Optimization at Scale',
    date: 'Nov 2025',
    excerpt:
      'Deep dive into query optimization, indexing strategies, and connection pooling for high-throughput database workloads.',
    readTime: '10 min read',
    tags: ['PostgreSQL', 'Databases'],
  },
]

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="blog"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-20 bg-neutral-950"
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
              Writing
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Technical Blog</h2>
            <p className="text-neutral-500 max-w-2xl">
              Thoughts on backend engineering, distributed systems, and building
              scalable infrastructure.
            </p>
          </div>

          {/* Blog posts list */}
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group border border-white/10 rounded-lg p-6 hover:border-primary/50 hover:bg-black transition-all duration-200 cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Post metadata */}
                  <div className="flex items-center gap-4 text-sm text-neutral-500">
                    <span className="font-mono">{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Post title */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  {/* Post excerpt */}
                  <p className="text-neutral-400 leading-relaxed">{post.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono bg-black border border-white/10 rounded-md text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more link */}
                  <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                    <span className="text-sm font-medium">Read more</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View all posts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center pt-8"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
            >
              <span>View all posts</span>
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
