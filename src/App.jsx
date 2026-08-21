import React, { useEffect, useState } from "react";

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
  const getPageFromHash = () => {
    const page = window.location.hash.replace("#/", "");

    return [
      "home",
      "products",
      "details",
      "wishlist",
      "cart",
      "checkout",
      "payment",
      "orders",
      "profile",
    ].includes(page)
      ? page
      : "home";
  };

  /* =========================
     LOGIN STATUS
  ========================= */

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  /* =========================
     PAGE
  ========================= */

  const [page, setPage] = useState(() =>
    localStorage.getItem("loggedIn") === "true"
      ? getPageFromHash()
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
     HASH CHANGE
  ========================= */

  useEffect(() => {
    const onHashChange = () => {
      if (isLoggedIn) {
        const newPage = getPageFromHash();

        setPage(newPage);

        // Scroll to top when hash/page changes
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 0);
      }
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [isLoggedIn]);

  /* =========================
     UPDATE URL
  ========================= */

  useEffect(() => {
    if (
      isLoggedIn &&
      window.location.hash !== `#/${page}`
    ) {
      window.history.replaceState(
        null,
        "",
        `#/${page}`
      );
    }
  }, [isLoggedIn, page]);

  /* =========================
     SCROLL TO TOP
     FOR EVERY PAGE
  ========================= */

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, 0);
  }, [page]);

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

    // Change page
    setPage(newPage);

    // Immediately scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  /* =========================
     LOGIN
  ========================= */

  const handleLogin = () => {
    localStorage.setItem("loggedIn", "true");

    setIsLoggedIn(true);
    setPage("home");

    window.history.replaceState(
      null,
      "",
      "#/home"
    );

    window.scrollTo(0, 0);
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

    window.scrollTo(0, 0);
  };

  /* =========================
     ADD TO CART
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
    /* LOGIN */

    if (page === "login") {
      return (
        <Login
          setPage={setPage}
          setIsLoggedIn={handleLogin}
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

    if (!isLoggedIn) {
      return (
        <Login
          setPage={setPage}
          setIsLoggedIn={handleLogin}
        />
      );
    }

    /* MAIN PAGES */

    switch (page) {
      case "home":
        return (
          <Home
            setPage={setPage}
            navigate={navigate}
            addToWishlist={addToWishlist}
            addToCart={addToCart}
          />
        );

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

      case "details":
        return (
          <ProductDetails
            setPage={setPage}
            addToWishlist={addToWishlist}
            addToCart={addToCart}
          />
        );

      case "wishlist":
        return (
          <Wishlist
            setPage={setPage}
            addToWishlist={addToWishlist}
            addToCart={addToCart}
          />
        );

      case "cart":
        return (
          <Cart
            cart={cart}
            setCart={setCart}
            setPage={setPage}
          />
        );

      case "checkout":
        return (
          <Checkout
            setPage={setPage}
          />
        );

      case "payment":
        return (
          <Payment
            setPage={setPage}
            setCart={setCart}
          />
        );

      case "orders":
        return (
          <Orders
            setPage={setPage}
          />
        );

      case "profile":
        return (
          <ProfileCard
            setPage={setPage}
            onLogout={handleLogout}
          />
        );

      default:
        return (
          <Home
            setPage={setPage}
            navigate={navigate}
            addToWishlist={addToWishlist}
            addToCart={addToCart}
          />
        );
    }
  };

  /* =========================
     COUNTS
  ========================= */

  const cartCount = cart.length;

  const wishlistCount = wishlist.length;

  /* =========================
     APP
  ========================= */

  return (
    <div className="app">

      {/* NAVBAR */}

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

      {/* PAGE */}

      <main>
        {renderPage()}
      </main>

      {/* FOOTER */}

      {isLoggedIn && <Footer />}

    </div>
  );
}

export default App;