import { useEffect, useRef } from "react";

const skillGroups = [
  {
    title: "Oracle applications",
    skills: [
      "Oracle E-Business Suite",
      "R12.2",
      "ADOP patching",
      "APEX",
      "WebLogic",
      "OHS",
    ],
  },
  {
    title: "Database",
    skills: [
      "Oracle Database",
      "Opatch",
      "SQL & PL/SQL",
      "PostgreSQL",
      "Performance tuning",
      "RMAN",
    ],
  },
  {
    title: "Operations",
    skills: [
      "Linux",
      "Shell scripting",
      "Production support",
      "Monitoring",
      "Backup & recovery",
    ],
  },
  {
    title: "Cloud & tools",
    skills: ["AWS", "Git", "GitHub", "Apache", "Oracle GoldenGate"],
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" />
    </svg>
  );
}

function HeroArtwork() {
  return (
    <div
      className="hands-scene"
      role="img"
      aria-label="A human hand and a robotic hand reaching toward one another"
    >
      <img
        className="hand-asset human-hand"
        src="/human.png"
        alt=""
        aria-hidden="true"
        width="234"
        height="290"
      />
      <img
        className="hand-asset robot-hand"
        src="/robot.png"
        alt=""
        aria-hidden="true"
        width="297"
        height="290"
      />
      <div className="hands-connection" aria-hidden="true">
        <span className="connection-ring" />
        <span className="connection-spark">
          <svg viewBox="0 0 32 32" fill="none">
            <path
              d="M16 2.5 18.4 13.6 29.5 16l-11.1 2.4L16 29.5l-2.4-11.1L2.5 16l11.1-2.4L16 2.5Z"
              fill="currentColor"
            />
            <circle cx="16" cy="16" r="2.2" fill="#FFF5E9" />
          </svg>
        </span>
      </div>
      <span className="hands-orbit hands-orbit-one" aria-hidden="true" />
      <span className="hands-orbit hands-orbit-two" aria-hidden="true" />
    </div>
  );
}

