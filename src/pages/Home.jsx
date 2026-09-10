import React, { useEffect, useMemo, useState } from "react";
import {
  FaArrowRight,
  FaTruck,
  FaUndoAlt,
  FaShieldAlt,
} from "react-icons/fa";

import { API_BASE_URL } from "../utils/api";
import ProductCard from "../components/ProductCard";

import "./Home.css";

function Home({
  setPage,
  navigate,
  addToWishlist,
  addToCart,
  wishlist,
}) {

  // =========================================================
  // PRODUCTS
  // Fetched from the same backend endpoint as Products.jsx,
  // so Home / Products / ProductDetails always show the
  // same catalog instead of drifting out of sync.
  // =========================================================

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${API_BASE_URL}/api/products`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data);
      } catch (err) {
        console.error("Home product fetch error:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // =========================================================
  // NAVIGATION
  // =========================================================

  const goTo = (
    page,
    searchValue = "",
    categoryValue = "All"
  ) => {

    if (navigate) {
      navigate(
        page,
        searchValue,
        categoryValue
      );

      return;
    }

    if (setPage) {
      setPage(
        page,
        searchValue,
        categoryValue
      );
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };


  const goToCategory = (category) => {
    goTo(
      "products",
      "",
      category
    );
  };


  // =========================================================
  // CATEGORY DATA
  // =========================================================

  const categories = useMemo(() => {

    const categoryNames = [
      "Men",
      "Women",
      "Kids",
      "Beauty",
      "Accessories",
    ];

    return categoryNames.map((category) => {

      const product = products.find(
        (item) =>
          item.category?.toLowerCase() ===
          category.toLowerCase()
      );

      return {
        name: category,
        image: product?.image || "",
      };

    });

  }, [products]);


  // =========================================================
  // TRENDING PRODUCTS
  // Wishlisted products appear first.
  // Most recently wishlisted product appears first.
  // Remaining products are sorted by rating.
  // =========================================================

  const trendingProducts = useMemo(() => {

    const wishlistIds =
      (wishlist || []).map(
        (item) => item.id
      );

    return [...products]
      .sort((a, b) => {

        const aIndex =
          wishlistIds.indexOf(a.id);

        const bIndex =
          wishlistIds.indexOf(b.id);

        if (
          aIndex !== -1 &&
          bIndex !== -1
        ) {
          return bIndex - aIndex;
        }

        if (aIndex !== -1) {
          return -1;
        }

        if (bIndex !== -1) {
          return 1;
        }

        return (
          Number(b.rating || 0) -
          Number(a.rating || 0)
        );

      })
      .slice(0, 10);

  }, [products, wishlist]);


  // =========================================================
  // NEW ARRIVALS
  // Highest IDs = newest products
  // =========================================================

  const newArrivals = useMemo(() => {

    return [...products]
      .sort(
        (a, b) =>
          Number(b.id || 0) -
          Number(a.id || 0)
      )
      .slice(0, 5);

  }, [products]);


  return (

    <main className="home">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="home-hero">

        <div className="home-hero-overlay"></div>

        <div className="home-hero-content">

          <p className="home-eyebrow home-eyebrow-light">
            STYLEHUB / NEW SEASON
          </p>

          <h1>
            Style that fits
            <br />
            <span>your everyday.</span>
          </h1>

          <p className="home-hero-description">
            Discover modern fashion, everyday essentials
            and statement pieces designed for your style.
          </p>

          <div className="home-hero-actions">

            <button
              type="button"
              className="home-primary-button"
              onClick={() =>
                goTo(
                  "products",
                  "",
                  "All"
                )
              }
            >
              SHOP COLLECTION
              <FaArrowRight />
            </button>

            <button
              type="button"
              className="home-secondary-button"
              onClick={() =>
                goToCategory("Women")
              }
            >
              EXPLORE WOMEN
            </button>

          </div>

        </div>


        <div className="hero-season-card">

          <span>
            NEW SEASON
          </span>

          <strong>
            AW
            <br />
            2026
          </strong>

        </div>

      </section>


      {/* =====================================================
          SHOP BY CATEGORY
      ===================================================== */}

      <section className="home-section category-section">

        <div className="home-section-header">

          <div>

            <p className="home-eyebrow">
              SHOP YOUR STYLE
            </p>

            <h2>
              Shop by category
            </h2>

          </div>

          <button
            type="button"
            className="text-link"
            onClick={() =>
              goTo("products")
            }
          >
            View all
            <FaArrowRight />
          </button>

        </div>


        <div className="home-category-grid">

          {categories.map((category) => (

            <button
              type="button"
              className="home-category-card"
              key={category.name}
              onClick={() =>
                goToCategory(category.name)
              }
            >

              <div className="category-image">

                {category.image && (
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                  />
                )}

              </div>

              <div className="category-overlay">

                <div>

                  <h3>
                    {category.name}
                  </h3>

                  <span>
                    Explore collection
                    <FaArrowRight />
                  </span>

                </div>

              </div>

            </button>

          ))}

        </div>

      </section>


      {/* =====================================================
          TRENDING PRODUCTS
      ===================================================== */}

      <section className="home-section trending-section">

        <div className="home-section-header">

          <div>

            <p className="home-eyebrow">
              MOST LOVED
            </p>

            <h2>
              Trending now
            </h2>

            <p className="section-description">
              Styles our customers are loving right now.
            </p>

          </div>

          <button
            type="button"
            className="text-link"
            onClick={() =>
              goTo("products")
            }
          >
            Shop all
            <FaArrowRight />
          </button>

        </div>


        {loading ? (
          <p className="section-description">
            Loading trending styles...
          </p>
        ) : (
          <div className="home-product-grid">

            {trendingProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
                setPage={setPage}
                addToWishlist={addToWishlist}
                addToCart={addToCart}
              />

            ))}

          </div>
        )}

      </section>


      {/* =====================================================
          PROMOTIONAL BANNER
      ===================================================== */}

      <section className="home-promo">

        <div className="home-promo-content">

          <p className="home-eyebrow">
            STYLEHUB EDIT
          </p>

          <h2>
            Everyday pieces.
            <br />
            Effortless style.
          </h2>

          <p>
            Build your wardrobe with versatile
            pieces made for real life.
          </p>

          <button
            type="button"
            onClick={() =>
              goTo("products")
            }
          >
            EXPLORE THE COLLECTION
            <FaArrowRight />
          </button>

        </div>

      </section>


      {/* =====================================================
          WHY STYLEHUB
      ===================================================== */}

      <section className="home-benefits">

        <div className="benefits-heading">

          <p className="home-eyebrow">
            THE STYLEHUB PROMISE
          </p>

          <h2>
            Shopping made simple.
          </h2>

        </div>


        <div className="benefits-grid">

          <div className="benefit-card">

            <div className="benefit-icon">
              <FaTruck />
            </div>

            <div>

              <h3>
                Free shipping
              </h3>

              <p>
                Free delivery on orders above ₹999.
              </p>

            </div>

          </div>


          <div className="benefit-card">

            <div className="benefit-icon">
              <FaUndoAlt />
            </div>

            <div>

              <h3>
                Easy returns
              </h3>

              <p>
                Simple returns within 14 days.
              </p>

            </div>

          </div>


          <div className="benefit-card">

            <div className="benefit-icon">
              <FaShieldAlt />
            </div>

            <div>

              <h3>
                Secure checkout
              </h3>

              <p>
                Your payments are protected.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NEW ARRIVALS
      ===================================================== */}

      <section className="home-section arrivals-section">

        <div className="home-section-header">

          <div>

            <p className="home-eyebrow">
              JUST IN
            </p>

            <h2>
              New arrivals
            </h2>

            <p className="section-description">
              Fresh styles to keep your wardrobe current.
            </p>

          </div>

          <button
            type="button"
            className="text-link"
            onClick={() =>
              goTo("products")
            }
          >
            Discover more
            <FaArrowRight />
          </button>

        </div>


        {loading ? (
          <p className="section-description">
            Loading new arrivals...
          </p>
        ) : (
          <div className="home-product-grid arrivals-grid">

            {newArrivals.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
                setPage={setPage}
                addToWishlist={addToWishlist}
                addToCart={addToCart}
              />

            ))}

          </div>
        )}

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="home-final-cta">

        <p className="home-eyebrow">
          YOUR STYLE. YOUR WAY.
        </p>

        <h2>
          Find something
          <br />
          you'll love.
        </h2>

        <button
          type="button"
          onClick={() =>
            goTo("products")
          }
        >
          START SHOPPING
          <FaArrowRight />
        </button>

      </section>

    </main>
  );
}


export default Home;