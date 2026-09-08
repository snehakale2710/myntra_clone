const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./Product");
const products = require("../seed_products");

async function seedProducts() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB connected");

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log(`✅ ${products.length} products inserted`);

    await mongoose.disconnect();

    console.log("✅ MongoDB disconnected");
  } catch (error) {
    console.error("❌ Seed error:", error);
    process.exit(1);
  }
}

seedProducts();