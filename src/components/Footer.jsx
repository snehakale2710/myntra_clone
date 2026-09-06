import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";

import "./Footer.css";

function Footer({ setPage }) {

  // =========================================================
  // NAVIGATION
  // =========================================================

  const goToPage = (
    page,
    searchValue = "",
    categoryValue = "All"
  ) => {
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

  const goToCategory = (categoryName) => {
    goToPage(
      "products",
      "",
      categoryName
    );
  };

  return (
    <footer className="footer">

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="footer-main">

        <div className="footer-container">

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="footer-brand">

            <button
              type="button"
              className="footer-logo-button"
              onClick={() => goToPage("home")}
              aria-label="Go to STYLEHUB home"
            >
              <span className="footer-logo">
                STYLE<span>HUB</span>
              </span>
            </button>

            <p className="footer-description">
              Discover effortless fashion for every day.
              Simple styles, modern looks, and pieces made
              to fit your lifestyle.
            </p>

            {/* SOCIAL MEDIA */}

            <div className="footer-socials">

              <a
                href="#"
                className="footer-social"
                aria-label="Instagram"
                onClick={(e) => e.preventDefault()}
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="footer-social"
                aria-label="Facebook"
                onClick={(e) => e.preventDefault()}
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="footer-social"
                aria-label="Pinterest"
                onClick={(e) => e.preventDefault()}
              >
                <FaPinterestP />
              </a>

            </div>

          </div>


          {/* =================================================
              SHOP
          ================================================= */}

          <div className="footer-column">

            <h3>SHOP</h3>

            <button
              type="button"
              onClick={() => goToPage("products")}
            >
              All Products
            </button>

            <button
              type="button"
              onClick={() => goToCategory("Men")}
            >
              Men
            </button>

            <button
              type="button"
              onClick={() => goToCategory("Women")}
            >
              Women
            </button>

            <button
              type="button"
              onClick={() => goToCategory("Kids")}
            >
              Kids
            </button>

            <button
              type="button"
              onClick={() => goToCategory("Beauty")}
            >
              Beauty
            </button>

            <button
              type="button"
              onClick={() => goToCategory("Accessories")}
            >
              Accessories
            </button>

          </div>


          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div className="footer-column">

            <h3>QUICK LINKS</h3>

            <button
              type="button"
              onClick={() => goToPage("home")}
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => goToPage("products")}
            >
              Shop
            </button>

            <button
              type="button"
              onClick={() => goToPage("wishlist")}
            >
              Wishlist
            </button>

            <button
              type="button"
              onClick={() => goToPage("cart")}
            >
              Shopping Bag
            </button>

            <button
              type="button"
              onClick={() => goToPage("orders")}
            >
              My Orders
            </button>

          </div>


          {/* =================================================
              MY STYLEHUB
          ================================================= */}

          <div className="footer-column">

            <h3>MY STYLEHUB</h3>

            <button
              type="button"
              onClick={() => goToPage("profile")}
            >
              My Account
            </button>

            <button
              type="button"
              onClick={() => goToPage("orders")}
            >
              Order History
            </button>

            <button
              type="button"
              onClick={() => goToPage("wishlist")}
            >
              Saved Items
            </button>

            <button
              type="button"
              onClick={() => goToPage("cart")}
            >
              View Bag
            </button>

            <button
              type="button"
              onClick={() => goToPage("profile")}
            >
              Profile
            </button>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM FOOTER
      ===================================================== */}

      <div className="footer-bottom-section">

        <div className="footer-bottom">

          <p className="footer-copyright">
            © {new Date().getFullYear()} STYLEHUB.
            <span> All rights reserved.</span>
          </p>


          <div className="footer-bottom-links">

            <button
              type="button"
              onClick={() => goToPage("home")}
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => goToPage("products")}
            >
              Shop
            </button>

            <button
              type="button"
              onClick={() => goToPage("wishlist")}
            >
              Wishlist
            </button>

            <button
              type="button"
              onClick={() => goToPage("cart")}
            >
              Bag
            </button>

            <button
              type="button"
              onClick={() => goToPage("profile")}
            >
              Account
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;