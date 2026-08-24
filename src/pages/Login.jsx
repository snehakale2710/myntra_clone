import React, { useState } from "react";
import "./Login.css";

function Login({ setPage, setIsLoggedIn }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const email = e.target.email.value.trim().toLowerCase();
    const password = e.target.password.value;

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid email or password.");
        setLoading(false);
        return;
      }

      // Save logged-in user
      localStorage.setItem(
        "currentUser",
        JSON.stringify(data.user)
      );

      localStorage.setItem("loggedIn", "true");

      // Update App login state
      if (setIsLoggedIn) {
        setIsLoggedIn(true);
      }

      // Go to home
      setPage("home");

    } catch (error) {
      console.error("Login error:", error);

      setError(
        "Unable to connect to the server."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* LEFT SIDE */}

        <div className="auth-left">

          <h1>
            STYLE<span>HUB</span>
          </h1>

          <p>
            Considered clothing for everyday wear.
          </p>

        </div>

        {/* RIGHT SIDE */}

        <div className="auth-right">

          <p className="eyebrow">
            Welcome back
          </p>

          <h2>
            Log in to your account
          </h2>

          <p>
            Login to continue shopping.
          </p>

          {/* ERROR */}

          {error && (
            <div className="error">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>

            {/* EMAIL */}

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
            />

            {/* PASSWORD */}

            <input
              name="password"
              type="password"
              placeholder="Password"
              required
            />

            {/* FORGOT PASSWORD */}

            <p
              className="forgot-password"
              onClick={() =>
                setPage("forgot-password")
              }
            >
              Forgot Password?
            </p>

            {/* LOGIN BUTTON */}

            <button
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>

          </form>

          {/* REGISTER */}

          <p className="switch">

            Don't have an account?

            <button
              type="button"
              onClick={() =>
                setPage("register")
              }
            >
              Register
            </button>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;