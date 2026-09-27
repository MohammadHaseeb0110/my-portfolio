const skills = [
  {
    name: "HTML",
    level: "Web Structure",
  },
  {
    name: "CSS",
    level: "Styling & Responsive Design",
  },
  {
    name: "JavaScript",
    level: "Programming & Interaction",
  },
  {
    name: "React",
    level: "Components & State",
  },
  {
    name: "Next.js",
    level: "Modern Web Development",
  },
  {
    name: "Git & GitHub",
    level: "Version Control",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading">
        <p className="eyebrow">02 — SKILLS</p>
        <h2>My tech stack.</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={skill.name}>
            <span className="skill-number">
              0{index + 1}
            </span>

            <h3>{skill.name}</h3>

            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}