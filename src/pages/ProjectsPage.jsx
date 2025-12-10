import React, { useState } from "react";
import "../App.css";

const Projects = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title:
        "Creation of a Center for the Promotion of Russian and African Cultures",
      bgImage: "/images/project5.jpg",
      shortText:
        "Creation of a center for the promotion of Russian and African cultures, including a library, bookstore, and film library.",
      details: `Goals:
- Create a framework for promoting cultural exchanges between Cameroon and Russia
- Establish a practical mechanism for sharing and mutual enrichment

Planned Activities:
- Collect and use educational materials reflecting cultural richness
- Choose site and construct or rent premises
- Organize operation and management of the Centre
- Mobilize a working team to coordinate activities`,
    },
    {
      title: "Establishment of an Annual Scholarship Selection Committee",
      bgImage: "/images/project6.jpg",
      shortText:
        "Establishment of an annual scholarship selection committee for the 10 regions of the country, considering sociological realities.",
      details: `Goals:
- Establish a fair and balanced system for selecting scholarship recipients
- Minimize abuses in allocation of training opportunities

Planned Activities:
- Identify and disseminate scholarship opportunities offered by Russia
- Study and assess opportunities by region
- Design and disseminate public notices
- Develop Terms of Reference for each award operation
- Plan selection operations to ensure fairness`,
    },
    {
      title:
        "Management of Public Gardens Decorated with Statues of General Abraham Petrovich Hannibal",
      bgImage: "/images/project7.jpg",
      shortText:
        "Management of public gardens decorated with the statues of General Abraham Petrovich Hannibal.",
      details: `Goals:
- Create spaces that express Russian culture on Cameroonian soil
- Give symbolic visibility to the history of General Abraham Hannibal

Planned Activities:
- Negotiate with Cameroonian authorities
- Obtain agreements to facilitate the project
- Raise public awareness
- Select sites and operators
- Design and construct gardens
- Monitor and deliver/inaugurate gardens`,
    },
    {
      title: "Distributions of Literary Works by Russian Authors",
      bgImage: "/images/project8.jpg",
      shortText:
        "Distributions of literary works by Russian authors, especially Alexander Pushkin.",
      details: `Goals:
- Make Russian literary works accessible
- Promote cultural exchange and mutual understanding

Planned Activities:
- Collect and secure literary works
- Supply reading centers
- Organize management of centers
- Conduct conferences and public events`,
    },
  ];

  const toggleDetails = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="projects-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/images/logo.jpg" alt="Foundation Logo" />
        </div>
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li className="dropdown">
            <a href="/projects">Our Projects</a>
            <ul className="dropdown-menu">
              <li>
                <a href="/gallery">Gallery</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/donate" className="donate-btn">
              DONATE
            </a>
          </li>
        </ul>
        <div className="language-switcher">
          <select>
            <option>EN</option>
            <option>FR</option>
            <option>AR</option>
            <option>ZH</option>
            <option>DE</option>
            <option>IT</option>
            <option>PT</option>
            <option>RU</option>
            <option>NL</option>
            <option>ES</option>
          </select>
        </div>
      </nav>

      {/* Project Sections */}
      {projects.map((project, index) => (
        <div key={index}>
          <section
            className="hero"
            style={{
              backgroundImage: `url(${project.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              marginBottom: "1rem",
            }}
          >
            <div className="hero-overlay">
              <h2>{project.title}</h2>
              <p>{project.shortText}</p>
              <button
                className="btn-secondary"
                onClick={() => toggleDetails(index)}
              >
                {visibleIndex === index ? "Hide Details" : "View Details"}
              </button>
            </div>
          </section>

          {visibleIndex === index && (
            <section className="project-detail-card">
              <pre>{project.details}</pre>
            </section>
          )}
        </div>
      ))}

      {/* Footer */}
      <footer
        className="footer"
        style={{
          backgroundImage: "url('/images/footer5.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="footer-container">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>
              Abram Petrovich Hannibal Foundation — building bridges across
              Africa and beyond.
            </p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/news">News</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <p>Email: ap2edaaph@gmail.com</p>
            <p>Phone: +237 675594825 / 699955221</p>
            <p>Address: B.P.10 074, Opposite SCDP Douala</p>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-icons"></div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2025 Abram Petrovich Hannibal Foundation. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
