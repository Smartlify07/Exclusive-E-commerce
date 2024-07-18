import Ribbon from "../../../components/Ribbon";
import SliderControls from "../../../components/SliderControls";
import CategoryIcon from "./CategoryIcon";

const Categories = () => {
  const categories = [
    {
      name: "phones",
      icon: "phoneicon",
    },
    {
      name: "computers",
      icon: "computericon",
    },
    {
      name: "smartwatches",
      icon: "watchicon",
    },
    {
      name: "headphones",
      icon: "headphoneicon",
    },
    {
      name: "gaming",
      icon: "gamepadicon",
    },
  ];

  const renderedCategoryIcons = (
    <div className="grid grid-auto-fit-lg  items-center justify-between mt-16 gap-[30px] lg:gap-0 lg:justify-items-center lg:grid-auto-fit-xs ">
      {categories.map((category, index) => (
        <CategoryIcon name={category.name} imgSrc={category.icon} key={index} />
      ))}
    </div>
  );

  return (
    <section className="py-10 flex flex-col items-center">
      <div className="w-10/12 lg:w-full">
        <header className="flex items-center gap-4">
          <Ribbon />
          <h1 className="text-red font-semibold text-base">Categories</h1>
        </header>

        <div className="flex items-center justify-between mt-5">
          <h1 className="text-black font-semibold capitalize text-4xl">
            Browse by category
          </h1>

          <SliderControls />
        </div>
        {renderedCategoryIcons}
      </div>
    </section>
  );
};

export default Categories;
