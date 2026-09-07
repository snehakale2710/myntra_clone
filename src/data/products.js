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
      "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://plus.unsplash.com/premium_photo-1673977134363-c86a9d5dcafa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVuJTIwU2xpbSUyMEZpdCUyMEplYW5zfGVufDB8fDB8fHww",
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
      "https://images.unsplash.com/photo-1775979654476-89575df179bd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1625910513399-c9fcba54338c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWVuJTIwQ2xhc3NpYyUyMFBvbG8lMjBULVNoaXJ0fGVufDB8fDB8fHww",
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
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1549369130-1f99f678dc12?q=80&w=739&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1555583743-991174c11425?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1771340183956-6f69d2d08f43?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=700&q=80",
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
      "https://images.unsplash.com/photo-1714143164072-7646ef5cb24d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1625728273603-0404614abb7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1740512922260-543b1b83c986?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1624548140129-74786c5f1279?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVuJTIwV2ludGVyJTIwSmFja2V0fGVufDB8fDB8fHww",
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
      "https://images.unsplash.com/photo-1511130558090-00af810c21b1?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://plus.unsplash.com/premium_photo-1689371956254-1a8adca96b78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1619216910014-1fdb7a8e98e9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1745313452052-0e4e341f326c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1613972798457-45fc5237ae32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Classic straight-fit jeans designed for everyday styling.",
  },
  {
    // FIXED: was a duplicate of item #17 (same top image)
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
      "https://plus.unsplash.com/premium_photo-1689575249400-fca1a67732b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Minimal solid top that pairs perfectly with jeans and trousers.",
  },
  {
    // FIXED: was a duplicate of item #19 (same kurta image)
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
      "https://images.unsplash.com/photo-1741847639057-b51a25d42892?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1735553816887-95a2657d5fd8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1760624294535-40dfdc84a48f?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1551854838-212c50b4c184?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1622079400125-5b6679552976?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://plus.unsplash.com/premium_photo-1690350731538-57344931ac02?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
     "https://media.istockphoto.com/id/1424006655/photo/full-length-of-confident-asian-woman-smiling-in-a-casual-outfit-in-a-white-t-shirt-and-jeans.jpg?s=1024x1024&w=is&k=20&c=EXa_oAT8vBaYCpio3HewWb1rSTzzE-ngs9RgjSsRLGs=",
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
      "https://images.unsplash.com/photo-1766471524198-055f1fdc555d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1754639488181-7eae9f6c06e0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1605523741177-cd660595c2cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1785828642909-676851fe3db2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1642597549109-d449a47b8113?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://plus.unsplash.com/premium_photo-1723809808474-d4f3488faf1d?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1571395770221-867c6e2251bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://plus.unsplash.com/premium_photo-1770512653198-0d3a90e5f4a2?q=80&w=717&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://plus.unsplash.com/premium_photo-1723575737806-ecd7f74bf3a1?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1686823939646-69f76240e778?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1599624427857-461fd60c23e5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lightweight summer dress for comfortable everyday wear.",
  },
  {
    // FIXED: was a duplicate of item #31 (same t-shirt image)
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
      "https://images.unsplash.com/photo-1764417846375-da86bd2603f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8S2lkcyUyMEdyYXBoaWMlMjBULVNoaXJ0fGVufDB8fDB8fHww",
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
      "https://plus.unsplash.com/premium_photo-1689575249309-79f1308d6180?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Easy-to-wear casual shorts for everyday activities.",
  },
  {
    // FIXED: was a duplicate of item #39 (same kids set image)
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
      "https://images.unsplash.com/photo-1737716949211-f3c040c53bea?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Soft cotton co-ord set for comfortable everyday wear.",
  },
  {
    // FIXED: was a duplicate of item #32 (same kids shoes image)
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
      "https://images.unsplash.com/photo-1654907118253-74c27307a955?q=80&w=756&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1724940765589-081439d69251?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Festive clothing set designed for celebrations and special days.",
  },

  // =====================================================
  // BEAUTY - 15 PRODUCTS
  // =====================================================
  {
    id: 46,
    brand: "Sephora",
    name: "Fit Me Matte Foundation",
    category: "Beauty",
    subcategory: "Makeup",
    price: 549,
    originalPrice: 699,
    discount: 21,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1627885793933-584e53987c14?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://plus.unsplash.com/premium_photo-1661768065574-c2a463343342?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1696025522422-aa9a74e4f3d5?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lightweight face serum designed for everyday skincare.",
  },
  {
    id: 49,
    brand: "Beauty Formula",
    name: "Vitamin C Face Serum",
    category: "Beauty",
    subcategory: "Skincare",
    price: 599,
    originalPrice: 799,
    discount: 25,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1731599974324-c770bd331f42?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Daily facial serum formulated for a brighter-looking complexion.",
  },
  {
    id: 50,
    brand: "MockUp",
    name: "Dream Lengths Shampoo",
    category: "Beauty",
    subcategory: "Haircare",
    price: 499,
    originalPrice: 699,
    discount: 29,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1701992678972-d5a053ad0fb0?q=80&w=657&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Nourishing shampoo designed for soft and manageable hair.",
  },
  {
    // FIXED: was a duplicate of item #49 (same serum image)
    id: 51,
    brand: "Dr. Teal's",
    name: "Nourishing Body Wash",
    category: "Beauty",
    subcategory: "Bath & Body",
    price: 349,
    originalPrice: 499,
    discount: 30,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1681880152550-14915b1d8b8e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1701686794570-fe1d390333e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGFpciUyMEdyb3d0aCUyMEtpdHxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Everyday haircare essentials for a healthy-looking routine.",
  },
  {
    id: 53,
    brand: "Unique",
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
      "https://images.unsplash.com/photo-1580694500583-21a6189e6b56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Radiant highlighter for a luminous makeup finish.",
  },
  {
    id: 55,
    brand: "Curology",
    name: "Cleanser",
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
    // FIXED: was a duplicate of item #52 (same haircare image)
    id: 56,
    brand: "Mockups",
    name: "Elnett Hair Spray",
    category: "Beauty",
    subcategory: "Haircare",
    price: 699,
    originalPrice: 899,
    discount: 22,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1694101454099-defbe9571d06?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lightweight hairspray for flexible everyday styling.",
  },
  {
    // FIXED: was a duplicate of items #49/#51 (same body-care image)
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
      "https://images.unsplash.com/photo-1597931752949-98c74b5b159f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Moisturising body lotion for soft and smooth-looking skin.",
  },
  {
    id: 58,
    brand: "Chanel",
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
    brand: "Chanel",
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
    // FIXED: was a duplicate of item #47 (same kajal image)
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
      "https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    // FIXED: was a duplicate of item #64 (same watch image)
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
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=700&q=80",
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
    // FIXED: was a duplicate of items #64/#67 (same watch image)
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
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=700&q=80",
    description:
      "Contemporary round-dial watch with a clean modern design.",
  },
  {
    // FIXED: was a duplicate of item #65 (same sunglasses image)
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
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=700&q=80",
    description:
      "Trendy sunglasses designed to elevate everyday outfits.",
  },
];

export default products;