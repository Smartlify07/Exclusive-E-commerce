import { Link } from "react-router-dom";

const FooterQuickLinks = () => {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-[20px] font-semibold text-white">Quick Links</h1>
      </header>

      <div className="flex flex-col gap-4">
        <Link className="capitalize text-[#fafafa] text-base" to={"/privacy"}>
          Privacy Policy
        </Link>
        <Link className="capitalize text-[#fafafa] text-base" to={"/terms"}>
          Terms of use
        </Link>
        <Link className="capitalize text-[#fafafa] text-base" to={"/faq"}>
          FAQ
        </Link>
        <Link className="capitalize text-[#fafafa] text-base" to={"/Contact"}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default FooterQuickLinks;
