/* eslint-disable react/prop-types */

const AddToCartButton = ({ isHovered }) => {
  return (
    <button
      className={`absolute bg-black w-full ${
        isHovered ? "bottom-0" : "-bottom-14"
      } left-0 py-3 flex justify-center rounded-b-md transition-all `}
    >
      <p className="text-white font-medium">Add To Cart</p>
    </button>
  );
};

export default AddToCartButton;
