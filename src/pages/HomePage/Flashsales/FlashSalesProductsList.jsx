/* eslint-disable react/prop-types */

const FlashSalesProductsList = ({ children }) => {
  return (
    <div
      className={`transition-all overflow-hidden w-full grid grid-auto-fit  gap-[30px] transform lg:justify-items-center`}
      // style={{ transform: `translateX(-${currentSlide * 10}%)` }}
    >
      {children}
    </div>
  );
};

export default FlashSalesProductsList;
