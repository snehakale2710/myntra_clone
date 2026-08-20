import React, { useEffect, useMemo, useState } from "react";

import products from "../data/products";
import ProductCard from "../components/ProductCard";
import PageTitle from "../components/PageTitle";

import "./Products.css";

function Products({
  setPage,
  searchTerm,
  category,
  setCategory,
  addToWishlist,
  addToCart,
}) {
  const [subCategory, setSubCategory] =
    useState("All");

  const [sort, setSort] =
    useState("default");

  const categoryData = {
    All: [
      "All",
      "Men",
      "Women",
      "Kids",
      "Beauty",
      "Accessories",
    ],

    Men: [
      "All",
      "T-Shirts",
      "Shirts",
      "Jeans",
      "Trousers",
      "Jackets",
      "Hoodies",
      "Sweatshirts",
      "Shorts",
      "Track Pants",
      "Kurtas",
      "Blazers",
      "Ethnic Wear",
      "Activewear",
      "Co-ords",
    ],

    Women: [
      "All",
      "Dresses",
      "Tops",
      "Jeans",
      "Trousers",
      "Kurtas",
      "Sarees",
      "Jackets",
      "Skirts",
      "Shorts",
      "Shirts",
      "Co-ords",
      "Ethnic Wear",
      "Lehengas",
      "Jumpsuits",
    ],

    Kids: [
      "All",
      "T-Shirts",
      "Shirts",
      "Dresses",
      "Jeans",
      "Shorts",
      "Ethnic Wear",
      "Sets",
      "Trousers",
      "Jackets",
      "Sweatshirts",
      "Track Pants",
      "Skirts",
      "Party Wear",
      "Activewear",
    ],

    Beauty: [
      "All",
      "Makeup",
      "Skincare",
      "Haircare",
      "Fragrance",
      "Bath & Body",
      "Lipstick",
      "Foundation",
      "Face Wash",
      "Moisturizer",
      "Sunscreen",
      "Serums",
      "Shampoo",
      "Conditioner",
      "Body Lotion",
    ],

    Accessories: [
      "All",
      "Bags",
      "Handbags",
      "Backpacks",
      "Watches",
      "Jewellery",
      "Earrings",
      "Necklaces",
      "Sunglasses",
      "Belts",
      "Caps",
      "Wallets",
      "Bracelets",
      "Rings",
      "Scarves",
      "Hair Accessories",
    ],
  };

  useEffect(() => {
    setSubCategory("All");
  }, [category]);

  const handleCategoryChange = (value) => {
    setCategory(value);
    setSubCategory("All");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const filteredProducts = useMemo(() => {
    const search =
      searchTerm?.trim().toLowerCase() || "";

    let result = products.filter((product) => {
      const name =
        product.name?.toLowerCase() || "";

      const brand =
        product.brand?.toLowerCase() || "";

      const mainCategory =
        product.category?.toLowerCase() || "";

      const sub =
        product.subcategory?.toLowerCase() || "";

      const matchesSearch =
        !search ||
        name.includes(search) ||
        brand.includes(search) ||
        mainCategory.includes(search) ||
        sub.includes(search);

      const matchesCategory =
        category === "All" ||
        product.category?.toLowerCase() ===
          category.toLowerCase();

      const matchesSubCategory =
        subCategory === "All" ||
        product.subcategory?.toLowerCase() ===
          subCategory.toLowerCase();

      return (
        matchesSearch &&
        matchesCategory &&
        matchesSubCategory
      );
    });

    if (sort === "low") {
      result.sort(
        (a, b) =>
          Number(a.price) - Number(b.price)
      );
    }

    if (sort === "high") {
      result.sort(
        (a, b) =>
          Number(b.price) - Number(a.price)
      );
    }

    if (sort === "discount") {
      result.sort(
        (a, b) =>
          Number(b.discount || 0) -
          Number(a.discount || 0)
      );
    }

    if (sort === "newest") {
      result.sort(
        (a, b) =>
          Number(b.id) - Number(a.id)
      );
    }

    return result;
  }, [
    products,
    searchTerm,
    category,
    subCategory,
    sort,
  ]);

  const getTitle = () => {
    if (searchTerm?.trim()) {
      return `Search results for "${searchTerm}"`;
    }

    if (subCategory !== "All") {
      return subCategory;
    }

    if (category !== "All") {
      return category;
    }

    return "Shop All";
  };

  const getDescription = () => {
    if (searchTerm?.trim()) {
      return `Discover products matching "${searchTerm}".`;
    }

    if (category === "Men") {
      return "Explore the latest styles for men.";
    }

    if (category === "Women") {
      return "Discover modern styles made for every occasion.";
    }

    if (category === "Kids") {
      return "Fun, comfortable and stylish looks for kids.";
    }

    if (category === "Beauty") {
      return "Beauty essentials to complete your everyday look.";
    }

    if (category === "Accessories") {
      return "Complete your outfit with the perfect accessories.";
    }

    return "Discover fashion, beauty and accessories at STYLEHUB.";
  };

  const clearFilters = () => {
    setCategory("All");
    setSubCategory("All");
    setSort("default");
  };

  return (
    <main className="products-page">

      <div className="products-breadcrumb">

        <button onClick={() => setPage("home")}>
          Home
        </button>

        <span>/</span>

        <span>
          {category === "All"
            ? "Shop"
            : category}
        </span>

        {subCategory !== "All" && (
          <>
            <span>/</span>
            <span>{subCategory}</span>
          </>
        )}

      </div>

      <section className="products-header">

        <PageTitle
          eyebrow="STYLEHUB COLLECTION"
          title={getTitle()}
          description={getDescription()}
          count={filteredProducts.length}
        />

        <div className="sort-wrapper">

          <label>
            Sort By
          </label>

          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
          >
            <option value="default">
              Recommended
            </option>

            <option value="newest">
              Newest
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

      </section>

      <section className="category-section">

        <div className="category-heading">
          SHOP BY CATEGORY
        </div>

        <div className="main-categories">

          {categoryData.All.map((item) => (
            <button
              key={item}
              className={
                category === item
                  ? "active"
                  : ""
              }
              onClick={() =>
                handleCategoryChange(item)
              }
            >
              {item}
            </button>
          ))}

        </div>

      </section>

      {category !== "All" && (
        <section className="subcategory-section">

          <div className="subcategory-scroll">

            {categoryData[category].map(
              (item) => (
                <button
                  key={item}
                  className={
                    subCategory === item
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setSubCategory(item)
                  }
                >
                  {item}
                </button>
              )
            )}

          </div>

        </section>
      )}

      <div className="products-toolbar">

        <span>
          <strong>
            {filteredProducts.length}
          </strong>{" "}
          styles available
        </span>

        {(category !== "All" ||
          subCategory !== "All" ||
          searchTerm) && (
          <button
            className="clear-filters"
            onClick={clearFilters}
          >
            Clear Filters ×
          </button>
        )}

      </div>

      {filteredProducts.length > 0 ? (

        <section className="product-grid">

          {filteredProducts.map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
                setPage={setPage}
                addToWishlist={
                  addToWishlist
                }
                addToCart={addToCart}
              />
            )
          )}

        </section>

      ) : (

        <section className="no-products">

          <div className="no-products-icon">
            ♡
          </div>

          <h2>
            No products found
          </h2>

          <p>
            We couldn't find anything matching
            your selection.
          </p>

          <button onClick={clearFilters}>
            View All Products
          </button>

        </section>

      )}

    </main>
  );
}

export default Products;