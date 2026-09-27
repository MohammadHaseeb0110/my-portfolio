export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-heading">
        <p className="eyebrow">01 — ABOUT</p>
        <h2>Apparently, This Section Is Necessary</h2>
      </div>

      <div className="about-grid">
        <div className="about-intro">
          <p>
            I'm a teacher and web developer who enjoys building things,
            figuring things out, and occasionally wondering why I decided to
            figure them out in the first place.
          </p>

          <p>
            I have a habit of going deeper than necessary. A simple question
            can turn into a surprisingly detailed investigation, whether it's
            about technology, the universe, or something completely random.
          </p>
        </div>

        <div className="about-details">
          <div className="detail-card">
            <span>01</span>
            <h3>Outside the Code</h3>
            <p>
              Games, anime, science and random rabbit holes usually take care
              of whatever free time survives the day.
            </p>
          </div>

          <div className="detail-card">
            <span>02</span>
            <h3>Curiosity Included</h3>
            <p>
              I like understanding things properly, even when “properly”
              turns out to be considerably more complicated than expected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}