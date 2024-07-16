const ProductCardSkeleton = () => {
  return (
    <div className="cursor-pointer  lg:w-[270px]">
      <div className="bg-[#f5f5f5] overflow-hidden w-full relative rounded-md flex flex-col p-3 ">
        <div className="w-full  flex justify-between items-start bg-gray-50">
          <div className="w-3 h-4"></div>
          <div className="flex flex-col gap-3">
            <div className="rounded-full w-6 h-6 bg-gray-200"></div>
            <div className="rounded-full w-6 h-6 bg-gray-200"></div>
          </div>
        </div>

        <div className=" relative -top-4 self-center flex justify-center items-center lg:w-[190px] lg:h-[180px]">
          <div className="lg:w-[170px] lg:h-[129px]  object-contain" />
        </div>
      </div>

      <div className="flex flex-col mt-3 gap-1">
        <h1
          role="productName"
          className="text-black capitalize bg-gray-200 font-medium text-base w-6/12 h-3"
        ></h1>

        <div className="flex items-center gap-3">
          <p className="text-red font-medium bg-gray-200 h-2 w-[20px]"></p>
          <p className="text-gray-400 font-medium line-through bg-gray-200 h-2 w-[20px]"></p>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
