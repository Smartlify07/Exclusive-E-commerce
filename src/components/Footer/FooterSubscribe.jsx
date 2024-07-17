const FooterSubscribe = () => {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-white font-bold text-2xl">Exclusive</h1>
      </header>

      <p className="text-white font-medium text-[20px]">Subscribe</p>
      <p className="text-[#FAFAFA] text-base">Get 10% off your first order</p>

      <form action="" className="self-start">
        <div className="relative border self-start">
          <input
            type="text"
            placeholder="Enter your email"
            className="border bg-transparent border-white rounded-sm py-3 px-3 placeholder:text-[#fafafa] placeholder:opacity-40"
          />
          <button className="absolute right-3 top-4">
            <img src="/images/icons/sendicon.svg" alt="sendicon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default FooterSubscribe;
