import React, { useState } from "react";
import "./Register.css";

function Register({ setPage, setIsLoggedIn }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim().toLowerCase();
    const password = e.target.password.value;
    const confirmPassword =
      e.target.confirmPassword.value;

    // Password validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );
      return;
    }

    try {
      setLoading(true);

      console.log("Sending register request...");
      console.log("Name:", name);
      console.log("Email:", email);

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

      console.log(
        "Register response status:",
        response.status
      );

      const data = await response.json();

      console.log("Register response:", data);

      if (!response.ok) {
        setError(
          data.message || "Registration failed."
        );
        return;
      }

      // Save user if backend sends user
      if (data.user) {
        localStorage.setItem(
          "currentUser",
          JSON.stringify(data.user)
        );
      }

      localStorage.setItem("loggedIn", "true");

      // Update login state if available
      if (setIsLoggedIn) {
        setIsLoggedIn(true);
      }

      setError("");

      // Go to home
      setPage("home");
    } catch (error) {
      console.error(
        "REGISTER FETCH ERROR:",
        error
      );

      setError(
        "Unable to connect to the server. Make sure the backend is running on port 5000."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">

        {/* LEFT SIDE */}
        <div className="register-image">
          <h1>
            STYLE<span>HUB</span>
          </h1>

          <p>
            Your style. Your story.
          </p>
        </div>

        {/* RIGHT SIDE */}
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