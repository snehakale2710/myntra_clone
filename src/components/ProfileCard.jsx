import React from "react";
import "./ProfileCard.css";

import {
  getCurrentUser,
  getUserData,
} from "../utils/userStorage";

function ProfileCard({ setPage, onLogout }) {
  // ==========================================
  // CURRENT USER
  // ==========================================

  const user = getCurrentUser() || {
    name: "User",
    email: "user@example.com",
  };

  const userName = user.name || "User";
  const userEmail = user.email || "user@example.com";

  // ==========================================
  // USER INITIALS
  // ==========================================

  const initials = userName
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // ==========================================
  // USER DATA
  // ==========================================

  const orders = getUserData("orders", []);
  const wishlist = getUserData("wishlist", []);
  const cart = getUserData("cart", []);

  const ordersCount = orders.length;
  const wishlistCount = wishlist.length;
  const bagCount = cart.length;

  return (
    <section className="profile-page">
      <div className="profile-wrapper">

        {/* =====================================
            PAGE HEADING
        ====================================== */}

        <div className="profile-heading">
          <span>MY ACCOUNT</span>
          <h1>Profile</h1>
        </div>

        {/* =====================================
            MAIN PROFILE CARD
        ====================================== */}

        <div className="profile-card">

          {/* ===================================
              PROFILE HEADER
          ==================================== */}

          <div className="profile-header">

            <div className="profile-avatar">
              {initials}
            </div>

            <span className="profile-welcome">
              Welcome back
            </span>

            <h2>{userName}</h2>

            <p>{userEmail}</p>

          </div>


          {/* ===================================
              QUICK STATS
          ==================================== */}

          <div className="profile-stats">

            {/* ORDERS */}

            <button
              type="button"
              className="profile-stat"
              onClick={() => setPage("orders")}
            >
              <strong>{ordersCount}</strong>

              <span className="stat-icon order-icon">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5z" />
                  <path d="M4 7.5 12 12l8-4.5" />
                  <path d="M12 12v9" />
                </svg>
              </span>

              <span>Orders</span>
            </button>


            {/* WISHLIST */}

            <button
              type="button"
              className="profile-stat"
              onClick={() => setPage("wishlist")}
            >
              <strong>{wishlistCount}</strong>

              <span className="stat-icon wishlist-icon">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.8 8.7c0 5.4-8.8 10.2-8.8 10.2S3.2 14.1 3.2 8.7A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.5Z" />
                </svg>
              </span>

              <span>Wishlist</span>
            </button>


            {/* BAG */}

            <button
              type="button"
              className="profile-stat"
              onClick={() => setPage("cart")}
            >
              <strong>{bagCount}</strong>

              <span className="stat-icon bag-icon">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 8h14l-1 13H6L5 8Z" />
                  <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                </svg>
              </span>

              <span>Bag</span>
            </button>

          </div>


          {/* ===================================
              ACCOUNT MENU
          ==================================== */}

          <div className="profile-menu">

            {/* MY ORDERS */}

            <button
              type="button"
              className="profile-menu-item"
              onClick={() => setPage("orders")}
            >
              <div className="menu-icon orders-menu-icon">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5z" />
                  <path d="M4 7.5 12 12l8-4.5" />
                  <path d="M12 12v9" />
                </svg>
              </div>

              <div className="menu-content">
                <h3>My Orders</h3>
                <p>Track and manage your orders</p>
              </div>

              <span className="menu-arrow">
                ›
              </span>
            </button>


            {/* WISHLIST */}

            <button
              type="button"
              className="profile-menu-item"
              onClick={() => setPage("wishlist")}
            >
              <div className="menu-icon wishlist-menu-icon">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.8 8.7c0 5.4-8.8 10.2-8.8 10.2S3.2 14.1 3.2 8.7A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.5Z" />
                </svg>
              </div>

              <div className="menu-content">
                <h3>Wishlist</h3>
                <p>Your saved products</p>
              </div>

              <span className="menu-arrow">
                ›
              </span>
            </button>


            {/* MY BAG */}

            <button
              type="button"
              className="profile-menu-item"
              onClick={() => setPage("cart")}
            >
              <div className="menu-icon bag-menu-icon">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 8h14l-1 13H6L5 8Z" />
                  <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                </svg>
              </div>

              <div className="menu-content">
                <h3>My Bag</h3>
                <p>Products waiting in your bag</p>
              </div>

              <span className="menu-arrow">
                ›
              </span>
            </button>

          </div>


          {/* ===================================
              LOGOUT
          ==================================== */}

          <button
            type="button"
            className="logout-button"
            onClick={onLogout}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M10 5H5v14h5" />
              <path d="M14 8l4 4-4 4" />
              <path d="M8 12h10" />
            </svg>

            <span>LOGOUT</span>
          </button>

        </div>
      </div>
    </section>
  );
}

export default ProfileCard;