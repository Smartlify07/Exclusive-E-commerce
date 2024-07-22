/* eslint-disable react/prop-types */
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  addToWishList,
  removeFromWishList,
} from "../../app/user/userWishlistSlice";
import useCurrentUser from "../../hooks/useCurrentUser";
import { notify } from "../../../utils/functions/notify";
import useWishListProducts from "../../hooks/useWishListProducts";

const Heart = (props) => {
  const dispatch = useDispatch();
  const { userId } = useCurrentUser();
  const { wishlist } = useWishListProducts();
  const wishListProduct = wishlist.find((item) => item.id === props.id);
  console.log(wishListProduct);
  const handleAddToWishlist = async () => {
    await dispatch(
      addToWishList({
        userId,
        id: props.id,
        saleStart: props.saleStart,
        saleEnd: props.saleEnd,
        name: props.name,
        discountedPrice: props.discountedPrice,
        actualPrice: props.actualPrice,
        image: props.image,
        revenue: props.revenue,
        unitSold: props.unitSold,
        likes: props.likes,
        views: props.views,
        stars: props.stars,
      })
    ).unwrap();
    notify("Added to wishlist");
  };

  const handleRemoveFromWishList = async () => {
    await dispatch(removeFromWishList({ userId, id: props.id })).unwrap();
    notify("Removed from wishlist");
  };
  return (
    <button
      onClick={() => {
        if (wishListProduct) {
          handleRemoveFromWishList();
        } else {
          handleAddToWishlist();
        }
      }}
      className="border border-black py-2 px-2 rounded-[4px]"
    >
      {!wishListProduct && <FaRegHeart className="text-2xl text-black" />}
      {wishListProduct && <FaHeart className="text-2xl fill-red" />}
    </button>
  );
};

export default Heart;
