import React from "react";
import "./LoginPromptModal.css";

function LoginPromptModal({ onLogin, onRegister, onClose }) {
  return (
    <div
      className="login-prompt-overlay"
      onClick={onClose}
    >
      <div
        className="login-prompt-box"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="login-prompt-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="login-prompt-icon">
          🔒
        </div>

        <h2>Please log in to continue</h2>

        <p>
          Create a free account or log in to add items
          to your bag, save favourites, and check out.
        </p>

        <button
          type="button"
          className="login-prompt-primary"
          onClick={onLogin}
        >
          LOG IN
        </button>

        <button
          type="button"
          className="login-prompt-secondary"
          onClick={onRegister}
        >
          CREATE ACCOUNT
        </button>

        <button
          type="button"
          className="login-prompt-cancel"
          onClick={onClose}
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}

export default LoginPromptModal;