/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectAllProducts,
  //   selectAllFlashSaleProducts,
  selectProductsStatus,
} from "../../../app/products/productsSlice";
import ProductCard from "./ProductCard";
import useDiscount from "../../../hooks/useDiscount";
import { getProductDiscount } from "../../../../utils/functions/getDiscount";
import { flashSalesProducts } from "../../../../utils/functions/getProductCategories";

const ProductList = ({ type, currentSlide }) => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  //   const flashSalesProducts = useSelector(selectAllFlashSaleProducts);
  //   console.log(flashSalesProducts);

  const status = useSelector(selectProductsStatus);
  const flashSales = flashSalesProducts(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(currentSlide);

  return (
    <div className={`container overflow-x-hidden w-full   mx-auto py-8 `}>
      <div
        className={`transition-all w-full flex gap-[30px] transform`}
        style={{ transform: `translateX(-${currentSlide * 10}%)` }}
      >
        {flashSales.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
