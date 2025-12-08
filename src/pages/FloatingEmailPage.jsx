import React from "react";

export default function FloatingEmail() {
  const email = "contact@fondationaph.com"; // Replace with your email
  const subject = "Hello!";
  const body = "I would like to contact you.";

  const href = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-email"
    >
      <img src="/images/email-icon.png" alt="Email" />
    </a>
  );
}
