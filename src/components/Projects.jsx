function Projects() {
  const projects = [
    {
      title: "Job Portal System",
      desc: "Full stack platform for job seekers and recruiters."
    },
    {
      title: "Expense Tracker",
      desc: "Track income, expenses and monthly reports."
    },
    {
      title: "Real Estate Website",
      desc: "Responsive modern real estate landing page."
    }
  ];

  return (
    <section id="projects" style={{ padding: "80px 60px" }}>
      <h2>Projects</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "25px"
        }}
      >
        {projects.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "12px"
            }}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;