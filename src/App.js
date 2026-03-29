import "./App.css";

const projects = [
  {
    title: "TripNest",
    date: "March 2026",
    description:
      "A full-stack travel planning app that helps users organize trips, explore destinations, and connect to real-world services like Google Maps, Uber, and hotel booking platforms.",
    tech: "React, Node.js, Express, MongoDB",
    image: "/tripnest.png",
    live: "https://tripnest-frontend.onrender.com",
    features: [
      "User authentication with protected routes",
      "Trip planning and management",
      "Dynamic links to maps, rides, and hotel booking sites",
    ],
  },
  {
    title: "Moodly Mood Tracker",
    date: "February 2026",
    description:
      "A group project mood tracking application that allows users to record moods and view entries.",
    tech: "React, JavaScript, CSS, Node.js",
    image: "/moodtracker.png",
    live: "https://moodly-moodtracker.netlify.app/",
    features: [
      "Mood entry tracking",
      "User-friendly interface",
      "Organized data display and interaction",
    ],
  },
  {
    title: "Concentration",
    date: "January 2026",
    description:
      "A simple concentration game built with HTML, CSS, and JavaScript.",
    tech: "HTML, CSS, JavaScript",
    image:
      "https://github.com/user-attachments/assets/58303d4e-63aa-4667-a481-6f450671c803",
    live: "https://jillybean2006.github.io/concentration/",
    features: [
      "Card matching game mechanics",
      "Dynamic card shuffling",
      "Interactive user interface",
    ],
  },
];

export default function App() {
  return (
    <div className="app">
      {/* HERO */}
      <header className="hero">
        <div className="container">
          <p className="section-label">Software Engineer</p>
          <h1>Jillian Kline</h1>
          <p className="intro">
            I’m a former pharmacy technician who transitioned into software
            engineering and graduated from General Assembly’s Software
            Engineering bootcamp. I enjoy building full-stack applications with
            practical features, fun design, and real-world usefulness.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>

            <a
              href="https://github.com/jillybean2006"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="container">
        {/* PROJECTS */}
        <section id="projects" className="projects-section">
          <div className="section-heading">
            <p className="section-label">Featured Work</p>
            <h2>Projects</h2>
            <p className="section-text">
              Here are some of the projects I’ve built while learning and
              growing as a developer.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="project-image"
                />

                <div className="project-content">
                  <div className="project-top">
                    <h3>{project.title}</h3>
                    <p className="project-date">{project.date}</p>
                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <p className="tech">
                    <strong>Tech:</strong> {project.tech}
                  </p>

                  <div className="features">
                    <h4>Key Features</h4>
                    <ul>
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* ONLY LIVE DEMO BUTTON */}
                  <div className="project-links">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn primary"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills-section">
          <div className="section-heading">
            <p className="section-label">Tech Stack</p>
            <h2>Skills</h2>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>Languages</h3>
              <p>JavaScript, HTML, CSS, Python, SQL</p>
            </div>

            <div className="skill-card">
              <h3>Frameworks & Libraries</h3>
              <p>React, Node.js, Express</p>
            </div>

            <div className="skill-card">
              <h3>Databases</h3>
              <p>MongoDB, PostgreSQL</p>
            </div>

            <div className="skill-card">
              <h3>Tools</h3>
              <p>Git, GitHub, Postman, Render</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section">
          <div className="section-heading">
            <p className="section-label">Get In Touch</p>
            <h2>Contact</h2>
          </div>

          <div className="contact-card">
            <p>
              <strong>Name:</strong> Jillian Kline
            </p>

            <p>
              <strong>Email:</strong> jilliankline5@gmail.com
            </p>

            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/jillybean2006"
                target="_blank"
                rel="noreferrer"
              >
                github.com/jillybean2006
              </a>
            </p>

            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/jillian-kline-a788253ba/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/jillian-kline-a788253ba/
              </a>
            </p>

            <p>
              <strong>Resume:</strong>{" "}
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                View Resume
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}