import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-column">
        <h3>STYLEHUB</h3>
        <p>
          Your destination for fashion,
          style and lifestyle.
        </p>
      </div>

      <div className="footer-column">
        <h4>ONLINE SHOPPING</h4>
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
        <p>Accessories</p>
      </div>

      <div className="footer-column">
        <h4>USEFUL LINKS</h4>
        <p>Contact Us</p>
        <p>FAQ</p>
        <p>Shipping</p>
        <p>Returns</p>
      </div>

      <div className="footer-column">
        <h4>FOLLOW US</h4>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Twitter</p>
      </div>

    </footer>
  );
}

export default Footer;