import React, { useEffect, useState } from "react";

import "./ProductDetails.css";

import { API_BASE_URL } from "../utils/api";
import ProductCard from "../components/ProductCard";

function ProductDetails({
  setPage,
  addToWishlist,
  addToCart,
}) {
  const [selectedSize, setSelectedSize] =
    useState("M");

  const [pincode, setPincode] =
    useState("");

  const [pincodeMsg, setPincodeMsg] =
    useState("");

  const [allProducts, setAllProducts] =
    useState([]);

  const product =
    JSON.parse(
      localStorage.getItem(
        "selectedProduct"
      )
    );

  // =====================================================
  // FETCH FULL CATALOG
  // Same backend endpoint as Products.jsx, so related
  // products always reflect the real, current catalog.
  // =====================================================

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/api/products`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setAllProducts(data);
      } catch (err) {
        console.error("Related products fetch error:", err);
        setAllProducts([]);
      }
    };

    fetchProducts();
  }, []);

  const checkPincode = (e) => {
    e.preventDefault();

    if (
      /^[0-9]{6}$/.test(
        pincode.trim()
      )
    ) {
      setPincodeMsg(
        "Delivery available — usually arrives in 3-5 days."
      );
    } else {
      setPincodeMsg(
        "Enter a valid 6-digit pincode."
      );
    }
  };

  if (!product) {
    return (
      <div className="details-error">

        <h2>
          Product not found
        </h2>

        <button
          onClick={() =>
            setPage("products")
          }
        >
          Back to Products
        </button>

      </div>
    );
  }

  /* =====================================================
     RELATED PRODUCTS
     Same category first, falls back to same subcategory
     if there aren't enough matches.
  ===================================================== */

  const relatedProducts = (() => {
    const sameCategory = allProducts.filter(
      (item) =>
        item.id !== product.id &&
        item.category === product.category
    );

    if (sameCategory.length >= 4) {
      return sameCategory.slice(0, 4);
    }

    const extra = allProducts.filter(
      (item) =>
        item.id !== product.id &&
        item.category !== product.category &&
        item.subcategory === product.subcategory
    );

    return [...sameCategory, ...extra].slice(0, 4);
  })();

  return (
    <>
      <main className="details-page">

        <div className="details-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        <div className="details-content">

          <p className="eyebrow">
            {product.brand}
          </p>

          <h1>
            {product.name}
          </h1>

          <p className="details-description">
            {product.description}
          </p>

          <div className="details-price">

            <strong>
              ₹
              {Number(
                product.price
              ).toLocaleString("en-IN")}
            </strong>

            <del>
              ₹
              {Number(
                product.originalPrice
              ).toLocaleString("en-IN")}
            </del>

            <span>
              {product.discount}% off
            </span>

          </div>

          <div className="size-title">
            Select Size
          </div>

          <div className="sizes">

            {[
              "S",
              "M",
              "L",
              "XL",
              "XXL",
            ].map((size) => (

              <button
                key={size}
                className={
                  selectedSize === size
                    ? "selected"
                    : ""
                }
                onClick={() =>
                  setSelectedSize(size)
                }
              >
                {size}
              </button>

            ))}

          </div>

          <div className="details-actions">

            <button
              className="add-cart"
              onClick={() =>
                addToCart({
                  ...product,
                  size: selectedSize,
                })
              }
            >
              ADD TO BAG
            </button>

            <button
              className="add-wishlist"
              onClick={() =>
                addToWishlist(product)
              }
            >
              ♡ WISHLIST
            </button>

          </div>

          <div className="delivery">

            <h3>
              Delivery Options
            </h3>

            <p>
              Enter your pincode to check
              delivery availability.
            </p>

            <form
              className="pincode-form"
              onSubmit={checkPincode}
            >

              <input
                type="text"
                placeholder="Enter pincode"
                maxLength={6}
                value={pincode}
                onChange={(e) =>
                  setPincode(
                    e.target.value.replace(
                      /\D/g,
                      ""
                    )
                  )
                }
              />

              <button type="submit">
                Check
              </button>

            </form>

            {pincodeMsg && (
              <p className="pincode-msg">
                {pincodeMsg}
              </p>
            )}

          </div>

        </div>

      </main>

      {relatedProducts.length > 0 && (

        <section className="related-products">

          <div className="related-products-header">

            <p className="eyebrow">
              YOU MAY ALSO LIKE
            </p>

            <h2>
              Complete the look
            </h2>

          </div>

          <div className="related-products-grid">

            {relatedProducts.map((item) => (

              <ProductCard
                key={item.id}
                product={item}
                setPage={setPage}
                addToWishlist={addToWishlist}
                addToCart={addToCart}
              />

            ))}

          </div>

        </section>

      )}
    </>
  );
}

export default ProductDetails;