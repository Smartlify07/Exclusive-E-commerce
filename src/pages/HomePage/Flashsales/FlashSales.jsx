import FlashSalesTimer from "./FlashSalesTimer";

const FlashSales = () => {
  return (
    <section className="flex flex-col py-20 items-center">
      <div className="md:w-full  flex flex-col gap-5">
        <header className="flex items-center gap-1">
          <span className="w-5 h-12 rounded-md bg-red"></span>
          <h3 className="text-red font-semibold text-base">Today&apos;s</h3>
        </header>

        <div className="flex items-center justify-between md:w-8/12">
          <h3 className="text-black  font-semibold md:text-[36px]">
            Flash Sales
          </h3>
          <FlashSalesTimer />
        </div>
      </div>
    </section>
  );
};

export default FlashSales;
