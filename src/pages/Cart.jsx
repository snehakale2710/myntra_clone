import React from "react";
import "./Cart.css";

function Cart({
  cart,
  setCart,
  setPage
}) {

  const removeItem = (id) => {

    const updated =
      cart.filter(
        (item) => item.id !== id
      );

    setCart(updated);

    localStorage.setItem(
      "cart",
      JSON.stringify(updated)
    );
  };

  const changeQuantity = (
    id,
    amount
  ) => {

    const updated = cart.map(
      (item) => {

        if (item.id === id) {

          return {
            ...item,
            quantity: Math.max(
              1,
              (item.quantity || 1) +
                amount
            )
          };
        }

        return item;
      }
    );

    setCart(updated);

    localStorage.setItem(
      "cart",
      JSON.stringify(updated)
    );
  };

  const total = cart.reduce(
    (sum, item) =>
      sum +
      item.price *
        (item.quantity || 1),
    0
  );

  const placeOrder = () => {

    if (cart.length === 0) {
      return;
    }

    const oldOrders =
      JSON.parse(
        localStorage.getItem("orders")
      ) || [];

    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      items: cart,
      total: total,
      status: "Confirmed"
    };

    localStorage.setItem(
      "orders",
      JSON.stringify([
        newOrder,
        ...oldOrders
      ])
    );

    localStorage.removeItem("cart");

    setCart([]);

    alert("Order placed successfully!");

    setPage("orders");
  };

  if (cart.length === 0) {

    return (
      <div className="empty-cart">

        <div>🛍️</div>

        <h2>Your bag is empty</h2>

        <p>
          Add something you love.
        </p>

        <button
          onClick={() =>
            setPage("products")
          }
        >
          SHOP NOW
        </button>

      </div>
    );
  }

  return (
    <div className="cart-page">

      <h1>My Shopping Bag</h1>

      <div className="cart-layout">

        <div className="cart-items">

          {cart.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-item-info">

                <h3>
                  {item.brand}
                </h3>

                <p>
                  {item.name}
                </p>

                <strong>
                  ₹{item.price}
                </strong>

                <div className="quantity">

                  <button
                    onClick={() =>
                      changeQuantity(
                        item.id,
                        -1
                      )
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.quantity || 1}
                  </span>

                  <button
                    onClick={() =>
                      changeQuantity(
                        item.id,
                        1
                      )
                    }
                  >
                    +
                  </button>

                </div>

                <button
                  className="remove"
                  onClick={() =>
                    removeItem(item.id)
                  }
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

        <div className="price-box">

          <h3>PRICE DETAILS</h3>

          <div>
            <span>
              Total Items
            </span>

            <span>
              {cart.reduce(
                (sum, item) =>
                  sum +
                  (item.quantity || 1),
                0
              )}
            </span>
          </div>

          <div>
            <span>Total MRP</span>
            <span>₹{total}</span>
          </div>

          <div>
            <span>Discount</span>
            <span className="green">
              -₹0
            </span>
          </div>

          <hr />

          <div className="final-price">
            <strong>Total Amount</strong>
            <strong>₹{total}</strong>
          </div>

          <button
            onClick={placeOrder}
          >
            PLACE ORDER
          </button>

        </div>

      </div>

    </div>
  );
}

export default Cart;