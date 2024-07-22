/* eslint-disable react/prop-types */
const BestSellingProductsList = ({ children }) => {
  return (
    <div
      className={`transition-all overflow-hidden grid-auto-fit w-full grid  lg:grid-auto-fit-lg gap-[30px] lg:gap-y-[20px] lg:gap-x-0 transform`}
      // style={{ transform: `translateX(-${currentSlide * 10}%)` }}
    >
      {children}
    </div>
  );
};

export default BestSellingProductsList;
