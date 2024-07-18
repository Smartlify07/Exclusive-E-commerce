import JustForYouTopNav from "./JustForYouTopNav";
import { lazy, Suspense } from "react";
import withProductList from "../../HOCs/withProductList";

const JustForYou = () => {
  const ExploreProductList = lazy(() =>
    import("../../pages/HomePage/ExploreProducts/ExploreProductList")
  );

  const ProductList = withProductList(ExploreProductList);

  return (
    <section className="mt-7">
      <JustForYouTopNav />
      <Suspense fallback={<div className="bg-gray-100 w-full h-[250px]"></div>}>
        <ProductList />
      </Suspense>
    </section>
  );
};

export default JustForYou;
