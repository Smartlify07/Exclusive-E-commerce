import { lazy, Suspense } from "react";
import HomePageSkeleton from "./HomePageSkeleton";
import ServiceHighlights from "./ServiceHighlights/ServiceHighlights";
import { useSelector } from "react-redux";
import { selectAuth } from "../../app/auth/authSlice";

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

  const user = useSelector(selectAuth);
  console.log(user);

  return (
    <main role="main" className="py-7 font-poppins flex flex-col items-center">
      <Suspense fallback={<HomePageSkeleton />}>
        <div className="  w-full md:w-11/12 lg:w-10/12">
          <div className="flex py-0 gap-6 flex-col md:w-full  lg:py-0 lg:justify-between lg:flex-row">
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
