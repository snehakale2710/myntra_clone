import React from "react";
import ProductCard from "../components/ProductCard";

import "./Wishlist.css";

function Wishlist({
  setPage,
  wishlist,
  addToWishlist,
  addToCart,
}) {
  const moveToBag = (product) => {
    addToCart(product);
    addToWishlist(product);
  };

  const removeFromWishlist = (product) => {
    addToWishlist(product);
  };

  if (wishlist.length === 0) {
    return (
      <section className="wishlist-page">
        <div className="wishlist-header">
          <div className="wishlist-eyebrow">
            STYLEHUB SAVED ITEMS
          </div>

          <h1 className="wishlist-title">
            My Wishlist
          </h1>

          <div className="wishlist-title-line"></div>

          <div className="wishlist-header-bottom">
            <p className="wishlist-subtitle">
              Save your favourite styles and come back to them anytime.
            </p>

            <span className="wishlist-count">
              0 PRODUCTS
            </span>
          </div>
        </div>

        <div className="empty-wishlist">
          <div className="empty-heart">
            ♡
          </div>

          <div className="empty-eyebrow">
            YOUR SAVED ITEMS
          </div>

          <h2>
            Your wishlist is empty
          </h2>

          <p>
            You haven't saved any products yet.
            <br />
            Explore the collection and find something you love.
          </p>

          <button
            type="button"
            className="explore-button"
            onClick={() => setPage("products")}
          >
            EXPLORE PRODUCTS
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="wishlist-page">
      <div className="wishlist-header">
        <div className="wishlist-eyebrow">
          STYLEHUB SAVED ITEMS
        </div>

        <h1 className="wishlist-title">
          My Wishlist
        </h1>

        <div className="wishlist-title-line"></div>

        <div className="wishlist-header-bottom">
          <p className="wishlist-subtitle">
            Save your favourite styles and come back to them anytime.
          </p>

          <span className="wishlist-count">
            {wishlist.length}{" "}
            {wishlist.length === 1
              ? "PRODUCT"
              : "PRODUCTS"}
          </span>
        </div>
      </div>

      <div className="wishlist-grid">
        {wishlist.map((product) => (
          <div
            className="wishlist-product"
            key={product.id}
          >
            <ProductCard
              product={product}
              setPage={setPage}
              addToWishlist={addToWishlist}
              addToCart={addToCart}
              isWishlistPage={true}
            />

            <div className="wishlist-actions">
              <button
                type="button"
                className="move-to-bag"
                onClick={() =>
                  moveToBag(product)
                }
              >
                MOVE TO BAG
              </button>

              <button
                type="button"
                className="remove-wishlist"
                onClick={() =>
                  removeFromWishlist(product)
                }
              >
                REMOVE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Wishlist;