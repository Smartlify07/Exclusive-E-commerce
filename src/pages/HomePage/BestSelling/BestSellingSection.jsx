import { Link } from "react-router-dom";
import Ribbon from "../../../components/Ribbon";
import withProductList from "../../../HOCs/withProductList";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { getBestSellingProducts } from "../../../../utils/functions/getProductCategories";
import { selectAllProducts } from "../../../app/products/productsSlice";

const BestSellingSection = () => {
  const BestSellingProductsList = lazy(() =>
    import("./BestSellingProductsList")
  );
  const products = useSelector(selectAllProducts);
  const bestSellingProducts = getBestSellingProducts(products);

  const ProductList = withProductList(BestSellingProductsList);
  return (
    <section className="py-10 flex flex-col items-center">
      <div className="flex flex-col w-10/12 lg:w-full">
        <header className="flex items-center gap-2">
          <Ribbon />
          <h1 className="text-red font-semibold text-base">This Month</h1>
        </header>
        <div className="flex flex-col gap-2 items-center justify-between mt-5 lg:flex-row">
          <header>
            <h1 className="text-black  font-semibold text-4xl lg:text-left">
              Best Selling Products
            </h1>
          </header>
          <Link
            to={"/products/bestselling"}
            className="bg-red self-start rounded-sm py-3 px-10 text-white"
          >
            View All
          </Link>
        </div>
        <Suspense
          fallback={
            <div className="bg-gray-100 w-full h-[300px] rounded-sm"></div>
          }
        >
          <ProductList products={bestSellingProducts.slice(0, 4)} />
        </Suspense>
      </div>
    </section>
  );
};

export default BestSellingSection;
