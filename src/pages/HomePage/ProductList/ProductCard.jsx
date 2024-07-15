/* eslint-disable react/prop-types */
import ProductActions from "../../../components/ProductActions";
import AddToCartButton from "../../../components/Buttons/AddToCartButton";
import useDiscount from "../../../hooks/useDiscount";
import DiscountBadge from "../../../components/DiscountBadge";
import { useState } from "react";

const ProductCard = ({ name, actualPrice, image, discountedPrice }) => {
  const [isHovered, setIsHovered] = useState(false);
  const addHoverEffect = () => {
    setIsHovered(true);
  };
  const removeHoverEffect = () => {
    setIsHovered(false);
  };

  const discountPercentage = useDiscount({ actualPrice, discountedPrice });
  return (
    <div
      className="cursor-pointer  lg:w-[270px]"
      onMouseOut={removeHoverEffect}
      onMouseOver={addHoverEffect}
    >
      <div className="bg-[#f5f5f5] overflow-hidden w-full relative rounded-md flex flex-col p-3 ">
        <div className="w-full  flex justify-between items-start">
          <DiscountBadge discount={discountPercentage} />
          <ProductActions />
        </div>

        <div className=" relative -top-4 self-center flex justify-center items-center lg:w-[190px] lg:h-[180px]">
          <img
            src={image}
            className="lg:w-[170px] lg:h-[129px] object-contain"
            alt="productImg"
          />
        </div>

        <AddToCartButton isHovered={isHovered} />
      </div>

      <div className="flex flex-col mt-3 gap-1">
        <h1
          role="productName"
          className="text-black capitalize  font-medium text-base"
        >
          {name}
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
