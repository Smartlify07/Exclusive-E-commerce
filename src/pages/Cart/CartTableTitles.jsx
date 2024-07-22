const CartTableTitles = () => {
  return (
    <thead className="text-base font-normal text-black font-poppins capitalize bg-white drop-shadow-lg">
      <tr className=" overflow-scroll">
        <th scope="col" className="px-6  py-5 font-normal text-sm lg:text-base">
          Product
        </th>
        <th
          scope="col"
          className="px-6   py-5 text-sm  font-normal lg:text-base"
        >
          Price
        </th>
        <th scope="col" className="px-6 py-5 font-normal text-sm lg:text-base">
          Quantity
        </th>
        <th scope="col" className="px-6 py-5 font-normal text-sm lg:text-base">
          Subtotal
        </th>
      </tr>
    </thead>
  );
};

export default CartTableTitles;
