import { lazy, Suspense } from "react";
import HomePageSkeleton from "./HomePageSkeleton";

const Homepage = () => {
  const CategoriesList = lazy(() => import("./CategoriesList"));
  const FlashSales = lazy(() => import("./Flashsales/FlashSales"));
  const PromoCarousel = lazy(() => import("./PromoCarousel"));
  return (
    <main className="py-7 font-poppins flex flex-col items-center">
      <Suspense fallback={<HomePageSkeleton />}>
        <div className="md:w-10/12">
          <div className="flex justify-between">
            <CategoriesList />
            <PromoCarousel />
          </div>

          <FlashSales />

          <div className="border border-gray-300 w-full"></div>
        </div>
      </Suspense>
    </main>
  );
};

export default Homepage;
