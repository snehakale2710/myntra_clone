import React from "react";
import "./Orders.css";

function Orders({ setPage }) {

  const orders =
    JSON.parse(
      localStorage.getItem("orders")
    ) || [];

  return (
    <div className="orders-page">

      <h1>My Orders 📦</h1>

      {orders.length === 0 ? (

        <div className="no-orders">

          <div>📦</div>

          <h2>
            You haven't placed any orders
          </h2>

          <button
            onClick={() =>
              setPage("products")
            }
          >
            START SHOPPING
          </button>

        </div>

      ) : (

        <div className="orders-list">

          {orders.map((order) => (

            <div
              className="order-card"
              key={order.id}
            >

              <div className="order-header">

                <div>
                  <strong>
                    Order #{order.id}
                  </strong>

                  <p>
                    Placed on {order.date}
                  </p>
                </div>

                <span>
                  {order.status}
                </span>

              </div>

              {order.items.map(
                (item) => (

                  <div
                    className="order-item"
                    key={item.id}
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div>
                      <h3>
                        {item.brand}
                      </h3>

                      <p>
                        {item.name}
                      </p>

                      <strong>
                        ₹{item.price}
                      </strong>

                    </div>

                  </div>

                )
              )}

              <div className="order-total">
                Total Paid: ₹{order.total}
              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Orders;