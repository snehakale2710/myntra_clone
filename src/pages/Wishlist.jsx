import React, { useState } from "react";

import ProductCard from "../components/ProductCard";
import PageTitle from "../components/PageTitle";

import "./Wishlist.css";

function Wishlist({
  setPage,
  addToWishlist,
  addToCart,
}) {
  const [wishlist, setWishlist] =
    useState(
      JSON.parse(
        localStorage.getItem("wishlist")
      ) || []
    );

  const handleWishlist = (product) => {
    addToWishlist(product);

    const updated =
      JSON.parse(
        localStorage.getItem("wishlist")
      ) || [];

    setWishlist(updated);
  };

  return (
    <main className="wishlist-page">

      <div className="wishlist-header">

        <PageTitle
          eyebrow="STYLEHUB SAVED ITEMS"
          title="My Wishlist"
          description="Save your favourite styles and come back to them anytime."
          count={wishlist.length}
        />

      </div>

      {wishlist.length > 0 ? (

        <section className="product-grid">

          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              setPage={setPage}
              addToWishlist={
                handleWishlist
              }
              addToCart={addToCart}
            />
          ))}

        </section>

      ) : (

        <div className="empty-wishlist">

          <div className="empty-heart">
            ♡
          </div>

          <h2>
            Your wishlist is empty
          </h2>

          <p>
            Save your favourite items here.
          </p>

          <button
            onClick={() =>
              setPage("products")
            }
          >
            Explore Products
          </button>

        </div>

      )}

    </main>
  );
}

export default Wishlist;