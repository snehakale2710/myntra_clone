import React from "react";
import "./ProductCard.css";

import { getUserData } from "../utils/userStorage";

function ProductCard({
  product,
  setPage,
  addToWishlist,
  addToCart,
  isWishlistPage = false,
}) {
  const wishlist = getUserData("wishlist", []);

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  const openDetails = () => {
    localStorage.setItem(
      "selectedProduct",
      JSON.stringify(product)
    );

    setPage("details");
  };

  return (
    <article className="product-card">
      <div
        className="product-image-wrap"
        onClick={openDetails}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (
            event.key === "Enter" ||
            event.key === " "
          ) {
            event.preventDefault();
            openDetails();
          }
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
        />

        {product.discount && (
          <span className="product-discount">
            {product.discount}% OFF
          </span>
        )}

        <button
          type="button"
          className={`product-wishlist ${
            isWishlisted ? "wishlisted" : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            addToWishlist(product);
          }}
          aria-label={
            isWishlisted
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
        >
          {isWishlisted ? "♥" : "♡"}
        </button>
      </div>

      <div className="product-info">
        <p className="product-brand">
          {product.brand}
        </p>

        <button
          className="product-title-button"
          onClick={openDetails}
        >
          <h3>{product.name}</h3>
        </button>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-price">
          <strong>
            ₹
            {Number(product.price).toLocaleString(
              "en-IN"
            )}
          </strong>

          {product.originalPrice && (
            <del>
              ₹
              {Number(
                product.originalPrice
              ).toLocaleString("en-IN")}
            </del>
          )}
        </div>

        {!isWishlistPage && (
          <button
            type="button"
            className="product-add"
            onClick={() => addToCart(product)}
          >
            ADD TO BAG
          </button>
        )}
      </div>
    </article>
  );
}

export default ProductCard;