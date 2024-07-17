/* eslint-disable react/prop-types */

const ProductList = ({ children }) => {
  return (
    <div className={`container overflow-x-hidden w-full mx-auto py-10 `}>
      {children}
    </div>
  );
};

export default ProductList;
