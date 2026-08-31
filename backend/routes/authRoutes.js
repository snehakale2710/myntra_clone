const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

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

    // Check fields
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }

    // Clean values
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    // Check existing user
    const existingUser = await User.findOne({
      email: cleanEmail,
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered.",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    // Create user
    const user = await User.create({
      name: cleanName,
      email: cleanEmail,
      password: hashedPassword,
    });

    console.log(
      "✅ User registered:",
      user.email
    );

    // Don't send password
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

    // Check fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
      });
    }

    // Clean email
    const cleanEmail = email
      .trim()
      .toLowerCase();

    // Find user
    const user = await User.findOne({
      email: cleanEmail,
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    // Compare password
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

    // Don't send password
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
// EXPORT
// ==========================================

module.exports = router;