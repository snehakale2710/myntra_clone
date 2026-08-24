import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Home.css";

function Home({
  setPage,
  navigate,
  addToWishlist,
  addToCart
}) {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow eyebrow-light">
            Autumn / Winter 2026
          </p>

          <h1>
            Clothing built for how you actually live
          </h1>

          <span>
            Considered pieces, honest pricing, and fabrics that
            hold up. No noise — just clothes worth keeping.
          </span>

          <button
            onClick={() => navigate("products", "", "All")}
          >
            Shop the collection
          </button>

        </div>

      </section>

      {/* Trending Products */}
      <section className="home-section">

        <div className="section-heading">

          <p className="eyebrow">
            Trending now
          </p>

          <h2>
            What everyone's adding to bag
          </h2>

        </div>

        <div className="product-grid">

          {products
            .slice(0, 8)
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                setPage={setPage}
                addToWishlist={addToWishlist}
                addToCart={addToCart}
              />
            ))}

        </div>

      </section>

      {/* Service / Promise Section */}
      <section className="promise-strip">

        <div>
          <strong>
            Free shipping
          </strong>

          <span>
            On orders above ₹999
          </span>
        </div>

        <div>
          <strong>
            14-day returns
          </strong>

          <span>
            No questions asked
          </span>
        </div>

        <div>
          <strong>
            Secure checkout
          </strong>

          <span>
            100% protected payments
          </span>
        </div>

      </section>

    </div>
  );
}

export default Home;