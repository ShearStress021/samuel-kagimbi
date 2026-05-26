const skillGroups = [
  {
    category: 'Languages',
    items: ['C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'Game Development',
    items: ['Unreal Engine', 'SDL2', 'OpenGL', 'Godot'],
  },
  {
    category: 'Web Backend',
    items: ['Spring Boot', 'Django', 'FastAPI', 'REST APIs'],
  },
  {
    category: 'Frontend & Tools',
    items: ['React', 'HTML/CSS', 'Docker', 'Git', 'Linux'],
  },
]

export default function Skills() {
  return (
    <section id="skills" aria-label="Skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3>{group.category}</h3>
            <ul className="skill-tags">
              {group.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
