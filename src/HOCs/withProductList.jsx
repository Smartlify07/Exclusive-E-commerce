/* eslint-disable react/prop-types */
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectProductsError,
  selectProductsStatus,
} from "../app/products/productsSlice";
import ProductList from "../pages/HomePage/ProductList/ProductList";
import ProductCardSkeleton from "../pages/HomePage/ProductList/ProductCardSkeleton";

const withProductList = (WrappedComponent) => {
  const WithProductList = ({ ...props }) => {
    const dispatch = useDispatch();

    const productsStatus = useSelector(selectProductsStatus);

    const productsError = useSelector(selectProductsError);

    const ProductCard = lazy(() => import("../components/ProductCard"));

    const renderedProducts = props.products
      ? props?.products.map((product) => (
          <Suspense key={product.id} fallback={<ProductCardSkeleton />}>
            <ProductCard
              showDiscountBadge={props.showDiscountBadge}
              showDeleteButton={props.showDeleteButton}
              {...product}
            />
          </Suspense>
        ))
      : null;

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
        <WrappedComponent {...props}>
          {props.products && renderedProducts}
        </WrappedComponent>
      </ProductList>
    );
  };

  return WithProductList;
};

export default withProductList;
