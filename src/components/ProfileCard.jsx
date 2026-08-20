import React from "react";
import "./ProfileCard.css";

function ProfileCard({ setPage }) {
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "User",
    email: "user@example.com",
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    setPage("login");
  };

  return (
    <div className="profile-card-container">
      <div className="profile-card">
        {/* Profile Header */}
        <div className="profile-card-header">
          <div className="profile-avatar">
            {user.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>

          <div className="profile-user-info">
            <h2>Hello, {user.name}</h2>
            <p>{user.email}</p>
          </div>
        </div>

        {/* Profile Options */}
        <div className="profile-options">
          <button
            className="profile-option"
            onClick={() => setPage("orders")}
          >
            <span className="profile-icon">📦</span>

            <div>
              <h3>My Orders</h3>
              <p>View and track your orders</p>
            </div>

            <span className="arrow">›</span>
          </button>

          <button
            className="profile-option"
            onClick={() => setPage("wishlist")}
          >
            <span className="profile-icon">♡</span>

            <div>
              <h3>Wishlist</h3>
              <p>View your saved products</p>
            </div>

            <span className="arrow">›</span>
          </button>

          <button
            className="profile-option"
            onClick={() => setPage("cart")}
          >
            <span className="profile-icon">🛍</span>

            <div>
              <h3>My Bag</h3>
              <p>View products in your bag</p>
            </div>

            <span className="arrow">›</span>
          </button>
        </div>

        {/* Logout */}
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;