import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Figma Frontpage",
      tech: "HTML • CSS • JavaScript",
      desc: "Responsive landing page built by converting a Figma design into a clean and pixel-perfect website.",
      live: "https://projectone-figmafrontpage.netlify.app",
      github: "https://github.com/Hanoonaee/project-one-figma-first-page"
    },
    {
      title: "Real Estate Homepage",
      tech: "HTML • CSS • JavaScript",
      desc: "Modern real estate homepage with responsive layout, clean sections, and mobile-friendly design.",
      live: "https://projecttwo-frontend.netlify.app",
      github: "https://github.com/Hanoonaee/project-two--real-estate-dream-page"
    }
  ];

  return (
    <section className="projects" id="projects">

      <p className="section-tag">My Work</p>
      <h2>Featured Projects</h2>

      <div className="projects-grid">

        {projects.map((item, index) => (
          <div className="project-card" key={index}>

            <h3>{item.title}</h3>

            <p className="project-tech">{item.tech}</p>

            <p className="project-desc">{item.desc}</p>

            <div className="project-links">

              <a
                href={item.live}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Live Demo →
              </a>

              <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
                className="project-link secondary-link"
              >
                GitHub →
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;