import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ================= BRAND ================= */}
        <div className="footer-brand">

          <h2>
            STYLE<span>HUB</span>
          </h2>

          <p>
            Considered clothing for everyday wear.
            Discover timeless styles made for you.
          </p>

          <div className="footer-socials">

            <a
              href="#"
              aria-label="Instagram"
              className="social-icon"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="social-icon"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="Pinterest"
              className="social-icon"
            >
              <FaPinterestP />
            </a>

          </div>

        </div>


        {/* ================= CUSTOMER CARE ================= */}
        <div className="footer-column">

          <h3>Customer Care</h3>

          <button>Contact Us</button>
          <button>Shipping & Delivery</button>
          <button>Returns & Exchanges</button>
          <button>FAQs</button>

        </div>


        {/* ================= INFORMATION ================= */}
        <div className="footer-column">

          <h3>Information</h3>

          <button>About StyleHub</button>
          <button>Privacy Policy</button>
          <button>Terms & Conditions</button>
          <button>Size Guide</button>

        </div>

      </div>


      {/* ================= BOTTOM ================= */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} STYLEHUB. All rights reserved.
        </p>

        <p>
          Made with <span className="heart">♥</span> for fashion lovers.
        </p>

      </div>

    </footer>
  );
}

export default Footer;