import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Products.css";

function Products({
  setPage,
  searchTerm,
  addToWishlist,
  addToCart
}) {

  const [category, setCategory] =
    useState("All");

  const [sort, setSort] =
    useState("default");

  let filteredProducts = products.filter(
    (product) => {

      const search =
        searchTerm?.toLowerCase() || "";

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search) ||
        product.brand
          .toLowerCase()
          .includes(search) ||
        product.category
          .toLowerCase()
          .includes(search);

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    }
  );

  if (sort === "low") {
    filteredProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "high") {
    filteredProducts.sort(
      (a, b) => b.price - a.price
    );
  }

  if (sort === "discount") {
    filteredProducts.sort(
      (a, b) => b.discount - a.discount
    );
  }

  return (
    <div className="products-page">

      <div className="products-header">

        <div>
          <h1>Products</h1>

          <p>
            {filteredProducts.length}
            {" "}products found
          </p>
        </div>

        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
        >
          <option value="default">
            Sort By
          </option>

          <option value="low">
            Price: Low to High
          </option>

          <option value="high">
            Price: High to Low
          </option>

          <option value="discount">
            Highest Discount
          </option>
        </select>

      </div>

      <div className="filter-buttons">

        {[
          "All",
          "Men",
          "Women",
          "Kids"
        ].map((item) => (

          <button
            key={item}
            className={
              category === item
                ? "selected"
                : ""
            }
            onClick={() =>
              setCategory(item)
            }
          >
            {item}
          </button>

        ))}

      </div>

      {filteredProducts.length > 0 ? (

        <div className="product-grid">

          {filteredProducts.map(
            (product) => (

              <ProductCard
                key={product.id}
                product={product}
                setPage={setPage}
                addToWishlist={addToWishlist}
                addToCart={addToCart}
              />

            )
          )}

        </div>

      ) : (

        <div className="no-products">
          <h2>No products found 😔</h2>
          <p>
            Try another search.
          </p>
        </div>

      )}

    </div>
  );
}

export default Products;