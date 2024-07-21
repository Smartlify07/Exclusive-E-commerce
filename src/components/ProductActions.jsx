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
import { useState } from "react";
import { selectAllProducts } from "../app/products/productsSlice";
import { toast } from "react-toastify";
import { uid } from "uid";

const ProductActions = (props) => {
  const user = useSelector(selectAuth);
  let userId;
  if (user) {
    userId = user.userId;
  }
  useWishListProducts(); // get wishlist products on refresh
  const dispatch = useDispatch();
  const [wishListed, setWishListed] = useState(false);

  const products = useSelector(selectAllProducts);
  const { id } = props;
  const handleAddToWishlist = async () => {
    dispatch(
      await addToWishList({
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
    await notify("Added to wishlist");
  };

  const handleRemoveFromWishList = async () => {
    await dispatch(removeFromWishList({ userId, id })).unwrap();
    notify("Removed from wishlist");
  };

  const wishListProduct = useSelector((state) =>
    selectWishListProductById(state, id)
  );

  let wishListProductId;
  if (wishListProduct) {
    wishListProductId = wishListProduct.id;
  }

  const toggleWishListed = (id) => {
    const product = products.find((product) => product.id === id);
    console.log(product);
    if (product) {
      console.log(product);
      setWishListed((prevState) => !prevState);
    }
  };

  const notify = (message) => {
    const toastId = uid(5);

    toast.success(message, {
      toastId,
    });
  };

  let heart = null;
  if (wishListed || wishListProductId) {
    heart = <FaHeart className="text-lg fill-red" />;
  } else if (wishListed === false || !wishListProductId) {
    console.log("Removed");
    heart = <FaRegHeart className="text-lg" />;
  }

  return (
    <div className="flex flex-col gap-2 absolute right-0 justify-self-end">
      {!props.showDeleteButton && (
        <button
          onClick={() => {
            toggleWishListed(id);

            if (wishListProduct) {
              handleRemoveFromWishList();
            } else {
              handleAddToWishlist();
            }
          }}
          className="bg-white rounded-full flex items-center justify-center w-7 h-7"
        >
          {heart}
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
