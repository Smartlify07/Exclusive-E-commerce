import { Link } from "react-router-dom";

const CategoriesLinks = () => {
  return (
    <aside className="border-r-[0.5px] border-r-[#b3b3b3]  md:pr-16">
      <ul className="flex flex-col gap-4 text-black text-base font-normal">
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
    </aside>
  );
};

export default CategoriesLinks;
