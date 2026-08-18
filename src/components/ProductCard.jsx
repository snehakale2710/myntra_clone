import React from "react";
import "./ProductCard.css";

function ProductCard({
  product,
  setPage,
  addToWishlist,
  addToCart
}) {

  const wishlist =
    JSON.parse(
      localStorage.getItem("wishlist")
    ) || [];

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  return (
    <div className="product-card">

      <div
        className="product-image"
        onClick={() => {
          localStorage.setItem(
            "selectedProduct",
            JSON.stringify(product)
          );

          setPage("details");
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
        />

        <span className="discount">
          {product.discount}% off
        </span>

        <button
          className={
            isWishlisted
              ? "wishlist active"
              : "wishlist"
          }
          onClick={(e) => {
            e.stopPropagation();
            addToWishlist(product);
          }}
          aria-label="Toggle wishlist"
        >
          {isWishlisted ? "♥" : "♡"}
        </button>
      </div>

      <div className="product-info">

        <h3>{product.brand}</h3>

        <p>{product.name}</p>

        <div className="price">
          <strong>₹{product.price}</strong>

          <del>
            ₹{product.originalPrice}
          </del>
        </div>

        <button
          className="bag-btn"
          onClick={() =>
            addToCart(product)
          }
        >
          Add to Bag
        </button>

      </div>

    </div>
  );
}

export default ProductCard;