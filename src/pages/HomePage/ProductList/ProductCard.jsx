import { useState } from "react";

const ProductCard = ({
  name,
  actualPrice,
  image,
  discountedPrice,
  discountPercentage,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleIsHovered = () => {
    setIsHovered(true);
  };

  return (
    <div
      className="cursor-pointer"
      onMouseOut={() => setIsHovered(false)}
      onMouseOver={handleIsHovered}
    >
      <div className="bg-[#f5f5f5] overflow-hidden relative rounded-md flex flex-col p-3 ">
        <div className="w-full  flex justify-between items-start">
          <span className="bg-red rounded-sm text-white text-xs py-1 px-2">
            -50%
          </span>

          <div className="flex flex-col gap-2 ">
            <div className="bg-white rounded-full flex items-center justify-center w-6 h-6">
              <img
                src="/images/icons/hearticon.svg"
                alt="hearticon"
                className=""
              />
            </div>
            <div className="bg-white rounded-full flex items-center justify-center w-6 h-6">
              <img
                src="/images/icons/eyeicon.svg"
                className="lg:w-[80px]"
                alt="eyeicon"
              />
            </div>
          </div>
        </div>

        <div className=" relative -top-10 self-center flex items-center lg:w-[190px] lg:h-[180px]">
          <img src={image} className="w-full object-contain" alt="productImg" />
        </div>

        <button
          className={`absolute bg-black w-full ${
            isHovered ? "bottom-0" : "-bottom-14"
          } left-0 py-3 flex justify-center rounded-b-md transition-all `}
        >
          <p className="text-white font-medium">Add To Cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
