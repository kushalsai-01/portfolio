interface Project {
  title: string
  tagline: string
  problem: string
  solution: string
  highlights: string[]
  tech: string[]
  github: string
  featured: boolean
}

const projects: Project[] = [
  {
    title: 'DocSense',
    tagline: 'RAG-Powered Document Intelligence',
    problem:
      'Traditional keyword search fails when users need semantic understanding of large document collections. Standard LLM responses hallucinate without grounded context.',
    solution:
      'Built a Retrieval-Augmented Generation system that ingests documents, creates vector embeddings, and enables natural language Q&A with source-cited, hallucination-resistant responses.',
    highlights: [
      'Semantic search across 1000+ documents with vector indexing',
      'Grounded answers with source citations and confidence scoring',
      'Go backend for performance-critical retrieval pipeline',
    ],
    tech: ['Golang', 'React', 'Vector Databases', 'LLMs', 'RAG'],
    github: 'https://github.com/kushalsai-01/DocSense',
    featured: true,
  },
  {
    title: 'Observability Platform',
    tagline: 'Production-Grade Monitoring Stack',
    problem:
      'Distributed services need comprehensive visibility into performance, errors, and system health — most teams lack this from day one.',
    solution:
      'Designed a containerized observability stack with metrics collection, log aggregation, and intelligent alerting for Node.js microservices.',
    highlights: [
      'Pre-configured Grafana dashboards with real-time metrics',
      'Automated alerting via Alertmanager with escalation routing',
      'Docker Compose orchestration for one-command deployment',
    ],
    tech: ['Node.js', 'Prometheus', 'Grafana', 'Docker', 'Alertmanager'],
    github: 'https://github.com/kushalsai-01',
    featured: true,
  },
  {
    title: 'Secret Vault',
    tagline: 'Zero-Knowledge Encrypted Storage',
    problem:
      'Cloud storage services have server-side access to user data. A single breach exposes everything.',
    solution:
      'Built a zero-knowledge vault using client-side AES-256-GCM encryption. The server never sees plaintext data, and encryption keys never leave the browser.',
    highlights: [
      'End-to-end encryption with Web Crypto API',
      'Zero-knowledge architecture — even a DB breach reveals nothing',
      'PBKDF2 key derivation with 100k iterations',
    ],
    tech: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Web Crypto API'],
    github: 'https://github.com/kushalsai-01',
    featured: false,
  },
  {
    title: 'FinTrack',
    tagline: 'ML-Powered Personal Finance',
    problem:
      'People struggle to understand spending patterns and predict future expenses from raw transaction data.',
    solution:
      'Developed a finance platform that analyzes spending behavior using time-series forecasting and delivers personalized budgeting insights.',
    highlights: [
      'ML-based spending pattern detection and categorization',
      'Time-series forecasting for budget predictions',
      'Personalized financial recommendations engine',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Scikit-learn'],
    github: 'https://github.com/kushalsai-01',
    featured: false,
  },
]

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
)

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-4 h-4 text-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-surface border border-surface-border rounded-2xl p-8 lg:p-10 hover:border-text-muted transition-colors">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left — Project Info */}
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
              <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                Problem
              </h4>
              <p className="text-text-secondary">{project.problem}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                Solution
              </h4>
              <p className="text-text-primary">{project.solution}</p>
            </div>
          </div>
        </div>

        {/* Right — Highlights & Tech */}
        <div className="space-y-8">
          <div>
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
              Key Results
            </h4>
            <ul className="space-y-3">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-sm font-medium bg-background border border-surface-border rounded-lg text-text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface-hover border border-surface-border
                       text-text-primary font-semibold rounded-xl hover:bg-text-primary hover:text-background
                       transition-colors group/btn"
          >
            <GitHubIcon />
            View on GitHub
            <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-surface/50 border border-surface-border rounded-xl p-6
                 hover:bg-surface hover:border-text-muted transition-colors block"
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-text-muted text-sm mt-1">{project.tagline}</p>
          </div>
          <GitHubIcon />
        </div>

        <p className="text-text-secondary text-sm leading-relaxed">
          {project.solution}
        </p>

        <ul className="space-y-2">
          {project.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 text-text-muted text-sm">
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs font-medium bg-background rounded-md text-text-muted border border-surface-border"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const other = projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      className="relative px-6 lg:px-8 py-28 overflow-hidden"
      aria-label="Projects"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background-secondary via-background to-background-secondary" />

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="section-header-label">// PROJECTS</p>
          <h2 className="section-header-title">What I&apos;ve Built</h2>
          <p className="section-header-desc mx-auto">
            From AI-powered tools to production-grade infrastructure —
            each project solves a real problem with real engineering.
          </p>
        </div>

        {/* Featured */}
        <div className="space-y-8">
          {featured.map((project) => (
            <FeaturedProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Other Projects */}
        <div className="space-y-8">
          <h3 className="text-xl font-bold text-text-primary">More Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {other.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        {/* View all */}
        <div className="text-center pt-4">
          <a
            href="https://github.com/kushalsai-01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent font-medium transition-colors group"
          >
            View all projects on GitHub
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
