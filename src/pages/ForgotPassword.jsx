import React, { useState } from "react";
import "./ForgotPassword.css";

function ForgotPassword({ setPage }) {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] =
    useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // ==========================================
    // GET USERS
    // ==========================================

    const users =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

    const enteredEmail =
      email.trim().toLowerCase();

    // ==========================================
    // FIND USER
    // ==========================================

    const userIndex = users.findIndex(
      (user) =>
        user.email &&
        user.email.trim().toLowerCase() ===
          enteredEmail
    );

    if (userIndex === -1) {
      setError(
        "No account found with this email address."
      );
      return;
    }

    // ==========================================
    // PASSWORD LENGTH
    // ==========================================

    if (newPassword.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );
      return;
    }

    // ==========================================
    // PASSWORD MATCH
    // ==========================================

    if (
      newPassword !== confirmPassword
    ) {
      setError(
        "Passwords do not match."
      );
      return;
    }

    // ==========================================
    // UPDATE PASSWORD
    // ==========================================

    users[userIndex] = {
      ...users[userIndex],
      password: newPassword,
    };

    // ==========================================
    // SAVE USERS
    // ==========================================

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    // ==========================================
    // CLEAR OLD LOGIN SESSION
    // ==========================================

    localStorage.removeItem(
      "currentUser"
    );

    localStorage.removeItem(
      "loggedIn"
    );

    // ==========================================
    // SUCCESS
    // ==========================================

    setSuccess(
      "Password changed successfully! Please login with your new password."
    );

    setEmail("");
    setNewPassword("");
    setConfirmPassword("");

    // ==========================================
    // GO TO LOGIN
    // ==========================================

    setTimeout(() => {
      setPage("login");
    }, 1500);
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* LEFT */}

        <div className="auth-left">

          <h1>
            STYLE<span>HUB</span>
          </h1>

          <p>
            Considered clothing for everyday wear.
          </p>

        </div>

        {/* RIGHT */}

        <div className="auth-right">

          <p className="eyebrow">
            Reset your password
          </p>

          <h2>
            Forgot Password?
          </h2>

          <p>
            Enter your registered email and
            create a new password.
          </p>

          {/* ERROR */}

          {error && (
            <div className="error">
              {error}
            </div>
          )}

          {/* SUCCESS */}

          {success && (
            <div className="success">
              {success}
            </div>
          )}

          <form
            onSubmit={
              handleResetPassword
            }
          >

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) =>
                setNewPassword(
                  e.target.value
                )
              }
              required
            />

            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
              required
            />

            <button type="submit">
              Reset Password
            </button>

          </form>

          <p className="switch">

            Remember your password?

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

export default ForgotPassword;