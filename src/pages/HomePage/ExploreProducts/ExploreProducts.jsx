import { lazy, Suspense } from "react";
import Ribbon from "../../../components/Ribbon";
import SliderControls from "../../../components/SliderControls";
import withProductList from "../../../HOCs/withProductList";
import { Link } from "react-router-dom";

const ExploreProducts = () => {
  const ExploreProductsList = lazy(() => import("./ExploreProductList"));
  const ProductsList = withProductList(ExploreProductsList);
  return (
    <section className="py-20 flex flex-col items-center">
      <div className="flex flex-col w-10/12 lg:w-full">
        <header className="flex gap-2 items-center">
          <Ribbon />
          <h3 className="text-red text-base font-semibold">Our Products</h3>
        </header>

        <div className="flex mt-5 items-center justify-between">
          <h1 className="text-black font-semibold text-4xl">
            Explore Our Products
          </h1>

          <SliderControls />
        </div>

        <Suspense
          fallback={
            <div className="bg-gray-100 w-full h-[300px] rounded-sm"></div>
          }
        >
          <ProductsList type="flashsales" />
        </Suspense>

        <Link className="text-white self-center font-semibold mt-7 bg-red rounded-sm px-12 py-4">
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default ExploreProducts;
