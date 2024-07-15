/* eslint-disable react/prop-types */

const DiscountBadge = ({ discount }) => {
  return (
    <span className="bg-red rounded-sm text-white text-xs py-1 px-3">
      -{discount}%
    </span>
  );
};

export default DiscountBadge;
