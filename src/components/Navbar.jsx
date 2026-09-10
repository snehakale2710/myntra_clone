import React, { useState } from "react";
import "./Navbar.css";

function Navbar({
  setPage,
  cartCount,
  wishlistCount,
  onSearch,
  currentPage,
  currentCategory,
  navigate,
  onBack,
  canGoBack,
}) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // ==========================================
  // SEARCH
  // ==========================================

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearchValue(value);

    onSearch(value);

    navigate(
      "products",
      value,
      "All"
    );
  };

  // ==========================================
  // CLEAR SEARCH
  // ==========================================

  const clearSearch = () => {
    setSearchValue("");

    onSearch("");

    navigate(
      "products",
      "",
      "All"
    );
  };

  // ==========================================
  // CATEGORY
  // ==========================================

  const goCategory = (category) => {
    setSearchValue("");

    onSearch("");

    navigate(
      "products",
      "",
      category
    );

    setMobileMenu(false);
  };

  // ==========================================
  // HOME
  // ==========================================

  const goHome = () => {
    setPage("home");
    setMobileMenu(false);
  };

  // ==========================================
  // PROFILE
  // ==========================================

  const goProfile = () => {
    setPage("profile");
    setMobileMenu(false);
  };

  // ==========================================
  // WISHLIST
  // ==========================================

  const goWishlist = () => {
    setPage("wishlist");
    setMobileMenu(false);
  };

  // ==========================================
  // CART
  // ==========================================

  const goCart = () => {
    setPage("cart");
    setMobileMenu(false);
  };

  // ==========================================
  // BACK
  // ==========================================

  const handleBack = () => {
    if (onBack) {
      onBack();
    }

    setMobileMenu(false);
  };

  return (
    <>
      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className="navbar">

        <div className="navbar-inner">

          {/* =================================================
              LOGO
          ================================================= */}

          <button
            className="logo"
            onClick={goHome}
          >
            STYLE<span>HUB</span>
          </button>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="nav-links">

            {/* HOME */}

            <button
              className={
                currentPage === "home"
                  ? "active"
                  : ""
              }
              onClick={goHome}
            >
              Home
            </button>


            {/* MEN */}

            <button
              className={
                currentPage === "products" &&
                  currentCategory === "Men"
                  ? "active"
                  : ""
              }
              onClick={() =>
                goCategory("Men")
              }
            >
              Men
            </button>


            {/* WOMEN */}

            <button
              className={
                currentPage === "products" &&
                  currentCategory === "Women"
                  ? "active"
                  : ""
              }
              onClick={() =>
                goCategory("Women")
              }
            >
              Women
            </button>


            {/* KIDS */}

            <button
              className={
                currentPage === "products" &&
                  currentCategory === "Kids"
                  ? "active"
                  : ""
              }
              onClick={() =>
                goCategory("Kids")
              }
            >
              Kids
            </button>


            {/* BEAUTY */}

            <button
              className={
                currentPage === "products" &&
                  currentCategory === "Beauty"
                  ? "active"
                  : ""
              }
              onClick={() =>
                goCategory("Beauty")
              }
            >
              Beauty
            </button>


            {/* ACCESSORIES */}

            <button
              className={
                currentPage === "products" &&
                  currentCategory === "Accessories"
                  ? "active"
                  : ""
              }
              onClick={() =>
                goCategory("Accessories")
              }
            >
              Accessories
            </button>

          </nav>


          {/* =================================================
              SEARCH
          ================================================= */}

          <div className="navbar-search">

            <span className="search-icon">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search for products, brands and more"
              value={searchValue}
              onChange={handleSearch}
            />

            {searchValue && (
              <button
                className="search-clear"
                onClick={clearSearch}
                aria-label="Clear search"
              >
                ×
              </button>
            )}

          </div>


          {/* =================================================
              ACTIONS
          ================================================= */}

          <div className="navbar-actions">

            {/* PROFILE */}

            <button
              className={
                currentPage === "profile"
                  ? "nav-action active-action"
                  : "nav-action"
              }
              onClick={goProfile}
            >

              <span className="nav-action-icon">
                ♙
              </span>

              <span className="nav-action-label">
                Profile
              </span>

            </button>


            {/* WISHLIST */}

            <button
              className={`
                nav-action
                wishlist-nav
                ${wishlistCount > 0
                  ? "wishlist-filled"
                  : ""
                }
                ${currentPage === "wishlist"
                  ? "active-action"
                  : ""
                }
              `}
              onClick={goWishlist}
            >

              <span className="nav-action-icon">

                {wishlistCount > 0
                  ? "♥"
                  : "♡"}

              </span>

              <span className="nav-action-label">
                Wishlist
              </span>


              {wishlistCount > 0 && (
                <span className="nav-count">
                  {wishlistCount}
                </span>
              )}

            </button>


            {/* BAG */}

            <button
              className={`
                nav-action
                ${currentPage === "cart"
                  ? "active-action"
                  : ""
                }
              `}
              onClick={goCart}
            >

              <span className="nav-action-icon">
                🛍
              </span>

              <span className="nav-action-label">
                Bag
              </span>


              {cartCount > 0 && (
                <span className="nav-count">
                  {cartCount}
                </span>
              )}

            </button>

          </div>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            className="mobile-menu-button"
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            aria-label="Toggle menu"
          >
            {mobileMenu ? "×" : "☰"}
          </button>

        </div>


        {/* =================================================
            MOBILE MENU
        ================================================= */}

        {mobileMenu && (

          <div className="mobile-menu">

            {/* MOBILE BACK */}

            {canGoBack && (

              <button
                className="mobile-back-button"
                onClick={handleBack}
                title="Go to previous page"
                aria-label="Go to previous page"
              >
                <span>←</span>
              </button>

            )}


            {/* HOME */}

            <button
              className={
                currentPage === "home"
                  ? "mobile-active"
                  : ""
              }
              onClick={goHome}
            >
              Home
            </button>


            {/* CATEGORIES */}

            {[
              "Men",
              "Women",
              "Kids",
              "Beauty",
              "Accessories",
            ].map((item) => (

              <button
                key={item}
                className={
                  currentPage === "products" &&
                    currentCategory === item
                    ? "mobile-active"
                    : ""
                }
                onClick={() =>
                  goCategory(item)
                }
              >
                {item}
              </button>

            ))}


            {/* WISHLIST */}

            <button
              onClick={goWishlist}
            >
              ♥ Wishlist
            </button>


            {/* BAG */}

            <button
              onClick={goCart}
            >
              🛍 Bag
            </button>


            {/* PROFILE */}

            <button
              onClick={goProfile}
            >
              ♙ Profile
            </button>

          </div>

        )}

      </header>


      {/* =================================================
          DESKTOP / TABLET BACK BUTTON
      ================================================= */}

      {canGoBack && currentPage !== "home" && (
        <button
          className="below-navbar-back-button"
          onClick={handleBack}
          title="Go to previous page"
          aria-label="Go to previous page"
        >
          ←
        </button>
      )}

    </>
  );
}

export default Navbar;