interface Highlight {
  label: string
  value: string
  subtext: string
}

const highlights: Highlight[] = [
  {
    label: 'Education',
    value: 'B.E. Computer Science',
    subtext: 'DSCE, Bangalore — 9.2 CGPA',
  },
  {
    label: 'Research',
    value: 'ML Pipelines',
    subtext: '18–25% accuracy improvement',
  },
  {
    label: 'Focus',
    value: 'AI + Full Stack',
    subtext: 'Shipping production-grade systems',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 lg:px-8 py-28 overflow-hidden"
      aria-label="About me"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />

      <div className="max-w-5xl mx-auto w-full relative z-10 space-y-16">
        {/* Section header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="section-header-label">// ABOUT</p>
          <h2 className="section-header-title">
            Building at the intersection of{' '}
            <span className="gradient-text">AI and engineering</span>
          </h2>
        </div>

        {/* Narrative */}
        <div className="max-w-3xl mx-auto space-y-6 text-text-secondary text-lg leading-relaxed">
          <p>
            I&apos;m a Computer Science student at Dayananda Sagar College of Engineering
            with a 9.2 CGPA and hands-on research experience in machine learning. I don&apos;t
            just write code — I think in systems.
          </p>
          <p>
            My work spans three layers: building <span className="text-text-primary font-medium">AI applications</span> (RAG
            pipelines, ML models), engineering <span className="text-text-primary font-medium">full-stack platforms</span> (React,
            Node.js, Go), and designing <span className="text-text-primary font-medium">reliable infrastructure</span> (observability,
            encrypted storage, containerized deployments).
          </p>
          <p>
            I&apos;m drawn to hard problems — the kind where you need to understand both
            the theory and the implementation to ship something that actually works.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="group bg-surface border border-surface-border rounded-xl p-6
                         hover:border-text-muted transition-colors"
            >
              <div className="space-y-3">
                <p className="text-text-muted text-xs font-medium uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="text-xl font-bold text-text-primary">{item.value}</p>
                <p className="text-text-secondary text-sm">{item.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
