import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-name">your.name</h1>
        <p className="hero-title">Backend Engineer & ML/AI Developer</p>
        <div className="hero-links">
          <a href="#about" className="hero-link">About</a>
          <a href="#projects" className="hero-link">Projects</a>
          <a href="#contact" className="hero-link">Contact</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
