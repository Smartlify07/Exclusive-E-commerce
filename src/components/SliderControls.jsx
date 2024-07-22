/* eslint-disable react/prop-types */
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SliderControls = () => {
  return (
    <div className="hidden  items-center gap-2 justify-self-end lg:flex">
      <button className="bg-gray-300 flex items-center justify-center rounded-full w-10 h-10">
        <FaArrowLeft />
      </button>
      <button className="bg-gray-300 flex items-center justify-center rounded-full w-10 h-10">
        <FaArrowRight />
      </button>
    </div>
  );
};

export default SliderControls;
