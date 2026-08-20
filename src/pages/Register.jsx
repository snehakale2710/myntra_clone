import React, { useState } from "react";
import "./Register.css";

function Register({ setPage }) {
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const name =
      e.target.name.value.trim();

    const email =
      e.target.email.value.trim().toLowerCase();

    const password =
      e.target.password.value;

    const confirmPassword =
      e.target.confirmPassword.value;

    /* =========================
       PASSWORD CHECK
    ========================= */

    if (password !== confirmPassword) {
      setError(
        "Passwords do not match."
      );
      return;
    }

    /* =========================
       GET EXISTING USERS
    ========================= */

    const users =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

    /* =========================
       CHECK DUPLICATE EMAIL
    ========================= */

    const existingUser =
      users.find(
        (user) =>
          user.email.toLowerCase() === email
      );

    if (existingUser) {
      setError(
        "An account with this email already exists."
      );
      return;
    }

    /* =========================
       CREATE USER
    ========================= */

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
    };

    /* =========================
       ADD USER
       WITHOUT DELETING
       OTHER USERS
    ========================= */

    const updatedUsers = [
      ...users,
      newUser,
    ];

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    /* =========================
       LOGIN THIS USER
    ========================= */

    localStorage.setItem(
      "currentUser",
      JSON.stringify(newUser)
    );

    localStorage.setItem(
      "loggedIn",
      "true"
    );

    setError("");

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

            <button type="submit">
              Create Account
            </button>

          </form>

          <p className="switch">
            Already have an account?

            <button
              type="button"
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