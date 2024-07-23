/* eslint-disable react/prop-types */
import useDiscount from "../hooks/useDiscount";
import AddToCartButton from "./Buttons/AddToCartButton";
import DiscountBadge from "./DiscountBadge";
import ProductActions from "./ProductActions";
import { useState } from "react";

const ProductCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const addHoverEffect = () => {
    setIsHovered(true);
  };
  const removeHoverEffect = () => {
    setIsHovered(false);
  };

  const actualPrice = props.actualPrice;
  const discountedPrice = props.discountedPrice;
  const discountPercentage = useDiscount({ actualPrice, discountedPrice });
  return (
    <div
      className="cursor-pointer  lg:w-[270px]"
      onMouseOut={removeHoverEffect}
      onMouseOver={() => {
        addHoverEffect();
      }}
    >
      <div className="bg-[#f5f5f5] overflow-hidden w-full relative py-6 px-3 rounded-md flex flex-col lg:p-3 ">
        <div className="w-full relative  flex justify-between items-start">
          {props.showDiscountBadge && (
            <DiscountBadge discount={discountPercentage} />
          )}
          <ProductActions
            showDeleteButton={props.showDeleteButton}
            {...props}
          />
        </div>

        <div className=" relative self-center flex justify-center items-center lg:-top-2 lg:w-[190px] lg:h-[180px]">
          <img
            src={props.image}
            className="lg:w-[170px] lg:h-[129px] object-contain"
            alt="productImg"
          />
        </div>

        <AddToCartButton {...props} isHovered={isHovered} />
      </div>

      <div className="flex flex-col mt-3 gap-1">
        <h1
          role="productName"
          className="text-black capitalize  font-medium text-base"
        >
          {props.name}
        </h1>

        <div className="flex items-center gap-3">
          <p className="text-red font-medium">$ {discountedPrice}</p>
          <p className="text-gray-400 font-medium line-through">
            $ {actualPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
