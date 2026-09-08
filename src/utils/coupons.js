// =====================================================
// COUPON DEFINITIONS
// =====================================================

export const COUPONS = {
  WELCOME10: {
    type: "percent",
    value: 10,
    minOrder: 0,
    description: "10% off on your order",
  },

  FLAT500: {
    type: "flat",
    value: 500,
    minOrder: 2000,
    description: "₹500 off on orders above ₹2,000",
  },

  SAVE20: {
    type: "percent",
    value: 20,
    minOrder: 1500,
    maxDiscount: 1000,
    description: "20% off (up to ₹1,000) on orders above ₹1,500",
  },
};

// =====================================================
// CALCULATE DISCOUNT
// =====================================================

export const calculateDiscount = (code, subtotal) => {
  if (!code) {
    return {
      valid: false,
      discount: 0,
      message: "",
    };
  }

  const coupon = COUPONS[code.trim().toUpperCase()];

  if (!coupon) {
    return {
      valid: false,
      discount: 0,
      message: "Invalid coupon code.",
    };
  }

  if (subtotal < coupon.minOrder) {
    return {
      valid: false,
      discount: 0,
      message: `Add items worth ₹${(
        coupon.minOrder - subtotal
      ).toLocaleString("en-IN")} more to use this coupon.`,
    };
  }

  let discount = 0;

  if (coupon.type === "percent") {
    discount = (subtotal * coupon.value) / 100;

    if (coupon.maxDiscount) {
      discount = Math.min(discount, coupon.maxDiscount);
    }
  } else if (coupon.type === "flat") {
    discount = coupon.value;
  }

  discount = Math.min(discount, subtotal);
  discount = Math.round(discount);

  return {
    valid: true,
    discount,
    message: `Coupon applied! You saved ₹${discount.toLocaleString(
      "en-IN"
    )}.`,
  };
};