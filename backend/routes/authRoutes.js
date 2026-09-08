const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const { sendOtpEmail } = require("../utils/sendEmail");

const router = express.Router();

// ==========================================
// AUTH TEST
// GET /api/auth/test
// ==========================================

router.get("/test", (req, res) => {
  res.status(200).json({
    message: "Auth routes are working!",
  });
});

// ==========================================
// REGISTER
// POST /api/auth/register
// ==========================================

router.post("/register", async (req, res) => {
  try {
    console.log("📥 Register request received");

    const { name, email, password } = req.body;

    console.log("Name:", name);
    console.log("Email:", email);

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    const existingUser = await User.findOne({
      email: cleanEmail,
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered.",
      });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const user = await User.create({
      name: cleanName,
      email: cleanEmail,
      password: hashedPassword,
    });

    console.log(
      "✅ User registered:",
      user.email
    );

    const userResponse = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    return res.status(201).json({
      message: "Registration successful.",
      user: userResponse,
    });
  } catch (error) {
    console.error("❌ Registration error:");
    console.error(error);

    return res.status(500).json({
      message: "Server error during registration.",
      error: error.message,
    });
  }
});

// ==========================================
// LOGIN
// POST /api/auth/login
// ==========================================

router.post("/login", async (req, res) => {
  try {
    console.log("📥 Login request received");

    const { email, password } = req.body;

    console.log("Email:", email);

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
      });
    }

    const cleanEmail = email
      .trim()
      .toLowerCase();

    const user = await User.findOne({
      email: cleanEmail,
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    const passwordMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    console.log(
      "✅ User logged in:",
      user.email
    );

    const userResponse = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    return res.status(200).json({
      message: "Login successful.",
      user: userResponse,
    });
  } catch (error) {
    console.error("❌ Login error:");
    console.error(error);

    return res.status(500).json({
      message: "Server error during login.",
      error: error.message,
    });
  }
});

// ==========================================
// SEND OTP (Forgot Password - Step 1)
// POST /api/auth/send-otp
// ==========================================

router.post("/send-otp", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required.",
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    const user = await User.findOne({
      email: cleanEmail,
    });

    if (!user) {
      return res.status(404).json({
        message: "No account found with this email.",
      });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    // Expires in 10 minutes
    const otpExpiry = new Date(
      Date.now() + 10 * 60 * 1000
    );

    user.otp = otp;
    user.otpExpiry = otpExpiry;
    user.otpVerified = false;

    await user.save();

    await sendOtpEmail(user.email, otp);

    console.log(
      "✅ OTP sent to:",
      user.email
    );

    return res.status(200).json({
      message: "OTP sent to your email.",
    });
  } catch (error) {
    console.error("❌ Send OTP error:", error);

    return res.status(500).json({
      message: "Unable to send OTP. Please try again.",
      error: error.message,
    });
  }
});

// ==========================================
// VERIFY OTP (Forgot Password - Step 2)
// POST /api/auth/verify-otp
// ==========================================

router.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        message: "Email and OTP are required.",
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    const user = await User.findOne({
      email: cleanEmail,
    });

    if (!user || !user.otp || !user.otpExpiry) {
      return res.status(400).json({
        message: "No OTP request found. Please request a new OTP.",
      });
    }

    if (new Date() > user.otpExpiry) {
      return res.status(400).json({
        message: "OTP has expired. Please request a new one.",
      });
    }

    if (user.otp !== otp) {
      return res.status(400).json({
        message: "Invalid OTP. Please try again.",
      });
    }

    user.otpVerified = true;

    await user.save();

    return res.status(200).json({
      message: "OTP verified successfully.",
    });
  } catch (error) {
    console.error("❌ Verify OTP error:", error);

    return res.status(500).json({
      message: "Server error while verifying OTP.",
      error: error.message,
    });
  }
});

// ==========================================
// RESET PASSWORD (Forgot Password - Step 3)
// POST /api/auth/reset-password
// ==========================================

router.post("/reset-password", async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      return res.status(400).json({
        message: "Email and new password are required.",
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters.",
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    const user = await User.findOne({
      email: cleanEmail,
    });

    if (!user) {
      return res.status(404).json({
        message: "No account found with this email.",
      });
    }

    if (!user.otpVerified) {
      return res.status(403).json({
        message: "OTP not verified. Please verify OTP before resetting password.",
      });
    }

    const hashedPassword = await bcrypt.hash(
      newPassword,
      10
    );

    user.password = hashedPassword;

    // Clear OTP fields after successful reset
    user.otp = null;
    user.otpExpiry = null;
    user.otpVerified = false;

    await user.save();

    console.log(
      "✅ Password reset for:",
      user.email
    );

    return res.status(200).json({
      message: "Password reset successfully.",
    });
  } catch (error) {
    console.error("❌ Reset password error:", error);

    return res.status(500).json({
      message: "Server error during password reset.",
      error: error.message,
    });
  }
});

// ==========================================
// EXPORT
// ==========================================

module.exports = router;