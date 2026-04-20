import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <h4 className="hero-small">Hey, I'm</h4>

        <h1>Hanoona</h1>

        <h4>Developer</h4>

        <p className="hero-text">
          Building modern web applications with clean design,
          strong backend logic, and real-world impact.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>

          <a href="#contact" className="btn secondary">
            Let's Talk
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;