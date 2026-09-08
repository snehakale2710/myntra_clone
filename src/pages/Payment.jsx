import React, { useState } from "react";
import "./Payment.css";

import {
  getUserData,
  saveUserData,
  removeUserData,
} from "../utils/userStorage";

import { calculateDiscount } from "../utils/coupons";

function Payment({ cart, setPage, setCart }) {
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [loading, setLoading] = useState(false);

  const address = getUserData("deliveryAddress", {});

  /* =========================
     PRICE CONVERTER
  ========================= */

  const getPrice = (price) => {
    if (typeof price === "number") {
      return price;
    }

    return (
      Number(
        String(price)
          .replace("₹", "")
          .replace(/,/g, "")
          .trim()
      ) || 0
    );
  };

  /* =========================
     SUBTOTAL / COUPON / FINAL
  ========================= */

  const subtotal = cart.reduce(
    (total, item) =>
      total +
      getPrice(item.price) *
        (item.quantity || 1),
    0
  );

  const appliedCoupon = getUserData("appliedCoupon", "");

  const discountResult = calculateDiscount(
    appliedCoupon,
    subtotal
  );

  const discountAmount = discountResult.valid
    ? discountResult.discount
    : 0;

  const totalAmount = subtotal - discountAmount;

  /* =========================
     TOTAL ITEMS
  ========================= */

  const totalItems = cart.reduce(
    (total, item) =>
      total + (item.quantity || 1),
    0
  );

  /* =========================
     PLACE ORDER
  ========================= */

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      setPage("cart");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const newOrder = {
        id: "SH" + Date.now(),

        timestamp: Date.now(),

        amount: totalAmount,

        subtotal: subtotal,

        discount: discountAmount,

        couponCode: discountResult.valid
          ? appliedCoupon
          : null,

        items: cart,

        address: address,

        paymentMethod:
          paymentMethod === "upi"
            ? "UPI"
            : paymentMethod === "card"
            ? "Credit / Debit Card"
            : paymentMethod === "netbanking"
            ? "Net Banking"
            : "Cash on Delivery",

        paymentStatus:
          paymentMethod === "cod"
            ? "Pay on Delivery"
            : "Paid",

        status: "Confirmed",

        date: new Date().toLocaleString(
          "en-IN"
        ),
      };

      /* =========================
         GET OLD ORDERS (PER USER)
      ========================= */

      const previousOrders =
        getUserData("orders", []);

      /* =========================
         ADD NEW ORDER
      ========================= */

      const updatedOrders = [
        ...previousOrders,
        newOrder,
      ];

      /* =========================
         SAVE ORDERS (PER USER)
      ========================= */

      saveUserData(
        "orders",
        updatedOrders
      );

      /* =========================
         CLEAR CART + COUPON

         IMPORTANT:
         Clear BOTH per-user storage
         and React cart state.
      ========================= */

      removeUserData("cart");
      removeUserData("appliedCoupon");

      setCart([]);

      setLoading(false);

      /* =========================
         GO TO ORDERS

         No alert.
      ========================= */

      setPage("orders");
    }, 1500);
  };

  return (
    <div className="payment-page">

      {/* =========================
          TITLE
      ========================= */}

      <div className="payment-title">

        <h1>Payment</h1>

        <p>
          Complete your Style Hub order
        </p>

      </div>

      <div className="payment-container">

        {/* =========================
            PAYMENT SECTION
        ========================= */}

        <div className="payment-box">

          <h2>
            Select Payment Method
          </h2>

          <div className="secure-payment">
            🔒 Safe & Secure Checkout
          </div>

          {/* =========================
              UPI
          ========================= */}

          <div
            className={`payment-method ${
              paymentMethod === "upi"
                ? "selected"
                : ""
            }`}
            onClick={() =>
              setPaymentMethod("upi")
            }
          >

            <div className="method-icon">
              📱
            </div>

            <div className="method-content">

              <strong>
                UPI
              </strong>

              <p>
                Google Pay, PhonePe,
                Paytm and other UPI apps
              </p>

            </div>

            <input
              type="radio"
              checked={
                paymentMethod === "upi"
              }
              onChange={() =>
                setPaymentMethod("upi")
              }
            />

          </div>

          {/* =========================
              CARD
          ========================= */}

          <div
            className={`payment-method ${
              paymentMethod === "card"
                ? "selected"
                : ""
            }`}
            onClick={() =>
              setPaymentMethod("card")
            }
          >

            <div className="method-icon">
              💳
            </div>

            <div className="method-content">

              <strong>
                Credit / Debit Card
              </strong>

              <p>
                Visa, Mastercard, RuPay
                and more
              </p>

            </div>

            <input
              type="radio"
              checked={
                paymentMethod === "card"
              }
              onChange={() =>
                setPaymentMethod("card")
              }
            />

          </div>

          {/* =========================
              NET BANKING
          ========================= */}

          <div
            className={`payment-method ${
              paymentMethod ===
              "netbanking"
                ? "selected"
                : ""
            }`}
            onClick={() =>
              setPaymentMethod(
                "netbanking"
              )
            }
          >

            <div className="method-icon">
              🏦
            </div>

            <div className="method-content">

              <strong>
                Net Banking
              </strong>

              <p>
                All major banks supported
              </p>

            </div>

            <input
              type="radio"
              checked={
                paymentMethod ===
                "netbanking"
              }
              onChange={() =>
                setPaymentMethod(
                  "netbanking"
                )
              }
            />

          </div>

          {/* =========================
              CASH ON DELIVERY
          ========================= */}

          <div
            className={`payment-method ${
              paymentMethod === "cod"
                ? "selected"
                : ""
            }`}
            onClick={() =>
              setPaymentMethod("cod")
            }
          >

            <div className="method-icon">
              💵
            </div>

            <div className="method-content">

              <strong>
                Cash on Delivery
              </strong>

              <p>
                Pay when your order
                arrives
              </p>

            </div>

            <input
              type="radio"
              checked={
                paymentMethod === "cod"
              }
              onChange={() =>
                setPaymentMethod("cod")
              }
            />

          </div>

          {/* =========================
              PLACE ORDER
          ========================= */}

          <button
            className="pay-button"
            onClick={handlePlaceOrder}
            disabled={loading}
          >

            {loading
              ? "PROCESSING..."
              : paymentMethod === "cod"
              ? `PLACE ORDER • ₹${totalAmount.toLocaleString(
                  "en-IN"
                )}`
              : `PAY ₹${totalAmount.toLocaleString(
                  "en-IN"
                )}`}

          </button>

          {/* =========================
              BACK
          ========================= */}

          <button
            className="back-button"
            onClick={() =>
              setPage("checkout")
            }
            disabled={loading}
          >
            ← Back to Checkout
          </button>

        </div>

        {/* =========================
            ORDER SUMMARY
        ========================= */}

        <div className="payment-summary">

          <h2>
            Order Summary
          </h2>

          <div className="summary-row">

            <span>
              Items
            </span>

            <span>
              {totalItems}
            </span>

          </div>

          <div className="summary-row">

            <span>
              Subtotal
            </span>

            <span>
              ₹
              {subtotal.toLocaleString(
                "en-IN"
              )}
            </span>

          </div>

          <div className="summary-row">

            <span>
              Delivery
            </span>

            <span className="free">
              FREE
            </span>

          </div>

          {discountResult.valid && (
            <div className="summary-row">

              <span>
                Coupon ({appliedCoupon})
              </span>

              <span className="free">
                − ₹
                {discountAmount.toLocaleString(
                  "en-IN"
                )}
              </span>

            </div>
          )}

          <hr />

          <div className="final-total">

            <strong>
              Total
            </strong>

            <strong>
              ₹
              {totalAmount.toLocaleString(
                "en-IN"
              )}
            </strong>

          </div>

          {/* =========================
              DELIVERY ADDRESS
          ========================= */}

          <div className="delivery-summary">

            <h3>
              Delivery Address
            </h3>

            <p>
              <strong>
                {address.name ||
                  "Customer"}
              </strong>
            </p>

            <p>
              {address.address || ""}
            </p>

            <p>
              {address.city || ""}{" "}
              {address.pincode || ""}
            </p>

            <p>
              📞{" "}
              {address.mobile || ""}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Payment;