const SearchBar = () => {
  return (
    <div className="relative order-2 lg:order-1">
      <input
        type="text"
        className="bg-secondary3 w-full text-black py-[12px] pl-5 pr-10 rounded-md text-xs outline-1 outline-gray-400"
        placeholder="What are you looking for?"
      />

      <img
        src="/images/icons/searchicon.svg"
        alt="searchicon"
        className="w-4 absolute top-3 right-2"
      />
    </div>
  );
};

export default SearchBar;
