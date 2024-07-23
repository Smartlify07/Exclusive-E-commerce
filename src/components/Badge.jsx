/* eslint-disable react/prop-types */
const Badge = ({ amount }) => {
  return (
    <div className="bg-red rounded-full w-5 h-5 absolute -top-2 -right-2 text-center flex items-center justify-center lg:-top-1 lg:-right-1">
      <span className="text-white text-xs">{amount}</span>
    </div>
  );
};

export default Badge;
