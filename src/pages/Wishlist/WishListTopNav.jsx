import { useSelector } from "react-redux";
import { selectAllWishListProducts } from "../../app/user/userWishlistSlice";

const WishListTopNav = () => {
  const products = useSelector(selectAllWishListProducts);

  return (
    <nav className="flex items-center justify-between w-full ">
      <h1 className="text-black font-normal text-[20px]">
        {" "}
        Wishlist ({products.length})
      </h1>
      <button className="border capitalize font-medium border-opacity-50 px-3 py-3 border-black rounded-[4px] transition-colors lg:py-4 lg:px-12 hover:bg-black hover:text-white">
        Move all to bag
      </button>
    </nav>
  );
};

export default WishListTopNav;
