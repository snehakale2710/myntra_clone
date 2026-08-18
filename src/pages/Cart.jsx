import React from "react";
import "./Cart.css";

function Cart({ cart, setCart, setPage }) {

  const getPrice = (price) => {
    if (typeof price === "number") {
      return price;
    }

    return Number(
      String(price)
        .replace("₹", "")
        .replace(/,/g, "")
        .trim()
    ) || 0;
  };

  const updateQuantity = (id, change) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          const newQuantity =
            (item.quantity || 1) + change;

          return {
            ...item,
            quantity:
              newQuantity < 1
                ? 1
                : newQuantity,
          };
        }

        return item;
      });

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    setCart(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    setCart(updatedCart);
  };

  const totalAmount = cart.reduce(
    (total, item) => {
      return (
        total +
        getPrice(item.price) *
          (item.quantity || 1)
      );
    },
    0
  );

  const totalItems = cart.reduce(
    (total, item) =>
      total + (item.quantity || 1),
    0
  );

  return (
    <div className="cart-page">

      <div className="cart-title">
        <h1>My Bag</h1>
        <p>
          {totalItems} item
          {totalItems !== 1 ? "s" : ""}
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">

          <div className="empty-cart-icon">
            🛍️
          </div>

          <h2>Your Bag is Empty</h2>

          <p>
            Add some products to your bag
            and come back here.
          </p>

          <button
            onClick={() => setPage("products")}
          >
            SHOP NOW
          </button>

        </div>
      ) : (

        <div className="cart-container">

          {/* LEFT SIDE */}

          <div className="cart-products">

            {cart.map((item) => (

              <div
                className="cart-item"
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

                <div className="cart-item-info">

                  <h3>
                    {item.name ||
                      item.title ||
                      "Product"}
                  </h3>

                  {item.brand && (
                    <p className="brand">
                      {item.brand}
                    </p>
                  )}

                  <p className="price">
                    ₹
                    {getPrice(
                      item.price
                    ).toLocaleString("en-IN")}
                  </p>

                  <div className="quantity">

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
                      {item.quantity || 1}
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

                <div className="cart-item-right">

                  <strong>
                    ₹
                    {(
                      getPrice(item.price) *
                      (item.quantity || 1)
                    ).toLocaleString(
                      "en-IN"
                    )}
                  </strong>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(
                        item.id
                      )
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* RIGHT SIDE */}

          <div className="cart-summary">

            <h2>PRICE DETAILS</h2>

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
                Total MRP
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
                Delivery Charges
              </span>

              <span className="free">
                FREE
              </span>
            </div>

            <hr />

            <div className="summary-total">

              <strong>
                Total Amount
              </strong>

              <strong>
                ₹
                {totalAmount.toLocaleString(
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

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;