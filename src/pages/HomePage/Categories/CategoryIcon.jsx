/* eslint-disable react/prop-types */
const CategoryIcon = ({ imgSrc, name }) => {
  return (
    <div className="rounded-sm border cursor-pointer  border-gray-300 flex flex-col gap-2 items-center py-5 transition-colors lg:w-[170px] text-black hover:bg-red hover:text-white">
      <img src={`/images/icons/${imgSrc}.svg`} alt={name} />
      <p className=" text-base capitalize">{name}</p>
    </div>
  );
};

export default CategoryIcon;
