function Skills() {
  const skills = ["Java", "React", "SQL", "HTML", "CSS", "JavaScript"];

  return (
    <section id="skills" style={{ padding: "80px 60px" }}>
      <h2>Skills</h2>

      <div style={{
        display: "flex",
        gap: "15px",
        flexWrap: "wrap",
        marginTop: "20px"
      }}>
        {skills.map((skill, index) => (
          <div key={index}
            style={{
              padding: "12px 20px",
              background: "#1e293b",
              borderRadius: "8px"
            }}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;