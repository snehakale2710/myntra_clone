import React, { useState } from "react";
import "./Register.css";

function Register({ setPage }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim().toLowerCase();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    /* =========================
       PASSWORD CHECK
    ========================= */

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    /* =========================
       SEND DATA TO BACKEND
    ========================= */

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      /* =========================
         HANDLE BACKEND ERROR
      ========================= */

      if (!response.ok) {
        setError(data.message || "Registration failed.");
        return;
      }

      /* =========================
         SAVE LOGGED-IN USER
      ========================= */

      localStorage.setItem(
        "currentUser",
        JSON.stringify(data.user)
      );

      localStorage.setItem(
        "loggedIn",
        "true"
      );

      setError("");

      /* =========================
         GO TO HOME
      ========================= */

      setPage("home");
    } catch (error) {
      console.error("Registration error:", error);

      setError(
        "Unable to connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">

      <div className="register-card">

        <div className="register-image">

          <h1>
            STYLE<span>HUB</span>
          </h1>

          <p>
            Your style. Your story.
          </p>

        </div>

        <div className="register-form">

          <p className="eyebrow">
            Join us
          </p>

          <h2>
            Create your account
          </h2>

          <p>
            Join us and discover your style.
          </p>

          {error && (
            <div className="error">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister}>

            <input
              name="name"
              type="text"
              placeholder="Full Name"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              required
            />

            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
            />

            <button
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>

          </form>

          <p className="switch">
            Already have an account?

            <button
              type="button"
              onClick={() => setPage("login")}
            >
              Login
            </button>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;