import { getProductDiscount } from "./getDiscount";

export const flashSalesProducts = (products) => {
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
