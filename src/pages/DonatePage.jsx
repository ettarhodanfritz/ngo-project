import React, { useState } from "react";
import "../App.css";

const DonatePage = () => {
  const [amount, setAmount] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="donation-page">
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
          backgroundImage: "url('/images/donate.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay">
          <h1>DONATION</h1>
          <p>Support the Abram Petrovich Hannibal Foundation</p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section
        className="donation-section"
        style={{
          padding: "4rem 2rem",
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {/* Form */}
        <form
          className="donation-form"
          style={{
            flex: "1 1 400px",
            maxWidth: "500px",
            background: "#f5f5f5",
            padding: "2rem",
            borderRadius: "10px",
          }}
          onSubmit={(e) => e.preventDefault()}
        >
          <h2>Donation Form</h2>

          {/* Donation Amount */}
          <div className="donation-amount" style={{ marginTop: "1rem" }}>
            <p>Select an amount:</p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {[5000, 10000, 15000].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  className={`btn-primary ${
                    amount === amt.toString() ? "selected" : ""
                  }`}
                  onClick={() => setAmount(amt.toString())}
                >
                  CFA {amt.toLocaleString()}
                </button>
              ))}
              <input
                type="number"
                name="customAmount"
                placeholder="Custom Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{
                  padding: "0.5rem",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          </div>

          {/* Personal Info */}
          <div className="personal-info" style={{ marginTop: "1.5rem" }}>
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              style={{
                width: "100%",
                padding: "0.5rem",
                margin: "0.3rem 0",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              style={{
                width: "100%",
                padding: "0.5rem",
                margin: "0.3rem 0",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              style={{
                width: "100%",
                padding: "0.5rem",
                margin: "0.3rem 0",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          {/* Anonymous Donation */}
          <div style={{ marginTop: "1rem" }}>
            <input type="checkbox" id="anonymous" name="anonymous" />
            <label htmlFor="anonymous" style={{ marginLeft: "0.5rem" }}>
              Make this an anonymous donation
            </label>
          </div>

          {/* Donation Total */}
          <p style={{ marginTop: "1rem", fontWeight: "bold" }}>
            Donation Total: CFA {parseInt(amount || 0).toLocaleString()}
          </p>

          {/* Payment Methods */}
          <div className="payment-methods" style={{ marginTop: "1.5rem" }}>
            <p>Select a payment method:</p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginTop: "0.5rem",
              }}
            >
              <button className="btn-secondary" type="button">
                Visa / Mastercard
              </button>
              <button className="btn-secondary" type="button">
                Bank Transfer
              </button>
              <button className="btn-secondary" type="button">
                Orange Money
              </button>
              <button className="btn-secondary" type="button">
                MTN Mobile Money
              </button>
              <button className="btn-secondary" type="button">
                Other Mobile Payment
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ marginTop: "1.5rem" }}
          >
            Donate
          </button>
        </form>

        {/* Photo beside form */}
        <div style={{ flex: "1 1 400px", maxWidth: "500px" }}>
          <img
            src="/images/donation-photo.jpg"
            alt="Support"
            style={{ width: "100%", borderRadius: "10px" }}
          />
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

export default DonatePage;