function App() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const visual = hero?.querySelector(".hero-visual");
    const scene = hero?.querySelector(".hands-scene");
    if (!hero || !visual || !scene) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      hero.classList.add("is-visible");
      return;
    }

    let frame = 0;
    let isNearViewport = false;

    const updateScrollMotion = () => {
      frame = 0;
      if (!isNearViewport) return;

      const bounds = visual.getBoundingClientRect();
      const travelDistance = window.innerHeight + bounds.height;
      const progress = Math.max(
        0,
        Math.min(1, (window.innerHeight - bounds.top) / travelDistance),
      );
      const maxApproach = Math.min(170, Math.max(55, window.innerWidth * 0.12));

      const approach = maxApproach * progress;
      scene.style.setProperty("--human-approach", `${approach.toFixed(2)}px`);
      scene.style.setProperty(
        "--robot-approach",
        `${(-approach).toFixed(2)}px`,
      );
      scene.style.setProperty(
        "--connection-glow",
        (0.12 + progress * 0.38).toFixed(2),
      );
    };

    const scheduleScrollMotion = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrollMotion);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isNearViewport = entry.isIntersecting;
        hero.classList.toggle("is-visible", entry.isIntersecting);
        if (isNearViewport) scheduleScrollMotion();
      },
      { threshold: 0.01 },
    );

    observer.observe(hero);
    window.addEventListener("scroll", scheduleScrollMotion, { passive: true });
    window.addEventListener("resize", scheduleScrollMotion);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleScrollMotion);
      window.removeEventListener("resize", scheduleScrollMotion);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Mohamed Gani home">
          MG<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Project</a>
          <a href="#skills">Skills</a>
        </nav>
        <a className="header-contact" href="mailto:mohamedgani21@outlook.com">
          Send Mail <ArrowIcon />
        </a>
      </header>

      <main id="main">
        <section
          className="hero page-width"
          id="home"
          aria-labelledby="hero-title"
          ref={heroRef}
        >
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> Database Migration Engineer
            </p>
            <h1 id="hero-title">
              Keeping critical systems <span>reliable.</span>
            </h1>
            <p className="hero-intro">
              I&apos;m Mohamed Gani. I work with Oracle applications, databases,
              and Linux systems to help keep essential business services running
              smoothly.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">
                Explore my work <ArrowIcon />
              </a>
              <a className="text-link" href="mailto:mohamedgani21@outlook.com">
                Get in touch
              </a>
            </div>
            <p className="hero-note">
              Oracle E-Business Suite · Database operations · Linux
            </p>
          </div>

          <div className="hero-visual">
            <HeroArtwork />
          </div>
          <a className="scroll-cue" href="#about">
            Scroll to explore <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section className="section page-width about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / About</p>
            <h2>Reliable systems start with thoughtful operations.</h2>
          </div>
          <div className="about-copy">
            <p>
              I&apos;m an Oracle Apps DBA at Accenture, focused on enterprise
              application management, database administration, and system
              reliability. I enjoy solving operational problems, improving
              performance, and making routine work more efficient.
            </p>
            <p>
              My day-to-day interests include Oracle E-Business Suite, SQL and
              PL/SQL, Linux administration, patching, monitoring, and
              automation. I&apos;m continually learning about cloud platforms
              and the tools that help teams run dependable services.
            </p>
            <a className="text-link" href="mailto:mohamedgani21@outlook.com">
              Email me <ArrowIcon />
            </a>
          </div>
        </section>

        <section
          className="section page-width experience-section"
          id="experience"
        >
          <div className="section-heading">
            <p className="eyebrow">02 / Experience</p>
            <h2>Enterprise operations, with reliability in mind.</h2>
          </div>
          <article className="experience-card">
            <div className="experience-topline">
              <div>
                <p className="card-kicker">Current role</p>
                <h3>Oracle Apps DBA</h3>
              </div>
              <span className="company">Accenture</span>
            </div>
            <p className="experience-description">
              Supporting enterprise applications and databases through careful
              administration, troubleshooting, and maintenance.
            </p>
            <ul className="focus-list">
              <li>
                Oracle E-Business Suite administration and application-tier
                support
              </li>
              <li>
                Database health, performance analysis, and SQL/PL/SQL tuning
              </li>
              <li>
                Linux operations, shell scripting, patching, and monitoring
              </li>
            </ul>
          </article>
        </section>

        <section className="section page-width projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">03 / Project</p>
            <h2>A practical foundation in Linux web hosting.</h2>
          </div>
          <article className="project-card">
            <div className="project-number" aria-hidden="true">
              01
            </div>
            <div className="project-content">
              <p className="card-kicker">Academic project · January 2022</p>
              <h3>Hosting a webpage on Ubuntu with Apache</h3>
              <p>
                Set up an Apache2 web server on Ubuntu and configured it to
                serve a webpage on a local network. The work covered
                installation, file permissions, firewall settings, and testing
                access from other devices.
              </p>
              <ul className="tag-list" aria-label="Technologies used">
                <li>Ubuntu</li>
                <li>Apache2</li>
                <li>Linux</li>
                <li>Networking</li>
              </ul>
            </div>
            <div className="project-mark" aria-hidden="true">
              <span>&lt;/&gt;</span>
            </div>
          </article>
        </section>

        <section className="section page-width skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">04 / Skills</p>
            <h2>Tools I use to keep things running.</h2>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="tag-list">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section">
          <div className="page-width contact-inner">
            <div>
              <p className="eyebrow">Have a role or project in mind?</p>
              <h2>Let&apos;s make systems work better.</h2>
            </div>
            <a
              className="button button-light"
              href="mailto:mohamedgani21@outlook.com"
            >
              Contact me <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <a className="wordmark" href="#home" aria-label="Back to top">
          MG<span>.</span>
        </a>
        <p>
          Designed and built by Mohamed Gani with vibe coding ·{" "}
          {new Date().getFullYear()}
        </p>
        <a href="/Mohamed_Gani_Apps_DBA.docx" download>
          Download resume
        </a>
        <a href="mailto:mohamedgani21@outlook.com">mohamedgani21@outlook.com</a>
      </footer>
    </>
  );
}

export default App;
