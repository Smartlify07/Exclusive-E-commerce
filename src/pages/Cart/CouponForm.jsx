const CouponForm = () => {
  return (
    <form className="flex w-full items-center gap-3 md:w-2/5 lg:flex-row lg:w-1/2">
      <input
        type="text"
        className="border w-2/4 py-3 px-4  border-black rounded-[4px] placeholder:text-black md:placeholder:text-sm placeholder:text-opacity-50 lg:w-1/3"
        placeholder="Coupon code"
      />
      <button className="bg-red w-2/4 py-3 px-2 text-sm rounded-[4px] text-white font-medium lg:w-1/2 lg:text-base lg:px-12">
        Apply Coupon
      </button>
    </form>
  );
};

export default CouponForm;
