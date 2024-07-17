import { lazy, Suspense } from "react";
import HomePageSkeleton from "./HomePageSkeleton";
import ServiceHighlights from "./ServiceHighlights/ServiceHighlights";

const Homepage = () => {
  const CategoriesLinks = lazy(() => import("./CategoriesLinks"));
  const FlashSales = lazy(() => import("./Flashsales/FlashSales"));
  const PromoCarousel = lazy(() => import("./PromoCarousel"));
  const Categories = lazy(() => import("./Categories/Categories"));
  const BestSellingSection = lazy(() =>
    import("./BestSelling/BestSellingSection")
  );
  const NewArrivals = lazy(() => import("./NewArrivals/NewArrivals"));
  const ProductAdvert = lazy(() => import("./ProductAdvert"));
  const ExploreProducts = lazy(() =>
    import("./ExploreProducts/ExploreProducts")
  );

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
          <BestSellingSection />

          <ProductAdvert />
          <ExploreProducts />

          <NewArrivals />

          <ServiceHighlights />
        </div>
      </Suspense>
    </main>
  );
};

export default Homepage;
