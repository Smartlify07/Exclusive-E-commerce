/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectProductsError,
  selectProductsStatus,
} from "../app/products/productsSlice";
import ProductList from "../pages/HomePage/ProductList/ProductList";

const withProductList = (WrappedComponent) => {
  const WithProductList = ({ ...props }) => {
    const dispatch = useDispatch();
    const productsStatus = useSelector(selectProductsStatus);
    const productsError = useSelector(selectProductsError);
    useEffect(() => {
      if (productsStatus === "idle") {
        dispatch(fetchProducts());
      }
    }, [productsStatus, dispatch]);

    return (
      <ProductList>
        {productsError && (
          <p className="text-2xl font-semibold text-red">{productsError}</p>
        )}
        <WrappedComponent {...props} />
      </ProductList>
    );
  };

  return WithProductList;
};

export default withProductList;
