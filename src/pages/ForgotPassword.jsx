import React, { useState } from "react";
import "./ForgotPassword.css";

function ForgotPassword({ setPage }) {
  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // STEP 1 - Send OTP to email
  const handleSendOtp = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/send-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.message || "Unable to send OTP."
        );
        return;
      }

      setSuccess("OTP sent! Please check your email inbox.");
      setStep(2);
    } catch (err) {
      console.error("SEND OTP ERROR:", err);

      setError(
        "Unable to connect to the server. Make sure the backend is running on port 5000."
      );
    } finally {
      setLoading(false);
    }
  };

  // STEP 2 - Verify OTP against the backend
  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!otp.trim()) {
      setError("Please enter the OTP.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, otp }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.message || "Invalid OTP."
        );
        return;
      }

      setSuccess("OTP verified successfully.");
      setStep(3);
    } catch (err) {
      console.error("VERIFY OTP ERROR:", err);

      setError(
        "Unable to connect to the server. Make sure the backend is running on port 5000."
      );
    } finally {
      setLoading(false);
    }
  };

  // STEP 3 - Reset Password
  const handleResetPassword = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!newPassword || !confirmPassword) {
      setError("Please enter both password fields.");
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            newPassword,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.message || "Unable to reset password."
        );
        return;
      }

      setSuccess("Password reset successfully!");

      setTimeout(() => {
        setPage("login");
      }, 1500);
    } catch (err) {
      console.error("RESET PASSWORD ERROR:", err);

      setError(
        "Unable to connect to the server. Make sure the backend is running on port 5000."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-page">

      <div className="forgot-card">

        {/* Logo */}
        <div className="forgot-logo">
          STYLE <span>HUB</span>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2>Forgot Password?</h2>

            <p className="forgot-description">
              Enter your registered email address and we'll send an OTP
              to your inbox to reset your password.
            </p>

            <form onSubmit={handleSendOtp}>

              <div className="input-group">
                <label>Email Address</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {error && (
                <p className="error-message">
                  {error}
                </p>
              )}

              {success && (
                <p className="success-message">
                  {success}
                </p>
              )}

              <button
                type="submit"
                className="forgot-button"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send OTP"}
              </button>

            </form>

            <button
              className="back-login"
              onClick={() => setPage("login")}
            >
              ← Back to Login
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h2>Verify OTP</h2>

            <p className="forgot-description">
              We've sent a 6-digit OTP to:
            </p>

            <p className="user-email">
              {email}
            </p>

            <form onSubmit={handleVerifyOtp}>

              <div className="input-group">
                <label>Enter OTP</label>

                <input
                  type="text"
                  maxLength="6"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) =>
                    setOtp(e.target.value.replace(/\D/g, ""))
                  }
                />
              </div>

              {error && (
                <p className="error-message">
                  {error}
                </p>
              )}

              {success && (
                <p className="success-message">
                  {success}
                </p>
              )}

              <button
                type="submit"
                className="forgot-button"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>

            </form>

            <button
              className="resend-button"
              onClick={handleSendOtp}
              disabled={loading}
            >
              Resend OTP
            </button>

            <button
              className="back-login"
              onClick={() => {
                setStep(1);
                setOtp("");
                setError("");
                setSuccess("");
              }}
            >
              ← Change Email
            </button>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <h2>Create New Password</h2>

            <p className="forgot-description">
              Enter your new password below.
            </p>

            <form onSubmit={handleResetPassword}>

              <div className="input-group">
                <label>New Password</label>

                <input
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) =>
                    setNewPassword(e.target.value)
                  }
                />
              </div>

              <div className="input-group">
                <label>Confirm Password</label>

                <input
                  type="password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                />
              </div>

              {error && (
                <p className="error-message">
                  {error}
                </p>
              )}

              {success && (
                <p className="success-message">
                  {success}
                </p>
              )}

              <button
                type="submit"
                className="forgot-button"
                disabled={loading}
              >
                {loading ? "Resetting..." : "Reset Password"}
              </button>

            </form>

          </>
        )}

      </div>

    </div>
  );
}

export default ForgotPassword;