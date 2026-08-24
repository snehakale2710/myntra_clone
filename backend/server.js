const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/myntra")
  .then(() => {
    console.log("✅ MongoDB CONNECTED");
  })
  .catch((error) => {
    console.error("❌ MongoDB CONNECTION ERROR:", error);
  });

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Myntra Clone Backend is running!",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT ${PORT}`);
});