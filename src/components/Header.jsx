export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav" aria-label="Primary">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
      </nav>
      <div className="header-intro">
        <h1 className="header-name">Samuel Kagimbi</h1>
        <p className="header-title">Software Developer</p>
        <p className="header-tagline">
          C++ game dev &bull; Python &amp; Java Spring web apps
        </p>
        <div className="header-links">
          <a href="mailto:shearstress021@gmail.com">Email</a>
          <a href="https://github.com/ShearStress021" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </header>
  )
}
