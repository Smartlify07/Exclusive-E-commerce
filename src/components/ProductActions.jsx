/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { BiTrash } from "react-icons/bi";
import { FaHeart, FaRegEye, FaRegHeart } from "react-icons/fa";
import useWishListProducts from "../hooks/useWishListProducts";
import {
  addToWishList,
  selectWishListProductById,
  removeFromWishList,
} from "../app/user/userWishlistSlice";
import { selectAuth } from "../app/auth/authSlice";

const ProductActions = (props) => {
  const user = useSelector(selectAuth);
  let userId;
  if (user) {
    userId = user.userId;
  }
  useWishListProducts(); // get wishlist products on refresh
  const dispatch = useDispatch();
  const {
    saleStart,
    saleEnd,
    name,
    discountedPrice,
    actualPrice,
    image,
    revenue,
    unitSold,
    likes,
    id,
    views,
    stars,
  } = props;
  const handleAddToWishlist = () => {
    dispatch(
      addToWishList({
        userId,
        id,
        saleStart,
        saleEnd,
        name,
        discountedPrice,
        actualPrice,
        image,
        revenue,
        unitSold,
        likes,
        views,
        stars,
      })
    );
  };

  const handleRemoveFromWishList = () => {
    dispatch(removeFromWishList({ userId, id }));
  };

  const wishListProduct = useSelector((state) =>
    selectWishListProductById(state, id)
  );

  let wishListProductId;
  if (wishListProduct) {
    wishListProductId = wishListProduct.id;
  }

  return (
    <div className="flex flex-col gap-2 absolute right-0 justify-self-end">
      {!props.showDeleteButton && (
        <button
          onClick={() => {
            if (wishListProduct) {
              handleRemoveFromWishList();
            } else {
              handleAddToWishlist();
            }
          }}
          className="bg-white rounded-full flex items-center justify-center w-7 h-7"
        >
          {!wishListProductId && <FaRegHeart className="text-lg" />}
          {wishListProductId && <FaHeart className="fill-red text-lg" />}
        </button>
      )}
      {!props.showDeleteButton && (
        <button className="bg-white rounded-full flex items-center justify-center w-7 h-7">
          <FaRegEye className="text-lg text-black" />
        </button>
      )}
      {props.showDeleteButton && (
        <button
          onClick={() => handleRemoveFromWishList()}
          className="bg-white rounded-full flex items-center justify-center w-7 h-7"
        >
          <BiTrash className="text-black text-lg" />
        </button>
      )}
    </div>
  );
};

export default ProductActions;
