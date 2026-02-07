interface ExperienceItem {
  title: string
  organization: string
  location: string
  duration: string
  description: string[]
}

interface EducationItem {
  degree: string
  field: string
  school: string
  duration: string
  detail: string
}

const experience: ExperienceItem[] = [
  {
    title: 'Research Assistant',
    organization: 'Data Science Department',
    location: 'Bangalore, India',
    duration: 'Jan 2025 – Apr 2025',
    description: [
      'Built and evaluated ML models achieving 18–25% accuracy improvements over baselines',
      'Designed data preprocessing and feature engineering pipelines for research datasets',
      'Collaborated with faculty on machine learning research and experimentation',
      'Documented findings and contributed to reproducible research workflows',
    ],
  },
]

const education: EducationItem[] = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science (Data Science)',
    school: 'Dayananda Sagar College of Engineering',
    duration: '2023 – 2027',
    detail: '9.2 CGPA',
  },
]

const currentlyExploring = [
  'AWS Cloud Architecture',
  'Advanced ML / Deep Learning',
  'System Design',
  'Distributed Systems',
] as const

const LocationIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const CalendarIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 lg:px-8 py-28 overflow-hidden"
      aria-label="Experience and education"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />

      <div className="max-w-5xl mx-auto w-full relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <p className="section-header-label">// EXPERIENCE</p>
          <h2 className="section-header-title">Experience &amp; Education</h2>
          <p className="section-header-desc mx-auto">
            Research, academics, and continuous learning.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-accent-muted rounded-xl">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary">Research</h3>
            </div>

            {experience.map((exp) => (
              <div
                key={exp.title}
                className="bg-surface border border-surface-border rounded-2xl p-6 hover:border-text-muted transition-colors"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-text-primary">{exp.title}</h4>
                    <p className="text-accent font-medium">{exp.organization}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-text-muted">
                      <span className="flex items-center gap-1.5">
                        <LocationIcon />
                        {exp.location}
                      </span>
                      <span className="text-surface-border">·</span>
                      <span className="flex items-center gap-1.5">
                        <CalendarIcon />
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-text-secondary text-sm">
                        <svg className="w-4 h-4 text-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education + Currently Exploring */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-mid/20 rounded-xl">
                <svg className="w-5 h-5 text-gradient-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary">Education</h3>
            </div>

            {education.map((edu) => (
              <div
                key={edu.degree}
                className="bg-surface border border-surface-border rounded-2xl p-6 hover:border-text-muted transition-colors"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-text-primary">{edu.degree}</h4>
                    <p className="text-gradient-mid font-medium">{edu.field}</p>
                    <p className="text-text-secondary mt-1">{edu.school}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-sm text-text-muted">
                      <CalendarIcon />
                      {edu.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-success-muted text-success text-sm font-semibold rounded-lg">
                      {edu.detail}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Currently Exploring */}
            <div className="bg-surface border border-surface-border rounded-2xl p-6 hover:border-text-muted transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent-muted rounded-lg">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-text-primary">Currently Exploring</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentlyExploring.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-background border border-surface-border rounded-lg text-sm text-text-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
