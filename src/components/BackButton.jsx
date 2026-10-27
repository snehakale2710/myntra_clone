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
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M19 12H5" />
          <path d="M11 18l-6-6 6-6" />
        </svg>
      </button>
    </div>
  );
}
export default BackButton;