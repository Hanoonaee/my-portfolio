import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <h1>Hi, I'm Hanoona</h1>

      <h2>Java Full Stack Developer</h2>

      <p>
        Passionate about building modern web applications and solving
        real-world problems through code.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn primary">
          View Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;