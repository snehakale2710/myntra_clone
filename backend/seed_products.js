const products = [
  // =====================================================
  // MEN - 15 PRODUCTS
  // =====================================================

  {
    id: 1,
    brand: "Roadster",
    name: "Men Solid Casual Shirt",
    category: "Men",
    subcategory: "Shirts",
    price: 799,
    originalPrice: 1599,
    discount: 50,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=700&q=80",
    description:
      "Premium casual shirt designed for everyday comfort and modern style.",
  },

  {
    id: 2,
    brand: "Levis",
    name: "Men Slim Fit Jeans",
    category: "Men",
    subcategory: "Jeans",
    price: 1499,
    originalPrice: 2999,
    discount: 50,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=700&q=80",
    description:
      "Classic slim fit jeans with comfortable stretch and premium denim.",
  },

  {
    id: 3,
    brand: "HRX",
    name: "Men Printed T-Shirt",
    category: "Men",
    subcategory: "T-Shirts",
    price: 599,
    originalPrice: 999,
    discount: 40,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1552252059-9d77e4059ad1?w=700&q=80",
    description:
      "Comfortable printed cotton t-shirt for everyday casual styling.",
  },

  {
    id: 4,
    brand: "U.S. Polo Assn.",
    name: "Men Classic Polo T-Shirt",
    category: "Men",
    subcategory: "T-Shirts",
    price: 999,
    originalPrice: 1999,
    discount: 50,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=700&q=80",
    description:
      "Classic polo t-shirt made for smart casual occasions.",
  },

  {
    id: 5,
    brand: "Nike",
    name: "Men Running Shoes",
    category: "Men",
    subcategory: "Shoes",
    price: 1999,
    originalPrice: 3999,
    discount: 50,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=700&q=80",
    description:
      "Comfortable running shoes designed for active lifestyles.",
  },

  {
    id: 6,
    brand: "Roadster",
    name: "Men Slim Casual Trousers",
    category: "Men",
    subcategory: "Trousers",
    price: 899,
    originalPrice: 1799,
    discount: 50,
    rating: 4.1,
    image:
      "https://images.unsplash.com/photo-1593030103066-0093718efeb9?w=700&q=80",
    description:
      "Smart slim-fit trousers for everyday and office wear.",
  },

  {
    id: 7,
    brand: "H&M",
    name: "Men Oversized Hoodie",
    category: "Men",
    subcategory: "Hoodies",
    price: 1299,
    originalPrice: 2499,
    discount: 48,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1596993100471-c3905dafa78e?w=700&q=80",
    description:
      "Relaxed oversized hoodie made for comfortable streetwear styling.",
  },

  {
    id: 8,
    brand: "Jack & Jones",
    name: "Men Denim Jacket",
    category: "Men",
    subcategory: "Jackets",
    price: 1799,
    originalPrice: 3499,
    discount: 49,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1603189343302-e603f7add05a?w=700&q=80",
    description:
      "Classic denim jacket with a timeless casual look.",
  },

  {
    id: 9,
    brand: "Roadster",
    name: "Men Checked Casual Shirt",
    category: "Men",
    subcategory: "Shirts",
    price: 849,
    originalPrice: 1699,
    discount: 50,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=700&q=80",
    description:
      "Stylish checked shirt perfect for casual weekends.",
  },

  {
    id: 10,
    brand: "Levis",
    name: "Men Regular Fit Jeans",
    category: "Men",
    subcategory: "Jeans",
    price: 1599,
    originalPrice: 3199,
    discount: 50,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=700&q=80",
    description:
      "Regular fit denim with durable construction and comfortable styling.",
  },

  {
    id: 11,
    brand: "Puma",
    name: "Men Graphic T-Shirt",
    category: "Men",
    subcategory: "T-Shirts",
    price: 699,
    originalPrice: 1299,
    discount: 46,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=700&q=80",
    description:
      "Modern graphic t-shirt made from soft cotton fabric.",
  },

  {
    id: 12,
    brand: "Allen Solly",
    name: "Men Formal Shirt",
    category: "Men",
    subcategory: "Shirts",
    price: 1199,
    originalPrice: 2299,
    discount: 48,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1667284152861-36e03571486a?w=700&q=80",
    description:
      "Elegant formal shirt designed for professional occasions.",
  },

  {
    id: 13,
    brand: "Roadster",
    name: "Men Casual Shorts",
    category: "Men",
    subcategory: "Shorts",
    price: 649,
    originalPrice: 1199,
    discount: 46,
    rating: 4.1,
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=700",
    description:
      "Comfortable casual shorts for summer days and holidays.",
  },

  {
    id: 14,
    brand: "Puma",
    name: "Men Training Sneakers",
    category: "Men",
    subcategory: "Shoes",
    price: 1899,
    originalPrice: 3799,
    discount: 50,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=700&q=80",
    description:
      "Lightweight training sneakers designed for daily movement.",
  },

  {
    id: 15,
    brand: "Roadster",
    name: "Men Winter Jacket",
    category: "Men",
    subcategory: "Jackets",
    price: 1999,
    originalPrice: 3999,
    discount: 50,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=700",
    description:
      "Warm winter jacket combining comfort with contemporary style.",
  },

  // =====================================================
  // WOMEN - 15 PRODUCTS
  // =====================================================

  {
    id: 16,
    brand: "Roadster",
    name: "Women Floral Dress",
    category: "Women",
    subcategory: "Dresses",
    price: 1199,
    originalPrice: 2399,
    discount: 50,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1616313253719-c46514cddee1?w=700&q=80",
    description:
      "Elegant floral dress featuring a stylish silhouette and lightweight fabric.",
  },

  {
    id: 17,
    brand: "H&M",
    name: "Women Regular Fit Top",
    category: "Women",
    subcategory: "Tops",
    price: 699,
    originalPrice: 1299,
    discount: 46,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=700&q=80",
    description:
      "Stylish women's top perfect for casual outings and everyday wear.",
  },

  {
    id: 18,
    brand: "Tokyo Talkies",
    name: "Women Casual Dress",
    category: "Women",
    subcategory: "Dresses",
    price: 899,
    originalPrice: 1799,
    discount: 50,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1562151270-c7d22ceb586a?w=700&q=80",
    description:
      "Trendy casual dress with a modern fit and fashionable look.",
  },

  {
    id: 19,
    brand: "Biba",
    name: "Women Printed Kurta",
    category: "Women",
    subcategory: "Kurtas",
    price: 1099,
    originalPrice: 2199,
    discount: 50,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1604284195847-88dc4b5a9faa?w=700&q=80",
    description:
      "Beautiful printed kurta suitable for festive and everyday occasions.",
  },

  {
    id: 20,
    brand: "Nike",
    name: "Women Sports Shoes",
    category: "Women",
    subcategory: "Shoes",
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=700",
    description:
      "Lightweight sports shoes combining comfort and performance.",
  },

  {
    id: 21,
    brand: "Levis",
    name: "Women Straight Fit Jeans",
    category: "Women",
    subcategory: "Jeans",
    price: 1399,
    originalPrice: 2799,
    discount: 50,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=700",
    description:
      "Classic straight-fit jeans designed for everyday styling.",
  },

  {
    id: 22,
    brand: "DressBerry",
    name: "Women Solid Top",
    category: "Women",
    subcategory: "Tops",
    price: 649,
    originalPrice: 1199,
    discount: 46,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=700&q=80",
    description:
      "Minimal solid top that pairs perfectly with jeans and trousers.",
  },

  {
    id: 23,
    brand: "Biba",
    name: "Women Ethnic Kurta Set",
    category: "Women",
    subcategory: "Kurtas",
    price: 1499,
    originalPrice: 2999,
    discount: 50,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1604284195847-88dc4b5a9faa?w=700&q=80",
    description:
      "Elegant ethnic kurta set designed for festive occasions.",
  },

  {
    id: 24,
    brand: "Libas",
    name: "Women Printed Kurta",
    category: "Women",
    subcategory: "Kurtas",
    price: 999,
    originalPrice: 1999,
    discount: 50,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1585488431257-d81d4f3c4c0a?w=700",
    description:
      "Beautiful printed kurta with a comfortable contemporary fit.",
  },

  {
    id: 25,
    brand: "Roadster",
    name: "Women Denim Jacket",
    category: "Women",
    subcategory: "Jackets",
    price: 1599,
    originalPrice: 2999,
    discount: 47,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1590330297626-d7aff25a0431?w=700&q=80",
    description:
      "Classic denim jacket that adds a stylish layer to any outfit.",
  },

  {
    id: 26,
    brand: "Mango",
    name: "Women Wide Leg Trousers",
    category: "Women",
    subcategory: "Trousers",
    price: 1299,
    originalPrice: 2499,
    discount: 48,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1580478491436-fd6a937acc9e?w=700&q=80",
    description:
      "Modern wide-leg trousers designed for effortless elegance.",
  },

  {
    id: 27,
    brand: "ONLY",
    name: "Women Party Dress",
    category: "Women",
    subcategory: "Dresses",
    price: 1399,
    originalPrice: 2799,
    discount: 50,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?w=700&q=80",
    description:
      "Stylish party dress designed for evening occasions.",
  },

  {
    id: 28,
    brand: "H&M",
    name: "Women Casual Shirt",
    category: "Women",
    subcategory: "Tops",
    price: 899,
    originalPrice: 1699,
    discount: 47,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=700",
    description:
      "Relaxed casual shirt for effortless everyday fashion.",
  },

  {
    id: 29,
    brand: "Levis",
    name: "Women High Rise Jeans",
    category: "Women",
    subcategory: "Jeans",
    price: 1599,
    originalPrice: 3199,
    discount: 50,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=700",
    description:
      "High-rise jeans with a flattering silhouette and comfortable stretch.",
  },

  {
    id: 30,
    brand: "Vero Moda",
    name: "Women Printed Summer Dress",
    category: "Women",
    subcategory: "Dresses",
    price: 1099,
    originalPrice: 2199,
    discount: 50,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=700",
    description:
      "Lightweight summer dress featuring a beautiful printed design.",
  },

  // =====================================================
  // KIDS - 15 PRODUCTS
  // =====================================================

  {
    id: 31,
    brand: "H&M",
    name: "Kids Casual T-Shirt",
    category: "Kids",
    subcategory: "T-Shirts",
    price: 499,
    originalPrice: 899,
    discount: 44,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=700&q=80",
    description:
      "Soft and comfortable t-shirt designed for kids.",
  },

  {
    id: 32,
    brand: "Nike",
    name: "Kids Sports Shoes",
    category: "Kids",
    subcategory: "Shoes",
    price: 1299,
    originalPrice: 2499,
    discount: 48,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=700",
    description:
      "Durable and comfortable sports shoes for active kids.",
  },

  {
    id: 33,
    brand: "H&M",
    name: "Kids Printed T-Shirt",
    category: "Kids",
    subcategory: "T-Shirts",
    price: 449,
    originalPrice: 799,
    discount: 44,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1529756148791-fbca69bfe693?w=700&q=80",
    description:
      "Fun printed t-shirt made from soft and breathable fabric.",
  },

  {
    id: 34,
    brand: "Mothercare",
    name: "Kids Casual Dress",
    category: "Kids",
    subcategory: "Dresses",
    price: 799,
    originalPrice: 1599,
    discount: 50,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1578897367107-2828e351c8a8?w=700&q=80",
    description:
      "Comfortable and stylish casual dress for little ones.",
  },

  {
    id: 35,
    brand: "H&M",
    name: "Kids Denim Jeans",
    category: "Kids",
    subcategory: "Jeans",
    price: 699,
    originalPrice: 1299,
    discount: 46,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=700",
    description:
      "Durable denim jeans designed for active kids.",
  },

  {
    id: 36,
    brand: "Puma",
    name: "Kids Running Shoes",
    category: "Kids",
    subcategory: "Shoes",
    price: 1199,
    originalPrice: 2299,
    discount: 48,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=700",
    description:
      "Lightweight running shoes for everyday activities.",
  },

  {
    id: 37,
    brand: "Allen Solly Junior",
    name: "Kids Casual Shirt",
    category: "Kids",
    subcategory: "Shirts",
    price: 649,
    originalPrice: 1199,
    discount: 46,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1758782213532-bbb5fd89885e?w=700&q=80",
    description:
      "Smart casual shirt suitable for everyday outings.",
  },

  {
    id: 38,
    brand: "H&M",
    name: "Kids Denim Shorts",
    category: "Kids",
    subcategory: "Shorts",
    price: 549,
    originalPrice: 999,
    discount: 45,
    rating: 4.1,
    image:
      "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=700&q=80",
    description:
      "Comfortable denim shorts perfect for summer days.",
  },

  {
    id: 39,
    brand: "Mini Klub",
    name: "Kids Ethnic Kurta Set",
    category: "Kids",
    subcategory: "Ethnic Wear",
    price: 899,
    originalPrice: 1799,
    discount: 50,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=700",
    description:
      "Festive ethnic kurta set designed for special occasions.",
  },

  {
    id: 40,
    brand: "Mothercare",
    name: "Kids Summer Dress",
    category: "Kids",
    subcategory: "Dresses",
    price: 699,
    originalPrice: 1399,
    discount: 50,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1590480598135-3be152c87913?w=700&q=80",
    description:
      "Lightweight summer dress for comfortable everyday wear.",
  },

  {
    id: 41,
    brand: "Puma",
    name: "Kids Graphic T-Shirt",
    category: "Kids",
    subcategory: "T-Shirts",
    price: 599,
    originalPrice: 1099,
    discount: 45,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=700&q=80",
    description:
      "Playful graphic t-shirt designed for active kids.",
  },

  {
    id: 42,
    brand: "H&M",
    name: "Kids Casual Shorts",
    category: "Kids",
    subcategory: "Shorts",
    price: 499,
    originalPrice: 899,
    discount: 44,
    rating: 4.1,
    image:
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=700&q=80",
    description:
      "Easy-to-wear casual shorts for everyday activities.",
  },

  {
    id: 43,
    brand: "Mothercare",
    name: "Kids Cotton Set",
    category: "Kids",
    subcategory: "Sets",
    price: 799,
    originalPrice: 1499,
    discount: 47,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=700",
    description:
      "Soft cotton co-ord set for comfortable everyday wear.",
  },

  {
    id: 44,
    brand: "Nike",
    name: "Kids Training Sneakers",
    category: "Kids",
    subcategory: "Shoes",
    price: 1399,
    originalPrice: 2699,
    discount: 48,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=700",
    description:
      "Sporty sneakers built for active kids.",
  },

  {
    id: 45,
    brand: "Mini Klub",
    name: "Kids Festive Wear Set",
    category: "Kids",
    subcategory: "Ethnic Wear",
    price: 999,
    originalPrice: 1999,
    discount: 50,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=700&q=80",
    description:
      "Festive clothing set designed for celebrations and special days.",
  },

  // =====================================================
  // BEAUTY - 15 PRODUCTS
  // =====================================================

  {
    id: 46,
    brand: "Maybelline",
    name: "Fit Me Matte Foundation",
    category: "Beauty",
    subcategory: "Makeup",
    price: 549,
    originalPrice: 699,
    discount: 21,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=700",
    description:
      "Lightweight matte foundation for an even natural-looking finish.",
  },

  {
    id: 47,
    brand: "Lakme",
    name: "Eyeconic Kajal",
    category: "Beauty",
    subcategory: "Makeup",
    price: 199,
    originalPrice: 299,
    discount: 33,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1631214524020-7e18dbd7d8c1?w=700",
    description:
      "Smooth kajal for defined and expressive eyes.",
  },

  {
    id: 48,
    brand: "The Ordinary",
    name: "Niacinamide Face Serum",
    category: "Beauty",
    subcategory: "Skincare",
    price: 699,
    originalPrice: 899,
    discount: 22,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=700",
    description:
      "Lightweight face serum designed for everyday skincare.",
  },

  {
    id: 49,
    brand: "Minimalist",
    name: "Vitamin C Face Serum",
    category: "Beauty",
    subcategory: "Skincare",
    price: 599,
    originalPrice: 799,
    discount: 25,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700",
    description:
      "Daily facial serum formulated for a brighter-looking complexion.",
  },

  {
    id: 50,
    brand: "L'Oreal",
    name: "Dream Lengths Shampoo",
    category: "Beauty",
    subcategory: "Haircare",
    price: 499,
    originalPrice: 699,
    discount: 29,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=700",
    description:
      "Nourishing shampoo designed for soft and manageable hair.",
  },

  {
    id: 51,
    brand: "Dove",
    name: "Nourishing Body Wash",
    category: "Beauty",
    subcategory: "Bath & Body",
    price: 349,
    originalPrice: 499,
    discount: 30,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700",
    description:
      "Gentle body wash for a fresh and moisturised feel.",
  },

  {
    id: 52,
    brand: "Mamaearth",
    name: "Hair Growth Kit",
    category: "Beauty",
    subcategory: "Haircare",
    price: 899,
    originalPrice: 1299,
    discount: 31,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700",
    description:
      "Everyday haircare essentials for a healthy-looking routine.",
  },

  {
    id: 53,
    brand: "Nykaa",
    name: "Matte Lipstick",
    category: "Beauty",
    subcategory: "Makeup",
    price: 399,
    originalPrice: 599,
    discount: 33,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=700",
    description:
      "Richly pigmented matte lipstick with comfortable wear.",
  },

  {
    id: 54,
    brand: "Lakme",
    name: "Absolute Highlighter",
    category: "Beauty",
    subcategory: "Makeup",
    price: 649,
    originalPrice: 999,
    discount: 35,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700",
    description:
      "Radiant highlighter for a luminous makeup finish.",
  },

  {
    id: 55,
    brand: "Plum",
    name: "Green Tea Face Wash",
    category: "Beauty",
    subcategory: "Skincare",
    price: 399,
    originalPrice: 575,
    discount: 31,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=700",
    description:
      "Refreshing face wash suitable for everyday skincare.",
  },

  {
    id: 56,
    brand: "L'Oreal",
    name: "Elnett Hair Spray",
    category: "Beauty",
    subcategory: "Haircare",
    price: 699,
    originalPrice: 899,
    discount: 22,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700",
    description:
      "Lightweight hairspray for flexible everyday styling.",
  },

  {
    id: 57,
    brand: "Nivea",
    name: "Body Lotion",
    category: "Beauty",
    subcategory: "Bath & Body",
    price: 299,
    originalPrice: 399,
    discount: 25,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700",
    description:
      "Moisturising body lotion for soft and smooth-looking skin.",
  },

  {
    id: 58,
    brand: "Fogg",
    name: "Fresh Fragrance",
    category: "Beauty",
    subcategory: "Fragrance",
    price: 499,
    originalPrice: 699,
    discount: 29,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=700",
    description:
      "Fresh everyday fragrance with a modern scent profile.",
  },

  {
    id: 59,
    brand: "Engage",
    name: "Luxury Eau De Parfum",
    category: "Beauty",
    subcategory: "Fragrance",
    price: 799,
    originalPrice: 1199,
    discount: 33,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=700",
    description:
      "Elegant fragrance designed for special occasions.",
  },

  {
    id: 60,
    brand: "Maybelline",
    name: "Lash Sensational Mascara",
    category: "Beauty",
    subcategory: "Makeup",
    price: 499,
    originalPrice: 699,
    discount: 29,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1631214524020-7e18dbd7d8c1?w=700",
    description:
      "Volumising mascara for defined and dramatic-looking lashes.",
  },

  // =====================================================
  // ACCESSORIES - 15 PRODUCTS
  // =====================================================

  {
    id: 61,
    brand: "Lavie",
    name: "Women Structured Handbag",
    category: "Accessories",
    subcategory: "Bags",
    price: 1299,
    originalPrice: 2499,
    discount: 48,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700",
    description:
      "Elegant structured handbag designed for everyday styling.",
  },

  {
    id: 62,
    brand: "Fossil",
    name: "Classic Analog Watch",
    category: "Accessories",
    subcategory: "Watches",
    price: 2999,
    originalPrice: 4999,
    discount: 40,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700",
    description:
      "Classic analog watch with a timeless sophisticated design.",
  },

  {
    id: 63,
    brand: "Voyage",
    name: "Leather Wallet",
    category: "Accessories",
    subcategory: "Wallets",
    price: 699,
    originalPrice: 1199,
    discount: 42,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=700",
    description:
      "Compact leather wallet with multiple card and cash compartments.",
  },

  {
    id: 64,
    brand: "Fastrack",
    name: "Unisex Digital Watch",
    category: "Accessories",
    subcategory: "Watches",
    price: 1199,
    originalPrice: 1999,
    discount: 40,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=700",
    description:
      "Modern digital watch designed for everyday wear.",
  },

  {
    id: 65,
    brand: "Mango",
    name: "Women's Sunglasses",
    category: "Accessories",
    subcategory: "Sunglasses",
    price: 899,
    originalPrice: 1599,
    discount: 44,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700",
    description:
      "Fashion-forward sunglasses that complete any outfit.",
  },

  {
    id: 66,
    brand: "Baggit",
    name: "Everyday Shoulder Bag",
    category: "Accessories",
    subcategory: "Bags",
    price: 1099,
    originalPrice: 1999,
    discount: 45,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=700",
    description:
      "Versatile shoulder bag with a practical everyday design.",
  },

  {
    id: 67,
    brand: "Fastrack",
    name: "Metal Strap Watch",
    category: "Accessories",
    subcategory: "Watches",
    price: 1799,
    originalPrice: 2999,
    discount: 40,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=700",
    description:
      "Stylish metal strap watch for modern everyday looks.",
  },

  {
    id: 68,
    brand: "Voyage",
    name: "Classic Leather Belt",
    category: "Accessories",
    subcategory: "Belts",
    price: 499,
    originalPrice: 899,
    discount: 44,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=700",
    description:
      "Classic leather belt suitable for casual and formal outfits.",
  },

  {
    id: 69,
    brand: "Puma",
    name: "Classic Sports Cap",
    category: "Accessories",
    subcategory: "Caps",
    price: 399,
    originalPrice: 699,
    discount: 43,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=700",
    description:
      "Classic sports cap designed for casual everyday styling.",
  },

  {
    id: 70,
    brand: "Mast & Harbour",
    name: "Fashion Bracelet",
    category: "Accessories",
    subcategory: "Jewellery",
    price: 299,
    originalPrice: 599,
    discount: 50,
    rating: 4.1,
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=700",
    description:
      "Minimal bracelet that adds a stylish finishing touch.",
  },

  {
    id: 71,
    brand: "Accessorize",
    name: "Statement Earrings",
    category: "Accessories",
    subcategory: "Jewellery",
    price: 449,
    originalPrice: 799,
    discount: 44,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700",
    description:
      "Elegant statement earrings for everyday and occasion wear.",
  },

  {
    id: 72,
    brand: "Lavie",
    name: "Mini Crossbody Bag",
    category: "Accessories",
    subcategory: "Bags",
    price: 899,
    originalPrice: 1599,
    discount: 44,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=700",
    description:
      "Compact crossbody bag perfect for quick outings.",
  },

  {
    id: 73,
    brand: "Roadster",
    name: "Unisex Casual Cap",
    category: "Accessories",
    subcategory: "Caps",
    price: 349,
    originalPrice: 599,
    discount: 42,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=700",
    description:
      "Minimal casual cap for effortless everyday style.",
  },

  {
    id: 74,
    brand: "Fastrack",
    name: "Round Dial Watch",
    category: "Accessories",
    subcategory: "Watches",
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=700",
    description:
      "Contemporary round-dial watch with a clean modern design.",
  },

  {
    id: 75,
    brand: "Mast & Harbour",
    name: "Fashion Sunglasses",
    category: "Accessories",
    subcategory: "Sunglasses",
    price: 699,
    originalPrice: 1299,
    discount: 46,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700",
    description:
      "Trendy sunglasses designed to elevate everyday outfits.",
  },
];

module.exports = products;