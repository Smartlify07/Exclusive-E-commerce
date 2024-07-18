export const getProductDiscount = (actualPrice, discountedPrice) => {
  return Math.floor(((actualPrice - discountedPrice) / actualPrice) * 100);
};
