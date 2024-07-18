const CarouselControls = () => {
  return (
    <div className="flex self-center items-center gap-3">
      <span className="bg-white opacity-50 rounded-full w-[12px] h-[12px] cursor-pointer"></span>
      <span className="bg-white opacity-50 rounded-full w-[12px] h-[12px] cursor-pointer"></span>
      <span className="bg-white opacity-50 rounded-full w-[12px] h-[12px] cursor-pointer"></span>
      <span className="bg-red rounded-full w-[12px] h-[12px] cursor-pointer border-2 border-white"></span>
      <span className="bg-white opacity-50 rounded-full w-[12px] h-[12px] cursor-pointer"></span>
    </div>
  );
};

export default CarouselControls;
