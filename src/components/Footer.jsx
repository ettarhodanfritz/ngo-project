import React from "react";
import "./App.css";
import logo from "./assets/logo.png"; // replace with your logo
import footerBg from "./assets/footer-bg.jpg"; // replace with footer background

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Foundation Logo" />
        </div>
        <ul className="nav-links">
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
              FAIRE UN DON
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>WELCOME TO</h1>
          <h2>Abram Petrovich Hannibal Foundation</h2>
          <p>
            Honoring the memory of Abram Petrovich Hannibal, “From a slave to a
            General”
          </p>
          <button className="btn-primary">DONATE</button>
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
        <button className="btn-primary">DONATE</button>
      </section>

      {/* Biography Section */}
      <section className="bio">
        <p>
          Abraham Hannibal, or Abram Petrovich Gannibal, was born in 1696 and
          died on May 14, 1781. He is the maternal great-grandfather of the
          Russian poet Alexander Pushkin. His life is a true adventure story —
          kidnapped from Logone in present-day Cameroon in 1703, he became a
          page of Ottoman Sultan Ahmed III in Constantinople, and was later
          brought to Russia to serve at the court of Tsar Peter the Great.
        </p>
        <button className="btn-secondary">Read more</button>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Our Projects</h2>
        <div className="project-grid">
          <div className="project-card">Multi-sports centers</div>
          <div className="project-card">Multimedia campaigns</div>
          <div className="project-card">Documentary film</div>
          <div className="project-card">
            Agro-sylvo-pastoral training centers
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="footer"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <div className="footer-content">
          <p>
            © 2025 Abram Petrovich Hannibal Foundation. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
