const DeliveryMethods = () => {
  return (
    <div className="flex flex-col mt-5 border border-black lg:mt-2">
      <div className="flex items-center gap-3 border-b border-b-black   px-2 pb-2 pt-4">
        <img src="/images/icons/icon-delivery.svg" alt="delivery-icon" />
        <div className="flex flex-col items-start ">
          <h3 className="text-black text-base font-medium">Free Delivery</h3>
          <a href="#" className="text-black text-xs font-medium underline">
            Enter your postal code for Delivery Availability
          </a>
        </div>
      </div>
      <div className="flex items-center gap-3    px-2 pb-2 pt-4">
        <img src="/images/icons/Icon-return.svg" alt="delivery-icon" />
        <div className="flex flex-col items-start ">
          <h3 className="text-black text-base font-medium">Return Delivery</h3>
          <a href="#" className="text-black text-xs font-medium ">
            Free 30 Days Delivery Returns.{" "}
            <span className="underline">Details</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeliveryMethods;
