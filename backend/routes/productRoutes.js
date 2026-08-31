const express = require("express");

const router = express.Router();

const products = require("../seed_products");

// ==========================================
// GET ALL PRODUCTS
// GET /api/products
// ==========================================

router.get("/", (req, res) => {
  try {
    res.status(200).json(products);
  } catch (error) {
    console.error(
      "❌ Error fetching products:",
      error
    );

    res.status(500).json({
      message: "Failed to fetch products",
    });
  }
});

// ==========================================
// GET PRODUCT BY ID
// GET /api/products/:id
// ==========================================

router.get("/:id", (req, res) => {
  try {
    const id = Number(req.params.id);

    const product = products.find(
      (item) => item.id === id
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(
      "❌ Error fetching product:",
      error
    );

    res.status(500).json({
      message: "Failed to fetch product",
    });
  }
});

// ==========================================
// EXPORT
// ==========================================

module.exports = router;