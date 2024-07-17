import { getProductDiscount } from "./getDiscount";

export const getFlashSalesProducts = (products) => {
  const filteredProducts = products.filter((product) => {
    const discountPercentage = getProductDiscount(
      product.actualPrice,
      product.discountedPrice
    );

    return discountPercentage >= 20; //
  });
  return filteredProducts.sort((a, b) => {
    const discountPercentageA = getProductDiscount(
      a.actualPrice,
      a.discountedPrice
    );
    const discountPercentageB = getProductDiscount(
      b.actualPrice,
      b.discountedPrice
    );

    return discountPercentageB - discountPercentageA;
  });
};

export const getBestSellingProducts = (products) => {
  const filteredProducts = products.filter(
    (product) => product.revenue > 50000
  );

  return filteredProducts.sort((a, b) => {
    return b.revenue - a.revenue;
  });
};
