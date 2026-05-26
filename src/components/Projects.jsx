const projects = [
  {
    title: 'C++ Game Engine Prototype',
    tech: 'C++, SDL2, OpenGL',
    desc: 'Experimental 2D game engine with custom entity-component system, sprite batching, and basic physics simulation.',
  },
  {
    title: 'Inventory Management API',
    tech: 'Java, Spring Boot, PostgreSQL',
    desc: 'RESTful backend for inventory tracking with JWT auth, pagination, and Swagger-documented endpoints.',
  },
  {
    title: 'Data Pipeline Dashboard',
    tech: 'Python, FastAPI, React',
    desc: 'Web dashboard for monitoring ETL pipeline health, with real-time metrics and alerting.',
  },
  {
    title: 'Portfolio Site',
    tech: 'React, Vite, CSS',
    desc: 'Responsive single-page portfolio with dark mode, print styles, and semantic HTML.',
  },
]

function ProjectMedia({ src, alt }) {
  if (!src) return null
  const isVideo = /\.(mp4|webm|mov)$/i.test(src)
  if (isVideo) {
    return (
      <video
        className="project-media"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        loading="lazy"
        aria-label={alt}
      />
    )
  }
  return <img className="project-media" src={src} alt={alt} loading="lazy" />
}

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.title} className="project-card">
            <ProjectMedia src={p.media} alt={`${p.title} demo`} />
            <h3>{p.title}</h3>
            <p className="project-tech">{p.tech}</p>
            <p>{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
