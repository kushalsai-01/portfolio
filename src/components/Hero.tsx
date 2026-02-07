const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
)

const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const TECH_STACK = ['React', 'Node.js', 'Python', 'TypeScript', 'Go', 'LLMs'] as const

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background effects — subtle, non-distracting */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/[0.07] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-mid/[0.06] rounded-full blur-[100px]" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />

      <div className="max-w-4xl mx-auto w-full text-center relative z-10 space-y-8">
        {/* Status badge */}
        <div className="hero-animate hero-delay-1">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-success-muted border border-success/20 rounded-full text-success text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative rounded-full h-2 w-2 bg-success" />
            </span>
            Open to Opportunities
          </span>
        </div>

        {/* Name + headline */}
        <div className="hero-animate hero-delay-2 space-y-5">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-text-primary">Kushal </span>
            <span className="gradient-text">Sai</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium">
            I build software that solves hard problems.
          </p>
        </div>

        {/* Description */}
        <p className="hero-animate hero-delay-3 text-text-muted text-lg max-w-xl mx-auto leading-relaxed">
          Full-stack developer and ML researcher shipping AI applications,
          encrypted systems, and production infrastructure.
        </p>

        {/* CTAs */}
        <div className="hero-animate hero-delay-4 flex flex-wrap justify-center gap-4 pt-2">
          <a
            href="#projects"
            className="px-8 py-3.5 bg-accent text-white font-medium rounded-xl hover:bg-accent-light transition-colors"
          >
            View Projects
          </a>
          <a
            href="https://github.com/kushalsai-01"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-surface border border-surface-border text-text-primary font-medium rounded-xl hover:bg-surface-hover hover:border-text-muted transition-colors flex items-center gap-2"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3.5 text-text-secondary font-medium rounded-xl hover:text-text-primary hover:bg-surface/50 transition-colors flex items-center gap-2"
          >
            <DownloadIcon />
            Resume
          </a>
        </div>

        {/* Tech stack */}
        <div className="hero-animate hero-delay-5 pt-10 flex flex-col items-center gap-3">
          <p className="text-text-muted text-xs font-medium uppercase tracking-widest">
            Building with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-surface/50 border border-surface-border rounded-lg text-xs text-text-muted hover:text-text-secondary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
