import React from "react";
import "../App.css";
import { useState } from "react";

const ContactPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="contact-page">
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
            <option>AR</option>
            <option>ZH</option>
            <option>NL</option>
            <option>FR</option>
            <option>DE</option>
            <option>IT</option>
            <option>PT</option>
            <option>RU</option>
            <option>ES</option>
          </select>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: "url('/images/footer-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay">
          <h1>CONTACT</h1>
          <p>We are here to answer all your questions.</p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info styled-section">
        <h2>Contact Information</h2>
        <div className="contact-details">
          <p>
            <strong>Email:</strong> ap2edaaph@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +237 675594825 / 699955221
          </p>
          <p>
            <strong>Address:</strong> B.P.10 074, Opposite SCDP Douala
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form styled-section">
        <h2>Send Us a Message</h2>
        <form
          style={{
            maxWidth: "600px",
            margin: "2rem auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            style={{
              padding: "0.7rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            style={{
              padding: "0.7rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            required
            style={{
              padding: "0.7rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          ></textarea>
          <button type="submit" className="btn-primary">
            SEND MESSAGE
          </button>
        </form>
      </section>

      {/* Useful Links Section */}
      <section className="useful-links styled-section">
        <h2>Useful Links</h2>
        <div className="links-grid">
          <a href="/about" className="link-card">
            About Us
          </a>
          <a href="/contact" className="link-card">
            Contact
          </a>
          <a href="/projects" className="link-card">
            Our Projects
          </a>
          <a href="/donate" className="link-card">
            Donate
          </a>
          <a href="/news" className="link-card">
            News
          </a>
          <a href="/media" className="link-card">
            Major Media Event
          </a>
        </div>
      </section>

      {/* Map Section */}
      <section className="map styled-section">
        <h2>Our Location</h2>
        <div className="map-container">
          <iframe
            title="Foundation Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.1234567890!2d9.700000!3d4.050000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabcdef1234567890!2sSCDP%20Douala!5e0!3m2!1sen!2scm!4v1699999999999!5m2!1sen!2scm"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
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
            <p>Email: ap2edaaph@gmail.com</p>
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

export default ContactPage;
