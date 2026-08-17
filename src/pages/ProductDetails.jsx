import React from "react";
import "./ProductDetails.css";

function ProductDetails({
  setPage,
  addToWishlist,
  addToCart
}) {

  const product =
    JSON.parse(
      localStorage.getItem(
        "selectedProduct"
      )
    );

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

        <p className="details-brand">
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
            {product.discount}% OFF
          </span>

        </div>

        <div className="size-title">
          SELECT SIZE
        </div>

        <div className="sizes">
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
          <button>XXL</button>
        </div>

        <div className="details-actions">

          <button
            className="add-cart"
            onClick={() =>
              addToCart(product)
            }
          >
            🛍️ ADD TO BAG
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

          <h3>🚚 DELIVERY OPTIONS</h3>

          <p>
            Enter your pincode to check
            delivery availability.
          </p>

          <input
            type="text"
            placeholder="Enter Pincode"
          />

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;