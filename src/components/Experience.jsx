const jobs = [
  {
    company: 'Freelance / Personal Projects',
    role: 'Software Developer',
    period: '2022 – Present',
    highlights: [
      'Built C++ game prototypes with custom rendering and physics logic',
      'Developed RESTful web APIs using Spring Boot and Django',
      'Designed and deployed Python data-processing pipelines',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" aria-label="Experience">
      <h2>Experience</h2>
      <div className="timeline">
        {jobs.map((job) => (
          <article key={job.company} className="timeline-entry">
            <div className="timeline-meta">
              <time>{job.period}</time>
            </div>
            <div className="timeline-body">
              <h3>{job.role}</h3>
              <p className="timeline-company">{job.company}</p>
              <ul>
                {job.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
