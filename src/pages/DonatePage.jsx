import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";

const DonatePage = () => {
  const [amount, setAmount] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [bankScreenshot, setBankScreenshot] = useState(null);
  const [showBankDetails, setShowBankDetails] = useState(false);

  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const API_BASE = "http://localhost:5000";

  // ----- CamPay Payment Logic -----
  const handleCamPayPayment = (method) => {
    if (!amount || parseInt(amount) <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    const donor = {
      firstName: document.querySelector('input[name="firstName"]').value.trim(),
      lastName: document.querySelector('input[name="lastName"]').value.trim(),
      email: document.querySelector('input[name="email"]').value.trim(),
      phone: document.querySelector('input[name="phone"]')?.value.trim(),
    };

    if(!donor.firstName || !donor.email || !donor.phone) {
      alert("Please fill in your first name, email, and phone.");
      return;
    }

    fetch(`${API_BASE}/api/campay/initiate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: parseInt(amount),
        donor,
        phone: donor.phone,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.payment_url) {
          // Redirect donor to CamPay payment page
          window.location.href = data.payment_url;
        } else {
          alert("Error initiating payment. Please try again.");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Payment failed. Check console for details.");
      });
  };

  // Show Bank Details
  const handleBankClick = () => {
    if (!amount || parseInt(amount) <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    setShowBankDetails(true);
  };

  // Handle Bank Transfer submission
  const handleBankSubmit = async () => {
    const donor = {
      firstName: document.querySelector('input[name="firstName"]').value,
      lastName: document.querySelector('input[name="lastName"]').value,
      email: document.querySelector('input[name="email"]').value,
      phone: document.querySelector('input[name="phone"]')?.value || "",
    };

    if (!amount || parseInt(amount) <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    if (!bankScreenshot) {
      alert("Please upload a screenshot of your bank transfer.");
      return;
    }

    const formData = new FormData();
    formData.append("amount", amount);
    formData.append("donorFirstName", donor.firstName);
    formData.append("donorLastName", donor.lastName);
    formData.append("donorEmail", donor.email);
    formData.append("donorPhone", donor.phone);
    formData.append("screenshot", bankScreenshot);

    try {
      const res = await fetch(`${API_BASE}/api/bank/submit`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        alert(
          "Bank transfer submitted successfully! Both donor and recipient will be notified."
        );
        setBankScreenshot(null);
        setShowBankDetails(false);

        // Notify donor via EmailJS
        const donorEmailParams = {
          to_name: donor.firstName,
          amount: amount,
          donor_email: donor.email,
          message: `Thank you for your donation of ${amount} XAF!`,
        };
        emailjs
          .send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            donorEmailParams,
            EMAILJS_PUBLIC_KEY
          )
          .then((response) => console.log("Donor email sent", response.status))
          .catch((err) => console.error("Email error:", err));

        // Notify foundation via EmailJS
        const foundationEmailParams = {
          to_name: "AP2EDA-APH",
          amount: amount,
          donor_name: `${donor.firstName} ${donor.lastName}`,
          donor_email: donor.email,
        };
        emailjs
          .send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            foundationEmailParams,
            EMAILJS_PUBLIC_KEY
          )
          .then((response) =>
            console.log("Foundation email sent", response.status)
          )
          .catch((err) => console.error("Email error:", err));
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting bank transfer. Check console for details.");
    }
  };

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
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
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
              <button
                type="button"
                className="btn-secondary"
                onClick={() => handleCamPayPayment("MTN")}
              >
                MTN Mobile Money
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => handleCamPayPayment("Orange")}
              >
                Orange Money
              </button>

              {/* Bank Transfer */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={handleBankClick}
                >
                  Bank Transfer
                </button>

                {showBankDetails && (
                  <div
                    style={{
                      background: "#f0f0f0",
                      padding: "1rem",
                      borderRadius: "8px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <h4>Bank Details</h4>
                    <p>Bank Name: ABC Bank</p>
                    <p>Account Name: Abram Petrovich Hannibal Foundation</p>
                    <p>Account Number: 1234567890</p>
                    <p>SWIFT/BIC: ABCDXX</p>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setBankScreenshot(e.target.files[0])}
                    />
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={handleBankSubmit}
                    >
                      Submit Bank Transfer Screenshot
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
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
              <li className="dropdown">
                <a href="/projects">Our Projects</a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/gallery">Gallery</a>
                  </li>
                </ul>
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

export default DonatePage;
