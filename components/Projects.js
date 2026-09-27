const projects = [
  {
    number: "01",
    title: "Counter App",
    description:
      "A React application that uses state and buttons to create an interactive counter.",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    number: "02",
    title: "Quotes App",
    description:
      "A React application that fetches quotes from an API and displays them on the page.",
    technologies: ["React", "Fetch API", "useEffect"],
  },
  {
    number: "03",
    title: "Tic Tac Toe",
    description:
      "An interactive game built using React components, state and event handling.",
    technologies: ["React", "JavaScript", "CSS"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <p className="eyebrow">03 — PROJECTS</p>
        <h2>Things I've built.</h2>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-number">
              {project.number}
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tags">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-arrow">↗</div>
          </article>
        ))}
      </div>
    </section>
  );
}