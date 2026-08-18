import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="footer">

      <div className="footer-top">
        <div>
          <h3>
            STYLE<span>HUB</span>
          </h3>
          <p className="footer-tagline">
            Considered clothing for everyday wear.
            Designed to last, priced to make sense.
          </p>
        </div>

        <form className="newsletter" onSubmit={handleSubscribe}>
          <p className="newsletter-label">Join the list</p>
          <div className="newsletter-row">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </div>
          {subscribed && (
            <p className="newsletter-success">
              You're on the list — welcome.
            </p>
          )}
        </form>
      </div>

      <div className="footer-columns">
        <div className="footer-column">
          <h4>Shop</h4>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <p>Accessories</p>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>Shipping</p>
          <p>Returns &amp; Exchanges</p>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <p>Our Story</p>
          <p>Sustainability</p>
          <p>Careers</p>
        </div>

        <div className="footer-column">
          <h4>Follow</h4>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Pinterest</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 StyleHub. All rights reserved.</span>
        <span>Made with care, worn with confidence.</span>
      </div>

    </footer>
  );
}

export default Footer;
