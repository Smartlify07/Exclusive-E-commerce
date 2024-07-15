import { lazy, Suspense } from "react";
import HomePageSkeleton from "./HomePageSkeleton";

const Homepage = () => {
  const Categories = lazy(() => import("./Categories"));
  const FlashSales = lazy(() => import("./Flashsales/FlashSales"));
  const PromoCarousel = lazy(() => import("./PromoCarousel"));
  return (
    <main className="py-10 font-poppins flex flex-col items-center">
      <Suspense fallback={<HomePageSkeleton />}>
        <div className="md:w-10/12">
          <div className="flex justify-between">
            <Categories />
            <PromoCarousel />
          </div>

          <FlashSales />
        </div>
      </Suspense>
    </main>
  );
};

export default Homepage;
