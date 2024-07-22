const SizeSelect = () => {
  return (
    <div className="flex items-center gap-5">
      <p className="text-[20px]">Sizes: </p>
      <div className="flex items-center gap-3">
        <div className="border w-7 text-sm font-medium flex items-center justify-center h-7 rounded-md">
          XS
        </div>
        <div className="border w-7 text-sm font-medium flex items-center justify-center h-7 rounded-md">
          S
        </div>
        <div className="border w-7 text-sm font-medium flex items-center justify-center h-7 rounded-md">
          M
        </div>
        <div className="border w-7 text-sm font-medium flex items-center justify-center h-7 rounded-md">
          L
        </div>
        <div className="border w-7 text-sm font-medium flex items-center justify-center h-7 rounded-md">
          XL
        </div>
      </div>
    </div>
  );
};

export default SizeSelect;
