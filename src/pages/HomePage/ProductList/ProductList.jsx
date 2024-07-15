import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectAllProducts,
  selectProductsStatus,
} from "../../../app/products/productsSlice";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  const status = useSelector(selectProductsStatus);
  useEffect(() => {
    console.log(status);
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="grid lg:grid-cols-3 gap-3">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
