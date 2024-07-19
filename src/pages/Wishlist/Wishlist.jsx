import { useSelector } from "react-redux";
import JustForYou from "./JustForYou";
import WishListTopNav from "./WishListTopNav";
import { selectAllWishListProducts } from "../../app/wishlist/wishlistSlice";
import withProductList from "../../HOCs/withProductList";
import useWishListProducts from "../../hooks/useWishListProducts";
import WishListProducts from "./WishListProducts";
const Wishlist = () => {
  const products = useSelector(selectAllWishListProducts);
  const ProductList = withProductList(WishListProducts);
  useWishListProducts();
  console.log(products);
  return (
    <main className="py-5 font-poppins flex flex-col items-center justify-center  lg:px-0 lg:py-10">
      <div className="w-10/12">
        <WishListTopNav />
        <ProductList showDeleteButton products={products} />
        <JustForYou />
      </div>
    </main>
  );
};

export default Wishlist;
