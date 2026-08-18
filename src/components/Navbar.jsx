import React, { useState } from "react";
import "./Navbar.css";

function Navbar({
  setPage,
  cartCount,
  wishlistCount,
  onSearch
}) {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      onSearch(search);
      setPage("products");
    }
  };

  const logout = () => {
    localStorage.removeItem("loggedIn");
    setPage("login");
  };

  const loggedIn =
    localStorage.getItem("loggedIn") === "true";

  return (
    <>
    <div className="announce-bar">
      Free shipping on orders above ₹999 &nbsp;·&nbsp; Easy 14-day returns
    </div>

    <nav className="navbar">

      <div
        className="logo"
        onClick={() => setPage("home")}
      >
        STYLE<span>HUB</span>
      </div>

      <div
        className={`nav-menu ${
          menuOpen ? "show-menu" : ""
        }`}
      >
        <button onClick={() => setPage("home")}>
          HOME
        </button>

        <button
          onClick={() => {
            onSearch("");
            setPage("products");
          }}
        >
          MEN
        </button>

        <button
          onClick={() => {
            onSearch("Women");
            setPage("products");
          }}
        >
          WOMEN
        </button>

        <button
          onClick={() => {
            onSearch("Kids");
            setPage("products");
          }}
        >
          KIDS
        </button>

        <button
          onClick={() => {
            onSearch("");
            setPage("products");
          }}
        >
          PRODUCTS
        </button>
      </div>

      <form
        className="search-box"
        onSubmit={handleSearch}
      >
        <span>🔍</span>

        <input
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </form>

      <div className="nav-actions">

        <button
          className="nav-icon"
          onClick={() => setPage("profile")}
        >
          👤
          <small>Profile</small>
        </button>

        <button
          className="nav-icon"
          onClick={() => setPage("wishlist")}
        >
          ♡
          {wishlistCount > 0 && (
            <b>{wishlistCount}</b>
          )}
          <small>Wishlist</small>
        </button>

        <button
          className="nav-icon"
          onClick={() => setPage("cart")}
        >
          🛍️
          {cartCount > 0 && (
            <b>{cartCount}</b>
          )}
          <small>Bag</small>
        </button>

        {loggedIn && (
          <button
            className="logout-nav"
            onClick={logout}
          >
            Logout
          </button>
        )}
      </div>

      <button
        className="hamburger"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        ☰
      </button>

    </nav>
    </>
  );
}

export default Navbar;