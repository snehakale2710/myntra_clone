import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Home.css";

function Home({
  setPage,
  addToWishlist,
  addToCart
}) {

  return (
    <div className="home">

      <section className="hero">

        <div className="hero-content">

          <p>NEW COLLECTION 2026</p>

          <h1>
            Elevate Your
            <br />
            Everyday Style
          </h1>

          <span>
            Discover fashion made for you.
          </span>

          <button
            onClick={() => setPage("products")}
          >
            SHOP NOW
          </button>

        </div>

      </section>

      <section className="home-section">

        <div className="section-heading">
          <h2>TRENDING NOW</h2>
          <p>Explore our latest collection</p>
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

      <section className="categories">

        <h2>SHOP BY CATEGORY</h2>

        <div className="category-grid">

          <div
            onClick={() => setPage("products")}
          >
            <span>👔</span>
            <h3>MEN</h3>
          </div>

          <div
            onClick={() => setPage("products")}
          >
            <span>👗</span>
            <h3>WOMEN</h3>
          </div>

          <div
            onClick={() => setPage("products")}
          >
            <span>🧒</span>
            <h3>KIDS</h3>
          </div>

          <div
            onClick={() => setPage("products")}
          >
            <span>👟</span>
            <h3>SHOES</h3>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;