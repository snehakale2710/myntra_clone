import React, { useEffect, useMemo, useState } from "react";

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
  // ============================================
  // Products from Flask + MongoDB
  // ============================================

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [subCategory, setSubCategory] = useState("All");

  const [sort, setSort] = useState("default");

  const [maxPrice, setMaxPrice] = useState("All");
  const [minimumRating, setMinimumRating] = useState("All");

  // ============================================
  // Fetch products from Flask API
  // ============================================

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "http://localhost:5000/api/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data);
      } catch (err) {
        console.error("Product fetch error:", err);

        setError(
          "Unable to load products. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ============================================
  // Category Data
  // ============================================

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

  // ============================================
  // Reset subcategory when category changes
  // ============================================

  useEffect(() => {
    setSubCategory("All");
  }, [category]);

  // ============================================
  // Category Change
  // ============================================

  const handleCategoryChange = (value) => {
    setCategory(value);
    setSubCategory("All");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ============================================
  // Filter + Sort Products
  // ============================================

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

      const matchesPrice =
        maxPrice === "All" ||
        Number(product.price) <= Number(maxPrice);

      const matchesRating =
        minimumRating === "All" ||
        Number(product.rating || 0) >=
          Number(minimumRating);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesSubCategory &&
        matchesPrice &&
        matchesRating
      );
    });

    // Price: Low to High
    if (sort === "low") {
      result.sort(
        (a, b) =>
          Number(a.price) - Number(b.price)
      );
    }

    // Price: High to Low
    if (sort === "high") {
      result.sort(
        (a, b) =>
          Number(b.price) - Number(a.price)
      );
    }

    // Highest Discount
    if (sort === "discount") {
      result.sort(
        (a, b) =>
          Number(b.discount || 0) -
          Number(a.discount || 0)
      );
    }

    // Newest
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
    maxPrice,
    minimumRating,
  ]);

  // ============================================
  // Page Title
  // ============================================

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

  // ============================================
  // Page Description
  // ============================================

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

  // ============================================
  // Clear Filters
  // ============================================

  const clearFilters = () => {
    setCategory("All");
    setSubCategory("All");
    setSort("default");
    setMaxPrice("All");
    setMinimumRating("All");
  };

  // ============================================
  // UI
  // ============================================

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

      <section
        className="catalogue-filters"
        aria-label="Product filters"
      >

        <label>
          Price

          <select
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(e.target.value)
            }
          >
            <option value="All">
              Any price
            </option>

            <option value="750">
              Under ₹750
            </option>

            <option value="1500">
              Under ₹1,500
            </option>

            <option value="2500">
              Under ₹2,500
            </option>
          </select>
        </label>

        <label>
          Customer rating

          <select
            value={minimumRating}
            onChange={(e) =>
              setMinimumRating(e.target.value)
            }
          >
            <option value="All">
              Any rating
            </option>

            <option value="4">
              4.0 & above
            </option>

            <option value="4.5">
              4.5 & above
            </option>
          </select>
        </label>

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
          searchTerm ||
          maxPrice !== "All" ||
          minimumRating !== "All") && (

          <button
            className="clear-filters"
            onClick={clearFilters}
          >
            Clear Filters ×
          </button>

        )}

      </div>

      {/* ============================================
          Loading State
          ============================================ */}

      {loading ? (

        <section className="no-products">

          <h2>
            Loading products...
          </h2>

          <p>
            Please wait while we load the latest products.
          </p>

        </section>

      ) : error ? (

        /* ============================================
           Error State
           ============================================ */

        <section className="no-products">

          <div className="no-products-icon">
            !
          </div>

          <h2>
            Something went wrong
          </h2>

          <p>
            {error}
          </p>

          <button
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>

        </section>

      ) : filteredProducts.length > 0 ? (

        /* ============================================
           Products
           ============================================ */

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

        /* ============================================
           No Products
           ============================================ */

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