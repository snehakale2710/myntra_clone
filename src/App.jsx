import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProfileCard from "./components/ProfileCard";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";

import {
  getUserData,
  saveUserData,
} from "./utils/userStorage";

import "./App.css";

function App() {
  // ==========================================
  // GET PAGE FROM URL HASH
  // ==========================================

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
      "forgot-password",
    ].includes(page)
      ? page
      : "home";
  };

  // ==========================================
  // LOGIN STATE
  // ==========================================

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  // ==========================================
  // CURRENT PAGE
  // ==========================================

  const [page, setPage] = useState(() =>
    localStorage.getItem("loggedIn") === "true"
      ? getPageFromHash()
      : "login"
  );

  // ==========================================
  // SEARCH & CATEGORY
  // ==========================================

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  // ==========================================
  // CART & WISHLIST
  // ==========================================

  const [cart, setCart] = useState(() =>
    getUserData("cart", [])
  );

  const [wishlist, setWishlist] = useState(() =>
    getUserData("wishlist", [])
  );

  // ==========================================
  // PAGE HISTORY
  // ==========================================

  const [pageHistory, setPageHistory] = useState(() => {
    if (
      localStorage.getItem("loggedIn") !== "true"
    ) {
      return [];
    }

    return [getPageFromHash()];
  });

  // ==========================================
  // LOAD USER DATA
  // ==========================================

  useEffect(() => {
    if (isLoggedIn) {
      setCart(getUserData("cart", []));
      setWishlist(getUserData("wishlist", []));
    }
  }, [isLoggedIn]);

  // ==========================================
  // HASH CHANGE
  // ==========================================

  useEffect(() => {
    const onHashChange = () => {
      if (isLoggedIn) {
        const newPage = getPageFromHash();

        setPage(newPage);

        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });
      }
    };

    window.addEventListener(
      "hashchange",
      onHashChange
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        onHashChange
      );
    };
  }, [isLoggedIn]);

  // ==========================================
  // SCROLL TO TOP
  // ==========================================

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [page]);

  // ==========================================
  // NAVIGATION
  // ==========================================

  const navigate = (
    newPage,
    searchValue = "",
    categoryValue = "All"
  ) => {
    setSearchTerm(searchValue);
    setCategory(categoryValue);

    // Don't add duplicate page
    if (newPage === page) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });

      return;
    }

    // Add page to custom history
    setPageHistory((previousHistory) => [
      ...previousHistory,
      newPage,
    ]);

    // Change page
    setPage(newPage);

    // Change URL
    window.history.pushState(
      { page: newPage },
      "",
      `#/${newPage}`
    );

    // Scroll top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  // ==========================================
  // SET PAGE
  // ==========================================

  const handleSetPage = (
    newPage,
    searchValue = "",
    categoryValue = "All"
  ) => {
    navigate(
      newPage,
      searchValue,
      categoryValue
    );
  };

  // ==========================================
  // LOGIN
  // ==========================================

  const handleLogin = () => {
    localStorage.setItem(
      "loggedIn",
      "true"
    );

    setIsLoggedIn(true);

    setPage("home");

    setPageHistory(["home"]);

    window.history.replaceState(
      { page: "home" },
      "",
      "#/home"
    );

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  // ==========================================
  // REGISTER SUCCESS
  // ==========================================

  const handleRegisterSuccess = () => {
    localStorage.setItem(
      "loggedIn",
      "true"
    );

    setIsLoggedIn(true);

    setPage("home");

    setPageHistory(["home"]);

    window.history.replaceState(
      { page: "home" },
      "",
      "#/home"
    );

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  // ==========================================
  // LOGOUT
  // ==========================================

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");

    setIsLoggedIn(false);

    setPage("login");

    setPageHistory([]);

    setSearchTerm("");
    setCategory("All");

    setCart([]);
    setWishlist([]);

    window.history.replaceState(
      null,
      "",
      "#/login"
    );

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  // ==========================================
  // BACK BUTTON
  // ==========================================

  const handleBack = () => {
    if (pageHistory.length <= 1) {
      return;
    }

    const updatedHistory =
      pageHistory.slice(0, -1);

    const previousPage =
      updatedHistory[
        updatedHistory.length - 1
      ];

    setPageHistory(updatedHistory);

    setPage(previousPage);

    window.history.replaceState(
      { page: previousPage },
      "",
      `#/${previousPage}`
    );

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  // ==========================================
  // ADD TO CART
  // ==========================================

  const addToCart = (product) => {
    const currentCart =
      getUserData("cart", []);

    const existing =
      currentCart.find(
        (item) =>
          item.id === product.id
      );

    const updatedCart = existing
      ? currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  (item.quantity || 1) + 1,
              }
            : item
        )
      : [
          ...currentCart,
          {
            ...product,
            quantity: 1,
          },
        ];

    saveUserData(
      "cart",
      updatedCart
    );

    setCart(updatedCart);
  };

  // ==========================================
  // ADD TO WISHLIST
  // ==========================================

  const addToWishlist = (product) => {
    const currentWishlist =
      getUserData("wishlist", []);

    const exists =
      currentWishlist.some(
        (item) =>
          item.id === product.id
      );

    const updatedWishlist = exists
      ? currentWishlist.filter(
          (item) =>
            item.id !== product.id
        )
      : [
          ...currentWishlist,
          product,
        ];

    saveUserData(
      "wishlist",
      updatedWishlist
    );

    setWishlist(updatedWishlist);
  };

  // ==========================================
  // RENDER PAGE
  // ==========================================

  const renderPage = () => {
    // LOGIN
    if (page === "login") {
      return (
        <Login
          setPage={handleSetPage}
          setIsLoggedIn={handleLogin}
        />
      );
    }

    // REGISTER
    if (page === "register") {
      return (
        <Register
          setPage={handleSetPage}
          setIsLoggedIn={handleRegisterSuccess}
        />
      );
    }

    // FORGOT PASSWORD
    if (page === "forgot-password") {
      return (
        <ForgotPassword
          setPage={handleSetPage}
        />
      );
    }

    // PROTECT OTHER PAGES
    if (!isLoggedIn) {
      return (
        <Login
          setPage={handleSetPage}
          setIsLoggedIn={handleLogin}
        />
      );
    }

    // ========================================
    // AUTHENTICATED PAGES
    // ========================================

    switch (page) {
      case "home":
        return (
          <Home
            setPage={handleSetPage}
            navigate={navigate}
            addToWishlist={addToWishlist}
            addToCart={addToCart}
          />
        );

      case "products":
        return (
          <Products
            setPage={handleSetPage}
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
            setPage={handleSetPage}
            addToWishlist={addToWishlist}
            addToCart={addToCart}
          />
        );

      case "wishlist":
        return (
          <Wishlist
            setPage={handleSetPage}
            addToWishlist={addToWishlist}
            addToCart={addToCart}
          />
        );

      case "cart":
        return (
          <Cart
            cart={cart}
            setCart={setCart}
            setPage={handleSetPage}
            addToWishlist={addToWishlist}
          />
        );

      case "checkout":
        return (
          <Checkout
            cart={cart}
            setPage={handleSetPage}
          />
        );

      case "payment":
        return (
          <Payment
            setPage={handleSetPage}
            setCart={setCart}
          />
        );

      case "orders":
        return (
          <Orders
            setPage={handleSetPage}
          />
        );

      case "profile":
        return (
          <ProfileCard
            setPage={handleSetPage}
            onLogout={handleLogout}
          />
        );

      default:
        return (
          <Home
            setPage={handleSetPage}
            navigate={navigate}
            addToWishlist={addToWishlist}
            addToCart={addToCart}
          />
        );
    }
  };

  // ==========================================
  // COUNTS
  // ==========================================

  const cartCount = cart.length;

  const wishlistCount =
    wishlist.length;

  // ==========================================
  // MAIN UI
  // ==========================================

  return (
    <div className="app">

      {/* NAVBAR */}
      {isLoggedIn && (
        <Navbar
          setPage={handleSetPage}
          cartCount={cartCount}
          wishlistCount={wishlistCount}
          onSearch={setSearchTerm}
          currentPage={page}
          currentCategory={category}
          navigate={navigate}
          onBack={handleBack}
          canGoBack={
            pageHistory.length > 1
          }
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