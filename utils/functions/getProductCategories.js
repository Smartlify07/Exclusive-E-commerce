import { getProductDiscount } from "./getDiscount";

export const flashSalesProducts = (products) => {
  return products.sort((a, b) => {
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
