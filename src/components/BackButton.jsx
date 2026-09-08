import React from "react";

function BackButton({ onBack }) {
  return (
    <div className="page-back-wrapper">
      <button
        className="page-back-button"
        onClick={onBack}
        title="Go to previous page"
        aria-label="Go to previous page"
      >
        ←
      </button>
    </div>
  );
}

export default BackButton;