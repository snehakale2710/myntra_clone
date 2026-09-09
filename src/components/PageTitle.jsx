
import React from "react";
import "./PageTitle.css";

function PageTitle({
  eyebrow,
  title,
  description,
  count,
}) {
  return (
    <div className="page-title">

      {eyebrow && (
        <span className="section-kicker">
          {eyebrow}
        </span>
      )}

      <h1>{title}</h1>

      <div className="title-lines">
        <span></span>
        <span></span>
      </div>

      {description && (
        <p>{description}</p>
      )}

      {count !== undefined && (
        <small>
          {count} products
        </small>
      )}

    </div>
  );
}

export default PageTitle;
