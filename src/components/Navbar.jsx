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

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [searchValue, setSearchValue] =
    useState("");


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


  return (
    <>
    <header className="navbar">

      <div className="navbar-inner">


        {/* ==================================
            LOGO
        ================================== */}

        <button
          className="logo"
          onClick={() => {

            setPage("home");

            setMobileMenu(false);

          }}
        >
          STYLE<span>HUB</span>
        </button>


        {/* ==================================
            DESKTOP NAVIGATION
        ================================== */}

        <nav className="nav-links">

          <button
            className={
              currentPage === "home"
                ? "active"
                : ""
            }
            onClick={() =>
              setPage("home")
            }
          >
            Home
          </button>


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


        {/* ==================================
            SEARCH
        ================================== */}

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
            >
              ×
            </button>

          )}

        </div>


        {/* ==================================
            ACTIONS
        ================================== */}

        <div className="navbar-actions">


          {/* PROFILE */}

          <button
            className={
              currentPage === "profile"
                ? "nav-action active-action"
                : "nav-action"
            }
            onClick={() =>
              setPage("profile")
            }
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
              ${
                wishlistCount > 0
                  ? "wishlist-filled"
                  : ""
              }
              ${
                currentPage === "wishlist"
                  ? "active-action"
                  : ""
              }
            `}
            onClick={() =>
              setPage("wishlist")
            }
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
              ${
                currentPage === "cart"
                  ? "active-action"
                  : ""
              }
            `}
            onClick={() =>
              setPage("cart")
            }
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


        {/* ==================================
            MOBILE MENU BUTTON
        ================================== */}

        <button
          className="mobile-menu-button"
          onClick={() =>
            setMobileMenu(!mobileMenu)
          }
        >
          {mobileMenu ? "×" : "☰"}
        </button>

      </div>


      {/* ====================================
          MOBILE MENU
      ==================================== */}

      {mobileMenu && (

        <div className="mobile-menu">


          {/* MOBILE BACK */}

          {canGoBack && (

            <button
              className="mobile-back-button"
              onClick={() => {

                onBack();

                setMobileMenu(false);

              }}
            >
              ← Previous Page
            </button>

          )}


          <button
            className={
              currentPage === "home"
                ? "mobile-active"
                : ""
            }
            onClick={() => {

              setPage("home");

              setMobileMenu(false);

            }}
          >
            Home
          </button>


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


          <button
            onClick={() => {

              setPage("wishlist");

              setMobileMenu(false);

            }}
          >
            ♥ Wishlist
          </button>


          <button
            onClick={() => {

              setPage("cart");

              setMobileMenu(false);

            }}
          >
            🛍 Bag
          </button>


          <button
            onClick={() => {

              setPage("profile");

              setMobileMenu(false);

            }}
          >
            ♙ Profile
          </button>

        </div>

      )}

    </header>


    {/* ==================================
        BACK BAR — sits below the navbar,
        not inside it
    ================================== */}

    {canGoBack && (

      <div className="below-navbar-bar">

        <button
          className="below-navbar-back-button"
          onClick={onBack}
          title="Go to previous page"
          aria-label="Go to previous page"
        >
          ← Back
        </button>

      </div>

    )}

    </>
  );
}

export default Navbar;