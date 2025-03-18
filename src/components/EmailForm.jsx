
import React, { useState } from "react";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Email Validation Function
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    // Check if email is empty
    if (!email.trim()) {
      setMessage("⚠️ Email cannot be empty!");
      return;
    }

    // Check for valid email format
    if (!validateEmail(email)) {
      setMessage("❌ Invalid email format!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://test.ezworks.ai/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.status === 200) {
        setMessage("✅ Form Submitted Successfully!");
      } else if (response.status === 422) {
        // Check for @ez.works email restriction
        if (data.detail && data.detail.some((error) => error.loc.includes("email"))) {
          setMessage("⚠️ Emails from @ez.works are not allowed.");
        } else {
          setMessage("❌ Validation Error: " + (data.detail[0]?.msg || "Invalid Email"));
        }
      } else {
        setMessage("⚠️ Error: " + response.statusText);
      }
    } catch (error) {
      setMessage("❌ Network Error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <form className="email-form" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Contact Me"}
      </button>
      {message && <p className="message">{message}</p>}
    </form>
  );
};

export default EmailForm;
