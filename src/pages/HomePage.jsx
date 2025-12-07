import React, { useEffect, useState } from "react";
import "../App.css";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Ensure Google Translate dropdown is ready
  useEffect(() => {
    // function to remove unwanted Google elements (will retry until gone)
    const cleanup = () => {
      // remove any visible google logo links / gadget wrappers
      document
        .querySelectorAll(
          ".goog-logo-link, .goog-te-gadget, .goog-te-gadget-icon"
        )
        .forEach((el) => {
          try {
            el.remove();
          } catch (err) {}
        });

      // hide / remove the google menu iframe(s) that sometimes persist
      document
        .querySelectorAll(
          "iframe.goog-te-menu-frame, iframe.goog-te-banner-frame"
        )
        .forEach((ifr) => {
          // remove the iframe element from DOM
          try {
            ifr.style.display = "none";
            ifr.remove();
          } catch (err) {}
        });

      // sometimes google adds an inline div with class .goog-te-gadget -> ensure it's hidden
      const g = document.querySelector(
        "#google_translate_element .goog-te-gadget"
      );
      if (g) {
        try {
          g.style.display = "none";
        } catch (err) {}
      }
    };

    // run cleanup periodically for a short window while GT loads
    let tries = 0;
    const interval = setInterval(() => {
      cleanup();
      tries++;
      if (tries > 25) clearInterval(interval); // stop after ~5 seconds
    }, 200);

    // also run once after a short delay
    const timeout = setTimeout(cleanup, 800);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);
  // Language switcher function

  return (
    <div className="home-page">
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
          <li>
            <a href="/projects">Our Projects</a>
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

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay">
          <h1>WELCOME TO</h1>
          <h2>Abram Petrovich Hannibal Foundation</h2>
          <p>
            Honoring the memory of Abram Petrovich Hannibal, “From a slave to a
            General”
          </p>
          <button
            className="btn-primary"
            onClick={() => (window.location.href = "/donate")}
          >
            DONATE
          </button>
        </div>
      </section>

      {/* News Section */}
      <section className="news">
        <h2>NEWS</h2>
        <div className="news-cards">
          <div className="news-card">
            <h3>Major Media Event</h3>
            <p>
              International Economic Forum of Saint Petersburg (SPIEF’25), June
              18-21, 2025
            </p>
          </div>
          <div className="news-card">
            <h3>Major Media Event</h3>
            <p>Press conference on SPIEF’25 – June 11, 2025 in Yaoundé</p>
          </div>
          <div className="news-card">
            <h3>Major Media Event</h3>
            <p>Opportunities for study and work in Russia</p>
          </div>
        </div>
      </section>

      {/* Film Project Section */}
      <section className="film-project">
        <h2>
          Participate in the documentary project:{" "}
          <span>“ABRAHAM P. HANIBAL, From Chains to the Palace”</span>
        </h2>
        <button
          className="btn-primary"
          onClick={() => (window.location.href = "/donate")}
        >
          DONATE
        </button>
      </section>

      {/* Biography Section */}
      <section
        className="bio"
        style={{
          backgroundImage: "url('/images/-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bio-overlay">
          <p>
            Abraham Hannibal, or Abram Petrovich Gannibal, was born in 1696 and
            died on May 14, 1781. He is the maternal great-grandfather of the
            Russian poet Alexander Pushkin. His life is a true adventure story —
            kidnapped from Logone in present-day Cameroon in 1703, he became a
            page of Ottoman Sultan Ahmed III in Constantinople, and was later
            brought to Russia to serve at the court of Tsar Peter the Great.
          </p>
          <button
            className="btn-secondary"
            onClick={() => (window.location.href = "/biography")}
          >
            Read more
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>OUR PROJECTS</h2>
        <div className="project-grid">
          <div className="project-card">
            <img src="/images/project1.jpg" alt="Multi-sports centers" />
            <p>Multi-sports centers</p>
          </div>
          <div className="project-card">
            <img src="/images/project 2.jpg" alt="Multimedia campaigns" />
            <p>Multimedia campaigns</p>
          </div>
          <div className="project-card">
            <img src="/images/project3.jpg" alt="Documentary film" />
            <p>Documentary film</p>
          </div>
          <div className="project-card">
            <img
              src="/images/project4.jpg"
              alt="Agro-sylvo-pastoral training centers"
            />
            <p>Agro-sylvo-pastoral training centers</p>
          </div>
        </div>
      </section>

      {/* Acknowledgements Section */}
      <section className="acknowledgements">
        <h2>ACKNOWLEDGEMENTS</h2>
        <p>Our sincere thanks to all those who support us in any way.</p>
        <div className="ack-photos">
          <img src="/images/Minrex.jpeg" alt="Supporter 1" />
          <img src="/images/mincult.jpeg" alt="Supporter 2" />
          <img src="/images/official.jpeg" alt="Supporter 3" />
          <img src="/images/port.jpeg" alt="Supporter 4" />
        </div>
      </section>

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
            <p>Email: contact@fondationaph.com</p>
            <p>Phone: +237 675594825 / 699955221</p>
            <p>Address: B.P.10 074, Opposite SCDP Douala</p>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-icons">{/* social icons here */}</div>
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

export default HomePage;
