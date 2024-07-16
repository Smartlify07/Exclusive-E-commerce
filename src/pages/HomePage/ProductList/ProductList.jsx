/* eslint-disable react/prop-types */
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectAllProducts,
} from "../../../app/products/productsSlice";
import { flashSalesProducts } from "../../../../utils/functions/getProductCategories";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductList = ({ type, currentSlide }) => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const ProductCard = lazy(() => import("./ProductCard"));

  const flashSales = flashSalesProducts(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={`container overflow-x-hidden w-full   mx-auto py-8 `}>
      <div
        className={`transition-all w-full flex gap-[30px] transform`}
        style={{ transform: `translateX(-${currentSlide * 10}%)` }}
      >
        {flashSales.map((product) => (
          <Suspense key={product.id} fallback={<ProductCardSkeleton />}>
            <ProductCard key={product.id} {...product} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
