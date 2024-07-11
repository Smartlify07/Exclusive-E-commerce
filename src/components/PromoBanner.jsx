const PromoBanner = () => {
  return (
    <section className="bg-black font-poppins md:py-[12px] md:px-[40px]  flex md:items-center md:gap-[200px] md:justify-center">
      <div className="flex items-center gap-2">
        <p className="text-white font-normal text-[14px]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>

        <a href="#" className="text-white text-sm font-semibold underline">
          Shop now
        </a>
      </div>

      <p className="text-white font-normal text-sm flex items-center gap-2">
        English
        <img src="/images/icons/dropdownicon.svg" className="  " alt="" />
      </p>
    </section>
  );
};

export default PromoBanner;
