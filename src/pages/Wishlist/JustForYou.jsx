import JustForYouTopNav from "./JustForYouTopNav";
import { lazy, Suspense } from "react";
import withProductList from "../../HOCs/withProductList";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../app/products/productsSlice";
import ProductCardSkeleton from "../HomePage/ProductList/ProductCardSkeleton";

const JustForYou = () => {
  const ExploreProductList = lazy(() =>
    import("../../pages/HomePage/ExploreProducts/ExploreProductList")
  );

  const products = useSelector(selectAllProducts);
  const ProductList = withProductList(ExploreProductList);

  return (
    <section className="mt-7">
      <JustForYouTopNav />
      <Suspense
        fallback={
          <div className="grid grid-auto-fit">
            {products.slice(0, 6).map((product) => (
              <ProductCardSkeleton key={product.id} />
            ))}
          </div>
        }
      >
        <ProductList products={products.slice(0, 6)} showDiscountBadge />
      </Suspense>
    </section>
  );
};

export default JustForYou;
