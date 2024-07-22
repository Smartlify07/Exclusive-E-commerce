/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../app/auth/authSlice";
import { addToCart } from "../../app/user/cartSlice";
import { notify } from "../../../utils/functions/notify";

const AddToCartButton = (props) => {
  const user = useSelector(selectAuth);
  const dispatch = useDispatch();
  let userId;
  if (user) {
    userId = user.userId;
  }

  const { id } = props;

  const handleAddToCart = async () => {
    console.log(props.quantity);

    await dispatch(
      addToCart({
        userId,
        id,
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
        quantity: 1,
      })
    ).unwrap();

    notify("Added to cart");
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`absolute bg-black w-full ${
        props.isHovered ? "bottom-0" : "-bottom-14"
      } left-0 py-3 flex justify-center rounded-b-md transition-all `}
    >
      <p className="text-white font-medium">Add To Cart</p>
    </button>
  );
};

export default AddToCartButton;
