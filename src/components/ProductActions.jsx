const ProductActions = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="bg-white rounded-full flex items-center justify-center w-6 h-6">
        <img src="/images/icons/hearticon.svg" alt="hearticon" className="" />
      </div>
      <div className="bg-white rounded-full flex items-center justify-center w-6 h-6">
        <img
          src="/images/icons/eyeicon.svg"
          className="lg:w-[80px]"
          alt="eyeicon"
        />
      </div>
    </div>
  );
};

export default ProductActions;
