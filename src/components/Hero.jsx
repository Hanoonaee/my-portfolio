import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <p className="hero-small">Hello, I'm</p>

        <h1>Hanoona E</h1>

        <h2>Building Responsive Web Apps with React & Java</h2>

        <p className="hero-text">
          BTech graduate focused on Java Full Stack Development, building
          responsive web applications, and solving real-world problems through clean code.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>

          <a href="#contact" className="btn secondary">
            Let's Connect
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;