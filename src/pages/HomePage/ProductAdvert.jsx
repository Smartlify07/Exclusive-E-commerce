import { Link } from "react-router-dom";

const ProductAdvert = () => {
  return (
    <div className="w-full bg-black flex items-center py-16 px-10">
      <div className="flex  flex-col gap-3">
        <h3 className="text-[#00FF66] font-semibold text-sm">Categories</h3>
        <h1 className="text-white font-semibold text-5xl w-9/12">
          Enhance Your Music Experience
        </h1>

        <div className="flex items-center gap-6 mt-2">
          <div className="rounded-full w-[62px] h-[62px] py-2 flex justify-center items-center gap-0 flex-col bg-white text-black">
            <span className="font-semibold">23</span>
            <span className="font-normal text-[11px]">hours</span>
          </div>
          <div className="rounded-full w-[62px] h-[62px] flex justify-center items-center gap-0 flex-col bg-white text-black">
            <span className="font-semibold">4</span>
            <span className="font-normal text-[11px]">days</span>
          </div>
          <div className="rounded-full w-[62px] h-[62px] flex justify-center items-center gap-0 flex-col bg-white text-black">
            <span className="font-semibold">23</span>
            <span className="font-normal text-[11px]">minutes</span>
          </div>
          <div className="rounded-full w-[62px] h-[62px] flex justify-center items-center gap-0 flex-col bg-white text-black">
            <span className="font-semibold">23</span>
            <span className="font-normal text-[11px]">seconds</span>
          </div>
        </div>

        <Link
          to={""}
          className="bg-[#00FF66] self-start rounded-sm mt-4 text-white font-semibold px-12 py-4"
        >
          Buy Now!
        </Link>
      </div>

      <div className="w-6/12 relative">
        <div className="absolute   hidden  bg-[#d9d9d9] blur-lg bg-opacity-10 lg:block lg:right-[0%] rounded-full lg:-top-24  lg:h-[300px]  lg:w-[300px]"></div>
        <img src="/images/JBL_BOOMBOX.png" alt="boombox" />
      </div>
    </div>
  );
};

export default ProductAdvert;
