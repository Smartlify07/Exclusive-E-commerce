import Ribbon from "../../components/Ribbon";

const JustForYouTopNav = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Ribbon />
        <h3 className="text-lg font-normal text-black lg:text-[20px]">
          Just For You
        </h3>
      </div>

      <button className="py-3 px-6 border border-black border-opacity-50 rounded-[4px] font-medium">
        See All
      </button>
    </nav>
  );
};

export default JustForYouTopNav;
