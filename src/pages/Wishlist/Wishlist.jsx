import { useSelector } from "react-redux";
import JustForYou from "./JustForYou";
import WishListTopNav from "./WishListTopNav";
import withProductList from "../../HOCs/withProductList";
import useWishListProducts from "../../hooks/useWishListProducts";
import WishListProducts from "./WishListProducts";
import {
  selectAllWishListProducts,
  wishListStatus,
} from "../../app/user/userWishlistSlice";
import Loader from "../../components/Loader";
import { ToastContainer } from "react-toastify";

const Wishlist = () => {
  const products = useSelector(selectAllWishListProducts);
  const status = useSelector(wishListStatus);

  const ProductList = withProductList(WishListProducts);
  useWishListProducts();
  console.log(products);
  // const status = useSelector(selectWishListStatus);

  return (
    <main className="py-5 font-poppins flex flex-col items-center justify-center  lg:px-0 lg:py-10">
      <div className="w-10/12">
        <WishListTopNav />
        <ToastContainer autoClose={3000} />
        <div className="flex items-center py-5 justify-center w-full">
          {status === "pending" && (
            <Loader message={"Getting wishlist items"} />
          )}
        </div>

        <ProductList showDeleteButton products={products} />
        <JustForYou />
      </div>
    </main>
  );
};

export default Wishlist;
