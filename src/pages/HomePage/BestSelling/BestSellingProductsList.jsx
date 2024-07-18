import { getBestSellingProducts } from "../../../../utils/functions/getProductCategories";
import { selectAllProducts } from "../../../app/products/productsSlice";
import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import ProductCardSkeleton from "../ProductList/ProductCardSkeleton";

const BestSellingProductsList = () => {
  const products = useSelector(selectAllProducts);
  const bestSellingProducts = getBestSellingProducts(products);
  const ProductCard = lazy(() => import("../../../components/ProductCard"));
  const renderedProducts = bestSellingProducts.slice(0, 4).map((product) => (
    <Suspense key={product.id} fallback={<ProductCardSkeleton />}>
      <ProductCard key={product.id} {...product} />
    </Suspense>
  ));
  return (
    <div
      className={`transition-all overflow-hidden grid-auto-fit w-full grid lg:justify-items-center lg:grid-auto-fit-lg gap-[30px] lg:gap-y-[20px] lg:gap-x-0 transform`}
      // style={{ transform: `translateX(-${currentSlide * 10}%)` }}
    >
      {renderedProducts}
    </div>
  );
};

export default BestSellingProductsList;
