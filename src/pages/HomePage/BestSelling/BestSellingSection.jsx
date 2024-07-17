import { Link } from "react-router-dom";
import Ribbon from "../../../components/Ribbon";
import withProductList from "../../../HOCs/withProductList";
import { lazy, Suspense } from "react";

const BestSellingSection = () => {
  const BestSellingProductsList = lazy(() =>
    import("./BestSellingProductsList")
  );
  const ProductList = withProductList(BestSellingProductsList);
  return (
    <section className="py-10">
      <header className="flex items-center gap-2">
        <Ribbon />
        <h1 className="text-red font-semibold text-base">This Month</h1>
      </header>

      <div className="flex items-center justify-between mt-5">
        <header>
          <h1 className="text-black font-semibold text-4xl">
            Best Selling Products
          </h1>
        </header>

        <Link
          to={"/products/bestselling"}
          className="bg-red rounded-sm py-3 px-10 text-white"
        >
          View All
        </Link>
      </div>

      <Suspense
        fallback={
          <div className="bg-gray-100 w-full h-[300px] rounded-sm"></div>
        }
      >
        <ProductList type="flashsales" />
      </Suspense>
    </section>
  );
};

export default BestSellingSection;
