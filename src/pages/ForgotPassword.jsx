import React, { useState } from "react";
import "./ForgotPassword.css";

function ForgotPassword({ setPage }) {
  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // STEP 1 - Generate OTP
  const handleSendOtp = (e) => {
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

    // Generate 6 digit OTP
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();

    setGeneratedOtp(newOtp);

    // Demo only
    console.log("Your OTP is:", newOtp);

    setSuccess("OTP generated successfully.");
    setStep(2);
  };

  // STEP 2 - Verify OTP
  const handleVerifyOtp = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!otp.trim()) {
      setError("Please enter the OTP.");
      return;
    }

    if (otp !== generatedOtp) {
      setError("Invalid OTP. Please try again.");
      return;
    }

    setSuccess("OTP verified successfully.");
    setStep(3);
  };

  // STEP 3 - Reset Password
  const handleResetPassword = (e) => {
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

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userIndex = users.findIndex(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (userIndex !== -1) {
      users[userIndex].password = newPassword;

      localStorage.setItem("users", JSON.stringify(users));
    }

    setSuccess("Password reset successfully!");

    setTimeout(() => {
      setPage("login");
    }, 1500);
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
              Enter your registered email address and we'll generate an OTP
              to reset your password.
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

              <button type="submit" className="forgot-button">
                Generate OTP
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
              Enter the 6-digit OTP generated for:
            </p>

            <p className="user-email">
              {email}
            </p>

            {/* DEMO OTP */}
            <div className="demo-otp">
              <span>Demo OTP</span>
              <strong>{generatedOtp}</strong>
            </div>

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

              <button type="submit" className="forgot-button">
                Verify OTP
              </button>

            </form>

            <button
              className="resend-button"
              onClick={handleSendOtp}
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

              <button type="submit" className="forgot-button">
                Reset Password
              </button>

            </form>

          </>
        )}

      </div>

    </div>
  );
}

export default ForgotPassword;