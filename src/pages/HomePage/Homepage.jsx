import { lazy, Suspense } from "react";
import HomePageSkeleton from "./HomePageSkeleton";
import Categories from "./Categories/Categories";

const Homepage = () => {
  const CategoriesLinks = lazy(() => import("./CategoriesLinks"));
  const FlashSales = lazy(() => import("./Flashsales/FlashSales"));
  const PromoCarousel = lazy(() => import("./PromoCarousel"));
  return (
    <main className="py-7 font-poppins flex flex-col items-center">
      <Suspense fallback={<HomePageSkeleton />}>
        <div className="md:w-10/12">
          <div className="flex justify-between">
            <CategoriesLinks />
            <PromoCarousel />
          </div>

          <FlashSales />

          <div className="border border-gray-300 w-full"></div>
          <Categories />
        </div>
      </Suspense>
    </main>
  );
};

export default Homepage;
