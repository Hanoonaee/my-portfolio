import "./Skills.css";

function Skills() {
  const skillData = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"]
    },
    {
      title: "Backend",
      skills: ["Java", "JDBC", "OOP Concepts"]
    },
    {
      title: "Database",
      skills: ["SQL", "MySQL"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Eclipse"]
    }
  ];

  return (
    <section className="skills" id="skills">

      <p className="section-tag">Skills</p>
      <h2>Technical Stack</h2>

      <div className="skills-grid">
        {skillData.map((group, index) => (
          <div className="skill-card" key={index}>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill, i) => (
                <span className="skill-pill" key={i}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;