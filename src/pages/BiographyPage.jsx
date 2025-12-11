import React from "react";
import "../App.css";
import { useState } from "react";

const BiographyPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="biography-page">
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

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: "url('/images/biography-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
        }}
      >
        <div className="hero-overlay">
          <h1>Abram Petrovich Hannibal</h1>
          <p>His biography and remarkable life</p>
        </div>
      </section>

      {/* Biography Content */}
      <section
        className="biography-content"
        style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem" }}
      >
        <p>
          Abraham Hannibal, or Abram Petrovitch Gannibal, born in 1696 and died
          on May 14, 1781, was the maternal great-grandfather of Russian poet
          Alexander Pushkin. His life was a true adventure novel. Kidnapped from
          Logone in northern Cameroon in 1703, Abraham Hannibal became a page of
          Ottoman Sultan Ahmed III in Constantinople. By the end of 1704, he was
          secretly taken to Russia at the court of Tsar Peter the Great.
        </p>
        <p>
          Born in 1696 with the African first name Brouha, he was a prince, son
          of Prince Brouha of Logone, captured in 1703 and brought to Istanbul.
          He was purchased clandestinely by a Russian diplomat for Peter the
          Great, who wished to test the intellectual abilities of a black child
          and demonstrate that intelligence does not depend on birth.
        </p>
        <p>
          In 1717, Hannibal was sent to France to continue his education in
          arts, sciences, and warfare. He learned multiple languages and
          excelled in mathematics, particularly geometry. In 1720, he studied at
          the artillery school in La Fère, obtaining a royal engineering degree.
          He served in the armies of Louis XV and was promoted to captain.
          Hannibal adopted his surname after the Carthaginian general Hannibal.
          In Paris, he befriended Enlightenment figures like Diderot,
          Montesquieu, and Voltaire.
        </p>

        {/* Photo Grid with hover effect */}
        <div
          className="photo-grid"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            margin: "2rem 0",
            justifyContent: "center",
          }}
        >
          {[
            { num: 1, ext: "jpeg" },
            { num: 2, ext: "jpeg" },
            { num: 3, ext: "jpg" },
            { num: 4, ext: "jpg" },
            { num: 5, ext: "jpg" },
            { num: 6, ext: "jpg" },
          ].map((photo) => (
            <div
              key={photo.num}
              style={{
                flex: "0 1 250px",
                height: "200px",
                overflow: "hidden",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
            >
              <img
                src={`/images/photo${photo.num}.${photo.ext}`}
                alt={`Hannibal ${photo.num}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
          ))}
        </div>

        <p>
          Hannibal was manumitted and ennobled by Emperor Peter I and became a
          faithful friend of the tsar. He made a remarkable military engineering
          career, ending as general, and was exiled to Siberia by Prince
          Menshikov before being recalled by Empress Anna. He authored treatises
          on geometry and fortifications and introduced civil architecture
          education in Russian military engineering schools. Hannibal also
          founded Saint Petersburg, Russia’s second-largest city after Moscow.
        </p>
        <p>
          Married a second time to Christine-Régine de Schoëberg of Swedish
          nobility, he had seven children. One of them, Joseph, was Alexander
          Pushkin’s grandfather. Hannibal’s official petition in 1742 sought
          noble rank and a coat of arms, which included an elephant and the
          mysterious motto “FVMMO” meaning “homeland” in Kotoko language.
        </p>
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
            <p>Email: ap2edaaph@gmail.com</p>
            <p>Phone: +237 675594825 / 699955221</p>
            <p>Address: B.P.10 074, Opposite SCDP Douala</p>
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

export default BiographyPage;
