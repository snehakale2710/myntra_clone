import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";

import "./Products.css";

function Products({
  setPage,
  searchTerm,
  category,
  setCategory,
  addToWishlist,
  addToCart,
}) {
  // =====================================================
  // STATE
  // =====================================================

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [subCategory, setSubCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [maxPrice, setMaxPrice] = useState("All");
  const [minimumRating, setMinimumRating] = useState("All");

  // =====================================================
  // FETCH PRODUCTS
  // =====================================================

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
          "Unable to load products. Please check that the backend server is running."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // =====================================================
  // SUBCATEGORY DATA
  // =====================================================

  const categoryData = {
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

  // =====================================================
  // RESET SUBCATEGORY
  // =====================================================

  useEffect(() => {
    setSubCategory("All");
  }, [category]);

  // =====================================================
  // CATEGORY CHANGE
  // =====================================================

  const handleCategoryChange = (value) => {
    setCategory(value);
    setSubCategory("All");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =====================================================
  // FILTER + SORT
  // =====================================================

  const filteredProducts = useMemo(() => {
    const search = searchTerm?.trim().toLowerCase() || "";

    let result = products.filter((product) => {
      const name = product.name?.toLowerCase() || "";
      const brand = product.brand?.toLowerCase() || "";
      const mainCategory =
        product.category?.toLowerCase() || "";
      const sub =
        product.subcategory?.toLowerCase() || "";

      // SEARCH
      const matchesSearch =
        !search ||
        name.includes(search) ||
        brand.includes(search) ||
        mainCategory.includes(search) ||
        sub.includes(search);

      // MAIN CATEGORY
      const matchesCategory =
        category === "All" ||
        product.category?.toLowerCase() ===
          category.toLowerCase();

      // SUBCATEGORY
      const matchesSubCategory =
        subCategory === "All" ||
        product.subcategory?.toLowerCase() ===
          subCategory.toLowerCase();

      // PRICE
      const matchesPrice =
        maxPrice === "All" ||
        Number(product.price) <= Number(maxPrice);

      // RATING
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

    // SORTING
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
          Number(b.id || 0) -
          Number(a.id || 0)
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

  // =====================================================
  // CLEAR FILTERS
  // =====================================================

  const clearFilters = () => {
    setCategory("All");
    setSubCategory("All");
    setSort("default");
    setMaxPrice("All");
    setMinimumRating("All");
  };

  // =====================================================
  // PRODUCT HEADING
  // =====================================================

  const getProductHeading = () => {
    if (searchTerm?.trim()) {
      return "Search results";
    }

    if (subCategory !== "All") {
      return subCategory;
    }

    if (category === "All") {
      return "Trending styles";
    }

    return `Latest in ${category}`;
  };

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <main className="products-page">

      {/* =================================================
          BREADCRUMB
      ================================================= */}

      <div className="products-breadcrumb">

        <button onClick={() => setPage("home")}>
          Home
        </button>

        <span>›</span>

        <span>
          {category === "All"
            ? "Shop"
            : category}
        </span>

        {subCategory !== "All" && (
          <>
            <span>›</span>

            <span>
              {subCategory}
            </span>
          </>
        )}

      </div>


      {/* =================================================
          SUBCATEGORY NAVIGATION
      ================================================= */}

      {category !== "All" &&
        categoryData[category] && (
          <section className="subcategory-section">

            <div className="subcat-header">

              <div>
                <span className="subcat-eyebrow">
                  EXPLORE
                </span>

                <strong>
                  {category}
                </strong>
              </div>

              <span className="subcat-count">
                {categoryData[category].length - 1} categories
              </span>

            </div>

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


      {/* =================================================
          PRODUCT SECTION HEADING
      ================================================= */}

      <section className="product-heading">

        <div>

          <div className="product-heading-eyebrow">
            {category === "All"
              ? "STYLEHUB EDIT"
              : `${category} EDIT`}
          </div>

          <h2>
            {getProductHeading()}
          </h2>

          {searchTerm?.trim() && (
            <p className="search-result-text">
              Showing products matching your search
            </p>
          )}

        </div>

        <div className="product-count">

          <strong>
            {filteredProducts.length}
          </strong>

          <span>
            {filteredProducts.length === 1
              ? "style"
              : "styles"}
          </span>

        </div>

      </section>


      {/* =================================================
          ACTIVE FILTERS + FILTER OPTIONS
      ================================================= */}

      <div className="active-filter-row">

        <span className="active-filter-label">
          Active filters:
        </span>


        {/* CATEGORY */}

        {category !== "All" && (
          <button
            className="filter-chip"
            onClick={() =>
              handleCategoryChange("All")
            }
          >
            {category} ×
          </button>
        )}


        {/* SUBCATEGORY */}

        {subCategory !== "All" && (
          <button
            className="filter-chip"
            onClick={() =>
              setSubCategory("All")
            }
          >
            {subCategory} ×
          </button>
        )}


        {/* PRICE */}

        <label className="filter-control">

          <select
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(e.target.value)
            }
            aria-label="Filter by price"
          >

            <option value="All">
              Price
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


        {/* RATING */}

        <label className="filter-control">

          <select
            value={minimumRating}
            onChange={(e) =>
              setMinimumRating(e.target.value)
            }
            aria-label="Filter by rating"
          >

            <option value="All">
              Rating
            </option>

            <option value="4">
              4.0 & above
            </option>

            <option value="4.5">
              4.5 & above
            </option>

          </select>

        </label>


        {/* SORT */}

        <label className="filter-control">

          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
            aria-label="Sort products"
          >

            <option value="default">
              Sort by
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

        </label>


        {/* CLEAR ALL */}

        {(category !== "All" ||
          subCategory !== "All" ||
          maxPrice !== "All" ||
          minimumRating !== "All" ||
          sort !== "default") && (

          <button
            className="clear-all"
            onClick={clearFilters}
          >
            Clear all
          </button>

        )}

      </div>


      {/* =================================================
          LOADING
      ================================================= */}

      {loading && (
        <section className="product-state">

          <div className="loading-spinner"></div>

          <h3>
            Curating your styles...
          </h3>

          <p>
            Please wait while we load the latest
            collection.
          </p>

        </section>
      )}


      {/* =================================================
          ERROR
      ================================================= */}

      {!loading && error && (
        <section className="product-state">

          <div className="state-icon">
            !
          </div>

          <h3>
            Something went wrong
          </h3>

          <p>
            {error}
          </p>

          <button
            className="state-button"
            onClick={() =>
              window.location.reload()
            }
          >
            Try Again
          </button>

        </section>
      )}


      {/* =================================================
          PRODUCT GRID
      ================================================= */}

      {!loading &&
        !error &&
        filteredProducts.length > 0 && (

        <section className="product-grid">

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

        </section>
      )}


      {/* =================================================
          EMPTY STATE
      ================================================= */}

      {!loading &&
        !error &&
        filteredProducts.length === 0 && (

        <section className="product-state">

          <div className="state-icon heart">
            ♡
          </div>

          <h3>
            No styles found
          </h3>

          <p>
            We couldn't find products matching
            your current selection.
          </p>

          <button
            className="state-button"
            onClick={clearFilters}
          >
            View All Products
          </button>

        </section>
      )}

    </main>
  );
}

export default Products;