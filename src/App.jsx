import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProfileCard from "./components/ProfileCard";
import LoginPromptModal from "./components/LoginPromptModal";

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

// ==========================================
// PAGES A GUEST (NOT LOGGED IN) MAY VIEW
// ==========================================

const GUEST_ALLOWED_PAGES = [
  "home",
  "products",
  "details",
];

// ==========================================
// PAGES THAT ALWAYS REQUIRE LOGIN
// ==========================================

const PROTECTED_PAGES = [
  "cart",
  "wishlist",
  "checkout",
  "payment",
  "orders",
  "profile",
];

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
  // LOGIN / GUEST STATE
  // ==========================================

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  const [isGuest, setIsGuest] = useState(
    localStorage.getItem("guest") === "true"
  );

  // ==========================================
  // LOGIN PROMPT MODAL
  // ==========================================

  const [showLoginPrompt, setShowLoginPrompt] =
    useState(false);

  const [pendingAction, setPendingAction] =
    useState(null);

  // ==========================================
  // CURRENT PAGE
  // ==========================================

  const [page, setPage] = useState(() => {
    if (localStorage.getItem("loggedIn") === "true") {
      return getPageFromHash();
    }

    if (localStorage.getItem("guest") === "true") {
      const hashPage = getPageFromHash();

      return GUEST_ALLOWED_PAGES.includes(hashPage)
        ? hashPage
        : "home";
    }

    return "login";
  });

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
    const loggedIn =
      localStorage.getItem("loggedIn") === "true";
    const guest =
      localStorage.getItem("guest") === "true";

    if (!loggedIn && !guest) {
      return [];
    }

    return [
      loggedIn
        ? getPageFromHash()
        : GUEST_ALLOWED_PAGES.includes(getPageFromHash())
        ? getPageFromHash()
        : "home",
    ];
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
      const newPage = getPageFromHash();

      if (isLoggedIn) {
        setPage(newPage);
      } else if (isGuest) {
        if (PROTECTED_PAGES.includes(newPage)) {
          requireLogin({ type: "page", page: newPage });
        } else {
          setPage(newPage);
        }
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, isGuest]);

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
  // REQUIRE LOGIN (opens the modal)
  // ==========================================

  const requireLogin = (action) => {
    setPendingAction({
      ...action,
      returnPage: page,
    });

    setShowLoginPrompt(true);
  };

  // ==========================================
  // NAVIGATION
  // ==========================================

  const navigate = (
    newPage,
    searchValue = "",
    categoryValue = "All"
  ) => {
    // Block guests (and anonymous users) from protected pages
    if (
      !isLoggedIn &&
      PROTECTED_PAGES.includes(newPage)
    ) {
      requireLogin({
        type: "page",
        page: newPage,
        searchValue,
        categoryValue,
      });
      return;
    }

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
  // RESOLVE PENDING ACTION (after successful auth)
  // ==========================================

  const resolvePendingAction = (action) => {
    if (action.type === "page") {
      setSearchTerm(action.searchValue || "");
      setCategory(action.categoryValue || "All");

      setPage(action.page);

      setPageHistory((previousHistory) => [
        ...previousHistory,
        action.page,
      ]);

      window.history.pushState(
        { page: action.page },
        "",
        `#/${action.page}`
      );

      return;
    }

    if (action.type === "callback") {
      const returnPage = action.returnPage || "home";

      setPage(returnPage);

      window.history.replaceState(
        { page: returnPage },
        "",
        `#/${returnPage}`
      );

      if (typeof action.callback === "function") {
        action.callback();
      }
    }
  };

  // ==========================================
  // CONTINUE AS GUEST
  // ==========================================

  const handleContinueAsGuest = () => {
    localStorage.setItem("guest", "true");

    setIsGuest(true);

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
  // COMPLETE AUTH (shared by Login + Register)
  // ==========================================

  const completeAuth = () => {
    localStorage.setItem("loggedIn", "true");
    localStorage.removeItem("guest");

    setIsGuest(false);
    setIsLoggedIn(true);
    setShowLoginPrompt(false);

    if (pendingAction) {
      resolvePendingAction(pendingAction);
      setPendingAction(null);
    } else {
      setPage("home");
      setPageHistory(["home"]);

      window.history.replaceState(
        { page: "home" },
        "",
        "#/home"
      );
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  // ==========================================
  // LOGIN
  // ==========================================

  const handleLogin = () => {
    completeAuth();
  };

  // ==========================================
  // REGISTER SUCCESS
  // ==========================================

  const handleRegisterSuccess = () => {
    completeAuth();
  };

  // ==========================================
  // LOGOUT
  // ==========================================

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("guest");

    setIsLoggedIn(false);
    setIsGuest(false);

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
          product,
          ...currentWishlist,
        ];

    saveUserData(
      "wishlist",
      updatedWishlist
    );

    setWishlist(updatedWishlist);
  };

  // ==========================================
  // GUARDED VERSIONS
  // (used on guest-accessible pages: Home, Products, ProductDetails)
  // ==========================================

  const guardedAddToCart = (product) => {
    if (!isLoggedIn) {
      requireLogin({
        type: "callback",
        callback: () => addToCart(product),
      });
      return;
    }

    addToCart(product);
  };

  const guardedAddToWishlist = (product) => {
    if (!isLoggedIn) {
      requireLogin({
        type: "callback",
        callback: () => addToWishlist(product),
      });
      return;
    }

    addToWishlist(product);
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
          onGuest={handleContinueAsGuest}
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

    // NEITHER LOGGED IN NOR GUEST -> FORCE LOGIN
    if (!isLoggedIn && !isGuest) {
      return (
        <Login
          setPage={handleSetPage}
          setIsLoggedIn={handleLogin}
          onGuest={handleContinueAsGuest}
        />
      );
    }

    // GUEST TRYING TO LAND DIRECTLY ON A PROTECTED PAGE
    // (e.g. via a bookmarked URL) -> send them to Home
    if (!isLoggedIn && PROTECTED_PAGES.includes(page)) {
      return (
        <Home
          setPage={handleSetPage}
          navigate={navigate}
          addToWishlist={guardedAddToWishlist}
          addToCart={guardedAddToCart}
        />
      );
    }

    // ========================================
    // GUEST-ACCESSIBLE / AUTHENTICATED PAGES
    // ========================================

    switch (page) {
      case "home":
        return (
          <Home
            setPage={handleSetPage}
            navigate={navigate}
            addToWishlist={guardedAddToWishlist}
            addToCart={guardedAddToCart}
          />
        );

      case "products":
        return (
          <Products
            setPage={handleSetPage}
            searchTerm={searchTerm}
            category={category}
            setCategory={setCategory}
            addToWishlist={guardedAddToWishlist}
            addToCart={guardedAddToCart}
          />
        );

      case "details":
        return (
          <ProductDetails
            setPage={handleSetPage}
            addToWishlist={guardedAddToWishlist}
            addToCart={guardedAddToCart}
          />
        );

      case "wishlist":
        return (
          <Wishlist
            setPage={handleSetPage}
            wishlist={wishlist}
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
            cart={cart}
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
            addToWishlist={guardedAddToWishlist}
            addToCart={guardedAddToCart}
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
      {(isLoggedIn || isGuest) && (
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
{(isLoggedIn || isGuest) &&
  !["login", "register", "profile", "checkout", "payment", "orders"].includes(page) && (
    <Footer setPage={handleSetPage} />
)}
      {/* LOGIN PROMPT MODAL */}
      {showLoginPrompt && (
        <LoginPromptModal
          onLogin={() => {
            setShowLoginPrompt(false);
            setPage("login");
          }}
          onRegister={() => {
            setShowLoginPrompt(false);
            setPage("register");
          }}
          onClose={() => {
            setShowLoginPrompt(false);
            setPendingAction(null);
          }}
        />
      )}

    </div>
  );
}

export default App;