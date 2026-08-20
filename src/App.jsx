import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProfileCard from "./components/ProfileCard";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";

import "./App.css";

function App() {
  /* =========================
     LOGIN STATUS
  ========================= */

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  /* =========================
     PAGE
  ========================= */

  const [page, setPage] = useState(
    localStorage.getItem("loggedIn") === "true"
      ? "home"
      : "login"
  );

  /* =========================
     SEARCH
  ========================= */

  const [searchTerm, setSearchTerm] = useState("");

  /* =========================
     CATEGORY
  ========================= */

  const [category, setCategory] = useState("All");

  /* =========================
     CART
  ========================= */

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  /* =========================
     WISHLIST
  ========================= */

  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  /* =========================
     NAVIGATION
  ========================= */

  const navigate = (
    newPage,
    searchValue = "",
    categoryValue = "All"
  ) => {
    setSearchTerm(searchValue);
    setCategory(categoryValue);
    setPage(newPage);
  };

  /* =========================
     LOGIN
  ========================= */

  const handleLogin = () => {
    localStorage.setItem("loggedIn", "true");
    setIsLoggedIn(true);
    setPage("home");
  };

  /* =========================
     LOGOUT
  ========================= */

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");

    setIsLoggedIn(false);
    setPage("login");

    setSearchTerm("");
    setCategory("All");
  };

  /* =========================
     ADD TO CART

     Same product:
     quantity increases

     Bag count:
     remains 1
  ========================= */

  const addToCart = (product) => {
    const currentCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existing = currentCart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existing) {
      updatedCart = currentCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1,
            }
          : item
      );
    } else {
      updatedCart = [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    setCart(updatedCart);
  };

  /* =========================
     ADD / REMOVE WISHLIST
  ========================= */

  const addToWishlist = (product) => {
    const currentWishlist =
      JSON.parse(
        localStorage.getItem("wishlist")
      ) || [];

    const exists = currentWishlist.some(
      (item) => item.id === product.id
    );

    let updatedWishlist;

    if (exists) {
      updatedWishlist = currentWishlist.filter(
        (item) => item.id !== product.id
      );
    } else {
      updatedWishlist = [
        ...currentWishlist,
        product,
      ];
    }

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    setWishlist(updatedWishlist);
  };

  /* =========================
     PAGE RENDER
  ========================= */

  const renderPage = () => {
    /* =========================
       LOGIN
    ========================= */

    if (page === "login") {
      return (
        <Login
          setPage={setPage}
          setIsLoggedIn={handleLogin}
        />
      );
    }

    /* =========================
       REGISTER
    ========================= */

    if (page === "register") {
      return (
        <Register
          setPage={setPage}
        />
      );
    }

    /* =========================
       NOT LOGGED IN
    ========================= */

    if (!isLoggedIn) {
      return (
        <Login
          setPage={setPage}
          setIsLoggedIn={handleLogin}
        />
      );
    }

    /* =========================
       MAIN PAGES
    ========================= */

    switch (page) {
      /* =========================
         HOME
      ========================= */

      case "home":
        return (
          <Home
            setPage={setPage}
            addToWishlist={addToWishlist}
            addToCart={addToCart}
          />
        );

      /* =========================
         PRODUCTS
      ========================= */

      case "products":
        return (
          <Products
            setPage={setPage}
            searchTerm={searchTerm}
            category={category}
            setCategory={setCategory}
            addToWishlist={addToWishlist}
            addToCart={addToCart}
          />
        );

      /* =========================
         PRODUCT DETAILS
      ========================= */

      case "details":
        return (
          <ProductDetails
            setPage={setPage}
            addToWishlist={addToWishlist}
            addToCart={addToCart}
          />
        );

      /* =========================
         WISHLIST
      ========================= */

      case "wishlist":
        return (
          <Wishlist
            setPage={setPage}
            addToWishlist={addToWishlist}
            addToCart={addToCart}
          />
        );

      /* =========================
         CART
      ========================= */

      case "cart":
        return (
          <Cart
            cart={cart}
            setCart={setCart}
            setPage={setPage}
          />
        );

      /* =========================
         CHECKOUT
      ========================= */

      case "checkout":
        return (
          <Checkout
            setPage={setPage}
          />
        );

      /* =========================
         PAYMENT
      ========================= */

      case "payment":
        return (
          <Payment
            setPage={setPage}
            setCart={setCart}
          />
        );

      /* =========================
         ORDERS
      ========================= */

      case "orders":
        return (
          <Orders
            setPage={setPage}
          />
        );

      /* =========================
         PROFILE
      ========================= */

      case "profile":
        return (
          <ProfileCard
            setPage={setPage}
            onLogout={handleLogout}
          />
        );

      /* =========================
         DEFAULT
      ========================= */

      default:
        return (
          <Home
            setPage={setPage}
            addToWishlist={addToWishlist}
            addToCart={addToCart}
          />
        );
    }
  };

  /* =========================
     UNIQUE BAG COUNT

     Example:

     T-shirt x 2

     Bag = 1
  ========================= */

  const cartCount = cart.length;

  /* =========================
     WISHLIST COUNT
  ========================= */

  const wishlistCount = wishlist.length;

  /* =========================
     APP
  ========================= */

  return (
    <div className="app">

      {/* =========================
          NAVBAR
      ========================= */}

      {isLoggedIn && (
        <Navbar
          setPage={setPage}
          cartCount={cartCount}
          wishlistCount={wishlistCount}
          onSearch={setSearchTerm}
          currentPage={page}
          currentCategory={category}
          navigate={navigate}
        />
      )}

      {/* =========================
          PAGE
      ========================= */}

      <main>
        {renderPage()}
      </main>

      {/* =========================
          FOOTER
      ========================= */}

      {isLoggedIn && <Footer />}

    </div>
  );
}

export default App;