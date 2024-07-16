/* eslint-disable react/prop-types */
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import FlashSalesTimer from "./FlashSalesTimer";
import { lazy, memo, Suspense, useState } from "react";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../../app/products/productsSlice";
import { Link } from "react-router-dom";
import ProductCardSkeleton from "../ProductList/ProductCardSkeleton";

const FlashSales = () => {
  const ProductList = lazy(() => import("../ProductList/ProductList"));
  const products = useSelector(selectAllProducts);
  const [currentSlide, setCurrentSlide] = useState(0);
  const handlePrevClick = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? products.length - 2 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    console.log(currentSlide);
    setCurrentSlide((prevIndex) =>
      prevIndex === products.length - 3 ? 0 : prevIndex + 1
    );
  };
  return (
    <section className="flex flex-col py-20 items-center">
      <div className="md:w-full  flex flex-col gap-5">
        <header className="flex items-center gap-1">
          <span className="w-5 h-12 rounded-md bg-red"></span>
          <h3 className="text-red font-semibold text-base">Today&apos;s</h3>
        </header>

        <div className="flex items-center justify-between md:w-full">
          <div className="flex items-center justify-between w-7/12">
            <h3 className="text-black  font-semibold md:text-[36px]">
              Flash Sales
            </h3>
            <FlashSalesTimer />
          </div>

          <div className="flex items-center gap-2 justify-self-end ">
            <button className="bg-gray-300 flex items-center justify-center rounded-full w-10 h-10">
              <FaArrowLeft />
            </button>
            <button className="bg-gray-300 flex items-center justify-center rounded-full w-10 h-10">
              <FaArrowRight />
            </button>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="w-full h-[300px] bg-gray-100 rounded-sm"></div>
          }
        >
          <ProductList currentSlide={currentSlide} type={"flashsales"} />
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
