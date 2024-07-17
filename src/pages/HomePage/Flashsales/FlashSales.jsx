/* eslint-disable react/prop-types */
import FlashSalesTimer from "./FlashSalesTimer";
import { lazy, memo, Suspense, useState } from "react";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../../app/products/productsSlice";
import { Link } from "react-router-dom";
import Ribbon from "../../../components/Ribbon";
import SliderControls from "../../../components/SliderControls";
import { getFlashSalesProducts } from "../../../../utils/functions/getProductCategories";
import withProductList from "../../../HOCs/withProductList";

const FlashSales = () => {
  const FlashSalesProductsList = lazy(() => import("./FlashSalesProductsList"));
  const ProductList = withProductList(FlashSalesProductsList);
  const products = useSelector(selectAllProducts);
  const flashSaleProducts = getFlashSalesProducts(products);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    console.log(currentSlide);
    setCurrentSlide((prevIndex) =>
      prevIndex === flashSaleProducts.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <section className="flex flex-col py-20 items-center">
      <div className="md:w-full  flex flex-col gap-5">
        <header className="flex items-center gap-1">
          <Ribbon />
          <h3 className="text-red font-semibold text-base">Today&apos;s</h3>
        </header>

        <div className="flex items-center justify-between md:w-full">
          <div className="flex items-center justify-between w-7/12">
            <h3 className="text-black  font-semibold md:text-[36px]">
              Flash Sales
            </h3>
            <FlashSalesTimer />
          </div>

          {flashSaleProducts.length > 5 && (
            <SliderControls
              leftSlide={handlePrevClick}
              rightSlide={handleNextClick}
            />
          )}
        </div>

        <Suspense
          fallback={
            <div className="bg-gray-100 w-full h-[300px] rounded-sm"></div>
          }
        >
          <ProductList type="flashsales" />
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
