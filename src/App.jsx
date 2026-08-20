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
     CURRENT USER
  ========================= */

  const getCurrentUser = () => {
    return JSON.parse(
      localStorage.getItem("currentUser")
    );
  };

  const currentUser = getCurrentUser();

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
     USER STORAGE KEY
  ========================= */

  const getUserKey = (key) => {
    const user = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (!user || !user.email) {
      return key;
    }

    return `${key}_${user.email.toLowerCase()}`;
  };

  /* =========================
     CART
  ========================= */

  const [cart, setCart] = useState(() => {
    const key = getUserKey("cart");

    return (
      JSON.parse(
        localStorage.getItem(key)
      ) || []
    );
  });

  /* =========================
     WISHLIST
  ========================= */

  const [wishlist, setWishlist] = useState(() => {
    const key = getUserKey("wishlist");

    return (
      JSON.parse(
        localStorage.getItem(key)
      ) || []
    );
  });

  /* =========================
     LOGIN
  ========================= */

  const loggedIn =
    localStorage.getItem("loggedIn") === "true";

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
     ADD TO CART
  ========================= */

  const addToCart = (product) => {
    const user = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (!user || !user.email) {
      setPage("login");
      return;
    }

    const cartKey =
      `cart_${user.email.toLowerCase()}`;

    const currentCart =
      JSON.parse(
        localStorage.getItem(cartKey)
      ) || [];

    const existing = currentCart.find(
      (item) =>
        item.id === product.id &&
        item.size === product.size
    );

    let updatedCart;

    if (existing) {
      updatedCart = currentCart.map(
        (item) =>
          item.id === product.id &&
          item.size === product.size
            ? {
                ...item,
                quantity:
                  (item.quantity || 1) + 1,
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
      cartKey,
      JSON.stringify(updatedCart)
    );

    setCart(updatedCart);
  };

  /* =========================
     ADD / REMOVE WISHLIST
  ========================= */

  const addToWishlist = (product) => {
    const user = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (!user || !user.email) {
      setPage("login");
      return;
    }

    const wishlistKey =
      `wishlist_${user.email.toLowerCase()}`;

    const currentWishlist =
      JSON.parse(
        localStorage.getItem(wishlistKey)
      ) || [];

    const exists =
      currentWishlist.some(
        (item) =>
          item.id === product.id
      );

    let updatedWishlist;

    if (exists) {
      updatedWishlist =
        currentWishlist.filter(
          (item) =>
            item.id !== product.id
        );
    } else {
      updatedWishlist = [
        ...currentWishlist,
        product,
      ];
    }

    localStorage.setItem(
      wishlistKey,
      JSON.stringify(updatedWishlist)
    );

    setWishlist(updatedWishlist);
  };

  /* =========================
     PAGE RENDER
  ========================= */

  const renderPage = () => {
    /* LOGIN */

    if (page === "login") {
      return (
        <Login
          setPage={setPage}
        />
      );
    }

    /* REGISTER */

    if (page === "register") {
      return (
        <Register
          setPage={setPage}
        />
      );
    }

    /* NOT LOGGED IN */

    if (!loggedIn) {
      return (
        <Login
          setPage={setPage}
        />
      );
    }

    /* =========================
       HOME
    ========================= */

    switch (page) {
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
          />
        );

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
     BAG COUNT
  ========================= */

  const cartCount = cart.length;

  /* =========================
     WISHLIST COUNT
  ========================= */

  const wishlistCount =
    wishlist.length;

  return (
    <div className="app">

      {loggedIn && (
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

      <main>
        {renderPage()}
      </main>

      {loggedIn && <Footer />}

    </div>
  );
}

export default App;