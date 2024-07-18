import { useSelector } from "react-redux";
import { selectAllProducts } from "../../../app/products/productsSlice";
import { getFlashSalesProducts } from "../../../../utils/functions/getProductCategories";
import { lazy, Suspense } from "react";
import ProductCardSkeleton from "../ProductList/ProductCardSkeleton";
const FlashSalesProductsList = () => {
  const products = useSelector(selectAllProducts);
  const flashSales = getFlashSalesProducts(products);
  const ProductCard = lazy(() => import("../../../components/ProductCard"));
  return (
    <div
      className={`transition-all overflow-hidden w-full grid grid-auto-fit  gap-[30px] transform lg:justify-items-center`}
      // style={{ transform: `translateX(-${currentSlide * 10}%)` }}
    >
      {flashSales.map((product) => (
        <Suspense key={product.id} fallback={<ProductCardSkeleton />}>
          <ProductCard showDiscountBadge={true} key={product.id} {...product} />
        </Suspense>
      ))}
    </div>
  );
};

export default FlashSalesProductsList;
