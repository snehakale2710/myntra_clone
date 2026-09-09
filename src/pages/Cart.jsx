import React, { useState } from "react";
import "./Cart.css";

import {
  getUserData,
  saveUserData,
  removeUserData,
} from "../utils/userStorage";

import { calculateDiscount } from "../utils/coupons";

function Cart({
  cart,
  setCart,
  setPage,
  addToWishlist,
}) {

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
     OPEN PRODUCT DETAILS
  ========================= */

  const openProductDetails = (product) => {
    localStorage.setItem(
      "selectedProduct",
      JSON.stringify(product)
    );

    setPage("details");
  };


  /* =========================
     UPDATE QUANTITY
  ========================= */

  const updateQuantity = (id, change) => {
    const updatedCart = cart.map((item) => {

      if (item.id !== id) {
        return item;
      }

      const newQuantity =
        (item.quantity || 1) + change;

      return {
        ...item,
        quantity:
          newQuantity < 1
            ? 1
            : newQuantity,
      };
    });

    setCart(updatedCart);

    saveUserData(
      "cart",
      updatedCart
    );
  };


  /* =========================
     REMOVE PRODUCT
  ========================= */

  const removeProduct = (id) => {
    const updatedCart =
      cart.filter(
        (item) => item.id !== id
      );

    setCart(updatedCart);

    saveUserData(
      "cart",
      updatedCart
    );
  };


  /* =========================
     MOVE TO WISHLIST
  ========================= */

  const moveToWishlist = (product) => {

    /*
      IMPORTANT:
      Do NOT manually save the wishlist here.

      App.jsx addToWishlist() already:
      1. Checks whether the product exists
      2. Adds it to wishlist
      3. Saves it to localStorage
      4. Updates wishlist state
    */

    if (addToWishlist) {
      addToWishlist(product);
    }


    /* =========================
       REMOVE FROM CART
    ========================= */

    const updatedCart =
      cart.filter(
        (item) => item.id !== product.id
      );

    setCart(updatedCart);

    saveUserData(
      "cart",
      updatedCart
    );
  };


  /* =========================
     TOTAL ITEMS
  ========================= */

  const totalItems = cart.reduce(
    (total, item) =>
      total + (item.quantity || 1),
    0
  );


  /* =========================
     TOTAL PRICE
  ========================= */

  const totalAmount = cart.reduce(
    (total, item) =>
      total +
      getPrice(item.price) *
        (item.quantity || 1),
    0
  );


  /* =========================
     COUPON
  ========================= */

  const [couponCode, setCouponCode] = useState("");

  const [appliedCoupon, setAppliedCoupon] = useState(() =>
    getUserData("appliedCoupon", "")
  );

  const [couponMessage, setCouponMessage] = useState("");
  const [couponMessageType, setCouponMessageType] = useState("");

  const discountResult = calculateDiscount(
    appliedCoupon,
    totalAmount
  );

  const finalAmount =
    totalAmount -
    (discountResult.valid ? discountResult.discount : 0);

  const handleApplyCoupon = () => {
    const result = calculateDiscount(couponCode, totalAmount);

    if (result.valid) {
      const normalizedCode = couponCode.trim().toUpperCase();

      saveUserData("appliedCoupon", normalizedCode);

      setAppliedCoupon(normalizedCode);
      setCouponMessage(result.message);
      setCouponMessageType("success");
    } else {
      setCouponMessage(
        result.message || "Invalid coupon code."
      );
      setCouponMessageType("error");
    }
  };

  const handleRemoveCoupon = () => {
    removeUserData("appliedCoupon");

    setAppliedCoupon("");
    setCouponCode("");
    setCouponMessage("");
    setCouponMessageType("");
  };


  /* =========================
     EMPTY CART
  ========================= */

  if (cart.length === 0) {

    return (
      <main className="cart-page">

        <div className="cart-empty">

          <div className="cart-empty-icon">
            🛍️
          </div>

          <h1>
            Your Bag is Empty
          </h1>

          <p>
            Add something you love to your bag.
          </p>

          <button
            onClick={() =>
              setPage("products")
            }
          >
            START SHOPPING
          </button>

        </div>

      </main>
    );
  }


  /* =========================
     CART PAGE
  ========================= */

  return (
    <main className="cart-page">

      {/* HEADER */}

      <div className="cart-header">

        <div>

          <span className="cart-kicker">
            STYLEHUB BAG
          </span>

          <h1>
            Shopping Bag
          </h1>

          <p>
            {totalItems}{" "}
            {totalItems === 1
              ? "item"
              : "items"}{" "}
            in your bag
          </p>

        </div>

        <button
          className="continue-shopping"
          onClick={() =>
            setPage("products")
          }
        >
          CONTINUE SHOPPING
        </button>

      </div>


      {/* CART LAYOUT */}

      <div className="cart-container">

        {/* PRODUCTS */}

        <section className="cart-products">

          <div className="cart-section-title">

            <h2>
              Your Items
            </h2>

            <span>
              {cart.length}{" "}
              {cart.length === 1
                ? "product"
                : "products"}
            </span>

          </div>


          {cart.map((item) => {

            const quantity =
              item.quantity || 1;

            const itemPrice =
              getPrice(item.price);

            const itemTotal =
              itemPrice * quantity;


            return (
              <article
                className="cart-item"
                key={item.id}
              >

                {/* IMAGE */}

                <div
                  className="cart-image"
                  onClick={() =>
                    openProductDetails(item)
                  }
                  style={{
                    cursor: "pointer",
                  }}
                >

                  <img
                    src={item.image}
                    alt={
                      item.name ||
                      item.title ||
                      "Product"
                    }
                  />

                </div>


                {/* DETAILS */}

                <div className="cart-details">

                  <span className="cart-brand">
                    {item.brand ||
                      "STYLEHUB"}
                  </span>

                  <h3
                    onClick={() =>
                      openProductDetails(item)
                    }
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {item.name ||
                      item.title ||
                      "Product"}
                  </h3>


                  {item.description && (
                    <p className="cart-description">
                      {item.description}
                    </p>
                  )}


                  {item.size && (
                    <div className="cart-meta">

                      <span>
                        Size:
                      </span>

                      <strong>
                        {item.size}
                      </strong>

                    </div>
                  )}


                  {item.color && (
                    <div className="cart-meta">

                      <span>
                        Color:
                      </span>

                      <strong>
                        {item.color}
                      </strong>

                    </div>
                  )}


                  {/* PRICE */}

                  <div className="cart-price">

                    <strong>
                      ₹
                      {itemPrice.toLocaleString(
                        "en-IN"
                      )}
                    </strong>

                    {item.originalPrice && (
                      <span>
                        ₹
                        {getPrice(
                          item.originalPrice
                        ).toLocaleString(
                          "en-IN"
                        )}
                      </span>
                    )}

                  </div>


                  {/* QUANTITY */}

                  <div className="quantity-section">

                    <span>
                      Quantity
                    </span>

                    <div className="quantity-control">

                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            -1
                          )
                        }
                      >
                        −
                      </button>

                      <span>
                        {quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            1
                          )
                        }
                      >
                        +
                      </button>

                    </div>

                  </div>


                  {/* CART ACTIONS */}

                  <div className="cart-actions">

                    {/* REMOVE */}

                    <button
                      className="remove-item"
                      onClick={() =>
                        removeProduct(
                          item.id
                        )
                      }
                    >
                      Remove
                    </button>


                    {/* MOVE TO WISHLIST */}

                    <button
                      className="move-to-wishlist"
                      onClick={() =>
                        moveToWishlist(item)
                      }
                    >
                      ♡ Move to Wishlist
                    </button>

                  </div>

                </div>


                {/* ITEM TOTAL */}

                <div className="cart-item-total">

                  <span>
                    Item Total
                  </span>

                  <strong>
                    ₹
                    {itemTotal.toLocaleString(
                      "en-IN"
                    )}
                  </strong>

                </div>

              </article>
            );
          })}

        </section>


        {/* SUMMARY */}

        <aside className="cart-summary">

          <h2>
            Order Summary
          </h2>


          <div className="summary-row">

            <span>
              Products
            </span>

            <span>
              {cart.length}
            </span>

          </div>


          <div className="summary-row">

            <span>
              Total Items
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
              {totalAmount.toLocaleString(
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
            <div className="summary-row discount-row">

              <span>
                Coupon Discount
              </span>

              <span>
                − ₹
                {discountResult.discount.toLocaleString(
                  "en-IN"
                )}
              </span>

            </div>
          )}


          {/* COUPON */}

          <div className="coupon-section">

            <label>
              Have a coupon?
            </label>

            {appliedCoupon ? (

              <div className="coupon-applied">

                <span>
                  🏷️ {appliedCoupon} applied
                </span>

                <button
                  type="button"
                  onClick={handleRemoveCoupon}
                >
                  Remove
                </button>

              </div>

            ) : (

              <div className="coupon-input-row">

                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => {
                    setCouponCode(e.target.value);
                    setCouponMessage("");
                  }}
                />

                <button
                  type="button"
                  onClick={handleApplyCoupon}
                >
                  Apply
                </button>

              </div>

            )}

            {couponMessage && (
              <p
                className={`coupon-message ${couponMessageType}`}
              >
                {couponMessage}
              </p>
            )}

          </div>


          <hr />


          <div className="summary-total">

            <strong>
              Total Amount
            </strong>

            <strong>
              ₹
              {finalAmount.toLocaleString(
                "en-IN"
              )}
            </strong>

          </div>


          <button
            className="checkout-btn"
            onClick={() =>
              setPage("checkout")
            }
          >
            PROCEED TO CHECKOUT
          </button>


          <div className="cart-security">

            <span>
              🔒
            </span>

            <div>

              <strong>
                Safe & Secure Shopping
              </strong>

              <p>
                Your order information is protected.
              </p>

            </div>

          </div>

        </aside>

      </div>

    </main>
  );
}

export default Cart;