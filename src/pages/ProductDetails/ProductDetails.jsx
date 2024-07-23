import Thumbnails from "./Thumbnails";
import { useProducts } from "../../hooks/useProducts";
import Rightsection from "./Rightsection";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectProductById } from "../../app/products/productsSlice";
import Loader from "../../components/Loader";
import { lazy, Suspense } from "react";
import withProductList from "../../HOCs/withProductList";
import Ribbon from "../../components/Ribbon";
const ProductDetails = () => {
  useProducts();
  const { id } = useParams();
  const product = useSelector((state) => selectProductById(state, id));
  const { products: recommendedProducts } = useProducts();
  const ExploreProductsList = lazy(() =>
    import("../HomePage/ExploreProducts/ExploreProductList")
  );
  const ProductsList = withProductList(ExploreProductsList);

  return (
    <main className="flex font-poppins flex-col items-center py-10 lg:py-20">
      {product ? (
        <div className="w-10/12 flex flex-col  ">
          <div className="flex flex-col gap-7 lg:gap-[30px] lg:justify-between lg:flex-row">
            <Thumbnails />

            <Rightsection product={product} id={id} />
          </div>

          <div className="py-14 lg:py-24">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Ribbon />
                <h3 className="text-red font-semibold text-base">
                  Related items
                </h3>
              </div>
            </div>
            <Suspense>
              <ProductsList
                showDiscountBadge
                products={recommendedProducts.slice(0, 4)}
              />
            </Suspense>
          </div>
        </div>
      ) : (
        <Loader message={"Getting product details"} />
      )}
    </main>
  );
};

export default ProductDetails;
