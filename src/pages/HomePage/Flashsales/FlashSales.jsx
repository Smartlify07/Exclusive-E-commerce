/* eslint-disable react/prop-types */
import FlashSalesTimer from "./FlashSalesTimer";
import { lazy, memo, Suspense } from "react";
import { Link } from "react-router-dom";
import Ribbon from "../../../components/Ribbon";
import SliderControls from "../../../components/SliderControls";
import { getFlashSalesProducts } from "../../../../utils/functions/getProductCategories";
import withProductList from "../../../HOCs/withProductList";
import { useProducts } from "../../../hooks/useProducts";

const FlashSales = () => {
  const FlashSalesProductsList = lazy(() => import("./FlashSalesProductsList"));
  const ProductList = withProductList(FlashSalesProductsList);
  const { products } = useProducts();
  const flashSaleProducts = getFlashSalesProducts(products);

  return (
    <section className="flex flex-col py-20 items-center">
      <div className="w-10/12 md:w-full  flex flex-col gap-5">
        <header className="flex items-center gap-1">
          <Ribbon />
          <h3 className="text-red font-semibold text-base">Today&apos;s</h3>
        </header>

        <div className="flex  flex-col  justify-between md:w-full lg:items-center lg:flex-row">
          <div className="flex flex-col  justify-between lg:w-7/12 lg:items-center lg:flex-row">
            <h3 className="text-black text-[36px]  font-semibold">
              Flash Sales
            </h3>
            <FlashSalesTimer />
          </div>

          {flashSaleProducts.length > 5 && <SliderControls />}
        </div>

        <Suspense
          fallback={
            <div className="bg-gray-100 w-full h-[300px] rounded-sm"></div>
          }
        >
          <ProductList products={flashSaleProducts} showDiscountBadge />
        </Suspense>

        <Link
          to={"/products"}
          className="text-white font-medium bg-red rounded-sm px-12 py-3 mt-3 self-center"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default memo(FlashSales);
