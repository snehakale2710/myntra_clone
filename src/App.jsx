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
  const [page, setPage] = useState(
    localStorage.getItem("loggedIn") === "true"
      ? "home"
      : "login"
  );

  const [searchTerm, setSearchTerm] = useState("");

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  const loggedIn =
    localStorage.getItem("loggedIn") === "true";

  // =========================
  // ADD TO CART
  // =========================

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

    alert("Product added to bag!");
  };

  // =========================
  // ADD / REMOVE WISHLIST
  // =========================

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

  // =========================
  // PAGE RENDER
  // =========================

  const renderPage = () => {
    if (page === "login") {
      return <Login setPage={setPage} />;
    }

    if (page === "register") {
      return <Register setPage={setPage} />;
    }

    if (!loggedIn) {
      return <Login setPage={setPage} />;
    }

    switch (page) {
      case "home":
        return (
          <Home
            setPage={setPage}
            addToWishlist={addToWishlist}
            addToCart={addToCart}
          />
        );

      case "products":
        return (
          <Products
            setPage={setPage}
            searchTerm={searchTerm}
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

  return (
    <div className="app">

      {loggedIn && (
        <Navbar
          setPage={setPage}
          cartCount={cart.reduce(
            (sum, item) =>
              sum + (item.quantity || 1),
            0
          )}
          wishlistCount={wishlist.length}
          onSearch={setSearchTerm}
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