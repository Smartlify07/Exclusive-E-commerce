import { Link } from "react-router-dom";

const FeaturedProduct = () => {
  return (
    <div className="flex item-center justify-between">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <img src="/images/icons/applegrayicon.svg" alt="appleicon" />
          <p className="iPhone 14 Series text-text1 font-normal text-base">
            iPhone 14 series
          </p>
        </div>
        <h1 className="md:text-5xl md:leading-[3.5rem] font-semibold text-text1">
          Up to 10% off Voucher
        </h1>
        <Link className="text-text1 font-normal py-1 underline flex items-center gap-2">
          Shop Now <img src="/images/icons/arrowicon.svg" alt="arrowicon" />
        </Link>
      </div>

      <div className="md:w-8/12">
        <img
          src="/images/iphone.png"
          className="md:w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default FeaturedProduct;