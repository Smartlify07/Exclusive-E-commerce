import { useDispatch } from "react-redux";
import { addToWishList } from "../app/wishlist/wishlistSlice";

const ProductActions = (props) => {
  const dispatch = useDispatch();
  const handleAddToWishlist = (props) => {
    dispatch(addToWishList(props));
  };

  return (
    <div className="flex flex-col gap-2 absolute right-0 justify-self-end">
      <button
        onClick={() => handleAddToWishlist(props)}
        className="bg-white rounded-full flex items-center justify-center w-6 h-6"
      >
        <img src="/images/icons/hearticon.svg" alt="hearticon" className="" />
      </button>
      <button className="bg-white rounded-full flex items-center justify-center w-6 h-6">
        <img
          src="/images/icons/eyeicon.svg"
          className="lg:w-[80px]"
          alt="eyeicon"
        />
      </button>
    </div>
  );
};

export default ProductActions;
