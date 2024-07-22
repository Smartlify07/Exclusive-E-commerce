/* eslint-disable react/prop-types */

import { rating } from "../../../utils/functions/ratings";
import useCart from "../../hooks/useCart";
import ColorsSelect from "./ColorsSelect";
import QuantityPicker from "./QuantityPicker";
import SizeSelect from "./SizeSelect";
import Heart from "./Heart";
import DeliveryMethods from "./DeliveryMethods";

const Rightsection = ({ product }) => {
  console.log(product);

  const { cart } = useCart();

  const cartProduct = cart.find((item) => item.id === product.id);
  const stars = rating(product.stars);
  let quantity;
  if (cartProduct) {
    quantity = cartProduct.quantity;
  } else {
    quantity = 0;
  }
  return (
    <aside className="flex flex-col gap-10 lg:gap-5 lg:w-1/3  order-1 lg:order-3">
      <h1 className="text-black capitalize font-semibold font-poppins text-2xl">
        {product.name}
      </h1>

      <div className="flex wrap items-center gap-3  w-full">
        <img src={stars} alt="stars" className="w-1/2" />
        <p className="text-black text-opacity-50">({product.views} Reviews) </p>
        <p className="text-black text-opacity-50">|</p>
        <p className="text-[#00FF66]">In Stock</p>
      </div>

      <h2 className="text-2xl text-black font-normal">
        ${product.discountedPrice}
      </h2>

      <p className="text-black text-sm w-full">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
        tempora tempore amet alias nam enim vero officiis sit illum similique?{" "}
      </p>

      <div className="border w-full border-black border-opacity-40"></div>

      <ColorsSelect />
      <SizeSelect />

      <div className="flex flex-wrap items-center gap-5">
        <QuantityPicker id={product.id} product={product} quantity={quantity} />
        <button className="bg-red rounded-[4px] px-5 py-2 text-white font-medium lg:px-8">
          Buy Now
        </button>
        <Heart {...product} />
      </div>

      <DeliveryMethods />
    </aside>
  );
};

export default Rightsection;
