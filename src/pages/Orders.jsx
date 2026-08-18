import React from "react";
import "./Orders.css";

function Orders({ setPage }) {
  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

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

  // ==========================
  // PRINT BILL
  // ==========================

  const printBill = (order) => {
    const billWindow = window.open(
      "",
      "_blank",
      "width=800,height=900"
    );

    if (!billWindow) {
      alert(
        "Please allow pop-ups to print your bill."
      );
      return;
    }

    const itemsHTML = order.items
      .map((item) => {
        const price = getPrice(item.price);
        const quantity = item.quantity || 1;
        const total = price * quantity;

        return `
          <tr>
            <td>
              ${
                item.name ||
                item.title ||
                "Product"
              }
            </td>

            <td>
              ₹${price.toLocaleString("en-IN")}
            </td>

            <td>
              ${quantity}
            </td>

            <td>
              ₹${total.toLocaleString("en-IN")}
            </td>
          </tr>
        `;
      })
      .join("");

    billWindow.document.write(`
      <!DOCTYPE html>

      <html>

      <head>

        <title>
          Style Hub Invoice - ${order.id}
        </title>

        <style>

          * {
            box-sizing: border-box;
          }

          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 40px;
            color: #222;
            background: white;
          }

          .invoice {
            max-width: 750px;
            margin: auto;
          }

          .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-bottom: 3px solid #d4af37;
            padding-bottom: 20px;
            margin-bottom: 25px;
          }

          .brand {
            font-size: 30px;
            font-weight: bold;
            letter-spacing: 2px;
          }

          .brand span {
            color: #d4af37;
          }

          .invoice-title {
            text-align: right;
          }

          .invoice-title h1 {
            margin: 0;
            font-size: 25px;
          }

          .invoice-title p {
            margin: 6px 0;
            color: #666;
          }

          .details {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
          }

          .details-box {
            width: 48%;
          }

          .details-box h3 {
            margin-bottom: 10px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 8px;
          }

          .details-box p {
            margin: 5px 0;
            color: #555;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }

          th {
            background: #111;
            color: white;
            padding: 12px;
            text-align: left;
          }

          td {
            padding: 12px;
            border-bottom: 1px solid #ddd;
          }

          .total-section {
            margin-top: 25px;
            margin-left: auto;
            width: 300px;
          }

          .total-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
          }

          .grand-total {
            border-top: 2px solid #111;
            margin-top: 10px;
            padding-top: 12px;
            font-size: 20px;
            font-weight: bold;
          }

          .status {
            margin-top: 30px;
            padding: 15px;
            background: #f4f8f4;
            color: green;
            text-align: center;
            font-weight: bold;
          }

          .footer {
            margin-top: 50px;
            text-align: center;
            border-top: 1px solid #ddd;
            padding-top: 20px;
            color: #777;
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

            <div class="brand">
              STYLE <span>HUB</span>
            </div>

            <div class="invoice-title">

              <h1>INVOICE</h1>

              <p>
                Order ID: ${order.id}
              </p>

              <p>
                Date: ${order.date}
              </p>

            </div>

          </div>

          <div class="details">

            <div class="details-box">

              <h3>Delivery Address</h3>

              <p>
                <strong>
                  ${
                    order.address?.name ||
                    "Customer"
                  }
                </strong>
              </p>

              <p>
                ${
                  order.address?.address ||
                  ""
                }
              </p>

              <p>
                ${
                  order.address?.city ||
                  ""
                }
                ${
                  order.address?.pincode ||
                  ""
                }
              </p>

              <p>
                Mobile:
                ${
                  order.address?.mobile ||
                  ""
                }
              </p>

            </div>

            <div class="details-box">

              <h3>Payment Details</h3>

              <p>
                Method:
                ${
                  order.paymentMethod ||
                  "Online Payment"
                }
              </p>

              <p>
                Status:
                ${
                  order.paymentStatus ||
                  "Paid"
                }
              </p>

              <p>
                Order Status:
                ${
                  order.status ||
                  "Confirmed"
                }
              </p>

            </div>

          </div>

          <table>

            <thead>

              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>

            </thead>

            <tbody>

              ${itemsHTML}

            </tbody>

          </table>

          <div class="total-section">

            <div class="total-row">

              <span>
                Subtotal
              </span>

              <strong>
                ₹${Number(
                  order.amount
                ).toLocaleString("en-IN")}
              </strong>

            </div>

            <div class="total-row">

              <span>
                Delivery
              </span>

              <strong>
                FREE
              </strong>

            </div>

            <div class="total-row grand-total">

              <span>
                Grand Total
              </span>

              <strong>
                ₹${Number(
                  order.amount
                ).toLocaleString("en-IN")}
              </strong>

            </div>

          </div>

          <div class="status">

            ✓ Order Confirmed

          </div>

          <div class="footer">

            <p>
              Thank you for shopping with
              <strong>Style Hub</strong>!
            </p>

            <p>
              We hope to see you again.
            </p>

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
    <div className="orders-page">

      <div className="orders-title">

        <h1>My Orders</h1>

        <p>
          Track and manage your Style Hub orders
        </p>

      </div>

      {orders.length === 0 ? (

        <div className="empty-orders">

          <div className="empty-icon">
            📦
          </div>

          <h2>
            No Orders Yet
          </h2>

          <p>
            You haven't placed any orders yet.
          </p>

          <button
            onClick={() =>
              setPage("products")
            }
          >
            START SHOPPING
          </button>

        </div>

      ) : (

        <div className="orders-container">

          {orders
            .slice()
            .reverse()
            .map((order) => (

              <div
                className="order-card"
                key={order.id}
              >

                <div className="order-top">

                  <div>
                    <span>
                      Order ID
                    </span>

                    <strong>
                      {order.id}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Order Date
                    </span>

                    <strong>
                      {order.date}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Status
                    </span>

                    <strong className="confirmed">
                      ✓ {order.status}
                    </strong>
                  </div>

                </div>

                <div className="order-items">

                  {order.items.map(
                    (item) => (

                      <div
                        className="order-item"
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

                        <div className="order-item-info">

                          <h3>
                            {item.name ||
                              item.title ||
                              "Product"}
                          </h3>

                          <p>
                            Quantity:{" "}
                            {item.quantity ||
                              1}
                          </p>

                          <strong>
                            ₹
                            {(
                              getPrice(
                                item.price
                              ) *
                              (item.quantity ||
                                1)
                            ).toLocaleString(
                              "en-IN"
                            )}
                          </strong>

                        </div>

                      </div>

                    )
                  )}

                </div>

                <div className="order-bottom">

                  <div>

                    Payment:

                    <strong className="paid">

                      {" "}
                      ✓{" "}

                      {order.paymentStatus}

                    </strong>

                  </div>

                  <div>

                    Total:

                    <strong>

                      {" "}
                      ₹
                      {Number(
                        order.amount
                      ).toLocaleString(
                        "en-IN"
                      )}

                    </strong>

                  </div>

                </div>

                {/* PRINT BILL BUTTON */}

                <button
                  className="print-bill-button"
                  onClick={() =>
                    printBill(order)
                  }
                >
                  🖨️ PRINT BILL
                </button>

              </div>

            ))}

        </div>

      )}

    </div>
  );
}

export default Orders;