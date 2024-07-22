const ColorsSelect = () => {
  return (
    <div className="flex items-center gap-5">
      <p className="text-black font-normal text-[20px]">Colours:</p>
      <div className="flex items-center gap-2">
        <button className="rounded-full bg-blue-200 w-5 h-5"></button>
        <button className="rounded-full bg-red w-5 h-5"></button>
      </div>
    </div>
  );
};

export default ColorsSelect;
