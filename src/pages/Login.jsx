import React, { useState } from "react";
import "./Login.css";

function Login({ setPage }) {
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const email =
      e.target.email.value.trim().toLowerCase();

    const password =
      e.target.password.value;

    /* =========================
       GET ALL USERS
    ========================= */

    const users =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

    /* =========================
       FIND USER
    ========================= */

    const user = users.find(
      (item) =>
        item.email.toLowerCase() === email &&
        item.password === password
    );

    if (!user) {
      setError(
        "Invalid email or password."
      );
      return;
    }

    /* =========================
       SAVE CURRENT USER
    ========================= */

    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );

    localStorage.setItem(
      "loggedIn",
      "true"
    );

    setError("");

    setPage("home");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-left">

          <h1>
            STYLE<span>HUB</span>
          </h1>

          <p>
            Considered clothing for everyday wear.
          </p>

        </div>

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

          {error && (
            <div className="error">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>

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

            <button type="submit">
              Log In
            </button>

          </form>

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