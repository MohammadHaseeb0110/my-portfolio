export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">

        <p className="hero-name">MOHAMMAD HASEEB</p>

        <h1>
          Building ideas
          <br />
          <span>into the web.</span>
        </h1>

        <p className="hero-text">
          I'm a frontend developer who enjoys building beautiful,
          responsive and interactive websites using React and Next.js.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            Witness my Undertaking ↗
          </a>

          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-card">
        <div className="profile-frame">
          <img
            src="/me.png"
            alt="Mohammad Haseeb"
          />

          <div className="profile-label">
            <span>01</span>
            WEB DEVELOPER
          </div>
        </div>
      </div>
    </section>
  );
}