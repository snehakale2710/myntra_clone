import React, { useState } from "react";
import "./Login.css";

function Login({ setPage }) {

  const [error, setError] =
    useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    const email =
      e.target.email.value;

    const password =
      e.target.password.value;

    const savedUser =
      JSON.parse(
        localStorage.getItem("user")
      );

    if (!savedUser) {
      setError(
        "Please register before login."
      );
      return;
    }

    if (
      email !== savedUser.email ||
      password !== savedUser.password
    ) {
      setError(
        "Invalid email or password."
      );
      return;
    }

    localStorage.setItem(
      "loggedIn",
      "true"
    );

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

          <p className="eyebrow">Welcome back</p>

          <h2>Log in to your account</h2>

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