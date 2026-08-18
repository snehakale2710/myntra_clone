import React, { useState } from "react";
import "./Checkout.css";

function Checkout({ setPage }) {

  const [address, setAddress] = useState(
    JSON.parse(
      localStorage.getItem("deliveryAddress")
    ) || {
      name: "",
      mobile: "",
      address: "",
      city: "",
      pincode: "",
    }
  );

  const [error, setError] = useState("");

  const cart =
    JSON.parse(
      localStorage.getItem("cart")
    ) || [];

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

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleContinue = (e) => {
    e.preventDefault();

    if (
      !address.name ||
      !address.mobile ||
      !address.address ||
      !address.city ||
      !address.pincode
    ) {
      setError(
        "Please fill all delivery details."
      );
      return;
    }

    if (!/^[0-9]{10}$/.test(address.mobile)) {
      setError(
        "Please enter a valid 10-digit mobile number."
      );
      return;
    }

    if (!/^[0-9]{6}$/.test(address.pincode)) {
      setError(
        "Please enter a valid 6-digit pincode."
      );
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      setPage("cart");
      return;
    }

    localStorage.setItem(
      "deliveryAddress",
      JSON.stringify(address)
    );

    setPage("payment");
  };

  return (
    <div className="checkout-page">

      <div className="checkout-title">
        <h1>Checkout</h1>
        <p>Complete your order</p>
      </div>

      <div className="checkout-container">

        {/* ADDRESS */}

        <div className="checkout-left">

          <h2>Delivery Address</h2>

          {error && (
            <div className="checkout-error">
              {error}
            </div>
          )}

          <form onSubmit={handleContinue}>

            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={address.name}
              onChange={handleChange}
            />

            <label>Mobile Number</label>

            <input
              type="tel"
              name="mobile"
              placeholder="10-digit mobile number"
              maxLength="10"
              value={address.mobile}
              onChange={handleChange}
            />

            <label>Address</label>

            <textarea
              name="address"
              placeholder="House No., Building, Street, Area"
              value={address.address}
              onChange={handleChange}
            />

            <div className="checkout-row">

              <div>
                <label>City</label>

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={address.city}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Pincode</label>

                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  maxLength="6"
                  value={address.pincode}
                  onChange={handleChange}
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

        {/* SUMMARY */}

        <div className="checkout-right">

          <h2>Order Summary</h2>

          {cart.map((item) => (

            <div
              className="checkout-item"
              key={item.id}
            >

              <img
                src={item.image}
                alt={
                  item.name ||
                  item.title ||
                  "Product"
                }
              />

              <div>

                <h3>
                  {item.name ||
                    item.title ||
                    "Product"}
                </h3>

                <p>
                  Quantity:{" "}
                  {item.quantity || 1}
                </p>

                <strong>
                  ₹
                  {(
                    getPrice(item.price) *
                    (item.quantity || 1)
                  ).toLocaleString("en-IN")}
                </strong>

              </div>

            </div>

          ))}

          <div className="price-details">

            <div>
              <span>Subtotal</span>

              <span>
                ₹
                {totalAmount.toLocaleString(
                  "en-IN"
                )}
              </span>
            </div>

            <div>
              <span>Delivery</span>

              <span className="free">
                FREE
              </span>
            </div>

            <hr />

            <div className="total-row">

              <strong>Total Amount</strong>

              <strong>
                ₹
                {totalAmount.toLocaleString(
                  "en-IN"
                )}
              </strong>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;