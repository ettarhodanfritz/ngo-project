const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
require("dotenv").config();
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 5000;

/* ===================== MIDDLEWARE ===================== */

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

/* ===================== MULTER (BANK SCREENSHOTS) ===================== */

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "./uploads";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

/* ===================== CAMPAY CREDENTIALS ===================== */

const CAMAPP_ID = process.env.CAMAPP_ID;
const CAMAPP_USERNAME = process.env.CAMAPP_USERNAME;
const CAMAPP_PASSWORD = process.env.CAMAPP_PASSWORD;

/* ===================== ROUTES ===================== */

/**
 * INITIATE CAMPAY PAYMENT
 */
app.post("/api/campay/initiate", async (req, res) => {
  console.log("🔥 /api/campay/initiate HIT:", req.body);

  const { amount, donor, phone } = req.body;

  if (!amount || !phone || !donor?.firstName || !donor?.email) {
    return res.status(400).json({ error: "Invalid request data" });
  }

  let external_reference;

  // If developer sets USE_MOCK_CAMPAY=true in backend/.env, skip external call and return mock URL
  if (process.env.USE_MOCK_CAMPAY === "true") {
    external_reference = `donation-${Date.now()}`;
    const mockUrl = `https://example.com/mock-payment?ref=${external_reference}`;
    console.warn("⚠️ USE_MOCK_CAMPAY=true — returning mock payment_url for local testing");
    return res.json({ payment_url: mockUrl, mock: true });
  }

  try {
    const payload = {
      amount: Number(amount),
      currency: "XAF",
      from: phone, // ✅ REQUIRED BY CAMPAY
      description: "Donation to AP2EDA-APH Foundation",
      external_reference: `donation-${Date.now()}`,
    };
    external_reference = payload.external_reference;

    const response = await fetch(
      "https://sandbox.campay.net/api/v1/payment/initiate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "App-Id": CAMAPP_ID,
          "App-Username": CAMAPP_USERNAME,
          "App-Password": CAMAPP_PASSWORD,
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();
    console.log("🟢 CAMPAY RESPONSE:", data);

    if (!response.ok) {
      return res.status(400).json(data);
    }

    res.json({ payment_url: data.payment_url });
  } catch (err) {
    console.error("❌ CAMPAY ERROR:", err);
    const dnsError = err?.cause?.code === "ENOTFOUND" || err?.code === "ENOTFOUND";
    if (dnsError) {
      // Provide a developer-friendly mock payment URL so frontend flow continues during local dev
      const mockUrl = `https://example.com/mock-payment?ref=${external_reference || `donation-${Date.now()}`}`;
      console.warn("⚠️ Sandbox CamPay not reachable — returning mock payment_url for local testing");
      return res.json({ payment_url: mockUrl, mock: true });
    }
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * BANK TRANSFER SUBMISSION
 */
app.post("/api/bank/submit", upload.single("screenshot"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Screenshot required" });
  }

  res.json({
    success: true,
    message: "Bank transfer submitted successfully",
  });
});

/* ===================== STATIC ===================== */

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ===================== START SERVER ===================== */

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
