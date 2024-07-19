import { useSelector } from "react-redux";
import JustForYou from "./JustForYou";
import WishListTopNav from "./WishListTopNav";
import { selectAllWishListProducts } from "../../app/wishlist/wishlistSlice";
import withProductList from "../../HOCs/withProductList";
import { lazy, Suspense } from "react";
import useWishListProducts from "../../hooks/useWishListProducts";
const Wishlist = () => {
  const WishListProducts = lazy(() => import("./WishListProducts"));
  const products = useSelector(selectAllWishListProducts);
  const ProductList = withProductList(WishListProducts);
  useWishListProducts();
  return (
    <main className="py-5 font-poppins flex flex-col items-center justify-center  lg:px-0 lg:py-10">
      <div className="w-10/12">
        <WishListTopNav />
        <Suspense>
          <ProductList products={products} />
        </Suspense>

        <JustForYou />
      </div>
    </main>
  );
};

export default Wishlist;
