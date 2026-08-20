import React from "react";
import "./Cart.css";

function Cart({ cart, setCart, setPage }) {

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
     UPDATE QUANTITY
  ========================= */

  const updateQuantity = (id, change) => {

    const updatedCart = cart
      .map((item) => {

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

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
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

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
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

  return (
    <main className="cart-page">

      {/* =========================
          HEADER
      ========================= */}

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

      {/* =========================
          CART LAYOUT
      ========================= */}

      <div className="cart-container">

        {/* =========================
            PRODUCTS
        ========================= */}

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

                <div className="cart-image">

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

                  <h3>
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

        {/* =========================
            SUMMARY
        ========================= */}

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