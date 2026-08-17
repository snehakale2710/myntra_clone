import React, { useState } from "react";
import "./Register.css";

function Register({ setPage }) {

  const [error, setError] =
    useState("");

  const handleRegister = (e) => {

    e.preventDefault();

    const name =
      e.target.name.value;

    const email =
      e.target.email.value;

    const password =
      e.target.password.value;

    const confirmPassword =
      e.target.confirmPassword.value;

    if (password !== confirmPassword) {

      setError(
        "Passwords do not match."
      );

      return;
    }

    const user = {
      name,
      email,
      password
    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    localStorage.setItem(
      "loggedIn",
      "true"
    );

    setPage("home");
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

          <h2>Create Account</h2>

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

            <button type="submit">
              REGISTER
            </button>

          </form>

          <p className="switch">
            Already have an account?

            <button
              onClick={() =>
                setPage("login")
              }
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