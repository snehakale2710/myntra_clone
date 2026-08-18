import React from "react";
import ProductCard from "../components/ProductCard";
import "./Wishlist.css";

function Wishlist({
  setPage,
  addToWishlist,
  addToCart
}) {

  const wishlist =
    JSON.parse(
      localStorage.getItem("wishlist")
    ) || [];

  return (
    <div className="wishlist-page">

      <div className="wishlist-header">
        <h1>My Wishlist</h1>

        <p>
          {wishlist.length} {wishlist.length === 1 ? "item" : "items"} saved
        </p>
      </div>

      {wishlist.length > 0 ? (

        <div className="product-grid">

          {wishlist.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
              setPage={setPage}
              addToWishlist={addToWishlist}
              addToCart={addToCart}
            />

          ))}

        </div>

      ) : (

        <div className="empty-wishlist">

          <div>♡</div>

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
            Explore products
          </button>

        </div>

      )}

    </div>
  );
}

export default Wishlist;