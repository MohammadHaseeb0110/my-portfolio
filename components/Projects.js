const projects = [
  {
    number: "01",
    title: "Counter App",
    description:
      "A simple React application using state and button events to control a counter.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://mohammadhaseeb0110.github.io/Counter/",
  },
  {
    number: "02",
    title: "Quotes App",
    description:
      "A React application that fetches and displays dynamic quotes from an API.",
    technologies: ["React", "Fetch API", "useEffect"],
    link: "https://counter2-ten.vercel.app/",
  },
  {
    number: "03",
    title: "Tic Tac Toe",
    description:
      "An interactive game built with React using state and event handling.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://mohammadhaseeb0110.github.io/Tic-Tac-Toe/",
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
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project ↗
              </a>
            </div>

            <div className="project-arrow">↗</div>
          </article>
        ))}
      </div>
    </section>
  );
}