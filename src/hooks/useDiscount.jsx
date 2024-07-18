import { useCallback } from "react";
import { getProductDiscount } from "../../utils/functions/getDiscount";

const useDiscount = ({ actualPrice, discountedPrice }) => {
  const discount = useCallback(() => {
    return getProductDiscount(actualPrice, discountedPrice);
  }, [actualPrice, discountedPrice]);
  return discount();
};

export default useDiscount;
