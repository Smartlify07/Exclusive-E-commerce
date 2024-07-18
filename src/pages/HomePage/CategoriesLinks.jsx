import { Link } from "react-router-dom";

const CategoriesLinks = () => {
  return (
    <aside className="border-r-[0.5px] border-r-[#b3b3b3]  md:pr-16 flex flex-col items-center">
      <div className="flex w-10/12 items-center lg:w-full lg:items-stretch">
        <ul className="flex flex-wrap items-center justify-center  gap-4 text-black text-base font-normal md:flex-col md:items-stretch md:justify-start lg:w-auto">
          <li>
            <Link>Women&apos;s Fashion</Link>
          </li>
          <li>
            <Link>Men&apos;s Fashion</Link>
          </li>
          <li>
            <Link>Electronics</Link>
          </li>
          <li>
            <Link>Home & Lifestyle</Link>
          </li>
          <li>
            <Link>Medicine</Link>
          </li>
          <li>
            <Link>Sport & Outdoor</Link>
          </li>
          <li>
            <Link>Baby&apos;s & Toys</Link>
          </li>
          <li>
            <Link>Groceries & Pets</Link>
          </li>
          <li>
            <Link>Health & Beauty</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default CategoriesLinks;
