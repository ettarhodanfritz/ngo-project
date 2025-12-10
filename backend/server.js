// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure SendGrid with API key from .env
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log("Receiver is:", process.env.SENDGRID_RECEIVER);

// Contact form endpoint
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  try {
    const msg = {
      to: process.env.SENDGRID_RECEIVER, // The client who will receive the message
      from: process.env.SENDGRID_SENDER, // Verified sender email in SendGrid
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email, // Allows client to reply directly to the user
    };

    await sgMail.send(msg);

    res.status(200).json({ success: "Message sent successfully!" });
  } catch (err) {
    console.error("SendGrid Error:", err);
    res
      .status(500)
      .json({ error: "Failed to send message. Please try again later." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
