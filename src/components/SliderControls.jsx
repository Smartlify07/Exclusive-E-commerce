/* eslint-disable react/prop-types */
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SliderControls = ({ leftSlide, rightSlide }) => {
  return (
    <div className="flex items-center gap-2 justify-self-end ">
      <button className="bg-gray-300 flex items-center justify-center rounded-full w-10 h-10">
        <FaArrowLeft onClick={() => leftSlide()} />
      </button>
      <button className="bg-gray-300 flex items-center justify-center rounded-full w-10 h-10">
        <FaArrowRight onClick={() => rightSlide()} />
      </button>
    </div>
  );
};

export default SliderControls;
