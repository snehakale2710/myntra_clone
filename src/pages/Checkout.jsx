import React, { useState } from "react";

import "./Checkout.css";

import {
  getUserData,
  saveUserData,
} from "../utils/userStorage";

import { calculateDiscount } from "../utils/coupons";

function Checkout({ cart, setPage }) {
  const [address, setAddress] =
    useState(
      getUserData("deliveryAddress", {
        name: "",
        mobile: "",
        address: "",
        city: "",
        pincode: "",
      })
    );

  const [error, setError] = useState("");

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

  const totalAmount = cart.reduce(
    (total, item) =>
      total +
      getPrice(item.price) *
        (item.quantity || 1),
    0
  );

  const appliedCoupon = getUserData("appliedCoupon", "");

  const discountResult = calculateDiscount(
    appliedCoupon,
    totalAmount
  );

  const finalAmount =
    totalAmount -
    (discountResult.valid ? discountResult.discount : 0);

  const handleChange = (e) => {
    const {
      name,
      value,
    } = e.target;

    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleContinue = (e) => {
    e.preventDefault();

    if (
      !address.name.trim() ||
      !address.mobile.trim() ||
      !address.address.trim() ||
      !address.city.trim() ||
      !address.pincode.trim()
    ) {
      setError(
        "Please fill all delivery details."
      );
      return;
    }

    if (
      !/^[0-9]{10}$/.test(
        address.mobile
      )
    ) {
      setError(
        "Please enter a valid 10-digit mobile number."
      );
      return;
    }

    if (
      !/^[0-9]{6}$/.test(
        address.pincode
      )
    ) {
      setError(
        "Please enter a valid 6-digit pincode."
      );
      return;
    }

    // Check the SAME cart that App.jsx and Cart.jsx are using
    if (!cart || cart.length === 0) {
      alert("Your cart is empty.");

      setPage("cart");

      return;
    }

    saveUserData(
      "deliveryAddress",
      address
    );

    setPage("payment");
  };

  return (
    <main className="checkout-page">

      <div className="checkout-title">

        <h1>
          Checkout
        </h1>

        <p>
          Complete your STYLEHUB order
        </p>

      </div>

      <div className="checkout-container">

        <div className="checkout-left">

          <h2>
            Delivery Address
          </h2>

          {error && (
            <div className="checkout-error">
              {error}
            </div>
          )}

          <form
            onSubmit={handleContinue}
          >

            <label>
              Full Name
            </label>

            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={address.name}
              onChange={handleChange}
            />

            <label>
              Mobile Number
            </label>

            <input
              name="mobile"
              type="tel"
              placeholder="10-digit mobile number"
              maxLength={10}
              value={address.mobile}
              onChange={(e) =>
                handleChange({
                  target: {
                    name: "mobile",
                    value:
                      e.target.value.replace(
                        /\D/g,
                        ""
                      ),
                  },
                })
              }
            />

            <label>
              Address
            </label>

            <textarea
              name="address"
              placeholder="House No., Building, Street, Area"
              value={address.address}
              onChange={handleChange}
            />

            <div className="checkout-row">

              <div>
                <label>
                  City
                </label>

                <input
                  name="city"
                  type="text"
                  placeholder="City"
                  value={address.city}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>
                  Pincode
                </label>

                <input
                  name="pincode"
                  type="text"
                  placeholder="Pincode"
                  maxLength={6}
                  value={address.pincode}
                  onChange={(e) =>
                    handleChange({
                      target: {
                        name: "pincode",
                        value:
                          e.target.value.replace(
                            /\D/g,
                            ""
                          ),
                      },
                    })
                  }
                />
              </div>

            </div>

            <button
              type="submit"
              className="continue-payment-btn"
            >
              CONTINUE TO PAYMENT
            </button>

          </form>

        </div>

        <div className="checkout-right">

          <h2>
            Order Summary
          </h2>

          {cart.map((item) => (

            <div
              className="checkout-item"
              key={item.id}
            >

              <img
                src={item.image}
                alt={
                  item.name ||
                  "Product"
                }
              />

              <div>

                <h3>
                  {item.name}
                </h3>

                {item.size && (
                  <p>
                    Size: {item.size}
                  </p>
                )}

                <p>
                  Quantity:{" "}
                  {item.quantity || 1}
                </p>

                <strong>
                  ₹
                  {(
                    getPrice(
                      item.price
                    ) *
                    (item.quantity || 1)
                  ).toLocaleString(
                    "en-IN"
                  )}
                </strong>

              </div>

            </div>

          ))}

          <div className="price-details">

            <div>
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

            <div>
              <span>
                Delivery
              </span>

              <span className="free">
                FREE
              </span>
            </div>

            {discountResult.valid && (
              <div>
                <span>
                  Coupon ({appliedCoupon})
                </span>

                <span className="free">
                  − ₹
                  {discountResult.discount.toLocaleString(
                    "en-IN"
                  )}
                </span>
              </div>
            )}

            <hr />

            <div className="total-row">

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

          </div>

        </div>

      </div>

    </main>
  );
}

export default Checkout;