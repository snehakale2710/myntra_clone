import React, { useState } from "react";
import "./ProductDetails.css";

function ProductDetails({
  setPage,
  addToWishlist,
  addToCart
}) {

  const [selectedSize, setSelectedSize] = useState("M");
  const [pincode, setPincode] = useState("");
  const [pincodeMsg, setPincodeMsg] = useState("");

  const product =
    JSON.parse(
      localStorage.getItem(
        "selectedProduct"
      )
    );

  const checkPincode = (e) => {
    e.preventDefault();
    if (pincode.trim().length === 6) {
      setPincodeMsg("Delivery available — usually arrives in 3-5 days.");
    } else {
      setPincodeMsg("Enter a valid 6-digit pincode.");
    }
  };

  if (!product) {
    return (
      <div className="details-error">
        <h2>Product not found</h2>

        <button
          onClick={() => setPage("products")}
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="details-page">

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

        <h1>{product.name}</h1>

        <p className="details-description">
          {product.description}
        </p>

        <div className="details-price">

          <strong>
            ₹{product.price}
          </strong>

          <del>
            ₹{product.originalPrice}
          </del>

          <span>
            {product.discount}% off
          </span>

        </div>

        <div className="size-title">
          Select size
        </div>

        <div className="sizes">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              className={
                selectedSize === size ? "selected" : ""
              }
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="details-actions">

          <button
            className="add-cart"
            onClick={() =>
              addToCart({ ...product, size: selectedSize })
            }
          >
            Add to Bag
          </button>

          <button
            className="add-wishlist"
            onClick={() =>
              addToWishlist(product)
            }
          >
            ♡ Wishlist
          </button>

        </div>

        <div className="delivery">

          <h3>Delivery options</h3>

          <p>
            Enter your pincode to check
            delivery availability.
          </p>

          <form className="pincode-form" onSubmit={checkPincode}>
            <input
              type="text"
              placeholder="Enter pincode"
              maxLength={6}
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
            <button type="submit">Check</button>
          </form>

          {pincodeMsg && (
            <p className="pincode-msg">{pincodeMsg}</p>
          )}

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;