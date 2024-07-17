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
      className={`transition-all w-full flex gap-[30px] transform`}
      // style={{ transform: `translateX(-${currentSlide * 10}%)` }}
    >
      {renderedProducts}
    </div>
  );
};

export default BestSellingProductsList;
