import React from "react";
import PageTitle from "../components/PageTitle";
import "./Orders.css";

function Orders({ setPage }) {
  /* =========================
     CURRENT USER
  ========================= */

  const currentUser =
    JSON.parse(
      localStorage.getItem("currentUser")
    );

  const ordersKey =
    currentUser?.email
      ? `orders_${currentUser.email.toLowerCase()}`
      : "orders";

  /* =========================
     USER ORDERS
  ========================= */

  const orders =
    JSON.parse(
      localStorage.getItem(
        ordersKey
      )
    ) || [];

  /* =========================
     PRICE
  ========================= */

  const formatPrice = (price) =>
    Number(
      price || 0
    ).toLocaleString("en-IN");

  /* =========================
     PRINT BILL
  ========================= */

  const printBill = (order) => {
    const billWindow =
      window.open(
        "",
        "_blank",
        "width=900,height=700"
      );

    if (!billWindow) return;

    const itemsHTML =
      order.items
        ?.map(
          (item) => `
            <tr>
              <td>
                ${item.name || item.title || "Product"}
              </td>

              <td>
                ${item.brand || "STYLEHUB"}
              </td>

              <td>
                ${item.quantity || 1}
              </td>

              <td>
                ₹${formatPrice(item.price)}
              </td>

              <td>
                ₹${formatPrice(
                  Number(item.price || 0) *
                    (item.quantity || 1)
                )}
              </td>
            </tr>
          `
        )
        .join("") || "";

    billWindow.document.write(`
      <!DOCTYPE html>

      <html>

      <head>

        <title>
          STYLEHUB Invoice - ${order.id}
        </title>

        <style>

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            padding: 40px;
            font-family: Arial, sans-serif;
            color: #111;
            background: #fff;
          }

          .invoice {
            max-width: 900px;
            margin: auto;
          }

          .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding-bottom: 25px;
            border-bottom: 2px solid #111;
          }

          .logo {
            font-size: 30px;
            font-weight: 700;
            letter-spacing: 2px;
          }

          .logo span {
            color: #d4af37;
          }

          .invoice-title {
            text-align: right;
          }

          .invoice-title h1 {
            margin: 0;
            font-size: 26px;
          }

          .invoice-title p {
            margin: 6px 0;
            color: #666;
            font-size: 13px;
          }

          .details {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin: 30px 0;
          }

          .details h3 {
            margin-bottom: 10px;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .details p {
            margin: 5px 0;
            font-size: 13px;
            color: #555;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 25px;
          }

          th {
            background: #111;
            color: #fff;
            padding: 12px;
            text-align: left;
            font-size: 12px;
          }

          td {
            padding: 12px;
            border-bottom: 1px solid #ddd;
            font-size: 12px;
          }

          .summary {
            width: 320px;
            margin-left: auto;
            margin-top: 25px;
          }

          .summary-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            font-size: 13px;
          }

          .total {
            border-top: 2px solid #111;
            margin-top: 10px;
            padding-top: 12px;
            font-size: 18px;
            font-weight: bold;
          }

          .payment {
            margin-top: 30px;
            padding: 15px;
            background: #f7f7f7;
            font-size: 13px;
          }

          .thank-you {
            text-align: center;
            margin-top: 45px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            color: #777;
            font-size: 12px;
          }

          @media print {

            body {
              padding: 20px;
            }

            .no-print {
              display: none;
            }

          }

        </style>

      </head>

      <body>

        <div class="invoice">

          <div class="header">

            <div class="logo">
              STYLE<span>HUB</span>
            </div>

            <div class="invoice-title">

              <h1>
                INVOICE
              </h1>

              <p>
                Order ID: ${order.id}
              </p>

              <p>
                Date: ${order.date}
              </p>

            </div>

          </div>

          <div class="details">

            <div>

              <h3>
                Delivery Address
              </h3>

              <p>
                <strong>
                  ${order.address?.name || "Customer"}
                </strong>
              </p>

              <p>
                ${order.address?.address || ""}
              </p>

              <p>
                ${order.address?.city || ""}
                ${order.address?.pincode || ""}
              </p>

              <p>
                Mobile:
                ${order.address?.mobile || ""}
              </p>

            </div>

            <div>

              <h3>
                Payment Details
              </h3>

              <p>
                Payment Method:
                ${order.paymentMethod || "N/A"}
              </p>

              <p>
                Payment Status:
                ${order.paymentStatus || "N/A"}
              </p>

              <p>
                Order Status:
                ${order.status || "Confirmed"}
              </p>

            </div>

          </div>

          <table>

            <thead>

              <tr>
                <th>Product</th>
                <th>Brand</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>

            </thead>

            <tbody>

              ${itemsHTML}

            </tbody>

          </table>

          <div class="summary">

            <div class="summary-row">

              <span>
                Subtotal
              </span>

              <span>
                ₹${formatPrice(order.amount)}
              </span>

            </div>

            <div class="summary-row">

              <span>
                Delivery
              </span>

              <span>
                FREE
              </span>

            </div>

            <div class="summary-row total">

              <span>
                Total Amount
              </span>

              <span>
                ₹${formatPrice(order.amount)}
              </span>

            </div>

          </div>

          <div class="payment">

            <strong>
              Payment:
            </strong>

            ${order.paymentMethod || "N/A"}

            <br />

            <strong>
              Status:
            </strong>

            ${order.paymentStatus || "N/A"}

          </div>

          <div class="thank-you">

            Thank you for shopping with STYLEHUB.

            <br />

            Your style. Your story.

          </div>

        </div>

        <script>

          window.onload = function() {
            window.print();
          };

        </script>

      </body>

      </html>
    `);

    billWindow.document.close();
  };

  return (
    <main className="orders-page">

      <div className="orders-header">

        <PageTitle
          eyebrow="STYLEHUB ACCOUNT"
          title="My Orders"
          description="Track and manage your recent purchases."
          count={orders.length}
        />

        <button
          className="continue-shopping"
          onClick={() =>
            setPage("products")
          }
        >
          Continue Shopping
        </button>

      </div>

      {orders.length === 0 ? (

        <div className="empty-orders">

          <div className="empty-orders-icon">
            📦
          </div>

          <h2>
            No orders yet
          </h2>

          <p>
            Your placed orders will appear here.
          </p>

          <button
            onClick={() =>
              setPage("products")
            }
          >
            Start Shopping
          </button>

        </div>

      ) : (

        <div className="orders-list">

          {orders
            .slice()
            .reverse()
            .map((order) => (

              <article
                className="order-card"
                key={order.id}
              >

                <div className="order-top">

                  <div>
                    <span>
                      ORDER ID
                    </span>

                    <strong>
                      {order.id}
                    </strong>
                  </div>

                  <div>
                    <span>
                      ORDER DATE
                    </span>

                    <strong>
                      {order.date}
                    </strong>
                  </div>

                  <div>
                    <span>
                      STATUS
                    </span>

                    <strong className="status">
                      {order.status}
                    </strong>
                  </div>

                </div>

                <div className="order-products">

                  {order.items?.map(
                    (item, index) => (

                      <div
                        className="order-product"
                        key={`${item.id}-${index}`}
                      >

                        <img
                          src={item.image}
                          alt={
                            item.name ||
                            item.title ||
                            "Product"
                          }
                        />

                        <div className="order-product-info">

                          <h3>
                            {item.name ||
                              item.title ||
                              "Product"}
                          </h3>

                          <p>
                            Brand:{" "}
                            {item.brand ||
                              "STYLEHUB"}
                          </p>

                          {item.size && (
                            <p>
                              Size:{" "}
                              {item.size}
                            </p>
                          )}

                          <p>
                            Quantity:{" "}
                            {item.quantity || 1}
                          </p>

                        </div>

                        <strong>
                          ₹
                          {formatPrice(
                            Number(
                              item.price || 0
                            ) *
                              (item.quantity ||
                                1)
                          )}
                        </strong>

                      </div>

                    )
                  )}

                </div>

                <div className="order-bottom">

                  <div>

                    <span>
                      PAYMENT
                    </span>

                    <strong>
                      {order.paymentMethod}
                    </strong>

                  </div>

                  <div>

                    <span>
                      PAYMENT STATUS
                    </span>

                    <strong>
                      {order.paymentStatus}
                    </strong>

                  </div>

                  <div>

                    <span>
                      TOTAL
                    </span>

                    <strong className="order-total">
                      ₹
                      {formatPrice(
                        order.amount
                      )}
                    </strong>

                  </div>

                </div>

                <div className="order-address">

                  <h3>
                    Delivery Address
                  </h3>

                  <p>
                    <strong>
                      {order.address?.name}
                    </strong>
                  </p>

                  <p>
                    {order.address?.address}
                  </p>

                  <p>
                    {order.address?.city}{" "}
                    {order.address?.pincode}
                  </p>

                  <p>
                    📞{" "}
                    {order.address?.mobile}
                  </p>

                </div>

                <div className="order-actions">

                  <button
                    className="print-bill-btn"
                    onClick={() =>
                      printBill(order)
                    }
                  >
                    🖨 Print Bill
                  </button>

                </div>

              </article>

            ))}

        </div>

      )}

    </main>
  );
}

export default Orders;