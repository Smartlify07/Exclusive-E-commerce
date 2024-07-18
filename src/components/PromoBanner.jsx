const PromoBanner = () => {
  return (
    <section className="bg-black w-full font-poppins py-3 px-[20px] md:py-3 md:px-[40px]  flex flex-col md:flex-row md:items-center md:gap-[200px] md:justify-center">
      <div className="flex flex-col items-center gap-2 lg:flex-row">
        <p className="text-white text-center font-normal text-[14px] lg:text-left">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>

        <a href="#" className="text-white text-sm font-semibold underline">
          Shop now
        </a>
      </div>

      <p className="text-white font-normal text-sm text-center mt-2 self-center flex items-center gap-2 lg:mt-0 lg:self-start">
        English
        <img src="/images/icons/dropdownicon.svg" className="  " alt="" />
      </p>
    </section>
  );
};

export default PromoBanner;
