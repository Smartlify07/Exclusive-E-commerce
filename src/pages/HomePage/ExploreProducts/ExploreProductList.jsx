import { useSelector } from "react-redux";
import { selectAllProducts } from "../../../app/products/productsSlice";
import { lazy, Suspense } from "react";
import ProductCardSkeleton from "../ProductList/ProductCardSkeleton";

const ExploreProductList = () => {
  const products = useSelector(selectAllProducts);
  const ProductCard = lazy(() => import("../../../components/ProductCard"));

  const renderedProducts = products.slice(0, 8).map((product) => (
    <Suspense key={product.id} fallback={<ProductCardSkeleton />}>
      <ProductCard {...product} />
    </Suspense>
  ));

  console.log(products);

  return (
    <div
      className={`transition-all w-full grid   grid-auto-fit gap-[30px] transform lg:grid-auto-fit-lg lg:justify-items-center`}
    >
      {renderedProducts}
    </div>
  );
};

export default ExploreProductList;
