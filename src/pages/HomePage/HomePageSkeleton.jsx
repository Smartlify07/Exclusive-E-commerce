const HomePageSkeleton = () => {
  return (
    <div className="md:w-10/12 ">
      <div className="flex justify-between gap-[30px] ">
        <aside className="flex flex-col gap-3  w-5/12">
          <div className="bg-gray-100 rounded-sm w-full h-[30px]"></div>
          <div className="bg-gray-100 rounded-sm w-full h-[30px]"></div>
          <div className="bg-gray-100 rounded-sm w-full h-[30px]"></div>
          <div className="bg-gray-100 rounded-sm w-full h-[30px]"></div>
          <div className="bg-gray-100 rounded-sm w-full h-[30px]"></div>
        </aside>
        <div className="lg:w-8/12 bg-gray-100 rounded-sm"></div>
      </div>

      <div className="bg-gray-100 rounded-sm w-full h-[400px] mt-6"></div>
    </div>
  );
};

export default HomePageSkeleton;
