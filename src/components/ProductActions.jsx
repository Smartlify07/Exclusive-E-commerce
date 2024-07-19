/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishList,
  removeFromWishList,
  selectWishListProductById,
} from "../app/wishlist/wishlistSlice";
import { BiTrash } from "react-icons/bi";
import { FaHeart, FaRegEye, FaRegHeart } from "react-icons/fa";
import { useEffect } from "react";
import useWishListProducts from "../hooks/useWishListProducts";

const ProductActions = (props) => {
  useWishListProducts();
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
    console.log(props);
    dispatch(
      addToWishList({
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
    dispatch(removeFromWishList(id));
  };

  const wishListProductId = useSelector((state) =>
    selectWishListProductById(state, id)
  );

  return (
    <div className="flex flex-col gap-2 absolute right-0 justify-self-end">
      {!props.showDeleteButton && (
        <button
          onClick={() => {
            if (wishListProductId) {
              console.log("Removed from wishlist");
              handleRemoveFromWishList();
            } else {
              handleAddToWishlist();
            }
          }}
          className="bg-white rounded-full flex items-center justify-center w-7 h-7"
        >
          {!wishListProductId && <FaRegHeart className="text-lg" />}
          {wishListProductId && <FaHeart className="fill-red" />}
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
