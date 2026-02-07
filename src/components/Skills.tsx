interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'Golang'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Gin', 'REST APIs'],
  },
  {
    title: 'Data & ML',
    skills: ['Scikit-learn', 'RAG Systems', 'LLMs', 'Vector DBs', 'Data Analysis'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Infrastructure',
    skills: ['Docker', 'Git', 'GitHub Actions', 'Prometheus', 'Grafana'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative px-6 lg:px-8 py-28 overflow-hidden"
      aria-label="Technical skills"
    >
      <div className="absolute inset-0 bg-background" />

      <div className="max-w-5xl mx-auto w-full relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <p className="section-header-label">// SKILLS</p>
          <h2 className="section-header-title">Technical Stack</h2>
          <p className="section-header-desc mx-auto">
            Tools and technologies I use to build production software.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group bg-surface/50 border border-surface-border rounded-xl p-5
                         hover:bg-surface hover:border-text-muted transition-colors"
            >
              <h3 className="font-semibold text-text-primary text-sm mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-background rounded-md text-xs text-text-secondary
                               border border-surface-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
