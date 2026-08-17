import React from "react";
import "./ProfileCard.css";

function ProfileCard({ setPage }) {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    ) || {};

  const wishlist =
    JSON.parse(
      localStorage.getItem("wishlist")
    ) || [];

  const cart =
    JSON.parse(
      localStorage.getItem("cart")
    ) || [];

  const orders =
    JSON.parse(
      localStorage.getItem("orders")
    ) || [];

  const logout = () => {
    localStorage.removeItem("loggedIn");
    setPage("login");
  };

  return (
    <div className="profile-wrapper">

      <div className="profile-card">

        <div className="profile-avatar">
          {user.name
            ? user.name.charAt(0).toUpperCase()
            : "U"}
        </div>

        <h2>
          Hello, {user.name || "User"} 👋
        </h2>

        <p>{user.email}</p>

        <div className="profile-stats">

          <div
            onClick={() => setPage("orders")}
          >
            <strong>
              {orders.length}
            </strong>
            <span>Orders</span>
          </div>

          <div
            onClick={() => setPage("wishlist")}
          >
            <strong>
              {wishlist.length}
            </strong>
            <span>Wishlist</span>
          </div>

          <div
            onClick={() => setPage("cart")}
          >
            <strong>
              {cart.length}
            </strong>
            <span>Bag</span>
          </div>

        </div>

        <div className="profile-options">

          <button
            onClick={() => setPage("orders")}
          >
            📦 My Orders
          </button>

          <button
            onClick={() => setPage("wishlist")}
          >
            ❤️ My Wishlist
          </button>

          <button
            onClick={() => setPage("cart")}
          >
            🛍️ My Bag
          </button>

          <button
            className="logout-button"
            onClick={logout}
          >
            🚪 Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProfileCard;