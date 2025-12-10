import React from "react";
import "../App.css";
import { useState } from "react";
const AboutUs = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="about-page">
      {/* NAVBAR (Same as HomePage & ContactPage) */}
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
            <option>ES</option>
            <option>PT</option>
            <option>DE</option>
          </select>
        </div>
      </nav>

      {/* MAIN SECTION */}
      <section className="about-main-section">
        <div className="about-main-container">
          {/* IMAGE */}
          <div className="about-main-image">
            <img src="/images/about-main.jpeg" alt="Nkodo Pierre Claver" />
          </div>

          {/* TEXT */}
          <div className="about-main-text">
            <h2>Nkodo Pierre Claver</h2>
            <h3>
              Knight of the Cameroonian Order of Merit after 40 years of service
              to the Free World
            </h3>

            <p>
              “Mr. Nkodo Pierre Claver, in the name of the President of the
              Republic and by virtue of the powers conferred upon us, we hereby
              make you a Knight of the Order of Merit of Cameroon.” Spoken by
              the Governor of the Littoral Region, Samuel Dieudonné Ivaha
              Diboua, these historic words crowned forty (40) years of
              dedication to Cameroon, Africa, and the Free World.
            </p>

            <p>
              Since the mid-1980s, he has served as a journalist, reporter, and
              correspondent for international agencies. From the mid-1990s
              onward, he continued this mission through Horizons Nouveaux
              Magazine International (founded April 26, 1994) and African First
              Crowns News.
            </p>

            <p>
              For both editorial teams, this distinction represents decades of
              collective work guided by a visionary leader. Holder of the Royal
              Society of Arts diploma in Journalism & Mass Media Communication
              (Manchester, 1984), Nkodo Pierre Claver stands as a symbol of
              excellence, patriotism, and intellectual courage.
            </p>

            <p>
              His commitment to authentic pan-Africanism — a humanistic vision
              confronting neo-liberal imperialism — has remained unwavering
              throughout his career.
            </p>

            <p>
              As Director of Publication, media consultant, and correspondent
              for Press TV (Iran), he carries an exceptional workload with
              discipline and passion. This recognition from the Head of State is
              a testament to his lifelong contribution.
            </p>
          </div>
        </div>
      </section>

      {/* FURTHER INFO */}
      <section className="about-further">
        <h2>Leadership & Mission</h2>
        <p>
          His decoration also highlights his role in strengthening cooperation
          between Russian and Cameroonian peoples — and Africa more broadly — in
          memory of General Abraham Petrovich Hannibal, a Kotoko child from
          Logone-Birni who rose to become one of the highest figures in the
          Russian Empire.
        </p>

        <p>
          Nkodo Pierre Claver is also Executive President of the Pan-African
          Association for Excellence, Education, Development and Friendship in
          Memory of Abraham Petrovich Hannibal (AP2EDA-APH) and his descendant,
          the writer Alexander Pushkin.
        </p>

        <h2>Understanding the Medal</h2>
        <p>
          The Cameroonian Order of Merit is the country’s second-highest
          distinction, honoring service in agriculture, arts, commerce, defense,
          and national contribution. It includes three ranks: Knight, Officer,
          and Grand Cordon. Promotions occur each May 20th, National Day.
        </p>
      </section>

      {/* GALLERY SECTION */}
      <section className="about-gallery">
        <div className="gallery-grid1">
          <img
            src="/images/about1.jpeg"
            className="gallery-photo2"
            alt="Gallery 1"
          />
          <img
            src="/images/about2.jpeg"
            className="gallery-photo2"
            alt="Gallery 2"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="footer"
        style={{
          backgroundImage: "url('/images/footer5.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
            <p>Phone: +237 675 594 825</p>
            <p>B.P. 10 074 Face SCDP Douala</p>
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

export default AboutUs;
