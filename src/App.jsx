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

import { getUserData, saveUserData } from "./utils/userStorage";

import "./App.css";

function App() {
  const getPageFromHash = () => {
    const page = window.location.hash.replace("#/", "");
    return [
      "home", "products", "details", "wishlist", "cart",
      "checkout", "payment", "orders", "profile",
    ].includes(page) ? page : "home";
  };

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  const [page, setPage] = useState(() =>
    localStorage.getItem("loggedIn") === "true" ? getPageFromHash() : "login"
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  // per-user cart/wishlist, falls back to [] if not logged in yet
  const [cart, setCart] = useState(() => getUserData("cart", []));
  const [wishlist, setWishlist] = useState(() => getUserData("wishlist", []));

  // when login state flips to true, (re)load this user's own cart/wishlist
  useEffect(() => {
    if (isLoggedIn) {
      setCart(getUserData("cart", []));
      setWishlist(getUserData("wishlist", []));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const onHashChange = () => {
      if (isLoggedIn) {
        setPage(getPageFromHash());
        setTimeout(() => window.scrollTo(0, 0), 0);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn && window.location.hash !== `#/${page}`) {
      window.history.replaceState(null, "", `#/${page}`);
    }
  }, [isLoggedIn, page]);

  useEffect(() => {
    setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: "instant" }), 0);
  }, [page]);

  const navigate = (newPage, searchValue = "", categoryValue = "All") => {
    setSearchTerm(searchValue);
    setCategory(categoryValue);
    setPage(newPage);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const handleLogin = () => {
    localStorage.setItem("loggedIn", "true");
    setIsLoggedIn(true);
    setPage("home");
    window.history.replaceState(null, "", "#/home");
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");

    setIsLoggedIn(false);
    setPage("login");
    setSearchTerm("");
    setCategory("All");
    setCart([]);
    setWishlist([]);

    window.scrollTo(0, 0);
  };

  const addToCart = (product) => {
    const currentCart = getUserData("cart", []);
    const existing = currentCart.find((item) => item.id === product.id);

    const updatedCart = existing
      ? currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      : [...currentCart, { ...product, quantity: 1 }];

    saveUserData("cart", updatedCart);
    setCart(updatedCart);
  };

  const addToWishlist = (product) => {
    const currentWishlist = getUserData("wishlist", []);
    const exists = currentWishlist.some((item) => item.id === product.id);

    const updatedWishlist = exists
      ? currentWishlist.filter((item) => item.id !== product.id)
      : [...currentWishlist, product];

    saveUserData("wishlist", updatedWishlist);
    setWishlist(updatedWishlist);
  };

  const renderPage = () => {
    if (page === "login") {
      return <Login setPage={setPage} setIsLoggedIn={handleLogin} />;
    }
    if (page === "register") {
      return <Register setPage={setPage} />;
    }
    if (!isLoggedIn) {
      return <Login setPage={setPage} setIsLoggedIn={handleLogin} />;
    }

    switch (page) {
      case "home":
        return <Home setPage={setPage} navigate={navigate} addToWishlist={addToWishlist} addToCart={addToCart} />;
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
        return <ProductDetails setPage={setPage} addToWishlist={addToWishlist} addToCart={addToCart} />;
      case "wishlist":
        return <Wishlist setPage={setPage} addToWishlist={addToWishlist} addToCart={addToCart} />;
      case "cart":
        return <Cart cart={cart} setCart={setCart} setPage={setPage} />;
      case "checkout":
        return <Checkout setPage={setPage} />;
      case "payment":
        return <Payment setPage={setPage} setCart={setCart} />;
      case "orders":
        return <Orders setPage={setPage} />;
      case "profile":
        return <ProfileCard setPage={setPage} onLogout={handleLogout} />;
      default:
        return <Home setPage={setPage} navigate={navigate} addToWishlist={addToWishlist} addToCart={addToCart} />;
    }
  };

  const cartCount = cart.length;
  const wishlistCount = wishlist.length;

  return (
    <div className="app">
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
      <main>{renderPage()}</main>
      {isLoggedIn && <Footer />}
    </div>
  );
}

export default App;