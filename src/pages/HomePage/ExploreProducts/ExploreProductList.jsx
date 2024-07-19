/* eslint-disable react/prop-types */

const ExploreProductList = ({ children }) => {
  return (
    <div
      className={`transition-all w-full grid   grid-auto-fit gap-[30px] transform lg:grid-auto-fit-lg lg:justify-items-center`}
    >
      {children}
    </div>
  );
};

export default ExploreProductList;
