import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Home.css";

const categories = [
  {
    name: "Men",
    image:
      "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=500"
  },
  {
    name: "Women",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500"
  },
  {
    name: "Kids",
    image:
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500"
  },
  {
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500"
  }
];

function Home({
  setPage,
  navigate,
  addToWishlist,
  addToCart
}) {

  return (
    <div className="home">

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

      <section className="home-section">

        <div className="section-heading">
          <p className="eyebrow">Trending now</p>
          <h2>What everyone's adding to bag</h2>
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

        <div className="section-heading">
          <p className="eyebrow">Browse</p>
          <h2>Shop by category</h2>
        </div>

        <div className="category-grid">

          {categories.map((cat) => (
            <button
              type="button"
              key={cat.name}
              className="category-tile"
              onClick={() => navigate("products", "", cat.name)}
            >
              <img src={cat.image} alt={cat.name} loading="lazy" />
              <div className="category-tile-label">
                <h3>{cat.name}</h3>
                <span>Shop now →</span>
              </div>
            </button>
          ))}

        </div>

      </section>

      <section className="promise-strip">
        <div>
          <strong>Free shipping</strong>
          <span>On orders above ₹999</span>
        </div>
        <div>
          <strong>14-day returns</strong>
          <span>No questions asked</span>
        </div>
        <div>
          <strong>Secure checkout</strong>
          <span>100% protected payments</span>
        </div>
      </section>

    </div>
  );
}

export default Home;
